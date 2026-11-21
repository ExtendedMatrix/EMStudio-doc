.. _reference-windows:

Windows
=======

*The fifteen types of window, what each answers, its modes, and where it appears.*

Everything on the EMStudio screen is a **window**: an area of a given type, with a
header of its own. A workspace is an arrangement of windows (see
:ref:`reference-workspaces`); the same type can appear in several workspaces, and
two windows of the same type can show different things at once.

A window's **type** says what it is. Its **mode**, where it has one, says how it
shows the same material. Both are chosen in the window's header.

Working with windows
--------------------

Change the type
   The menu at the left of the header (**Window type — transform this window**)
   turns the window into another type, in the same place. It offers **Graph**,
   **Narrative**, **Tabular**, **EMtree**, **Outliner**, **Inspector**,
   **Viewer & card**, **Files**, **Shelf**, **Chronology**, **3D scene**,
   **Study** and **Index**. The **Sheet** and the **Plugin panel** are opened by
   their own workspace and by their plugin.

Change the mode
   The **Mode** menu of the header (**Mode — what THIS window is showing**)
   appears on the types that have modes. Each window keeps its own mode.

Split and join
   Drag a corner of the area inwards to split it in two; drag it onto a
   neighbour to join them. The same is in the type menu as **Split: a window
   beside** and **Split: a window below**. The new half is a window of the same
   type.

Open in a new window
   **Open in a new window**, in the type menu, opens a twin of the window in a
   window of its own, which you can move to another screen. **Back into the main
   window** returns it. In a browser the new window is a pop-up: if the browser
   blocks it, allow pop-ups for the site of your node.

Magnify
   **Magnify this window** fills the workspace with it. Double-click the empty
   part of the header, or press :kbd:`Ctrl+Space`; the same gesture brings the
   arrangement back.

Close
   **Close window** removes the window from the workspace. The message that
   follows offers **Reopen**.

The header
   Every header has three zones, always in the same places. At the left, fixed:
   the window type and its **?**. In the centre, what the window shows: its
   modes, its context (the sheet of a Tabular window, the epoch of the 3D
   scene). At the right, its actions: filters, the search field, ``⋯`` and
   **⛶**. A header never scrolls sideways. When the window is too narrow for
   it, the header gives way always in the same order: the labels become icons
   (the name stays in the tooltip), then the verbs move into ``⋯``, listed under
   **In the bar (no room for them)**, then the search field becomes a magnifier,
   and last the main command of the centre narrows. In a very narrow window
   **Epochs** / **Horizons** become **E** / **H**, and the modes and the **?**
   move into ``⋯`` too; there the **?** becomes **What this window is**.
   ``⋯`` holds only what is not already in the bar: when it has nothing, it is
   not shown.

Menus and panels
   A menu or a panel that opens over the windows (a menu of the header, the
   filter, the overlays of a canvas, **Visibility ▾**, **Colours ▾**, a context
   menu) closes with a click outside it or with :kbd:`Esc`. The click that
   closes does nothing else: it does not select the node under it, nor open
   another menu; the next click works as usual. :kbd:`Esc` closes the topmost
   panel only, so a submenu closes before its menu. Pressing again the button
   that opened a panel closes it, and the focus goes back to that button. A
   window where you have written something (a dialog with a field, the form of
   a new document, **Copy the selection into…**) does not close with a click outside: :kbd:`Esc`
   asks **Discard what you wrote in this window?**, with **Keep writing** and
   **Discard**.

A workspace you have reshaped can be restored to its arrangement of origin (see
:ref:`reference-workspaces`).

The types
---------

Graph
   *What is there, in what order, and does it hold?* The canvas of the study.
   Modes: **Matrix** (the stratigraphic matrix in epoch swimlanes, laid out
   automatically), **Graph** (a free layout), **DTC** (the transformation chain of
   the documentation) and **Graphs paradata** (one node per open graph, with its
   own paradata and its relations with the other graphs). It opens in **Matrix** in Stratigraphy, Sources, Narrative, Space
   and Sheets; in Sheets it follows the unit of the sheet with its neighbours. In
   Archive a Graph window is fixed on the chain of the files and is called
   **Transformation chain (DTC)**: choose **Graph** in its type menu to give it
   back its four modes.

