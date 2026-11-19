.. _how-to-archive-versions-for-each-use:

Prepare versions for each use
=============================

*Keep the versions of a model that each use needs.*

A model of a study has one *master*, the richest file, and as many *versions* as
its uses ask for: a light one for a phone, one for the web and Heriverse, one for
a realtime engine. In the graph each version is a version of the same asset,
stamped as derived from the master. Its file is named after the model, the use
and its triangles, for example ``Column_light1@mobile-webxr-2k.glb``. A version
for another use, or with other numbers, sits beside the first one; the same
version made again becomes a revision of it.

EMStudio makes the versions with gltfpack, and with Blender and EM Tools when a
normal map has to be baked from the master. The jobs run on the bridge, in
processes of their own, so EMStudio stays usable. The master is never changed.

Before you start
----------------

- Open the study and switch to the **Archive** workspace.
- Stamp the masters first (see :doc:`/how-to/sources/declare-provenance`): a
  version made from a stamped file is born stamped as derived from it.
- When a tool is missing, EMStudio says so and offers to install it, as an
  add-on in ``Settings… ▸ Advanced``.

Make a version of one model
---------------------------

.. image:: /_static/screens/windows/files-optimise.png
   :alt: The Files window on the folder proxies with SU001.glb chosen and the tab Optimise open: Variants of a model with its five destinations, the engine gltfpack, and the button Optimise 1 model → 1 variant.

#. In the **Files** window, mode **Disk**, choose one or more models (``.glb``,
   ``.gltf`` or ``.obj``) and open the **Optimise** tab of the tools panel.
#. Under **Variants of a model**, choose the destination: **Preview / catalogue**,
   **Mobile webXR**, **webXR (ATON / Heriverse)**, **3D printing** or
   **Desktop realtime (Blender, Unreal)**. The tab says how the geometry, the
   textures and the compression will be treated, which engine runs, and into
   which folder the version goes. A version that already exists is not
   overwritten. **Desktop realtime (Blender, Unreal)** runs in Blender with
   3D Survey Collection, an experimental way: it needs the experimental
   functions switched on in **Settings…**.
#. Click **Optimise 1 model → 1 variant** (or the same button with your number
   of models). A chip follows the job; a click, then a second one, cancels it.

The version is registered in the graph as a version of its asset, with its step
**LOD generation**. Under **Prepare for a use**, in the same tab, **Diagnose**
measures what a model or a ``.blend`` costs for a use (triangles, draw calls,
textures, download, GPU memory) and what can be improved, before you make
anything.

Make the versions of the whole study
------------------------------------

#. Open the list of the assets with ``File ▸ Consolidate for…``, or choose
   **Assets** in the mode menu of the **Files** window, and choose the
   **Target** (see :doc:`consolidate-for-a-target` for reading the list).
#. Tick the assets to treat and click **Apply and queue**: each one receives the
   proposal for the target, and the job goes into the queue.
#. To decide by hand, use the bar **or set:** instead: write the triangles (``2k``,
   ``2500`` and ``10.000`` are all understood), choose a **texture…** size, a
   **tool…** and **KTX2**, and click **Set on the selected**. Then click
   **Put in the queue**.

The tools are **Blender: decimate + bake normals**, **gltfpack (meshopt)**,
**textures → KTX2 only**, **Obj2Tiles → tileset**,
**instances (repeated shapes)** and **leave as it is**.

Make a lighter version beside one there
---------------------------------------

A version already covers its target, but you want it lighter.

#. On the row, click **Shrink…**. The window **Shrink** followed by the name of
   the asset says what there is now for the target.
#. Write fewer triangles, or choose a smaller texture (or leave
   **texture as it is**), and click **Put in the queue**.
#. If a file with the new name is already there, choose **New beside it**, which
   adds ``-2`` to the name, or **Replace**, which makes it again over the file
   there.

Manage the version of a target
------------------------------

The card of each target, at the top of the **Assets** view, ends with
**The version for this target**: how many versions were made for it, how many are
reused from other targets, and which assets miss one.

- **Generate what is missing** selects the assets without a version and queues
  them.
- **Regenerate** makes again, from their masters, the versions made for this
  target, and the ones to remake after a master was replaced.
- **Delete the version…** takes away only what was made for this target, after a
  preview and a confirmation; the versions reused by other targets stay. It
  waits until every asset has a master: for those that have none, the card
  offers **Indicate the master file…** or
  **Promote the richest version to master**.

The deleted files have no undo. The target is then uncovered for those assets,
and the master is never loaded in their place.

Look after the versions of one model
------------------------------------

#. Open the asset with ▸: its versions appear under it, each with its level, its
   numbers and its textures.
#. The menu of a version row, **More on this version**, holds
   **Remove this version…** and, on the master, **Replace the master…**. A new
   master asks for the path of its file and for the reason, which is kept in the
   chain; the versions made from the old master are then marked to remake.
#. In the panel on the right, **Versions of** followed by the name of the asset
   lists the version files on the disk, with their state in the graph. Tick
   **Delete** on the ones to remove and click the button that counts them, for
   example **Delete the selected (3)**.
#. To remove the versions of one level across the whole study, choose it in the
   menu **Level: all**, click **Select the visible**, and then the button that
   counts them, for example **Remove 12 versions…**. A preview and a
   confirmation come first. The master is never removed from there.

Choose the version a model shows
--------------------------------

Select a model and open the section **Versions** of the **Inspector**. **Mode**
says how the 3D scene chooses: **For the hardware** of this machine (the
default), **The lightest**, **Versions: automatic, by the distance**,
**By use**, or **Manual**, which keeps the one drawn. **Version** picks one by
hand, and **Use of this device** sets the use that **By use** follows. The same
modes are in the context menu of the models in the 3D scene, for all the models
selected. The hardware profile of the scene is described in
:doc:`/how-to/space/load-models-and-tilesets`.

What you get
------------

For each model, a master and the versions its uses need, each one a stamped file
registered in the graph as a version of the same asset, so that every viewer
loads the one made for it.

See also
--------

- :doc:`consolidate-for-a-target`, to check a target before handing the study
  on.
- :doc:`storage`, for the **Files** window and its tools panel.
- :doc:`/explanation/dtc-and-em`, for the chain that links each version to its
  master.
