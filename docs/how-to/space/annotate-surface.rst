.. _how-to-space-annotate-surface:

Annotate a surface on a model
=============================

*A contour clicked on a model becomes an areal: the model's own surface inside it.*

The tool **Annotate surface** is EM Tools' **Surface Areale** in the Space. You
click a contour on a representation model — a stretch of facing, a floor, a
plaster, a patch of mortar — and close it: the **areal** is the part of the
model's surface inside the contour, cut out of it and set a few millimetres off,
so that it lies on the model and follows every stone and joint of it. Like the
other tools of the Space (:ref:`how-to-space-wall-from-plan`,
:ref:`how-to-space-from-elevation`, :ref:`how-to-space-seven-point-box`), it is
born as a **sketch**: you can correct it, then associate it with a unit, and it
becomes that unit's proxy. An areal begun here can be made again in Blender
from the same contour (EM Tools, *Areale from a graph surface*).

How the areal follows the model
-------------------------------

The areal is not a new surface laid over the model: it is the model's own
triangles inside the contour. Those wholly inside are kept as they are; those
the contour crosses are cut along it, so the border runs **on** the model,
broken wherever it crosses an edge of the mesh, and never stretches straight
over a relief. Nothing is simplified: an areal on a detailed survey has as many
triangles as the survey has there.

The areal is the surface **seen from the side of your clicks**. Small faces
turned away — the underside of a stone's lip, a joint — are joined to it when
they lie at most 3 cm behind the surface around them; the other side of a wall,
its whole thickness behind, never is.

On a **tileset** (3D Tiles) the view shows coarse tiles when you are far and
finer tiles as you come closer. Before cutting, EMStudio asks for the **finest
tiles under the contour** (the leaves of the tileset), waits for them, and cuts
from those: the bar says *Loading the finest tiles under the contour* with the
count, and the **Item** tab says which level was used.

Before you start
----------------

- Open the **Space** workspace on an epoch where the model you work on is drawn.
- Switch off the other proxies in the **Overlays** (*Proxies*) when they cover
  the surface, so the clicks fall on the model.
- When two models overlap there (a mesh and a tileset of the same survey), hide
  the one you do not want with its eye in the **Outliner**: an areal is cut out
  of **one** model.

Click the contour
-----------------

#. In the toolbar on the left of the 3D view (:kbd:`T`), choose **Annotate
   surface** (⬠), after *Seven-point box*.
#. Click the contour on the model, point after point. While you click, the
   contour is drawn **draped** on the model (dashed), and two elastic sides go
   from the last point to the pointer and back to the first.
#. Close it with :kbd:`Enter` or a double click (three points at least). The
   areal is cut, selected, and named *Areal.001*.

The bar over the view says how many points the contour has, what closes it, and
the document and the model under the clicks. :kbd:`Backspace` takes the last
point back, :kbd:`Esc` clears the contour.

.. image:: /_static/screens/space/surface-preview.png
   :alt: Three points clicked on the face of a wall, the contour draped on it and the elastic sides to the pointer

.. image:: /_static/screens/space/surface-tool.png
   :alt: The Tool tab of Annotate surface: how it works, the offset, the proxy's document, the switches

When the areal cannot be cut
----------------------------

EMStudio refuses the areal, and says why, when:

- the contour falls on **two models**: an areal is cut out of one. The bar warns
  as soon as the second model appears. Draw it on one of them, or refine it in
  Blender;
- the contour **leaves the model**: a point is not on its surface, or a part of
  the contour's area is not covered by the surface seen from your clicks (a hole,
  an edge, a hidden face). The message gives the share covered;
- the surface **turns more than 90°** under the contour (around a column, over
  the corner of a block seen from one side only): split it into two areals, or
  refine it in Blender;
- the contour crosses itself, or has no area.

The contour stays: move a point (Backspace) and close it again.

.. image:: /_static/screens/space/surface-two-models.png
   :alt: A contour clicked on two models: the bar warns that it will be refused

The offset
----------

The areal is set off the model along its normals, so that it does not flicker
with it: **Offset from the surface**, 2 mm by default, in the **Tool** tab (and,
for an areal already made, in the **Item** tab). As in EM Tools, the offset
grows with each areal already on the same spot (twice, three times… at most five
times), so that overlapping areals stay apart.

Correct the areal
-----------------

Select the areal with **Select**: the points of its contour are handles. Drag a
point on the model; click a **+** on a side to add a point there (it lands on
the model under it); click a point and press :kbd:`X` to take it away (three
stay). Each correction **cuts the areal again** from the model — on a tileset,
from its finest tiles again — and is one step of :kbd:`⌘Z` / :kbd:`Ctrl+Z`.

In the **Item** tab, section **The areal**: what the cut measured — the area on
the model, the length of its border, the triangles of the model it has — where
it was cut (the model's mesh, or the tileset's leaves and their level), how EM
Tools would classify the surface (scenario A, B or C), the proxy's document,
the **Annotation**, the **Offset**, **Cut again**, and the points of the contour
(X, Y, Z in Blender's frame, × to take one away).

.. image:: /_static/screens/space/surface-handles.png
   :alt: An areal cut out of the face of a wall, the points of its contour as handles

.. image:: /_static/screens/space/surface-item.png
   :alt: The section The areal of the Item tab: area, border, triangles, level, annotation, offset, contour

The proxy's document and the annotation
---------------------------------------

The same as for the other tools of the Space: **Proxy from a document** or
**Semantic shape, no document** (:ref:`how-to-space-proxy-document`), and
**Annotate the points as extractors**, on by default. For an areal the
extraction is **one**, for the whole surface, as in EM Tools: when the contour
is closed a small field opens for its annotation — *opus incertum facing, grey
mortar* — which becomes the description of that extractor
(:ref:`how-to-space-annotate-points`). You can write it later in the **Item**
tab.

.. image:: /_static/screens/space/surface-note.png
   :alt: The areal cut, the field for its annotation open

Associate it with a unit
------------------------

As for every sketch: in the **Inspector**, section **Associate with a unit**,
choose a unit or create a new one from this shape. The glb goes in ``proxies/``
and, in the mode *Proxy from a document*, the chain is written by s3Dgraphy as
EM Tools' Surface Areale writes it: **one extractor** of the whole surface,
extracted from the document, purpose *3D drawing on surface*, with the model it
was cut from (``source_rm``), the area, the border, the triangles and the offset;
its place is the contour on the model — the form EM Tools reads to make the
areal again in Blender.

.. image:: /_static/screens/space/surface-associated.png
   :alt: The areal associated with a new unit

On a tileset
------------

The same gestures on a tileset: when you close the contour EMStudio asks for the
leaves of the tileset under it, waits for them (the bar counts them), and cuts.
If not every leaf comes within 45 seconds, the areal is cut from the finest
tiles loaded, and the **Item** tab says so.

.. image:: /_static/screens/space/surface-tiles-wait.png
   :alt: The bar while the finest tiles under the contour are loading

.. image:: /_static/screens/space/surface-tiles.png
   :alt: An areal cut out of a tileset's leaves
