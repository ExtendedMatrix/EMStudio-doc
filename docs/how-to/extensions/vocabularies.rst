.. _how-to-extensions-vocabularies:

Manage vocabularies
===================

*Install vocabularies on this computer, link values to their terms, and keep a copy of the terms in the file.*

A controlled vocabulary gives a word a code that holds in every language: the
material written *limestone* in one study and *calcare* in another becomes the
same term. EMStudio treats vocabularies as a document treats its fonts. They are
installed on the computer, once, and shared by every study and by EM Tools. A
file declares which vocabularies and versions it uses, and keeps the label of
each value as it was written, so it opens everywhere, also where a vocabulary is
missing. When the licence allows it, the file can also carry a copy of the few
terms it uses.

All of this happens in one window, ``Tools ▸ Vocabularies…``, and in the
**Inspector** of a value.

Install a vocabulary
--------------------

.. image:: /_static/screens/windows/vocabularies.png
   :alt: The Vocabularies window: a vocabulary installed on this computer, the buttons to install, the alignments, and the vocabularies the open file uses.

#. Choose ``Tools ▸ Vocabularies…``. The window **Vocabularies** opens.
#. In the section **Install**, choose where the vocabulary comes from:

   - **From the central repository…**: the catalogue of the Extended Matrix
     vocabularies. Every vocabulary it lists is installed or brought up to date.
   - **From the StratiGraph node…**: the catalogue of your node. The button is
     there when a node is configured.
   - **From a file (.emvocab.zip)…**: a vocabulary package, or a community
     package whose vocabularies go to the vocabularies of this computer.

#. A message confirms each vocabulary installed. Its card appears under
   **Installed on this computer**: its title, then its code, version, date,
   languages, tier and licence, and the attribution its licence asks for.

**Look for updates** compares the installed vocabularies with the central
catalogue and installs the newer versions. A new version goes beside the old
one: the card lists the **Versions** side by side, each with who brought it, and
a file keeps reading the version it declares.

A vocabulary in tier C has a licence that does not let it travel: only its card
is installed. **Download locally** fetches it from its source and keeps it on this
computer only. When the source asks you to accept its terms first, press
**Terms of the source…**, download the file from that page, then choose it with
**Download locally: choose the file…**; its fingerprint is checked.

Link a value to a term
----------------------

#. Select a property whose field takes its values from a vocabulary, for
   example the **Material** of SU001. In the **Inspector**, under the value, the
   sign ◇ and **not controlled: text only** say that the value is a plain word.
#. Press **Link to a vocabulary…**. The window **Link to a vocabulary** repeats
   the value and lists the candidates that the installed vocabularies propose,
   each marked **same label** or **close**, with its vocabulary and version.
#. Choose the term the word means.
#. Choose **This value only**, or **All … values written** with that word, which
   says how many values share it.
#. Press **Link**.

The word stays the one written; the term gives it its code. The whole link is
one step of ``Edit ▸ Undo``. The Inspector now shows ◆ with the label of the term
in the language of the interface and its vocabulary; its tooltip gives the code
of the term and the version.

The same signs appear beside the properties in the **Outliner** and in the
Matrix: ◆ for a value linked to a term, ◆? for a term whose vocabulary is not
installed on this computer (the saved label is shown), ◇ for a value that is
only text. The **Warnings** sheet of the **Tabular** window lists the values
that are not controlled and those whose vocabulary is missing, with
**Link to a vocabulary…** and **Install…** beside them.

Read what the file uses, and carry a copy of its terms
------------------------------------------------------

#. In the window **Vocabularies**, the section **This file** lists, for the
   active file, each vocabulary it uses, with its versions and how many terms.
#. A vocabulary that is not installed here is marked **not installed here (the
   saved labels are shown)**, with **Install** beside it.
#. Tick **Copy the terms used into the file** to make the file carry, at the next
   save, a copy of the terms it uses, with all their languages. Only vocabularies
   in tiers A and B are copied, because their licence lets them travel. Unticked,
   the file declares its vocabularies without copying them, as a document names
   its fonts.

The message that confirms the choice offers **Undo** for a few seconds. The
choice is saved with the file.

Show labels in more languages
-----------------------------

An alignment says that a term of one vocabulary is the same as a term of
another, so that a label can be shown in the languages of both. Only the rows a
person has verified are used. In the section **Alignments**, press
**Install alignments from a file (.yaml, .json)…**; each alignment is listed with
its rows and how many are verified, and **Remove** takes it away.

Remove a vocabulary
-------------------

On its card, **Remove** takes the vocabulary off this computer, and
**Remove** followed by a version takes away that version only. A file that uses
it still opens, with the labels saved in its values. A vocabulary brought by a
community package stays when the package is removed, like a font left by a
program: its card says that no package brings it any more.

What you get
------------

Vocabularies installed once on the computer and used by every study; values of
the study linked to terms that hold in every language; and a file that declares
what it uses, opens everywhere, and, if you wish, carries the terms it needs.

See also
--------

- :doc:`/explanation/vocabularies`, for vocabularies as fonts and the tiers.
- :doc:`install-packages-and-plugins`, for the community packages that bring
  vocabularies.
- :doc:`/reference/inspector`, for the Inspector of a property.
