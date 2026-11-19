.. _reference-inspector:

Inspector
=========

*What the Inspector shows of the selection, section by section.*

The **Inspector** answers one question: *what is the selection?* It shows the
node you selected in any window — a unit in the Matrix, a document in the
Outliner, a model in the 3D scene — and lets you change what belongs to it. With
nothing selected it says **Select a node to inspect it**. What belongs to the
whole graph (its name, its metadata, the site) is in the **Study** window, and the
graph's own node shows the same facts in the Inspector when you select it.

.. image:: /_static/screens/windows/inspector.jpg
   :alt: The Inspector showing SU001: its type, its other names, two warnings, the description, the media, continuity and the epochs it lives in.

The Inspector draws only the sections that concern the selected node. A
stratigraphic unit, an epoch, a document, a model and a property each show a
different set, in the order below.

The head of the node
--------------------

At the top: the node's type, its name, and for a node that has one its colour.
A model shows a readable name above its technical one. The description follows,
and under a text that the study can translate, the row of its languages. Then the
elements that the Extended Matrix datamodel declares for the type, such as the
genre of a unit or the definition of a concept, each read in the interface's
language. A survey or a document shows **Acquired** and **Valid until**: when the
representation was made, and until when it holds. A property shows its **Value**.

With **Show node UUIDs (inspector)** turned on in the Settings, the node's
identifier appears under its name.

Editing many nodes at once
--------------------------

A field that several selected nodes share can be applied to all of them: hold
:kbd:`⌘` on macOS, :kbd:`Alt` on Windows and Linux, while you confirm it. A line
under the field says how many selected nodes will receive the change and how many
are skipped because they lack the field. The Log records the change, and one undo
takes it back.

Sections of an epoch
--------------------

An epoch shows its place among the others (move it up or down), its **Temporal
bounds** (start and end), its **Temporal paradata**, its **Phases** with **Add
phase**, and **Phase bands**, which shows or hides the phases as bands of its
swimlane. A phase shows the epoch it belongs to, and can be moved, or deleted
after choosing where its units go.

Sections of a stratigraphic unit
--------------------------------

Epochs
   The epochs the unit lives in, each with the gestures to move the unit there,
   extend it there too, or take it away. The epochs of a unit are computed from
   its continuity: a real unit lives from its birth until a continuity closes it,
   and lives on, still existing, without one.

Continuity
   **End in…** and **Survives until…** close or extend the life of the unit in an
   epoch, with the type of end and the source that says so. The line underneath
   states the unit's continuity as it stands.

End of the unit
   For the node that marks the end of a unit: the unit it closes, the type of
   end, the epoch and the rule that places it, and its own dating.

Paradata group
   The group that gathers the unit's properties, with its number of members and a
   link that shows it in the drawing. **Compact the properties** gathers the
   unit's own properties, with their combiners and extractors, into its paradata
   group and folds it; **Dissolve the group** takes back what it did. Each is one
   step of undo.

Proxy
   The unit's proxy in the Space: its file, and the command to model it in
   Blender when EMStudio is linked live with EM Tools. Where the link is missing,
   the command says why and offers the way to the connection panel.

Open with…
   The tools that know this node: the recording sheet of StratiField (in a room),
   Blender with EM Tools, a Heriverse scene. A tool that cannot open the node here
   is shown with the reason.

Computed chronology (TPQ / TAQ)
   The unit's start and end as the s3Dgraphy library computes them through its
   relations, each with where it comes from: written on the node, the limit of an
   epoch, or a date on another unit.

Sections of a document, a resource and an acquisition lot
---------------------------------------------------------

A resource shows its files and where their bytes are, with the gestures to
check an address or replace a file (which makes a revision), and to put the
resource on the shelf. **Rights of this resource (DTC)** sets the licence and the
embargo of the bytes: while the embargo runs, the node serves the file only to
those who work on the study. **Rights of this lot (DTC)** says the same once for
every file of an acquisition lot; a file with rights of its own keeps them.
**Used by…** says where the resource is in use (the units and chapters that cite
it) and the steps of the transformation chain that made it or used it, the
question to ask before replacing a file; and
**Acquisition lot** lists the files that came in together.

Sections of an object in the Space
----------------------------------

A model, a tileset, a container or a proxy shows the sections of the Space:
**Kind** (RM, RMDoc or RMSF), **Container** (who published it, which state it
shows, its light version, what it holds), **Instances in the epochs**,
**Transform**, **In the Space** (what is drawn of it now: version, weight,
triangles), **Tileset** (the controls of its detail and memory), **Versions**,
**Alternative** and **Frame** (the coordinate system and shift of a tileset).

Own and inherited values
------------------------

Every node except an epoch shows **Own / inherited**: its start, end, author,
licence and embargo. Each value says whether it is the node's own or inherited,
and from which node. The own value is in plain ink; the inherited one is in
orange, with **from** and the node it comes from (a click goes there), and
**via** when it passes through a master, a document, a container or a member.
A value nobody gives reads **not given**.

An inherited value is changed where it is declared. **Make own…** copies it on
the node: from then on it is the node's own and no longer follows its source. It
is one step of undo. The rules of inheritance are those of the s3Dgraphy
library: the node, then its epoch, then its master, the document that publishes
it, its container, its members or its life, and finally the project.

A servile node (a paradata group, a property, an extractor, a combiner, a proxy,
an annotated region) has no epoch of its own: it follows the node it serves.

Georeferencing
--------------

Every object with a place in the Space — a model, a tileset, a proxy, a GIS
sheet, an extractor anchored in 3D — takes the georeference of its graph,
inherited like the author or the licence. Its row among the own and inherited
values says so, and its **Georeferencing** section says in which system it
stands.

**Make own…** gives the object a system of its own: another coordinate system,
another shift, or none (local). It starts from the graph's, and nothing moves
until a value changes. **Back to the graph's** removes it, and the object follows
every change of the graph again. A proxy and an anchor always follow their graph.
A GIS sheet stands in the system of its file, which is changed in its GIS panel.

The georeference of the graph itself is edited on the graph's node, under the
site position, or in the card opened with ``File ▸ Georeferencing…``.

The end of the panel
--------------------

Data
   The node's other fields, read only, with its technical details under a small
   heading of their own.

Last hand (editorial)
   When the node was created and last modified, and by whom: the ORCID iD of the
   editor, stamped automatically. It records the editorial hand, which is distinct
   from the interpretive author among the own and inherited values.

Study and cultural context
   On a node of the study's chain (the study, its place, its heritage, its twin,
   the project): the card that links them.

The graph
   On the graph's own node: its name, code, size, author, licence and embargo,
   then the site position and the georeference.

Connections
   The node's relations, grouped by type and direction. A click on the other end
   goes there; each relation can be deleted.

Relations with other graphs
   The relations that reach a node of another graph of the file.

At the bottom, the command that deletes the node (or the epoch, with its phases).

A selected connector, with no node, shows its type, its two ends and **Delete
connector**.
