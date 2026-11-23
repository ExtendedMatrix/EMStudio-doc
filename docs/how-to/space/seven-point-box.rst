.. _how-to-space-seven-point-box:

Draw a proxy box from seven points
==================================

*Seven measurement points, one per click, guided: a horizontal box, as in EM Tools.*

The tool **Seven-point box** is EM Tools' **Proxy Box Creator** in the Space.
Seven points, each with its own meaning, become a **horizontal box** — sides
vertical, top and bottom level — the same box EM Tools makes from the same
points, vertex by vertex. Like **Wall from plan**
(:ref:`how-to-space-wall-from-plan`) and **From elevation**
(:ref:`how-to-space-from-elevation`), it is born as a **sketch** that keeps its
points: you can correct it, then associate it with a unit, and it becomes that
unit's proxy. A box begun here can be refined in Blender: the points travel in
the graph as EM Tools writes them.

The seven points
----------------

.. list-table::
   :header-rows: 1
   :widths: 8 22 70

   * - #
     - Point
     - What it measures
   * - 1
     - Alignment start
     - a point at one end of the structure's face: the start of its axis
   * - 2
     - Alignment end
     - a point farther along the same face: the axis's direction, in plan (a
       slope between the two points is ignored)
   * - 3
     - Thickness
     - a point on the opposite face, at the alignment's height: the side of the
       box and its thickness
   * - 4
     - Quota min
     - the lowest point of the structure: the bottom of the box
   * - 5
     - Quota max
     - the highest point: the top of the box
   * - 6
     - Length start
     - where the structure starts along the axis
   * - 7
     - Length end
     - where it ends: the box is made

Only the height of the two quotas counts, and only the position along the axis
of the two length points: you can click them wherever the structure shows its
bottom, its top, its two ends.

Before you start
----------------

- Open the **Space** workspace on an epoch where the model you work on is drawn.
- Switch off the other proxies in the **Overlays** (*Proxies*) when they cover
  the structure, so the clicks fall on the model.

Record the points
-----------------

#. In the toolbar on the left of the 3D view (:kbd:`T`), choose **Seven-point
   box** (⬚), after *From elevation*.
#. Click the points in order. The bar over the view says which point the next
   click records and what it measures — *Point 3/7 · Thickness* — and the
   document of the models the clicks fall on.
#. The seventh click makes the box.

The **Tool** tab lists the seven points: a recorded one with ✓, its document
and its coordinates, the next one with ▸. Click ◎ (or ⟲ on a point already
recorded) to make that point the next click: you can record the points in
another order, or record one again before the box is made. :kbd:`Backspace`
takes the last point back, :kbd:`Esc` clears them all.

.. image:: /_static/screens/space/box-bar.png
   :alt: The bar over the view says Point 3/7, Thickness, and the document of the clicks

From the fifth point (the quotas recorded) the view shows the box see-through,
provisional: its length is the alignment's until the two length points come.

.. image:: /_static/screens/space/box-preview.png
   :alt: Five points recorded on the foundation of a wall, the provisional box see-through

.. image:: /_static/screens/space/box-tool.png
   :alt: The Tool tab of Seven-point box: the seven points, the origin, the proxy's document, the switches

When the box cannot be made
---------------------------

EMStudio refuses the box, and says why, when:

- the alignment has no direction in plan (its two points one above the other,
  or the same point);
- the thickness point lies on the alignment's line in plan (the points are
  aligned);
- the two quotas are at the same height, or the two length points at the same
  place along the axis.

Record the point named again (its row in the **Tool** tab) and the box is made.

The box follows EM Tools' rules, and two of them are said when they matter:

- the **thickness** is measured in 3D, from the thickness point to the
  alignment's line: a thickness point clicked higher or lower than the alignment
  makes the box thicker than the wall in plan. The message gives both values;
  record the thickness point at the alignment's height.
- the box starts at the **length start** and runs in the alignment's direction:
  a length start beyond the length end makes it run away from the end. The
  **Item** tab offers **Swap length start and end**.

Correct the box
---------------

Select the box with **Select**: its seven points are handles — drag them, they
stay on the model under the pointer. Each correction is one step of
:kbd:`⌘Z` / :kbd:`Ctrl+Z`.

In the **Item** tab, section **The seven points**: each point with its X, Y, Z
(Blender's frame, as EM Tools), its **Document** and its **Note**, and ⟲ to
record it again with a click on a model; the **Origin** of the proxy (bottom,
as EM Tools by default, centre or top); the size and the volume of the box.

.. image:: /_static/screens/space/box-item.png
   :alt: The section The seven points of the Item tab

The proxy's document and the annotations
----------------------------------------

The same as for the other tools of the Space: **Proxy from a document** or
**Semantic shape, no document** (:ref:`how-to-space-proxy-document`), and
**Annotate the points as extractors**, on by default; at each click that will
make an extractor a small field opens beside the point for a value or a note
(:ref:`how-to-space-annotate-points`). Each point keeps the document of the
model it fell on: when the clicks fall on models of different documents the bar
warns, and each extractor is extracted from its own document.

.. image:: /_static/screens/space/box-note.png
   :alt: The field beside the first point, with a note written

Associate it with a unit
------------------------

As for every sketch: in the **Inspector**, section **Associate with a unit**,
choose a unit or create a new one from this shape. The glb goes in ``proxies/``
and, in the mode *Proxy from a document*, the chain is written by s3Dgraphy as
EM Tools writes it: one extractor per point, with EM Tools' ``point_type``
(*Alignment Start*, *Alignment End*, *Thickness*, *Quota Min*, *Quota Max*,
*Length Start*, *Length End*) and its coordinates, joined by a combiner under the
unit's **Proxy Geometry**, purpose *proxy_box_creator*.

.. image:: /_static/screens/space/box-associated.png
   :alt: The box associated with a new unit, the marks of its seven extractors in the view
