.. _reference-inspector:

Inspector
=========

.. TODO MAN02: rewrite (sections, own and inherited, georeferencing). The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

The **Inspector** shows the fields of whatever is selected. With **nothing
selected** it shows the graph's own metadata — the defaults a study inherits from.
Select a node and it shows that node's fields.

Graph metadata (global default)
-------------------------------

- **Name** / **ID** — the graph's human name and its stable identifier.
- **EM-ID (site id)** — a human-readable identifier of this graph/site (e.g. *TM*
  for Templu Mare), the key used across the EM ecosystem; stored on the graph-self
  node.
- **Author (default)** — a propagative default: nodes with no author of their own
  (or their epoch, or their activity) inherit this. Distinct from the study's
  authors.
- **Licence (default)** / **Embargo (default)** — graph-scope defaults inherited by
  nodes with nothing more specific.
- **Site Position (map)** — the point that reads the map: latitude/longitude, or
  *Pick on map*. Distinct from the 3D shift (the ``GeoPositionNode``).
- **Heritage Digital Twin (HDT-O)** — optional link to the study's Heritage Digital
  Twin (which enables the collaborative cloud and the RDF projection): the **Study
  (HC9)** with title, authors and date, and the **Heritage entity (HC1)** with name,
  authority and parent entity.

Node fields
-----------

For a selected node, the Inspector groups its connections by type and lets you jump
to a connected node. What appears depends on the node's kind — a stratigraphic unit
shows its certainty, an epoch its time span, a document its source criticism.

Signing
-------

The status bar shows who is signing. If nobody is, declare your **ORCID iD** in
*Settings ▸ Identity* — it works offline. Your identity is what attributes your
edits.
