.. _reference-settings:

Settings
========

*The nine pages of the Settings dialog, section by section.*

The Settings dialog holds the choices that belong to this computer and to you,
not to a study: the language of the interface, the theme, your identity, the
nodes you know, the viewers, the AI provider, the colours and the vocabularies,
the extensions and the third-party tools. A study carries its
own texts, colours and vocabularies with it; the settings stay on the machine.

Open the dialog with **Settings…** (:kbd:`⌘,` on macOS, :kbd:`Ctrl+,` on Windows
and Linux). On the macOS desktop the command is in the **EMStudio** menu of the
system's menu bar; on the web, on Windows and on Linux it is in the **Help** menu.

The pages are listed in a column on the left, in four groups between thin
lines: **General**, **Identity**, **Viewers** and **Connections**; then
**Colours** and **Vocabularies**; then **Extensions** and **Third-party tools**;
then **Advanced**. The dialog reopens on the page you last
used. Some commands open it directly on the section they need: asking the
narrative for a draft before an AI is set up opens **AI provider**, an author's **Edit** opens **Identity**.
**Save** applies the changes, **Cancel** leaves everything as it was.

General
-------

Language
   The language of this interface. Node labels and narrative text are separate:
   they travel with the document, not with the app. EMStudio starts in English
   and keeps the language you choose. For a language whose translation is an AI
   draft, the option **I have read this translation — mark it validated** turns
   off the “AI draft” badge on this computer.

.. image:: /_static/screens/settings/general.png
   :alt: Settings, the General tab: language, texts of the graph, theme, Matrix layout and interaction.

Texts of the graph
   **Show the texts in** sets the language the texts of the graph are shown in,
   where the study holds a translation of them.

Theme
   **Auto (follows the system)**, **Light** or **Dark**. The theme changes the
   interface and the canvas.

Matrix · layout
   **«Layout» respects where I drop the nodes**: a node dropped by hand keeps its
   place beside the nearest node at the next **Layout**. With the option off, a
   drop moves the node by the same amount in the stored layout too.

Interaction
   **Show connector tooltip on hover** is on by default. **Over a node of the
   Chain: who, when, licence** shows three lines over a node of the
   transformation chain; it is off by default, to try. **Strict document naming
   (D.n)** is recommended: a document is called D.1, D.10 and so on. The two
   **Photo lot** fields set when photographs of one camera, close in time, are
   proposed as one lot: a new session after a number of minutes, and at least a
   number of photographs. The lot is always confirmed by whoever uploads.

Files on this computer
   A study may name files in a OneDrive folder in a form that holds on every
   computer. **OneDrive folder** says where OneDrive is on this one; **Find it**
   looks for it. Until it is set, those files are marked as files to link.

Identity
--------

.. image:: /_static/screens/settings/identity.png
   :alt: Settings, the Identity tab: the ORCID iD, name and surname, with Declare and Verify with ORCID.

Identity (ORCID)
   The ORCID iD is the identity: what you create and change carries the
   signature of the current author. Write the **ORCID iD**, and if you wish a
   **Name** and a **Surname**, then choose **Declare** to work at once, offline.
   **Verify with ORCID** confirms the identity with ORCID; verifying it is what
   unlocks publishing as that person. **Sign out · forget this identity** removes
   it from this computer.

   The closed **Advanced** box holds the **ORCID client id (public)** and the
   choice between orcid.org and its sandbox. These concern whoever deploys
   EMStudio. Left empty, the desktop application uses EMStudio's own client on
   orcid.org; a sandbox, or a web installation, needs a client of its own,
   registered with its page.

Connections
-----------

StratiGraph nodes
   The nodes this computer knows. Each saved node can be made the **default**,
   edited, tested and removed. **Add a node…** opens the node selector, where you
   write a node's address and test it: EMStudio says whether the address answers,
   whether it is a StratiGraph node, which version it runs and which ways of
   signing in it offers. You choose a node, sign in and pick its rooms from the
   chip at the top right of the window.

.. image:: /_static/screens/settings/connections.png
   :alt: Settings, the Connections tab: the StratiGraph nodes and the synchronised apps.

Orphan assets
   This section appears only to the operator of a node. It lists the files of the
   node's store that no room cites any more, because their room was deleted. They
   stay in the store, so the same file uploaded again is stored once and joins its
   new room. The operator can filter them by type and date, and delete them one at
   a time.

