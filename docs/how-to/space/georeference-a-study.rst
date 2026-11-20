.. _how-to-space-georeference-a-study:

Georeference a study
====================

*Give each graph of the study its coordinate system.*

A georeference says where the scene of a graph lies on the Earth: in which
**coordinate system** its metres are written, and where the origin of the scene
falls in that system (the **shift**). In EMStudio the georeference belongs to each
graph, never to the file: an em.json can hold graphs in different systems, and
each keeps its own. Templu Mare's graph *Temple*, for example, is written in
Stereo 70 (EPSG:3844), the Romanian national grid.

Every object with a place in the Space — a model, a tileset, a proxy — inherits
the georeference of its graph, as it inherits the author or the licence. You set
it once on the graph; a model that was surveyed in another system receives a
system of its own (see :ref:`how-to-space-georeference-own-system` below).

Before you start
----------------

- Open the study. The georeference is written into the graph that is active.
- The search of a system by its name, the name shown under the code and the
  datum operations come from PROJ, the database of coordinate systems, through
  EMStudio's local service (the bridge). Without the bridge the card says **The
  bridge does not answer: PROJ is not reachable (the fields still write)**: the
  code and the numbers can still be written by hand.
- If the survey came with a ``SHIFT.txt``, as EM Tools and 3D Survey Collection
  write it, you can read it instead of typing (see :ref:`how-to-space-georeference-shift-txt`).

Set the graph's system
----------------------

.. image:: /_static/screens/dialogs/georeferencing.png
   :alt: The Georeferencing card of the graph Temple: coordinate system, shifts, north, the datum operation and the exceptions.

#. Choose ``Tools ▸ Georeferencing…``. The same card opens from the **⌖** button
   in the bar of the **3D scene**, from **Georeferencing…** at the foot of the
   scene's **Visibility ▾** menu, and from **Open in the Georeferencing card** in
   the Inspector. It closes with **✕**, with :kbd:`Esc` or with a click outside
   it.
#. The card **Georeferencing** opens on the active graph and recalls its rule:
   **The georeference belongs to each graph, not to the file.** When the file
   holds more than one graph, the list **The 2 graphs of this file, each with its
   own system** shows each graph with its code and shift: click the graph you
   want to set.
#. A graph with no georeference reads **Not georeferenced**. Press **Georeference
   this graph**: the graph receives its georeference node, with the shift at zero,
   grid north, and no system yet.
#. In **Coordinate system**, write the code (``3844`` or ``EPSG:3844``) and press
   :kbd:`Enter`, or write words of its name (``Stereo 70``) and choose the system
   in the list that appears. Spaces and punctuation do not count in the search;
   deprecated codes come last and are marked **deprecated**. Under the field
   EMStudio writes the name of the system as PROJ knows it. An empty field means
   that the graph is not georeferenced: EMStudio never assumes a system nobody
   declared.
#. Write **Shift X** and **Shift Y**: the position of the scene's origin in the
   system, in metres. **Shift Z** stays at 0 and cannot be edited: by convention
   the heights are in the models themselves.
#. If the scene is turned with respect to the north, write the **Azimuth (°)**
   and choose in **North** whether it is measured from the **grid north** of the
   system or from the **true north**.
#. Leave the datum operation to EMStudio unless you know it. It is the recipe
   that converts between two different models of the Earth; without it the gap
   can reach a few metres. It waits closed under **Advanced — datum operation**,
   and opens by itself as **Datum operation (two models of the Earth)** when two
   models of the Earth meet: when the graph already declares an operation, or
   when one of its models stands on another datum. The list gives each operation
   PROJ knows, with its accuracy and its area. The best one for the site is
   preselected and proposed with **Use this**; nothing is written until you
   choose. When a declared operation does not cover the site, the card says so
   and names the one PROJ would propose, and changes nothing by itself.

Every change is one step of ``Edit ▸ Undo``, a line in the **Log** on the
georeference node, and the Space is drawn again. The models are never rewritten:
only the transformation that carries them into the graph's system changes.

Give every graph the same georeference
--------------------------------------

When the graphs of one file belong to the same site, set one of them, then press
**Apply to every graph of the file…** under its fields. A summary lists the
other graphs with their georeference **Now** and **After**, and what will
happen to each: **georeferenced**, **updated**, **will be overwritten** (a graph
that stands in another system) or **already the same**. Press **Apply** to copy
the system, the shift, the azimuth and the datum operation into each graph. Shift
Z is not copied. One undo takes back the change in all the graphs.

.. _how-to-space-georeference-own-system:

Give one model a system of its own
----------------------------------

A model surveyed in another system, or with another shift, keeps its own
coordinates and receives a system of its own; the Space then converts it into the
graph's.

#. Select the model in the **3D scene** (:kbd:`Alt`-click on the mesh) or in the
   **Outliner**.
#. In the **Inspector**, among the own and inherited values, the row
   **Georeferencing** reads **from the graph «Temple»**. Press **Make own…** and
   confirm with **Make own**. The model starts from the graph's values, so nothing
   moves yet.
#. In its **Georeferencing** section, change the **Coordinate system** or the
   shift. A line says what the Space now does with the model: **in the graph's
   system**, **in the graph's system, its own shift**, **reprojected from
   EPSG:32635** (for example), or **local, not georeferenced**.
#. **Back to the graph's** removes the model's own system: from then on the
   model follows every change of the graph again.

A tileset does the same. A proxy and an extractor anchored in 3D always follow
their graph, and their section says why. A GIS layer stands in the system of its
own file, which is changed in its GIS panel.

The objects with a system of their own are the exceptions. The card lists only
them, under **Exceptions**, with their number and the number of all the models,
a search by name, and **show all** for the full list (each model **as the graph**
or **its own system…**); a click on a name selects the object and opens its
**Georeferencing** in the Inspector. In the **Outliner** they carry the mark ⌖,
and the option **Only objects with their own georeference** in the Outliner's
☰ menu shows only them.

.. _how-to-space-georeference-shift-txt:

Read a SHIFT.txt
----------------

Select the graph's own node (or open the **Study** window): its **Georeferencing**
section, under the site position, offers **Import shift.txt…** and **Export
shift.txt**. Importing a ``SHIFT.txt`` writes its code and its three shifts into
the graph's georeference, as one step of undo. When the code read is deprecated,
or reaches the world system only approximately, EMStudio proposes **Convert to
EPSG:…**, the replacement that PROJ gives; you can also leave the code as it is.
Exporting writes the same single line for EM Tools and 3D Survey Collection.

What you get
------------

The georeference is saved with the graph, in its em.json, and EM Tools reads it
from there. In the **3D scene**:

- the tooltip of **⌖** gives the graph's system, for example **Georeferencing —
  EPSG:3844, and the models**;
- **🌐 Globe** in the bar lays the site on its ground, with a basemap and the
  terrain, and offers the views **Globe**, **Plan** and **Site**; ``⋯ ▸ Go to the
  site`` brings the camera back to it;
- tilesets and models with a system of their own are converted into the graph's
  system.

The tiles of the map and of the globe are kept on your computer (see
:doc:`/reference/file-locations`).

See also
--------

- :ref:`reference-inspector`, section *Georeferencing*, for the rows of each object.
- :doc:`/how-to/bring-in/porta-dentro`, for a GIS layer that declares no system.
- :doc:`load-models-and-tilesets`, for the models placed in the georeferenced scene.
