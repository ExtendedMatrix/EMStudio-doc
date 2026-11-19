.. _how-to-sources-trace-an-anomaly-on-a-slice:

Trace an anomaly on a slice
===========================

*Read an anomaly on the slices of a geophysical stack in the Space, and record it as a unit with the slices it was read on.*

An anomaly on a slice is a reading: *here*, at this depth, the signal changes.
The **Geofisica** package records it as on an image (see
:doc:`trace-regions-on-images`): a stratigraphic unit, **USD**, whose properties
come from an **extractor** of the slice, with the place of the anomaly on it.
When the anomaly is read on several slices, a **combiner** gathers one extractor
for each slice. What the anomaly *is* stays your judgement: the unit says the
shape read and the slices, nothing more.

Before you start
----------------

- Bring the stack into the study and show it in the **Space** (see
  :doc:`/how-to/bring-in/bring-in-a-geophysical-stack`).
- Go with the depth cursor to the slice where the anomaly shows.

Trace
-----

Over the scene, beside the depth cursor, a bar offers the three tools of the
package: **◉** **Point anomaly on a slice**, **〰** **Linear anomaly on a
slice** and **▱** **Areal anomaly on a slice**. The bar is there while a stack
of the package is shown.

.. image:: /_static/screens/geophysics/trace-area.jpg
   :alt: The Space seen from above on a slice of the Basilica Iulia: the bar Areal anomaly on a slice: 3 points with its tick and cross, and below it the depth cursor at D.03 · 3.00–3.50 m below ground (3/6).

#. Press the tool of the shape you read.
#. Click on the slice: each click is a point of the anomaly, drawn at once on
   the plane in yellow, and the bar counts them, for example **Linear anomaly on
   a slice: 2 points**. A click elsewhere than on a slice of the stack is
   answered **Click on a slice of the stack**.
#. A point is written at the first click. Close a line or an area with a double
   click, with **✓** or with :kbd:`Enter`.
#. To stop without writing, press **✕** or :kbd:`Esc`: the yellow points go.

.. image:: /_static/screens/geophysics/trace-pending.png
   :alt: A slice of the Basilica Iulia seen from above: a line of three yellow points being traced, the bar Linear anomaly on a slice: 3 points with its tick and cross, and a cyan line of an anomaly already written.

Once written, the anomaly stays drawn on the plane in cyan, on each slice it
was read on: a dot, a line, or the closed outline of an area, with its
vertices.

.. image:: /_static/screens/geophysics/trace-mark.png
   :alt: The same slice after the tick: the new line is drawn in cyan beside the earlier anomaly, and the bar Linear anomaly on a slice: 0 points waits for the next trace.

The trace is written as one step: ``Edit ▸ Undo`` takes it all back. The same
trace written twice adds nothing. A tool stays armed only on its document: when
the Space shows another study, it is put down.

Read the anomaly on several slices
----------------------------------

An anomaly often runs through several depths. Two ways gather them in one
reading:

- click on planes of different slices of the same stack, with **Down to** in
  **Visibility ▾** so that they are shown together;
- with **Down to**, the slices shown down to the cursor's are read too, at the
  same place.

The unit then gets a **combiner**, with one extractor for each slice. Only the
horizontal slices of the same stack are taken; a trace on a vertical section
stays on that section.

What you get
------------

- A new unit **USD**, with the kind of the anomaly read: point, linear or areal,
  after the tool. The vocabulary of the package also has **diffraction
  hyperbola**, **high-resistivity zone** and **low-resistivity zone**.
- Its properties: the kind, the method and the depth band, each with the slice
  as its provenance.
- An **extractor** of the slice, with the anomaly's place in metres of the
  stack, on the slice's file; or a **combiner** of the extractors of several
  slices.

Select the unit in the **Outliner** and look at the **Inspector**: the section
**Geophysical reading** says on how many slices it was read, through which
extractor or combiner, the depth bands and the slices.

.. image:: /_static/screens/geophysics/inspector-combiner.png
   :alt: The Geophysical reading section of the Inspector for an anomaly: Read on 2 geophysical slices, Through 1 combiner, Bands 1.00–3.00 m below ground, and the two slices D.01 and D.02.

See also
--------

- :doc:`trace-regions-on-images`, the same reading on a photograph or a drawing.
- :doc:`/reference/geofisica`, the tools and the Inspector section.
- :doc:`/explanation/slice-as-document`, the unit, the extractor and the slice.
