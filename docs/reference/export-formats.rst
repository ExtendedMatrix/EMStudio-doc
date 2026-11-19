.. _reference-export-formats:

Export formats
==============

.. TODO MAN02: only what exists (SVG, Turtle, the narrative). The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

EMStudio exports both the **graph** and the **narrative**.

Graph exports
-------------

From ``File ▸ Export``:

- **SVG** — the current view of the graph as a vector image, printable to PDF.
- **GraphML** — the graph in yEd's interchange format.
- **Turtle (.ttl)** — the graph projected to **RDF / CIDOC-CRM**, for a triple store
  or SPARQL. This is the semantic tier (see :doc:`../explanation/two-tier`); the
  projection is lossless and round-trips back to ``em.json``.

Narrative exports
-----------------

From the **Export** menu in the Narrative tab (also under ``File ▸ Export``). Each is
a **snapshot** of the narrative at the moment you export, and each carries the visual
embeds as real figures (the matrix, and where available the map and timeline):

- **HTML** — a single self-contained page, figures inline.
- **Word (.docx)** — figures embedded as images.
- **LaTeX** — a ``.zip`` with a complete, compilable ``main.tex`` and a ``fig/``
  folder of the figures (LaTeX references its figures as external files, so it cannot
  be one file). The document carries an inline bibliography.
- **Jupyter (.ipynb)** — a live notebook whose embeds become query cells.

The map figure is the **vector layer** (marker, oriented footprint, north arrow,
coordinates, scale) without basemap tiles.

.. note::

   The desktop application ships the exporters ready. In the development build the
   local bridge needs ``python-docx`` for Word and ``cairosvg`` (with system
   ``libcairo``) for figure conversion; without them, Word may be unavailable and
   figures degrade to placeholders — the export still happens, per figure, and the
   message says what to install.
