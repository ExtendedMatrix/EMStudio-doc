.. _tutorial-files-to-documents:

From files to documents in five minutes
=======================================

*Bring photographs, drawings and models into a study as documents, in one window.*

A file on the disk is not yet part of a study. It becomes part of it when the
graph knows what the file is, which **document** it belongs to, when that
document was made and, for a model, which epoch it shows. EMStudio does all of
this in one window, **Bring in…**. In this tutorial you bring a few files into
Templu Mare and find them in the study as one document.

Before you start
----------------

You need a study open in EMStudio (the copy of Templu Mare from
:doc:`first-study` is fine) and a few files that belong together: for example
three photographs of the same wall taken on the same day, or a drawing and its
scan.

Bring the files in
------------------

#. Choose ``File ▸ Bring in…``. The window **Bring in** asks *What comes into
   the study?*: choose **Files…** and press **Choose…**.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The system's dialog opens: pick all the files at once and confirm.

      .. tab-item:: Web
         :sync: web

         EMStudio's own file picker opens, inside the page: pick one file and
         confirm. To bring in several files, repeat the command for each file
         and choose the same document every time.

#. The window **Bring in…** lists the files. Next to each name, EMStudio
   says what the file is (a picture, a 3D model, a tileset, a drawing, a GIS
   layer) and what it becomes in the study: a picture is **a file of the
   document**, a model can be the representation of the place in an epoch.
#. Under **Document**, leave **New document** selected and write what the
   document is in the field beside it, for example ``Photographs of the
   north wall``. To add the files to a document the study already has, choose it
   in the list instead.
#. Fill **When was this document made?** with a year, a month or a day, for
   example ``2015`` or ``2015-06``. The date is required: it is the date of the
   document, which is often different from the date of what the document shows.
#. If the files are 3D models, choose in **Which epoch does it represent?** the
   epoch the models show, and say in **When were the models acquired?** when the
   survey was made. A reconstruction made in 2026 can represent the II century
   A.D.: the two dates are kept apart.
#. Choose a **Licence**, or leave **— as it is —**.
#. Press **Bring in**.

What you get
------------

A message confirms how many files came in and into which document. The new
document is a node of the graph, with its files, its date and its licence.

- In the **Outliner**, the document is listed under **Documents**. Select it, and
  the **Inspector** shows its fields.
- In the **Sources** workspace, the **Viewer & card** shows its files.
- A model brought in as the representation of an epoch appears in the
  **Space** workspace when that epoch is chosen.

The whole operation is one step of the history: ``Edit ▸ Undo`` takes it all
back.

Other ways in
-------------

``File ▸ Bring in…`` is one of several doors to the same window. You also
reach it by dropping a file on the **3D scene**, with the **+** in the bar of the
Space, and from a selection of files in the **Files** window of the
**Archive** workspace. A study file (an ``.em.json`` or a GraphML) is not brought
in this way: it opens as a graph.

What next
---------

The how-to guides of :doc:`/how-to/bring-in/index` cover the other ways material
enters a study: a GraphML matrix, a table read through a mapping, a folder of
sources read by StratiMiner. :doc:`/how-to/sources/declare-provenance` explains
how to say where each file comes from.
