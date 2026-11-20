.. _extending-envelope:

The envelope and the manifest
=============================

*The envelope em-extension.toml key by key, with its sections data, code,
requires and build, and the keys of the manifest profile.json.*

An archive has an **envelope** at its root, ``em-extension.toml``, modelled
on the manifest of Blender's extensions. It says who the archive is, which EM
it goes with, what it carries and what it asks. A package with data has a
**manifest**, ``profile.json``, which says what it adds to the language. The
contract behind both is
`SPEC.md <https://github.com/ExtendedMatrix/em-profiles/blob/main/SPEC.md>`__
of em-profiles; the closed sets of values are listed, as the library reads
them, at the end of this page.

The head
--------

.. list-table::
   :header-rows: 1
   :widths: 22 12 66

   * - Key
     - Required
     - What it is
   * - ``schema_version``
     - yes
     - The form of the envelope: ``"1.0.0"``.
   * - ``id``
     - yes
     - The identity of the archive in a repository: 2 to 64 characters,
       lowercase letters, digits, ``.``, ``_`` and ``-``, a letter or a digit
       first. For a package with data it equals ``name`` in ``profile.json``,
       and the folder is named after it.
   * - ``version``
     - yes
     - The version of the archive, *major.minor.patch* (see :doc:`new-version`).
   * - ``name``
     - yes
     - The name shown in the Extensions window.
   * - ``tagline``
     - no
     - One line about it, at most 64 characters, no final full stop (a
       warning otherwise).
   * - ``maintainer``
     - yes
     - Who answers for the archive.
   * - ``license``
     - yes
     - A list of SPDX identifiers, each written ``"SPDX:<id>"``; one per section
       when they differ.
   * - ``em_api_min``, ``em_api_max``
     - ``em_api_min``
     - The versions of the extensions API the archive works with: ``"1.0"``
       for data; ``"1.2"`` for code that stamps its files. A plugin that asks
       for a newer API than the program's is not loaded, and the window says
       why.
   * - ``type``
     - no
     - ``community-package``, ``plugin`` or ``mixed``; it must agree with the
       sections. ``build`` writes it when it is missing (a warning).

An archive has at least one of the sections ``[data]`` and ``[code]``.

``[data]``
----------

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Key
     - What it is
   * - ``profile``
     - The manifest, ``"profile.json"``.
   * - ``version``
     - The version of the data; by default the archive's. It equals
       ``version`` in ``profile.json``.
   * - ``root``
     - Where the data live: ``"."`` when the archive has data only, a folder of
       their own (``"data/"``) when it has code too. The two roots never
       overlap.
   * - ``[[data.vocabularies]]``
     - One entry per vocabulary file the archive carries: ``path``,
       ``scheme`` (the IRI of the ``skos:ConceptScheme`` in the file),
       ``version`` (its ``owl:versionInfo``), ``license``, ``tier``
       (``fascia`` is read as the same key) and ``digest``
       (``"sha256:…"``, the fingerprint of the file). A vocabulary of tier
       ``C`` has no ``path``: it has ``fetch = { url, digest, terms }``,
       and the person downloads it.

**No executable file lives under the data root** (the extensions are listed
at the end of the page); outside the roots only the envelope, ``LICENSE*``,
``README*`` and ``CHANGELOG.md`` may stand. This is what lets the data be
installed without the question of trust.

``[code]``
----------

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Key
     - What it is
   * - ``version``
     - The version of the code; by default the archive's.
   * - ``root``
     - Where the code lives: ``"."`` for a plugin alone, ``"code/"`` in a
       mixed package.
   * - ``license``
     - The licence of the code, ``"SPDX:<id>"``.
   * - ``entry``
     - ``"<module>:<object>"``: the module imported and the object whose
       ``setup(ctx)`` is called (a function ``setup`` may be named directly).
   * - ``hosts``
     - Where the code runs: a list of ``emstudio``, ``blender``, ``server``.
   * - ``platforms``
     - The platforms the archive has wheels for; needed when a wheel is not
       pure Python.
   * - ``wheels``
     - The paths, under the code root, of the wheels of its dependencies.
       Nothing is installed with ``pip``.
   * - ``[code.permissions]``
     - ``files``, ``network``, ``clipboard``, ``processes``: each with the
       reason shown before installing, at most 64 characters, no final full
       stop.
   * - ``[code.descriptor]``
     - ``capabilities`` (``read-graph`` by default; ``write-graph`` to
       write in a study), ``host`` (``emstudio-side``), ``transport``
       (``["direct"]``), ``provenance`` (``derivation``). For a plugin of
       EMStudio, ``capabilities`` is the key that matters.
   * - ``[[code.commands]]``
     - The commands, below.
   * - ``[[code.panels]]``
     - The declarative panels, below.

A command, ``[[code.commands]]``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Key
     - What it is
   * - ``id``
     - Unique in the plugin: letters, digits, ``_``, ``.`` and ``-``, a letter
       first. ``ctx.command(id, function)`` binds it.
   * - ``label``
     - A text, or one per language: ``{ en = "…", it = "…" }``.
   * - ``in``
     - The slots where it appears, ``["menu.tools@1"]`` (see :doc:`slots`).
       Empty: the command exists, and is called from a panel or the console.
   * - ``writes``
     - ``true`` when it changes the study. By default ``false`` in a slot that
       only shows (a check, a section, a column, the status bar, a layer),
       ``true`` elsewhere.
   * - ``slots``
     - What it receives: ``[{ name = "…", kind = "…", required = false }]``.
       The kinds are listed at the end of the page; a slot is required unless
       ``required = false``.
   * - ``when``
     - When it is offered, in a small closed grammar: ``document`` (a study is
       open), ``selection:none|any|one|many``, ``selection:US|USV`` (every
       selected node of these types), joined by ``and``. Empty: always.
   * - ``accept``, ``claims``, ``folders``, ``panel``
     - For a reader of *Porta dentro…* (``door.reader@2``), see :doc:`slots`.
   * - ``primitive``, ``icon``
     - For a tool of the Space (``space.tool@1``): what the person places,
       and one or two characters drawn on the button.
   * - ``view``
     - For a column of the Tabular window: the sheet it joins.
   * - ``layer``
     - For a layer of the Space: ``raster_stack``.
   * - ``buttons``
     - For a section of the Inspector: ids of commands of the same plugin,
       drawn as buttons under the rows.

