.. _tutorial-first-launch:

First launch: the six workspaces
================================

.. TODO MAN02: rewrite as a tour of Templu Mare. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

This walkthrough opens an existing Extended Matrix study and reads its
stratigraphic matrix. We use **Templu Mare**, an open case study shared across
Extended Matrix courses and demos (215 stratigraphic units, 536 relationships,
3 epochs). Any ``.em.json`` file works the same way.

Open a study
------------

When EMStudio starts with nothing loaded it invites you to *open or drop an
``.em.json`` file*. There are two ways in:

- **Drag and drop** the ``.em.json`` onto the window; or
- use ``File ▸ Open`` and pick the file.

Once loaded, the status bar at the bottom reports the size of the study — for
Templu Mare, ``215 nodes, 536 edges, 3 epochs``.

Read the matrix
---------------

You land in the **Graph** tab, showing the stratigraphic matrix. The units are
arranged in horizontal **epoch swimlanes**, ordered by time, and laid out
automatically — you do not place nodes by hand.

.. image:: ../_static/interface/02_graph.jpg
   :width: 100%
   :alt: The Graph tab showing the stratigraphic matrix of Templu Mare

Try these:

- **Pan** by dragging the empty canvas; **zoom** with the scroll wheel. The
  **minimap** at the bottom-right shows where you are in the whole graph.
- Switch the window's mode with the **Mode** menu at the top-left of the graph
  toolbar: *Matrix Mode* (the swimlane matrix), *Graph Mode* (a free layout), and
  *DTC Mode* (the provenance corpus).
- **Fold** a group to simplify the diagram, and unfold it to expand again.
- Click a unit to select it; its details appear in the **Inspector**.

Move between the tabs
---------------------

The six tabs across the top are **arrangements** — layouts of windows for a kind
of work (see :doc:`../explanation/workspaces-are-questions`). Click through them to
feel the shape of the tool:

- **Documentation** — where files and the object store come in;
- **Graph** — where you interpret (you are here);
- **DTC** — the provenance of your material;
- **Comparisons** — the shelf of what is not yours;
- **Narrative** — the study read as a story; open it on Templu Mare and you will
  find a chapter per epoch, each with a live matrix of its units;
- **Annotator** — tracing regions on images.

Save
----

``File ▸ Save`` writes the study back to ``.em.json``. The graph is the record;
the file is how it travels. From here, follow the :ref:`how-to` guides for the
task you want to do next, or read the :ref:`explanation` to understand the model.
