.. _explanation-what-is-emstudio:

What is EMStudio
================

*The editor where an Extended Matrix study is made, read and told.*

EMStudio is the editor of the **Extended Matrix** (EM), the language with which
an archaeologist records a stratigraphic sequence, the sources that support each
statement about it, and the reconstructions built on them. Earlier EM tools
lived inside Blender or yEd. EMStudio is the place where the record itself is
made: it reads and writes the ``em.json`` file, lays out the matrix with its own
engine, and every other tool of the framework reads what it writes.

A study you build, not a file you convert
-----------------------------------------

An EM study is a record you reason with. It holds the stratigraphic units and
their relations, the epochs that order them, the documents and the extractions
that justify every interpretation, the representation models that give them a
shape in space, and the chain of transformations that produced every file.
EMStudio keeps all of this in one study, and every window shows a part of the
same study: a selection made in the matrix is the selection of the 3D scene, of
the recording sheet and of the story.

Six workspaces, six questions
-----------------------------

Across the top of the window run six workspaces: **Stratigraphy**,
**Sources**, **Archive**, **Narrative**, **Space** and **Sheets**. Each one is an
arrangement of windows that answers one question about the study, for example
*where does this datum come from?* or *where is it, and what shape does it have
in each epoch?*. You move between them as the work asks; the study stays the
same. :doc:`workspaces-are-questions` explains the idea.

Three places for a study
------------------------

A study lives in one of three places, and EMStudio names the gesture that reaches
each of them. You *open* a file of yours from the disk; you *enter* a room, where
a study lives on a StratiGraph node and the people of a project work on it
together; you *create* a room, empty or with a file you bring into it. A study
published in a node's Catalog is a third thing again: a citable version that
EMStudio reads, and from which new work starts. :doc:`open-enter-create`
describes the three places and the verbs between them.

Desktop and web
---------------

EMStudio runs as a desktop application on macOS, Windows and Linux, and as a web
page served by a StratiGraph node. The two are one program and this manual
describes them together. Where a step differs, the page shows two tabs,
*Desktop* and *Web*, and :doc:`/reference/desktop-and-web` lists every
difference in one table.

Part of a framework
-------------------

EMStudio is one component of the `Extended Matrix Framework
<https://extendedmatrix.org/about/>`_. It shares the s3Dgraphy library
with the other tools, so that all of them speak the same EM; it works live with
EM Tools in Blender; and the studies it produces are the ones that a
StratiGraph node keeps and Heriverse shows. :doc:`place-in-the-framework` gives
the whole picture. EMStudio is free software under the GPL-3.0 licence.
