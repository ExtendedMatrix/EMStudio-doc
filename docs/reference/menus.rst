.. _reference-menus:

Menus
=====

*Every command of the menus, where it appears and what it does.*

The menu bar at the top of the window holds **File**, **Edit**, **Tools** and
**Help**: the commands that belong to the whole study rather than to one window.
The same menus appear on the desktop and on the web, because EMStudio draws them
from one table of commands. On the macOS desktop the system's menu bar carries
them too, together with the **EMStudio** and **Window** menus of the Mac; on
Windows and Linux the menu bar inside the window is the only one.

The commands of a single window are elsewhere: in the window's own header, in the
menu that opens with a right click on the window, and in the menu
*This window's tools* at the right of the header. :doc:`windows` describes them
with each type of window.

How to read the tables
----------------------

A command that exists on some platforms only is drawn only there. In the tables
below, the **Where** column says where each command appears: *everywhere*, a list
of platforms, *desktop only*, or *macOS menu bar* for the commands that the Mac
also shows in the system's menu bar. :doc:`desktop-and-web` collects every
difference between the desktop and the web in one table.

The keys are given as the Mac shows them (⌘) and as Windows and Linux show them
(Ctrl). Some keys work in the page and are not written beside a menu command:
``Edit ▸ Undo`` and ``Edit ▸ Redo`` answer to :kbd:`⌘Z` and :kbd:`⇧⌘Z`
(:kbd:`Ctrl+Z`, :kbd:`Ctrl+Shift+Z`), as :doc:`shortcuts` lists. On the Mac,
the **Edit** menu of the system's menu bar holds the usual commands of text
editing (Undo, Redo, Cut, Copy, Paste, Select All), which act on the field being
typed in.

The **What it does** column repeats the description that EMStudio shows when the
pointer rests on the command. Three commands of **Help** have none, because their
names say it:

- **Workspaces…** opens the table of the six workspaces, with the question each
  answers and its windows (see :doc:`workspaces`);
- **Shortcuts** opens the list of every key and gesture, with a search field
  (see :doc:`shortcuts`);
- **EM legend** opens the legend of the shapes and lines of the Extended Matrix
  (see :doc:`em-legend`).

Where you work: the mode, the node, the room
--------------------------------------------

The way you are working (a file of this computer, a live link with another
application, a room of a node) is not a menu of the bar. It has one place, the
section **Where you work** of the chip's menu, the chip at the top right of the
window: click the label at the left of the status bar, or press :kbd:`⇧⌘L`
(:kbd:`Ctrl+Shift+L`), and the menu opens at that section. Under **Mode** it
offers three choices,
which correspond to the three verbs of this manual (see
:doc:`/explanation/open-enter-create`):

- **On this computer**: a file you *open* from the disk;
- **With an app**: the live link with EM Tools in Blender (or another application
  that synchronises with EMStudio), the link the older versions called
  *Sidecar*;
- **In a room**: a room you *enter* on a StratiGraph node.

Under **Synchronised apps** the section lists the applications linked to
EMStudio, with **Find** to look for EM Tools on this computer. Inside a room,
under **Room**, it names the room and offers **Room settings…**, **Open on the
node**, **Leave the room**, **Resources of the room…** and **Open this room
in…**, which opens the same room in the other editor. The node, your account on
it and your rooms are in the other sections of the same menu, **Node and
account** and **My space** (see :doc:`/how-to/rooms/sign-in`).

The table at the end of this page, **Mode**, lists the buttons that the menu
presses for these choices, with the names they carry in the code of the
application (**Standalone**, **Sidecar (sync)**, **Join Room**). The menu shows
the three choices above in their place.

.. include:: _generated/menus.rst
