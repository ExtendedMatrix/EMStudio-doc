.. _reference-em-legend:

EM legend and glyphs
====================

*The graphic language of the Extended Matrix as EMStudio draws it.*

The Extended Matrix is a formal language with a graphic language of its own:
every kind of node has a shape, a border and colours, and every relation has a
line. EMStudio takes all of them from the EM datamodel: the shapes, colours,
glyphs and lines are data of its visual rules, which the s3Dgraphy library
publishes and EM Tools for Blender reads as well. A study drawn
in EMStudio and in Blender therefore speaks the same language. EMStudio 1.6.0-dev.136
carries the visual rules of EM 1.6.48.

This page describes that language in words. To see it, EMStudio offers two
legends.

Two legends
-----------

**The legend of a window.** Every graph window has a small button in its lower
left corner, **Legend — what the lines on this canvas mean**. It opens a box over
the canvas that lists only what that window draws at that moment: the
**Relations**, each with a sample of its line, its name and how many there are,
and below them, folded, the **Nodes**. A relation or a node type that the
filters or the folded groups hide does not appear in the box. A click on a
relation highlights its lines on the canvas, and a second click takes the
highlight away. The samples are drawn by the same code that draws the canvas,
so the legend and the graph always agree.

.. image:: /_static/screens/dialogs/em-legend.png
   :alt: The EM legend opened from Help: a search field and the relations, each with its line and its name in the data model.

**The whole language.** ``Help ▸ EM legend`` opens the **EM legend**, the
complete list for someone studying the language: every relation that the
datamodel declares, with its sample, and every node type, with its glyph or
shape. Each row also shows the name the datamodel gives it. The search field
at the top finds a relation or a node type by its label or by its datamodel
name.

The names in both legends come from the datamodel, in the language of the
interface.

Stratigraphic units: shapes with a coloured border
--------------------------------------------------

In the Matrix, the stratigraphic units are drawn as shapes with a thick
coloured border and their name over the shape. The shape says what kind of
unit it is; the colour of the border separates the real from the virtual.

* A **stratigraphic unit** (US, or SU) is a rectangle with a dark red border on a
  light fill.
* A **documentary unit** (USD) is a rounded rectangle with an orange border.
* A **non-structural virtual unit** (USV/n) is a hexagon with a green border on a
  dark fill.
* A **structural virtual unit** (USV/s) is a parallelogram with a blue border on a
  dark fill.
* A **special find** (SF) is an octagon with a yellow border. A **virtual special
  find** (VSF) is an octagon with an ochre border. A **repositioned special find**
  is an octagon with the dark red border of the units.
* A **transformation unit** (TSU) is a rectangle with a dotted dark red border.
* A **negative unit** (US-) is a rectangle with a grey border, and a **neutral
  unit** (USNt) is drawn with grey corner brackets.
* A **series** of units of one kind (US series, USD series, USV series, VSF series)
  is an ellipse with the border colour of its kind.
* A **continuity node** is a small black diamond, the mark where a unit ends.

A stratigraphic unit can carry a **genre**: *masonry* or *coating*. The genre
does not change the shape or the colours of the unit. It adds a letter in a
corner of the shape, in the colour of the border: **M** for masonry and **R** for
coating. The legend of the window lists each genre on its own row.

Paradata, documents and authorship: glyphs
------------------------------------------

The nodes of the reasoning and of its context are drawn as **glyphs**: small
pictograms, each drawn from the vector paths that the datamodel carries. A glyph
stays sharp at every zoom. The glyphs include the **extractor**, the
**combiner**, the **document**, the **property**, the **human author**, the
**AI author**, the **licence**, the **embargo**, the **narrative**, the
**representation model** and its variants for a document and a special find, the
**graph**, the **study** and the **project**.

The colours of a glyph follow a rule written in the datamodel. Every layer of a
glyph has a role. The black lines and the white ground of a glyph adapt to the
theme: on a dark canvas they become the theme's ink and ground. The neutral
greys and the semantic colours of the language stay as they are in every theme.

