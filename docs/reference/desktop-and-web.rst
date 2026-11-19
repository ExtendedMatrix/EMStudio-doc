.. _reference-desktop-and-web:

Desktop and web
===============

*What differs between the desktop application and EMStudio served by a StratiGraph node.*

EMStudio is one application with two ways of reaching it. The **desktop
application** runs on macOS, Windows and Linux and brings its own local helper,
the *bridge*, which reads and writes the files of this computer. The **web
version** is the same editor served by a StratiGraph node at the address
``/em/studio/`` of that node: you reach it with a browser and sign in to the node.

The windows, the workspaces, the graph and almost every command are the same in
both. They differ where a browser and a desktop program are different by nature:
a page in a browser receives the content of a file but never learns where the file
lives on the disk, it cannot choose a folder through the system's dialog, and it
saves by downloading. The table below lists every difference of version
1.6.0-dev.136, grouped by theme.

.. list-table::
   :header-rows: 1
   :widths: 22 39 39

   * - Area
     - Desktop
     - Web
   * - **Open…** and **Open in place of the open files…**
     - The system's dialog opens. EMStudio keeps the path of the file, so it can
       save it in place and reopen it later.
     - The browser's file picker opens. EMStudio receives the content of the
       file without its path.
   * - **Save**
     - The file is written in its place on the disk. A file that came from a
       drop or from a room has no place yet, so the first **Save** asks for one.
     - The em.json is downloaded by the browser.
   * - **Save As…**
     - The system's dialog proposes the file's own folder. In another folder,
       EMStudio offers to rewrite the paths of the resources so that they still
       point at the same files.
     - The em.json is downloaded under a new name. A dialog reminds you that its
       resource paths are relative to the folder where you keep it.
   * - **Open Recent ▸**
     - A recent file reopens from its path. A file that has disappeared is said
       so, and you can remove it from the list.
     - A file dropped into the browser has no path: drag it in again to reopen
       it. A recent room reopens on both platforms.
   * - Files given at launch, and files dropped from the system
     - Files opened with EMStudio from the system, and files or folders dropped
       on the window, arrive with their path.
     - A file dropped on the page arrives as its content only.
   * - **New EM project…** and **Open project…**
     - The system's folder dialog opens.
     - EMStudio's own folder selector opens inside the page, starting from the
       folder that the **Files** window is showing.
   * - Choosing a folder in the **Files** window, and **another folder…**
     - The system's folder dialog.
     - EMStudio's own folder selector, or a path that you type.
   * - **Find missing files…**
     - You can add one more folder to the search through the system's dialog,
       and point a missing file at its new place by choosing it.
     - The folder to search is given as a path that you type; a missing file
       is pointed at its new place through EMStudio's own selector.
   * - **Porta dentro…**
     - The system's dialog lets you choose several files at once.
     - EMStudio's own selector lets you choose one file at a time.
   * - **Import ▸ GraphML…**, **Import ▸ Table with a mapping…**, **StratiMiner**
     - The system's dialog returns the file with its path. A GraphML matrix
       kept as em.json is saved beside the GraphML.
     - The browser hands the file over and the bridge keeps a working copy. A
       GraphML matrix kept as em.json is downloaded under the name you give.
   * - **Export ▸ Turtle (.ttl)**, the files an extension exports
     - Saved where you choose.
     - Downloaded.
   * - **Colours…**: the colour schemes of the file
     - Written into a folder that you choose, and read from several files at
       once.
     - Written into the browser's downloads, and read through the browser's file
       picker.
   * - **Print sheets…**
     - **Print…** opens the system's print dialog, which also makes the PDF
       (**Save as PDF**). **One PDF per sheet** needs a bridge that makes PDFs;
       the installed application makes its PDF through the print dialog.
     - **Print…** prints the preview through the browser's print dialog, which
       also makes the single PDF. When the node makes PDFs, one PDF per sheet is
       downloaded file by file.
   * - The title of the window
     - Shows the open file, with a dot when it has unsaved changes.
     - The browser's tab keeps its own title.
   * - **Open in a new window**
     - The window becomes a window of the system, kept above the main window.
     - The window becomes a separate browser window.
   * - Signing in to a node (the chip's menu, **Node and account**)
     - The sign-in runs in the system's browser and comes back to the
       application; when it does not, the node's answer is pasted in **Paste
       the node's answer**. EMStudio asks to sign in only when you ask.
     - The sign-in runs in the same page. EMStudio can renew it quietly.
   * - **Verify with ORCID**
     - The application goes straight to ORCID.
     - On the node's default configuration, the verification goes through the
       node's own ORCID sign-in.
   * - The node
     - None until you configure one in **Settings… ▸ Connections**.
     - The node that serves the page, found from the page's own address.
   * - **My space on the node**, and pages opened by **Open with…** (StratiField,
       Heriverse)
     - Opened in the system's browser.
     - Opened in a new tab of the browser.
   * - Nodes on the local network, and the personal node of this computer
     - The bridge searches the local network and can turn on a node on this
       computer.
     - The search of the local network belongs to the bridge of the desktop
       application. The saved nodes and the address you type are checked.
   * - The AI key (**Settings… ▸ Advanced ▸ API key**)
     - Kept in the system's keychain.
     - Kept by the helper service for the session.
   * - **Pack this tileset into a .3tz**
     - Available.
     - Available in the **Files** window for a folder served by the helper
       service, which writes the archive. A tileset of your own computer is
       packed in the desktop application.
   * - The hardware profile of the **Space** (**Use of this device**)
     - Read as *desktop* on a machine with a graphics card: the scene loads the
       realtime versions of the models.
     - Read as *web*: the scene loads the versions made for the web. You can
       change the profile by hand on both.
   * - **Extensions…** ▸ **Install from disk…**
     - From a .zip archive or from a folder.
     - Served by a node, the window lists the packages that the node's
       administrator installed; the page installs nothing.
   * - Repositories of extensions in a folder (for example on a NAS), and the
       development folder of a plugin
     - Chosen through the system's folder dialog.
     - These folders belong to the desktop application.
   * - Plugins of your own computer, and ``Tools ▸ Python console…``
     - Available.
     - The plugins installed on the node, turned on for the room, run on the
       node; plugins and the console of a computer belong to the desktop
       application.
   * - **Check for updates…**
     - In **Help** on Windows and Linux, in the **EMStudio** menu on macOS.
       EMStudio compares its version with the published releases, and offers
       **Download** and, where it can, **Install and restart**.
     - The version is the one the node serves.
   * - Menus
     - On macOS the system's menu bar carries **File**, **Edit** and **Help**,
       plus the **EMStudio** menu (**About EMStudio**, **Settings…**,
       **Check for updates…**) and the **Window** menu. On Windows and Linux
       the menu bar is inside the window, and **File** ends with
       **Quit EMStudio**.
     - The menu bar is inside the page. **About EMStudio** and **Settings…** are
       in **Help**.
   * - Keys
     - :kbd:`⌘` on macOS, :kbd:`Ctrl` on Windows and Linux.
     - The same keys, except those the browser keeps for itself: **Close** has
       no key on the web, because :kbd:`⌘W` and :kbd:`Ctrl+W` close the
       browser's tab.

How the manual marks the differences
------------------------------------

The manual describes the two platforms with one text. Where the steps of a task
really diverge, a page shows two tabs, **Desktop** and **Web**: choose yours once,
and every page of the manual follows your choice. Where the steps are the same,
there are no tabs.

In the reference tables, *desktop only* marks a command that the web version does
not draw (see :doc:`menus`). A difference among macOS, Windows and Linux is said in
the text of the **Desktop** tab.
