.. _how-to-extensions-install-packages-and-plugins:

Install packages and plugins
============================

*Install community packages and plugins, use what they add to a study, enable and remove them.*

EMStudio grows in two ways, and one page of the Settings holds both.

- A **community package** carries data only: vocabularies, properties for a kind
  of study, extractors and sets of canonical points to place on a model, ways to
  combine them, a recording sheet, colour schemes. Every tool of the Extended
  Matrix reads it, and it runs no code.
- A **plugin** carries Python code: commands, importers and exporters, checks,
  panels. A Python plugin has the powers of your user on this computer, so
  EMStudio shows what it asks before installing it.

A **mixed package** carries both, and you can take its data alone. Extensions
are installed on the computer, not in a study, and EM Tools in Blender uses the
same ones. A study declares the community packages it uses, as it declares its
vocabularies.

The extensions are not the **Third-party tools**, the page below them in the
Settings: those are programs made by others that EMStudio calls to prepare 3D
models (gltfpack, Obj2Tiles, Blender…), and they add no vocabulary and no
command of the EM language (see :doc:`/reference/settings`).

Open the page
-------------

Open **Settings…** (:kbd:`⌘,` on macOS, :kbd:`Ctrl+,` on Windows and Linux) and
choose **Extensions** in the column on the left, in the group it makes with
**Third-party tools**. ``Tools ▸ Extensions…`` is a shortcut: it opens the
Settings on this page.

.. tab-set::
   :sync-group: platform

   .. tab-item:: Desktop
      :sync: desktop

      The page lists the extensions of this computer and what the
      repositories you use offer, and installs from disk or from a repository.

   .. tab-item:: Web
      :sync: web

      Served by a StratiGraph node, the page lists the packages that the
      node's administrator installed, and nothing is installed from the
      page. Their properties, sheets and vocabularies reach your study all
      the same. Packages and plugins of your own are installed in the
      desktop application.

Read the page
-------------

.. image:: /_static/screens/settings/extensions.png
   :alt: Settings, the Extensions page: the official repository in the selector, the filters, and the row of Geofisica opened, its data installed and its code not, with What it contains and Where you will find it.

The head of the page gives the title, the **selector of the repositories** and
**Install from disk…**. The selector shows the address of the repository in use,
the official one always first, marked **official**, and **+ N more** for the
others; it opens the panel **Repositories** (see
:doc:`repositories-signatures-updates`).

Under it, **Search extensions** finds by name and by line; **All**,
**Installed** and **Updates** choose what is shown, and the chips **Data**,
**Code** and **Data + code** keep one kind.

The extensions are grouped by the repository they come from (for the official
one, **OFFICIAL REPOSITORY**, with its key and the time it was checked), then
**On this computer** for those installed from disk. What a repository offers and
this computer does not have is a row of the same list, marked
**Not installed**.

Each row is one line: the name, the version, the kind (**Data**, **Code**,
**Data + code**), **used by this file** when the open study declares it, the
line that says what it is, its maintainer and its weight. On the right, the true
state of the extension and **one** action, in ochre:

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - State
     - Action
   * - **Not installed**
     - **Install**
   * - **Installed**
     - —
   * - **Data installed · code not installed**
     - **Install the code…**
   * - **Installed · code switched off**
     - **Enable**
   * - **Update 0.1.0 → 0.2.0**
     - **Update**
   * - **Installed · a code update is waiting**, **Installed · a requirement is
       missing**
     - —

The triangle on the left opens the row. A row that asks something (not
installed, its code missing or off, an update) opens by itself, and so does the
only row of the list.

What it contains
~~~~~~~~~~~~~~~~

The left half of an opened row says what the extension carries, part by part.

- **Data**: its licence, **reads in every tool**, its versions, the
  vocabularies by name with **Vocabularies…** to open them (see
  :doc:`vocabularies`), the profile and its colour schemes, each with
  **Into the file**, which copies it into the open study, where the **Colours**
  window lists it under *In the file* (see
  :doc:`/how-to/space/colours-and-legend`), and the recording sheets, offered in
  the **Sheets** workspace when they are verified (see
  :doc:`/how-to/sheets/fill-the-recording-sheet`).
- **Code**: its licence, Python, the programs it runs in (EMStudio, Blender),
  what it brings counted (for example *8 commands, 1 reader, 1 panel, 1 Space
  layer, 3 Space tools, 1 Inspector section*), whether it is verified, whether it
  is on this computer and enabled, and the key that signed it.
