.. _reference-file-locations:

File locations
==============

*Where EMStudio keeps its settings, recent files, vocabularies, extensions and caches on each platform.*

EMStudio keeps two kinds of things apart. The **study** is in its em.json and in
the folders the study names; EMStudio writes there only when you save or when a
command says so. Everything else belongs to the **machine**: the preferences, the
arrangement of the windows, the recent files, the vocabularies and extensions
installed, the caches. This page says where the machine's part lives.

In the paths below, ``~`` is your home folder: ``/Users/<name>`` on macOS,
``C:\Users\<name>`` on Windows, ``/home/<name>`` on Linux.

Two places hold the machine's part:

* the **page's storage**, kept by the web view of the desktop application or by
  the browser: preferences, arrangements, recent files, the tile cache;
* the folders of EMStudio's **local service** (the bridge, the Python process
  that reads and writes files, runs the s3Dgraphy library and makes the exports):
  vocabularies, extensions, plugins, the console, the caches of geographic data.

On the desktop both are on your computer. On the web, the page's storage is in
your browser, for the address of the node you opened EMStudio from, and the
folders of the bridge are those of the machine where the bridge runs.

In the page's storage
---------------------

**Preferences.** Everything set in **Settings** (the six tabs), the theme, the
language of the interface and the experimental functions.

**Workspaces and windows.** The arrangement of each workspace, the workspaces you
made and the names you gave them, the windows opened in a separate system
window, the position of panels such as the **Colours** window, and the sections
of the Inspector you folded.

**Recent files.** The list of ``File ▸ Open Recent``: the last ten em.json files
opened and the rooms entered. On the desktop a recent file keeps its path and
opens again with a click. A file dropped into a browser has no path, so on the
web it is listed for memory only.

**Signing in.** The identities you signed in with (ORCID, a node) are remembered
here.

**The tile cache of the 3D scene.** The tiles of a 3D tileset already seen are
kept on disk, in the browser's cache storage, so that a tileset does not come
again over the network at every return; the least used go first. Its ceiling is
**Tile cache on disk (MB)** in ``Settings ▸ Viewers`` (1024 MB at first; 0 turns
it off), with **Empty the tile cache** beside it. A page opened from an insecure
address has no cache storage: there every tile comes from the network.

Because the page's storage belongs to an address, EMStudio opened from two
different nodes keeps two separate sets of preferences. Clearing the browser's
data for a site clears EMStudio's preferences for that site.

The AI key
----------

The key of the AI service set in **Settings** is kept apart from the preferences,
in a place made for secrets.

* On the desktop it goes into the **system keychain** (the Keychain on macOS, the
  Credential Manager on Windows, the Secret Service on Linux), under the name
  ``org.extendedmatrix.emstudio``, and it is handed to the bridge when the bridge
  starts. Settings can replace or remove it, never read it back.
* Where there is no keychain, the key lives in the memory of EMStudio's bridge
  only, and disappears when the bridge stops.

The bridge's folders
--------------------

These folders are created when they are first needed.

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - What
     - Where
   * - **Vocabularies** installed on the machine, shared by every EM tool
     - macOS: ``~/Library/Application Support/ExtendedMatrix/vocabularies`` ·
       Windows: ``%APPDATA%\ExtendedMatrix\vocabularies`` ·
       Linux: ``~/.local/share/extendedmatrix/vocabularies``
   * - **Extensions** (community packages) and their register; the copies of the
       repositories' indexes and archives
     - ``~/.s3dgraphy/extensions`` (the repositories under ``repos/``)
   * - **Plugins** (the code of the extensions)
     - ``~/.s3dgraphy/plugins``
   * - What plugins keep for themselves
     - ``~/.s3dgraphy/plugins-data``
   * - **Profiles** of the community packages
     - ``~/.s3dgraphy/profiles``
   * - The **Python console**: the scripts that ran and the history of the commands
     - ``~/.s3dgraphy/console`` and ``~/.s3dgraphy/console_history``
   * - The folders you allowed EMStudio to read, where Blender is, and the
       other state of the service
     - ``~/.config/emstudio`` (``fs_roots.json``, ``blender.json``)
   * - The **geographic data** of the map and the globe: the tiles fetched online
       and the globe minimum downloaded for offline use
     - ``~/.config/emstudio/geo``
   * - The measures of the tilesets already read
     - ``~/.config/emstudio/cache/tiles``
   * - The optional tools downloaded on request (for example for tilesets and
       optimised models)
     - ``~/.config/emstudio/addons``
   * - The work of ``File ▸ Room ▸ Bring this into a new room…``
     - ``~/.config/emstudio/room-import``
   * - **Thumbnails** of pictures and PDF pages, shared with EM Tools for Blender
     - ``~/.em_cache/thumbs``

The ``~/.config/emstudio`` folder has the same name on every platform, Windows
included.

The cache of the map's tiles keeps the least used tiles out under a ceiling, 512 MB
at first. EMStudio shows its size and its limit beside the territory's layers,
with **Empty the cache**.

Beside the study
----------------

A few things are written in the study's own folder, because they belong to it:

* the files a room sends you, fetched by their digest, in ``.em_cache`` at the root
  of the project;
* the local copies freed from the project when the master is safe elsewhere, put
  aside in ``.em_freed`` with the date, rather than deleted;
* the ``.3tz`` packed from a tileset folder, beside the folder (*desktop only*).

.. seealso::

   :doc:`/reference/settings` for the preferences, and :doc:`/reference/emjson`
   for what the em.json holds.
