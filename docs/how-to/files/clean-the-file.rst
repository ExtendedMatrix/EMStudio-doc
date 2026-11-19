.. _how-to-files-clean-the-file:

Clean the file
==============

*Take the presentation section out of a file after reading what it holds.*

An ``.em.json`` holds the graphs of a study and, beside them, a section that is
only a way of looking at them: the **colour schemes** kept in the file, each one
with the property it colours, and for each graph the scheme in use. The graphs do
not depend on it. **Clean the file…** takes that section out, for instance before
you hand the file to someone who will colour the study in their own way.

In version 1.6 the presentation section holds the colour schemes only, so cleaning
the file means taking out its colour schemes.

Read what the file holds
------------------------

#. Choose ``Tools ▸ Colours…``. The **Colours** window opens on the active
   Space.
#. Look at the part **In the file**. It lists the colour schemes of the file,
   each with its property and the number of its colours, and marks **in use** the
   one the active graph uses.
#. To keep a copy of the schemes outside the file, click **Expel to a folder…**.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         Choose a folder: EMStudio writes one ``.emc`` file for each scheme,
         the format that EM Tools reads too.

      .. tab-item:: Web
         :sync: web

         The browser downloads one ``.emc`` file for each scheme.

   EMStudio then asks whether to take the schemes out of the file as well:
   **Take them out** does the cleaning in the same gesture, **Keep them in the
   file** leaves the file as it was.

Clean
-----

#. Choose ``File ▸ Clean the file…``.
#. The dialog names the file and says what goes, for example *2 colour
   scheme(s), 1 in use*, and that the graphs, their nodes and their edges do not
   change. Click **Clean**.

The message **cleaned** names what was taken out and offers **Undo**, which puts
the schemes back. The file now has unsaved changes: save it to write the clean
file (see :doc:`open-save-recent`). If the file holds no colour scheme, a message
says that there is nothing to clean.

What you get
------------

An ``.em.json`` with the graphs alone. Cleaning does not change the version of
the study, because a way of looking at the graphs is not part of their content.
To bring a scheme back into a file, use **Import into the file…** or **Keep in
the file…** in the **Colours** window.

See also
--------

* :doc:`/how-to/space/colours-and-legend`, colouring the proxies and keeping the
  schemes.
* :doc:`/reference/emjson`, the sections of an ``.em.json``.
* :doc:`pin-a-version`, the version of the study.
