.. _how-to-stratigraphy-add-and-connect-units:

Add and connect units
=====================

.. TODO MAN03: rewrite for the Stratigraphy workspace. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

*Goal: build and read the stratigraphic record.* This is the **Graph** tab — the
cockpit of interpretation, with the matrix, a table below, and the outliner and
inspector to the side.

.. image:: /_static/interface/02_graph.jpg
   :width: 100%
   :alt: The Graph tab — the stratigraphic matrix of Templu Mare in epoch swimlanes

Choose how you look
-------------------

The graph window has three **modes**, chosen from *Mode* at the top-left of its
toolbar:

- **Matrix Mode** — the stratigraphic matrix, in epoch swimlanes, laid out by the
  epoch-driven engine;
- **Graph Mode** — a free, force-directed layout of the same nodes;
- **DTC Mode** — the provenance corpus (also its own tab, :doc:`/how-to/sources/declare-provenance`).

Place and connect units
-----------------------

In edit mode a **palette** on the left lists the node types you can place —
stratigraphic units (US/USV/USD/…), special finds, series, and paradata
(property, extractor, combiner, document). Drag a type onto the canvas to create a
node; drag from a node's edge to another to connect them. EMStudio validates the
connection live against the datamodel: a valid target lights up, an ambiguous one
offers the edge types it allows.

Fold, filter, focus
-------------------

- **Fold** a group into a single proxy to keep a large matrix readable; double-click
  to open it in its own space; unfold to expand in place.
- **Filter** with the funnel: hide node or edge types to isolate what you are
  reading; the matrix recompacts under the filter.
- The **minimap** shows where you are; ``1:1`` and the layout controls reset the
  view.

The table and the inspector
---------------------------

The **Table** below the graph is the same units as rows — pick a row to select the
node, and it reveals in the graph if one is open. The **Inspector** shows the
selected node's fields (and, with nothing selected, the graph's own metadata:
site id, default author, licence, embargo, site position). The **Log** tab of that
panel is a running record of what the document and the session have done.