A **document** also carries information in its outline. A thick border is the
canonical document, drawn at the moment it was created; a thin border is a use of
that document somewhere in the argument. The colour of a canonical document's
border is its **geometry category**, the metric authority of the way its model is
placed in the scene: *reality-based*, *observable*, *asserted* or *symbolic*,
and *EM-based* for a reconstruction derived from the Extended Matrix. A thick
black border is a canonical document whose category has not been chosen yet. A
document without a 3D model, such as an article, has no category and no colour.

A document or a property that a group of paradata reads from outside the group
is drawn again inside the group, as an **instance** with a badge that says where
it comes from. The instance is only a way of drawing: the data hold one node, and
a click on the instance reaches it.

Digital-twin chain: glyphs by kind
----------------------------------

In the chain of the digital twin (the DTC), each step, capture, output and device
has a glyph of its own, chosen by its **kind**: for example photogrammetry,
texturing, decimation, georeferencing and tiling among the processes; photo,
laser scanner, topographic and GNSS survey among the captures; point cloud,
mesh, DEM and orthophoto among the outputs; camera, drone, scanner and total
station among the devices. The full list is in ``Help ▸ EM legend``, after the
node types.

Groups and epochs
-----------------

A **group** is a light grey box with a thin dashed black border and its title in a
coloured tab at the top. The colour of the tab says what kind of group it is:
light blue for an **activity**, orange-beige for **paradata**, green for a
**time branch**, light grey for a **location**, and orange for an **RM container**
(a container of representation models). A location group of kind *study* has a
blue-grey border, and the site has a grey border and a glyph of its own.

In the Matrix, the **epochs** are horizontal rows, ordered by time, and every
unit sits in the row of its first epoch.

Relations: lines
----------------

Every relation has its own line. On the canvas the line pattern says which
relation it is: solid, dashed, dotted or dashed and dotted, with its own width.
The colour of the lines follows the theme, dark on a light canvas and light on a
dark canvas, with one exception: the relations of provenance (*has data
provenance*, *has property*, *extracted from*, *has documentation* and the link
of a node to its paradata group) are drawn in ochre, so that the reasoning reads
apart from the structure.

The relations that order the units in time (*is after*, and the physical
relations *cuts*, *fills*, *overlies*) and those that make them contemporary
(*has same time*, and *abuts*, *is bonded to*, *equals*) are the backbone of the
Matrix. The meaning of each relation, in time and in the graph, is declared in
the connections datamodel; its label is the one both legends show.

The Graph mode: discs
---------------------

The **Graph** mode of a graph window draws the same nodes in another way, for
seeing the shape of the knowledge rather than reading the Matrix. Every node is a
disc, and the legend of the window explains the discs under **What the discs
mean**:

* the colour of a disc is its **family**: real stratigraphic units, virtual
  stratigraphic units, continuity, paradata, 3D objects (models, proxies,
  versions), authors, licences and embargoes, and other nodes;
* the **rings** mark a specialisation: an octagon for a special find, a double
  ring for a structural virtual unit, a dashed ring for a non-structural virtual
  unit, and a dashed octagon for a virtual special find;
* paradata and 3D objects carry their glyph inside the disc;
* the larger the disc, the more relations the node has;
* the epochs and the groups are coloured areas behind their members.

The Space
---------

In the **3D scene** of the Space, a proxy is drawn in the colour of its type,
the same colour EM Tools gives it in Blender, so that the 3D translates the
graph as the glyph translates the meaning. A negative unit is the volume of the
matter removed, with transparent faces; a neutral unit is a void drawn with
dashed edges only. The colours of a scheme chosen in **Colours** (colouring the
proxies by the value of a property) are a way of looking and are described in
:doc:`/reference/emjson`.

.. seealso::

   :doc:`/reference/windows` for the graph window and its modes, and
   :doc:`/reference/menus` for ``Help ▸ EM legend``.
