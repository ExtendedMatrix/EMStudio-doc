# Configuration file for the Sphinx documentation builder.

# -- Project information

project = 'EMStudio'
copyright = '2026, Emanuel Demetrescu'
author = 'Emanuel Demetrescu'

release = '1.6'
version = '1.6.0-dev.10'  # deve seguire frontend/package.json di EMStudio

# -- General configuration

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'sphinx.ext.mathjax',
]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# The user manual is written in English (the application's default language).
language = 'en'

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
