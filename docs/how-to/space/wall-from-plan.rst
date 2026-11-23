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

While you click, the view shows the wall as it would be: the outline already
clicked, an elastic side from the last corner to the pointer (and back to the
first), and the solid at the current height, see-through. The elastic side runs
on the horizontal plane of the last corner — the click itself still lands on the
model — so the preview stays fluid on a heavy survey; the solid is made again
only when a point changes.

.. image:: /_static/screens/space/wall-preview.png
   :alt: Two corners clicked, the elastic side to the pointer and the provisional solid, see-through

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
of its base. In the head's phase the see-through solid follows each point.

The **Head** of the **Tool** tab says how the points are read:

- **Seen (the top is visible)**: a point inside the outline, more than 5 cm from
  its sides, is a point of the head's own surface, triangulated with the corners
  — the head can have a shape of its own, not only a profile along the sides.
- **Back hidden (estimated)**: a wall under another wall, its back not visible.
  Click the line of passage on the visible face: the points go on that side, and
  the corners of the hidden side are **estimated** — each takes the height of the
  visible profile at the foot of the perpendicular from it, across the wall.
  The estimated corners are drawn as dashed blue diamonds, the Item tab lists
  them apart, and they are never extractors of a document.

.. image:: /_static/screens/space/wall-head-estimated.png
   :alt: The head clicked on the outer face, the corners of the hidden inner face estimated (dashed diamonds)

The **Origin** (*Bottom*, *Centre*, *Top*) says where the proxy's origin is in
height, as the pivot of the Proxy Box of EM Tools; *Bottom* by default.

Axis and thickness
------------------

In the sidebar (:kbd:`N`), tab **Tool**, the **Mode** *Axis + thickness* draws the
wall from its axis: click the axis as a polyline, give the **Thickness**; the
outline is born on the two sides with sharp joints, then the head is clicked as
above.

The axis can be an alignment already read (:ref:`how-to-space-alignment`): in
*Axis + thickness* mode, before the first click, choose it in the row **Axis
from an alignment**, or click **Axis of a wall** in the alignment's **Item**
tab. Its points become the axis; :kbd:`Enter` closes the plan.

Which model, which document
---------------------------

The **Tool** tab and the bar name the representation model the clicks fall on and
the document it comes from. If the clicks fall on models of different documents
— a 2D plan and a survey — EMStudio warns: it is the hybrid case. You can go on,
and each point remembers its document.

Correct the wall
----------------

A wall keeps the points it was made from — also once closed, also after the
file is saved and opened again. Select it with **Select**: its **handles**
appear in the view.

- Drag a corner, or a point of the head: the see-through solid follows, and on
  release the wall is made again. While you drag, the point stays on the surface
  of the model under the pointer (never on a proxy or on the wall itself) and
  takes that model's document.
- A **+** in the middle of each side inserts a corner: click it, or drag it where
  the corner goes.
- Click a point, then :kbd:`X` (or :kbd:`Delete`) takes it away; :kbd:`Esc` lets
  it go.
- :kbd:`⌘Z` / :kbd:`Ctrl+Z` undoes each correction, :kbd:`⇧⌘Z` redoes it, as
  every other step of the Space.

.. image:: /_static/screens/space/wall-handles.png
   :alt: The handles of a wall: the corners, the head points, a + on each side, the estimated corners

In the tab **Item**, under the position, the section **Wall from plan** lists
the corners and the points of the head with their X, Y, Z (Blender's frame,
Z up) and their **Document**. Change a number, the height, the thickness, the
**Head** or the **Origin**, choose another document for a point (it can be
another than its model's), or take a point away with ×: the wall is made again
at once. An outline that crosses itself is refused, and the message says which
sides cross.

.. image:: /_static/screens/space/wall-item.png
   :alt: The section Wall from plan of the Item tab, with the corners, the head points and the estimated corners

Add head points later
---------------------

A wall made with few points can be enriched: select it, and in the **Item** tab
press **Add head points**. Each click on the model adds a point to its head,
read in the wall's **Head** mode:

- **Seen**: clicks on the top add detail; a point inside the outline becomes a
  point of the head's surface.
- **Back hidden**: clicks on the line of passage of the visible face; the hidden
  side is estimated again from them.

:kbd:`Backspace` takes the last point back; :kbd:`Enter` or :kbd:`Esc` ends,
and the wall stays selected.

.. image:: /_static/screens/space/wall-inner-point.png
   :alt: A point clicked on the top inside the outline, a point of the head's surface (a diamond)

Associate it with a unit
------------------------

#. In the **Inspector**, section **Associate with a unit**, choose a unit or
   create a new one from this shape, and confirm.
#. The glb of the wall is written in ``proxies/`` beside the em.json, and the
   unit has its proxy.

Where the proxy comes from is chosen in the **Tool** tab, as for every tool that
draws a proxy (:ref:`how-to-space-proxy-document`): **Proxy from a document**
(the default) or **Semantic shape, no document** — no extractor, the unit's
proxy *to refine*. Each click can carry a note, written in the small field that
opens beside the point (:ref:`how-to-space-annotate-points`): it becomes the
description of its extractor; the **Item** tab shows it in the column **Note**.

With **Annotate the points as extractors** on (the default, in the **Tool** tab)
each click on a document's model becomes an **extractor** of that document,
named by the rule ``D.nn.NN``, with the place of the reading on the model; the
extractors are joined by a **combiner** under the unit's **Proxy Geometry**, in
its paradata group — the same chain the Proxy Box of EM Tools writes. With the
switch off, the points make no extractor: one extractor says that the proxy as a
whole is extracted from its document. A click that fell on no document makes no
extractor.

Only the clicked points become extractors. The corners of a hidden side are
estimated, not read from a document: the description of the combiner and of the
geometry property says how many were estimated, from how many visible points,
and by which rule. The wall's sketch also keeps them in the file's layout,
marked as estimated.

.. image:: /_static/screens/space/wall-associated.png
   :alt: The wall become the proxy of the new unit SU051, among the proxies of the temple
