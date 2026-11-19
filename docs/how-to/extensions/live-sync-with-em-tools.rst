.. _how-to-extensions-live-sync-with-em-tools:

Work live with EM Tools in Blender
==================================

*Keep EMStudio and EM Tools in Blender on the same graph and the same selection.*

EM Tools is the add-on of the Extended Matrix for Blender. When EMStudio works
live with it, the two programs look at the same graph: a unit selected in
EMStudio is selected in Blender, an object selected in Blender is selected in
EMStudio, and Blender can model a proxy for a unit on request. The em.json stays
the reference of the study; the live link is a convenience between two programs
on the same computer, or on the same network.

In the section **Where you work** of the chip's menu (the chip at the top right
of the window) this way of working is called **With an app**.
The older versions called it *Sidecar*, and the button behind the choice still
carries that name (see :doc:`/reference/menus`).

Before you start
----------------

- Install Blender and EM Tools, and open in Blender the study you want to work
  on, with its graph loaded in the EM panel. In Templu Mare, the graph *Temple*.
- In Blender, in the tab **EM ▸ Where you work**, press **Work with EMStudio**.
  EM Tools then keeps a connection open, and EMStudio connects to it.
- The address EMStudio uses is in ``Settings… ▸ Connections``, section
  **Synchronised apps**: **Sync with** is **Blender · EMtools**, and
  **Protocol**, **Host / IP** and **Port** compose the **Address** shown
  underneath (see :doc:`/reference/settings`).

Connect EMStudio to Blender
---------------------------

#. Click the label at the left of the status bar, or press :kbd:`⇧⌘L`
   (:kbd:`Ctrl+Shift+L` on Windows and Linux). The chip's menu opens at the
   section **Where you work**.
#. Under **Mode**, choose **With an app**.
#. Under **Synchronised apps**, the line of Blender says **connected**. If it
   says **waiting for it**, EMStudio has not found Blender yet: it asks again
   every three seconds by itself. Press **Find** to try the ports EM Tools uses
   on this computer; when one answers, EMStudio says **found at** with its
   address and keeps that address in the settings. If the line still waits,
   choose **On this computer** and then **With an app** again: the new
   connection uses the address found.
#. Blender sends its graph. The graph becomes the active one in EMStudio, and
   its name is followed by **from Blender (sync)** in the list of graphs, in the
   title and in the name strip. A line in the Log says that the active graph is
   now Blender's graph, live, and not the file's.

If no graph is loaded in Blender, EMStudio says so and names the graphs Blender
lists. Load the graph from the EM panel in Blender: it arrives in EMStudio by
itself, with no new connection.

If the graph in Blender is written with another version of the Extended Matrix
datamodel than the file open in EMStudio, a message names the two versions.

Work with the two programs
--------------------------

- **Selection.** Select a unit in the Matrix, in the **Outliner** or in the
  Space: Blender selects its proxy. Select an object in Blender: EMStudio selects
  its node, and **Zoom to selection** frames it when that switch is on. Several
  objects selected in Blender arrive as a multiple selection.
- **What arrives from Blender.** When the mode is **With an app**, the section
  **Where you work** shows **What you accept from Blender**, with three choices:
  **Everything** (the selection and the changes to the graph, the default),
  **Selection only**, and **Nothing**. What you choose applies to this window;
  what EMStudio sends always leaves, and Blender decides what it takes.
- **A proxy modelled in Blender.** Select a unit. In the **Inspector**, section
  **Proxy**, press **Model the proxy in Blender**. Blender makes a box at its 3D
  cursor, named after the unit, in its *Proxy* collection, and its geometry comes
  back into the graph as a property of the unit. A proxy already in Blender's
  scene is selected there instead, and nothing is added.
- **A resource imported in Blender.** On a resource, the **Inspector** offers
  **Import geometry in Blender**: Blender imports its mesh, and what it creates
  comes back into the graph.
- **A node shown in Blender.** In the **Inspector**, section **Open with…**,
  **Blender / EMtools · select it** selects the node's object in Blender.

The two commands that ask Blender to model need its consent. If the button is
greyed out, its tooltip says why: either EMStudio is not connected, or, in
Blender, the tab **EM ▸ Where you work ▸ Permissions…** does not have
**EMStudio may model in this scene** ticked.

When the two programs have different documents open, EMStudio says so in the
Log and in the panel, with **different doc** beside the app: working on two
documents is allowed, and it is the reason why a selection finds nothing on the
other side.

Open a .blend in Blender from EMStudio
--------------------------------------

#. In the **Archive** workspace, in the **Files** window, right-click a
   ``.blend`` file.
#. Choose **Open in Blender**. EMStudio starts the Blender of this computer on
   that file, joined to the open graph through the same live link.

The same menu offers **Open as a folder**, which lists the objects of the
``.blend`` inside the **Files** window. There, **Selection synchronised with
Blender** makes a click on an object select it in Blender, and a selection in
Blender pick the matching objects in the list. The other commands of that view
are described in :doc:`compose-a-blend`.

Stop working live
-----------------

In the section **Where you work** of the chip's menu, under **Mode**, choose
**On this computer**.
EMStudio stops waiting for Blender, or closes the link, and the graph that came
from Blender leaves the list: it belongs to Blender. The file you had open stays
open, as it was.

What you get
------------

One study seen by two programs: the stratigraphy in EMStudio, the 3D in Blender,
with the selection shared, the proxies modelled in Blender and returned to the
graph, and every change that you accept from Blender recorded in the graph like
any other change.

See also
--------

- :doc:`compose-a-blend`, to prepare a working ``.blend`` from the graph.
- :doc:`/how-to/space/place-objects`, to place the models in EMStudio's own Space.
- :doc:`/reference/settings`, section *Connections*, for the address of the link.
- :doc:`/reference/inspector`, sections *Proxy* and *Open with…*.
- :doc:`/explanation/open-enter-create`, for the three ways of working.
