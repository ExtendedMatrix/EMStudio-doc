.. _how-to-bring-in-check-a-dosco-folder:

Check a DosCo folder
====================

*Read a DosCo folder against the documents of the active graph with Resources.*

The **DosCo** (the documentary corpus of an Extended Matrix study) is the folder
where the files of the documents are kept, each named after its document:
``D.01 plan.jpg``, ``D.02_section.pdf``, ``D.14-survey.png``. The name starts with
the EM id of the document (``D.`` and a number), followed by a space, an
underscore or a hyphen. Reading the folder against the graph shows which files
have no document in the graph yet, and turns them into documents.

Before you start
----------------

Open the graph whose documents you want to check: the folder is always read
against the active graph, and its name is shown at the top of the window. The
folder is read by EMStudio's service: on the desktop the service of this
computer, on the web the node's.

Read the folder
---------------

#. Choose ``Tools ▸ Resources``. The window **Resources** opens; the line beside
   its title names the graph it reads against, and its **▾** changes it.

   The same window opens, with the folder already filled in and read, from
   **Scan as DosCo…**: in the **Files** window, open a folder, choose nothing,
   and find the button in the **Info** tab among the gestures of the folder. An
   empty **Shelf** offers it too, for the ``DosCo`` folder of the study.

#. In **DosCo folder**, write the full path of the folder, for example the
   ``DosCo`` folder beside ``TempluMare.em.json``.
#. Press **Read the folder**.

What you get
------------

The status line says how many files are not yet a document, and three lists fill
the window.

**Files not yet a document**
   The files of the folder whose EM id is not a document of the graph. Each row
   has a preview, the file name and its EM id. Above the list, two notes report
   what the reading leaves out: the files without an EM id, and, marked **▲**,
   an EM id carried by more than one file.

**Documents of the graph**
   The documents the graph already has, with their previews.

**Resources of the graph**
   The resources of the graph, each with where its file is: **a file of this
   computer**, **a web address** or **on the room's server**.

Files named with an extractor's id (``D.02.01``) or a combiner's (``C.3``) are not
listed, because those nodes are made in the graph, not from a file.

The reading writes a small index, ``.em_resources_manifest.json``, inside the
folder. It gives each file a stable identity that survives the next readings,
and EM Tools in Blender reads the same index.

Make the missing documents
--------------------------

#. In **Files not yet a document**, press **→ Document** on a row. A document
   with that EM id as its name is created in the active graph, and the row leaves
   the list.
#. Select the new document in the **Outliner** and complete it in the
   **Inspector**: its description, its date, its licence (see
   :doc:`/reference/inspector`).

To bring files in as documents with their date and licence at once, use
*Porta dentro* instead (see :doc:`porta-dentro`).

Copy a file to the room's server
--------------------------------

In **Resources of the graph**, a resource whose file is on this computer has
the button **Copy to the server**. It copies the file to the room's server with
the same identity, and the resource's address becomes the copy on the server.
The graph keeps pointing at the same resource. When the server cannot take
files, the message says why and the resource stays as it was.

After a change in the folder, press **Read the folder** again to bring the lists
up to date. **Done** closes the window.

See also
--------

- :doc:`porta-dentro`, to bring files in as documents.
- :doc:`/how-to/sources/documents-and-media`, to read and describe the documents.
- :doc:`/how-to/files/find-missing-files`, when the graph cites files that have
  moved.
- :doc:`/how-to/rooms/bring-a-file-into-a-room`, for rooms.
