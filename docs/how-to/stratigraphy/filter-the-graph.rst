.. _how-to-stratigraphy-filter-the-graph:

Filter the graph
================

*Show only the units that answer a question.*

A study holds far more than the stratigraphic sequence: properties, extractors,
documents, authors, models, the chain of the documentation. The filter of a
Graph window chooses which kinds of node and which kinds of relation it draws,
so that the drawing answers one question at a time: *what is the sequence?*,
*how are the units dated?*, *where does this property come from?*

The filter belongs to the window and to its mode: a Matrix and a Graph side by
side can show different things, and each keeps its choice on this computer, also
after EMStudio is closed. The study does not change.

Open the filter
---------------

#. Click the funnel at the top right of the canvas (**Filters — visible
   nodes/edges & display**).
#. The panel is titled with the mode it filters, for example **Detail level —
   Matrix view**. Press :kbd:`Esc` or **✕** to close it.

Start from a template
---------------------

The **Template** menu at the top of the panel sets the whole filter in one
choice:

**Full detail (all)**
   Every kind of node and relation.
**Harris Matrix**
   The real units, the special finds, the documentary units and the continuity
   nodes, with the relative chronology and the stratigraphic relations.
**EM compact**
   All the units, real and virtual, the special finds and the continuity nodes,
   with the same relations.
**EM complete**
   The same, with the paradata: documents, extractors, combiners, properties,
   groups and the relations between them.
**Stratigraphy only**
   The units, the special finds and the continuity nodes with their physical
   relations alone: cuts, fills, overlies, abuts, is bonded to, is physically
   equal to.
**Relative chronology only**
   The same units with the relations of before and after, of contemporaneity and
   of change, and no physical relation.

When you change a single kind afterwards, the menu shows **Custom…**.

Choose the kinds one by one
---------------------------

#. Under **Nodes** and **Edges** the panel lists families, such as **Real
   units**, **Virtual and documentary units**, **Special finds**,
   **Properties**, **Documents (sources)**, **Relative chronology**,
   **Stratigraphic relations** and **Paradata · properties**. Beside each family,
   two numbers count the elements drawn and the elements in the graph.
#. Click the name of a family to open it: its types appear with the labels of the
   datamodel, each with its own box and its own count. A type the graph does not
   contain is dimmed.
#. Tick or untick a family to show or hide all of its types; **all** and
   **none** beside it do the same. Hold the pointer on a name to read its
   definition.
#. Type in **Search types…** to find a family or a type by its label or by its
   technical name, for example ``cuts`` or ``epoch``.

Some rows have no box to untick: the epochs, the boxes of the groups and the
memberships carry the drawing itself, and their tooltip says **Structure of the
drawing (containers, lanes): always drawn**. Types that a file carries and the
datamodel does not know are gathered under **Types not in the datamodel**.

The tooltip of **Relative chronology** also says where its relations come from,
as far as the file says it: derived from the stratigraphic relations, written by
a person, imported from a GraphML, or with no mark.

**Reset this view** returns the panel to the default of the mode. Under
**Display**, **Monochrome (B/W) — black borders** draws the Matrix without the
colours of the types.

Hidden nodes leave their places empty: the filter shows and hides, and the
Matrix does not rearrange itself. The **Layout** icon packs the drawing again (see
:doc:`lay-out-the-matrix`). A node you add with a type the filter hides makes
that type visible again, and the message says **Filter: showing** followed by
the type.

Narrow down further
-------------------

- To read one activity or one paradata group on its own, double-click it: the
  canvas shows only its members (see :doc:`groups-and-folding`).
- To find a unit by its name, press :kbd:`/` and type, for example ``SU004``.
- To select units by their characteristics, open a **Tabular** window on the
  **Units** sheet and write in the field of its bar: ``type:`` followed by a
  type, ``epoch:`` followed by part of the name of an epoch (an epoch includes its
  phases), or click the facets **Type**, **Epoch** and **State** (**with
  paradata**, **with warnings**, **AI nomenclature**). The rows that remain are
  the units that answer; click one to select its unit and show it in the
  Matrix.

What you get
------------

A Matrix that draws only what the current question needs, remembered for each
window and each mode, with the study untouched.

See also
--------

- :doc:`/reference/em-legend` for the shapes and lines of the families.
- :doc:`/reference/windows` for the modes of the Graph window and the Tabular.
- :doc:`edit-many-units` to act on the units you found.
