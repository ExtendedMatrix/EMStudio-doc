.. _how-to-bring-in-import-graphml:

Read a GraphML matrix
=====================

*Read a yEd GraphML matrix once and continue in em.json.*

Many Extended Matrix studies began as a GraphML file drawn in yEd. EMStudio reads
such a file once and turns it into a graph, which from that moment lives in an
``.em.json`` file beside it. The em.json is the file you keep working on: Save
writes the em.json, and the GraphML stays on the disk as it was, the record of
where the study started.

Before you start
----------------

The reading is done by EMStudio's service (the bridge): on the desktop it starts
with the app, on the web the node provides it. If it does not answer, EMStudio
says so and nothing is read.

If you are linked live with EM Tools in Blender, EMStudio asks before reading
the file, because the reading ends the live link (see
:doc:`/how-to/extensions/live-sync-with-em-tools`).

Read the file
-------------

#. Choose ``File ▸ Import ▸ GraphML…``.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The system dialog opens. Pick the ``.graphml`` file.

      .. tab-item:: Web
         :sync: web

         The browser's file chooser opens. Pick the ``.graphml`` file.

   The same reading starts when you open a GraphML with ``File ▸ Open…``, with
   **Import GraphML** on the empty canvas of the **Graph** window, or with
   **Open Temple.graphml in EMStudio** on a GraphML chosen in the **Files** window.

#. EMStudio reads the matrix and opens it as a graph, beside the graphs already
   open. The message **Imported** followed by the file name confirms it.
#. Give the graph its em.json at once.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The save dialog opens in the folder of the GraphML, with the same name
         and the extension ``.em.json`` proposed (``Temple.graphml`` becomes
         ``Temple.em.json``). Confirm, or choose another name or folder. If a
         file with that name exists, the system asks before replacing it.

      .. tab-item:: Web
         :sync: web

         EMStudio asks **GraphML is read once: the graph will live in an
         em.json. Its name:**, with the proposed name filled in. Confirm, and
         the em.json is downloaded under that name.

What you get
------------

The message **GraphML read once into Temple.em.json — the graph lives there now**
closes the operation. The graph belongs to the em.json: ``File ▸ Save`` writes
it, and every later change goes there.

The units, epochs, documents and relations of the matrix come into the graph.
The drawing of yEd (shapes, colours, borders, positions) stays behind: the
**Log** says for how many nodes, and the glyphs come from the visual rules of
the Extended Matrix, as for every graph. The layout of the matrix is computed
afresh when the graph opens (see :doc:`/how-to/stratigraphy/lay-out-the-matrix`).

Until the graph is saved, the documents that the matrix cites in its ``DosCo``
folder are looked for beside the GraphML, so their files are found from the
first moment.

If you cancel the save, the graph stays open without a file. The status line
then says that the GraphML was read but not saved as em.json yet, and
``File ▸ Save as…`` gives the graph its file later.

EMStudio reads GraphML and writes em.json. To share the study with another tool,
use the formats listed in :doc:`/reference/export-formats`.

See also
--------

- :doc:`/how-to/files/open-save-recent`, for saving and reopening the em.json.
- :doc:`check-a-dosco-folder`, to check the DosCo folder that came with the
  matrix against the documents of the graph.
- :doc:`/reference/emjson`, for what the em.json holds.
