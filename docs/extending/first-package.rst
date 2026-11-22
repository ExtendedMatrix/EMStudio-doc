.. _extending-first-package:

Your first package, step by step
================================

*From an empty folder to a package of data only, installed in EMStudio: a
vocabulary, a set of points with the measure computed from them, a recording
sheet and a colour scheme. No code.*

A package of data only is a folder of text files. EMStudio reads it, and so
do EM Tools in Blender and a StratiGraph node; nothing in it runs, so it
installs without any question of trust. In this tutorial you write one for
an example: **a carved face**. Its surface may be original, worn or a
restoration infill; three points are placed on its 3D model (the root of the
nose and the outer corners of the eyes), and the width between the eyes is
computed from two of them.

Every file of this page is complete and has been checked with the validator.
Write them by hand to learn the form, or copy them from
:download:`the finished package </_includes/extending/volto-esempio-0.1.0.zip>`.

What you will have at the end
-----------------------------

.. code-block:: text

   volto-esempio/
     em-extension.toml                 the envelope: who the package is, what it carries
     profile.json                      the manifest: what the package adds to the language
     LICENSE                           the licence of its content
     vocab/stato-superficie.ttl        a vocabulary: the states of a surface
     vocab/punti-volto.ttl             a vocabulary: the points of a face
     landmarks/occhi.json              a set of points to place in order
     colors/stato-superficie.emc       a colour scheme
     forms/vlt-scheda-volto/           a recording sheet: its source and its compiled form
     examples/volto.em.json            a study that uses the package

Before you start
----------------

- EMStudio for the desktop, a text editor that saves plain UTF-8 text, and
  the Python environment of :ref:`extending` with the ``s3dgraphy`` library:
  its validator says, file by file, what holds and what does not.
- Choose two names. The **id** of the package names its folder and its
  archive: lowercase letters, digits, ``-``, ``_`` and ``.``, here
  ``volto-esempio``. The **prefix** is the short word written in front of
  every term the package adds: 2 to 16 lowercase letters or digits, a letter
  first, here ``vlt``. Two packages never share a prefix, so pick one that
  says your community.
- Choose an address for the package and its vocabularies, its **IRI**. The
  packages of the official index live under
  ``https://w3id.org/extendedmatrix/profile/<id>``; a laboratory may use an
  address of its own domain. Whatever you choose, keep it: it is the identity
  of every term.

1 · The folder and its envelope
-------------------------------

#. Make a folder named as the id, ``volto-esempio``.
#. Inside it, write ``em-extension.toml``, the **envelope**. It says who the
   package is and what it carries, in the TOML format: one ``key = value``
   per line, sections between square brackets.

   .. literalinclude:: /_includes/extending/volto-esempio/em-extension.toml
      :language: toml
      :lines: 1-12

   - ``schema_version`` is the version of the envelope's form, always
     ``"1.0.0"`` today.
   - ``id`` and ``version``: the version of the archive, in three numbers
     (*major.minor.patch*). A package stays at ``0.x`` while it is a proposal.
   - ``name`` and ``tagline`` are what the Extensions page shows; the
     tagline has at most 64 characters and no final full stop.
   - ``maintainer`` is who answers for the package; ``license`` the licence of
     its content, written as an SPDX identifier after ``SPDX:``.
   - ``em_api_min`` is the version of the extensions API the package needs:
     ``"1.0"`` for a package of data.
   - ``type = "community-package"`` says that it carries data only.
   - ``[data]`` is the section of the data, and ``profile`` names the
     manifest.

#. Write ``LICENSE`` beside it: a few lines that say the licence of the
   content and where to read it.

2 · The head of the manifest
----------------------------

The **manifest**, ``profile.json``, says what the package adds to the
language. It is a JSON file: an object between braces, keys and texts between
double quotes, a comma between one entry and the next and none after the
last. Begin with its head:

.. literalinclude:: /_includes/extending/volto-esempio/profile.json
   :language: json
   :lines: 1-18

The head ends with a comma because more blocks follow it: each of the next
steps adds one, and each block ends with a comma too, except the last one,
written in step 8, which closes the file with ``}``.

- ``profile_format`` is the version of the specification the manifest
  follows, ``"0.2"``.
