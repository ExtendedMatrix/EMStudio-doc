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
