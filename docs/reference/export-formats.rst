.. _reference-export-formats:

Export formats
==============

*The files EMStudio writes from a study besides the em.json itself.*

The study lives in its em.json (see :doc:`/reference/emjson`). EMStudio exports
two things from it: the **graph**, as a picture or as linked data, and the
**narrative**, as a document to read. A GraphML matrix from yEd is read once, with
``File ▸ Import ▸ GraphML…``, and from then on the study is kept as em.json.

The graph: File ▸ Export
------------------------

``File ▸ Export`` holds two formats:

**SVG**
   ``File ▸ Export ▸ SVG`` writes the active graph window as a vector image: the
   whole graph in the mode the window shows (the Matrix with its epoch rows, or the
   Graph), drawn with the same shapes, glyphs and lines as the canvas, and only
   the relations the window shows. The image can be opened in any vector editor
   or printed to PDF.

**Turtle (.ttl)**
   ``File ▸ Export ▸ Turtle (.ttl)`` writes the graph as RDF in the Turtle syntax,
   mapped onto CIDOC CRM and its extensions, for a triple store or a SPARQL
   endpoint. The projection is made by the s3Dgraphy library, the same one every
   EM tool uses, through EMStudio's bridge. This is the semantic tier of
   the study (see :doc:`/explanation/two-tier`).

Installed plugins can add their own formats to ``File ▸ Export``, after these two
(see :doc:`/reference/menus`).

The narrative: Export in the Narrative window
---------------------------------------------

The narrative is exported from its own window: the **Export ▾** button in the
header of the **Narrative** window, in the Narrative workspace. It offers a link
and four files.

**Live reader · link**
   Copies the address of the reader, the page where the narrative is read with its
   embeds resolved at every opening and its 3D navigable. The live reader reads a
   published study: open the study from the Catalog, or publish it, to get its
   link.

**HTML · snapshot**
   One page, frozen at the moment of export, to send by e-mail.

**DOCX**
   A Word document with the figures baked in and the sources cited.

**LaTeX + .bib**
   A LaTeX document with its bibliography in a ``.bib`` file. When the narrative
   has figures, the export is a ``.zip`` holding ``main.tex``, ``main.bib`` and a
   ``fig/`` folder of the figures, because LaTeX refers to its figures as separate
   files.

**Jupyter**
   A notebook whose cells query the graph instead of quoting it: run again, the
   notebook says what the study says at that moment.

Installed plugins can add further formats to this menu.

Every file is a **snapshot** of the narrative and carries its embeds as real
figures, drawn by EMStudio itself: a matrix as a slice of the same Matrix you see
on the canvas, a map as its vector layer (marker, footprint, north arrow,
coordinates, scale) without the background tiles, and a timeline. A 3D embed with
a saved framing becomes the still of that framing, and one without a saved
framing stays a link, because 3D is navigated rather than printed. A query block is written as
the text of its answer, with its date.

The export keeps out what a person has not validated. The menu says how many
paragraphs written with AI are still unvalidated, and how many nodes made with AI
nobody has verified; these stay out of the files. When everything has been
checked, the menu says **All the text is validated by a person**.

The four files are made by the s3Dgraphy library through EMStudio's bridge.

Other files EMStudio writes
---------------------------

Some windows write files of their own, each where it belongs:

* **Recording sheets**: ``File ▸ Print sheets…`` prints the recording sheets of
  the graph, all of them, the selection, or those that chosen criteria keep. On
  the desktop the PDF comes from the system's print dialog (**Print…**, then
  **Save as PDF**). On the web, EMStudio's bridge can also write the PDF
  itself when it has the means to; otherwise the same print dialog does it.
* **Colour schemes**: the **Colours** window saves the scheme on screen as a
  ``.emc`` file with **Save .emc…**, the colour file that EM Tools for Blender
  reads too.
* **The georeference**: the georeferencing card writes the graph's reference
  system and shift as a ``SHIFT.txt`` line with **Export shift.txt**, the form EM
  Tools and 3D Survey Collection read.
* **A packed tileset**: a tileset folder can be packed into a single ``.3tz``
  archive, written beside the folder. In the web version the bridge
  that serves the **Files** window writes it; a tileset of your own computer is
  packed in the desktop application.

.. seealso::

   :doc:`/how-to/narrative/export-the-narrative` for the steps, and
   :doc:`/reference/desktop-and-web` for what differs between the desktop and the
   web.
