.. _how-to-stratigraphy-groups-and-folding:

Group and fold units
====================

*Gather units into groups and fold them to read the matrix.*

A group gathers units that belong together: the units of one activity, the
properties and sources of one unit, the units of one place or of one time branch.
In the Matrix an open group is a box drawn around its members; a folded group is
a single closed box that stands for all of them. Folding changes what you see,
never the study: the members and their relations stay as they are. In Templu Mare
the activities **VAct.01 Foundations of the temple** to **VAct.06 Courtyard**
are groups of this kind.

Gather units into a group
-------------------------

#. Select the units: click the first, then :kbd:`⇧`-click or :kbd:`⌘`-click
   (:kbd:`Ctrl`-click on Windows and Linux) the others, or drag a rectangle on the
   empty canvas around them.
#. Right-click one of the selected units. The menu offers the groups that the
   datamodel allows for every unit of the selection, for example **Group into
   Activity group**. When no kind of group suits all of them, the menu says **No
   legal group for this selection**.
#. Choose the group. EMStudio draws the box around the units and selects the new
   group: give it a name and a description in the **Inspector**.

A group can also be added empty, from the **Groups** family of the **Add** menu
(:kbd:`⇧A`): **Activity Node Group**, **Paradata Node Group**, **Time Branch
Node Group** or **Location Node Group**. A node added with a right click on the
body of an open group is born inside it.

Put a unit into a group, or take it out
---------------------------------------

#. Drag the unit over the box of the group.
#. Hold :kbd:`⇧` while you release it. The box lights up during the drag. A
   message names the unit, the group it was in and the group it is in now, each
   with its relation, for example ``is_in_activity VAct.04 Temple``.

Without :kbd:`⇧`, a drop over a box only changes the place of the unit. With
:kbd:`⇧` held while you release it outside its own box, the unit leaves the
group, and the message ends with **no group**. Each of these is one step of
undo.

Right-click a group and choose **Select the members** to select everything it
holds.

Fold and unfold
---------------

#. At the top left of an open group's box there is a small square with a minus.
   Click it: the group folds into one closed box. A badge counts the members it
   hides, and the relations that reached them now reach the box.
#. Click the square again, now with a plus, to unfold the group in place.

A paradata group folds onto its unit and shows there as a chip marked **PD**,
with the number of properties. Click the chip to see the paradata on their own;
:kbd:`⇧`-click it to open the group in place, and :kbd:`⇧`-click again to close
it. A paradata group that is not linked to any node cannot be folded, and a
message says so.

Look inside a group
-------------------

#. Double-click a group (**Isolated canvas with only the group members
   (double-click)**). The canvas shows only its members, and a path at the top of
   the window names where you are, starting from **Canvas**.
#. Work inside as on the whole canvas: a node added here becomes a member of the
   group.
#. Press :kbd:`Esc`, or click **Canvas** in the path, to go back. The **←**
   button on the window's bar returns to the view before the last jump.

Keep the properties of a unit together
--------------------------------------

A unit whose properties hang from it directly is drawn as if they were in a
group, marked *implicit*. Right-click the unit and choose **Compact the
properties** to gather its properties, with their extractors and combiners, into
its paradata group, made when missing and folded. **Dissolve the group** takes
back what **Compact the properties** did. The icon beside **Layout** on the
window's bar does the same for every unit of the graph (**Compact the properties
(whole graph)**).

Move a group
------------

Drag a group by its box: its members move with it, and the group stays where you
left it. The layout arranges the rest around it, and the tooltip of the box says
**Fixed where you left it: the layout arranges the rest around it. «Reorder the
group» frees it.** A group dragged into the band of another epoch keeps its
epoch: a dashed amber outline marks that its place no longer says its epoch.

To give the group back to the layout, right-click it and choose **Reorder the
group (frees it: the layout places it)**. **Reorder everything** frees every
group fixed in this way (see :doc:`lay-out-the-matrix`).

What you get
------------

A Matrix that reads by activities and by paradata groups, with the groups you are
not reading folded into single boxes.

See also
--------

- :doc:`add-and-connect-units` for the **Add** menu.
- :doc:`lay-out-the-matrix` for what the layout does with groups.
- :doc:`filter-the-graph` to hide whole families of nodes instead.
- :doc:`/reference/em-legend` for how each kind of group is drawn.