- ``iri``, ``name`` (the same as the id), ``prefix``, ``version`` (the same as
  the archive's, for a package of data only).
- ``lifecycle`` is ``proposed`` while the package is young, ``stable`` when it
  is settled. ``example: true`` marks a package written only to show the
  form: leave it out of a real package.
- ``title`` and ``description`` are texts in several languages, and
  ``languages`` lists the languages the package speaks: **every label of the
  package must exist in each of them**, and the validator checks it.
- ``curators`` names who answers for the content (GitHub names, ORCIDs).
- ``is_profile_of`` says the version of the file format and of the EM core
  the package was written for. Copy these two lines as they are.

3 · A vocabulary for the state of the surface
---------------------------------------------

A **controlled field** takes its values from a vocabulary, so that *worn
surface* and *superficie abrasa* are one value, readable in every language.
A vocabulary is a SKOS file in the Turtle format.

#. Make the folder ``vocab`` and write ``vocab/stato-superficie.ttl``:

   .. literalinclude:: /_includes/extending/volto-esempio/vocab/stato-superficie.ttl
      :language: turtle

   The first block is the **scheme**, the vocabulary itself: its address,
   its title, its licence and its version (``owl:versionInfo``). Each further
   block is a **concept**: its address, its label in each language
   (``skos:prefLabel``), a definition in your own words and its source.

#. Bind the vocabulary to a property of the package. Add to ``profile.json``:

   .. literalinclude:: /_includes/extending/volto-esempio/profile.json
      :language: json
      :lines: 20-25

   The property ``vlt:stato_superficie`` now takes its values from the scheme
   at that address, version ``0.1.0``.

#. Say in the envelope that the package **carries** the file. Add at the end
   of ``em-extension.toml``:

   .. literalinclude:: /_includes/extending/volto-esempio/em-extension.toml
      :language: toml
      :lines: 14-20

   ``tier`` says how the file may travel, from its licence: ``A`` for open
   licences such as CC BY and CC0, ``B`` for share-alike and other conditions,
   ``C`` for a file that may not be redistributed, which the package names
   and never carries. ``digest`` is the fingerprint of the file. Compute it
   in a terminal, from the folder of the package:

   .. tab-set::

      .. tab-item:: macOS and Linux

         .. code-block:: sh

            shasum -a 256 vocab/stato-superficie.ttl

      .. tab-item:: Windows (PowerShell)

         .. code-block:: powershell

            (Get-FileHash vocab\stato-superficie.ttl).Hash.ToLower()

   and write the 64 characters after ``sha256:``. Every time you change the
   file, its fingerprint changes: compute it again.

4 · The points of the face
--------------------------

A point placed on a 3D model is an **extractor**: a reading of the model, with
its place. The package says what kind of reading it is, and gives the points
a name and a meaning.

#. Write the vocabulary of the points, ``vocab/punti-volto.ttl``:

   .. literalinclude:: /_includes/extending/volto-esempio/vocab/punti-volto.ttl
      :language: turtle

   *The outer corner of the eye* is one concept: right and left are two
   positions of it, which the set of points says.

#. Write the set of points, ``landmarks/occhi.json``: the points a person
   places in order, each with its concept, its side and its mirror.

   .. literalinclude:: /_includes/extending/volto-esempio/landmarks/occhi.json
      :language: json

#. Declare the kind of reading and the set in ``profile.json``:

   .. literalinclude:: /_includes/extending/volto-esempio/profile.json
      :language: json
      :lines: 33-44

   The **geometry** says *what* a click produces (a point, hence a position
   in metres, on the surface of the model); the vocabulary says *what it
   means*. The id of every type carries the prefix.

#. Carry the second vocabulary in the envelope, as in step 3:

   .. literalinclude:: /_includes/extending/volto-esempio/em-extension.toml
      :language: toml
      :lines: 22-28

5 · The measure computed from the points
----------------------------------------

The width between the eyes is a value of the package, a **quale** with its
unit, and a **combiner** computes it from two placed points with an
operation the core already knows, here ``distance``.

.. literalinclude:: /_includes/extending/volto-esempio/profile.json
   :language: json
   :lines: 27-31

.. literalinclude:: /_includes/extending/volto-esempio/profile.json
   :language: json
   :lines: 46-52

The operations form a closed set (distance, angle, ratio, mean, area of a
polygon, difference of elevation, angle between planes, symmetry index): the
data say *which* computation, never *how*, so no code travels in them. The
value the combiner writes keeps its whole chain: property, combiner, the two
points, the model they were placed on.

6 · A colour scheme
-------------------

A colour scheme lets the Space and the Matrix colour the units by the state
of their surface. Its keys are the **addresses of the concepts**, not their
labels, so the scheme holds in every language.

#. Write ``colors/stato-superficie.emc``:

   .. literalinclude:: /_includes/extending/volto-esempio/colors/stato-superficie.emc
      :language: json

#. Declare it in ``profile.json``:

   .. literalinclude:: /_includes/extending/volto-esempio/profile.json
      :language: json
      :lines: 54-57

7 · A recording sheet
---------------------

A package does not invent a format for sheets: it carries a definition of
`stratigraph-templates <https://github.com/StratiGraph-ECCCH/stratigraph-templates>`__,
whose fields are bound to the properties and vocabularies of the package,
and its compiled form, which EMStudio draws.

#. Write ``forms/vlt-scheda-volto/template.yaml``:

   .. literalinclude:: /_includes/extending/volto-esempio/forms/vlt-scheda-volto/template.yaml
      :language: yaml

   The vocabulary carried by the package is named ``<prefix>:<last part of
   its address>``, here ``vlt:stato-superficie``. Each field says its label
   in both languages, its type, and what it is in the graph (``graph``).

#. Declare the sheet in ``profile.json``, without its ``digest`` for now:

   .. code-block:: json

      "forms": [
        {"id": "vlt-scheda-volto",
         "source": "forms/vlt-scheda-volto/template.yaml",
         "compiled": "forms/vlt-scheda-volto/0.1.0.json"}
      ],

#. Compile it. The compiler is part of stratigraph-templates; install it once
   in the environment of :ref:`extending`, from a copy of its repository:

   .. code-block:: sh

      git clone https://github.com/StratiGraph-ECCCH/stratigraph-templates
      ~/em-packages-venv/bin/pip install -e stratigraph-templates

   then, from the folder that contains ``volto-esempio``:

   .. code-block:: sh

      ~/em-packages-venv/bin/stratigraph-templates --snapshot package-build volto-esempio

   It writes ``forms/vlt-scheda-volto/0.1.0.json`` and adds its ``digest`` to
   ``profile.json`` (it rewrites the file with its own indentation; the
   content stays yours). The compiler checks the package first: when it
   stops, it says which file to correct.

8 · A study that uses the package
---------------------------------

A package carries at least one example document: a small study that
declares the package in its header and uses one of its values.

#. Write ``examples/volto.em.json``:

   .. literalinclude:: /_includes/extending/volto-esempio/examples/volto.em.json
      :language: json

   The value of a controlled field is double: the address of the concept and
   the label written when it was entered, with its language. A computer that
   does not have the package still reads *original surface*.

#. Name it in ``profile.json``, as the last block:

   .. literalinclude:: /_includes/extending/volto-esempio/profile.json
      :language: json
      :lines: 66-67

9 · Check the package
---------------------

Ask the validator, from the folder that contains ``volto-esempio``:

.. code-block:: sh

   ~/em-packages-venv/bin/python -m s3dgraphy.extensions validate volto-esempio

When everything holds, it answers with one line that begins with ``OK``.
Otherwise it lists each problem, with the file and the key where it found
it: an **error** must be corrected, a **warning** is advice. Add
``--lang it`` to read the sentences in Italian. :doc:`validator` lists them
all.

10 · Install it in EMStudio
---------------------------

#. Open ``Settings… ▸ Extensions`` and press **Install from a folder…**.
   Choose the folder ``volto-esempio``.
#. EMStudio reads the folder, writes nothing yet, and opens
   **Install an extension**. The panel **Data** lists the two vocabularies,
   each with its licence and tier, and what the package adds: one property,
   one extractor, one set of canonical points, one combiner, one sheet, one
   colour scheme. It ends with **No code: read by every tool**.

   .. figure:: /_static/screens/extending/install-data-package.png
      :alt: The window Install an extension for the package A face and its measures (EXAMPLE) 0.1.0, from disk: the panel Data with its two vocabularies in tier A, what the package adds, and the line No code: read by every tool.

      The confirmation of a package of data only: no question of trust.

#. Press **Install**. The package appears in the list as **ready**, with
   its vocabularies, its colour scheme and its sheet.

11 · See it at work
-------------------

#. Open the example study, ``examples/volto.em.json``, with ``File ▸ Open…``.
   EMStudio reads its header and finds the package installed here.
#. Select ``US1``: the **Inspector** shows the property
   **State of the surface** with the label of its concept, in the language of
   the interface.
#. In ``Settings… ▸ Extensions``, the opened row of the package offers
   **Into the file** beside the colour scheme: the scheme is copied into the study, and the
   **Colours** window lists it (see :doc:`/how-to/space/colours-and-legend`).
#. The **Sheets** workspace offers the sheet *Sheet of a carved face*,
   with its fields bound to the graph (see
   :doc:`/how-to/sheets/fill-the-recording-sheet`).
#. When a study has the 3D model of a face as a document, the
   **Viewer & card** shows the tools of the package beside its own: the set
   *Points of the eyes* is placed point by point, and once the two corners of
   the eyes are placed the width between them is computed and becomes a
   property of the unit (see
   :doc:`/how-to/extensions/install-packages-and-plugins`, *Place a package's
   points on a model*).

12 · Change it and try again
----------------------------

A version, once installed, is a promise: **the same id and version with
another content is refused**, so that a study never meets two different
packages under one name. While you are still drafting:

- in ``Settings… ▸ Extensions``, open its row and press **Remove the package**, then
  install the folder again; or
- raise the last number of the version (``0.1.0`` → ``0.1.1``), in the
  envelope and in ``profile.json``, and install again.

When the package is ready to leave your computer, :doc:`publish` tells how,
and :doc:`new-version` how to change it afterwards.

What you have learnt
--------------------

A package of data is a folder of text: an envelope that says who it is and
what it carries, a manifest that says what it adds to the language (always
with its prefix, always in every language it declares), vocabularies with
their versions and fingerprints, and the files that the tools read as they
are. The next tutorial, :doc:`python-command`, adds code to the same package.
