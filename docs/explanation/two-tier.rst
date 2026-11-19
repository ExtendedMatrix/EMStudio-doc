.. _explanation-two-tier:

Two tiers
=========

.. TODO MAN05: touch up. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

EMStudio keeps the Extended Matrix in **two tiers at once**, and this is a
deliberate design choice rather than a compromise.

The property-graph tier
-----------------------

While you edit, the EM is a **property graph** — nodes and edges with fields. This
is what makes the tool responsive: laying out a large matrix, folding groups,
dragging and connecting, filtering, undoing. ``em.json`` is this tier written to
disk (see :doc:`../reference/emjson`). A property graph is the right shape for *doing*
the work.

The RDF / CIDOC-CRM tier
------------------------

The same record projects **losslessly to RDF**, aligned to **CIDOC-CRM** and its
archaeological extensions. This is the right shape for *reasoning about* and
*sharing* the record: SPARQL queries, interchange with other semantic systems, and a
formal, standard vocabulary. EMStudio exports Turtle, and an RDF importer brings the
graph back — the round-trip is **isomorphic**, which is how we know the projection
loses nothing (it even found export bugs the one-way path had hidden).

Why both, not one
-----------------

Triple-first tools are rigorous but heavy to edit; property-graph tools are fast but
semantically loose. EMStudio refuses the choice: you edit in the property graph and
reason in RDF, and the two are the *same* record seen two ways. This is the "best of
both worlds" that the Extended Matrix has always aimed at — and it is why a study
authored here can be both a working document and a queryable knowledge graph.

Neither tier is "primary"
-------------------------

The record is not "really" triples with a graph view, nor "really" a graph with a
triple export. It is one thing with two faithful projections. The narrative, the
exports, the connectors — all read the same record; the tier they use is a matter of
what they need, not of where the truth lives.