Outliner
   *What is in the active graph?* The one tree of the study: the open files, their
   graphs, and every dimension of a graph (units, epochs, documents, models). It
   is the left column of every built-in workspace. A unit may stand in more than
   one place of the tree (a document under several epochs, say): the row you
   click stays selected and the list does not scroll, and the unit's other rows
   are marked by a faint dotted underline, their tooltip saying *The unit
   selected, in another place of the tree*.
   At the right of every row stand the same columns, under the icons of the
   Outliner's head, whether the row is selected, under the pointer or neither:
   selection and hover change only the row's background. In the **Space**,
   from the right as in Blender: the **eye** (visible or hidden in the 3D),
   the **arrow** (selectable or not: full, or an empty outline) and the
   **isolate** (only this object in the 3D). In the other workspaces the eye
   alone. With the Outliner in focus :kbd:`H` hides the selection,
   :kbd:`Shift+H` everything else, :kbd:`Alt+H` shows everything again.
   **Frame** is the row's double click and its right-click menu, where **Lock
   position** and **Unlock position** are too; a locked object has a small
   padlock beside its name. A unit that survives from an earlier epoch has a
   small **⟲** beside its name, whose tooltip says where it was born.

   .. figure:: /_static/screens/windows/outliner-columns.png
      :alt: The Outliner of the Space magnified: under the epoch XX sec, the proxies' rows each end with the isolate, the arrow and the eye; SU002 is selected, SU003 hidden (the eye shut), SU004 not selectable (the arrow an outline), SU020 locked (a padlock beside its name), and small ⟲ signs beside the names of the units that survive from an earlier epoch.

      The three columns of the Space's Outliner: the same on every row.

   In the **Sheets** workspace the Outliner lists the stratigraphic units
   alone, the family the sheets describe, by epoch as elsewhere; a line at its
   head says **Stratigraphic units —** and their number, and **Show all** gives
   that window every dimension of the graph again (see
   :doc:`/how-to/sheets/fill-the-recording-sheet`).

Inspector
   *What is the selection?* The fields of the selected node, section by section
   (see :ref:`reference-inspector`). It appears in Stratigraphy, Sources, Narrative
   and Space.

Viewer & card
   *What does this point at?* The resource the current element points at, shown
   as itself: an image, a PDF, a 3D document. The regions of an image are traced
   here. Modes, offered when there are at least two images to lay out:
   **Single** and **Gallery**. It is the main window of Sources, and in Sheets it
   shows the photographs and documents of the unit.

Files
   *Which files do I have?* Where the bytes live. Modes: **Disk** (a folder of this
   computer), **Bucket** (the configured object store, read as the disk),
   **Graph's files** (the files the active graph cites), **In the room** (the
   room's store), **Assets** (the study's assets, with their versions),
   **Documents** (the tree of the document sets) and **Queue** (the jobs of
   the processing queue). It is the main
   window of Archive, and carries the card of the document picked in the chain.

Shelf
   *What does the study work from?* The curated list of resources a study draws
   on, its own and others'. Modes: **List** and **Table**. It appears in Archive,
   under the Files window.

Tabular
   *What do the rows say?* The study as tables. Its modes are sheets, in two
   groups. **Sheets**, which can be edited: **Units**, **Epochs**, **Documents**,
   **Claims**, **Authors**. **Computed views**, read only: **Datings**,
   **Warnings**, **Models and proxies**, **Resources**, **Interpretations**,
   **Combiners**. It appears in Space, on the sheet **Models and proxies**.

3D scene
   *Where is it, and what shape does it have in each epoch?* The representation
   models of an epoch and the proxies of its units, in one scene you can orbit,
   with the epoch selector it shares with the Chronology. Its bar holds, at the
   left, **Colours ▾** and **Visibility ▾**; in the centre, the epoch; at the
   right, the actions. The views **Globe**, **Plan** and **Site** are in the
   column of round buttons under the gizmo, and the hardware profile is a word
   of the line above the scene. As in Blender, the **toolbar** (:kbd:`T`) is a
   column of icons on the left edge of the scene, and the **sidebar**
   (:kbd:`N`) on its right has vertical tabs: **Item**, **Tool**, **View** and
   one tab for each extension with panels (see :ref:`space-sidebar-toolbar`).
   It is the main window of Space, and in Sheets it shows the proxy of the
   unit.

Sheet
   *What does the recording sheet say of this unit?* The unit as its recording
   sheet, drawn from a template, its boxes the graph's own fields. It is the main
   window of Sheets.

Narrative
   *How do I tell it?* The page of the story, written and read in the same
   window. It is the main window of Narrative.

Index
   *What does the story rest on?* The index of a story: its chapters with their
   sections and subsections, numbered, what still needs writing, and how much of
   the graph the story covers. A title dragged in the Index moves with its
   paragraphs. It is the left
   column of Narrative, above the Outliner.

Chronology
   *Do the epochs hold?* The horizons of the project at its head, then the
   epochs and phases as bars on a time axis, the overlaps with their difference
   and their remedies, and the table of the bounds. It opens below the Matrix with ``Tools ▸ Check the chronology…``, and
   from an epoch's swimlane, its Inspector and the chronology warnings.

Study
   *What is this graph?* The graph's own facts: its name and identifier, the
   metadata that its nodes inherit, the site position, the study and its
   cultural context. It is reached by changing the type of a window.

EMtree
   *Which graphs are open, with which sources?* The files and graphs open
   together, as one tree. The Outliner has taken its place in the built-in
   workspaces; it is reached by changing the type of a window.

Plugin panel
   *What does this plugin show?* The panel of an installed plugin, drawn by
   EMStudio from the fields the plugin declares, under the plugin's own name. It
   opens where the plugin proposes: beside, below, or in a window of its own.

The **Log**, what happened, is a drawer of the status bar at the bottom of the
screen rather than a window.
