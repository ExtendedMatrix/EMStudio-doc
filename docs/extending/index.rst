.. _extending:

Extending EMStudio
==================

*A guide for whoever wants to build a package of their own: the words, the
points and the measures of a community, its recording sheet, its colours, and,
when they are needed, commands written in Python.*

EMStudio speaks one language, the Extended Matrix, and every community that
uses it records things of its own: the values a specialist writes down, the
points a sculpture scholar places on a face, the sheet a laboratory fills in,
the colours with which a team reads its data. A **package** is the folder in
which you write all of this down once, so that EMStudio, EM Tools in Blender
and a StratiGraph node read it the same way, and so that a study that uses it
says so.

This section is written for two kinds of readers:

- **the researcher of a domain** who uses a computer every day and does not
  write programs: the first tutorial builds a whole package with text files
  only, and every step can be checked before moving on;
- **the developer** who wants to add commands, readers, checks or sections of
  the Inspector: the second tutorial starts from the same package and adds
  Python to it.

Nobody needs permission to begin. A package works on your own computer from
its first file; publishing it, in a repository of your own or in the official
index, comes later and is described in its own page.

.. admonition:: The example of this section
   :class: tip

   Every page follows one example: **a carved face**, its points (the root of
   the nose, the outer corners of the eyes), the width between the eyes that
   EMStudio computes from them, and the state of its surface (original, worn,
   restoration infill). It is an example written for this guide, marked as
   such in every file, and not a standard to cite. Its files can be copied from
   :download:`volto-esempio 0.1.0 (data only) </_includes/extending/volto-esempio-0.1.0.zip>`
   and :download:`volto-esempio 0.2.0 (data and code) </_includes/extending/volto-esempio-0.2.0.zip>`.

How the section is organised
----------------------------

**Tutorials** — learn by doing, in order:

- :doc:`first-package`: from an empty folder to a package of data only,
  installed in EMStudio, with a vocabulary, a set of points, a measure, a
  recording sheet and a colour scheme.
- :doc:`python-command`: the same package with code; a first command, the
  development folder, reloading, and a section of the Inspector.

**How-to guides** — one task each:

- :doc:`test-and-validate`: the validator, the tests, the words of the
  Extensions page of the Settings.
- :doc:`stamp-derived-files`: a good practice for code that makes files from
  other files.
- :doc:`publish`: in a repository of your own (also a laboratory's, signed
  with its key) or in the official index.
- :doc:`new-version`: what changes, which number moves, what the studies see.
- :doc:`permissions-and-trust`: what the code asks, and how a review is earned.

**Reference** — the details, checked against the program:

- :doc:`envelope`: ``em-extension.toml`` key by key, with its sections
  ``[data]``, ``[code]`` and ``[requires]``, and the manifest ``profile.json``.
- :doc:`slots`: where a command appears, what it receives and what it returns.
- :doc:`em-api`: the essential ``em`` API for a plugin.
- `EMStudio Python API <https://docs.extendedmatrix.org/projects/emstudio-python-api/en/latest/>`__: the complete
  reference of ``em``, generated from the code, on its own site.
- :doc:`validator`: every sentence of the validator, with its code.

**Explanation** — why it is built this way:

- :doc:`design`: the two levels, data and code; how a package enters the
  graph without inventing node types; the contract of writes; why signatures
  and reviews.

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: Tutorial

   first-package
   python-command

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: How-to guides

   test-and-validate
   stamp-derived-files
   publish
   new-version
   permissions-and-trust

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: Reference

   envelope
   slots
   em-api
   validator

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: Explanation

   design

What you need
-------------

- **EMStudio for the desktop** (see :doc:`/tutorial/get-emstudio`). The web
  version reads the packages a node installed, and does not install your own.
- **A text editor** that saves plain UTF-8 text: any editor for programmers
  works, and so does the editor of your system when it saves plain text.
- **Python 3.9 or later**, only to check and build a package from the
  terminal, and for the second tutorial. With Python installed, one command
  gives you the same validator that EMStudio uses:

  .. code-block:: sh

     python3 -m venv ~/em-packages-venv
     ~/em-packages-venv/bin/pip install --pre "s3dgraphy[rdf]" jsonschema

  ``s3dgraphy`` is the library of the Extended Matrix; ``[rdf]`` lets it read
  the vocabularies, and ``jsonschema`` lets it check the manifest against its
  schema. On Windows the programs of the environment are in
  ``em-packages-venv\Scripts\`` instead of ``em-packages-venv/bin/``.

The technical specification behind this guide is `EM Profiles, SPEC.md
<https://github.com/ExtendedMatrix/em-profiles/blob/main/SPEC.md>`__, in the
em-profiles repository: the guide tells you how to do things, the
specification is the contract every tool keeps.
