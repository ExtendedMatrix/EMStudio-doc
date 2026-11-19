.. _reference-geofisica:

The Geofisica package
=====================

*What the geophysics package adds to EMStudio: the formats it reads, the import panel, the Space, the tools and the Inspector section.*

**Geofisica** 0.1.0 is a mixed package of the official list of the Extended
Matrix: its data are the vocabularies of methods, quantities and anomalies and
the colour schemes; its code reads stacks, writes them into the graph and draws
them. The tasks are in :doc:`/how-to/bring-in/bring-in-a-geophysical-stack` and
:doc:`/how-to/sources/trace-an-anomaly-on-a-slice`.

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Item
     - Value
   * - Data
     - vocabularies *anomalie*, *metodi*, *grandezze*; colour schemes grey,
       viridis, hot, jet; licence CC-BY-4.0
   * - Code
     - module ``geofisica``, for EMStudio and Blender; licence
       GPL-3.0-or-later; it needs the ``em`` API 1.2 or later
   * - Permission
     - **files**: reads the chosen geophysical stacks and writes their slice
       cache
   * - Where it writes
     - the graph, and the cache of pictures in the plugins' own folder (see
       :doc:`file-locations`); never beside the stack

Formats
-------

The format is read from the files, or chosen in **Format**.

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Format
     - What the package reads
   * - **CSV grids**
     - the GPR slices exported as CSV, the step of the grid in the header, the
       depth in the name
   * - **ASCII matrices**
     - matrices of numbers without a header (``.asc``), ``0`` for no value; the
       size on the ground given in the panel; the vertical sections
       (``VERT…``) with their length and depth
   * - **XYZV volumes**
     - points with a value, divided into planes; a derived resource, not a
       drawn document
   * - **XYZ lines**
     - XYZ files in blocks ``line N``
   * - **GeoTIFF rasters**
     - float rasters with their georeference, no-value cells, saturated cells
       reported, a world file checked against the file's own tags
   * - **Pictures**
     - pictures of slices, the size on the ground given in the panel
   * - **Screen captures**
     - pictures captured from the screen of a geophysics program, with the
       frame from pixels to metres declared once for the whole stack, in the
       panel: what the plot's ticks stand for, and their pixels or nothing
       (measured on the first capture)

The depth of a slice is read from its name, in metres, centimetres or
millimetres. A product without a depth (an average over the stack, say) lies at
the ground.

Where it appears
----------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Where
     - What
   * - ``File ▸ Porta dentro una cartella…``
     - **Geophysical stack**: reads a folder and opens the panel with it
   * - ``File ▸ Porta dentro…``
     - ``.asc`` and ``.xyz`` go to the package; ``.csv``, ``.tif``, ``.tiff``,
       ``.jpg``, ``.jpeg``, ``.png`` offer **Read as:** **Geofisica ·
       Geophysical stack** beside **EMStudio (as it is)**
   * - The panel **Geophysical stack**
     - the import (below)
   * - **Space**, **Visibility ▾** ▸ **Plugin layers**
     - the stacks as planes, with the depth cursor over the scene
   * - **Space**, the **Outliner**, under **No epoch**
     - **Slice stacks**: a row for each stack drawn
   * - **Space**, the bar over the scene
     - **Point anomaly on a slice**, **Linear anomaly on a slice**, **Areal
       anomaly on a slice**
   * - **Inspector**
     - the section **Geophysical reading**, on a slice, a section or an anomaly

The import panel
----------------

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Field
     - Meaning
   * - **Folder**
     - the stack's folder; ``File ▸ Porta dentro una cartella…`` writes it here
   * - **What it is**
     - what the package found: stack, format, slices, sections, depths, method,
       the frame of the screen captures, what is missing, the documents of this
       stack already in the graph
   * - **Method**
     - **as the format suggests**, **GPR (ground-penetrating radar)**, **ERT
       (electrical resistivity)**, **Magnetometry**
   * - **Format**
     - **read from the files**, or one of the formats above
   * - **Stack name**
     - empty: the folder's name. It is the stack's identity: keep it the same
       to import again
   * - **Quantity**, **Unit**
     - what the values measure, and in which unit
   * - **Width (x)**, **Height (y)**
     - the size of a slice on the ground, in metres
   * - **Sections**
     - length × depth of each line, as ``VERT1=92x8, VERT4=50x8``
   * - **Every section: length**, **Every section: depth**
     - the same size for every section, in metres
   * - **Captures: x ticks**, **Captures: y ticks**
     - what the plot's first and last ticks stand for, in metres, as ``-50 25``
       and ``-22 37``. Written, they make the format **Screen captures**
   * - **Captures: frame in pixels**
     - left, top, right, bottom of those ticks on the capture, as ``610, 170,
       1303, 715``; empty: measured on the first capture
   * - **Origin (E, N)**
     - where x = 0, y = 0 lies, as ``701806.741, 4234824.081``; kept to the
       millimetre
   * - **EPSG**
     - the code of the origin's reference system, as ``25830``
   * - **The origin, according to**
     - **not said**, **the instrument (its own coordinates)**, **a documentation
       (figure, plan, report)**, **by eye**: it gives the axis *geometry* of the
       slices, *reality based*, *observable* or *asserted*
   * - **Values in the file**, **…stand for**, **…in**, **…according to**
     - the declared scale: the file's range (``1-255``), what it stands for
       (``0-3500``), the unit (``ohm.m``), and where the scale comes from
   * - **Colours**
     - **the method's**, **grey**, **viridis**, **hot**, **jet**
   * - **Colour range**
     - **as the format suggests**, **one for the whole stack**, **one per
       slice**
   * - **Where the slices are, according to**
     - **the source of the position**, **the instrument (reality based)**, **a
       documentation (observable)**, **by eye (asserted)**
   * - **Placement (JSON)**
     - advanced: ``{"origin": [E, N], "rotation": 0, "epsg": 32633, "source":
       "figure"}``
   * - **Import**
     - writes the stack into the graph, as one step

