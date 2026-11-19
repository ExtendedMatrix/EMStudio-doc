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
