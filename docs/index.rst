Welcome to the documentation page of EMStudio
=============================================================

**EMStudio** is an open-source, standalone editor for the **Extended Matrix (EM)**
language: the place where you *author* a stratigraphic and interpretive record —
draw the matrix, attach sources and paradata, declare the provenance of every
asset, compare with what is not yours, and finally *tell the story* and export it.
It runs as a desktop application, in the browser, and as a self-contained file you
can open with a double click.

EMStudio is a component of the `Extended Matrix Framework
<https://www.extendedmatrix.org/discover/emf>`_, an Open Source and Open Science
project developed to manage, visualize, represent and share the data and paradata
associated with the documentation and the reconstruction of an archaeological
context, an object, or a collection. Within that ecosystem EMStudio is the
*sovereign editor* of the EM language: it reads and writes ``em.json`` natively,
projects to RDF for semantic queries, and speaks to the other tools —
`EM-blender-tools <https://github.com/zalmoxes-laran/EM-blender-tools>`_ for 3D,
`Heriverse <https://www.heriverse.org>`_ for dissemination, and the s3Dgraphy
library that all of them share.

EMStudio lets you:

- read, edit and validate the Extended Matrix as a **property graph** (fast,
  interactive) that projects losslessly to **RDF/CIDOC-CRM** (semantic, queryable);

- lay out the **stratigraphic matrix** automatically with a layout engine driven
  by the epochs, and fold groups into a readable diagram;

- bring in **documentation** (files on disk, the shared object store, ingested
  batches) and declare the **provenance** of every asset with the DTC model
  (acquisition → derivation → attribution);

- **compare** your study with what is not yours (other studies, other Heritage
  Digital Twins) on the shelf;

- write a **narrative** — the graph read as a story — with AI-assisted drafts you
  validate, embeds that stay live references, and **exports** to HTML, Word, LaTeX
  and Jupyter;

- **annotate images**, place the site on a **map**, and **collaborate** in real
  time inside a room.

EMStudio has been developed by E. Demetrescu at CNR-ISPC (Rome, former CNR-ITABC).

.. admonition:: Remember

   This documentation is under continuous development, and EMStudio is a
   fast-moving project. Where the interface has moved on from a screenshot,
   trust the text.

.. toctree::
   :hidden:
   :maxdepth: 1

   tutorial/index
   how-to/index
   reference/index
   explanation/index

New to EMStudio?
----------------

Start with the :ref:`tutorial` — installation, first launch, and a guided first
contact: load an example study and read its matrix.

Looking for a specific task?
----------------------------

Browse the :ref:`how-to` recipes — task-oriented guides grouped by goal (bring
material in, interpret in the Graph, declare provenance in DTC, compare, write and
export the narrative, annotate, collaborate).

Need panel details?
-------------------

Consult the :ref:`reference` — a tab-by-tab and window-by-window description of the
interface, the menus, the Inspector fields, the export formats, and the ``em.json``
file, plus a changelog appendix.

Want to understand the design?
------------------------------

Read the :ref:`explanation` — the concepts behind EMStudio: the two-tier
(property-graph + RDF) model, the tabs as *arrangements* of windows, the DTC
provenance model, the narrative as a reading of the graph, rooms and collaboration,
and EMStudio's place in the Extended Matrix Framework.

Choose your path
----------------

.. admonition:: I document and interpret a site
   :class: tip

   Begin with the formal language at `the EM language docs
   <https://docs.extendedmatrix.org>`__, then come back here for
   :doc:`tutorial/index` and the :doc:`how-to/stratigraphy/add-and-connect-units` loop. Most of
   your work happens in the **Graph** tab.

.. admonition:: I write and publish the story
   :class: tip

   Go to :doc:`how-to/narrative/write-the-narrative` and :doc:`how-to/narrative/export-the-narrative`.
   The **Narrative** tab is where the graph becomes prose, with AI drafts you sign,
   and the export bar carries it to HTML, Word, LaTeX and Jupyter.

.. admonition:: I want to understand or extend it
   :class: tip

   Read the :ref:`explanation` for the model and the architecture. EMStudio is
   GPL-3.0; its source lives in the `EMStudio repository
   <https://github.com/zalmoxes-laran>`__ and it consumes the shared s3Dgraphy
   library.
