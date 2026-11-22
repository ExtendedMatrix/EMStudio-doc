.. _reference-workspaces:

Workspaces
==========

*The seven workspaces of EMStudio, their questions and their starting arrangements, and the workspaces you make yourself.*

A **workspace** is an arrangement of windows made for one activity. EMStudio
comes with seven, in the bar across the top of the window. Each answers one
question, and its windows are the ones that answer it; the question appears when
you hold the pointer on the workspace's name. ``Help ▸ Workspaces…`` shows the
same overview inside the application.

The study is the same in every workspace. A selection made in one window is the
selection of every window that shows it, in this workspace and in the others.
:doc:`/explanation/workspaces-are-questions` explains the idea behind the
arrangement.

The seven workspaces
--------------------

.. image:: /_static/screens/dialogs/workspaces.png
   :alt: The Workspaces overview opened from Help: one row per workspace, with its question, its windows and whether it has an Inspector.

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
     - Index · Outliner · Narrative · 3D scene above a Graph in **Matrix** mode ·
       Inspector
   * - **Space**
     - Where is it, and what shape does it have in each epoch?
     - Outliner · 3D scene · Tabular on the sheet **Models and proxies** · Graph in
       **Matrix** mode · Inspector
   * - **Sheets**
     - What does the recording sheet say of this unit?
     - Outliner · Sheet · 3D scene · Graph in **Matrix** mode · Viewer & card
   * - **Scripting**
     - What can a script do with this graph?
     - Script Editor · Python Console · Graph in **Matrix** mode

Stratigraphy
~~~~~~~~~~~~

The workspace where a study opens. The **Outliner** runs down the left side; the
**Graph** window, in **Matrix** mode, takes the middle; the **Inspector** stands
on the right. The warnings about the sequence are in the status bar (the ⚠ sign)
and in the **Warnings** sheet of the Tabular window.

.. image:: /_static/screens/workspaces/stratigraphy.jpg
   :alt: The Stratigraphy workspace: the Outliner on the left, the Graph window in Matrix mode with SU001 selected, the Inspector on the right showing the unit.

Sources
~~~~~~~

The workspace of documents and of what is extracted from them. The **Outliner**
on the left lists the documents under **Documents**; next to it the
**Viewer & card** shows the document or image chosen, where you read it, trace
regions on it and extract from it. A **Graph** window in **Matrix** mode follows
on the right, and the **Inspector** shows the fields of the document and its
extractions.

The first time a document with a 3D survey is shown, its scene says what it is
preparing — **Preparing the survey…**, with the files and versions of the
document, the 3D engine, the root of the tileset and the first tiles with their
MB — until the first tile or model is drawn; a root that does not answer yet is
asked again by itself. The card in the **Inspector** does not wait for it. After
a file opens, the roots of the documents' tilesets are read in the background,
never their tiles.

.. image:: /_static/screens/workspaces/sources.jpg
   :alt: The Sources workspace: the Outliner lists the documents, the Viewer & card shows the drawing of document D.08, the Matrix and the Inspector follow it.

Archive
~~~~~~~

The workspace of the files. The **Outliner** on the left is the index of the
documents and their files (see :doc:`/how-to/archive/documents-and-files`). In
the middle, the **Files** window shows the disk, with the **Shelf** under it: the
list of resources the study works from. On the right, a **Graph** window fixed on
the **Transformation chain (DTC)** draws the steps that produced each file. The
Archive has no Inspector, because a file is not yet a node of the graph: the
**Files** window shows the card of the document picked in the Outliner or in the
chain.

.. image:: /_static/screens/workspaces/archive.jpg
   :alt: The Archive workspace: the Outliner lists the documents grouped by state, the Files window on the disk with the study's folder, the empty Shelf under it, and the Transformation chain (DTC) on the right.

Narrative
~~~~~~~~~

The workspace of the story. The left column holds the **Index** of the story
above the **Outliner**. The **Narrative** window, the page, is in the middle,
open for writing. On the right, a **3D scene** above a **Graph** window in
**Matrix** mode: both follow the part being written or read (the scene the
block, see :ref:`how-to-narrative-follow-3d`), beside the **Inspector**, which
also carries the tools of the page.

.. image:: /_static/screens/workspaces/narrative.jpg
   :alt: The Narrative workspace: the Index of the story above the Outliner, the Narrative window open for writing on the first chapter, the 3D scene above the Matrix, and the Inspector on the right.

Space
~~~~~

The workspace of the places and the shapes. The **Outliner**, on the left, is
synchronised with the 3D view. The **3D scene** shows the models of an epoch and
the proxies of its units, with the **Tabular** window under it on the sheet
**Models and proxies**: what is there and what is missing. A **Graph** window in **Matrix**
mode and the **Inspector** complete it on the right. A unit picked in the scene
is the unit of all four windows.

.. image:: /_static/screens/workspaces/space.jpg
   :alt: The Space workspace: the Outliner with the proxies of the epoch, the 3D scene with the proxies of the temple over the tileset of the 2015 survey, the Tabular window on Models and proxies under it, the Matrix and the Inspector on the right.

Sheets
~~~~~~

The workspace of the recording sheet. The **Outliner** is on the left, with the
stratigraphic units alone (**Show all** at its head gives back every dimension
of the graph): pick a unit and the **Sheet** in the middle shows it. On the right, two small windows
follow the same unit: the **3D scene** with its proxy, and a **Graph** window in
**Matrix** mode framed on the unit and the units it touches. The **Viewer & card**
underneath shows the unit's photographs and documents.

.. image:: /_static/screens/workspaces/sheets.jpg
   :alt: The Sheets workspace: the Outliner with the stratigraphic units alone and Show all at its head, the recording sheet of SU004 in the middle, the 3D scene and the Matrix framed on the unit on the right, the Viewer & card underneath, empty because the unit has no pictures yet.

Scripting
~~~~~~~~~

The workspace of the scripts, the last of the bar. The **Script Editor** takes the
left, with the **Python Console** under it: a script runs in the console's
session, and what it prints goes there. A **Graph** window in **Matrix** mode
stands on the right. There is no Inspector: a script reads the selection
(``sel``) and the graph (``g``), and what it writes is one step of undo, seen in
the Matrix beside it. Both windows are marked *beta*, and either can be chosen
from the window type menu in any area of any workspace. See
:doc:`/how-to/extensions/python-console`.

.. image:: /_static/screens/workspaces/scripting.jpg
   :alt: The Scripting workspace: the Script Editor on the left with an empty untitled.py, the Python Console under it, the Matrix on the right with SU001 selected.

Change a workspace
------------------

Every workspace can be changed: a window can become another type, an area can be
divided in two, two areas can be joined (see :doc:`windows`). The workspace keeps
the arrangement you give it, also after EMStudio is closed and opened again.

One of the seven workspaces, once changed, says so: its name turns to italics,
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
   **Rename…**. The seven workspaces of EMStudio can be renamed too: the name you
   give replaces the one of the dictionary on this computer.

Reset
   Right-click the name and choose **Reset the arrangement**.

Remove
   Right-click the name of a workspace you made and choose **Remove the space**.
   The message that confirms it has an undo, which brings the workspace back
   with its arrangement. The seven workspaces of EMStudio stay in the bar.

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
