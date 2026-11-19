"""Fill the catalogues of each language with the labels of EMStudio's interface.

    python docs/_tools/ui_terms.py ~/Documents/GitHub/EMStudio --ref v1.6.0-dev.136
    python docs/_tools/ui_terms.py ~/Documents/GitHub/EMStudio --ref v1.6.0-dev.136 -l de -l fr

A translator should find in the manual the words on the screen. Many strings of
the manual are nothing but a label of the interface: a heading named after a
menu, a cell of the generated tables of menus and shortcuts, a command written
in bold, a menu path, the description EMStudio shows when the pointer rests on a
command. For each of them this tool writes, in every language's catalogue
(``docs/locale/<lang>/LC_MESSAGES/*.po``), the label of that language taken from
``frontend/src/i18n.ts``: the same dictionary the application draws.

* Only empty translations are filled; a translator's work is never touched.
* A string is filled only when the whole of it is a label (or a path of labels,
  ``A ▸ B``, or a label in bold); sentences are left to the translator.
* The entry is marked *fuzzy* when the context is uncertain: the English label
  has several translations in the dictionary, or the string stands in running
  text where it might be an ordinary word (a heading, a tab, a list item)
  rather than the label itself. Sphinx leaves fuzzy entries out of the build
  until a translator confirms them; the generated tables of menus and
  shortcuts are filled without the mark, since every cell there is a label.
* A language whose dictionary lacks a key shows the English label in the
  application, and the entry stays empty here.
"""

import argparse
import collections
import glob
import json
import os
import re
import sys

from babel.messages.pofile import read_po, write_po

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from emsource import Source, _tokens, rst_text  # noqa: E402

LANGS = ['it', 'de', 'el', 'he', 'es', 'pl', 'ro', 'fr']
# The catalogues whose every short string is a cell of a generated table.
TABLE_PAGES = {'reference/menus', 'reference/shortcuts'}
PATH_SEP = ' ▸ '


def _js_string(lit):
    """A JavaScript string literal: JSON's escapes, and ``\\'`` as JS allows it."""
    body = lit[1:-1].replace("\\'", "'")
    if lit[0] == "'":
        body = body.replace('"', '\\"')
    return json.loads('"' + body + '"')


def dictionary(i18n_text, name):
    """``{key: text}`` of the ``const NAME: Dict = { … };`` block of i18n.ts.

    Read with the tokenizer of emsource, so that two entries on one line, a
    value continued with ``+``, and comments holding quotes are all read."""
    start = i18n_text.index(f'const {name}: Dict = {{')
    end = i18n_text.index('\n};', start)
    toks = _tokens(i18n_text[i18n_text.index('{', start) + 1:end])
    out, i = {}, 0
    while i < len(toks):
        if (toks[i][0] == 'str' and i + 2 < len(toks) and toks[i + 1][1] == ':'
                and toks[i + 2][0] == 'str'):
            key, j, parts = _js_string(toks[i][1]), i + 2, []
            while j < len(toks) and toks[j][0] == 'str':
                parts.append(_js_string(toks[j][1]))
                if j + 1 < len(toks) and toks[j + 1][1] == '+':
                    j += 2
                else:
                    j += 1
                    break
            out[key] = ''.join(parts)
            i = j
        else:
            i += 1
    return out


def label_map(en, target):
    """``{English label: Counter of its translations}`` over the keys both share."""
    out = collections.defaultdict(collections.Counter)
    for key, text in en.items():
        if key in target and target[key].strip() and '{' not in text:
            out[text][target[key]] += 1
    return out


def _unescape(s):
    return re.sub(r'\\([\\`*_|])', r'\1', s)


def translate(msgid, labels):
    """``(msgstr, uncertain)`` when the whole of ``msgid`` is a label, else None."""
    bold = re.fullmatch(r'\*\*(.+)\*\*', msgid)
    lit = re.fullmatch(r'``(.+)``', msgid)
    inner = bold.group(1) if bold else lit.group(1) if lit else msgid
    plain = _unescape(inner)
    if not re.search(r'[A-Za-z]', plain):
        return None
    parts = plain.split(PATH_SEP)
    out, uncertain = [], False
    for part in parts:
        found = labels.get(part)
        if not found:
            return None
        best, n = found.most_common(1)[0]
        uncertain |= len(found) > 1
        out.append(best)
    text = PATH_SEP.join(out)
    if bold:
        return f'**{text}**', uncertain
    if lit:
        return f'``{text}``', uncertain
    return rst_text(text), uncertain


def fill(po_path, page, labels):
    with open(po_path, 'rb') as fh:
        catalog = read_po(fh)
    filled = fuzzy = 0
    for msg in catalog:
        if not msg.id or msg.string:
            continue
        got = translate(msg.id, labels)
        if not got:
            continue
        msg.string, uncertain = got
        marked = msg.id.startswith('**') or msg.id.startswith('``')
        if uncertain or not (page in TABLE_PAGES or marked or PATH_SEP in msg.id):
            msg.flags.add('fuzzy')
            fuzzy += 1
        filled += 1
    if filled:
        with open(po_path, 'wb') as fh:
            write_po(fh, catalog, width=76)
    return filled, fuzzy


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    ap.add_argument('emstudio', help='an EMStudio checkout (read only)')
    ap.add_argument('--ref', help='read this tag or commit through git show')
    ap.add_argument('-l', '--lang', action='append', help='a language (default: all eight)')
    ap.add_argument('-d', '--locale-dir', default=os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'locale'))
    ap.add_argument('--dump', help='also write {lang: {English: label}} as JSON here')
    args = ap.parse_args()

    text = Source(args.emstudio, args.ref).read('frontend/src/i18n.ts')
    en = dictionary(text, 'EN')
    dump = {}
    for lang in args.lang or LANGS:
        labels = label_map(en, dictionary(text, lang.upper()))
        dump[lang] = {k: v.most_common(1)[0][0] for k, v in labels.items()}
        root = os.path.join(args.locale_dir, lang, 'LC_MESSAGES')
        total = total_fuzzy = files = 0
        for po in sorted(glob.glob(os.path.join(root, '**', '*.po'), recursive=True)):
            page = os.path.relpath(po, root)[:-3]
            n, f = fill(po, page, labels)
            total, total_fuzzy, files = total + n, total_fuzzy + f, files + bool(n)
        print(f'{lang}: {len(labels)} labels in the dictionary; '
              f'{total} strings filled in {files} catalogues ({total_fuzzy} fuzzy)')
    if args.dump:
        with open(args.dump, 'w', encoding='utf-8') as fh:
            json.dump(dump, fh, ensure_ascii=False, indent=1, sort_keys=True)


if __name__ == '__main__':
    main()
