.. _explanation-vocabularies:

Vocabularies
============

*Vocabularies as fonts: installed on the computer, with a copy of their terms in the file.*

A controlled vocabulary gives a word a code that holds in every language. The
material written *limestone* in one study and *calcare* in another becomes the
same term, and a search for one finds the other. For a framework used by
partners who write in nine languages, this is what makes their studies
comparable.

EMStudio treats vocabularies as a document treats its fonts.

Installed on the computer
-------------------------

A text document does not contain its fonts: it names them, and the fonts are
installed on the computer, once, for every document. Vocabularies work the same
way. They are installed on the computer, from the central repository of the
Extended Matrix, from a StratiGraph node or from a file, and every study on that
computer uses them. EM Tools in Blender reads the same installed vocabularies,
so a term linked in EMStudio is the same term in Blender.

A vocabulary has versions, and a new version is installed beside the old one. A
study keeps reading the version it declares until someone decides to move it to
the newer one.

Declared in the file
--------------------

A study **declares** the vocabularies it uses, with their versions, as a
document lists the fonts it needs. When it is opened on a computer that lacks
one of them, EMStudio says so and offers to install it.

Each value linked to a term carries two things together:

- the **code** of the term, which is its identity and holds in every language;
- the **label** as it was written when the value was entered, with its language,
  and the vocabulary and version it came from.

On the screen, EMStudio shows the label in the language of the interface, taken
from the installed vocabulary. When the vocabulary is missing, it shows the
saved label. A study therefore opens everywhere and remains readable, also on a
computer where its vocabularies have never been installed.

A copy of the terms in the file
-------------------------------

Sometimes a file must travel complete: to an archive, to a colleague without a
network, to a repository that will keep it for decades. For this, the window
**Vocabularies** offers **Copy the terms used into the file**. The file then
carries a copy of the terms it uses (only those, not the whole vocabulary) with
every language the vocabulary can express.

The copy depends on the licence of the vocabulary, which the tier of the
vocabulary summarises.

- **Tiers A and B** have licences that let the terms travel: they are installed
  whole, and their terms can be copied into a file.
- **Tier C** has a licence that keeps the terms with their source: only the card
  of the vocabulary is installed, and the terms are downloaded from the source
  onto your computer, for your use there. Files declare a vocabulary of tier C
  and keep the labels of their values, while its terms stay with their source.

Controlled and free text
------------------------

A value can also be plain text, a word written with no link to a term. EMStudio
accepts it and marks it as **not controlled**, with the sign ◇, in the
**Inspector**, in the **Outliner** and in the **Warnings** sheet. **Link to a
vocabulary…** proposes the terms that the installed vocabularies offer for the
word; a person chooses, and the word stays as written while the term gives it
its code. The link between a word and a term is always chosen by a person,
because saying that they mean the same thing is a judgement.

Alignments between vocabularies extend the languages a term can be shown in:
when a person has verified that a term of one vocabulary is the same as a term
of another, the labels of both can be shown.

Colours bound to codes
----------------------

Colour schemes by property follow the same principle: for a value linked to a
term, the colour is bound to the code of the term, and for a value that is only
text, to the text. The same scheme therefore colours a study written in Italian
and one written in Greek in the same way, wherever their values are linked (see
:doc:`/how-to/space/colours-and-legend`).

The gestures are described in :doc:`/how-to/extensions/vocabularies`.
