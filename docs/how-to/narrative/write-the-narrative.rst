.. _how-to-narrative-write-the-narrative:

Write the narrative
===================

*Tell the study as a story in chapters, written in the page itself.*

The narrative is a node of the graph, saved in the ``.em.json`` with the rest of
the study. It is made of chapters, and each chapter holds blocks: paragraphs that
you write, titles of sections and subsections, and blocks that show a part of
the graph (see :doc:`embeds`). A
chapter can narrate a *lane* of the graph, an epoch or an activity; the lane is
what the Matrix beside the page follows and what an AI draft is asked about.

Before you start
----------------

- Open a study. The Templu Mare file used in :doc:`/tutorial/first-study`
  already carries a story, *The Great Temple: survey, analysis and
  reconstruction*, with chapters such as *Virtual Activity 2: colonnade*.
- Click **Narrative** in the bar of the workspaces. The workspace shows the
  **Index** of the story above the **Outliner** on the left, the **Narrative**
  window (the page) in the middle, and a **Graph** window in **Matrix** mode
  beside the **Inspector** on the right (see :doc:`/reference/workspaces`).

Start a story
-------------

When the graph has no narrative yet, the page says **This graph has no narrative
yet** and offers **Propose the chapters**.

#. Press **Propose the chapters**. EMStudio writes a first structure: an
   **Introduction** with the name of the site, then one chapter for each epoch,
   from the oldest to the most recent, each narrating its epoch and showing its
   Matrix, with a paragraph marked «to be written». The standard blocks
   **History of research**, **Heritage involved (HDT-O)** and **Bibliography**
   are added at the start and at the end.
#. The proposal is one step of the history: ``Edit ▸ Undo`` takes it back.

Nothing else is written for you: every paragraph waits for your text.

Write in the page
-----------------

The **Narrative** window has four readings in its header: **Write**, **Read**,
**Print** and **Notebook**. The Narrative workspace opens in **Write**.

#. Click the title of the story at the top of the page and type; press
   :kbd:`Enter` or click elsewhere to keep it. Under the title, click
   **Add a subtitle** to write one. The same two fields are in the
   **Inspector** of the story, which a click on the head of the page opens.
#. Click a paragraph and write. An empty paragraph shows **(empty paragraph —
   click to write)**, or the words «to be written» of the proposal, which your
   text replaces. The paragraph is kept when you leave it.
#. To add a paragraph, move the pointer between two blocks and press the **+**
   (**Insert a block here**), then choose **Text**.
#. To rename a chapter, click its title in the page, type, and press
   :kbd:`Enter`.

Each change is one step of the history, saved with the file by ``File ▸ Save``.

Add, order and remove chapters
------------------------------

#. A new chapter is born where you write. In the **+** between two blocks,
   **New chapter here** puts a chapter title at that point, and the blocks that
   follow become its text. The new title is selected, ready to type.
#. Right-click the title of a chapter for **New chapter before this one**,
   **New chapter after this one**, **Move up** and **Move down**. Right-click
   the margin of a block for **New chapter from this block**.
#. In the **Index**, **Add…** offers **A chapter** (after the current chapter,
   or at the end), the **Standard blocks** the story still lacks, and under
   **Epochs not told yet** a chapter for each epoch that no chapter narrates.
#. To move a chapter, drag its row in the **Index**, or drag the grip ⠿ before
   its title in the page. A line shows where it will fall.
#. To remove a chapter, select it and press **Delete** in its **Inspector**.

Divide a chapter into sections
------------------------------

A story has four levels: **chapter**, **section**, **subsection** and
**paragraph**. A section and a subsection are titles inside a chapter. A
paragraph belongs to the nearest title above it, and a subsection to the nearest
section above it, as the headings of a document do: the order makes the
hierarchy, and nothing has to be nested by hand.

#. To add a title, press the **+** between two blocks and choose **Section** or
   **Subsection**. The title **New section** (or **New subsection**) is
   selected, ready to type; the blocks after it are its own.
#. Click a title in the page to rewrite it, and press :kbd:`Enter` to keep it.
   A title cannot be left empty: to remove it, select it and press **Delete**
   in its **Inspector**. Only the title goes: its paragraphs then belong to the
   title above.
#. The titles are numbered: chapter **1**, section **1.1**, subsection
   **1.1.1**. A subsection with no section above it in its chapter is numbered
   **1.0.1**, as LaTeX numbers it. The numbers are computed, never part of the
   text you write.
#. In the **Index**, the sections and subsections are listed under their
   chapter, with their numbers. A click on a title takes the page to it. Drag a
   title in the **Index** to move it **with its paragraphs and its
   subsections**: onto another title (before it, or after all it holds) or onto
   the row of a chapter (to the end of that chapter). In the **Inspector** of a
   title, **▲** and **▼** move it past the title of the same level before or
   after it, again with everything it holds.

.. image:: /_static/screens/narrative/sections.jpg
   :alt: The Narrative workspace: the Index lists chapter 4 with its sections 4.1 to 4.4 and the subsections 4.2.1, 4.4.1 and 4.4.2; the page shows section 4.1 Post-processing and the numbered titles that follow; the Inspector of Section 4.1 offers Transform into… with Chapter, Section (lit), Subsection and Paragraph, above ▲, ▼ and Delete.

Transform a part into another
-----------------------------

