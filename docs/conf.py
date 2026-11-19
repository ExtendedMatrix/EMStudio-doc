# Configuration file for the Sphinx documentation builder.

import os

# -- Project information

project = 'EMStudio'
copyright = '2026, Emanuel Demetrescu'
author = 'Emanuel Demetrescu'

release = '1.6'
# The version described, copied from EMStudio's frontend/package.json (tag v1.6.0-dev.136).
version = '1.6.0-dev.136'

# -- General configuration

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'sphinx.ext.mathjax',
    'sphinx.ext.autosectionlabel',
    'sphinx_design',
]

# Every heading is a target, prefixed by its page: :ref:`reference/menus:File`.
autosectionlabel_prefix_document = True

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# _includes holds examples to copy, reference/_generated the tables written by
# _tools/ (they are included by their pages, never built on their own).
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', '_tools', '_includes',
                    'reference/_generated', 'locale']

# -- Languages
# English is the source; Italian is a gettext translation in
# docs/locale/it/LC_MESSAGES/, one catalogue per page, as in stratigraph-templates.
# On Read the Docs the build language comes from READTHEDOCS_LANGUAGE.
# `sphinx-build -b gettext docs docs/_build/gettext` and
# `sphinx-intl update -p docs/_build/gettext -l it -d docs/locale` refresh it.
language = os.environ.get('READTHEDOCS_LANGUAGE', os.environ.get('DOCS_LANGUAGE', 'en')).split('-')[0]
locale_dirs = ['locale/']
gettext_compact = False                     # one catalogue per page
gettext_uuid = False
gettext_location = False                    # line numbers would churn the catalogue
# The screenshots (docs/_tools/screenshots.mjs) are taken in each language of the
# interface. English is the source, at the path the pages name
# (_static/screens/<section>/<name>); a language's own picture sits in a folder
# of its name beside it (_static/screens/<section>/<lang>/<name>) and is used
# when present; otherwise the English one stays.
figure_language_filename = '{path}{language}/{basename}{ext}'

# -- Options for HTML output

html_theme = 'sphinx_rtd_theme'

# -- Options for EPUB output
epub_show_urls = 'footnote'

# Enable numref (Figure N references)
numfig = True

# -- PDF (LaTeX) cover -------------------------------------------------
# Make explicit that this is the *documentation*, credited to its own
# author (4th tuple field = the name printed on the PDF cover), so it is
# not mistaken for the software's author.
latex_documents = [
    ('index', 'EMStudio.tex',
     f'{project} Documentation',
     'Documentation written by Emanuel Demetrescu',
     'manual'),
]
