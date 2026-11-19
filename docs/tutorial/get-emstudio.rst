.. _tutorial-get-emstudio:

Get EMStudio
============

*Install the desktop application, or reach EMStudio on your StratiGraph node.*

EMStudio is one application in two places. The **desktop application** runs on
your own computer and works on the files of your disk, offline. **EMStudio on the
web** is the same editor served by a StratiGraph node, at the address
``/em/studio/`` of that node: you open it in a browser and work in the node's
rooms. Everything else in this manual is written once for both; where a step
differs, the page shows two tabs, **Desktop** and **Web**, and remembers the one
you chose.

Choose the tab that fits you. You can use both: a file you work on at your desk
can be brought into a room of the node later (see
:doc:`/how-to/rooms/bring-a-file-into-a-room`).

.. tab-set::
   :sync-group: platform

   .. tab-item:: Desktop
      :sync: desktop

      **Download**

      The releases are published on the GitHub page of the project,
      `github.com/ExtendedMatrix/EMStudio/releases
      <https://github.com/ExtendedMatrix/EMStudio/releases>`_. Each release
      lists one file per system. For version 1.6 the files are named like
      this:

      .. list-table::
         :header-rows: 1
         :widths: 22 40 38

         * - System
           - File
           - What it is
         * - macOS (Apple silicon)
           - ``EMStudio_1.6.0_aarch64.dmg``
           - a disk image with the application
         * - Windows (64 bit)
           - ``EMStudio_1.6.0_x64-setup.exe``
           - the installer (recommended)
         * - Windows (64 bit)
           - ``EMStudio_1.6.0_x64_en-US.msi``
           - the same application as a Windows Installer package
         * - Linux (64 bit)
           - ``EMStudio_1.6.0_amd64.AppImage``
           - one file that runs without installing
         * - Linux (64 bit)
           - ``EMStudio_1.6.0_amd64.deb``
           - a package for Debian, Ubuntu and their family
         * - Linux (64 bit)
           - ``EMStudio-1.6.0-1.x86_64.rpm``
           - a package for Fedora, openSUSE and their family

      The development builds of 1.6 carry the number ``1.6.0`` in the file
      name; the release page says which build it is (for example
      ``v1.6.0-dev.136``). The macOS build is made for Apple silicon (M1 and
      later). The files ending in ``.sig``, the ``.app.tar.gz`` archive and
      ``latest.json`` serve the application's own updates: you do not need to
      download them.

      **Install**

      On **macOS**, open the ``.dmg`` and drag **EMStudio** into the
      **Applications** folder.

      On **Windows**, run the ``-setup.exe`` installer (or the ``.msi``
      package) and follow its steps.

      On **Linux**, either make the AppImage executable (in the file's
      properties, or with ``chmod +x``) and run it, or install the ``.deb`` or
      the ``.rpm`` package with your system's package manager.

      **The first time you open it**

      The development builds of 1.6 are not signed with a developer
      certificate, so the system asks for your confirmation once.

      - On macOS the system says that it cannot verify the application.
        Open **System Settings ▸ Privacy & Security**, find the line about
        EMStudio and choose **Open Anyway**. On older versions of macOS a
        right click on the application, then **Open**, does the same. Whoever
        is used to the Terminal can also remove the quarantine mark with
        ``xattr -dr com.apple.quarantine /Applications/EMStudio.app``.
      - On Windows, SmartScreen may show a blue window: choose
        **More info**, then **Run anyway**.

      From then on EMStudio opens like any other application.

      **Updates**

      The desktop application looks for new releases by itself. On macOS the
      command is in the **EMStudio** menu of the menu bar, on Windows and Linux
      it is ``Help ▸ Check for updates…``: when a newer release exists,
      EMStudio offers to install it and restart.

   .. tab-item:: Web
      :sync: web

      **Reach the node**

      EMStudio on the web lives on a StratiGraph node, the server of your
      institution or of your project. Its address is the node's address
      followed by ``/em/studio/``, for example
      ``https://node.example.org/em/studio/``. Ask the person who runs the
      node for the address and for an account. There is nothing to install:
      any recent browser opens it.

      **Sign in and enter a room**

      Online, a study lives in a **room** of the node, where the people of
      the project work on it together. (The web version can also open an
      ``.em.json`` from your computer; it gives it back to you as a
      download.) Open the address in the browser, then the chip at the top right of
      the window. Its menu leads you through the steps: you declare who signs,
      you sign in to the node with **Enter with ORCID** or **Enter with the
      node's password**, and you choose the room in the section **My space**,
      under **Rooms on this node** (see :doc:`/how-to/rooms/sign-in` and
      :doc:`/how-to/rooms/enter-and-share-a-room`).

      A room can also open EMStudio by itself: on the node's own pages, the
      button that opens a room in EMStudio brings you to ``/em/studio/`` with
      that room already chosen.

      **Updates**

      The node serves the version its administrator installed: reloading the
      page is enough to receive a newer one.

A note on language
------------------

EMStudio starts in **English**. The language of the interface is chosen in
**Settings…** (:kbd:`⌘,` on the Mac, :kbd:`Ctrl+,` elsewhere), on the
**General** tab, under **Language**: the application speaks the languages of the project's
partners, and the choice is remembered. This manual names every command with its
English label, as the English interface shows it.

What next
---------

Continue with :doc:`first-launch`, a tour of the six workspaces on the study of
Templu Mare.
