.. _how-to-bring-in-porta-dentro:

Bring files in with Porta dentro
================================

*Bring photographs, drawings, 3D models, tilesets and GIS layers into a study as the files of a document, through every door of* Porta dentro.

*Porta dentro* (“bringing files in as documents”) is the one window through
which a file of the disk, or of a bucket, becomes part of a study. The tutorial
:doc:`/tutorial/files-to-documents` walks it once, with a few photographs. This
page covers the rest: the ways in, what the window decides by itself, the role
of each model, the epoch a model represents, tilesets, GIS layers, Tropy
sessions, and how a document grows over time.

Before you start
----------------

A graph must be open: *Porta dentro* writes into the active graph, and without
one EMStudio answers **Open a document first**. A study file (an ``.em.json`` or
a GraphML) never goes through this window: it opens as a graph (see
:doc:`import-graphml`).

Choose a door
-------------

The same window opens from five places.

``File ▸ Porta dentro…``
   Asks for the files, then opens the window.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The system dialog opens in the folder of the open study. Pick several
         files at once: they become files of the same document.

      .. tab-item:: Web
         :sync: web

         EMStudio's own file picker opens, inside the page, and takes one file
         at a time. To gather several files in one document, repeat the command
         and choose the same document each time, or start from the **Files**
         window, which takes a selection.

The **+** in the bar of the **3D scene**
   Opens the same command from the Space, with the epoch shown in the scene
   already proposed as the epoch the models represent.

A drop on the **3D scene**
   A file dragged from the **Files** window onto the scene goes straight to the
   window, with the epoch of the scene proposed. On the desktop, files dragged
   from the system's file manager do the same. A tileset dropped on the scene or
   on the **Viewer & card** is first recognised and previewed where it falls;
   its preview then becomes a row of the window.

The **Files** window
   In **Disk** mode, choose one or more files (:kbd:`Ctrl`-click, or :kbd:`⌘`-click on macOS,
   and :kbd:`Shift`-click) and open the **Info** tab: the button **Porta dentro…**
   (**Porta dentro 3 file…** for three files) brings in the selection.

The **Files** window in **Bucket** mode
   Choose the files in the bucket and press **Porta dentro…** at the foot of
   the list. The files stay in the bucket, and the graph cites them by their
   address; the window marks each of them **in the bucket: it stays there, the
   graph cites its address**.

Fill the window
---------------

.. image:: /_static/screens/dialogs/porta-dentro.png
   :alt: The Porta dentro window with three pictures: each file with its kind, the document they will belong to, its licence and when it was made.

#. Read the list of files at the top. Beside each name EMStudio says what the
   file is, by its extension: a **picture**, a **3D model**, a **tileset**, a
   **DXF drawing**, a **vector (GIS)**, a **georeferenced image (GIS)**, or a
   **file**. A picture that carries its own frame (a GeoTIFF, or an image with
   a world file beside it) is read as a **georeferenced image (GIS)**.
#. Check the role of each file. A picture or any other file becomes **a file of
   the document (no place in the space)**, and a GIS layer becomes an
   **RMDoc (a GIS document: never an RM)**: their role is fixed. A 3D model or
   a tileset has a list of roles to choose from:

   - **RM — represents the place in an epoch**: the model shows the site as it
     was in an epoch, and appears in the Space when that epoch is shown;
   - **RMDoc — the document laid in the space**: the model is a document placed
     in the Space, such as a scan of a drawing or a survey shown as evidence;
   - **source of the tileset (its master)**: offered when a tileset is among the
     files, and proposed by default for a mesh that comes with it. The mesh
     becomes the master from which the tileset was made, and is not drawn in the
     Space.

#. For a GIS layer that declares no coordinate system (a DXF, typically), a box
   titled with its name, **declares no CRS: CRS + shift**, asks for the
   coordinate system and the X, Y, Z shift. EMStudio proposes those of the
   study's georeferencing; correct them if the file was drawn in another frame.
#. Under **Document:** (or **Document of the 3 files:**), choose where the
   files go. **New document D.14** (the first free number of the study) creates
   a document: write what it is in the field beside the list, for example
   ``Survey 2015 (corrected EPSG)``. To add the files to a document the study
   already has, choose it in the list instead.
#. If there are models, choose in **Which epoch does it represent?** the epoch
   they show. The epoch goes to the models, never to the document.
#. Still for models, fill **When were the models acquired?** with the date of
   the survey (a year, a date, or two years for a campaign, as ``2013–2015``),
   and **valid until** with the date after which the models no longer show the
   place as it is. Leave **valid until** empty while they still do.
#. Choose a **Licence**: one of the Creative Commons licences, **Licence: study
   use, not publishable**, or **— as it is —** to leave the licence unsaid.
#. Fill **When was this document made?** with a year, a month or a day
   (``2015``, ``2015-06``, ``1835``). The date is required: until it is
   written, the window answers **The document's date is wanted** and stays open.
#. Press **Porta dentro**.

Three dates are kept apart in this window, because they answer three different
questions. A reconstruction made in 2026 (the document's date), from a survey
acquired in 2015 (the models' acquisition), can represent the II century A.D.
(the epoch).

Add files to a document that already exists
-------------------------------------------

A document grows: a second campaign of photographs, a corrected survey, a
drawing scanned later. Bring the new files in and choose the existing document
under **Document:**. EMStudio then fills **When was this document made?** with
the date the document already has, and proposes its licence. Confirm the date,
or correct it: a correction is reported in the **Log**.

A file the graph already cites is never duplicated. If a model with the same
address is already in the graph, the document publishes the model that is there,
and the message counts it among the files **already in the graph**.

To replace one file of a document with a newer revision, keeping the old one
citable, select the file and use **Replace…** in the **Inspector** (see
:doc:`/reference/inspector`).

Bring in a Tropy session
------------------------

A Tropy export (a JSON-LD file) brought through any door opens the window in its
other form: a table whose title begins with **Tropy**, with one row per item and the columns
**Item**, **Photos**, **Date**, **Licence** and **Document**. Each item becomes a
document, and its photos become its files.

#. Fill the rows whose date is missing: they are highlighted, and the window
   says how many are left.
#. In **Document**, leave **new** or choose an existing document to merge the
   item into. An item with the same name as a document of the study is proposed
   for merging.
#. Press **Porta dentro**. All the items come in together.

What you get
------------

A message says which document received the files and how many came in, for
example **D.14: a new document with 2 files (1 already in the graph, published by
it)**. The document is a node of the graph, with its files, its date and its
licence; the models are in their epoch; a GIS layer is laid in the Space; a
mesh brought in as the source of a tileset is recorded as its master in the
chain of the tileset. A dropped tileset leaves its preview and is drawn as a
model of the study, in its own frame.

The whole operation is one step of the history: ``Edit ▸ Undo`` takes it all
back.

A file that no reader of EMStudio knows, but that an installed plugin can read,
is handed to that plugin instead (see
:doc:`/how-to/extensions/install-packages-and-plugins`).

See also
--------

- :doc:`/tutorial/files-to-documents`, the first walk through the window.
- :doc:`/how-to/sources/documents-and-media`, to read and describe the documents.
- :doc:`/how-to/sources/declare-provenance`, to say where each file comes from.
- :doc:`/how-to/space/load-models-and-tilesets` and
  :doc:`/how-to/space/georeference-a-study`, for models in the Space.
- :doc:`/reference/desktop-and-web`, for the file pickers of the two versions.
