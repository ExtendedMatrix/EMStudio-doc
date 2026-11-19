Welcome to the documentation page of EMStudio
=============================================================

**EMStudio** is the open-source editor of the **Extended Matrix (EM)**, the
language with which an archaeologist records a stratigraphic sequence, the
sources behind every interpretation, and the reconstructions built on them. In
EMStudio you draw and check the matrix, bring your files in as documents, say
where every file comes from, place the study in space and in time, fill its
recording sheets, and tell it as a story whose figures are the record itself.

EMStudio is a component of the `Extended Matrix Framework
<https://www.extendedmatrix.org/discover/emf>`_, an Open Source and Open Science
project developed to manage, visualize, represent and share the data and paradata
associated with the documentation and the reconstruction of an archaeological
context, an object, or a collection. EMStudio shares the s3Dgraphy library with
the other tools of the framework, works live with
`EM Tools <https://github.com/zalmoxes-laran/EM-blender-tools>`_ in Blender, and
prepares the studies that a StratiGraph node keeps and
`Heriverse <https://www.heriverse.org>`_ shows.

The work is organised in six workspaces, each answering one question about the
study:

- **Stratigraphy**: what is there, in what order, and does it hold?
- **Sources**: where does this datum come from?
- **Archive**: which files do I have, and what became a document?
- **Narrative**: how do I tell it, and what does it rest on?
- **Space**: where is it, and what shape does it have in each epoch?
- **Sheets**: what does the recording sheet say of this unit?

EMStudio runs as a desktop application on macOS, Windows and Linux, and as a web
page served by a StratiGraph node. This manual describes both: where a step
differs, the page shows a tab for each.

EMStudio has been developed by E. Demetrescu at CNR-ISPC (Rome, former CNR-ITABC).

.. admonition:: Remember

   This documentation is under continuous development, and this version
   describes EMStudio |version|. Where a picture and the text disagree,
   trust the text: it is checked against the program.

.. toctree::
   :hidden:
   :maxdepth: 1

   tutorial/index
   how-to/index
   reference/index
   explanation/index

New to EMStudio?
----------------

Start with the :ref:`tutorial`: get EMStudio for the desktop or open it on the
web, walk through the six workspaces on the study of Templu Mare, make a first
study, and bring your first files in as documents.

Looking for a specific task?
----------------------------

Browse the :ref:`how-to` recipes, grouped by workspace: files and projects,
bringing material in, stratigraphy, sources, space, sheets, archive, narrative,
rooms, and Blender and extensions.

Need the details of a window or a menu?
---------------------------------------

Consult the :ref:`reference`: the workspaces, the windows, the menus and their
shortcuts, the settings, the Inspector, the differences between desktop and web,
the EM legend, the ``em.json`` file, the export formats, where EMStudio keeps
its files, and the changelog.

Want to understand the design?
------------------------------

Read the :ref:`explanation`: what EMStudio is and where it sits in the
framework, why the workspaces are questions, the three verbs *open*, *enter* and
*create*, the two tiers of the record, the two planes of DTC and EM, the
narrative as a reading of the graph, extensions and trust, and vocabularies.

Choose your path
----------------

.. admonition:: I document and interpret a site
   :class: tip

   Begin with the formal language at `the EM language docs
   <https://docs.extendedmatrix.org>`__, then follow :doc:`tutorial/first-study`
   and :doc:`how-to/stratigraphy/add-and-connect-units`. Most of the work happens
   in the **Stratigraphy** and **Sources** workspaces.

.. admonition:: I work on a project with others
   :class: tip

   Sign in to your StratiGraph node with :doc:`how-to/rooms/sign-in`, then
   :doc:`how-to/rooms/create-a-room` or
   :doc:`how-to/rooms/enter-and-share-a-room`.
   :doc:`explanation/open-enter-create` explains where your work lives.

.. admonition:: I write and publish the story
   :class: tip

   Go to :doc:`how-to/narrative/write-the-narrative` and
   :doc:`how-to/narrative/export-the-narrative`. The **Narrative** workspace is
   where the graph becomes prose, with AI drafts that a person verifies, and the
   **Export ▾** button carries it to HTML, DOCX, LaTeX and Jupyter.

.. admonition:: I want to understand or extend it
   :class: tip

   Read the :ref:`explanation` for the model and the architecture, and
   :doc:`explanation/extensions-and-trust` before installing packages and
   plugins. EMStudio is GPL-3.0; its source lives in the `EMStudio repository
   <https://github.com/ExtendedMatrix/EMStudio>`__ and it uses the shared
   s3Dgraphy library.
