# docs/_tools — the generated reference tables

Two pages of the reference are tables that EMStudio already holds as data. They are
generated from its sources, never typed by hand, so that the manual says what the
application draws.

| Script | Reads (EMStudio, read only) | Writes |
|---|---|---|
| `menus.py` | `frontend/src/menu-table.ts`, `frontend/index.html` (Tools, the mode buttons), the English labels of `frontend/src/i18n.ts` | `docs/reference/_generated/menus.rst` |
| `shortcuts.py` | `frontend/src/keymap.ts`, the accelerators of `menu-table.ts`, the English labels of `i18n.ts` | `docs/reference/_generated/shortcuts.rst` |

`emsource.py` holds what both share: reading a file of EMStudio (from the working
tree or from a git tag), a small reader for the literal data of a TypeScript module,
the English dictionary of `i18n.ts`, and the reStructuredText helpers.

## Regenerate

From the root of EMStudio-doc, with the repository's virtual environment:

```sh
.venv/bin/python docs/_tools/menus.py     ~/Documents/GitHub/EMStudio --ref v1.6.0-dev.136
.venv/bin/python docs/_tools/shortcuts.py ~/Documents/GitHub/EMStudio --ref v1.6.0-dev.136
.venv/bin/sphinx-build -W --keep-going -b html docs docs/_build/html
```

* The first argument is an EMStudio checkout. The scripts never write into it.
* `--ref` reads that tag (or commit) through `git show`, whatever the working tree
  holds: use the tag of the version the manual describes, the same as `version` in
  `docs/conf.py`. Without `--ref` they read the working tree.
* The generated files are committed: Read the Docs builds them as they are, without
  EMStudio.
* `reference/menus.rst` and `reference/shortcuts.rst` carry the prose and
  `.. include::` the generated tables; edit the prose there, never the files in
  `_generated/` (`conf.py` keeps them out of the build as pages of their own).

## When a script stops

The readers refuse what they do not recognise instead of guessing: a new helper in
`menu-table.ts`, a row of `keymap.ts` written in another shape, an i18n key that the
English dictionary lacks (a `KeyError` names it). Teach the reader the new shape,
then regenerate. The rules of `menuRows()` and `keysFor()` are repeated in
`menus.py`: if they change in EMStudio, change them here too.

## The Italian manual

The generated tables are English, like the rest of the source. Their cells are
translated through gettext with the page that includes them (MICRO-MAN07); use the
labels of the `it` block of `i18n.ts`, so that the Italian reader finds the words on
the screen.

# The screenshots

`screenshots.mjs` takes every picture of the manual from the application itself:
it opens EMStudio in a headless Chromium, loads a copy of Templu Mare, brings each
workspace, menu, window and dialog to the state its page describes, and saves it
under `docs/_static/screens/<section>/<name>` (JPEG q85 for whole windows, PNG for
menus and dialogs, where the text must stay sharp). The window is 1600×1000, the
theme the default one, the profile clean. `--list` prints the shots, `--only
name,section` takes some of them.

## The bench

Nothing of EMStudio's repository is written, and the development stack is not
used: the bench is a build of the tag in a folder of its own.

```sh
# the web build of the version the manual describes
mkdir -p /tmp/emstudio-136
git -C ~/Documents/GitHub/EMStudio archive v1.6.0-dev.136 | tar -x -C /tmp/emstudio-136
cd /tmp/emstudio-136/frontend && npm ci && npm run build
npx vite preview --port 5336 --strictPort &          # the page: localhost:5336/em/studio/

# a COPY of Templu Mare (EM/ with DosCo and proxies, RM/; RB and SB are not needed)
cp -R ".../TempluMare_v2_for_3DR_2026-10-06/EM" ".../RM" /tmp/TempluMare/

# a bridge of the same tag on the copy, with a HOME of its own, so that the
# person's ~/.s3dgraphy is never read or written; the secret opens the console
cd /tmp/emstudio-136 && HOME=/tmp/man06/home EM_BRIDGE_TOKEN=man06-local \
  PYTHONPATH=~/Documents/GitHub/dtcstamp \
  ~/Documents/GitHub/s3Dgraphy/.venv/bin/python tools/em_bridge.py \
  --port 8936 --s3dgraphy ~/Documents/GitHub/s3Dgraphy/src --fs-root /tmp/TempluMare &

# the example package of the Extensions and Vocabularies windows, in that HOME
python -m s3dgraphy.extensions build ~/Documents/GitHub/em-profiles/examples/example-toolmarks --out /tmp/man06/pkgs
HOME=/tmp/man06/home python -m s3dgraphy.extensions install /tmp/man06/pkgs/example-toolmarks-0.1.0.zip
```

Then, from the root of EMStudio-doc:

```sh
EM_DOC=/tmp/TempluMare/EM/TempluMare_v11.em.json EM_BRIDGE_TOKEN=man06-local \
EM_NODE=<a node's address, for the chip's menu> \
  node docs/_tools/screenshots.mjs --lang en
```

## Languages

`--lang` is the language of the interface (one of `LOCALES` in `i18n.ts`). English
pictures are the source, at the path the pages name. Another language writes to
`<section>/<lang>/<name>`, and `figure_language_filename` in `conf.py` makes the
build of that language take it when it is there, the English one otherwise. The
pages never change: a translated manual needs only the run with its `--lang`.

## What the script cannot take

Pictures of the desktop alone (the macOS menu bar, a window detached from the main
one, the system's file and print dialogs) are not taken here: the bench is the web
build in a browser. They are listed in the report of MICRO-MAN06 for a person to
take by hand.
