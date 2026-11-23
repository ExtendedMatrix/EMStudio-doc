.. _how-to-space-from-elevation:

Draw a proxy from an elevation
==============================

*Click the outline on the face you see; decide the depth after.*

The tool **From elevation** draws a proxy from what you **see**: the visible face
of a wall or of an element in a survey. You click its outline on the face, and
EMStudio fits a **mean plane** to the points; then you decide the **depth** —
at once, or later. The solid goes **backwards** from the face you saw. Like
**Wall from plan** (:ref:`how-to-space-wall-from-plan`), it is born as a
**sketch** that keeps its points: you can correct it, then associate it with a
unit, and it becomes that unit's proxy.

Before you start
----------------

- Open the **Space** workspace on an epoch where the model you work on is drawn.
- Switch off the other proxies in the **Overlays** (*Proxies*) when they cover
  the face, so the clicks fall on the model.
- Turn the view so that you look at the face (the side you look from is the
  front of the proxy).

Click the outline of the face
-----------------------------

#. In the toolbar on the left of the 3D view (:kbd:`T`), choose **From
   elevation** (◫), after *Wall from plan*.
#. Click the outline of the face, point after point, in the order of the outline.
   Each click lands on the surface of the model.
#. Press :kbd:`Enter` or double-click to close the outline (three points at
   least).

From the third point the view shows the solid as it would be, see-through, at
the depth written in the **Tool** tab. :kbd:`Backspace` takes the last point
back, :kbd:`Esc` cancels the phase.

.. image:: /_static/screens/space/elevation-face.png
   :alt: Four points clicked on the outer face of a foundation, the provisional solid see-through

The front of the proxy **keeps the points you clicked**: an irregular face is not
flattened onto the mean plane. The back of the proxy is a plane parallel to the
mean plane, at the depth behind it — so where the face stands out the proxy is
thicker, where it is recessed it is thinner. When the points are far from the
mean plane (more than 2 cm on average) the message says the face is irregular.

Read the edges
--------------

On a survey an edge is where the surface turns, not an edge of a triangle. With
**Snap to the mesh's edges** on (in the **Tool** tab) a click near an edge or a
corner of the model goes onto it: EMStudio reads the surface around the click (a
small ring of rays) and, where it turns by more than 30°, puts the point on the
line where the two faces meet — or at the corner where three meet. The **Log**
says when a click was snapped. Leave it off on a face with no sharp edges.

Decide the depth
----------------

After :kbd:`Enter` the bar says **Depth**. Three ways:

- **A click** on a point of a model behind the face or beside it — the top of the
  wall near its inner side, the opposite face seen from another side: the depth
  is that point's distance along the normal of the face. A point in front of the
  face is refused.
- **A number**: write it in **Depth (m)** in the **Tool** tab and press
  :kbd:`Enter`.
- **Later**: press :kbd:`Enter` with the depth of the Tool tab, and change it
  when you know more — in the **Item** tab (a number, or **Depth from a click**),
  or by dragging the **↕** handle of the solid along its normal.

The **Item** tab says how the depth was decided (a click, a number, the handle,
or not decided yet).

.. image:: /_static/screens/space/elevation-solid.png
   :alt: The solid made from the face, its points and its depth handle

Correct the solid
-----------------

Select the solid with **Select**: its handles appear — the points of the face
(drag them: they stay on the model under the pointer), a **+** on each side to
insert a point, and **↕** for the depth. Click a point, then :kbd:`X` takes it
away. Each correction is one step of :kbd:`⌘Z` / :kbd:`Ctrl+Z`.

In the **Item** tab, section **From elevation**: the points with their X, Y, Z
(Blender's frame), their **Document** and their **Note**, the depth, and the
point of the depth when it came from a click.

.. image:: /_static/screens/space/elevation-item.png
   :alt: The section From elevation of the Item tab, with the points, their documents and their notes

.. _how-to-space-proxy-document:

The proxy's document: two modes
-------------------------------

Every tool that draws a proxy in the Space (**Wall from plan**, **From
elevation**, **Seven-point box**, **Annotate surface**) asks, in the **Tool**
tab, where the proxy comes from:

- **Proxy from a document** (the default): the proxy is an extraction of a
  document — the one of the model the clicks fall on, shown at all times in the
  Tool tab and in the bar, or one you choose (a plan, a report). On association
  the proxy enters the chain as extracted from that document; with **Annotate
  the points as extractors** on, each point clicked on a document's model becomes
  an extractor of it. With the switch off, one extractor says that the proxy as a
  whole is extracted from the document.
- **Semantic shape, no document**: no document, no extractor. It is a form that
  stands for the unit, to be improved elsewhere — for example in Blender. It is
  still called a **proxy**; its paradata says it has no document, and the unit's
  state of the proxy becomes **to refine**: the Inspector says so in one line, and
  the Tabular view **To draw** lists it among the proxies to refine.

The mode can be changed in the **Item** tab until the sketch is associated.

.. image:: /_static/screens/space/elevation-tool.png
   :alt: The Tool tab of From elevation: the depth, the two modes of the proxy's document, the switches

.. image:: /_static/screens/space/elevation-to-refine.png
   :alt: The Inspector's line of a unit whose proxy is a semantic shape: to refine

.. _how-to-space-annotate-points:

Annotate the points
-------------------

At each click that will make an extractor, a small field opens beside the point:
write a value or a note — *quota 492,13*, *edge rebuilt in a restoration* — and
press :kbd:`Enter`. :kbd:`Esc`, or simply the next click, skips it without
writing: the field never stops you clicking. When you place many points in a
row, switch off **Annotate at each click** in the **Tool** tab.

.. image:: /_static/screens/space/elevation-note.png
   :alt: The field beside the first point, with a value written

The note becomes the **description of the extractor** — the field the Inspector
shows and edits. You can add or change it at any time:

- before the association: click the point's handle (the same field opens, with
  what is written), or write in the **Note** column of the **Item** tab; a point
  with a note shows a small ✎;
- after the association: select the extractor's mark in the view and click it
  again (the same field), or edit its description in the **Inspector**.

Associate it with a unit
------------------------

As for every sketch: in the **Inspector**, section **Associate with a unit**,
choose a unit or create a new one from this shape. The glb goes in ``proxies/``
and, in the mode *Proxy from a document*, the chain is written by s3Dgraphy —
the same as the wall's: the extractors of the points (``point_type`` *face*, and
*depth* for the point that gave the depth), joined by a combiner under the unit's
**Proxy Geometry**, purpose *from_elevation*.
