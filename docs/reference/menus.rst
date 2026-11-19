Menus
=====

The menu bar at the top of the window holds the actions that are not tied to a
single window. The exact items evolve with the software; this is the map.

File
----

- **New** — start an empty study.
- **Open…** — open an ``.em.json`` file.
- **Add to project…** — bring another container into the current project.
- **Import GraphML…** — read a yEd GraphML matrix, converting it to ``em.json``
  through the shared library.
- **Export ▸** — the graph as **SVG**, **GraphML** or **Turtle (.ttl)**, and the
  narrative as **HTML**, **Word**, **LaTeX** or **Jupyter** (see
  :doc:`export-formats`).
- **Publish to StratiGraph…** — publish the study to the Catalog for dissemination.
- **Save** / **Save as…** — write the study back to ``.em.json``.
- **Pin version…** — fix a citable version of the study.

Edit
----

Undo and redo (the document keeps a bounded history), and the standard editing
actions. Selection is a fact about the document, shared across the windows that
show it.

Mode
----

The **session mode** — Standalone, or in a room (**Hub**) — and where the app asks
for the room's access token. The mode is *derived* from whether you are connected,
not a switch you set for its own sake (see
:doc:`../explanation/open-enter-create`).

Tools
-----

One-shot **instruments** that float, do their job and close — quantitative helpers
and utilities that are not part of any arrangement.

Help
----

Documentation, version information, and the about box. The version breakdown lists
the configuration files and the CIDOC-CRM profile the build carries.
