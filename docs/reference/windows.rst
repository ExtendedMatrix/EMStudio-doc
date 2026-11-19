.. _reference-windows:

Windows
=======

.. TODO MAN02: rewrite on the 16 window types. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

Everything in the EMStudio shell is a **window**: an area of a given *type* that can
be tiled, resized, maximized and focused. The six tabs are default *arrangements* of
these windows (see :ref:`reference-workspaces`), but you compose them freely — every window
carries a **type selector** at the top-left of its toolbar, and the ``→`` / ``↓``
buttons split it into a new area.

This page describes each window type. A window's **Mode** (where it has one) changes
*how* it shows the same material; its **type** changes *what* it is.

Graph
-----

The canvas of the record. Its modes are projections of the same graph:

- **Matrix Mode** — the stratigraphic matrix in epoch swimlanes, laid out by the
  epoch-driven engine; groups fold, a filter recompacts, a minimap tracks position.
- **Graph Mode** — a free, force-directed layout.
- **DTC Mode** — the documentation/provenance corpus as a directed graph.

In edit mode a palette lists the node types you can place; dragging from a node's
edge connects it, validated live against the datamodel.

Table
-----

The units as rows. Selecting a row selects the node (and reveals it in a graph
window if one is open); the table can legitimately show rows the canvas does not
draw (folded or filtered). It lives inside the Graph arrangement by default.

Inspector
---------

The fields of the selected node — and, with nothing selected, the **graph's own
metadata**: site id, default author, licence and embargo, site position (map), and
the Heritage Digital Twin link. It is a *panel*: one Inspector can move between
areas, and two Inspector windows can sit on different things. See
:doc:`inspector` for the fields.

EMtree (Multigraph / Outliner)
------------------------------

The structure of the document as a tree: the **Multigraph** (the graphs the study
holds) and the **Outliner** (nodes and groups, foldable). A panel, like the
Inspector.

Log
---

A running record of what the document and the session have done — a *view* of
history, not a tool. Shares the panel with the Inspector.

Shelf
-----

The wide, curated, savable list of resources a study works from — a *ShelfGraph*,
not a computed view of a folder. You drag files onto it or paste URIs; the fences
(own study / own HDT / other HDT) say whose each resource is.

Viewer
------

A preview surface: the resource the current node points at, shown as itself — an
image, a document, or a 3D scene on demand. It places nothing (it carries no
palette).

Storage
-------

Where the bytes live. Its **modes are the backends**: *Filesystem* (the disk, fenced
to allowed folders) and *object store* (the room's content-addressed store, where
an upload also declares the material's acquisition).

Annotator
---------

An image and the regions traced on it. Its modes are what the pointer *does* — look,
trace, mask — the way an image editor separates viewing from painting.

Narrative
---------

The graph read as prose: chapters anchored to epochs, with embeds that stay live
references. Its toolbar carries Chapter · Insert · Export · IA and the write-mode
pencil. See :doc:`../how-to/narrative/write-the-narrative`.

Doc
---

A document surface — a text or a rendered view of a resource — used where a window
shows a single document rather than the graph.