- **Asks to**: each permission, with the reason the plugin gives.

A ● marks a part on this computer, a ○ a part that is not.

Where you will find it
~~~~~~~~~~~~~~~~~~~~~~

The right half says where each thing the extension brings shows in EMStudio,
one line per place: **File ▸ Bring in…** (a reader, and whether it reads a
folder), **Right panel** (or left, below, a window of its own), **Space ▸ Layers**,
**Space ▸ Tools**, **Inspector** (a section, and the kind of node it
reads), **File ▸ Import** and **File ▸ Export**, **Tools menu**, **A node's
context menu**, **Checks**, **Tabular ▸ Columns**, **Status bar**,
**Narrative ▸ Export**, **Vocabularies** (in the Inspector's pickers), and
**Python**, the line that runs a command from the console.

- **●** — it is there now.
- **○** — it appears once the code is installed (or loaded: enabled, or after
  EMStudio restarts).

The places are known before the code is installed: they are read from what the
package declares, in the preview of an archive or in the archive it came from,
and nothing is written to read them.

**Show me**, on each line marked ●, closes the Settings and goes there: the
**File** menu opens with **Bring in…** lit; the panel opens; the Space shows
**Visibility** with the plugin's layers; the tool is lit in the Space's bar; the
Inspector comes forward with a note on what to select; the **Vocabularies**
window opens; the console opens with the line written, not run.

At the foot
~~~~~~~~~~~

The bar at the foot counts the repositories in use, the extensions and the
updates, and offers **Update all (…)** when there are updates, **Clean up…**,
**Folders** (the folders of this computer, when the pointer rests on it) and
**How to build an extension**, which opens the guide :doc:`/extending/index`.

Install from disk
-----------------

#. On the page, press **Install from disk…** for a ``.zip`` archive (or drop the
   archive on the page). On the desktop, **Install from a folder…** takes a
   package's folder, the one that holds its ``em-extension.toml``.
#. EMStudio reads the archive without writing anything and opens
   **Install an extension**. The head gives the name, the version and where it
   comes from, here **from disk**.
#. The panel **Data** lists the vocabularies the package brings, each with its
   licence and tier, and what it adds: properties, extractors, sets of canonical
   points, combiners, sheets, colour schemes. It ends with
   **No code: read by every tool**.
#. The panel **Code**, for a plugin, is marked **NOT VERIFIED, from disk**. It
   lists **Permissions, and why:** (each permission with the reason the plugin
   gives), **It can:** (for example *read the graph*, *write the graph*),
   **It appears in:** (for example *Tools ▸ Extensions*, *File ▸ Import*,
   *the context menu of a node*), and the sentence
   **A Python plugin has your user's powers on this machine.**
#. Answer with one of the buttons:

   - **Install everything**: the data and the code, for a mixed package;
   - **Data only**: the vocabularies and the data, no code on this computer;
     the row then says **Data installed · code not installed**, and
     **Install the code…** adds it later;
   - **Install**: for a package that carries one kind only;
   - **Cancel**: nothing is installed.

The answer is your trust in the code. The question is asked again only when a
new version changes what the plugin asks, what it can do or where it comes from;
otherwise the panel says that permissions, capabilities and source are the same
as the last trust, and no new question is asked. A code that a repository lists
as reviewed is marked with who read it and when (see
:doc:`repositories-signatures-updates`).

Use a package in a study
------------------------

A study declares the community packages it uses, with their version. When you
open a study that declares a package this computer does not have, a message says
**This file uses packages not installed here**, with **Extensions…**: the page
lists them at the top. The study opens all the same, and its values keep their
labels; install the package to read its properties and sheets.

When a newer version of a declared package is installed here, the page says
that the file uses an older version, and offers
**Update the declaration to …**. For a version that may change the meaning of
the data, **What changes…** shows the package's notes first, and
**Keep the old one** leaves the file as it is. A new declaration is saved with
the file and the message that confirms it offers **Undo**.

Place a package's points on a model
-----------------------------------

The extractors and the sets of canonical points of a package become tools of
the **Viewer & card** when it shows a document's 3D model. They appear in the
Viewer's bar after its own six tools, in the group
**Tools of the community packages**; the tooltip of each gives its name, its
package, what it places (a point, a line of two points, a path, a closed
surface) and how many clicks it takes.

#. Choose an extractor's tool and click on the model as many times as the tool
   says. The extractor enters the graph, with its value, as one step of
   ``Edit ▸ Undo``.
