"""Write docs/reference/_generated/menus.rst from EMStudio's table of commands.

    python docs/_tools/menus.py ~/Documents/GitHub/EMStudio --ref v1.6.0-dev.136

Sources (read only): ``frontend/src/menu-table.ts`` (File, Edit, Window, Help,
and the macOS menu bar), the English labels of ``frontend/src/i18n.ts``, and
``frontend/index.html`` for the mode's buttons, which are not in the table (and
for Tools, in the versions before MICRO-SEG29 that still have it). Since
MICRO-SEG29 a command no menu draws (``only: NOWHERE``) may name its ``home``:
where it lives now (a window's header, the Preferences); those rows make a
table of their own. The rules of ``menuRows()`` and ``keysFor()`` are repeated here: a
row is drawn on a platform unless its ``only`` leaves it out; the system's Edit
on the Mac draws the OS's text editing, the page's Edit the document's undo.
"""

import argparse
import html
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from emsource import (Source, banner, const_value, english_labels, list_table,  # noqa: E402
                      rst_kbd, rst_text, write)

PLATFORMS = ['web', 'mac', 'win', 'linux']
NAMES = {'web': 'web', 'mac': 'macOS', 'win': 'Windows', 'linux': 'Linux'}
# Items the system draws itself (menu-table.ts `os()` rows without a label of
# ours): the names macOS gives them.
OS_NAMES = {'undo': 'Undo', 'redo': 'Redo', 'cut': 'Cut', 'copy': 'Copy', 'paste': 'Paste',
            'selectAll': 'Select All', 'minimize': 'Minimize', 'maximize': 'Zoom',
            'fullscreen': 'Enter Full Screen'}


def load_menus(src):
    text = src.read('frontend/src/menu-table.ts')
    names = {'DESKTOP': ['mac', 'win', 'linux']}
    calls = {
        'cmd': lambda id, label, button, more=None: {'kind': 'cmd', 'id': id, 'label': label,
                                                     'button': button, **(more or {})},
        'os': lambda id, which, label=None: {'kind': 'os', 'id': id, 'os': which,
                                             **({'label': label} if label else {})},
    }
    names['sep'] = const_value(text, 'sep', names, calls)
    names['NOT_MAC_DESKTOP'] = const_value(text, 'NOT_MAC_DESKTOP', names, calls)
    # MICRO-TIL003: a command no menu draws any more keeps its row with `only: NOWHERE`
    if re.search(r'\bconst NOWHERE\b', text):
        names['NOWHERE'] = const_value(text, 'NOWHERE', names, calls)
    return const_value(text, 'MENUS', names, calls)


def on_surface(menu, row, surface):
    if row['kind'] == 'opt':
        # MICRO-TIL003: the box of a command; on the system's bar a check item under it
        return True
    if row['kind'] == 'os':
        return surface == 'native'
    if menu['id'] == 'edit' and row['kind'] == 'cmd':
        return surface == 'internal'
    return True


def on_platform(row, platform):
    return 'only' not in row or platform in row['only']


def drawn(menu, row, platform, surface, parent=None):
    if surface not in menu['surfaces'].get(platform, []):
        return False
    if parent is not None and not drawn(menu, parent, platform, surface):
        return False
    if not (on_platform(row, platform) and on_surface(menu, row, surface)):
        return False
    # menuRows(): a sub-menu of fixed rows with none drawn is not drawn (Edit ▸
    # Clean up on the Mac's system Edit, which draws no command of ours)
    if row['kind'] == 'sub' and not row.get('dynamic'):
        return any(drawn(menu, r, platform, surface) for r in row['rows'] if r['kind'] != 'sep')
    return True


def keys_for(row, platform):
    """keysFor() of menu-table.ts: ⇧⌘S on the Mac, Ctrl+Shift+S elsewhere."""
    accel = row.get('accel')
    if not accel:
        return ''
    parts = accel.split('+')
    key = parts.pop()
    if platform == 'mac':
        sym = {'Shift': '⇧', 'Alt': '⌥', 'CmdOrCtrl': '⌘', 'Ctrl': '⌃'}
        return ''.join(sym[m] for m in ['Ctrl', 'Alt', 'Shift', 'CmdOrCtrl'] if m in parts) + key.upper()
    word = {'Shift': 'Shift', 'Alt': 'Alt', 'CmdOrCtrl': 'Ctrl', 'Ctrl': 'Ctrl'}
    return '+'.join([word[m] for m in parts] + [key.upper()])


def where(menu, row, parent=None):
    inside = [p for p in PLATFORMS if drawn(menu, row, p, 'internal', parent)]
    native = drawn(menu, row, 'mac', 'native', parent)
    bits = []
    if inside == PLATFORMS:
        bits.append('everywhere')
    elif inside:
        names = ', '.join(NAMES[p] for p in inside)
        bits.append(f'*desktop only*: {names}' if 'web' not in inside else names)
    if native:
        bits.append('macOS menu bar')
    if row.get('accelNotOnWeb') and row.get('accel'):
        bits.append('the key on the desktop only (the browser keeps it)')
    return ' · '.join(bits)


