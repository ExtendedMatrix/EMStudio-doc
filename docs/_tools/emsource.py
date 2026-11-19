"""Read EMStudio's sources for the generated reference pages — read only.

The manual describes one version of EMStudio. The generators read the files of
an EMStudio checkout given as an argument; with ``--ref`` (a tag such as
``v1.6.0-dev.136``) they read that version through ``git show``, whatever the
checkout's working tree holds, and write nothing into it.

Two readers live here:

* ``parse_ts_value`` — a small reader for the literal data of a TypeScript
  module (objects, arrays, strings, calls of the helpers ``cmd()``/``os()``,
  spreads, ``as Type``), enough for ``menu-table.ts``. It refuses what it does
  not know rather than guessing.
* ``english_labels`` — the English dictionary of ``i18n.ts`` (``const EN``),
  string concatenations included.
"""

import json
import os
import re
import subprocess


class Source:
    """A file of EMStudio at a path, in the working tree or at a git ref."""

    def __init__(self, root, ref=None):
        self.root = os.path.abspath(root)
        self.ref = ref
        if not os.path.isdir(os.path.join(self.root, 'frontend', 'src')):
            raise SystemExit(f'{self.root}: not an EMStudio checkout (no frontend/src)')

    def read(self, rel):
        if self.ref:
            return subprocess.run(['git', '-C', self.root, 'show', f'{self.ref}:{rel}'],
                                  check=True, capture_output=True, text=True).stdout
        with open(os.path.join(self.root, rel), encoding='utf-8') as fh:
            return fh.read()

    def version(self):
        return json.loads(self.read('frontend/package.json'))['version']


# ── a reader for TypeScript literals ────────────────────────────────────────

_TOKEN = re.compile(r'''
    (?P<ws>\s+|//[^\n]*|/\*.*?\*/)
  | (?P<str>"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')
  | (?P<spread>\.\.\.)
  | (?P<ident>[A-Za-z_$][\w$]*)
  | (?P<num>\d+(?:\.\d+)?)
  | (?P<punct>[{}\[\]():,;=<>|.?+])
''', re.VERBOSE | re.DOTALL)


def _tokens(text):
    pos, out = 0, []
    while pos < len(text):
        m = _TOKEN.match(text, pos)
        if not m:
            raise ValueError(f'cannot read the source at: {text[pos:pos + 40]!r}')
        pos = m.end()
        if m.lastgroup != 'ws':
            out.append((m.lastgroup, m.group()))
    return out


def _js_string(lit):
    body = lit[1:-1]
    if lit[0] == "'":
        body = body.replace('\\\'', "'").replace('"', '\\"')
    return json.loads('"' + body + '"')


class _Reader:
    def __init__(self, toks, names, calls):
        self.t, self.i, self.names, self.calls = toks, 0, names, calls

    def peek(self, k=0):
        return self.t[self.i + k] if self.i + k < len(self.t) else (None, None)

    def take(self, value=None):
        kind, v = self.t[self.i]
        if value is not None and v != value:
            raise ValueError(f'expected {value!r}, found {v!r}')
        self.i += 1
        return kind, v

    def value(self):
        kind, v = self.peek()
        if v == '{':
            out = self.obj()
        elif v == '[':
            out = self.arr()
        elif kind == 'str':
            self.take()
            out = _js_string(v)
        elif kind == 'num':
            self.take()
            out = float(v) if '.' in v else int(v)
        elif kind == 'ident':
            self.take()
            if v in ('true', 'false'):
                out = v == 'true'
            elif self.peek()[1] == '(':
                self.take('(')
                args = []
                while self.peek()[1] != ')':
                    args.append(self.value())
                    if self.peek()[1] == ',':
                        self.take(',')
                self.take(')')
                if v not in self.calls:
                    raise ValueError(f'unknown helper {v}()')
                out = self.calls[v](*args)
            elif v in self.names:
                out = self.names[v]
            else:
                raise ValueError(f'unknown name {v}')
        else:
            raise ValueError(f'unexpected {v!r}')
        if self.peek()[1] == 'as':          # `{ ...sep, only: [...] } as SepRow`
            self.take('as')
            self.take()
        return out

    def obj(self):
        self.take('{')
        out = {}
        while self.peek()[1] != '}':
            if self.peek()[0] == 'spread':
                self.take()
                out.update(self.value())
            else:
                kind, key = self.take()
                key = _js_string(key) if kind == 'str' else key
                self.take(':')
                out[key] = self.value()
            if self.peek()[1] == ',':
                self.take(',')
        self.take('}')
        return out

    def arr(self):
        self.take('[')
        out = []
        while self.peek()[1] != ']':
            if self.peek()[0] == 'spread':
                self.take()
                out.extend(self.value())
            else:
                out.append(self.value())
            if self.peek()[1] == ',':
                self.take(',')
        self.take(']')
        return out


