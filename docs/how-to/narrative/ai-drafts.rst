.. _how-to-narrative-ai-drafts:

Draft with AI and validate
==========================

*Ask for a draft and validate it before it becomes yours.*

A model can write a first draft of a chapter from what the graph says about the
chapter's lane: the actions of an activity in stratigraphic order, its epochs,
the evidence already recorded. The draft enters the story as a paragraph marked
**AI draft**, with the name of the model, the date and what was asked. It
becomes part of the story when a person reads it and puts their name on it.
Until then it stays out of the exported files.

Before you start
----------------

- The chapter must narrate a lane, an epoch or an activity: choose it in
  **Narrates the lane** in the chapter's **Inspector** (see
  :doc:`write-the-narrative`). The **Introduction** of a proposed story
  narrates no lane, so it has no draft button.
- To validate you need an identity: an ORCID iD declared or verified in the
  panel **Who you are** (see :doc:`/how-to/rooms/sign-in`).

Choose the model and give the key
---------------------------------

The model is chosen once, in ``Settings… ▸ Advanced``, section
**AI provider**. If you ask for a draft before choosing one, EMStudio opens that
section by itself with the line **To ask for a draft you need an AI provider:
save it here and the draft starts by itself**.

#. In **Provider**, choose **Claude (Anthropic)**. **Echo — local trial, no
   key** writes a fixed text without a network and is useful to try the
   gestures.
#. Leave **Model (empty = the provider's default)** empty, or write the name of
   a model.
#. Paste the key into **API key** and press **Save key**.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The key goes into the system keychain and stays there for the next
         sessions. EMStudio's bridge restarts to receive it, so the key
         cannot be saved while a draft is being written. Beside the field EMStudio shows
         **✓ key set**.

      .. tab-item:: Web
         :sync: web

         The key is kept by EMStudio's service for this session only, and is
         not saved: you paste it again in a later session. Beside the field EMStudio shows
         **✓ session key — not saved**.

The key never enters the ``.em.json`` and cannot be read back from the window:
you can replace it or remove it with **Remove**. The provider and the model are
described in :doc:`/reference/settings`.

Ask for a draft
---------------

#. In **Write**, move the pointer over the title of a chapter that narrates a
   lane, for example *Virtual Activity 2: colonnade*, and press **AI draft**.
   The button is always visible on the chapter you are writing in.

   The same request starts from **ask for a draft** in an empty paragraph of
   the chapter, from **AI-assisted draft** in the **+** menu, and from the
   chapter's **Inspector**, section **AI support**.
#. The chapter shows **drafting «…» — the model is writing…** while the model
   works. A model takes some seconds; you can go on writing elsewhere.
#. The draft arrives as a new paragraph at the end of the chapter, and the
   message says how many paragraphs wait for a person.

The model receives only the context of the chapter's lane. The draft is asked in
the language of the story: the story's **Inspector** has
**Language of the story**, and when none is declared the language is read from
the paragraphs already written. In the chapter's **Inspector**, **Draft in**
chooses another language for one request, and the button then reads
**Ask for a draft in** followed by that language.

Validate the draft
------------------

Under the paragraph a strip says **AI draft**, the name of the model, the date of
the request and **prompt**: a click on **prompt** selects the node that records
what was asked.

#. Read the paragraph and correct it in the page as you would any other text.
#. Press **✓ I checked it** on its strip. Your name is put on the paragraph: the
   strip now reads **endorsed** with a ✓ and your name.
#. When a chapter holds several drafts, **✓ Verify the chapter** in the
   chapter's bar, or in its **Inspector**, signs every one of them, one act per
   paragraph.

**retract** on the strip takes your name off: the paragraph reads as a draft
again. If a validated paragraph is changed later, the strip says that it was
changed after you verified it, and it waits for a new verification.

The **Index** counts, chapter by chapter, the AI paragraphs not verified yet.

What you get
------------

A paragraph that says who wrote it and who answers for it. The head of the story
lists the people who signed under **edited by**, and the models under
**with the assistance of**. The request is recorded in the graph as a node, with
the documents the briefing rested on, so that the question «how do I know this»
holds for the machine's text too. Paragraphs that nobody has verified stay out
of the exported files, unless you choose otherwise at export time (see
:doc:`export-the-narrative`).

See also
--------

- :doc:`/reference/settings` for the **AI provider** section.
- :doc:`/reference/desktop-and-web` for where the key is kept.
- :doc:`/explanation/narrative-as-graph` on authorship made explicit.
