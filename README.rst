EMStudio — User Documentation
=============================

User manual for **EMStudio**, the standalone editor of the Extended Matrix (EM)
language, part of the `Extended Matrix Framework
<https://www.extendedmatrix.org/discover/emf>`_.

The manual follows the `Diátaxis <https://diataxis.fr>`_ system — the same
structure used by the *3D Survey Collection* and *EM-blender-tools* manuals:

- **Tutorial** — learning-oriented, a guided first contact;
- **How-to** — task-oriented recipes grouped by goal;
- **Reference** — information-oriented, tab-by-tab and window-by-window;
- **Explanation** — understanding-oriented, the concepts and the design.

Built with `Sphinx <https://www.sphinx-doc.org>`_ and the Read the Docs theme.

Build locally
-------------

.. code-block:: bash

   python3 -m venv .venv
   .venv/bin/pip install -r docs/requirements.txt
   .venv/bin/sphinx-build -W --keep-going -b html docs docs/_build/html
   # open docs/_build/html/index.html

The screenshots are taken from the application by ``docs/_tools/screenshots.mjs``
and live under ``docs/_static/screens/`` (``docs/_tools/README.md`` tells how).

Languages
---------

English is the source. The manual is translated into the languages of the
EMStudio interface (Italian, German, Greek, Hebrew, Spanish, Polish, Romanian,
French) through gettext catalogues in ``docs/locale/``; Italian is complete.
`docs/translating.rst <docs/translating.rst>`_ tells how a language is added,
updated, built and published.

.. code-block:: bash

   DOCS_LANGUAGE=it .venv/bin/sphinx-build -b html docs docs/_build/html-it

Authored by Emanuel Demetrescu, CNR-ISPC.

.. documentation-map:start

Where the documentation lives
-----------------------------

Every tool of the two families keeps its manual beside its code, and publishes it at one of the two addresses below. A manual is changed in the repository of its own tool, never here.

.. list-table::
   :header-rows: 1
   :widths: 26 26 26 22

   * - Tool
     - Code
     - Manual
     - Published at
   * - **Extended Matrix**
     -
     -
     -
   * - Extended Matrix (the language)
     - `zalmoxes-laran/ExtendedMatrix <https://github.com/zalmoxes-laran/ExtendedMatrix>`_
     - `zalmoxes-laran/ExtendedMatrix-doc <https://github.com/zalmoxes-laran/ExtendedMatrix-doc>`_
     - https://docs.extendedmatrix.org/en/1.5/
   * - EMStudio (editor)
     - `ExtendedMatrix/EMStudio <https://github.com/ExtendedMatrix/EMStudio>`_
     - `ExtendedMatrix/EMStudio-doc <https://github.com/ExtendedMatrix/EMStudio-doc>`_
     - https://docs.extendedmatrix.org/projects/emstudio-doc/en/1.6/
   * - EM Tools (Blender add-on)
     - `zalmoxes-laran/EM-blender-tools <https://github.com/zalmoxes-laran/EM-blender-tools>`_
     - `zalmoxes-laran/EM-blender-tools-doc <https://github.com/zalmoxes-laran/EM-blender-tools-doc>`_
     - https://docs.extendedmatrix.org/projects/EM-tools/en/1.5/
   * - s3Dgraphy (library)
     - `ExtendedMatrix/s3Dgraphy <https://github.com/ExtendedMatrix/s3Dgraphy>`_
     - same repository, ``docs/``
     - https://docs.extendedmatrix.org/projects/s3dgraphy/en/v1.5/
   * - 3D Survey Collection
     - `zalmoxes-laran/3D-survey-collection <https://github.com/zalmoxes-laran/3D-survey-collection>`_
     - `zalmoxes-laran/3D-survey-collection-doc <https://github.com/zalmoxes-laran/3D-survey-collection-doc>`_
     - https://docs.extendedmatrix.org/projects/3DSC/en/1.7.0/
   * - Heriverse (web runtime)
     - `StratiGraph-ECCCH/Heriverse <https://github.com/StratiGraph-ECCCH/Heriverse>`_
     - `StratiGraph-ECCCH/Heriverse-doc <https://github.com/StratiGraph-ECCCH/Heriverse-doc>`_
     - https://docs.extendedmatrix.org/projects/heriverse/en/1.5/
   * - **StratiGraph**
     -
     -
     -
   * - The node, and its catalogue
     - `StratiGraph-ECCCH/stratigraph-server <https://github.com/StratiGraph-ECCCH/stratigraph-server>`_
     - same repository, ``docs/``
     - https://docs.stratigraph-eccch.eu/projects/node/en/latest/
   * - StratiField (field assistant)
     - `StratiGraph-ECCCH/stratigraph-stratifield <https://github.com/StratiGraph-ECCCH/stratigraph-stratifield>`_
     - same repository, ``docs/``
     - https://docs.stratigraph-eccch.eu/projects/field/en/latest/
   * - Recording templates
     - `StratiGraph-ECCCH/stratigraph-templates <https://github.com/StratiGraph-ECCCH/stratigraph-templates>`_
     - same repository, ``docs/``
     - https://docs.stratigraph-eccch.eu/projects/templates/en/v0.1.0/
   * - The welcome page of the manuals
     - —
     - `StratiGraph-ECCCH/stratigraph-docs <https://github.com/StratiGraph-ECCCH/stratigraph-docs>`_
     - https://docs.stratigraph-eccch.eu
   * - The StratiGraph Academy
     - —
     - `StratiGraph-ECCCH/stratigraph-academy <https://github.com/StratiGraph-ECCCH/stratigraph-academy>`_
     - https://academy.stratigraph-eccch.eu

.. documentation-map:end