#. A set of canonical points (the tool marked ⁘) is placed with a guided pose. A
   row appears under the tools: **Unit**, the unit whose surface is read (the
   selected one, or the one the model is tied to); **Point**, the point the next
   click places (✓ placed, \* required); **Skip**; **⇋**, the symmetric point;
   **Expected**; and **Compute**. The hint says **Place the point:** with its
   name and how many are placed.
#. Click on the model for each point. After three points, **Expected** shows
   where the others should be, as a help and never as a value; a point placed
   far from where the others expect it is reported and kept as placed.
#. When every required point is placed, the values that the package declares are
   computed by themselves and become properties of the unit; **Compute** runs
   the computation at any time.

The **Inspector** shows the pose: **Pose of «…»** with the points placed out of
the set, and the points still missing.

Placing a package's points needs the desktop application, which writes them
with the package's library: in the web version the tools are visible but
switched off, and their tooltip says so.

Run a plugin's commands
-----------------------

Once installed and enabled, a plugin's commands appear where the plugin says,
the places that **Where you will find it** lists:

- ``Tools ▸ Plugins``, with a section for each plugin, its name and version and
  the mark **not verified** for a code from disk, its commands, and
  **Open «…»** for its panels; a plugin that did not load is listed with the
  reason;
- ``File ▸ Import`` and ``File ▸ Export``;
- the context menu of a node in the Matrix and in the Space;
- the **Warnings** sheet of the **Tabular** window, for a plugin that checks
  the study;
- **Bring in…**, for a file that only a plugin can read;
- a section of the **Inspector**, a computed column of the **Tabular** window
  (read only), a line of the status bar, a tool of the 3D, or a panel.

Each change a plugin writes is one step of ``Edit ▸ Undo``, with its line in the
Log, and the act records in its chain which plugin made it. A file that an
exporter returns is saved where you choose.

The plugins of this computer run in the desktop application, through its local
service. The web version does not load them; inside a room it offers the
plugins of the node instead (see below).

Enable, disable and remove
--------------------------

The gestures of an installed extension are at the foot of its opened row; the
row's one action is on its line.

- **Disable** keeps the plugin installed and turns its code off; the row then
  says **Installed · code switched off**, and **Enable** turns it on again.
- **Install the code…** adds the code to a package installed as data only. It
  shows the panel **Code** again and asks the same question. For an extension
  that came from a repository, the code comes from that repository, checked
  against its index and its signature as at the first installation.
- **Remove the code** takes the code away and keeps the data: the package
  becomes data only.
- **Remove the data** takes away every version of the data.
- **Versions…** shows the versions on this computer side by side (see
  :doc:`repositories-signatures-updates`).
- **Remove the package** takes away code and data.

Each removal says first what goes. The vocabularies a package brought stay on
this computer, like fonts, because a study may use them; a box, unticked, offers
to remove them too. For a plugin, a second unticked box removes what the plugin
saved on this computer (its own settings and state).

Load a plugin you are writing
-----------------------------

With the experimental functions on (``Settings… ▸ Advanced``,
**Experimental functions**), the page ends with the row
**Development folder**, marked **beta**. Open it, type or choose a folder of
this computer and press **Use**: the plugins in its sub-folders load where they
are, without installing and without the trust question, marked
**development, not verified**. After changing a plugin's files, press **Reload**
on its line. **Clear** forgets the folder.

Plugins of the node, in a room
------------------------------

In the web version, inside a room, the page also shows **Plugins of the
node**: code that the node's administrator installed and that the node runs for
the room in a closed space, with no network, none of the node's files and a time
limit. The section says whether the node's isolation is proved; if it is not,
the plugins stay off. The owner of the room, or an administrator, turns a plugin
on with **on in this room**; then its commands can be run from the section, and
what a command writes arrives as changes of the room. A command that writes is
available only to those who can write in the room.

What you get
------------

Extensions installed once on this computer and shared with EM Tools: packages
whose properties, sheets, colours and tools serve every study that declares
them, and plugins whose commands take their place in the menus, each act
recorded with the plugin that made it.

See also
--------

- :doc:`repositories-signatures-updates`, to install from a repository and keep
  extensions up to date.
- :doc:`vocabularies`, for the vocabularies a package brings.
- :doc:`python-console`, to run Python on the open study.
- :doc:`/explanation/extensions-and-trust`, for what a package, a plugin and the
  trust question are.
- :doc:`/reference/windows`, *Plugin panel*.
- :doc:`/reference/desktop-and-web`.
