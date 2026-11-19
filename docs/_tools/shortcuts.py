"""Write docs/reference/_generated/shortcuts.rst from EMStudio's key map.

    python docs/_tools/shortcuts.py ~/Documents/GitHub/EMStudio --ref v1.6.0-dev.136

Sources (read only): ``frontend/src/keymap.ts`` (every key and gesture, the rows
of Help ▸ Shortcuts), the English labels of ``frontend/src/i18n.ts``
(``keys.<id>``, ``keys.scope.<scope>``, ``gesture.*``), and the accelerators of
``frontend/src/menu-table.ts``, through ``menus.py``.

The key map writes keys as the Mac draws them; the Windows and Linux column
turns ⌘ into Ctrl, ⌥ into Alt, ⇧ into Shift and ⌃ into Ctrl, as the key map's
own comment says. A gesture is a sentence of the app, the same on every platform.
"""

import argparse
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from emsource import Source, banner, english_labels, list_table, rst_kbd, rst_text, write  # noqa: E402
from menus import NAMES, PLATFORMS, drawn, keys_for, load_menus  # noqa: E402

ROW = re.compile(r'\{ id: "([^"]+)", keys: "([^"]+)", scope: "([^"]+)" \}')
SCOPES = re.compile(r'export type KeyScope = ([^;]+);')


MODS = {'⌃': 'Ctrl', '⌘': 'Ctrl', '⌥': 'Alt', '⇧': 'Shift'}


def to_win(keys):
    """⇧⌘S → Ctrl+Shift+S (the order keysFor() draws), ⌫ → Backspace."""
    def one(tok):
        mods = []
        while tok and tok[0] in MODS:
            mods.append(MODS[tok[0]])
            tok = tok[1:]
        mods = [m for m in ('Ctrl', 'Alt', 'Shift') if m in mods]
        tok = tok.replace('⌫', 'Backspace')
        return '+'.join(mods + ([tok] if tok else []))
    return ' '.join(one(t) for t in keys.split(' '))


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    ap.add_argument('emstudio', help='an EMStudio checkout (read only)')
    ap.add_argument('--ref', help='read this git ref (e.g. v1.6.0-dev.136) instead of the working tree')
    ap.add_argument('--out', default=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                                                  'reference', '_generated', 'shortcuts.rst'))
    a = ap.parse_args()
    src = Source(a.emstudio, a.ref)
    en = english_labels(src.read('frontend/src/i18n.ts'))
    keymap = src.read('frontend/src/keymap.ts')
    rows = ROW.findall(keymap)
    if not rows:
        raise SystemExit('keymap.ts: no rows read')
    order = re.findall(r'"(\w+)"', SCOPES.search(keymap).group(1))
    # the order of the sections: as the rows come, then any scope left
    seen = []
    for _, _, scope in rows:
        if scope not in seen:
            seen.append(scope)
    seen += [s for s in order if s not in seen and any(r[2] == s for r in rows)]

    out = [banner('shortcuts.py', src)]
    for scope in seen:
        head = en[f'keys.scope.{scope}']
        out.append(f'{head}\n{"-" * len(head)}\n\n')
        table = []
        for rid, keys, sc in rows:
            if sc != scope:
                continue
            what = rst_text(en[f'keys.{rid}'])
            if keys.startswith('@'):
                words = rst_text(en[keys[1:]])
                table.append([words, words, what])
            else:
                table.append([rst_kbd(keys), rst_kbd(to_win(keys)), what])
        out.append(list_table(['macOS', 'Windows, Linux', 'Action'], table, [22, 26, 52]) + '\n')

    # the menus' accelerators, as the menus draw them
    head = 'In the menus'
    out.append(f'{head}\n{"-" * len(head)}\n\n')
    out.append('The keys the menus show beside their commands. On the web the browser keeps '
               'some of them for itself.\n\n')
    table = []
    for menu in load_menus(src):
        def walk(rs, prefix, parent=None):
            for r in rs:
                if r['kind'] == 'sub':
                    walk(r['rows'], prefix + en[r['label']] + ' ▸ ', r)
                elif r['kind'] == 'cmd' and r.get('accel'):
                    inside = [p for p in PLATFORMS if drawn(menu, r, p, 'internal', parent)]
                    native = drawn(menu, r, 'mac', 'native', parent)
                    menu_name = 'EMStudio' if menu['id'] == 'app' else en[menu['label']]
                    where = ', '.join(NAMES[p] for p in inside) if inside != PLATFORMS else 'everywhere'
                    if native and not inside:
                        where = 'macOS menu bar'
                    if r.get('accelNotOnWeb') and 'web' in inside:
                        inside = [p for p in inside if p != 'web']
                        where = ', '.join(NAMES[p] for p in inside) + ' (the browser keeps the key)'
                    if inside and 'web' not in inside:
                        where = '*desktop only*: ' + where
                    table.append([rst_kbd(keys_for(r, 'mac')), rst_kbd(keys_for(r, 'win')),
                                  rst_text(f'{menu_name} ▸ {prefix}{en[r["label"]]}'), where])
        walk(menu['rows'], '')
    out.append(list_table(['macOS', 'Windows, Linux', 'Command', 'Where'], table, [16, 20, 40, 24]))
    write(a.out, ''.join(out))


if __name__ == '__main__':
    main()
