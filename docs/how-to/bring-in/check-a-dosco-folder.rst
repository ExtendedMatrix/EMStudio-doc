.. _how-to-bring-in-check-a-dosco-folder:

Read a DosCo folder
===================

*Bring in a DosCo folder: each file with an EM id becomes the document of that id, its date and its licence asked in one block.*

The **DosCo** (the documentary corpus of an Extended Matrix study) is the folder
where the files of the documents are kept, each named after its document:
``D.01 plan.jpg``, ``D.02_section.pdf``, ``D.14-survey.png``. The name starts with
the EM id of the document (``D.`` and a number), followed by a space, an
underscore or a hyphen. Reading the folder as DosCo makes each file whose EM id
is not yet a document of the graph the document of that id.

Before you start
----------------

Open the graph that will receive the documents: the folder is always read
against the active graph. Without one, EMStudio answers **Open a graph first:
the files of a DosCo become its documents**. The folder is read by EMStudio's
service: on the desktop the service of this computer, on the web the node's.

Choose the folder
-----------------

The same reading starts from four places:

- ``File ▸ Bring in…``: choose **A folder read as DosCo…** and press
  **Choose…**;
- ``Tools ▸ Read as DosCo…``;
- **Read this folder as DosCo…** in the **Files** window: open a folder, choose
  nothing, and find the button in the **Info** tab among the gestures of the
  folder. An empty **Shelf** offers it too, for the ``DosCo`` folder of the
  study;
- ``File ▸ Bring in…`` with **A folder…**: when no add-on reads folders, the
  folder is read as DosCo.

From the menus, the window **Read as DosCo: the folder** asks for the folder;
from the **Files** window and the **Shelf**, the folder is already known.

Fill the table
--------------

The window **Read as DosCo · ‹folder›** lists the files that will become
documents, one row each, with the columns **Document**, **File**, **Date**,
**Licence** and **Role**. The date and the licence belong to the document, on
the row of its first file; a role is chosen for each model.

- The files with the same EM id are **one** document: the second and the next
  are marked **same document**, and a note above says, for example,
  ``D.03: 2 files, one document (…)``.
- The files without an EM id stay out, and a note names them.
- Files named with an extractor's id (``D.02.01``) or a combiner's (``C.3``) are
  not listed, because those nodes are made in the graph, not from a file.
- Each document takes the stable id of its first file, as the tooltip of the row
  says.

#. Fill **Date** on each row, with a year, a month or a day. The date is always
   asked: the rows without one are lit.
#. To give every document the same date and licence, fill the line **For every
   document — date:** above the table and press **Apply to all**.
#. Press **Bring in**. With a row still without a date the window stays open,
   and says how many documents still need one.

The new documents enter the active graph in one step of ``Edit ▸ Undo``, and a
message says how many files were read, how many documents are new and how many
were already there. When every file of the folder already has its document, the
message says so and nothing is written.

Copy a file to the room's server
--------------------------------

A file of this computer can be copied to the room's server from the **Files**
window of the **Archive** workspace, with **Copy on the server** (see
:doc:`/how-to/archive/storage`).

See also
--------

- :doc:`porta-dentro`, to bring files in as documents, with their epoch and
  their role.
- :doc:`/how-to/sources/documents-and-media`, to read and describe the documents.
- :doc:`/how-to/files/find-missing-files`, when the graph cites files that have
  moved.
- :doc:`/how-to/rooms/bring-a-file-into-a-room`, for rooms.
