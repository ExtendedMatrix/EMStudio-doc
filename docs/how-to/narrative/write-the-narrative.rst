.. _how-to-narrative-write-the-narrative:

Write the narrative
===================

*Tell the study as a story in chapters, written in the page itself.*

The narrative is a node of the graph, saved in the ``.em.json`` with the rest of
the study. It is made of chapters, and each chapter holds blocks: paragraphs that
you write, titles of sections and subsections, and blocks that show a part of
the graph (see :doc:`embeds`). A
chapter can narrate parts of the graph, epochs and activities; the first one is
what the Matrix beside the page follows and what an AI draft is asked about.

Before you start
----------------

- Open a study. The Templu Mare file used in :doc:`/tutorial/first-study`
  already carries a story, *The Great Temple: survey, analysis and
  reconstruction*, with chapters such as *Virtual Activity 2: colonnade*.
- Click **Narrative** in the bar of the workspaces. The workspace shows the
  **Index** of the story above the **Outliner** on the left, the **Narrative**
  window (the page) in the middle, a **3D scene** above a **Graph** window in
  **Matrix** mode, and the **Inspector** on the right (see
  :doc:`/reference/workspaces`).

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

A chapter, a section or a subsection can narrate one or more parts of the
Matrix: an epoch, an activity, or a horizon of the project's periodization.

#. Click the title of a chapter, or of a section or subsection. Its
   **Inspector** shows **Narrates**, a list in order of time: the epochs from
   the oldest to the most recent, as a story is read, each with its dates
   beside it, and under each epoch its activities, in order. Every epoch and
   every activity is listed once. The activities that are in no epoch close
   the list under **No epoch**. The Matrix beside the page follows the chapter
   you are in.
#. When the project has horizons, **Epochs** and **Horizons** above the list
   choose what it shows. With **Horizons**, each horizon holds the activities
   of the epochs that fall in it.
#. Tick what the part narrates: an epoch, one or more activities, or both. A
   tick removed takes the part off that epoch or activity. Each tick is one
   step of the history.
#. When you tick an epoch that has activities, the list asks first what to
   do, under the epoch, and names the activities:

   - **Only the epoch** ticks the epoch alone;
   - **The epoch with its activities as sections** (in a chapter) or **as
     subsections** (in a section) ticks the epoch and adds a title for each
     activity, at the end of the chapter or section. Each title takes the name
     of its activity and already narrates it. An activity that a title of the
     chapter or section already narrates gets no second title;
   - **Cancel** leaves the part as it was.

   Nothing is added before you choose, and ``Edit ▸ Undo`` takes back the
   epoch and all its titles in one step. A subsection cannot hold titles, so
   for a subsection the epoch is ticked alone.
#. While you write, what the part narrates shows as chips under its title. A
   click on a chip takes the Matrix to that epoch or activity; a horizon's
   chip takes it to the oldest epoch that falls in the horizon. In **Read**,
   **Print** and the exported files the chips do not appear.
#. Press **I sign** to sign the chapter with your identity. A signature needs
   an identity: if none is declared, EMStudio opens the panel **Who you are**
   (see :doc:`/how-to/rooms/sign-in`).
#. **☆ make canonical** marks a chapter that a new proposal of the structure
   leaves alone; the Index shows it with ★.

.. image:: /_static/screens/narrative/narrates.jpg
   :alt: The Narrative workspace on chapter 7, General approach to virtual reconstruction: its Inspector shows Narrates with II A.D. and its dates 100 – 199, and under it the choice Only the epoch, The epoch with its activities as 6 sections (the six activities named, VAct.01 to VAct.06) and Cancel; the activities follow, indented under the epoch.

**Story coverage** in the **Index** counts what the chapters and sections
narrate: an epoch narrated, or one of its activities, is told.

.. _how-to-narrative-figures:

Insert the figures of an epoch or an activity
---------------------------------------------

An epoch or an activity brings with it the things that represent it. A part
that narrates one can show them as figures.

