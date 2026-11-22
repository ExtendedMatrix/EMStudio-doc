.. _reference-menus:

Menus
=====

*Every command of the menus, where it appears and what it does.*

The menu bar at the top of the window holds **File**, **Edit**, **Window** and
**Help**: the commands that belong to the whole study rather than to one window.
The same menus appear on the desktop and on the web, because EMStudio draws them
from one table of commands. On the macOS desktop the system's menu bar carries
them too, together with the **EMStudio** menu of the Mac; its **Window** menu
adds the Mac's own Minimize, Zoom and Enter Full Screen. On Windows and Linux
the menu bar inside the window is the only one.

There is no **Tools** menu any more. Each of its commands lives where it
serves: in the header of the window it works on, in ``File ▸ Bring in…``, in
``Edit ▸ Clean up``, in the Settings, in **Window**. The table
:ref:`menus-where-tools-went` says where each one went, and the command search
(:kbd:`F3`) finds every command by its name.

.. grid:: 2 2 4 4
   :gutter: 2

   .. grid-item::

      .. image:: /_static/screens/menus/file.png
         :alt: The File menu open.

   .. grid-item::

      .. image:: /_static/screens/menus/edit.png
         :alt: The Edit menu open.

   .. grid-item::

      .. image:: /_static/screens/menus/window.png
         :alt: The Window menu open: Workspaces, Scripting workspace, Python console, Detach the active window, Bring back the detached windows, Maximise the area, Area headers.

   .. grid-item::

      .. image:: /_static/screens/menus/help.png
         :alt: The Help menu open.

The commands of a single window are elsewhere: in the window's own header, in the
menu that opens with a right click on the window, and in the menu
*This window's tools* at the right of the header. :doc:`windows` describes them
with each type of window.

.. _menus-command-search:

Find a command (F3)
-------------------

``Edit ▸ Search commands…`` opens the command search: one field, and under it
the commands that answer what you type. Press :kbd:`F3`, or :kbd:`⌘K`
(:kbd:`Ctrl+K` on Windows and Linux), from anywhere in the window.

.. image:: /_static/screens/menus/command-search.png
   :alt: The command search open, «chronology» typed in its field: Check the chronology… first, with where it lives, the Matrix header and the ▲ of the status bar.

- Type a part of the name. The search knows every command by its English name
  and by its Italian name, whatever the language of the interface, and by a few
  other words: *tools*, *strumenti*, *cronologia*, *colours*, *console*…
- Each result says where the command lives now (a menu, the header of a window,
  a page of the Settings) and its keys, if it has any.
- :kbd:`↑` and :kbd:`↓` choose a result, :kbd:`Enter` runs it, :kbd:`Esc`
  closes the search. A second :kbd:`F3` closes it too.
- A command that cannot run now (it needs a document, a selection, or a window
  of its kind) says so instead of running.
- The commands of the plugins installed on this computer come in by themselves,
  with the name of their extension.

``Help ▸ Shortcuts`` lists the search with the other keys (:kbd:`F3` ·
:kbd:`⌘K`).

.. _menus-where-tools-went:

Where the commands of Tools went
--------------------------------

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - It was
     - It is now
   * - ``Tools ▸ Add node…``
     - **Add ▾** in the header of the **Matrix** (the same menu as :kbd:`⇧A`,
       which still works).
   * - ``Tools ▸ Check the chronology…``
     - **Chronology** in the header of the **Matrix** (it shows **▲ n** when the
       chronology has warnings), and the ▲ of the status bar: its pill counts
       the warnings of the chronology apart (**▲ n chronology**), and one click
       opens the check.
   * - ``Tools ▸ StratiMiner``
     - ``File ▸ Bring in…``, its fourth choice: **A folder of unstructured
       sources, with StratiMiner…**
   * - ``Tools ▸ Read as DosCo…``
     - ``File ▸ Bring in…``, the choice **A folder read as DosCo…**, and the
       button of the empty **Shelf**.
   * - ``Tools ▸ Normalise spellings…``
     - ``Edit ▸ Clean up ▸ Normalise spellings…``, beside **Sort lanes by
       date**.
   * - ``Tools ▸ Colours…``
     - ``Settings… ▸ Colours`` (it says which Space, and opens its window), and
       the **Colours ▾** of the Space, as before.
   * - ``Tools ▸ Vocabularies…``
     - ``Settings… ▸ Vocabularies``, and **Edit vocabulary…** beside a value
       term in the Inspector.
   * - ``Tools ▸ Extensions…``
     - ``Settings… ▸ Extensions``, as before.
   * - ``Tools ▸ Plugins``
     - ``Settings… ▸ Extensions``, the section **Commands of the plugins** under
       the extensions; the command search finds the commands too.
   * - ``Tools ▸ Georeferencing…``
     - ``File ▸ Georeferencing…`` (next to ``Room ▸``), and the **Visibility ▾**
       of the Space, as before.
   * - ``Tools ▸ Python console… · beta``
     - ``Window ▸ Python console… · beta``.

The command search calls the Settings *Preferences* when it says where a
command lives: ``Preferences ▸ Colours`` is the page **Colours** of
**Settings…**.

The Window menu
---------------

**Window** holds what arranges the window rather than the study:

- **Workspaces ▸** lists the workspaces of the bar, the active one marked; a
  click brings one to the front.
- **Scripting workspace** brings the workspace of the Python console and the
  Script Editor.
- **Python console… · beta** opens the console (see
  :doc:`/how-to/extensions/python-console`).
- **Detach the active window** puts the active window in a window of the system
  of its own, for another screen; **Bring back the detached windows** puts them
  all back.
- **Maximise the area** spreads the active area over the whole workspace, and
  back (:kbd:`⌃Space`).
- **Area headers** shows or hides the headers of the areas, for this session.

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

- **Workspaces…** opens the table of the seven workspaces, with the question each
  answers and its windows (see :doc:`workspaces`);
- **Shortcuts** opens the list of every key and gesture, with a search field
  (see :doc:`shortcuts`);
- **EM legend** opens the legend of the shapes and lines of the Extended Matrix
  (see :doc:`em-legend`).

Where you work: the mode, the node, the room
--------------------------------------------

.. image:: /_static/screens/menus/who.png
   :alt: The chip's menu open under the identity chip at the top right: the sections Author, Node and account, Where you work, and My space.

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

The same section says which EMStudio service answers: its address, its level
and the version of s3Dgraphy, or that nobody answers at that address. The
label at the left of the status bar says it too, in its tooltip.

The table at the end of this page, **Mode**, lists the two gestures of a room
that the menu uses and that stay hidden in the page.

.. include:: _generated/menus.rst
