.. _how-to-rooms-create-a-room:

Create a room
=============

*Create a room on a StratiGraph node.*

A room is a place on a node where a study lives and where the people of a
project work on it together. Whoever creates a room is its owner. A room with
one member is not a lesser room: it is your own table on the node, and you can
invite others to it later.

This page creates an **empty** room. To put the study you have open into a new
room, with its files, follow :doc:`bring-a-file-into-a-room` instead: it creates
the room in the same gesture.

Before you start
----------------

Creating a room writes its owner on the node, so the node has to know who you
are. Three steps of the chip's menu at the top right must be done: an
**Author**, a **Node** that answers, and **Sign in** on it (see
:doc:`sign-in`). If one is missing when you start, EMStudio opens that menu at
the missing step with a sentence such as «To create a room you need to be
signed in on the node: do it here and it goes on by itself», and the creation
resumes once the step is done.

Create the room
---------------

#. Choose ``File ▸ Create a room…``. The same command is **+ New room** in the
   section **My space** of the chip's menu, under **Rooms on this node**.
#. The dialog **Create a room** asks for a name, for example «Templu Mare
   2026». EMStudio derives the room's identifier from the name, as the node's
   own pages do: lower-case
   letters and digits, with hyphens in place of spaces and punctuation
   (``templu-mare-2026``). A name made only of punctuation gives no identifier,
   and the dialog waits for another one.
#. Press **Create** (or :kbd:`Enter`). **Cancel** (or :kbd:`Esc`) closes the
   dialog without creating anything.

EMStudio asks the node that you are signed in on to create the room, and enters
it at once. On the web the node is the one that serves the page; on the desktop
it is the node you chose in the chip's menu.

If the node refuses, a message gives its answer with its reason, for example
when a room with the same identifier already exists. If the node does not
answer, the message names it.

What you get
------------

- An empty room on the node, with you as its **owner**.
- The status bar reads **Room**, followed by the name of the room and of the
  node, and the section **Where you work** of the chip's menu shows the room
  with its commands.
- The room appears under **Your rooms** in the section **My space**, and in
  ``File ▸ Open Recent``.

Next, invite the people of the project, as described in
:doc:`enter-and-share-a-room`.

See also
--------

- :doc:`bring-a-file-into-a-room`, to create a room that holds your study.
- :doc:`sign-in`, for the author, the node and the sign-in.
- :doc:`/explanation/open-enter-create`, on the three verbs: open a file, enter
  a room, create a room.