#. Beside the chips under the title of the chapter, section or subsection,
   press **＋ Figure** (or right-click the title and choose **Figure…**). The
   menu lists each epoch and activity the part narrates, with its dates, and
   under each one the figures it offers:

   - **Matrix**: the part of the Matrix with only those units and what is
     directly related to them, drawn as the Matrix draws it (an epoch: its
     band);
   - **3D model**: the scene of the **Space** with only the proxies and the
     models that belong to that epoch or activity, the epoch set;
   - **Plan**: the same scene seen from above, orthographic;
   - **Three-quarter view**: the same scene seen from the front-right and
     above, in perspective;
   - **Sub-epochs** (an epoch only): how the epoch is divided into sub-epochs,
     each with its dates.

   A figure that has nothing to show yet is greyed, and says why.
#. The figure goes at the end of the part's own text (a chapter's: before its
   first section). ``Edit ▸ Undo`` takes it back in one step.
#. The figure is **live**: what it shows is read from the graph each time the
   page is drawn. A unit added to the activity appears in its Matrix; a 3D
   figure shows the models and proxies of today. **▶ Load the scene** draws a
   3D figure in the page; **Save this framing** keeps a view of your own instead of the
   plan's or the three-quarter view's.
#. Under the figure, its number and its caption: **Fig. 8.1**, the chapter's
   number and the figure's place in it (a running number when the story is not
   numbered). The caption is written for you, in italics, with the title, the
   dates and the source: *Plan of II A.D. (100 – 199) · Extended Matrix ·
   TempluMare_v11.em.json*. Type your own in **Caption** in the **Inspector**
   to replace it.
#. To refer to a figure in the text, type ``[[`` in a paragraph: the figures of
   the story come first in the list. The reference prints its number, **Fig.
   8.1**, and follows the figure when it moves.

In **Print** and in the exported files each figure becomes a picture with its
caption: the Matrix and the sub-epochs as drawn, a 3D figure as a still of its
saved framing or, when it has none, drawn at export with only what is
pertinent. Scripts reach the same views with ``em.app.space.render(scope,
view="plan")`` and ``em.app.matrix.render(scope)``.

.. image:: /_static/screens/narrative/figure-menu.jpg
   :alt: Chapter 8, Virtual Activity 1, narrates VAct.01 Foundations of the temple: under its title the chip and + Figure, and the menu Insert figure open with the activity and its dates 100 – 199, then Matrix, 3D model, Plan and Three-quarter view.

.. image:: /_static/screens/narrative/figure.jpg
   :alt: The Matrix of VAct.01 inserted in chapter 8: the slice of the Matrix drawn as in the Matrix window, under it Fig. 8.1 and the caption Matrix of VAct.01 Foundations of the temple (100 – 199) · Extended Matrix · TempluMare_v11.em.json; the Inspector shows Figure Fig. 8.1 · Matrix.

Keep the story coherent with the Matrix
---------------------------------------

The graph keeps changing after a chapter is written. **Coherence with the
Matrix**, a section of the **Index**, compares what the story narrates and
shows with the graph as it is now. Its title says how many notices there are.
They are notices, not errors: nothing changes until you press the button beside
one, and each button is one step of the history.

- an activity or an epoch **renamed**: **Retitle** when the title still has the
  old name, otherwise **Keep as it is**;
- one **deleted**: **Relink** when another one has its name, otherwise
  **Unlink**;
- an activity **moved to another epoch**: **Move to** the chapter that narrates
  the new epoch, with the section's paragraphs;
- an activity **divided**, part of its units now in an activity the story does
  not narrate: **Add a section** for it;
- an epoch **divided into sub-epochs**: **Insert the sub-epochs figure**;
- sections or subsections **not in the Matrix's order**: **Reorder as the
  Matrix**, each title with its paragraphs;
- a figure whose content **changed** since it was made: **Regenerate the
  figure**;
- bindings made before this check existed: **Record them now**, so that later
  changes can be noticed.

A click on a notice takes the page to the part.

.. image:: /_static/screens/narrative/coherence.jpg
   :alt: The Index with Coherence with the Matrix · 3 open: VAct.01 Foundations of the temple is now called VAct.01 Foundations and podium, in chapters 8 and 11, each with Keep as it is, and 3 bindings with no record yet, with Record them now.

.. _how-to-narrative-follow-3d:

Follow the text in 3D
---------------------

The **3D scene** of the Narrative workspace is the scene of the **Space**, and it
accompanies the text: it follows the block you are on. In **Write** that is the
block where the cursor is; in **Read**, the block at the upper third of the
page when you stop scrolling.