Synchronised apps
   The live link with a tool on this machine or on your network. The chosen tool
   is the host and EMStudio connects to it. **Sync with** offers
   **Blender · EMtools** (the live link with EM Tools); the other entries are
   marked *soon* and cannot be chosen. **Protocol** (local or secure), **Host / IP**
   and **Port** compose the **Address** shown underneath.

Viewers
-------

3D viewer
   Where the 3D lives: the address of an **ATON server** and the path of the
   **Heriverse app** under it. The **Scene** line shows the address that results.

.. image:: /_static/screens/settings/viewers.png
   :alt: Settings, the Viewers tab: the ATON server, the Heriverse app and the thresholds of big 3D assets.

Big 3D assets
   The limits of EMStudio's own 3D viewer. A whole file or point cloud over the
   **Threshold for a whole file (MB)** or the **Threshold for a whole cloud
   (points)** does not load by itself: the viewer asks, and proposes the tileset
   when the model has one. The **Tileset memory ceiling (MB)** defaults to an
   eighth of this machine's memory; the tiles' textures are reduced to fit it.
   **Tileset error set automatically** follows this machine's profile; unticked,
   every tileset refines to the error chosen with the slider, and each tileset's
   bar can still choose its own. The **Scene memory ceiling (MB)** is set against
   the estimated weight of each model before it is loaded: what does not fit is
   not loaded, and the scene proposes the version that fits, or asks. The **Tile
   cache on disk (MB)** keeps the tiles already seen on this machine, so that a
   tileset does not come again over the network; 0 turns it off, and **Empty the
   tile cache** clears it.

3D navigation (the Space)
   As in Blender: middle button to orbit, Shift + middle to pan, Ctrl + middle to
   zoom. **Emulate 3 button mouse** makes Alt + left drag the middle button.
   **Emulate numpad** makes the digits 1 3 7 5 0 of the top row act as the
   keypad's. **Auto Perspective** makes an aligned view orthographic, and orbiting
   returns to perspective. **Invert the trackpad's orbit** turns the scene against
   the drag of two fingers. **Left drag in the 3D** chooses what a left drag does:
   **Automatic** (orbit, until a middle button is used), **Orbit**, **Box
   selection, as in Blender**, or **Pan**. On macOS, choose **Pan** to pan with the
   three-finger drag of the Accessibility settings. A line underneath says whether
   a middle button has been used on this device.

Images (IIIF)
   The address of an IIIF Image API service (Cantaloupe, in the StratiGraph
   stack). An image's identifier is its checksum, so only the host goes here. Left
   empty, the images show without thumbnails from the service.

Advanced
--------

.. image:: /_static/screens/settings/advanced.png
   :alt: Settings, the Advanced tab: the AI provider, the developer option and the experimental functions.

AI provider
   Who writes the narrative drafts. **Provider** offers **Claude (Anthropic)** and
   **Echo — local trial, no key**, which writes a fixed draft and needs no network.
   **Model** may stay empty for the provider's default. The **API key** is pasted
   and saved with **Save key**, and **Remove** deletes it. The field stays empty
   after saving: the key can be replaced or removed, and it is never shown again.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The key goes into the system keychain and is passed to EMStudio's local
         service, which restarts to receive it. While a draft is being written,
         saving waits for it to finish.

      .. tab-item:: Web
         :sync: web

         The key applies to the session only: it lives in the memory of
         EMStudio's bridge while the bridge runs, and is not saved. The field
         works while the bridge answers.

Developer
   **Show node UUIDs (inspector)** shows each node's identifier in the
   Inspector. It is off by default.

Experimental functions
   **Turn on the experimental functions on this machine** opens functions still
   being tried. It is off by default and takes effect after a reload.

Colours
-------

.. image:: /_static/screens/settings/colours.png
   :alt: Settings, the Colours page: what the colours are, the Space they would apply to, and the button Open the Colours of the active Space.

The colours of the proxies in a Space, by type, by epoch or by a property, are
not a setting of this computer: they are kept in the file, with the Space they
belong to. The page says so, names the Space of the active workspace, and
**Open the Colours of the active Space…** opens the **Colours** window of that
Space (see :doc:`/how-to/space/colours-and-legend`). The **Colours ▾** of the
Space opens the same window. It was ``Tools ▸ Colours…`` in the earlier
versions.