A word written in a field wins over the same key in **Placement (JSON)**. A
wrong word is refused with its reason, and nothing is written: ticks on one
axis only, a frame that is not four pixels, an EPSG that is not a code, an EPSG
or a source without an origin (**the EPSG or the source alone place nothing**),
captures without a frame, a frame not found on the first capture (**write its
pixels**).

The stack in the Space
----------------------

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Control
     - What it does
   * - The depth cursor
     - over the scene: the stack, the slice, its depth below ground, its place
       (``4/6``); **▲** / **▼**, or :kbd:`↑` / :kbd:`↓` with the focus
   * - The row of the stack
     - in **Visibility ▾**: shown or hidden, opacity, mode, slice, **sections
       (n)**, where the stack lies
   * - The row in the Outliner
     - under **No epoch** ▸ **Slice stacks**, with its slices and sections
       (``6 slices, 6 sections``): the eye shows or hides the stack in every
       Space open, a click selects its acquisition
   * - **All**, **One at a time**, **Down to**
     - every slice, the cursor's slice, the slices down to the cursor's. Over
       60 planes they are shown one at a time; **Down to** shows at most 60
   * - Where it lies
     - in the world when the stack has an origin and the study a georeference
       in the same EPSG; otherwise **in its own frame**, with the reason
       (**not placed in the world**, **the study has no georeference**,
       **another EPSG than the study's**)

The tracing tools
-----------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Tool
     - What it writes
   * - **◉ Point anomaly on a slice**
     - a point, at the first click
   * - **〰 Linear anomaly on a slice**
     - a line; a double click, **✓** or :kbd:`Enter` closes it
   * - **▱ Areal anomaly on a slice**
     - an area; a double click, **✓** or :kbd:`Enter` closes it

While you trace, the points placed are drawn on the plane in yellow, and the
bar counts them (**Linear anomaly on a slice: 1 point**). :kbd:`Esc` or **✕**
stops. A tool is put down when the Space shows another document. Each trace writes a unit **USD**, its properties
(kind of anomaly, method, top and bottom of the band, confidence when given),
and an extractor of the slice, or a combiner of the extractors of several
slices. The kinds of anomaly are **point anomaly**, **linear anomaly**, **areal
anomaly**, **diffraction hyperbola**, **high-resistivity zone**,
**low-resistivity zone**.

Once written, the anomaly stays drawn on each slice it was read on, in cyan: a
dot for a point, a line, a closed outline for an area, with its vertices. It
follows the plane: on a section along its line, on a slice at its depth.

The Inspector section
---------------------

**Geophysical reading** appears on a document of a stack and on a unit traced on
the slices.

.. image:: /_static/screens/geophysics/inspector-slice.png
   :alt: The Geophysical reading section of the Inspector on a slice of the Basilica Iulia: method ERT, horizontal slice, depth 1.00–1.50 m below ground, electrical resistivity, the declared scale, the values in the file, observable, extent, stack, file, identity and stamp.

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - On
     - Rows
   * - A slice or a section
     - **Method**, **What**, **Depth**, **Quantity**, **Scale of the values**,
       **Values in the file**, **Where it lies**, **Extent**, **Stack**,
       **File**, **Identity**, **Stamp**
   * - An anomaly
     - **Anomaly**, **Read on**, **Through**, **Bands**, **Slice**

A stack that cannot be read is answered with its reason, in the language of the
interface: **the stack X cannot be read: …**.

Commands
--------

For scripts and the Python console (see :doc:`/how-to/extensions/python-console`).

.. list-table::
   :header-rows: 1
   :widths: 35 15 50

   * - Command
     - Writes
     - What
   * - ``geofisica.read``
     - yes
     - the reader of *Porta dentro*: a folder, or a file of a stack
   * - ``geofisica.describe``
     - no
     - what a folder is, without reading the pictures
   * - ``geofisica.ingest``
     - yes
     - **Import a geophysical stack**: the button of the panel
   * - ``geofisica.layer``
     - no
     - the stacks as layers of the Space
   * - ``geofisica.section``
     - no
     - the Inspector section
   * - ``geofisica.trace.point``, ``geofisica.trace.line``,
       ``geofisica.trace.area``
     - yes
     - the three tracing tools
