.. _explanation-what-is-emstudio:

What is EMStudio
================

.. TODO MAN05: update. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

EMStudio is the **standalone editor of the Extended Matrix (EM) language**. Where
the earlier EM tooling lived inside Blender or yEd, EMStudio is the place that
*owns* the EM record: it reads and writes ``em.json`` natively, lays out the
stratigraphic matrix with its own engine, and is the hub the rest of the
ecosystem connects to.

A record you author, not a file you convert
-------------------------------------------

EMStudio treats the Extended Matrix as a living record you build and reason with —
stratigraphic units and their relationships, the epochs that order them, the
sources and paradata that justify every interpretation, the representation models
that carry the 3D, and the provenance of every asset. It is not a viewer bolted
onto a converter; it is where the record is made.

Two tiers: a property graph that projects to RDF
------------------------------------------------

EMStudio keeps the EM as a **property graph** — fast and interactive, ideal for
editing, laying out and folding a large matrix — and projects it **losslessly to
RDF / CIDOC-CRM** for semantic queries and interchange. You get the best of both
worlds: the responsiveness of a graph editor and the rigor of linked data,
without choosing one over the other. This "two-tier" design is explained in
:doc:`two-tier`.

The tabs are places to work, not steps to follow
------------------------------------------------

The top of the window is a row of tabs — Documentation, Graph, DTC, Comparisons,
Narrative, Annotator. Each is an **arrangement**: a named layout of windows for a
kind of work, in the spirit of a Blender workspace. They read as an arc — bring
material in, interpret it, document its provenance, compare, tell the story — but
you are free to move between them as you like. The model is explained in
:doc:`workspaces-are-questions`.

A hub the ecosystem plugs into
------------------------------

EMStudio does not try to be every tool. It is the **hub** other software connects
to as *connectors*: Blender for 3D, Heriverse for dissemination, Tropy for
sources, PyArchInit for excavation data, and more. They all speak the same wire —
``em.json`` for the graph, a content-addressed object store for assets, a CRDT for
real-time sharing — and every write carries its provenance. How this works, and
the difference between working alone, in Sidecar with one tool, or in a shared
room, is covered in :doc:`open-enter-create` and :doc:`place-in-the-framework`.

Where EMStudio sits in the Extended Matrix Framework
----------------------------------------------------

EMStudio is one component of the `Extended Matrix Framework
<https://www.extendedmatrix.org/discover/emf>`_. It shares the **s3Dgraphy**
library with the other tools (so they all speak the same EM), reads and writes the
same ``em.json``, and produces the studies that Heriverse and the Catalog
disseminate. It is Open Source (GPL-3.0), and it runs as a desktop application, in
the browser, and as a self-contained file.
