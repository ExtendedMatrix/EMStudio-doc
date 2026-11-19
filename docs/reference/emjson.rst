.. _reference-emjson:

The em.json file
================

.. TODO MAN02: update to the 24 Oct specification. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

``em.json`` is EMStudio's native file: the Extended Matrix as a flat graph, plus the
metadata to read it and an optional layout. It is the record; the file is how it
travels between tools.

Shape
-----

An ``em.json`` file has:

- a **header** — the study's identity (``em_id``, owner, authors, licence, title),
  the format and schema versions, the **generator** that wrote it, and the
  **datamodel / ontology versions** it speaks (nodes, connections, qualia; CIDOC-CRM
  and the CRM extensions);
- one or more **graphs**, each with a flat list of **nodes** and **edges** (not
  bucketed by type — the flat shape makes a whole class of bug impossible);
- an optional **layout** — swimlanes and positions — which is regenerable and does
  not change the record.

Why flat, why versioned
-----------------------

The graph section is deliberately **flat**: ``nodes[]`` and ``edges[]``, where an
edge's ``source`` and ``target`` *are* its endpoints. The **datamodel versions** in
the header let a consumer that arrives with an older model be told so, rather than
silently mismatching — the same check a connector uses when it attaches (see
:doc:`../explanation/place-in-the-framework`).

Two tiers
---------

``em.json`` is the fast, editable **property-graph** tier; it projects losslessly to
**RDF / CIDOC-CRM** (Turtle) for the semantic tier, and the RDF importer brings the
graph back — the round-trip is isomorphic. See :doc:`../explanation/two-tier`.

The formal specification of the EM language and of ``em.json`` lives with the
`Extended Matrix language documentation <https://docs.extendedmatrix.org>`__; this
page is the reader's map, not the normative spec.
