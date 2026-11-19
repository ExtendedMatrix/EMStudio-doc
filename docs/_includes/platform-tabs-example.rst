..
   PLATFORM TABS — the one way the manual divides Desktop and Web.

   This file is an example to copy, excluded from the build (conf.py,
   exclude_patterns). Decision 2 of the manual: one text for both; the tabs
   appear only where the steps really diverge (choosing a folder, reopening a
   recent file, the project folder, a .3tz tileset, printing sheets, the AI key,
   signing in, finding nodes). Where the steps are the same, write them once,
   without tabs.

   Rules:

   * a sphinx-design ``tab-set`` with ``:sync-group: platform``;
   * two ``tab-item``: first ``Desktop`` with ``:sync: desktop``, then ``Web``
     with ``:sync: web`` — always these labels, in this order, so that the
     reader's choice follows them from page to page;
   * inside a tab, the steps of that platform only; the common steps stay
     outside the tab-set, before and after it;
   * a step numbered inside a tab restarts at 1: number the outer list, and
     write the tab's steps as a short sub-list or a paragraph;
   * a difference among macOS, Windows and Linux stays inside the Desktop tab,
     in a sentence («on macOS …, on Windows and Linux …»), never a third tab;
   * a command that exists only on the desktop is not a tab: say it in the
     text and mark it *desktop only* in the reference tables.

   The example, as it is written in a how-to page:

#. Choose ``File ▸ Open project…``.

#. Pick the folder of the project.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The system's folder dialog opens: choose the project's folder and
         confirm.

      .. tab-item:: Web
         :sync: web

         EMStudio's own folder picker opens, inside the page: choose the
         project's folder and confirm.

#. EMStudio opens the em.json it finds in the project's ``EM/`` folder.

..
   (The divergence above is an example of the form: check every step against
   the code of dev.136 before writing it in a real page.)
