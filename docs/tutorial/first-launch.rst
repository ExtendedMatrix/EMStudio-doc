.. _tutorial-first-launch:

First launch: the six workspaces
================================

*A tour of EMStudio on the study of Templu Mare: the six workspaces and the questions they answer, the bar, the windows, and how to divide an area.*

This tour opens a real Extended Matrix study and walks through the six
workspaces of EMStudio. We use **Templu Mare**, the temple whose study is shared
across the courses and demonstrations of the Extended Matrix: a graph called
*Temple*, with its stratigraphic units, its virtual reconstruction, its documents
and six epochs, from the II century A.D. to the surveys of 2013 and 2015. Any
``.em.json`` file works the same way.

Before you start
----------------

You need EMStudio (see :doc:`get-emstudio`) and the file of the study, an
``.em.json``. On the web, the study is in a room of your node: enter it from
the chip's menu at the top right (see :doc:`/how-to/rooms/enter-and-share-a-room`)
and skip the first section.

Open the study
--------------

When nothing is open, the main window says **No graph yet** and offers three
ways to begin: **Open an em.json**, **Import GraphML**, or **First unit**.

.. image:: /_static/screens/workspaces/stratigraphy.jpg
   :alt: EMStudio with Templu Mare open in the Stratigraphy workspace: the Outliner on the left, the Graph window in Matrix mode in the middle with SU001 selected, the Inspector on the right.

#. Choose **Open an em.json**, or ``File ▸ Open…`` (:kbd:`⌘O` on the Mac,
   :kbd:`Ctrl+O` elsewhere).
#. Pick the file of Templu Mare.

You can also drop the ``.em.json`` on the window. The study opens in the
**Stratigraphy** workspace.

The bar of the workspaces
-------------------------

Across the top of the window runs the bar of the **workspaces**. A workspace is
an arrangement of windows made for one activity, and each answers one question.
Hold the pointer on a workspace's name and its question appears:

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Workspace
     - Its question
   * - **Stratigraphy**
     - What is there, in what order, and does it hold?
   * - **Sources**
     - Where does this datum come from?
   * - **Archive**
     - Which files do I have, and what became a document?
   * - **Narrative**
     - How do I tell it, and what does it rest on?
   * - **Space**
     - Where is it, and what shape does it have in each epoch?
   * - **Sheets**
     - What does the recording sheet say of this unit?

``Help ▸ Workspaces…`` shows the same table with the windows of each workspace.
:doc:`/explanation/workspaces-are-questions` explains why the application is
organised this way.

Walk through the six
--------------------

Click the workspaces one at a time, from left to right. The study is the same in
all of them: what you select in one window is selected in every window that shows
it.

**Stratigraphy.** On the left the **Outliner** lists what is in the graph, by
epoch. In the middle the **Graph** window shows the stratigraphic matrix: the
units in horizontal bands, one per epoch, the most recent at the top. On the
right the **Inspector** describes what you select. Click a unit in the matrix,
for example *SU001*: the Outliner finds it and the Inspector shows its
properties. Drag the empty canvas to move around, use the wheel to zoom, and
press :kbd:`0` to fit the whole graph in the window.

**Sources.** The **Viewer & card** shows the document or the image the selection
points at, next to a smaller matrix. Select a unit and the Viewer shows its
documents; select a document in the Outliner and the Inspector shows its fields.

**Archive.** Here the subject is the files rather than the graph. The **Files**
window shows the disk (or, in a room, the room's store), the **Shelf** below it
holds the list of resources the study works from, and on the right the
**Transformation chain (DTC)** draws how each file was produced. There is no
Inspector here: a file is not yet a node of the graph.

**Narrative.** The **Index** on the left lists the chapters of the story, the
page in the middle is the story itself, and the matrix beside it follows the
chapter you are reading. In Templu Mare the narrative is already written.

**Space.** The **3D scene** shows the models of the temple in the epoch chosen
in its bar, with the table of the models and proxies underneath. Pick a proxy in
the scene: it is the same unit the Outliner, the matrix and the Inspector show.

**Sheets.** The **Sheet** shows the selected unit as its recording sheet. Around
it, small windows follow the same unit: its proxy in the scene, its neighbours in
the matrix, and its photographs and documents below.

The windows
-----------

Every area of a workspace is a **window**, and every window has a header. At the
left of the header, the window's icon opens the **window type** menu
(*Window type — transform this window*): choose another type and the same area
shows another kind of window. Some types have a **Mode** menu in the header too,
which changes what the window shows without changing its type: the Graph window,
for example, shows the **Matrix**, the **Graph** (the same units in a free
layout), the **DTC** or the **Graphs paradata**.

To look at one window alone, double-click the empty part of its header, or
press :kbd:`⌃Space` on the Mac (:kbd:`Ctrl+Space` elsewhere); do the same again to
put it back. :doc:`/reference/windows` describes every type.

Divide an area
--------------

You can divide any area in two, and the new half is a window of the same type.

#. Open the window type menu at the left of a window's header.
#. Choose **Split: a window beside** or **Split: a window below**.
#. In the new half, open the window type menu again and choose the type you
   want, for example **Chronology**.

The same gesture is available with the mouse: drag a corner of an area inwards
to divide it, or onto its neighbour to join the two. Drag a divider between two
areas to resize them; drag it to the edge to close one.

A workspace you change keeps your arrangement. When you want it back as it came,
right-click its name in the bar and choose **Reset the arrangement**.
:doc:`/reference/workspaces` explains how to make workspaces of your own.

The status bar
--------------

At the bottom of the window, the status bar says where you are working. Its
label on the left reads **On this computer** for a file of your disk, or the name
of the room and of the node when you are in a room; click it (or press
:kbd:`⇧⌘L`, :kbd:`Ctrl+Shift+L`) to open the chip's menu at the
section **Where you work**.

What next
---------

Close the study without saving: nothing has changed. Continue with
:doc:`first-study`, where you add a unit of your own.
