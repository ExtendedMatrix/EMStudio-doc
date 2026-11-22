.. _how-to-archive-documents-and-files:

Find each document's files in the Outliner
==========================================

*See what the graph knows of its files, document by document, and link a file to
the document it belongs to.*

In the **Archive** workspace the **Outliner** on the left is the index of the
documents and their files. It does not list the stratigraphic units, as it does
in the **Space**: it lists each document of the graph (D.01, D.02…) and, under
it, what the graph knows of its files. It is the bridge between the documents of
the graph and the disk.

.. image:: /_static/screens/windows/outliner-documents.png
   :alt: The Archive with the Outliner on the left: the documents grouped by state, D.01 opened with its ten models and the tileset of its container Survey2015; at the top of the Files window the card of D.01, which holds 10 models and 1 tileset linked; under it the Shelf lists the files of D.01.

What the index shows
--------------------

Under each document the **Outliner** lists what the document holds, by the three
roads of the graph:

- the files the document links itself, with the files of a set and the older
  versions under each of them;
- **Models**: its representation models, each with its file and the versions made
  from it (an LOD, an export);
- the tileset of the container its models are in, such as
  **Survey2015 · TempluMare (Cesium 3D Tiles tileset)**.

A quiet sign beside each file says its state: **✓** stamped (it carries its
sha256), **○** linked but not stamped yet, **≠** changed after its stamp, **✕**
missing on this computer. The last two appear after **Check the files of** the
graph (see :doc:`storage`). Beside a document, **©** and **⏳** say that it carries
a licence or an embargo of its own; the tooltip says which. The tooltip of a
document is the line of its card, for example
**10 models and 1 tileset linked · 11 of 11 files stamped**.

Group the documents
-------------------

#. Click **☰** in the header of the **Outliner**.
#. Under **Outliner of**, **Documents and files** is chosen in the **Archive**.
   **The graph** brings back the Outliner of the graph, with its dimensions. The
   same menu offers **Documents and files** in the other workspaces too.
#. Under **Group the documents**, choose:

   - **By state**: **With files**, **Without files — to stamp and promote**,
     **File changed since its stamp**, **File missing on the disk**. A document
     goes under the worst state of its files.
   - **By type**: **Models and tilesets**, **Images**, **PDF**, **Drawings**,
     **Other**.

#. Tick **DTC processes** to add a second branch at the bottom: each
   transformation of the chain, with its inputs (←) and its products (→).

The search in the header finds a document, and a file by its name or its path:
the document that holds it opens.

Follow a document
-----------------

Click a document in the **Outliner**. It becomes the selection of the whole
application, the same one the **Inspector** of the other workspaces shows, and
the **Archive** follows it:

- the **Files** window goes to the folder of its first file found on the disk,
  with that file chosen; when none of its folders is served by the bridge, it
  goes to the nearest folder above that is, and says so;
- the **Transformation chain (DTC)** shows the chain of that file;
- the **Shelf** lists the files of the document at its head, each with its sign;
  a click on one shows it in the **Files** window;
- the card **Selected document**, at the top of the **Files** window, says what
  the document holds, in the same words as the **Inspector** in **Sources**.

When the document links files that are not stamped yet, the card offers
**Stamp the 3 linked files not stamped yet** (with their number): the bridge
computes the sha256 of each file it finds on the disk and writes it on its
resource. One :kbd:`⌘ Z` (:kbd:`Ctrl+Z` on Windows and Linux) takes it back.

Link a file to a document
-------------------------

#. In the **Files** window, find the file.
#. Drag it onto a document of the **Outliner**. The row lights up and its
   tooltip says **Stamp this file and link it to D.21** (with the document's
   name).
#. Drop it, then click **Stamp and link**.

EMStudio stamps the file (the bridge computes its sha256) and links it to the
document. When the same bytes are already a resource of the graph, that resource
is linked and no second one is made. The document moves to **With files**.
**Undo** in the message, or :kbd:`⌘ Z`, takes it back in one step. A folder
cannot be dropped: a folder is a resource of its own (see
:doc:`/how-to/sources/declare-provenance`).

Why Sources and the Archive say the same thing
----------------------------------------------

A document often has no file of its own. D.01 of Templu Mare is a survey: its
ten models carry the files, and their container Survey2015 carries the tileset.
The card of the **Archive** and the **Inspector** of **Sources** read the
document by the same three roads, and both say
**10 models and 1 tileset linked · 11 of 11 files stamped**. The count is of the
files linked by the document, its models and their containers; the files of a
set and the versions are in the **Outliner**, under the file they belong to.
