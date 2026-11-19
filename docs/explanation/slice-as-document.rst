.. _explanation-slice-as-document:

The slice as a document
=======================

*Why a geophysical slice enters the graph as a document, an anomaly as a unit read on it, and its picture with a stamp beside it.*

A geophysical survey measures the ground; it does not dig it. A GPR slice at
1.50 m shows where the signal changes at that depth, an ERT section where the
ground resists the current more or less. Neither is a stratigraphic unit. A
graph of the Extended Matrix is built from interpretations, and the
measurements are what the interpretations are read on. The **Geofisica** package
follows this division: it brings the measurements in as documents, helps you
trace what you read on them, and leaves the judgement to you.

The stack, the files, the slices
--------------------------------

A survey is an act of acquisition, and it is recorded as one: the **stack** is
the acquisition of the transformation chain (see :doc:`dtc-and-em`), with its
method, the quantity measured and its unit. Each file of the stack is a
**resource** that the acquisition produced. Each **slice**, a band of depth, and
each vertical **section** is a **document**: the thing a reader cites and reads
on, like a photograph or a drawing.

A slice keeps its identity whatever happens to its file: it is named by the
stack and its depth band, as ``ert:basilica-ert-sezioni-2D#d1.000-1.500m``. A
file exported again, or renamed, is the same slice. This is why importing a
stack again adds nothing.

The three axes of a slice
-------------------------

Every document of EMStudio is described along three axes. On two of them a slice
is always the same:

- its **role** is *analytical*: it is made to analyse, not to represent the
  place in an epoch;
- its **content** is a *2D object*: a picture of values, even when it is laid
  in three dimensions.

The third axis, **geometry**, says who places the slice in space, and it changes
from survey to survey:

- *reality based* when the instrument gives the coordinates (a GeoTIFF with its
  georeference, for example);
- *observable* when the position comes from another documentation, such as the
  plan of the report or a figure;
- *asserted* when it was placed by eye.

The package proposes the axis from the source of the position, and the panel
lets you say it.

A declared scale is not a measure
---------------------------------

Some files keep values that are not the quantity measured. The ERT slices of the
Basilica Iulia hold numbers from 1 to 255, not ohm metres. The report's colour
bar says that they stand for 0 to 3500 Ω·m. The package keeps both: the values
as they are in the file, and the scale as a **declaration**, with its source
(``colour bar, report p. 5``) and a **low** confidence. The Inspector writes it **declared**, and nothing calls those values
measured.

An anomaly is a unit read on a slice
------------------------------------

What you trace on a slice is an interpretation, and it takes the form every
interpretation of EMStudio takes: a stratigraphic unit, **USD**, whose
properties are read on a document. The link to the slice is an **extractor**,
with the place of the anomaly on the slice's file; an anomaly read on several
slices has a **combiner** of one extractor for each slice. No new kind of node
is needed. The unit says nothing about geophysics; the certainty of the reading
lies in its link to the documents, and anyone can follow it back to the slice,
the file and the survey.

Where the stamp is, and how it is read
--------------------------------------

The package makes files from files: the picture of each slice, and the
description of the whole stack, the manifest. They are made once, in the cache
of the package in the plugins' folder of this computer
(``plugins-data/geofisica/cache/<digest>/``, see
:doc:`/reference/file-locations`), and never beside the survey, which may be
read only.

Each of these files leaves with its **stamp** beside it: a small file with the
same name and ``.stamp.json`` after it, as ``slice_000_1.000-1.500m.png`` and
``slice_000_1.000-1.500m.png.stamp.json``. The stamp is in the format of
``dtcstamp``, the same as the stamps of the **Files** window, and says:

- what the file is, by its fingerprint (a digest of its bytes), size and type;
- what it was made from: the files of the stack, by their fingerprint, and the
  acquisition, by its identity;
- how: a format conversion, with its parameters (the colour scheme, the
  percentiles of the colour range, the declared scale);
- by whom: the package with its version, then the library that wrote it. The
  agent is the software, not a person.

The stamp joins the chain of the graph. The acquisition produced the resources;
the stamp of a picture cites those resources by the same identity; so the
chain reads from the survey, to its files, to the picture on the screen. The
Inspector's row **Stamp** names the stamp of the picture it shows. A picture
whose stamp is missing, or whose bytes no longer match it, is a picture that
can no longer be traced back.

See also
--------

- :doc:`dtc-and-em`, the two planes of the record.
- :doc:`/how-to/bring-in/bring-in-a-geophysical-stack` and
  :doc:`/how-to/sources/trace-an-anomaly-on-a-slice`.
- :doc:`/reference/geofisica`, the fields and the commands.
