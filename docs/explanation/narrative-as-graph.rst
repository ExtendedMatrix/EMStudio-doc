.. _explanation-narrative-as-graph:

Narrative as graph
==================

.. TODO MAN05: touch up. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

The **Narrative** is not a separate document you write *about* the study. It is the
graph **read as a story** — a view of the same record, in prose, with its evidence
in line.

Chapters are lanes; embeds are references
-----------------------------------------

A narrative is a sequence of **chapters** that anchor to the structure of the graph —
typically an epoch or an activity — and hold **blocks**: prose, and **embeds**. An
embed is a *reference*, never a copy: a matrix embed of an epoch shows that epoch's
units and stays in sync with the graph; a paradata embed shows the evidence chain
(source → extractor → property → unit) in line. Because embeds are references, the
story cannot drift from the record it tells.

This is what makes the narrative distinctive: the graph, told as a reading, with the
matrix, the sources, the 3D and the paradata *shown where they are argued*, and the
whole thing still queryable as RDF.

AI-authorship, made honest
--------------------------

A chapter can be drafted by a model from its scope. EMStudio treats this as a first
class, documented act rather than a hidden convenience: the **prompt is a source**
(a belief adoption based on evidence), the draft is authored by the **AI author**
(model name, version, date), and it becomes knowledge only when a **human validates**
it. The byline reads "with the assistance of *the model*", the responsible human is
in the front line, and whoever validates is credited. This is the narrative as the
first proving ground of the question *who made this?* — where machine and human
contributions are both recorded, distinctly.

Two tiers, here too
-------------------

The narrative lives in the ``em.json`` record and projects to RDF like the rest:
chapters and blocks are data, and the citations an embed makes become RDF references
— not reified as triples first, but written as the graph and projected. See
:doc:`two-tier`.

From editing to dissemination
-----------------------------

You author the narrative in EMStudio and export it (HTML, Word, LaTeX, Jupyter — see
:doc:`../how-to/narrative/export-the-narrative`). Beyond the exports, a served **reader** page
disseminates it with the embeds live, for people who do not run EMStudio. Same
record, three stages: authored, exported, published.
