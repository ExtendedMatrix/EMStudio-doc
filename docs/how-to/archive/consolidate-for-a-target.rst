.. _how-to-archive-consolidate-for-a-target:

Consolidate for a target
========================

*Check what a viewer will find, model by model, before you hand the study on.*

A study published on Heriverse, opened on a phone, or loaded in a realtime
engine does not show the heavy master of each model: it loads a version made for
that use. ``File ▸ Consolidate for…`` opens the list of the study's assets read
for one *target*, so that you can see, before handing the study on, which assets
have a version for it, how heavy the whole scene will be, and what is still to
do. Nothing is written while you read: the files and the graph change only when
an action of the queue runs.

Before you start
----------------

- Open the study. Its models and their versions are read from the graph and
  measured from their files, so the files should be on this computer (see
  :doc:`/how-to/files/find-missing-files`).
- The list is computed by the bridge. If the bridge is too old, the view says
  which level it needs.

Open the list for a target
--------------------------

#. Choose ``File ▸ Consolidate for…``. EMStudio switches to the **Archive**
   workspace and puts the **Files** window in its **Assets** mode. The first
   time, a bar shows the reading: the graph, the resources, the measuring of the
   files, the textures.
#. In the menu at the top left, choose the **Target**: **mobile webXR**,
   **Heriverse / web**, **desktop realtime** or **archive**.
#. To set two or more targets side by side, tick **Compare** and switch on the
   other targets with the buttons that appear beside it.

**Refresh** asks the list again, measuring anew the files that have changed.

Read the card of the target
---------------------------

.. image:: /_static/screens/windows/consolidate.jpg
   :alt: The Files window in the mode Assets after File ▸ Consolidate for…: the card of the target Heriverse / web, incomplete, with its bars for triangles, download and GPU memory, and the list of the assets grouped by container.

Each target switched on has a card at the top of the view. It gives:

- a word for the whole scene: **inside the band**, **outside the band**, or
  **incomplete** while some assets still have no version for this target, in
  which case the numbers estimate what a viewer would load;
- how many assets are covered, for example **2 / 98 covered**, and, after an
  arrow, how many will be covered when the queue has run;
- three bars, **Triangles**, **Download MB** and **GPU MB**, against the band of
  the target. The light bar is today, the dark bar is after the queue;
- the limits for one object, for example the triangles and the texture size a
  single model may have. For **archive** there is no ceiling: what counts is the
  master, stamped and present.

Under these figures, the card says what the version of the target is made of
(see :doc:`versions-for-each-use`).

Read the assets
---------------

#. Each row is an asset, with the columns **Asset / version / texture**,
   **Level**, **Triangles**, **Disk MB**, **GPU MB**, **Max texture**, **Tex**
   and **Stamp**, then one column per target, **state / proposal**. A click on a
   column header sorts the rows by it.
#. The state of each target is **ok**, **to do**, **missing** or **n/a**. Where
   something is to do, the cell shows the proposal: the tool, the triangles and
   the texture size. A value outside the band is highlighted.
#. Narrow the list with **Search assets…**, with the filter **All**,
   **Only to do** or **Only over the band**, and with the grouping: by
   container (the default), branch, epoch, family of name or state, or
   **No groups**.
#. Click ▸ to open an asset on its versions and their textures; **open all**
   opens every asset. **Textures** lists every texture of the study once, with
   its size, its weight and where it is used.
#. A click on a row lights it and shows its detail in the panel on the right,
   which **Show the row's panel (N)** opens and closes.

Some rows are read together. Copies of the same shape, with the same geometry and
textures, are gathered under one row **repeated shape ×** followed by the number
of copies, with one proposal: one reduced mesh and as many instances. Meshes
already covered by a tileset say **by the tileset of** followed by its name, and
stay out of the count. A version in the cloud, not yet downloaded, is counted with
the graph's estimate; **⤓ Download and measure** fetches it, after saying how much
it weighs.

Do what is to do
----------------

#. Tick the rows to treat, or the box at the top of the list for all the rows
   shown. A group has a box of its own.
#. Click **Apply and queue**. The proposal of each row, for the targets switched
   on, goes into the queue in one step. You can first change the proposal of a
   row in its cell.
#. If every object fits its band but the scene does not, the window
   **The scene is still over its band** proposes a second round: it lists the
   rows to shrink further, repeated shapes first, then the heaviest objects,
   with the triangles of the scene before and after. Choose
   **Shrink these too**, **Only the proposal**, or cancel.
#. The **Queue** runs each action in turn. **Run** starts the actions as their
   turn comes; **Pause** lets them pile up. The head of the queue says when it
   should end, for example **ends around 22:30**, from the durations measured on
   this computer.
#. An action that cannot start says why on its row, with the gesture that
   solves it: a tool to install, a source to stamp first, Blender to find. The
   others go on.

The queue also has a view of its own: choose **Queue** in the mode menu of the
**Files** window, or click **Open the Queue**. It shows one row per job, with its
asset, target, tool, state, progress, time and outcome, and filters for
**running**, **waiting**, **failed** and **done**.

What you get
------------

Each action of the queue writes a version of a model, stamped as derived from its
master, and registers it in the graph as a version of its asset. The card of the
target then counts it: when every asset is covered and the bars stay inside the
band, the study is ready for that target.

See also
--------

- :doc:`versions-for-each-use`, for the versions themselves and how to manage
  them.
- :doc:`storage`, to put the files in the room or in the bucket where the target
  reads them.
- :doc:`/how-to/space/load-models-and-tilesets`, for the version the 3D scene
  loads on this machine.
- :doc:`/how-to/extensions/compose-a-blend`, for a working ``.blend`` composed
  from the graph, the other command beside **Consolidate for…**.
