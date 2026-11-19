.. _how-to-space-containers-and-epochs:

Use containers and epochs
=========================

*See what the scene holds in each epoch through its containers.*

A survey is rarely one file. A campaign of 2015 can bring dozens of meshes, one
for each part of the site, and a tileset of the whole. In EMStudio, as in EM
Tools, these models are gathered in a **container**: one thing that stands for
the survey, with the document that published it, the epoch whose state it shows,
its light version and its members. Templu Mare has two: *Survey2015*, the survey
of 2015, and *Reconstruction II AC*, the models of the reconstruction.

The **3D scene** is drawn epoch by epoch. A model lives in an epoch when the
epoch, or its container, says so; a member with no epoch of its own follows its
container. This page shows how to read the scene by epochs, how to gather models
in a container and complete it, and how to move models and containers between
epochs.

Before you start
----------------

Open the study in the **Space** workspace, with an **Outliner** beside the
**3D scene** (the Space's arrangement has one on the left). The models must
already be in the graph (see :doc:`load-models-and-tilesets`).

Read the scene by epochs
------------------------

#. Choose the epoch in the bar of the **3D scene**, after **Epoch**. When the
   epochs have phases, the bar shows one menu, a tree: each epoch and, indented
   under it, its phases, such as **XX sec**, then **› Fine XX**, **› 2013** and
   **› 2015**. The arrows ← and → walk the list in its order.
#. In the **Outliner**, with **By epoch**, each epoch opens on **Proxies**,
   **Models**, **RMDoc** and **RMSF**. Under **Models**, a container lists its
   members that live in that epoch and, when it has one, its alternative.
   **Without proxy** lists the units alive in the epoch that have no shape. What
   has no epoch, and the GIS layers, are under **No epoch**.
#. A click on a row selects the object in the scene and stays in the Space;
   :kbd:`⌘`-click (:kbd:`Ctrl`-click on Windows and Linux) adds to the selection,
   :kbd:`Shift`-click selects a range. A right click opens the menu of the
   selection: frame it, hide it, isolate it, go to its unit or model.

Gather models in a container
----------------------------

#. Select the models: their rows in the **Outliner** (:kbd:`⌘`-click, or
   :kbd:`Ctrl`-click on Windows and Linux, adds a row), or a mesh in the scene
   with :kbd:`Alt`-click.
#. Right-click one of them and choose **New container from the selected (3)…**
   (the number is that of the selection).
#. In **New container from the 3 selected models**, write the **Name** and, if a
   document published these models, choose it in **Document (optional)**. Press
   **Create**.

A model belongs to one container only: **Move into the container…** takes the
selected models out of the one they were in and puts them in another, and **Take
out of the container** frees them. From a container's row in the **Outliner**, a
right click offers **Select its models** and the same choices.

Complete a container
--------------------

A container is complete when four bonds say what it is. Select it (its row in the
**Outliner**): the **Inspector** shows the section **Container**, with a line
that gives its bonds (**published by** a document, its **epoch**, its
**alternative**) or says **no document**, **no epoch**, **no alternative**, and
the button **Complete / change the container…**. In the **Archive** workspace,
the list of the assets marks the same containers as **incomplete container**,
with **Complete…**.

#. Press **Complete / change the container…**. The card **Complete the container
   «Survey2015»** has four boxes:

   - **Published by**: the document that publishes the models, such as a survey
     campaign or a report;
   - **Epoch**: the state of the site the container shows;
   - **Alternative**: its light version, a tileset of the same survey, shown in
     place of the meshes when they are too heavy;
   - **Members**: what it holds.

#. An empty box proposes what the graph suggests, with the reason: a document
   that already publishes most of the models, the epoch where most of them live,
   a tileset of the same document. Press **Accept**, or **Accept all** for every
   proposal at once. **Choose…** and **Change / add…** pick another value.
#. Close the card with **✕**. Each bond written or taken off is one step of undo.

Move models and containers between epochs
-----------------------------------------

One command moves any selection to an epoch: units, documents, proxies, models,
containers.

#. Select the container (or the models) and press :kbd:`M`, or choose **Move to
   epoch… (M)** in the menu of its row. :kbd:`Alt+M`, or **Extend to epoch…
   (Alt+M)**, keeps it where it is and makes it live in the other epoch too.
#. Choose the epoch. A preview says how many changes there are, from where to
   where, what is left out and why, and which members follow the container
   without an epoch of their own. A member with an epoch of its own stays where
   it chose, unless you tick the box that moves it too.
#. Confirm with **Move** or **Extend**, followed by the number of changes. It is
   one step of undo.

The same gestures are in the **Inspector**, section **Epochs**: **Move here**,
**Extend here too**, **Remove from here**, beside each epoch. A member that chose
an epoch different from its container's says so, with **Follow the container** to
drop its own choice and live again in the container's epoch.

The members of a container should live in the same epoch as the container. When
they do not, the container's tileset no longer stands for them: an alternative
does not cross epochs, and the preview warns about it before you confirm.

Choose what a container shows
-----------------------------

A container with an alternative can be drawn three ways. In the **Outliner**, the
menu of its row offers **Container: the models**, **Container: the tileset**,
**Container: automatic (far the tileset, near the models)**, and
**Container: by use**, which draws the tileset when it is declared for the
current use. The same choice is in the **Inspector** and in the **View** panel
of the scene (:kbd:`N`) as **Models**, **Tileset** and **Automatic**. The choice
is yours, kept on this computer; the graph does not change.

To make a tileset the alternative of a container, select the tileset and open its
section **Alternative** in the **Inspector**: EMStudio measures which models it
covers and proposes the container they belong to, or makes one.

What you get
------------

The scene of each epoch shows the models of that epoch, gathered by survey, with
the light version where it helps. The containers, their document, their epoch and
their alternative are saved in the em.json in the form EM Tools reads, so that
Blender shows the same survey in the same epoch.

See also
--------

- :ref:`reference-inspector`, section *Sections of an object in the Space*.
- :doc:`/how-to/stratigraphy/check-the-chronology`, for the epochs themselves.
- :doc:`colours-and-legend`, to colour the proxies by epoch.
- :doc:`/how-to/archive/versions-for-each-use`, for the versions of the models.
