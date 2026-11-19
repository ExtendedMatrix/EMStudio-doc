.. _explanation-two-tier:

Two tiers
=========

*One study, two faithful shapes: a property graph to work in, RDF and CIDOC CRM to reason and share.*

EMStudio keeps the Extended Matrix in **two tiers at once**. This is a deliberate
choice of design, and each tier does what the other does badly.

The property-graph tier
-----------------------

While you work, the study is a **property graph**: nodes and relations, each
with its fields. This is the shape that makes the editor responsive: laying out a
large matrix, folding groups, connecting units with a drag of the handle,
filtering, undoing. The ``em.json`` file is this tier written to disk (see
:doc:`/reference/emjson`). A property graph is the right shape for *doing* the
work.

The RDF and CIDOC CRM tier
--------------------------

The same study projects to **RDF**, mapped onto **CIDOC CRM** and its
archaeological extensions. This is the right shape for *reasoning about* the
record and *sharing* it: queries in SPARQL, exchange with other semantic
systems, a formal and standard vocabulary. ``File ▸ Export ▸ Turtle (.ttl)``
writes it (see :doc:`/reference/export-formats`).

The projection is made by the s3Dgraphy library, the same one that every EM tool
uses, and the library can also read it back. The round trip, from the graph to
RDF and back to a graph identical to the first, is how the projection is shown
to lose nothing.

Why both
--------

Tools built on triples are rigorous but heavy to edit; tools built on property
graphs are quick but semantically loose. EMStudio keeps both: you edit in the
property graph and reason in RDF, and the two are the same study seen in two
ways. A study made here is at once a working document and a knowledge graph
that can be queried.

Neither tier comes first
------------------------

The study is not "really" triples with a graph on top, nor "really" a graph
with an export to triples. It is one record with two faithful projections. The
narrative, the exports and the other tools all read the same record, each in the
tier that suits what it does.
