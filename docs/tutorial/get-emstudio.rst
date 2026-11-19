.. _tutorial-get-emstudio:

Get EMStudio
============

.. TODO MAN02: rewrite as Desktop | Web (map §2.1). The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

EMStudio comes in three shapes, and you can pick whichever fits how you work.
None of them requires a server or an account to get started.

The desktop application (recommended)
-------------------------------------

The desktop application is the fullest way to run EMStudio: it bundles a small
local helper (the *bridge*) that powers GraphML import/export, image previews,
map reprojection and the narrative exporters, all offline.

#. Download the latest release for your operating system from the EMStudio
   releases page.
#. Open it the way your OS installs an application (drag it to Applications on
   macOS; run the installer on Windows; the AppImage on Linux).
#. Launch it. On first launch EMStudio starts in English (see
   :ref:`the language note <language-note>` below).

A single self-contained file (no install)
------------------------------------------

EMStudio also ships as a single HTML file — the editor in one page. Open it in a
modern browser (double-click, or ``File ▸ Open`` in the browser) and it runs with
no installation. This is the "USB stick" shape: handy for a workshop or a machine
you cannot install software on. The narrative *reader* used for dissemination is a
separate, served page; the editor is the single file.

.. note::

   In the single-file shape the local bridge is not present, so features that need
   it (GraphML import, server-side image previews, some export conversions) fall
   back gracefully or are unavailable. Everything about editing the graph works.

From source (developers)
------------------------

If you want to build EMStudio yourself or run the latest development version, the
project's ``README`` describes the desktop (Tauri), the browser preview, and the
LAN server modes. That path is for contributors; this manual assumes you are using
a release.

.. _language-note:

A note on language
------------------

EMStudio's interface is **English by default**, always — it does not follow the
browser or operating-system language on first launch. You can switch to Italian
(and back) in the settings; the choice is remembered. This manual is written for
the English interface.
