.. _how-to-rooms-enter-and-share-a-room:

Enter a room and share it
=========================

*Enter a room of your node, work in it with the others, and invite the people of the project.*

A room keeps its study on the node. Entering it does not download a file: you
attach to the room, receive its graph, and from then on what you edit is written
there, for everyone in the room, under your name. The verbs are explained in
:doc:`/explanation/open-enter-create`.

Before you start
----------------

Sign in to your node, as described in :doc:`sign-in`. The rooms of a node are
listed only to someone who is signed in on it.

Enter a room
------------

#. Click the chip at the top right of the window to open its menu, and go to
   the section **My space**. Under **Rooms on this node**, the node lists
   **Your rooms** and **Shared with you**; each shared room shows the role you
   have in it. With more than eight rooms, a field **Find a room** filters the
   list by name.
#. Click the name of the room. EMStudio enters it and opens its graph.

The status bar now reads **Room**, followed by the name of the room and of the
node. The section **Where you work** of the chip's menu shows the room with your
role, and the commands described below.

There are other ways into a room:

- ``File ▸ Open Recent`` lists the rooms you entered, beside the files; a room
  reopens on the desktop and on the web alike.
- Under **Mode**, in the section **Where you work**, **In a room** enters again
  the last room you were in on the active node.
- A link from the node's own pages, or from EM Tools, opens EMStudio on that
  room. If you are not signed in on that node, EMStudio asks
  you to sign in first and then enters (see :doc:`open-in-the-other-editor`).

Work in the room
----------------

Your **role** decides what you can do. A **viewer** reads and is seen by the
others: the room refuses the edits, and EMStudio says **read-only**. An
**editor** writes. An **admin** also manages the people of the room, and the
**owner** is the one who created it.

What you change reaches everyone in the room and carries your name. The others
are shown as **presence**: in the section **Where you work**, the line **◍**
followed by the number of people **in the room** lists, when you hover it, who
is there and how many nodes each one has selected; the nodes they select are
marked on your canvas. Another person's selection never moves yours.

When two people change the same field, the room keeps one value. If it keeps the
other person's, EMStudio puts the room's value back in your copy and says whose
change was kept and when.

If the network drops, you stay in the room: the status bar reads **no network**
with the number of changes waiting, and they are sent when the room can be
reached again.

Invite people
-------------

The owner and the admins of a room manage who is in it.

#. In the section **Where you work** of the chip's menu, under **Room**, press
   **Share with…** (or **Room settings…**). The room's panel opens inside the
   menu, with the room's name, **yours** or the name of its owner, and **Your
   role**.
#. Under **Members**, the people of the room are listed with their ORCID iD and
   their role; **×** removes a person from the room.
#. Under **Invite by ORCID**, type the person's ORCID iD, choose the role
   (**viewer**, **editor** or **admin**) and press **Add**. The role is written
   at once.
#. Or, under **Invite with a link**, choose the role (**viewer** or **editor**)
   and press **New link**. Press **Copy** and send the link: the node keeps only
   a fingerprint of it and does not show it again.
#. **← Back** returns to the sections of the menu.

**Share this room…**, under **Room**, opens the node's own page for the room in
the browser (**Open on the node** opens the same page). There the people, the
teams, the invitations and the transfer of the room to another owner are
together in one place.

A member who is not an admin sees, in **Room settings…**, the owner of the room
and their own role.

Leave the room
--------------

**Leave the room**, under **Room**, closes the room's graph in this window. The
room stays on the node, and you can enter it again from **My space** or from
``File ▸ Open Recent``.

To keep a copy of the room's study on your disk, choose ``File ▸ Save As…``
while you are in the room (see :doc:`/how-to/files/open-save-recent`). The copy
is a file of yours; the room goes on as it is.

Delete a room
^^^^^^^^^^^^^

The owner of a room, and the operator of the node, find **Delete room…** at the
foot of the room's panel. The dialog **Delete the room**, followed by the
room's name, lists what goes for
good (the room and its document with its history, its members and their roles,
its invitations, the groups given access to it, the uploads still pending) and
what stays: the files in the node's store. Type the room's identifier to confirm
and press **Delete the room**. If you are in that room, EMStudio leaves it
first. Files that no other room cites remain in the store, where the node's
operator can reuse them or delete them.

What you get
------------

You work on the room's copy of the study together with the others, each change
signed by its author, and you decide who else comes in and with which role.

See also
--------

- :doc:`create-a-room` and :doc:`bring-a-file-into-a-room`, to make a room.
- :doc:`open-in-the-other-editor`, to open the same room elsewhere.
- :doc:`/reference/menus`, for the panel of the status bar.
- :doc:`/explanation/open-enter-create`, on the three verbs.
- The `REST door of a room <https://docs.stratigraph-eccch.eu/projects/node/en/latest/REST-API.html>`__, in the StratiGraph Server manual, for
  whoever connects another tool to a room.