def label_of(row, en):
    if row['kind'] == 'os':
        return en[row['label']] if row.get('label') else OS_NAMES[row['os']]
    return en[row['label']]


def menu_table(menu, en):
    rows = []

    def add(row, prefix='', parent=None):
        kind = row['kind']
        if kind == 'sep':
            return
        if not any(drawn(menu, row, p, s, parent) for p in PLATFORMS for s in ('internal', 'native')):
            return
        name = rst_text(prefix + label_of(row, en))
        if kind == 'os':
            what = 'Drawn by the system.'
        elif kind == 'opt':
            # the box sits right under its command; its tooltip names it
            what = rst_text(en[row['title']]) if row.get('title') else ''
        else:
            what = rst_text(en[row['title']]) if row.get('title') else ''
        if kind == 'sub':
            name += ' ▸'
            notes = []
            if row.get('dynamic') == 'recent':
                notes.append('Filled when the sub-menu opens.')
            elif row.get('dynamic') == 'workspaces':
                notes.append('Filled when the sub-menu opens: the workspaces of the bar, the active one marked.')
            if row.get('slot'):
                notes.append('Installed plugins add their commands here, after the rows below.')
            if what and not what.endswith(('.', '…')):
                what += '.'
            what = ' '.join(([what] if what else []) + notes)
        mac, other = keys_for(row, 'mac'), keys_for(row, 'win')
        rows.append([name, rst_kbd(mac) if mac else '', rst_kbd(other) if other else '',
                     where(menu, row, parent), what])
        if kind == 'sub':
            for child in row['rows']:
                add(child, prefix + label_of(row, en) + ' ▸ ', row)

    for row in menu['rows']:
        add(row)
    return list_table(['Command', 'macOS', 'Windows, Linux', 'Where', 'What it does'],
                      rows, [24, 9, 13, 18, 36])


def homes_table(menus, en):
    """MICRO-SEG29: the commands no menu draws (``only: NOWHERE``) that say where
    they live (``home``), the place the command search shows beside them."""
    rows = []

    def walk(rs):
        for r in rs:
            if r['kind'] == 'sub':
                walk(r['rows'])
            elif r['kind'] == 'cmd' and r.get('home') and r.get('only') == []:
                rows.append([rst_text(en[r['label']]), rst_text(en[r['home']]),
                             rst_text(en[r['title']]) if r.get('title') else ''])
    for m in menus:
        walk(m['rows'])
    return rows


def html_buttons(block):
    """The rows of a dropdown of index.html: (label key, title key, key, id) or None for a separator."""
    out = []
    for m in re.finditer(r'<div class="dd-sep"></div>|<button\b([^>]*)>(.*?)</button>', block, re.S):
        if m.group(0).startswith('<div'):
            out.append(None)
            continue
        attrs, inner = m.group(1), m.group(2)
        lab = re.search(r'data-i18n="([^"]+)"', attrs) or re.search(r'data-i18n="([^"]+)"', inner)
        tit = re.search(r'data-i18n-title="([^"]+)"', attrs)
        key = re.search(r'class="dd-key">([^<]+)<', inner)
        bid = re.search(r'id="([^"]+)"', attrs)
        out.append((lab.group(1) if lab else None, tit.group(1) if tit else None,
                    html.unescape(key.group(1)) if key else '', bid.group(1) if bid else ''))
    return out


def dropdown(page, ident):
    """The rows of a dropdown's menu (its toggle button left out)."""
    start = page.index('<div class="dd-menu', page.index(f'id="{ident}"'))
    end = page.index('<div class="dropdown"', start + 1)
    return page[start:end]


def to_win(keys):
    return keys.replace('⌘', 'Ctrl+').replace('⇧', 'Shift+').replace('⌥', 'Alt+').replace('⌃', 'Ctrl+')


def tools_table(page, en, menu=None):
    """Tools: the rows of index.html, and the table's own rows (menu-table.ts `tools`)
    drawn after its anchor, as menu-ui.ts does."""
    rows = []

    def table_rows():
        for row in (menu or {}).get('rows', []):
            if row['kind'] != 'cmd' or not on_platform(row, 'web') and not any(
                    on_platform(row, p) for p in PLATFORMS):
                continue
            mac, other = keys_for(row, 'mac'), keys_for(row, 'win')
            rows.append([rst_text(en[row['label']]), rst_kbd(mac) if mac else '',
                         rst_kbd(other) if other else '', where(menu, row),
                         rst_text(en[row['title']]) if row.get('title') else ''])

    anchor = (menu or {}).get('anchor')
    placed = False
    for b in html_buttons(dropdown(page, 'dd-tools')):
        if b is None:
            continue
        lab, tit, key, bid = b
        rows.append([rst_text(en[lab]), rst_kbd(key) if key else '', rst_kbd(to_win(key)) if key else '',
                     'everywhere', rst_text(en[tit]) if tit else ''])
        if anchor and bid == anchor:
            table_rows()
            placed = True
    if menu and not placed:
        table_rows()
    return list_table(['Command', 'macOS', 'Windows, Linux', 'Where', 'What it does'],
                      rows, [24, 9, 13, 18, 36])


