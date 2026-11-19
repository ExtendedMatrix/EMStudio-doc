.. _how-to-extensions-compose-a-blend:

Compose a .blend from the graph
===============================

*Compose a working Blender file from the graph, with every object tagged with its place in the graph.*

A working ``.blend`` gathers in one Blender file the models a task needs: the
reconstruction of an epoch to model on, the survey of a container to print, the
whole study to archive. EMStudio composes it from what the graph knows. For each
model it takes the version that suits the chosen profile (or the master), finds
its file on this computer or in the room, and writes into each object the tags
that tie it to the graph: its model, its container, its epochs, its version and
its file's fingerprint. EM Tools reads those tags, so the objects keep their
place when you work on them in Blender.

The work is done by the Blender of this computer, started in the background on a
new, empty file: an existing file is never written over.

Before you start
----------------

- Open the study from a file saved on this computer: the folder of the em.json
  says where the models are. A study with no file on this computer is refused
  with a message that asks you to save it first.
- Check that EMStudio finds Blender: ``Settings… ▸ Add-ons``, last card,
  **Blender** (see :doc:`/reference/settings`).
- Let EMStudio find the files of the models (see
  :doc:`/how-to/files/find-missing-files`). A model whose file is missing is
  listed apart and left out.

Compose from the whole graph
----------------------------

#. Choose ``File ▸ Compose a .blend from the graph…``. The window
   **Compose a working .blend from the graph** opens.
#. In **Working profile**, choose what the file is for: **modelling**,
   **offline rendering**, **3D printing** or **archive**. The profiles made for
   publication (webXR, mobile webXR, desktop realtime, preview) are prepared with
   **Consolidate for…** instead (see :doc:`/how-to/archive/consolidate-for-a-target`).
#. In **How**, choose **link (the files stay where they are)** or **append (a
   copy inside)**.
#. In **From**, choose **this computer's disk**. Inside a room, the list also
   offers the room: what is missing here is then fetched from the room's store,
   file by file, and kept in a cache of this computer.
#. Tick the **Containers** and the **Epochs** you want. With none ticked, all of
   them are taken. In Templu Mare, tick the epoch **II A.D.** to compose the
   models of that phase only.
#. Read the plan under the fields. It is computed again at each change: a
   sentence that sums it up, the count of files to import, to take from a
   ``.blend``, to fetch from the room and of the tilesets, then one line per
   model with its version, how it enters and its file. The models that cannot
   enter are listed under **Not composed**, each with the reason.
#. **New file** proposes a name beside the em.json, after the study and the
   profile. Change it if you wish, then press **Compose**.

The composition runs as a job, **Blender · composing …**, in the queue. At the
end a message says how many objects were composed with the graph's tags, and
how many files were fetched from the room.

Compose around a detail of the Space
------------------------------------

In the **Space**, a **Sketch** (a base shape not yet given to a unit, see
:doc:`/how-to/space/place-objects`) can mark a detail of the site: a cube laid
over the part of the models you want to work on.

#. Right-click the sketch in the **3D scene** and choose
   **Open in Blender with this detail**.
#. The same window opens with the models the sketch meets and the epoch shown
   already chosen. A note gives the detail's name and the corners of its box in
   the coordinates of the study; the box travels with the plan.
#. Press **Compose**. When the file is written, Blender opens on it.

Compose from an existing .blend
-------------------------------

A ``.blend`` that already holds the study, the master file of a survey for
example, can give a lighter working file.

#. In the **Archive** workspace, in the **Files** window, right-click the
   ``.blend`` and choose **Compose a .blend for…**. EMStudio first reads the
   file with Blender, if it has not read it yet.
#. In the window **Compose a working .blend from …**, choose the **Profile**,
   **How** (link or append) and **What**: **only what the profile needs**, or
   **everything**.
#. Read the plan: the source files with the number of objects each gives, and
   the objects whose file is missing.
#. Check **New file**, proposed beside the ``.blend`` after its name and the
   profile, then press **Compose**.

Check a .blend against the graph
--------------------------------

A working file drifts from the graph: a model is changed in Blender, a newer
version is registered in the graph, a texture goes missing.

#. In the **Files** window, right-click the ``.blend`` and choose
   **Check against the graph**. The file opens as a folder: a list of its
   objects, which can be filtered by name, kind, collection, epoch, model, unit,
   document and state.
#. Each object carries its state, such as **aligned**, **changed in Blender**,
   **newer outside**, **missing** or **only in the .blend, not stamped**, and a
   proposed action, such as **register as a version**, **restore from the
   master** or **find the texture**.
#. The section **Before / after** compares, for each tagged object, the version
   in the scene with the last one in the graph, and offers **Update**.
#. Tick the rows to act on and press **Apply**. If a Blender has the file open
   and is linked live to EMStudio, the changes are sent to it, and you save them
   there. Otherwise EMStudio asks for confirmation, then a background Blender
   applies them and saves the ``.blend``.

What you get
------------

A new ``.blend``, written by Blender beside the study or beside the original
file, in which each object knows which model, container, epochs and version of
the graph it stands for. Opened in Blender with EM Tools, it works with the
graph like any other file of the study, and it can be checked against the graph
again at any time.

See also
--------

- :doc:`live-sync-with-em-tools`, to open the file in Blender linked live to
  EMStudio.
- :doc:`/how-to/archive/consolidate-for-a-target`, for the versions a viewer
  will load.
- :doc:`/how-to/space/containers-and-epochs`, for containers and epochs.
- :doc:`/reference/settings`, section *Add-ons*, for the Blender of this
  computer.
