.. _how-to-archive-storage:

Keep files on disk and in the room
==================================

*See where the bytes of the study live and move them where they belong.*

The files of a study live in several places at once: in the folders of this
computer, in the object store of a room on a StratiGraph node, sometimes in a
bucket that a project keeps on a server. The **Files** window of the **Archive**
workspace shows each of these places as one of its modes, and from each mode the
files can be moved where they belong. The window keeps your place for each
project: when you open the study again, it goes back to the folder where you were.

Before you start
----------------

- Switch to the **Archive** workspace. The **Files** window is at the centre,
  with the **Shelf** under it, the **Outliner** on the left and the
  **Transformation chain (DTC)** on the right.
- Open a study for everything that concerns its files. With no study open, the
  **Files** window shows **Where to start**: **Recent projects**,
  **+ New project…** and **Allowed folders**.
- The **Files** window reads the disk through EMStudio's local service, the
  bridge. If the bridge does not answer, the window says so.

Walk the folders
----------------

.. image:: /_static/screens/windows/files.png
   :alt: The Files window in the mode Disk on the folder DosCo of Templu Mare: the places on the left (Project, Favourites, Recent, Allowed folders), the list of the files in the middle, and the tab Info on the right with the gestures of this folder.

#. In the mode menu of the **Files** window, choose **Disk**.
#. On the left, the **Places**: **Project** (the folders of the EM standard
   tree of the open project, see :doc:`/how-to/files/project-folder`),
   **Favourites**, **Recent** and **Allowed folders**. A click on a place opens
   it. **Add this folder** makes the folder you are in a favourite.
   **The places (T)** hides and shows this column.
#. At the top, the path of the folder is a breadcrumb: a click on a step goes
   there, and ▾ chooses another folder.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         ▾ opens the system's folder dialog.

      .. tab-item:: Web
         :sync: web

         ▾ opens EMStudio's own folder selector.

   When the folder is not among the allowed folders, EMStudio asks whether to
   add it: only that folder becomes visible, nothing else of the disk.
#. To make another folder visible from the start, click **add…** under
   **Allowed folders**. The menu lists the folders you may add; a whole disk
   asks for confirmation first.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         Choose **another folder…** and pick it in the system's folder dialog.

      .. tab-item:: Web
         :sync: web

         Choose **another folder… (type its path)** and type the absolute path
         of the folder.

#. In the centre, the files of the folder. **Search…** filters them by name,
   the kind menu (**All kinds**, **Images**, **Documents**, **3D models**,
   **Tilesets**, **em.json**, **GIS layers**) keeps one kind, and **List** or
   **Thumbnails** changes the view. In the list, the columns **Name**,
   **Stamp**, **In the graph**, **Size** and **Date** sort the files; a second
   click reverses the order.
#. The stamps, the backup copies and the other system files are hidden. The line
   at the bottom says how many there are, with a button such as
   **show 4 system files**; the same line counts the files, the files chosen, the stamped ones and the
   ones to stamp.

Choose files with a click, more with :kbd:`⌘`-click (:kbd:`Ctrl`-click on
Windows and Linux), a run with :kbd:`⇧`-click. A right-click on a file offers,
among others, **Show in the graph**, **Put on the shelf** and **Copy the path**.

Work on the chosen files
------------------------

**The tools (N)** opens the panel on the right. Its four tabs work on the files
chosen in the centre; you can also drag the files onto a tab.

- **Stamp** says where a file comes from. The stamp and the chain it writes are
  described in :doc:`/how-to/sources/declare-provenance`.
- **Optimise** makes versions of a model for a use (see
  :doc:`versions-for-each-use`) and packs a tileset as a ``.3tz`` (see
  :doc:`/how-to/space/load-models-and-tilesets`).
- **Room** uploads the files to the room you are in (see below).
- **Info** shows the chosen file, its stamp and its uses in the graph. With no
  file chosen, it shows the gestures of the folder, such as the reading of a
  DosCo folder (see :doc:`/how-to/bring-in/check-a-dosco-folder`).

See where the graph's files are
-------------------------------

#. In the mode menu of the **Files** window, choose **Graph's files**. The window
   lists the files that the active graph cites: as a list with a card for each
   file when the window is narrow, as a table when it is wide.
#. Click **Check the files of** followed by the name of the graph. EMStudio
   says for each file whether it is **on this computer**, **in the room**,
   **here and in the room**, **reference only** or **missing**, and spots an
   **empty copy**, such as a cloud placeholder that was never downloaded.
#. In the table, **Search files, documents, uses…** and the menus of kind and
   use narrow the rows; a click on a row opens its card, with the document that
   cites the file and what it is used for.

