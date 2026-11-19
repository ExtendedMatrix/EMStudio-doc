.. _explanation-workspaces-are-questions:

Workspaces are questions
========================

.. TODO MAN05: rewrite (was «The tabs are arrangements»). The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

The row of tabs at the top of EMStudio — Documentation, Graph, DTC, Comparisons,
Narrative, Annotator — looks like a set of "steps", but it is not. Each tab is an
**arrangement**: a named layout of windows for a kind of work, in the spirit of a
Blender *workspace*. Switching tab re-lays the windows for that task; you keep the
same document throughout.

One kind of thing, not two
--------------------------

Earlier versions of the shell mixed two ideas in this row: *phases* of the work
(bring material in, interpret, compare, output) and *views* (a multi-window
layout, a table). That mix showed up as a small gap in the tab bar — the phases on
one side, the views on the other — and it was a source of confusion: a "view" is
not a step you follow.

Now every tab is the **same kind of thing**, an arrangement, and the gap is gone.
A table is no longer a tab of its own — it is a *window* you can open inside any
arrangement (it lives inside Graph by default). The old "IDE" tab is gone too: it
was a layout, and layouts are what all the tabs now are.

Why this is the right model
---------------------------

- It reads as an **arc** — Documentation → Graph → DTC → Comparisons → Narrative —
  which is how the work tends to flow, without forcing you to follow it. You move
  between arrangements as freely as between rooms.
- It keeps the shell **honest**: there is one way to think about the top bar, not
  two. Under the hood the six arrangements are *data* mounted by a single builder,
  so they stay consistent with each other.
- It puts **composition** in your hands. Every window carries a type selector at
  the top-left of its toolbar — turn any window into a Graph, Narrative, Table,
  EMtree, Inspector, Doc, Viewer, Storage, Annotator or Shelf. The six tabs are
  sensible defaults; the ``+`` at the end opens a fresh, custom arrangement you lay
  out yourself.

The six arrangements
--------------------

Each tab opens the windows it needs for its task. In short:

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Tab
     - Windows it opens
   * - **Documentation**
     - Storage (filesystem) · Storage (object store) · Inspector
   * - **Graph**
     - Graph (matrix/graph/DTC modes) · Table below · EMtree · Inspector/Log
   * - **DTC**
     - Graph (DTC mode — the provenance corpus) · Inspector
   * - **Comparisons**
     - Shelf · Viewer · Inspector
   * - **Narrative**
     - Narrative (with the authoring palette) · Viewer
   * - **Annotator**
     - Annotator · Viewer · Inspector

For the window-by-window detail of each, see :ref:`reference-workspaces`.