def mode_table(page, en):
    start = page.index('id="mode-actions"')
    block = page[start:page.index('</div>', start)]
    rows = []
    for b in html_buttons(block):
        if b is None:
            continue
        lab, tit, _, bid = b
        # reflectRoundTrip() in main.ts shows these two only while in a room
        hidden = 'only in a room' if bid in ('btn-open-other', 'btn-share-room') else ''
        rows.append([rst_text(en[lab]), hidden, rst_text(en[tit]) if tit else ''])
    return list_table(['Button', 'When', 'What it does'], rows, [24, 20, 56])


def keymap_rows(src):
    return re.findall(r'\{ id: "([^"]+)", keys: "([^"]+)"', src.read('frontend/src/keymap.ts'))


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    ap.add_argument('emstudio', help='an EMStudio checkout (read only)')
    ap.add_argument('--ref', help='read this git ref (e.g. v1.6.0-dev.136) instead of the working tree')
    ap.add_argument('--out', default=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                                                  'reference', '_generated', 'menus.rst'))
    a = ap.parse_args()
    src = Source(a.emstudio, a.ref)
    en = english_labels(src.read('frontend/src/i18n.ts'))
    menus = {m['id']: m for m in load_menus(src)}
    page = src.read('frontend/index.html')

    def title(text, ch='-'):
        return f'{text}\n{ch * len(text)}\n\n'

    out = [banner('menus.py', src)]
    # the overview: which menus each surface draws (Tools: index.html's own menu,
    # until MICRO-SEG29 dissolved it)
    has_tools = 'id="dd-tools"' in page
    order = ['app', 'file', 'edit'] + (['tools'] if has_tools or 'tools' in menus else []) + ['window', 'help']
    bar = []
    for mid in order:
        if mid == 'tools' and mid not in menus:
            bar.append([en['toolbar.tools'], 'everywhere', ''])
            continue
        m = menus[mid]
        inside = [p for p in PLATFORMS if 'internal' in m['surfaces'].get(p, [])]
        name = 'EMStudio' if mid == 'app' else en[m['label']]
        bar.append([name, ', '.join(NAMES[p] for p in inside) if inside else '',
                    'yes' if 'native' in m['surfaces'].get('mac', []) else ''])
    for r in bar:
        r[1] = 'everywhere' if r[1] == ', '.join(NAMES[p] for p in PLATFORMS) else r[1]
    out.append(title('The menus at a glance'))
    out.append('The menu bar inside the window, on every platform, and the menu bar of the '
               'system, which only the macOS desktop draws.\n\n')
    out.append(list_table(['Menu', 'In the window', 'macOS menu bar'], bar, [30, 40, 30]) + '\n')
    win_inside = any('internal' in menus['window']['surfaces'].get(p, []) for p in PLATFORMS)
    for mid in ['file', 'edit']:
        out.append(title(en[menus[mid]['label']]))
        out.append(menu_table(menus[mid], en) + '\n')
    if has_tools:
        out.append(title(en['toolbar.tools']))
        out.append(tools_table(page, en, menus.get('tools')) + '\n')
    if win_inside:
        out.append(title(en[menus['window']['label']]))
        out.append(menu_table(menus['window'], en) + '\n')
    out.append(title(en['toolbar.help']))
    out.append(menu_table(menus['help'], en) + '\n')
    out.append(title('EMStudio (macOS menu bar)'))
    out.append(menu_table(menus['app'], en) + '\n')
    if not win_inside:
        out.append(title(f'{en[menus["window"]["label"]]} (macOS menu bar)'))
        out.append(menu_table(menus['window'], en) + '\n')
    homes = homes_table(menus.values(), en)
    if homes:
        out.append(title('Commands no menu draws, and where they are'))
        out.append('These commands are not drawn in any menu: they live where they serve. '
                   'The command search (``Edit ▸ Search commands…``, :kbd:`F3`) finds each of '
                   'them by its name and shows the place written here.\n\n')
        out.append(list_table(['Command', 'Where it is', 'What it does'], homes, [24, 34, 42]) + '\n')
    out.append(title('Mode'))
    out.append('The mode, the node and the room are no longer a menu of the top bar: their '
               f'one place is the section **{rst_text(en["who.sect.where"])}** of the chip\'s menu, '
               f'opened by the left label of the status bar '
               f'({rst_kbd(next(r for r in keymap_rows(src) if r[0] == "where")[1])}). '
               'In a room that menu also uses the two gestures below, which stay in the '
               'page, hidden; their labels and tooltips are these.\n\n')
    out.append(mode_table(page, en))
    write(a.out, ''.join(out))


if __name__ == '__main__':
    main()
