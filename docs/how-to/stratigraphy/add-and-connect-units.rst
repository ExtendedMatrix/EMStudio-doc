.. _how-to-stratigraphy-add-and-connect-units:

Add and connect units
=====================

*Add every kind of node the Matrix allows, connect it to what is already there,
and remove what is wrong.*

:doc:`/tutorial/first-study` adds one unit with :kbd:`⇧A` and draws one relation
with the handle. This page goes through the whole of the **Add** menu, the
relations the Extended Matrix allows or refuses, the connections already drawn,
and deletion. The examples use Templu Mare, in the **Stratigraphy** workspace.

Before you start
----------------

Open a study and keep a **Graph** window in **Matrix** mode on screen. Every
gesture below is one step of ``Edit ▸ Undo`` (:kbd:`⌘Z` on the Mac,
:kbd:`Ctrl+Z` on Windows and Linux).

Open the Add menu
-----------------

The **Add** menu is one menu with four ways in:

- :kbd:`⇧A` (:kbd:`Shift+A`) with the pointer on the canvas: the menu opens
  where the pointer is;
- a right click on the empty canvas, or on the body of an open group;
- **Add ▾** in the header of the Matrix: the new node is born in the middle of
  the view;
- a long press, on a touch screen.

The line under the title says where the new node will be born, for example
**Context: Matrix** followed by the name of the epoch under the pointer. Type in
the search field (**Search a type… (e.g. rsf, extractor)**) to narrow the list,
move with the arrow keys and press :kbd:`Enter` to choose; :kbd:`Esc` closes the
menu. Holding the pointer on an entry shows the definition the datamodel gives of
that type.

Add a unit on its own
---------------------

#. Click the empty canvas, so that nothing is selected.
#. Place the pointer in the band of the epoch the unit belongs to, for example
   **II A.D.**, and press :kbd:`⇧A`.
#. Choose a type from one of the families of the menu:

   **Stratigraphy**
      **US (or SU)**, **USV/n**, **USV/s**, **USD**, **TSU**, **US-** (the
      negative unit: a cut, an erosion surface), **USNt** (the neutral void: a
      window, a door, a niche), **stratigraphic event node** and **continuity
      node**.
   **Special finds**
      **Special Find**, **Virtual Special Find** and **Repositioned Special
      Find**.
   **Series**
      **US series**, **USVn series**, **USVs series**, **USD series** and **VSF
      series**.
   **Groups**
      **Activity Node Group**, **Paradata Node Group**, **Time Branch Node
      Group** and **Location Node Group** (see
      :doc:`groups-and-folding`).
   **Context**
      **Author (human)**, **AI Author**, **Link**, **License** and **Embargo**.

The unit appears under the pointer, in that epoch, with a name EMStudio gives it.
Write its name and its description
in the **Inspector** and press :kbd:`Enter`. Types you chose recently are listed
at the top, under **Recently used**.

The menu also shows families that belong to other projections of the graph: in
the Matrix, **HDT-O** and **DTC** are marked **not in this context**. They are
offered in **Graph** mode and in **DTC** mode. **New epoch…**, at the foot of the
menu, adds a band to the Matrix (see :doc:`check-the-chronology`).

Add a node linked to a selected one
-----------------------------------

#. Click a unit, for example **SU004**.
#. Press :kbd:`⇧A` with the pointer where the new node should go.
#. Under **Linked to SU004** the menu offers what can be born already connected
   to it. Each entry reads as a phrase: **US (or SU) later than SU004** and **US
   (or SU) earlier than SU004** for the next unit of the sequence, then the
   paradata that the datamodel lets hang from a unit, such as a **Property**.
   The phrase says the relation, which is one of time; the Matrix draws the
   later unit above the earlier one, as Harris does, so the new unit appears
   above or below SU004.
#. **Context of SU004** gathers the author, the licence, the embargo and the
   link of the unit in one row. **Link to an existing one…** connects SU004 to a
   node that is already in the graph (see below).

In the Matrix the **Paradata** family (**Property**, **Extractor**,
**Combiner**, **Document**) is added only linked to a unit: with nothing
selected the menu says **Select a unit to add paradata in Matrix.** A right click
on a node offers the same linked entries on their own, as **Add linked ▸**.

Connect two nodes with the handle
---------------------------------

#. Hold the pointer on a node: a small **handle** appears on it.
#. Drag the handle upwards onto a node that lies above, or downwards onto a node
   that lies below, and release.

What happens on release depends on what the datamodel allows between the two
types, in that direction:

- when one relation is allowed, it is drawn at once, and a message names it, for
  example **SU005 — Is after → SU004**;
- when several are allowed, a small menu titled with the two names (**SU005 →
  SU004**) lists them, each with its line style: **Is after**, **Cuts**,
  **Fills**, **Overlies**, **Abuts** and **Changed from** between two units.
  Choose one, or **Cancel**;
- when none is allowed, nothing is drawn and the message says why, for example
  **⊘ SU010 cannot sit above SU004: no EM relation in that direction**;
- when the relation already exists, the message says so and nothing is added.

The relations that have no direction, **Bonded to**, **Equals** and **Has same
time**, join two units side by side. Drag the handle sideways, keeping it level,
onto the other unit: the menu then lists every relation the datamodel allows
between the two, these included.

A property released on a document is joined to it through a new extractor, as
the paradata chain of the Extended Matrix requires.

Release the handle on the empty canvas to open a menu titled **↑ Above SU004** or
**↓ Below SU004**. Its **New** part creates a node already connected in that
direction; its **Link to an existing node** part lists the nodes of the graph
that can sit there, grouped as **Documents**, **Units**, **Properties**,
**Extractors** and **Combiners**. The first six of each group are shown; type in
the search field (**Search a node or type a kind…**) to reach the others.

Read and change a connection
----------------------------

#. Click a line between two nodes. The **Inspector** shows the **Connector**: the
   name of the relation, **From** and **To** with the two nodes (a click on one
   goes to it), and **Delete connector**.
#. Select a node instead, and the **Connections** section of the Inspector lists
   all of its relations, grouped by type, with an arrow for the direction.

A relation is changed by deleting it and drawing the right one with the handle.
The relations that a GraphML file brought in as generic connections are listed
among the warnings of the study, in the **Warnings** sheet of the **Tabular**
window: there **pick the relation…** offers the relations the datamodel allows
between the two nodes, **as drawn** or **the other way round**, and writes the
one you choose in place of the generic connection.

Delete
------

- Select one or more nodes and press :kbd:`⌫` or :kbd:`Del` (:kbd:`Backspace`
  or :kbd:`Del` on Windows and Linux), or choose **Delete** from the menu of the
  right click. The message **Deleted SU010** carries an **Undo** button.
- Select a connector and press the same key, or press **Delete connector** in the
  Inspector. In the **Connections** section of a node, the **×** beside a
  relation (**Delete this connection**) removes it.
- An epoch and a phase are removed from the Inspector, with **Delete epoch** and
  **Delete phase**, or from the Chronology window (see
  :doc:`check-the-chronology`).

What you get
------------

Units, finds, series, paradata and context nodes placed in their epochs, each
connected by a relation the Extended Matrix allows, and the wrong ones removed.

See also
--------

- :doc:`/reference/em-legend` for the shapes of the units and the lines of the
  relations.
- :doc:`/reference/inspector` for the fields of each node.
- :doc:`/reference/shortcuts` for every key of the canvas.
- :doc:`groups-and-folding` to gather the units into groups.
