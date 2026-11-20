# Configuration file for the Sphinx documentation builder.

import os

# -- Project information

project = 'EMStudio'
copyright = '2026, Consiglio Nazionale delle Ricerche (CNR) — Istituto di Scienze del Patrimonio Culturale'
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
# English is the source; every language of the partners (the LOCALES of
# EMStudio's i18n.ts: it, de, el, he, es, pl, ro, fr) is a gettext translation
# in docs/locale/<lang>/LC_MESSAGES/, one catalogue per page, as in
# stratigraph-templates. On Read the Docs each language is a translation project
# and the build language comes from READTHEDOCS_LANGUAGE. docs/translating.rst
# tells how to refresh the catalogues (gettext, sphinx-intl, _tools/ui_terms.py).
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
# Languages written from right to left: the page takes dir="rtl"
# (_templates/layout.html) and the theme's frame is mirrored (_assets/rtl.css).
RTL_LANGUAGES = {'he'}
rtl = language in RTL_LANGUAGES

# -- Options for HTML output

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_assets']
# The foot of every page (_templates/footer.html, from stratigraph-brand): the
# rights, and above them the page of the funding and the reference of
# the Python API (`import em`), which is a site of its own, in English.
PYTHON_API_URL = 'https://docs.extendedmatrix.org/projects/emstudio-python-api/en/latest/'
_FOOT = {
    'en': ('Funding', 'EMStudio Python API'),
    'it': ('Finanziamenti', 'API Python di EMStudio'),
}
_foot = _FOOT.get(language, _FOOT['en'])
html_context = {
    'rtl': rtl,
    'sg_footer_links': [(_foot[0], 'acknowledgements'), (_foot[1], PYTHON_API_URL)],
}

# Il marchio, vendorizzato da `stratigraph-brand` con il suo
# `docs-theme/sync-brand-docs.sh`, come lo vendorizzano le applicazioni: un
# manuale letto in trincea non ha una CDN. Chiaro e scuro seguono
# l'impostazione di sistema di chi legge; i contrasti sono misurati nel
# marchio. Per cambiare un colore si cambia lì, e si ridà il sync.
# EPUB non conosce il tipo di un .woff2 e, con -W, la sua lamentela
# («unknown mimetype … ignoring») ferma la pubblicazione: i caratteri del
# marchio servono alla pagina web, non al libro.
suppress_warnings = ['epub.unknown_project_files']

html_css_files = ['brand/stratigraph-theme.css', 'brand/skins.css', 'brand/sphinx-rtd-bridge.css'] + (['rtl.css'] if rtl else [])
# L'interruttore delle due facce: chiaro, scuro, come il sistema. Senza
# scelta esplicita vale il sistema di chi legge, che è il modo di serie.
html_js_files = ['brand/brand-theme-toggle.js']


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
