.. _how-to-space-wall-from-plan:

Draw a wall from its plan
=========================

*A clean proxy of a wall, clicked on the models in the Space.*

The tool **Wall from plan** draws the proxy of a wall where you see it: you click
the corners of the wall in plan, then a few points on its head, and EMStudio
makes one closed mesh with the fewest polygons — the sides as quads, the top and
the bottom as the triangulation of the outline. The wall is born as a **sketch**:
you can correct it, then associate it with a unit, and it becomes that unit's
proxy. The details and the hybrid cases (a 2D plan with a survey) are still
refined in EM Tools, in Blender.

Before you start
----------------

- Open the **Space** workspace on an epoch where the model you work on is drawn
  (a survey, a plan laid in the scene).
- The proxies of the other units may cover the model: switch them off in the
  **Overlays** (*Proxies*) so the clicks fall on the model.

Click the plan
--------------

#. In the toolbar on the left of the 3D view (:kbd:`T`), choose **Wall from plan**
   (▥), after *Select* and *3D cursor*.
#. Click the corners of the wall's outline, in the order of its perimeter — the
   inner corners too: an L, a T, a U. Each click keeps its height, so the base
   of the proxy follows the ground or the model.
#. Press :kbd:`Enter` or double-click to close the plan (three corners at least).

The bar at the bottom of the view says in which phase you are, how many points
you have placed and on which model and document the clicks fall.
:kbd:`Backspace` takes the last point back, :kbd:`Esc` cancels the phase.

.. image:: /_static/screens/space/wall-plan.png
   :alt: Four corners of a stretch of foundation clicked on the survey, the outline dashed

Click the head
--------------

#. Click points on the head of the wall. When the head is not visible — a
   foundation that reaches a height from which the next wall starts — click on
   the line of passage.
#. Press :kbd:`Enter`: the wall is made, selected, and the tool stays armed for
   the next one.

Each point of the head goes on the nearest side of the outline: far from a
corner it becomes a new corner, so the head follows the wall; between two points
the height is interpolated along the perimeter. With no point of the head, the
wall takes the **Height** of the **Tool** tab (1 m by default) above each corner
of its base.

Axis and thickness
------------------

In the sidebar (:kbd:`N`), tab **Tool**, the **Mode** *Axis + thickness* draws the
wall from its axis: click the axis as a polyline, give the **Thickness**; the
outline is born on the two sides with sharp joints, then the head is clicked as
above.

Which model, which document
---------------------------

The **Tool** tab and the bar name the representation model the clicks fall on and
the document it comes from. If the clicks fall on models of different documents
— a 2D plan and a survey — EMStudio warns: it is the hybrid case. You can go on,
and each point remembers its document.

Correct the wall
----------------

Select the wall and open the tab **Item**: under the position, the section
**Wall from plan** lists the corners and the points of the head with their X, Y,
Z (Blender's frame, Z up). Change a number, the height or the thickness, or take
a point away with ×: the wall is made again at once. An outline that crosses
itself is refused, and the message says which sides cross.

.. image:: /_static/screens/space/wall-item.png
   :alt: The section Wall from plan of the Item tab, with the corners and the head points

Associate it with a unit
------------------------

#. In the **Inspector**, section **Associate with a unit**, choose a unit or
   create a new one from this shape, and confirm.
#. The glb of the wall is written in ``proxies/`` beside the em.json, and the
   unit has its proxy.

With **Annotate the points as extractors** on (the default, in the **Tool** tab)
each click on a document's model becomes an **extractor** of that document,
named by the rule ``D.nn.NN``, with the place of the reading on the model; the
extractors are joined by a **combiner** under the unit's **Proxy Geometry**, in
its paradata group — the same chain the Proxy Box of EM Tools writes. With the
switch off, the proxy has no extractors and its paradata only says it was drawn
in EMStudio. A click that fell on no document makes no extractor.

.. image:: /_static/screens/space/wall-associated.png
   :alt: The wall become the proxy of the new unit SU051, among the proxies of the temple
