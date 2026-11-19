.. _reference-workspaces:

Workspaces
==========

*The six workspaces of EMStudio, their questions and their starting arrangements, and the workspaces you make yourself.*

A **workspace** is an arrangement of windows made for one activity. EMStudio
comes with six, in the bar across the top of the window. Each answers one
question, and its windows are the ones that answer it; the question appears when
you hold the pointer on the workspace's name. ``Help ▸ Workspaces…`` shows the
same overview inside the application.

The study is the same in every workspace. A selection made in one window is the
selection of every window that shows it, in this workspace and in the others.
:doc:`/explanation/workspaces-are-questions` explains the idea behind the
arrangement.

The six workspaces
------------------

.. list-table::
   :header-rows: 1
   :widths: 16 34 50

   * - Workspace
     - Question
     - Windows at the start
   * - **Stratigraphy**
     - What is there, in what order, and does it hold?
     - Outliner · Graph in **Matrix** mode · Inspector
   * - **Sources**
     - Where does this datum come from?
     - Outliner · Viewer & card · Graph in **Matrix** mode · Inspector
   * - **Archive**
     - Which files do I have, and what became a document?
     - Outliner · Files (on the **Disk**) · Shelf · Transformation chain (DTC)
   * - **Narrative**
     - How do I tell it, and what does it rest on?
     - Index · Outliner · Narrative · Graph in **Matrix** mode · Inspector
   * - **Space**
     - Where is it, and what shape does it have in each epoch?
     - Outliner · 3D scene · Tabular on the sheet **Models and proxies** · Graph in
       **Matrix** mode · Inspector
   * - **Sheets**
     - What does the recording sheet say of this unit?
     - Outliner · Sheet · 3D scene · Graph in **Matrix** mode · Viewer & card

Stratigraphy
~~~~~~~~~~~~

The workspace where a study opens. The **Outliner** runs down the left side; the
**Graph** window, in **Matrix** mode, takes the middle; the **Inspector** stands
on the right. The warnings about the sequence are in the status bar (the ⚠ sign)
and in the **Warnings** sheet of the Tabular window.

Sources
~~~~~~~

The workspace of documents and of what is extracted from them. The **Outliner**
on the left lists the documents under **Documents**; next to it the
**Viewer & card** shows the document or image chosen, where you read it, trace
regions on it and extract from it. A **Graph** window in **Matrix** mode follows
on the right, and the **Inspector** shows the fields of the document and its
extractions.

Archive
~~~~~~~

The workspace of the files. The **Outliner** is on the left. In the middle, the
**Files** window shows the disk, with the **Shelf** under it: the list of
resources the study works from. On the right, a **Graph** window fixed on the
**Transformation chain (DTC)** draws the steps that produced each file. The
Archive has no Inspector, because a file is not yet a node of the graph: the
**Files** window shows the card of the document picked in the chain.

Narrative
~~~~~~~~~

The workspace of the story. The left column holds the **Index** of the story
above the **Outliner**. The **Narrative** window, the page, is in the middle,
open for writing. On the right, a **Graph** window in **Matrix** mode follows the
chapter being read, beside the **Inspector**, which also carries the tools of
the page.

Space
~~~~~

The workspace of the places and the shapes. The **Outliner**, on the left, is
synchronised with the 3D view. The **3D scene** shows the models of an epoch and
the proxies of its units, with the **Tabular** window under it on the sheet
**Models and proxies**: what is there and what is missing. A **Graph** window in **Matrix**
mode and the **Inspector** complete it on the right. A unit picked in the scene
is the unit of all four windows.

Sheets
~~~~~~

The workspace of the recording sheet. The **Outliner** is on the left: pick a
unit and the **Sheet** in the middle shows it. On the right, two small windows
follow the same unit: the **3D scene** with its proxy, and a **Graph** window in
**Matrix** mode framed on the unit and the units it touches. The **Viewer & card**
underneath shows the unit's photographs and documents.

Change a workspace
------------------

Every workspace can be changed: a window can become another type, an area can be
divided in two, two areas can be joined (see :doc:`windows`). The workspace keeps
the arrangement you give it, also after EMStudio is closed and opened again.

One of the six workspaces, once changed, says so: its name turns to italics,
with a small ↺ beside it (*reshaped: ↺ restores the space as it comes*). Click the ↺, or right-click the name and choose
**Reset the arrangement**, to put the workspace back as EMStudio first arranged
it. The windows you added or moved go away.

Workspaces of your own
----------------------

You can add workspaces to the bar, for an arrangement you use often.

New
   Arrange the current workspace the way you want, then press the **+** at the
   end of the bar (*New workspace from this arrangement*) and give the new
   workspace a name. It starts as a copy of the arrangement in front of you.

Rename
   Double-click the name of a workspace, or right-click it and choose
   **Rename…**. The six workspaces of EMStudio can be renamed too: the name you
   give replaces the one of the dictionary on this computer.

Reset
   Right-click the name and choose **Reset the arrangement**.

Remove
   Right-click the name of a workspace you made and choose **Remove the space**.
   The message that confirms it has an undo, which brings the workspace back
   with its arrangement. The six workspaces of EMStudio stay in the bar.

The arrangements are kept by the application on this computer, in the browser's
storage on the web (see :doc:`file-locations`): they belong to the person working,
not to the study, and they are never written into the ``.em.json``.

Two arrangements outside the bar
--------------------------------

Two further arrangements exist in the code and are not in the bar in 1.6:
**DTC**, the provenance graph of the corpus with the Inspector beside it, and
**Comparisons**, the shelf with a viewer and the Inspector. They are kept with
their arrangements, so that they can come back as they were. Meanwhile the
transformation chain lives in the **Archive** workspace and in the **DTC** mode
of any Graph window, and the shelf lives in the **Archive** workspace.
