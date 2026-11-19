.. _how-to-files-find-missing-files:

Find missing files and collect resources
========================================

*Relink the files a study points at and gather them in one place.*

A study points at its photographs, drawings and models through paths, written
relative to the ``.em.json``. When the files move, or the study arrives from
another computer, some paths no longer reach their file. Two commands of the File
menu put this in order: **Find missing files…** looks for the files where they
are now, and **Collect resources…** copies into the folder of the study the files
it names elsewhere. Both work on a study opened from the disk (in the web
version, from the **Files** window), and each one is a single step that **Undo**
takes back.

Notice what is missing
----------------------

When a study opens, EMStudio checks its files. If some are not where their path
says, a message tells how many were not found, with the button **Find missing
files…**. As long as files are missing, the status bar shows **missing file(s)**
beside the Log, with their number; a click on it opens the same command.

Paths written as ``onedrive://`` name a file inside a OneDrive folder. They are
counted apart, as **to link**, until EMStudio knows where OneDrive is on this
computer.

Find missing files
------------------

#. Choose ``File ▸ Find missing files…``.
#. Give the folder to look in.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         Choose the folder in the system's folder dialog.

      .. tab-item:: Web
         :sync: web

         Type the path of the folder in the field **The folder to look in**.
         EMStudio proposes the folder of the study.

#. EMStudio looks in that folder and its sub-folders, first for a file with the
   same content, then for one with the same name and size, then for one with the
   same name only. The window **Find missing files** lists the outcome in four
   groups:

   * **Found**: each file with its new place and how it was recognised, for
     example *same bytes (sha256)* or *same name and size*. Each one is ticked;
     untick the ones you do not want.
   * **Ambiguous — choose**: more than one candidate. Choose the right file in
     the menu of each row.
   * **Missing**: nothing found in this folder.
   * **To link**: the ``onedrive://`` files.

#. Click **Rewrite** followed by the number of paths. EMStudio writes the new
   paths relative to the ``.em.json``.

The message **path(s) rewritten, relative to the em.json** has **Undo**. When
nothing can be rewritten yet, the window says what to do instead: choose among
the ambiguous files, or click **Look in another folder…** and repeat the search
elsewhere.

For the ``onedrive://`` files, click **Set the OneDrive folder…** in the group
**To link**. EMStudio proposes the folder that holds them, when it finds one, or
asks for it; then it runs the search again. The OneDrive folder is kept on this
computer only, and you can change it in **Settings…**, on the tab **General**,
under **Files on this computer** (see :doc:`/reference/settings`).

One file at a time
~~~~~~~~~~~~~~~~~~

In the **Files** window, in the mode **Graph's files**, a missing file has the
button **Find here…**.

.. tab-set::
   :sync-group: platform

   .. tab-item:: Desktop
      :sync: desktop

      Choose the file in the system's dialog, which opens in the project
      folder.

   .. tab-item:: Web
      :sync: web

      Choose the file in EMStudio's own selector, among the folders the bridge
      serves, and click **Choose the file**.

Collect resources
-----------------

.. image:: /_static/screens/dialogs/collect-resources.png
   :alt: The Collect resources window: the folders for 3D models and for documents, the count of files outside the project, and the list of files to copy.

A study may name files outside its folder: a model on another disk, a
``.blend`` kept elsewhere, an ``onedrive://`` path. To make the folder of the
study complete, so that it can be copied, archived or sent as it is:

#. Choose ``File ▸ Collect resources…``. The window **Collect resources** names
   the folder of the study and lists the files that lie outside it, in groups:
   **In OneDrive (onedrive://)**, **Elsewhere on this computer**, **A .blend
   elsewhere** and **On a network share (smb://)**.
#. Check the two folders at the top, **3D models in** and **Documents and images
   in**: they are where the copies go, inside the study. Each row shows its own
   destination, which you can change; the rows that came from the same folder
   share one.
#. Untick the files you do not want to collect. A file that cannot be reached
   from here, such as one on a network share, stays unticked, with the reason.
#. Read the line above the list: how many files, how much to copy, how many are
   already there, and how many would collide with a file of the same name. Then
   click **Copy** with the number of files and their size.

EMStudio copies each file with what it needs (an OBJ with its material and
textures, a folder without the backup copies of a ``.blend``), checks every copy
against the original, and writes the paths again relative to the ``.em.json``.
The originals stay where they were: the files are copied, never moved. The
message that follows has **Undo**, which puts the old paths back; the copies
remain in the folder.

If every file is already inside the folder of the study, a message says that
there is nothing to collect.

What you get
------------

A study whose paths all reach their files, and a folder that holds everything the
study names. Save the study to keep the new paths (see :doc:`open-save-recent`).

See also
--------

* :doc:`project-folder`, the EM standard tree where the copies go.
* :doc:`/reference/windows`, the **Files** window and its modes.
* :doc:`/reference/desktop-and-web`, the folder dialogs of the two platforms.
* :doc:`/reference/file-locations`, where EMStudio keeps its own files.
