.. _how-to-narrative-write-the-narrative:

Write the narrative
===================

.. TODO MAN04: update (index window, modules, menus). The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

*Goal: turn the graph into a story you can read and publish.* This is the
**Narrative** tab. The narrative is the graph *read as prose* — chapters that anchor
to epochs and activities, with embeds that stay live references to the record.

It scaffolds itself
-------------------

Open the Narrative tab on a study with epochs and EMStudio builds a first draft of
the structure: an *Introduction* chapter and one chapter per epoch, each with a live
**matrix embed** of that epoch's units. You start from a skeleton, not a blank page.

.. image:: /_static/interface/05_narrative.jpg
   :width: 100%
   :alt: The Narrative tab — the auto-scaffolded narrative of Templu Mare with a live matrix embed

Turn on writing
---------------

The narrative opens read-only. Click the **pencil** (``✎``) in the toolbar to enter
*write mode*: now each chapter shows its controls (move, delete, author) and the
authoring affordances appear.

.. image:: /_static/how-to/narrative-write-mode.jpg
   :width: 100%
   :alt: The narrative in write mode — the palette with + Chapter and draggable views, chapter controls, and + prose

- **Add a chapter** with **+ Chapter** in the left palette.
- **Add prose** with **+ prose** under a chapter; type into the paragraph.
- **Add an embed** by dragging a *view* from the palette — matrix, us, rm, document,
  source, paradata, timeline, table, scene3d, map — onto a chapter. Embeds are
  references: a matrix embed of an epoch stays in sync with the graph.

Draft with AI, then sign it
---------------------------

The **IA** menu can draft the prose of the current chapter from its scope (the
epoch, its units, the paradata). First set the provider, model and key in the AI
data panel (the key lives only in the local bridge for the session, never in the
document). The draft arrives labelled as an **AI draft**; you read it, edit it, and
**validate** it — the act of a human taking responsibility for the text. Whoever
validates is credited among those responsible, and the byline reads "with the
assistance of *the model*".

.. note::

   A window that has lost focus keeps its content and scroll position, and a
   secondary narrative window is read-only — the editable narrative is the one you
   are focused on. See :doc:`export-the-narrative` for getting the story out.
