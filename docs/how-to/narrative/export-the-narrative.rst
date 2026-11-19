.. _how-to-narrative-export-the-narrative:

Export the narrative
====================

*Make a file of the story to send, print or publish, or copy the link of its
live reader.*

The story is exported from its own window, with the **Export ▾** button in the
header of the **Narrative** window. Every file is a snapshot of the story at the
moment of export: the blocks that show the graph become figures, citations or
query cells, and what no person has validated stays out unless you choose
otherwise.

Before you start
----------------

- Open the story in the Narrative workspace. When the graph holds several
  stories, pick the one to export with its name at the top of the page.
- Look at **Print** in the header of the window: it shows what Word and LaTeX
  will contain, with a gap marked **does not go out: to be verified** for each
  AI paragraph not validated yet. **Notebook** shows the cells of the Jupyter
  file.
- The files are made by the s3Dgraphy library through EMStudio's local
  service. When the service does not answer, EMStudio says so and nothing is
  written.

Export a file
-------------

#. Press **Export ▾** in the header of the **Narrative** window. The menu lists:

   **HTML · snapshot**
      One page, frozen at the moment of export, to send by e-mail.

   **DOCX**
      A Word document with the figures baked in and the sources cited.

   **LaTeX + .bib**
      A LaTeX document with its bibliography, ready to compile without
      EMStudio.

   **Jupyter**
      A notebook whose cells ask the graph instead of quoting it.

   Under the list, a line says how many AI paragraphs not validated, and how
   many nodes made with AI that nobody verified, will stay out of the files;
   when there are none it says **All the text is validated by a person**.
   Installed plugins can add further formats to this menu.
#. Choose a format. If something is not validated, a window opens first, with
   the title saying how many paragraphs stay out. It lists them chapter by
   chapter: a click on **paragraph** and its number takes you to it in
   **Write**, where you can verify it (see :doc:`ai-drafts`). Then choose:

   - **Export without them**, followed by how many stay out, the proposed
     choice: the file leaves them out;
   - **Export anyway, with ⚠︎ beside them**: the file keeps them, marked, for
     this export only;
   - **Cancel**.
#. The file is downloaded with the name of the graph, and a message confirms
   the format.

The LaTeX export arrives as a ``.zip`` when the story has figures: it holds
``main.tex``, ``main.bib`` and a ``fig/`` folder, because LaTeX keeps its
figures as separate files. A story without figures arrives as a ``.tex`` file
with its ``.bib`` beside it, in two downloads.

What the blocks become
----------------------

The **Inspector** of each block says, under **Outside EMStudio**, how it will
come out. In Word and LaTeX:

- a **Matrix** becomes a figure, a slice of the same Matrix as on the canvas;
- a **Table** becomes a figure with the rows that its filters keep;
- a **Timeline** becomes a figure of the epochs on their axis;
- a **Map** becomes a figure of its vector layer (the marker, the footprint
  when it is known, the north arrow, the coordinates), without the background
  tiles;
- a **Document** becomes its picture under its citation, with its entry in the
  bibliography;
- a **3D scene** becomes the picture of the framing saved in the block (see
  :doc:`embeds`); without a saved framing it stays a placeholder with its link;
- a standard block, such as the **Bibliography**, is written as the text of its
  answer, with the date it was computed;
- a mention keeps the name of its node in the sentence.

In the Jupyter notebook the blocks become cells that query the graph, and a 3D
scene stays a link. A figure that cannot be drawn leaves its placeholder, and
the export still happens.

Copy the link of the live reader
--------------------------------

**Live reader · link** copies the address of the reader: the page where the
story is read with its blocks resolved at every opening and its 3D navigable,
for people who do not use EMStudio. The reader reads a published study, so the
link is made for a study opened from the Catalog of a node. For a study opened
from the disk, EMStudio answers **The live reader reads a published study: open
this one from the Catalog (or publish it) to get its link**.

What you get
------------

A document to carry away, in the format the reader needs: an HTML page for an
e-mail, a Word file for a colleague, a LaTeX project for a publication, a
notebook that asks the study again each time it runs. The story itself stays in
the graph, where you keep writing it.

See also
--------

- :doc:`/reference/export-formats` lists every file EMStudio writes.
- :doc:`ai-drafts` for validating the AI paragraphs before exporting.
- :doc:`/how-to/files/pin-a-version` to keep the version of the study that a
  document cites.