A missing file has **Find here…**, and **Find moved files…** looks for all the
missing files in the folders of the project. Both are described in
:doc:`/how-to/files/find-missing-files`.

Put files in the room
---------------------

The object store of a room keeps the bytes that the room's study cites. A room
is entered or created as described in :doc:`/how-to/rooms/create-a-room` and
:doc:`/how-to/rooms/enter-and-share-a-room`; the uploads also need your identity,
declared in the **Identity** tab of **Settings…**.

#. In the **Files** window, mode **Disk**, choose the files and open the
   **Room** tab. It shows the licence and the embargo the files will carry, and
   how much goes up. A file without a stamp stays private: it goes up once it is
   stamped.
#. Click **Upload 1 file to the room** (or **Upload** followed by the number of
   files). The files join the room's delivery.
#. In the mode menu, choose **In the room**. Under
   **The delivery — signed before dragging**, check the delivery: the
   **Depositor** is you, taken from your sign-in; write the
   **Author (who made it)**, or press **It was me**; choose the **Licence**
   (the button **Use** followed by a licence offers the StratiGraph default);
   fill **Embargo until** and **Why** when the bytes must wait; give a
   **Name of the lot**, such as ``Flight 2026-03``.
#. Choose **Where the bytes live**: **resident (in the room's store)** puts the
   bytes under the node's control, so that the embargo and the licence apply;
   **reference (they stay where they are)** records only where they are, and
   suits material that is neither sensitive nor under embargo.
#. More files can be dropped onto the area under the delivery, picked from the
   disk, or taken from the shelf with a button such as
   **Take the 5 from the shelf**.
#. Click **Publish** followed by the number of files. Each row says whether its
   file is **published**, **already there** or **failed**. The bytes go first,
   then the graph records them by their fingerprint (sha256): the same bytes
   uploaded twice are one object.

In the mode **Graph's files**, the files that are only on this computer have
**Upload to the room**, and the files that are only in the room have
**Keep on the disk too**, which copies them into the folders of the project so
that you can work offline.

Declare a derivation
~~~~~~~~~~~~~~~~~~~~

The section **Documentation (the DTC corpus)**, under the delivery, lists the
lots of the room. **See the DAG** draws them as acquisitions, transformations and
outputs; **Read the register** adds what the room's server already holds about
the files of the study. Under it, the form **Declare a derivation** says what
came out of what, with its **Output**, its **Inputs** and the **Tool**; its steps
are in :doc:`/how-to/rooms/bring-a-file-into-a-room`. For files on the disk, the
same chain is written by stamping (see :doc:`/how-to/sources/declare-provenance`).

Keep a copy in the bucket
-------------------------

When a bucket is configured for the bridge, the mode **Graph's files** shows the
section **Copy on the server**.

#. Click **Check** to see, for each file, whether its copy on the server exists
   with the same size, or **Verify bytes** to compare the fingerprints, which is
   the only proof that the two copies are the same.
#. On the card of a file that is only on the disk, **To the bucket** uploads it,
   reads it back and compares it; the bucket becomes the file's main address and
   the path on the disk stays as another address.
#. Once copies are verified, the button **Free the disk copy of 12 verified
   files…** (with the number of your files) removes them from the disk. The window separates the derived versions, which
   can be made again, from the masters and originals, which are freed only if
   you tick them. By default the files go to a ``.em_freed`` folder, from which
   you can take them back.

To read the bucket itself, choose the mode **Bucket**: its folders and files are
listed as on the disk. Typing in the search field filters what is listed;
:kbd:`Enter` searches the names in the whole bucket under the folder. Chosen
files enter the study through *Porta dentro* and stay in the bucket, cited by
their address (see :doc:`/how-to/bring-in/porta-dentro`).

What you get
------------

- One window that answers, for each file of the study, where its bytes are: on
  this computer, in the room, in the bucket, or nowhere.
- Files in the room with their author, licence and embargo said once for the
  whole delivery, and derivations declared between them.
- Copies on the server proved identical before the disk copies are freed.

The mode **Documents** of the same window shows the documents of the study as a
tree of their sets of files, with role, number of files, size and state.

See also
--------

- :doc:`/reference/windows`, for the **Files** window and its modes.
- :doc:`the-shelf`, for the resources a study works from.
- :doc:`/how-to/files/project-folder`, for the folders of an EM project.
- :doc:`/how-to/rooms/bring-a-file-into-a-room`, to put a whole study in a room.
- :doc:`/reference/desktop-and-web`, for the folder dialogs of the two platforms.