A panel, ``[[code.panels]]``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A panel is a few fields drawn by EMStudio, never HTML: ``id``, ``label``,
``place`` (where it opens the first time), ``when``, and ``[[code.panels.fields]]``.
A field has a ``kind``: ``text``, ``number`` (with ``unit``, ``min``,
``max``, ``step``), ``choice`` (with ``options``, each ``{ value, label }``),
``check``, ``node`` — what the person fills, with a ``name``: the slot of the
same name of the command a button runs — or ``value`` (a read-only command
whose answer is shown) and ``button`` (a command run with the fields), both
with ``command``. Every field may have ``label`` and ``help``.

``[requires]``
--------------

.. code-block:: toml

   [requires]
   core         = { em = ">=1.6,<1.7" }
   extensions   = [{ id = "other-package", version = "^1.0", part = "data" },
                   { id = "a-reader", version = "^0.3", part = "code", optional = true }]
   vocabularies = [{ scheme = "https://w3id.org/extendedmatrix/vocab/…/", version = "^1.0" }]

- Version ranges are those of npm and Blender: ``^``, ``~``, ``>=``/``<``,
  ``=``, ``*``.
- ``part`` says which section of the other archive is needed: ``data``,
  ``code`` or ``any``. Data never require code as a must: a dependency with
  ``part = "code"`` is always ``optional = true``.
- A package whose mandatory dependency is missing is installed all the same,
  shown as incomplete, and its data stay readable. A repository installs the
  dependencies first.

``[build]``
-----------

``paths`` (the files and folders to put in the archive) and
``paths_exclude_pattern`` (what to leave out; ``__pycache__/`` and ``*.pyc``
by default), as in Blender.

The manifest, ``profile.json``
------------------------------

.. list-table::
   :header-rows: 1
   :widths: 24 76

   * - Key
     - What it is
   * - ``profile_format``
     - ``"0.2"``.
   * - ``iri``, ``name``, ``prefix``, ``version``
     - The identity: the address, the name (= the id), the prefix of every
       type (2 to 16 lowercase letters or digits, a letter first), the
       version of the data.
   * - ``lifecycle``
     - ``proposed``, ``stable`` or ``deprecated``.
   * - ``title``, ``description``
     - Texts per language.
   * - ``languages``, ``unverified_languages``
     - The languages of the package (a label is required in each, for every
       type), and those no person has reviewed yet.
   * - ``curators``, ``license``, ``parts``
     - Who answers for it; the licence of the content, an SPDX identifier;
       another licence for a file or a folder (``"examples/": {"license":
       "CC0-1.0"}``).
   * - ``is_profile_of``
     - The versions of the em.json format and of the EM core it was written for.
   * - ``datamodel_checked``
     - The versions of the core's datamodels it was checked against; never a
       reason to refuse.
   * - ``requires``
     - Copied from the envelope's ``[requires]`` by ``build``.
   * - ``qualia_vocabularies``
     - A property bound to a SKOS scheme: ``property_type``, ``label``,
       ``scheme``, ``version``.
   * - ``qualia``
     - The package's own properties: ``id``, ``label``, ``data_type``
       (``float``, ``integer``, ``string``, ``boolean``, ``date``,
       ``controlled_vocabulary``), ``units``, ``mapping``.
   * - ``extractor_types``
     - Kinds of reading: ``id``, ``specializes`` (``extractor``), ``label``,
       ``geometry`` (``primitive``, ``produces``, ``unit``, ``vertices``,
       ``snap``: ``surface``/``vertex``/``free``, ``frame``:
       ``model``/``graph``), ``produces``, ``source_documents``,
       ``input_formats``.
   * - ``landmark_sets``
     - Sets of points: ``id``, ``path`` (``landmarks/<id>.json``),
       ``extractor_type``, ``label``. The file lists ``points``, each with
       ``id``, ``concept``, ``required``, ``side``, ``mirror``, ``ref``.
   * - ``combiner_types``
     - Computations: ``id``, ``label``, ``operation``, ``inputs``
       (``{"landmark": "<set>/<point>"}`` or ``{"quale": "…"}``),
       ``produces``, ``unit``.
   * - ``document_types``, ``file_types``
     - Documents of the community (``specializes``: ``document``,
       ``content_nature``, ``formats``) and file types with their ``reader``
       (``builtin:<id>`` or ``plugin:<id>``).
   * - ``forms``
     - Recording sheets: ``id``, ``source`` (``template.yaml``), ``compiled``,
       ``digest``.
   * - ``color_schemes``, ``visual_rules``
     - Colour schemes (``id``, ``path`` of an ``.emc``, ``property``,
       ``label``) and how the package's types are drawn.
   * - ``i18n``, ``help``, ``examples``
     - Interface strings per language, help pages, and at least one example
       study.
   * - ``node_types``, ``edge_types``
     - Suspended in EM 1.6: accepted with a warning in a ``proposed`` package,
       refused in a ``stable`` one (see :doc:`design`).

The closed sets
---------------

.. include:: /reference/_generated/extending-sets.rst