Every part that has words can become another level: a paragraph, a title, a
chapter. **Transform into…** is in three places:

- in the **Inspector** of the part selected, above **▲ ▼ Delete**: **Chapter**,
  **Section**, **Subsection** and **Paragraph**, the current level lit;
- in the right-click menu of a chapter's title or of a block (on the words of a
  paragraph or title, hold :kbd:`Alt` while you right-click: the plain right
  click keeps the spelling menu);
- on the keyboard, while you write or with the part selected:
  :kbd:`Ctrl+Alt+1` chapter, :kbd:`Ctrl+Alt+2` section, :kbd:`Ctrl+Alt+3`
  subsection, :kbd:`Ctrl+Alt+0` paragraph (:kbd:`⌘⌥` on a Mac). On Windows and
  Linux :kbd:`AltGr` with a digit still types its character.

What each transformation does:

- a paragraph of one line becomes a title with that text; a longer paragraph
  gives its first line to the title, and the rest stays a paragraph under it;
- a title that becomes a paragraph keeps its text;
- a section becomes a subsection, and back, by changing only its level;
- a paragraph or a title that becomes a **chapter** splits the chapter there:
  the new chapter takes the title, and the blocks after it go with it;
- a chapter that becomes a section, a subsection or a paragraph enters the
  chapter above it: its title goes at the end of that chapter, its blocks after
  it. The lane it narrated and its ★ stay with the title, and come back if you
  make it a chapter again. The first chapter has no chapter above it, so it
  cannot.

A transformation that is not possible is greyed, and says why. An embed shows
a node and has no words to become a title. Each transformation is one step of
the history: ``Edit ▸ Undo`` takes it back, and ``Edit ▸ Redo`` makes it again.

Paragraphs written as titles
----------------------------

A story written before sections existed may hold paragraphs that stand for a
title, such as ``### Current researches``. EMStudio does not change them on its
own. In **Write**, a bar at the top of the page says how many paragraphs start
with ``#``, with **Transform all** and **Leave them**, and each of those
paragraphs shows what it looks like and its own **Transform**:

.. image:: /_static/screens/narrative/heading-hints.png
   :alt: The paragraph «### Current researches» with the line ««###» looks like a title: Section» and its Transform button, above the paragraph that follows.

- ``###`` becomes a section, ``####`` (or more) a subsection, ``#`` and ``##``
  a chapter: the levels of the notebook, where the story's title is ``#`` and a
  chapter ``##``;
- **Transform all** transforms them in one step of the history;
- **Leave them** keeps them as they are, and EMStudio does not propose them
  again in this browser.

Number the titles, or not
-------------------------

The numbers of chapters, sections and subsections are on by default. In the
**Inspector** of the story (click the head of the page), **Number chapters and
sections (1, 1.1, 1.1.1)** turns them off or on. The choice is saved with the
story, and holds in **Write**, **Read**, **Print** and in every exported file.

Set what a chapter narrates
---------------------------

#. Click the title of a chapter. Its **Inspector** shows **Title**,
   **Narrates the lane** and **Signed by**.
#. In **Narrates the lane**, choose an epoch, or an activity listed under its
   epoch, for example *II A.D. › VAct.03 Lintel of the columnade*. The chapter
   shows the name of its lane beside the title when the two differ, and the
   Matrix beside the page follows the chapter you are in.
#. Press **I sign** to sign the chapter with your identity. A signature needs
   an identity: if none is declared, EMStudio opens the panel **Who you are**
   (see :doc:`/how-to/rooms/sign-in`).
#. **☆ make canonical** marks a chapter that a new proposal of the structure
   leaves alone; the Index shows it with ★.

Find your way in a long story
-----------------------------

The **Index** lists the chapters, with their sections and subsections under
them, and what each chapter still needs: the paragraphs still to be written, and
the AI paragraphs not verified yet. A click on a row takes the page to that
chapter or title. **Find in chapters and text…** filters the rows
and marks the paragraphs that match. **Story coverage**, closed at first, counts
how much of the graph the story cites: the units of each epoch, the sources, and
the reconstructions that no chapter explains yet.

.. image:: /_static/screens/workspaces/narrative.jpg
   :alt: The Narrative workspace with the Index of the story on the left, its chapters numbered, and the page open on the first chapter, under the bar that proposes the paragraphs starting with # as titles.

Read the story
--------------

- **Read** shows the page as a reader with the link sees it, on white paper.
  A click on a block that shows a node goes to that node.
- **Print** shows what the Word and LaTeX files will contain: the titles at
  their levels, the blocks as figures or citations, and a gap, **does not go out: to be verified**, where an
  AI paragraph waits for a person.
- **Notebook** shows the cells of the Jupyter notebook.

**Print** and **Notebook** are previews computed from the story: you write in
**Write**.

What you get
------------

A story that lives in the graph: saved in the study file, divided into
chapters, sections and subsections, signed chapter by chapter, with its lanes
tied to the epochs and activities of the Matrix. Two
**Narrative** windows can show the same story in two readings, one written and
one read.

See also
--------

- :doc:`embeds` puts the graph in the text; :doc:`ai-drafts` asks a model for a
  first draft; :doc:`export-the-narrative` makes the files.
- :doc:`/reference/windows` describes the **Narrative** and **Index** windows.
- :doc:`/explanation/narrative-as-graph` explains why the story is part of the
  graph.
