.. _explanation-narrative-as-graph:

Narrative as graph
==================

*The story of a study is a reading of its graph, with the evidence shown where it is argued.*

The **narrative** is not a separate document written *about* the study. It is
the graph **read as a story**: a node of the same graph, saved in the same
``em.json``, whose chapters follow the structure of the record and whose figures
are parts of the record itself.

Chapters follow the graph
-------------------------

A story is made of **chapters**, and a chapter can narrate a *lane* of the
graph: an epoch, or an activity. When a story is first proposed, EMStudio writes
one chapter for each epoch, from the oldest to the most recent, each showing the
Matrix of its epoch. The chapters can then be reordered, divided and rewritten
freely: the lane says which part of the graph the chapter is about, so that the
Matrix beside the page follows the chapter being read, and an AI draft knows
what it is asked to tell.

Embeds are references, not copies
---------------------------------

A chapter holds paragraphs and **embeds**: blocks that show a part of the study,
for example the Matrix of an epoch, a table, a document with its citation, or a
3D scene with a saved framing. An embed is a reference to the graph, never a
copy of it. When a unit changes, the Matrix in the chapter changes with it; when
a document is renamed, its citation follows. The story cannot drift away from the
record it tells.

The same holds for the citations and mentions in the text: a mention of SU001
typed with :kbd:`[[` is a link to the node, and the **Story coverage** in the **Index**
counts how much of the graph the story cites and what no chapter explains yet. This is what
the narrative adds to a report written beside the data: the matrix, the
sources, the 3D and the paradata *shown where they are argued*.

Authorship made explicit
------------------------

A paragraph can be drafted by an AI model from its chapter's lane and from the
documents of the study. EMStudio records this as a documented act. The request
is a node of the graph, with the documents it rested on; the draft carries the
model as its author; and it becomes part of the story only when a person reads
it and presses **✓ I checked it**, which puts that person's name on it. The head
of the story lists the people under **edited by** and the models under
**with the assistance of**. Paragraphs that nobody has verified stay out of the
exported files, unless you choose otherwise when exporting.

The narrative is thus the first place where the question *who made this?* is
answered for machine and human contributions alike, each recorded for what it
is (see :doc:`dtc-and-em`, *The attributor and the author*).

Two tiers, here too
-------------------

The narrative lives in the ``em.json`` with the rest of the study and projects
to RDF like the rest: chapters and blocks are data of the graph, and the
citations of an embed become references in RDF (see :doc:`two-tier`).

Written, exported, read
-----------------------

The story is written in EMStudio and exported from the **Export ▾** button of
the **Narrative** window: HTML, DOCX, LaTeX with its bibliography, and a Jupyter
notebook (see :doc:`/how-to/narrative/export-the-narrative`). For a study
published in a node's Catalog, **Live reader · link** gives the address of a reader
page that shows the story with its embeds live, for people who do not use EMStudio. The same record
passes through three stages: written, exported, published.