Vocabularies
------------

.. image:: /_static/screens/settings/vocabularies.png
   :alt: Settings, the Vocabularies page: the vocabularies installed on this computer, the buttons to install them, the alignments, and the vocabularies the open file uses.

The vocabularies installed on this computer, those the open file uses, and the
copy of their terms that the file carries. The page is the one that the window
``Tools ▸ Vocabularies…`` of the earlier versions held, drawn inside the
dialog. **Edit vocabulary…**, beside a value term in the **Inspector**, opens
the dialog on this page. :doc:`/how-to/extensions/vocabularies` tells how to
use it. Its actions are immediate, as those of **Extensions**.

Extensions
----------

.. image:: /_static/screens/settings/extensions.png
   :alt: Settings, the Extensions page: the selector of the repositories, the filters, and the row of Geofisica opened, its data installed and its code not.

The extensions of this computer, the same that EM Tools in Blender uses:
community packages (data: vocabularies, a profile, sheets, colour schemes, read
by every tool) and plugins (code: commands, readers, layers and tools of the
Space, sections of the Inspector). The command search (:kbd:`F3`) finds
**Extensions…** and opens the dialog on this page.

At the top, the selector of the repositories (the official one first; it opens
the panel **Repositories**) and **Install from disk…**; then the search, the
filters **All**, **Installed**, **Updates** and the chips **Data**, **Code**,
**Data + code**. One row per extension, grouped by repository, with its state
and one action; opened, **What it contains** and **Where you will find it**,
with **Show me**. At the foot, the counts, **Update all (…)**, **Clean up…**,
**Folders** and **How to build an extension**. With the experimental functions
on, the last row is the **Development folder**.

Under the extensions, the section **Commands of the plugins** lists each plugin
loaded on this computer with its commands and its panels, and the plugins that
did not load, each with the reason. It is what the menu *Tools ▸ Plugins* of the
earlier versions showed. A command of a plugin is also found by the command
search (:kbd:`F3`), under the name of its extension.

The actions of this page are immediate: **Save** and **Cancel** at the foot of
the dialog do not concern them.
:doc:`/how-to/extensions/install-packages-and-plugins` and
:doc:`/how-to/extensions/repositories-signatures-updates` tell how to use it.

Third-party tools
-----------------

.. image:: /_static/screens/settings/addons.png
   :alt: Settings, the Third-party tools page: the line that says the difference from the extensions, this machine, and the table of the tools with Blender as its last row.

Programs made by others that EMStudio calls on this computer to prepare 3D
models. They add no EM vocabulary or command: that is what the extensions do.
Each is downloaded on request from its official releases, at a pinned version
whose checksum is verified. The page shows this machine (system, processor,
graphics, memory) and, in a blue line, which tools are enough for what you do.

Then one table, a row per tool: **Tool** (its name and version, and whether it
is **recommended**, **optional**, **not needed** or **not for this machine**,
with ⓘ for its licence and source), **Used for**, **On this computer** (what is
installed, or what would be), and the action: **Download and install**,
update, remove. The tools are:

* **gltfpack**, which makes the light variants of a model in Ottimizza;
* **Obj2Tiles**, which turns a textured mesh into a 3D Tiles tileset;
* **3d-tiles-validator**, which checks every tileset against the
  specification before it enters the graph;
* **Node.js**, EMStudio's own copy for the validator, needed only on a machine
  without Node.js of its own.

The tools that do not run on this machine are listed apart, each with the
reason. The third-party tools live in a folder of their own, outside the
installer, and each keeps its own licence: the line under the table names it.

**The queue: how much of this computer** chooses how many of these tools work side
by side: **All** runs several at once under a ceiling (the performance cores less
one, 60 % of the memory), **Half** uses half of both, and **One at a time** runs
them in turn.

The last row is **Blender**, with **Locate…**, which opens its card under the
row. It is not a tool that EMStudio downloads: it is the Blender of this
machine, with its own add-ons (EM Tools, 3D Survey Collection). EMStudio calls
it in the background and leaves it as it is.

The third-party tools are managed by EMStudio's bridge: when the bridge does not
answer, the page says so.
