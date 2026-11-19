.. _how-to-files-open-save-recent:

Open, save and reopen a file
============================

*Open an em.json file, save it, and find it again among the recent files.*

A study lives in an ``.em.json`` file. One file can hold several graphs, and
EMStudio can keep several files open together: the **Outliner** shows each open
file with its graphs. :doc:`/tutorial/first-study` opens a study and saves it
once; this page covers the other ways to open, save and close files.

Open a file
-----------

#. Choose ``File ▸ Open…`` (:kbd:`⌘O` on the Mac, :kbd:`Ctrl+O` on Windows and
   Linux).

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         Pick the ``.em.json`` in the system's dialog. EMStudio keeps the path of
         the file, so that it can save it in place and reopen it later.

      .. tab-item:: Web
         :sync: web

         Pick the ``.em.json`` in the browser's dialog. The browser hands over
         the content of the file without its path. A study kept in a folder that
         the **Files** window shows opens from that window with its path.

#. If the graph in front has unsaved changes, EMStudio asks whether to open the
   new file beside it. The graph with the unsaved changes stays open in the
   Outliner.

The file opens beside the files that are already open. A file ending in
``.graphml`` given to ``File ▸ Open…`` is read as a GraphML matrix, as described
in :doc:`/how-to/bring-in/import-graphml`.

To work on one file only, choose ``File ▸ Open in place of the open files…``
instead. You choose the file first; then EMStudio closes the files that are open,
asking for each one that has unsaved changes, and opens the new one. If you
answer no to one of the questions, nothing is closed and the new file is not
opened.

``File ▸ New`` (:kbd:`⌘N`, :kbd:`Ctrl+N`) starts an empty graph with one epoch,
**Epoch 1**. It has no file yet: the Outliner lists it under **Graphs with no
file** until you save it.

Save
----

#. Choose ``File ▸ Save`` (:kbd:`⌘S`, :kbd:`Ctrl+S`), or click the dot beside the
   name of the graph at the top left of the window: the dot is there as long as
   the file has unsaved changes.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The file is written in its place on the disk. A graph that has no file
         yet, or a file that came from a drop in the browser or from a room, has
         no place on the disk: the first **Save** asks for one, as **Save As…**
         does. The title of the window shows the name of the file and a dot while
         changes are unsaved.

      .. tab-item:: Web
         :sync: web

         The browser downloads the ``.em.json`` into its downloads folder, and
         the message **Saved:** followed by the name and **(downloaded)**
         confirms it.

Save writes the file of the active graph with all its graphs. ``File ▸ Save all``
(:kbd:`⌥⌘S`, :kbd:`Ctrl+Alt+S`) writes every open file that has unsaved changes,
one after the other. A graph without a file is left out, and a message tells you
how many such graphs remain: give each one a file with **Save As…**.

A study that lives in a room has nothing to save: every change is already in the
room. **Save As…** writes a copy of it on this computer.

Save under another name or in another folder
--------------------------------------------

#. Choose ``File ▸ Save As…`` (:kbd:`⇧⌘S`, :kbd:`Ctrl+Shift+S`).

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The system's dialog proposes the folder of the file. In the same folder
         the file is simply written under the new name.

         In another folder, the paths of the resources would no longer reach
         their files, because EMStudio writes them relative to the ``.em.json``.
         The dialog **Save as — another folder** says how many paths are
         concerned and offers three answers:

         * **Rewrite the paths**, followed by their number, so that each path
           names the same file from the new place;
         * **Choose in the project's folder**, which opens the dialog again in
           the folder of the study;
         * **Cancel**.

         The message **paths rewritten for the new folder** confirms the
         rewriting. The new file appears in ``File ▸ Open Recent``.

      .. tab-item:: Web
         :sync: web

         The browser downloads the ``.em.json`` under a new name. When the study
         has paths relative to its folder, a dialog reminds you to put the
         downloaded file back in that folder, because the browser cannot rewrite
         the paths for a place it does not know. Choose **Download** to go on.

When you save while the **Shelf** holds entries and belongs to no file, the
dialog **A shelf without a file** asks where it goes: **Save it in this file**
or **Leave it out**.

Reopen a recent file
--------------------

#. Choose ``File ▸ Open Recent``. The list holds the last ten files and rooms you
   opened, the most recent first, each with the folder or the node where it
   lives. A room is listed as **Room** followed by its name.
#. Click a file or a room.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         A file reopens from its path. If it is no longer there, EMStudio says
         so and offers to remove it from the list.

      .. tab-item:: Web
         :sync: web

         A file opened in the browser has no path, and the list says **dropped
         in the browser: drag it in again to reopen it**. Drag the file onto the
         window again, or open it with ``File ▸ Open…``.

A room reopens on both platforms: EMStudio enters it again on its node.
**Clear the list**, at the bottom of the menu, empties the list. With no
document open, the **Files** window shows the same recent studies under **Where
to start** ▸ **Recent projects**.

Close
-----

``File ▸ Close`` (:kbd:`⌘W`, :kbd:`Ctrl+W` in the desktop application) closes
the file of the active graph with all its graphs, asking first if it has unsaved
changes. When nothing remains open, EMStudio shows the start screen again.

What you get
------------

The files you need open side by side, saved where they belong, and a short list
to find them again. To keep a study together with its photographs and models,
see :doc:`project-folder`.

See also
--------

* :doc:`/reference/desktop-and-web`, every difference between the two platforms.
* :doc:`/reference/menus`, the File menu with its keys.
* :doc:`/reference/emjson`, what an ``.em.json`` holds.
* :doc:`/explanation/open-enter-create`, opening a file, entering a room and
  creating a room.
