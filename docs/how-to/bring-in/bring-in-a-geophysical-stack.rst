.. _how-to-bring-in-geophysical-stack:

Bring in a geophysical stack
============================

*Bring the slices and sections of a GPR, ERT or magnetometric survey into a study as documents, and see them in the Space under a depth cursor.*

A geophysical survey gives a **stack**: a folder of slices at increasing depth,
sometimes with vertical sections beside them. EMStudio does not read stacks by
itself. The **Geofisica** package does: a mixed package, with a vocabulary of
methods, quantities and anomalies, and the code that reads the folder, writes it
into the graph and draws it in the Space. What each part becomes in the graph is
explained in :doc:`/explanation/slice-as-document`; the fields and the formats
are listed in :doc:`/reference/geofisica`.

Before you start
----------------

- Install **Geofisica** from the official list, in ``Tools ▸ Extensions…``
  (see :doc:`/how-to/extensions/repositories-signatures-updates` and
  :doc:`/how-to/extensions/install-packages-and-plugins`). Its code reads
  files and writes into the graph: answer the trust question for it.
- Open a study: the stack is written into the active graph.
- Keep the stack in a folder of its own, one file for each slice. The depth of a
  slice is read from its name, in metres, centimetres or millimetres
  (``100-150cm.ASC``, ``slice_0.000 - 0.100m.CSV``). Nothing is ever written
  beside the files: the folder may be read only.

Open the folder
---------------

#. Choose ``File ▸ Porta dentro una cartella…``.
#. In **Porta dentro: the folder**, go to the stack's folder and press
   **Choose this folder**.
#. If more than one add-on reads folders, EMStudio asks **Which add-on reads …?**:
   choose **Geophysical stack**.

The panel **Geophysical stack** opens on the right, with the folder already in
its field **Folder**. Under **What it is**, the package says what it found
without reading the pictures: the stack, the format, how many slices and
sections, the depths, the method, and how many documents of this stack the graph
already has.

A single file of a stack works as well. A ``.asc`` or ``.xyz`` file brought in
through ``File ▸ Porta dentro…`` goes to the package, which reads its folder.
For the files EMStudio reads by itself (``.csv``, ``.tif``, ``.tiff``, ``.jpg``,
``.jpeg``, ``.png``), the row of the file offers **Read as:** with the reading of
EMStudio first, **EMStudio (as it is)**: choose **Geofisica · Geophysical stack**
to hand the file to the package instead.

.. image:: /_static/screens/geophysics/read-as.png
   :alt: The Porta dentro window with the GeoTIFF mean_v2.tif: under Read as, Geofisica · Geophysical stack is chosen, and the GIS reading of EMStudio is struck through.

Say what the files do not
-------------------------

The files of a stack rarely say everything. Fill in the panel what you know from
the survey's report, and leave the rest empty.

#. **Method**: leave **as the format suggests**, or choose **GPR
   (ground-penetrating radar)**, **ERT (electrical resistivity)** or
   **Magnetometry**.
#. **Format**: leave **read from the files** unless the package reads the
   folder in the wrong way.
#. **Stack name**: empty, it is the folder's name. It is the stack's identity:
   keep it the same when you import again.
#. **Quantity** and **Unit**: what the values measure, for example ``electrical
   resistivity`` and ``ohm.m``.
#. **Width (x)** and **Height (y)**, in metres: the size of a slice on the
   ground, for files that carry no coordinates (ASCII matrices, pictures).
#. **Sections**: the length × depth of each vertical section, as
   ``VERT1=92x8, VERT4=50x8``; or **Every section: length** and **Every section:
   depth** when they are all the same.
#. **Values in the file**, **…stand for**, **…in**, **…according to**: the
   scale of the values, when the report gives it, for example ``1-255``,
   ``0-3500``, ``ohm.m``, ``colour bar, report p. 5``. The scale is declared,
   never measured, and every document keeps it as a declaration.
#. **Colours** and **Colour range**: the colour scheme of the pictures, and one
   range for the whole stack or one per slice.
#. **Where the slices are, according to**: leave **the source of the position**,
   or say who places the slices: **the instrument (reality based)**, **a
   documentation (observable)**, **by eye (asserted)**.
#. **Placement (JSON)** is for an origin and a rotation that you already know,
   for example from the report's plan.
#. Press **Import**.

What you get
------------

A message says how many steps were written, each one an undo step, and the
Outliner lists the new documents under **Documents**. The stack is in the graph:

- the **acquisition** of the stack, with its method, quantity, unit and declared
  scale;
- a **resource** for each file of the folder;
- a **document** for each slice and each section, named with the next free
  numbers (``D.01``, ``D.02``…), with its depth band and its place in the stack;
- the step that turned the files into pictures, with the package and its
  version as its software.

Importing the same folder again adds nothing: the documents are the same, and
the panel says **importing again updates them**. A file renamed in the folder is
still the same document; a file whose content changed is a new resource.

The pictures are made once, in the folder that the package keeps for itself on
this computer (see :doc:`/reference/file-locations`), each with its stamp beside
it.

See the slices in the Space
---------------------------

Switch to the **Space** workspace. The slices of the stack are drawn as planes
under the ground, at their depth, and the sections stand upright beside them.

.. image:: /_static/screens/geophysics/slices-in-space.jpg
   :alt: The Space with the ERT stack of the Basilica Iulia: one slice shown with the six sections in a row beside it, and above the scene the depth cursor ERT stack basilica-iulia-ert · D.04 · 3.50–4.00 m below ground (4/6).

- **The depth cursor**, over the scene, names the stack, the slice shown, its
  depth and its place among the slices. Press **▲** or **▼**, or :kbd:`↑` and
  :kbd:`↓` once the cursor has the focus, to go to a shallower or a deeper
  slice.
- **Visibility ▾** has a row for each stack under **Plugin layers**: show or
  hide it, its opacity, the mode, the slices and the sections.

  .. image:: /_static/screens/geophysics/visibility-row.png
     :alt: The Plugin layers part of the Visibility menu: the ERT stack basilica-iulia-ert ticked with its opacity slider, the mode All, sections (6) ticked, and the line 6 slices, 6 sections · in its own frame (not placed in the world).

- The mode is **All**, **One at a time** or **Down to**: every slice, only the
  slice of the cursor, or every slice from the top down to the cursor's. Over 60
  planes they are shown one at a time, and **Down to** shows at most the 60
  deepest.
- The row also says where the stack is drawn. A stack with an origin, in a study
  georeferenced in the same EPSG, lies in the world; otherwise it is drawn **in
  its own frame**, and the row says why.

Only the pictures of the planes shown are loaded, and a plane that is hidden
gives its memory back.

See also
--------

- :doc:`/how-to/sources/trace-an-anomaly-on-a-slice`, to read an anomaly on the
  slices.
- :doc:`/reference/geofisica`, the fields, the commands and the formats.
- :doc:`/explanation/slice-as-document`, why a slice is a document.
- :doc:`porta-dentro`, for files that become documents through EMStudio's own
  reading.
