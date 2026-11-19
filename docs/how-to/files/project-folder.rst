.. _how-to-files-project-folder:

Work with a project folder
==========================

*Create, open, reorder and close an EM project folder.*

An EM project is a folder. Its heart is the ``.em.json`` of the study, kept in
the sub-folder ``EM``; around it sit the documents of the dossier, the 3D survey,
the models and the GIS layers. EMStudio knows this standard arrangement, the *EM
standard tree*, and offers four commands at the top of the File menu to work with
it.

The standard tree
-----------------

A new project receives these folders, and a ``README.md`` and a ``LICENCE.md``
at its top:

* ``EM``, the Extended Matrix: the ``.em.json`` and its GraphML;
* ``EM/DosCo``, the documents of the dossier;
* ``EM/proxies``, the 3D proxies of the units;
* ``RB``, the reality-based models of the survey;
* ``SB``, the source-based models;
* ``RM``, the representation models;
* ``GIS``, the external layers of the study.

Create a project
----------------

#. Choose ``File ▸ New EM project…``.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         Choose, in the system's folder dialog, the folder in which the project
         will be born.

      .. tab-item:: Web
         :sync: web

         EMStudio's own folder selector opens, titled **Where is the new project
         to be born?**, starting from the folder that the **Files** window is
         showing. Go into the folder and click **Choose this folder**.

#. In the dialog **New EM project**, write the **Name of the project** (EMStudio
   proposes *Excavation*) and click **Make the folders**.

EMStudio makes a folder with that name and the standard tree inside it. The
**Files** window moves to the new folder. The project holds no study yet: start
one with ``File ▸ New`` and save it with ``File ▸ Save As…`` in the folder
``EM`` of the project (see :doc:`open-save-recent`).

With no document open, the **Files** window offers the same command as
**+ New project…**, under **Where to start**.

Open a project
--------------

#. Choose ``File ▸ Open project…``.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         Choose the folder of the project in the system's folder dialog.

      .. tab-item:: Web
         :sync: web

         Choose the folder in EMStudio's own folder selector, titled **The
         project's folder**, and click **Choose this folder**.

#. EMStudio looks for the ``.em.json`` in the folder ``EM`` of the project, and
   then in the project folder itself. If it finds more than one, the dialog
   **Open project** asks which ``.em.json`` of the project to open, the most
   recently changed first: choose one in the list and click **Open…**.

A folder without any ``.em.json`` is not an EM project, and a message says so.
You may pick the folder ``EM`` itself: EMStudio takes the folder above it as the
project.

Reorder a folder by the standard
--------------------------------

An existing folder, filled before the standard tree existed, can be put in order.

#. Open the study of the project.
#. Choose ``File ▸ Reorder by the standard…``. The dialog **Reorder … by the EM
   standard** lists, line by line, the folders to make and the files to move.
   Nothing is overwritten and nothing is deleted.
#. A ``.tif`` file can be a georeferenced layer or a scanned document. When
   EMStudio cannot tell which, its line offers a choice: **GIS/**, **EM/DosCo/**
   or **leave it**.
#. Click **Reorder**.

The message **Reordered** says how many files moved and how many folders were
made. Its **Undo** puts the moved files back where they were; the folders made
stay, empty. A file whose destination already exists stays where it is. A folder
already in the standard tree has nothing to move, and a message says so.

Show the folder of the study
----------------------------

Choose ``File ▸ Open the project folder``, or click the name of the file in the
message of the status bar. The folder of the active ``.em.json`` opens in the
Finder, in File Explorer or in the file manager, with the file selected where the
system allows it. Where no desktop can open a folder, EMStudio copies the path
of the file instead and says where it is.

Close the project
-----------------

Choose ``File ▸ Close the project``. Every open file that lies inside the
project folder closes, together with the **Shelf** that belongs to it. If some of
them have unsaved changes, EMStudio asks once for all of them.

What you get
------------

A study kept in a folder that every EM tool reads in the same way, with the
files it cites around it. To bring into the folder the files that a study names
elsewhere, see :doc:`find-missing-files`.

See also
--------

* :doc:`/reference/windows`, the **Files** window and its modes.
* :doc:`/reference/desktop-and-web`, the folder dialogs of the two platforms.
* :doc:`/how-to/bring-in/check-a-dosco-folder`, reading a DosCo folder against
  the documents of the graph.
