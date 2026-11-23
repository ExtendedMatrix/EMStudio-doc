.. _how-to-space-alignment:

Read an alignment on a model
============================

*Two or more clicks along a wall: its line in plan, its azimuth, its length and slope.*

The tool **Alignment** reads the line of a wall — or of a row of post holes, a
kerb, a channel, a ridge — on a representation model. In EM Tools the
alignment lived inside the Proxy Box (its *Alignment Start* and *Alignment End*
points); here it is an **extractor of its own**: a reading of the document the
model belongs to, with its place on the model and the value it read. It can
then feed a property of a unit, and it can be the axis of a
:ref:`seven-point box <how-to-space-seven-point-box>` or of a
:ref:`wall drawn from its plan <how-to-space-wall-from-plan>`.

The same tool is in the bar of the **Viewer**, on one document's model.

What it reads
-------------

- **The line in plan.** With two points, the line through them. With more, the
  line **fitted by least squares** in plan: the deviations are measured square
  to the line, so a wall running north is fitted as well as one running east.
  Its two ends are the first and the last click brought onto the line.
- **The azimuth** of that line, in degrees, clockwise from the north of the
  frame (+Y of the data, Z up — the grid north of a projected CRS), in the
  sense of your clicks (from the first to the last), and the **axis**, the
  same direction without a sense (0–180°): the alignment of a wall has no sense.
- **The length** in plan between the two ends; with more points also the path
  as clicked, in plan and in space.
- **The slope**: the heights fitted along the line, the angle from the
  horizontal (+ when it rises from the first point to the last) and the rise
  between the two ends.
- With more than two points, **the largest deviation** (and which point it is)
  and the rms: how straight the alignment really is. A large deviation says
  that the points do not make one line (a corner, a bend).

Before you start
----------------

- Open the **Space** workspace on an epoch where the model is drawn.
- Switch off the proxies in the **Overlays** (*Proxies*) when they cover the
  model, so the clicks fall on it.
- An alignment is an extractor of **one** document: click on the models of one
  document. A model with no document cannot be read (the bar says so).

Click the alignment
-------------------

#. In the toolbar on the left of the 3D view (:kbd:`T`), choose **Alignment**
   (⟷), after *Annotate surface*.
#. Click the first point on the model, then the next ones along the wall. While
   you click, the points are joined, an elastic side goes from the last point
   to the pointer, and the fitted line is drawn with the pointer as the next
   point; the bar over the view gives the reading as it would be.
#. Close it with :kbd:`Enter` or a double click (two points at least). The
   extractor is written and selected; with *Annotate when it is written* on, a
   small field opens beside the last point: write the annotation and press
   :kbd:`Enter` (it becomes the extractor's description), or :kbd:`Esc`.

:kbd:`Backspace` takes the last point back; :kbd:`Esc` clears the points.
With **Snap to the mesh's edges** (Tool tab) a click goes to the edge read
around it, as in :ref:`how-to-space-from-elevation`: useful on a sharp arris,
not on a rubble facing.

.. image:: /_static/screens/space/align-preview.png
   :alt: Three points clicked along the top of a wall, the elastic side to the pointer and the reading in the bar

.. image:: /_static/screens/space/align-tool.png
   :alt: The Tool tab of Alignment: how it works, the document, the switches, the reading

What is written
---------------

One **extractor** of the document (named as the document's extractors are,
*D.01.62*), extracted from the document, with:

- its **place**: a line (two points) or a polyline (more) **on the model**
  you clicked, in the model's frame;
- **what it read**: the azimuth as its value (in degrees), the line in plan,
  the length, the slope and the fit, kept with the place;
- the reading in words as its **result** (*azimuth 170.3° · 23.451 m · slope
  0.6° · largest deviation 6.6 cm (5 points)*), shown on its mark in the view.

Its mark stays in the view (category *3D extractors* of the Visibility);
clicking it again opens the annotation.

.. image:: /_static/screens/space/align-two-walls.png
   :alt: The alignments of the two long walls of the podium, with their readings

Correct it
----------

Select the alignment (its mark in the view, or the extractor in the Outliner)
with the **Select** tool: its points get **handles**.

- **Drag** a point on the model: the reading follows; at the release the
  reading is placed again and read again.
- A **«+»** in the middle of each side inserts a point there.
- Click a point and press :kbd:`X`, or **×** in the **Item** tab, to take it
  away (two points stay).

Each correction is one step of the undo (:kbd:`Ctrl+Z` / :kbd:`⌘Z`).

The **Item** tab says everything it read — azimuth and axis, the length, the
path, the slope and the rise, the fit with its largest deviation — and lists
its points (each with the side that leaves it), the annotation (editable) and
what it feeds.

.. image:: /_static/screens/space/align-item.png
   :alt: The Item tab of an alignment: azimuth, axis, length, slope, the fit, the points, the annotation and the actions

Use it
------

- **Interpretation: a property of a unit…** (Item tab, or *Interpretation* in
  the Inspector): the bubble *What are you extracting?* — choose a property of
  a unit, or make one; *alignment* and the qualia *orientation* (azimuth, tilt)
  are offered first. The extractor then feeds that property, in the unit's
  paradata group.
- **Axis of a seven-point box**: the box's points 1 and 2 (*Alignment start*,
  *Alignment end*) are the ends of the fitted line; you click the other five.
- **Axis of a wall**: *Wall from plan* in *axis + thickness* mode, its axis the
  alignment's points; :kbd:`Enter` closes the plan.

The Tool tab of the box and of the wall (axis mode) also has a row **Axis from
an alignment** with the alignments of the graph.

.. image:: /_static/screens/space/align-box.png
   :alt: Seven-point box: points 1 and 2 taken from an alignment, the third asked
