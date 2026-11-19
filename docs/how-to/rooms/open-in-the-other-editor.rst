.. _how-to-rooms-open-in-the-other-editor:

Open the room in the other editor
=================================

*Open the same room in EMStudio on the desktop or on the web, or come to it from EM Tools for Blender.*

The graph of a room is the room's, so moving to another editor transfers
nothing: the other editor enters the same room and reads the same graph. The
link that EMStudio asks of the node carries no password or token; the other
editor signs itself in.

Before you start
----------------

Be in the room (see :doc:`enter-and-share-a-room`). The command appears only
while you are in a room.

Switch between the desktop and the web
--------------------------------------

#. Open the chip's menu at the top right, or click the label at the left of the
   status bar (:kbd:`⇧⌘L` on the Mac, :kbd:`Ctrl+Shift+L` elsewhere).
#. In the section **Where you work**, under **Room**, press **Open this room
   in…**. EMStudio asks the node how to open the room in the other editor.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         From EMStudio on the desktop, the other editor is the web: the room
         opens in the browser, in EMStudio for the web, the build that the node
         serves. If the node serves no web build of EMStudio, a message says so
         and nothing opens.

      .. tab-item:: Web
         :sync: web

         From EMStudio in the browser, the other editor is the desktop
         application: the browser asks the system to open it on the room. If no
         application on this computer answers, the node's page for the room
         opens in a new tab and says what to install, and EMStudio says that
         nothing opened.

#. In the other editor, sign in to the node if it asks you to (see
   :doc:`sign-in`). It then enters the room.

Both editors can stay in the room at the same time: each is one more presence
in the room, and what you change in one reaches the other as it reaches every
member.

Come to the room from EM Tools
------------------------------

EM Tools for Blender works in rooms too. When Blender is in a room, its command
**Open in EMStudio** opens EMStudio on the same room, with the unit you chose.

- If EMStudio is already in that room, it stays there and brings that unit
  forward: nothing is signed in again.
- If EMStudio is signed in on the node but in another room, or in none, it
  enters the room with the access it already has.
- Otherwise EMStudio asks you to sign in to the node first: on the desktop the
  sign-in opens in the system's browser, on the web in the same page. Then it
  enters the room.

EMStudio has no command that opens the room in Blender: EM Tools enters the
room from its own panel, as its manual describes.

What you get
------------

The same room open in the other editor, with the same graph, without a copy and
without a second login when a session is already there.

See also
--------

- :doc:`enter-and-share-a-room`, on presence and roles in a room.
- :doc:`/reference/desktop-and-web`, for what differs between the two editors.
- :doc:`/explanation/place-in-the-framework`, on EMStudio and EM Tools.