def const_value(text, name, names=None, calls=None):
    """The literal assigned to ``const NAME`` (type annotation skipped)."""
    m = re.search(r'(?:export\s+)?const\s+' + re.escape(name) + r'\b[^=]*=', text)
    if not m:
        raise ValueError(f'const {name} not found')
    rest = text[m.end():]
    r = _Reader(_tokens(_balanced(rest)), names or {}, calls or {})
    return r.value()


def _balanced(text):
    """The first complete literal of ``text`` (up to its closing bracket or ``;``)."""
    depth, i, n = 0, 0, len(text)
    while i < n:
        c = text[i]
        if c in '"\'':
            j = i + 1
            while text[j] != c:
                j += 2 if text[j] == '\\' else 1
            i = j
        elif text.startswith('//', i):
            i = text.index('\n', i)
        elif text.startswith('/*', i):
            i = text.index('*/', i) + 1
        elif c in '{[(':
            depth += 1
        elif c in '}])':
            depth -= 1
        elif c == ';' and depth == 0:
            return text[:i]
        i += 1
    return text


# ── the English labels ──────────────────────────────────────────────────────

_ENTRY = re.compile(r'^\s*"([^"]+)":\s*((?:"(?:[^"\\]|\\.)*"\s*(?:\+\s*)?)+),?\s*$', re.MULTILINE)
_LIT = re.compile(r'"(?:[^"\\]|\\.)*"')


def english_labels(i18n_text):
    """``{key: English text}`` from the ``const EN: Dict = { … };`` block."""
    start = i18n_text.index('const EN: Dict = {')
    end = i18n_text.index('\n};', start)
    block = i18n_text[start:end]
    # a value may open on the line after its key, and continue with `+ "…"`
    block = re.sub(r':\s*\n\s*"', ': "', block)
    block = re.sub(r'"\s*\n\s*\+\s*"', '" + "', block)
    labels = {}
    for m in _ENTRY.finditer(block):
        labels[m.group(1)] = ''.join(json.loads(s) for s in _LIT.findall(m.group(2)))
    return labels


# ── writing reStructuredText ────────────────────────────────────────────────

def rst_text(s):
    """Plain text safe inside a table cell: inline markup and list markers escaped."""
    s = re.sub(r'([\\`*_|])', r'\\\1', s)
    if re.match(r'^([-+*•]|\d+[.)]|#\.)(\s|$)', s):
        s = '\\' + s
    return s


def rst_kbd(keys):
    """Keys as :kbd: roles, one per key group separated by « · »."""
    return ' · '.join(f':kbd:`{k.strip()}`' for k in keys.split('·') if k.strip())


def list_table(header, rows, widths):
    out = ['.. list-table::', '   :header-rows: 1', f'   :widths: {" ".join(map(str, widths))}', '']
    for row in [header] + rows:
        for j, cell in enumerate(row):
            out.append(f'   {"*" if j == 0 else " "} - {cell if cell else "—"}')
    return '\n'.join(out) + '\n'


def banner(tool, src):
    where = f'tag {src.ref}' if src.ref else 'the working tree'
    return (f'..\n   GENERATED by docs/_tools/{tool} from EMStudio {src.version()} ({where}).\n'
            f'   Do not edit by hand: regenerate (docs/_tools/README.md).\n\n')


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as fh:
        fh.write(text)
    print(f'wrote {path}')
