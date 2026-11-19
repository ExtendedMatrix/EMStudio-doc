.. _how-to-stratigraphy-lay-out-the-matrix:

Lay out the matrix
==================

*Let the layout engine arrange the matrix by epochs, and keep your own order.*

The Matrix draws each epoch as a horizontal band, the most recent at the top, and
places the units inside their band so that a relation runs from the later unit
down to the earlier one. The arrangement is stored in the study, with the places
you give the units by hand. Nothing moves a node by itself: the layout runs when
you ask for it, and every layout is one step of ``Edit ▸ Undo``.

When you open a study, EMStudio draws it from the arrangement stored in it and
writes nothing. A study read from a GraphML, or a study whose graph carries no
arrangement yet, is laid out once on opening.

Arrange the whole matrix
------------------------

#. Click the **Layout** icon on the bar of the Graph window (its tooltip says
   **Arranges this view again; one undo takes it back.**). The same command is
   ``⋯ ▸ Layout ▸ Layout`` in the window's menu and **Reorder everything** at the
   foot of the menu that a right click on the empty canvas opens.
#. The message **Layout from the hand's arrangement** confirms it. The engine
   starts from the order the units already have, yours included, and arranges
   them again by epochs.

Hold :kbd:`⌥` (:kbd:`Alt`) while you click the icon for a fresh arrangement that
leaves out the places given by hand: the message is **New layout**.

The layout always arranges the whole graph, also when a filter hides part of it
(see :doc:`filter-the-graph`), so the study you reopen shows what you saw after
the layout. A filter alone hides and shows nodes without moving the others: a
hidden node leaves its place empty until the next layout.

Reduce the crossings
--------------------

#. Choose ``⋯ ▸ Layout ▸ Layout reducing the crossings`` in the window's menu, or
   the same entry from a right click on the empty canvas.
#. The engine reorders the units within their bands to cross fewer lines. The
   message gives the count before and after, for example **Laid out reducing the
   crossings: 146 → 86 — one undo takes it back**. When it finds no better order,
   it says **No crossing fewer** and lays out as **Layout** does.

Keep your own order
-------------------

- *Drag a unit* where you want it inside its band. At the next layout it keeps
  its place beside the nearest unit. This is the setting **«Layout» respects
  where I drop the nodes**, in ``Settings… ▸ General ▸ Matrix · layout``, on by
  default; turned off, a dropped unit only shifts its stored place by the same
  amount.
- *Lock a unit*: right-click it and choose **Lock position (Layout keeps it
  here)**. The layout leaves it where it is and arranges the rest around it.
  **Unlock position** gives it back.
- *Reorder one unit*: **Reorder this node** forgets the place you gave it, and
  the layout puts it back, leaving every other unit where it is. A locked unit
  keeps its lock.
- *Reorder one band*: right-click the name of an epoch at the left edge of the
  Matrix and choose **Reorder the lane**.
- **Groups** stay where you drag them, and **Reorder the group** frees one; see
  :doc:`groups-and-folding`. **Reorder everything** frees every group you
  placed, and keeps the locks of the units.

Change the epoch of a unit
--------------------------

Drag a unit into another band and release it: the unit now belongs to that
epoch, and the Matrix places it in the new band without moving the others. Press
:kbd:`M` with units selected for **Move to epoch…**, or :kbd:`⌥M` (:kbd:`Alt+M`)
for **Extend to epoch…**, to do the same for a whole selection (see
:doc:`edit-many-units`).

A node with no epoch of its own is drawn in the band of the nodes its relations
come from, inside a dotted grey frame. Its tooltip says **No epoch of its own:
drawn in the lane of the nodes its edges come from (dotted frame). Give it an
epoch to place it in time.**

In Graph mode
-------------

The **Graph** mode of the same window draws the nodes as discs, with no bands.
``⋯ ▸ Layout`` offers three arrangements: **Layered**, **Radial** and **Force**.
A disc you drag stays where you leave it; these places are kept on this
computer, for each graph, and not in the study. The **Layout** icon forgets them
and arranges the graph again.

What you get
------------

A Matrix arranged by epochs, with the order you gave by hand kept, and saved with
the study.

See also
--------

- :doc:`groups-and-folding` for fixed groups.
- :doc:`check-the-chronology` for the order of the epochs themselves.
- :doc:`/reference/windows` for the Graph window and its modes.
- :doc:`/reference/settings` for the **Matrix · layout** setting.
