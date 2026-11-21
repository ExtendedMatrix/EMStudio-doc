.. _how-to-space-place-objects:

Place objects in the scene
==========================

*Move, rotate and scale objects in the Space.*

A model or a proxy sometimes lands in the wrong place: a reconstruction made in a
local frame, a proxy modelled apart from the survey. In the **3D scene** you put
it where it belongs with the gestures of Blender — :kbd:`G` to move, :kbd:`R` to
rotate, :kbd:`S` to scale — or by typing the numbers. The file of the model is
never touched: EMStudio writes the position, the rotation and the scale in the
graph, as the **transform** of the node, the same field EM Tools reads in
Blender.

The numbers are those of the data, in Blender's frame: Z up, positions in metres,
rotations in degrees.

Before you start
----------------

- Open the **Space** workspace on the epoch where the object is drawn.
- A tileset keeps its position in its own ``tileset.json``: it is placed by its
  georeference, not by hand (see :doc:`georeference-a-study`).

Move, rotate or scale with the keys
-----------------------------------

#. Select the object in the scene: a click selects the proxy under the pointer,
   :kbd:`Alt`-click selects the model (the mesh). :kbd:`Shift`-click adds to the
   selection. You can also click its row in the **Outliner**.
#. Keep the pointer over the scene and press :kbd:`G` (move), :kbd:`R` (rotate)
   or :kbd:`S` (scale). The object follows the pointer.
#. To work along one axis, press :kbd:`X`, :kbd:`Y` or :kbd:`Z`; with
   :kbd:`Shift` and the axis, the move stays in the plane without that axis;
   the same key twice uses the object's own axes. You can also type a number,
   for example :kbd:`G` :kbd:`Z` ``0.5`` to raise the object by half a metre.
#. Hold :kbd:`Ctrl` while moving to rest the object on the face under the
   pointer: its lowest point touches the surface. While rotating or scaling,
   :kbd:`Ctrl` gives steps of 5° and of 0.1.
#. Press :kbd:`Enter` or click to confirm; press :kbd:`Esc` or right-click to put
   the object back.

An object turns and scales about the centre of its own box; several objects about
the middle point of their boxes. One gesture is one step of ``Edit ▸ Undo``, and
the **Log** records **Transform of … written**.

Type the numbers
----------------

#. Select the object.
#. In the **Inspector**, open the section **Transform**, or press :kbd:`N` in the
   scene to open the sidebar on its right, tab **Item**: the two show the same
   numbers.
#. Change **Position**, **Rotation** or **Scale** and press :kbd:`Enter`. The
   **Quaternion (W X Y Z)** and the **Pivot (m)**, the point the object turns
   about, are shown for reading.
#. **Reset** puts the object back where its file puts it.

With several objects selected, a value changed in the tab **Item** moves them
all by the same amount. A line under the numbers says where they are written: the
model's own transform, applied over its file, or the transform of the proxy's
shape, applied over its file.

Use the 3D cursor
-----------------

The 3D cursor is a point of the scene you choose: new shapes are added there, and
an object can be brought to it.

- With the tool **3D cursor** of the toolbar (:kbd:`T`), a click on a surface
  lays the cursor there; with any tool, :kbd:`Shift` + right click does the same.
- :kbd:`Shift+C` puts it on the middle of what is drawn, and frames the view on
  it.
- The tab **View** of the sidebar shows its position and rotation under
  **3D cursor**, and **To the centre of the scene** brings it back to the centre.

The section **Snap** of the same tab sets how :kbd:`Ctrl` rests an object on a
face, with **Align to the normal** to turn it with the surface.

.. _space-sidebar-toolbar:

The sidebar and the toolbar
---------------------------

The scene has two regions of its own, as Blender's 3D view.

The **toolbar**, on the left edge of the scene, is a column of icons; :kbd:`T`
shows and hides it. At the top the tools of the Space: **Select** (a click
selects an object, a drag on the empty or :kbd:`B` a box) and **3D cursor** (a
click on a surface lays the cursor there). Under a separator come the tools of
the extensions, for example the three tracing tools of the geophysics package;
the tooltip says the tool's name and its extension, and a tool that cannot be
used here is greyed out with the reason (**No slice of Geofisica is shown in
this Space**). The active tool is lit; :kbd:`Esc` goes back to **Select**.

The **sidebar**, on the right, opens and closes with :kbd:`N` or with the small
arrow on the edge of the scene. Its vertical tabs, on its right edge, each show
a set of panels:

- **Item** — the object selected: its position, rotation and scale;
- **Tool** — the active tool and its options (a trace's points, **Finish the
  trace**, **Stop tracing**);
- **View** — the view and the lens, the **3D cursor**, the **Level of detail**,
  the **Snap**;
- one tab for each extension that brings panels, named as the extension (or as
  its panels say): **Geofisica** holds the panel **Geophysical stack**.

The tab you choose is remembered for each workspace. In a narrow window, or on a
telephone, the sidebar opens over the scene instead of narrowing it.

.. figure:: /_static/screens/space/sidebar-extension.png
   :alt: The Space with the toolbar on the left of the scene (Select, 3D cursor, a separator, the three tracing tools of Geofisica) and the sidebar on the right, open on the vertical tab Geofisica with the panel Geophysical stack.

   The toolbar on the left; the sidebar on the right, on the tab of an extension.

.. figure:: /_static/screens/space/sidebar-tool.png
   :alt: The sidebar on the tab Tool while Linear anomaly on a slice is active: the tool's name and its extension, how to trace, No point placed yet, Finish the trace and Stop tracing.

   The tab **Tool** with a tool of an extension active.

From a script, ``em.app.space.sidebar`` lists the tabs (``tabs``) and opens one
(``open("Geofisica")``), and ``em.app.space.tools`` lists the tools and
activates one (``activate("geofisica.trace.point")``).

Lock an object where it is
--------------------------

In the **Outliner**, the padlock of an object's row locks its position: **Lock
the position (no move, rotation, scale in the Space)**. A locked object does not
answer to :kbd:`G`, :kbd:`R` or :kbd:`S`, and the scene says why. The padlock is a
preference of yours, kept on this computer; a click unlocks it.

Shape a proxy from a base shape
-------------------------------

When a unit has no proxy yet, you can sketch one in the scene.

#. Lay the 3D cursor where the unit is.
#. Press :kbd:`Shift+A` with the pointer over the scene (the same menu is behind
   **+ Shape**) and choose a shape among the **Base shapes**. It appears at the cursor as a
   **Sketch**: a shape not yet given to a unit, saved with the file.
#. Place it with :kbd:`G`, :kbd:`R` and :kbd:`S`.
#. Right-click it and choose **Associate with a unit…** to give it to a unit of
   the epoch, or **Create a unit from this shape**. Another way: select the
   sketch, :kbd:`⌘`-click (:kbd:`Ctrl`-click on Windows and Linux) the unit in the
   graph, and press :kbd:`Ctrl+P`.

The sketch becomes the unit's proxy, written as a file beside the em.json (or
sent to the room), and its transform enters the graph with it.

What you get
------------

The object stands where you put it in every window that shows it, and the em.json
keeps its transform: EM Tools places it in the same spot in Blender. The file of
the model is unchanged, so the same file can be placed differently by another
study.

See also
--------

- :doc:`/reference/shortcuts`, section *In the Space*, for every key of the scene.
- :ref:`reference-inspector`, for the section *Transform* of an object.
- :doc:`load-models-and-tilesets`, to bring the models in first.
- :doc:`/how-to/extensions/live-sync-with-em-tools`, to place the models in Blender instead.