- When the block narrates an epoch or an activity (the chips under the title
  of its chapter, section or subsection), the scene shows that epoch and only
  the proxies and the models that belong to it, and frames them.
- The units the block cites (its ``[[`` mentions, the **Cites** row of the
  **Inspector**) are lit, and the other proxies are faded.
- A block that narrates and cites nothing leaves the scene where it was.

The camera flies to the new view, as when you double-click in the Space (with
**Reduce motion** in the system settings it fades instead). While you write it
waits until the cursor has stayed still for about a second, so the scene never
moves while you type.

The strip at the top of the scene has three buttons:

- **Follow the text** turns the following off and on. It is on at the start.
- **Frame this block** flies to the block now.
- **Insert this view as a figure** puts the view as it is now into the story,
  after the active block, as a live figure (see
  :ref:`how-to-narrative-figures`).

The scene is an area like the others: you can resize it, close it, or change it
into another kind of window from its header. When it is small, it keeps only
the gizmo, **Follow the text**, **ⓘ** (what it shows and what it follows) and
**⋯**, which brings back **Frame this block**, **Insert this view as a figure**
and the other buttons of the view (see :ref:`how-to-space-compact-view`).

.. image:: /_static/screens/narrative/follow-3d.jpg
   :alt: Chapter 8, Virtual Activity 1, with its first paragraph active: the 3D scene above the Matrix, a small area, shows II A.D. with the proxies of VAct.01 Foundations of the temple only, with the gizmo and the buttons ⓘ, ⋯ and Follow the text.

From the scene to the text
~~~~~~~~~~~~~~~~~~~~~~~~~~

Click a proxy in the scene. The parts of the story that cite that unit, or
narrate an activity it belongs to, are lit in the page, and the Index shows how
many each chapter has. A bar at the top of the page says **«USV101» in 5 parts
of the story**; **Next ›** and **‹ Previous** take you from one part to the
next, and **×** removes the light.

.. image:: /_static/screens/narrative/about-unit.jpg
   :alt: USV101 picked in the 3D: the bar «USV101» in 5 parts of the story · 1/5 with Previous, Next and ×; chapter 8 lit in the page; in the Index, chapter 8 with the count 2.

Bring a view of the Space into the story
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the **Space**, choose **Bring into the Narrative…** from the **⋯** menu of
the 3D view, or press :kbd:`Shift+N` with the pointer over the scene. The view as
it is now (the camera, the epoch, the layers shown, the selection, the level of
detail) goes into the story, after the active block:

- **Dynamic** inserts a live figure: it is drawn again from the graph when the
  graph changes, and in **Read** **Open in the Space** opens the same view
  again;
- **Static** inserts a picture taken now, at high resolution, which does not
  change with the graph. Its caption carries the date and the view's
  parameters, for example *XX sec — view from the Space, frozen on 22 Nov 2026,
  08:40 · epoch XX sec · User · Perspective · layers: …*.

When no block is active, the window proposes the chapters and sections that
narrate the epoch of the view (or the chapters, when none narrates it).
``Edit ▸ Undo`` takes the figure back in one step.

.. image:: /_static/screens/narrative/bring-view.png
   :alt: The window Bring the view into the Narrative: the view as it is now goes into the story; no block is active, choose where; Into 1 · Rilievo e analisi — Introduction; the buttons Cancel, Static and Dynamic.

Scripts read and drive the same things: ``em.app.narrative.follow`` (``True`` or
``False``), ``em.app.narrative.active`` (the active block, what it narrates and
cites), ``em.app.narrative.go(chapter, block)``, and the event
``narrative-block-changed`` (``em.app.on("narrative-block-changed", fn)``).

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
tied to the epochs and activities of the Matrix, their figures numbered and
captioned, the differences from the Matrix pointed out, and a 3D scene that
follows the block you are writing or reading. Two
**Narrative** windows can show the same story in two readings, one written and
one read.

See also
--------

- :doc:`embeds` puts the graph in the text; :doc:`ai-drafts` asks a model for a
  first draft; :doc:`export-the-narrative` makes the files.
- :doc:`/reference/windows` describes the **Narrative** and **Index** windows.
- :doc:`/explanation/narrative-as-graph` explains why the story is part of the
  graph.
