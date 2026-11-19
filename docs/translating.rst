:orphan:

.. _translating:

Translating the manual
======================

*How a language of the manual is added, kept up to date and published.*

The manual is written in English, and every other language is a translation of it
kept in catalogues of the gettext format, one catalogue for each page. The languages
are those of the EMStudio interface, the partners' languages of the project: Italian
(``it``), German (``de``), Greek (``el``), Hebrew (``he``), Spanish (``es``), Polish
(``pl``), Romanian (``ro``) and French (``fr``). Each has a folder
``docs/locale/<language>/LC_MESSAGES/`` with a ``.po`` file for every page, in the same
tree as the pages themselves. Italian is complete; the other languages hold their
catalogues ready, with the labels of the interface already filled in.

A translator works on these files and never on the English pages. A paragraph is
translated as a whole: the catalogue offers it as one string, and the translation
replaces it in the page of that language. A paragraph that is changed in English
and not yet translated appears in English on the translated site until a
translator takes it up: the page is incomplete for a while, never wrong.

Before you start
----------------

You need a copy of the manual's repository, ``EMStudio-doc``, and Python 3 with the
packages of ``docs/requirements.txt`` (Sphinx, the Read the Docs theme,
``sphinx-design`` and ``sphinx-intl``):

.. code-block:: bash

   python3 -m venv .venv
   .venv/bin/pip install -r docs/requirements.txt

To fill in the labels of the interface you also need a copy of EMStudio's
repository, which the tools read and never change.

Any editor of ``.po`` files serves for the translation itself: Poedit, the
translation views of Weblate or of an editor of code, or a plain text editor.

Update the catalogues after the English has changed
---------------------------------------------------

#. From the root of the repository, extract the strings of the English pages:

   .. code-block:: bash

      .venv/bin/sphinx-build -b gettext docs docs/_build/gettext

#. Merge them into the catalogues of every language:

   .. code-block:: bash

      .venv/bin/sphinx-intl update -p docs/_build/gettext -d docs/locale \
         -l it -l de -l el -l he -l es -l pl -l ro -l fr

   The strings already translated stay. A string whose English has changed is
   marked *fuzzy*, with the old translation kept as a suggestion; a new string
   arrives empty.

#. Fill in the labels of the interface in the new strings:

   .. code-block:: bash

      .venv/bin/python docs/_tools/ui_terms.py ~/Documents/GitHub/EMStudio --ref v1.6.0-dev.136

   Give the tag of the version that the manual describes, the same as ``version``
   in ``docs/conf.py``.

#. Translate what is empty or *fuzzy*, and remove the *fuzzy* mark from each
   string once it is right. Sphinx leaves *fuzzy* strings out of the build, so
   the English appears in their place until they are confirmed.

Add a language
--------------

#. Check that the language is among the ``LOCALES`` of ``frontend/src/i18n.ts`` in
   EMStudio: the manual follows the languages of the interface, so that its words
   and the words on the screen are the same.
#. Create its catalogues with ``sphinx-intl update`` as above, giving only the new
   code with ``-l``, and add the code to ``LANGS`` in ``docs/_tools/ui_terms.py``.
#. Fill in the labels of the interface with ``ui_terms.py -l <language>``.
#. For a language written from right to left, add its code to ``RTL_LANGUAGES`` in
   ``docs/conf.py``: its pages are then drawn from right to left, with the menu of
   the manual on the right, while code, keys and file names stay from left to
   right.
#. Ask the maintainer of the manual to create the language's project on Read the
   Docs (see :ref:`translating-publish`).

The labels of the interface
---------------------------

The manual names every menu, window, workspace, command and field with its English
label, written in bold or in a menu path such as ``File ▸ Save As…``. A reader of
another language must find the label of their own interface, letter by letter.
``docs/_tools/ui_terms.py`` takes these labels from EMStudio's dictionary,
``frontend/src/i18n.ts``, the same that the application draws, and writes them into
the catalogues:

* a string that is nothing but a label (a heading named after a menu, a cell of the
  tables of menus and shortcuts, a label in bold, a menu path, the description that
  EMStudio shows when the pointer rests on a command) receives the label of that
  language;
* the strings in which a label could also be an ordinary word are marked *fuzzy*:
  the translator confirms them or writes the right word;
* a label that the dictionary of a language does not hold yet stays empty, because
  the interface of that language shows it in English: the translator writes the
  English label.

Inside the sentences the translator does the same by hand: each label in bold, and
each part of a menu path, takes the label of the interface in that language.
``ui_terms.py`` with ``--dump labels.json`` writes the whole table of labels, English
and translated, for every language.

Words that stay as they are
---------------------------

Some words are names and are written the same in every language:

* the names of the types of nodes of the Extended Matrix and their abbreviations:
  US, USV, USM, SF, VSF and the others of :doc:`/reference/em-legend`;
* DTC, HDT, ORCID, IIIF, CRS, EPSG;
* ``em.json`` and every other name of a file, folder or extension;
* *Porta dentro*, the proper name of the gesture that brings files in as
  documents, written in italics the first time on a page;
* the names of the programs and places of the framework: EMStudio, EM Tools,
  s3Dgraphy, StratiGraph, Heriverse, Blender, Tropy, StratiMiner, and the Catalog
  of a node;
* the identifiers in the examples (SU001, D.08) and the name of the example
  dataset, Templu Mare.

The keys between ``:kbd:`` marks, the targets of the links (``:doc:`…```), the
images and the code blocks are not translated: the catalogue offers only the text
around them. In a link with its own title, such as ``:doc:`the first study
</tutorial/first-study>```, only the title is translated.

An elided word before a bold label or a literal takes the typographic apostrophe,
``’``, rather than the straight one: Italian writes ``l’**Outliner**``, French
``l’**Inspecteur**``. The build turns straight quotes into the quotation marks of
the language, and a straight apostrophe right before a mark of emphasis would
become a closing quotation mark.

Regenerate the pictures of a language
-------------------------------------

The pictures of the manual are taken from the application by
``docs/_tools/screenshots.mjs`` (its ``README.md`` in ``docs/_tools/`` describes the
bench). The script takes the language of the interface as a parameter:

.. code-block:: bash

   EM_DOC=/tmp/TempluMare/EM/TempluMare_v11.em.json node docs/_tools/screenshots.mjs --lang it

The pictures of a language are written beside the English ones, in a folder named
after the language (``docs/_static/screens/menus/it/file.png`` beside
``docs/_static/screens/menus/file.png``). The build of that language takes them when
they are there and the English ones otherwise, so a language can start without
pictures of its own. The pages are the same for every language: only the pictures
change.

Build a language
----------------

.. code-block:: bash

   DOCS_LANGUAGE=it .venv/bin/sphinx-build -b html docs docs/_build/html-it

``DOCS_LANGUAGE`` takes any code of the list above; without it the build is in
English. Add ``-W --keep-going`` to stop at every warning, as the English build
does before each release of the manual.

.. _translating-publish:

Publish a language
------------------

On Read the Docs each language is a project of its own, linked to the English one
as its translation. The maintainer of the English project creates it once: a new
project from the same repository and branch, with the language of the project set
to the language of the translation, then, in the English project, *Settings ▸
Translations* adds it. Read the Docs then builds each language from the same
sources and shows the languages in the menu of versions; the build reads the
language from the project, so nothing in the repository changes.
