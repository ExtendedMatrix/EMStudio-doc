.. _explanation-place-in-the-framework:

Place in the framework
======================

*EMStudio among the other tools of the Extended Matrix Framework: the library, the node, EM Tools, Heriverse.*

EMStudio is the editor of the Extended Matrix Framework, and it works together
with the other tools of the framework rather than in their place. Each tool does
one part of the work, and all of them read and write the same study.

The shared library: s3Dgraphy
-----------------------------

**s3Dgraphy** is the reference implementation of the EM language: the
definition of every kind of node and relation, the rules that say which relation
may join which nodes, the reading and writing of ``em.json``, the projection to
RDF. EMStudio, EM Tools, the StratiGraph node and StratiField all use it, so
they speak the same EM. A change to the language is made once, in the library,
and reaches every tool.

EMStudio uses the library in two ways. The window you work in carries a copy of
the library's definitions, so that it can draw the matrix and check a relation
at once. The heavier work (the RDF projection, the reading of a table through a
mapping, the chronology, the files on disk) goes to EMStudio's **bridge**, a
small local service that runs the library itself. When a command needs the
bridge and the bridge does not answer, EMStudio says so in the window concerned.

How a change in the library reaches each tool is described once, in the
s3Dgraphy manual: `Datamodel propagation
<https://docs.extendedmatrix.org/projects/s3dgraphy/en/v1.6/DATAMODEL_PROPAGATION.html>`__.

The StratiGraph node
--------------------

A **StratiGraph node** is the server of a project or an institution: a
laboratory, an excavation, a museum. It keeps the work that is shared.

- **Rooms.** A room is a study that lives on the node, where the members of a
  project work together, each with a role (see :doc:`open-enter-create`).
- **The store of files.** The files of a room (photographs, models, documents)
  are kept by the node, each under the fingerprint of its content, with the
  licence and the embargo declared for it.
- **The Catalog.** The studies the node publishes, fixed and citable, with the
  reader page that shows a study's narrative to people who do not use EMStudio.
- **Identity.** The node signs you in through ORCID and knows your role in each
  room.
- **EMStudio as a service.** The node serves EMStudio itself, at the address
  ``/em/studio/`` of the node. The web version is this page: the same program
  as the desktop application, with the node behind it.
- **Plugins of the node.** Code that the node's administrator installed, which
  the node runs for a room in a closed space (see :doc:`extensions-and-trust`).

The desktop application works with a node too: you sign in from the chip at the
top right of the window, and the rooms of the node are then one click away.
Without a node, EMStudio is complete on its own, on the files of your disk.

EM Tools in Blender
-------------------

**EM Tools** is the Blender add-on of the Extended Matrix: the place where the
proxies of the units are modelled, the representation models are prepared and
the reconstruction is built in 3D. EMStudio and EM Tools work together in two
ways.

- **Live.** With the mode **With an app** of the chip's menu, EMStudio and
  Blender share the study as you work: selecting a unit in one selects it in the
  other, and the changes made in Blender reach the graph (see
  :doc:`/how-to/extensions/live-sync-with-em-tools`).
- **By composing a file.** ``File ▸ Compose a .blend from the graph…`` builds a
  Blender file from the study, with the models and proxies the graph names (see
  :doc:`/how-to/extensions/compose-a-blend`).

EM Tools reads the colour schemes kept in the ``em.json``, and it uses the same
vocabularies and extensions installed on the computer.

Heriverse
---------

**Heriverse** is the platform that shows a study online and in immersive
reality. The **Archive** workspace prepares the versions of each model for its
use, among them *Heriverse / web* (see
:doc:`/how-to/archive/consolidate-for-a-target`). The section **Open with…** of
the **Inspector** opens a node's scene in Heriverse when a resource of the study
names one.

Other sources
-------------

Material from other programs enters the study through *Porta dentro*
("bringing files in as documents"), through a table read with a mapping, or,
for Tropy, through **Import from Tropy…** in the menu of the **Shelf** (see
:doc:`/how-to/bring-in/index`). Whatever enters becomes a document of the study,
with its date and its provenance.

Every act signed
----------------

Whatever tool writes into a study, the act carries its author. An edit made in
EMStudio, a change sent from Blender, a command of a plugin, a draft written
with an AI: each is recorded with who made it and, when a program made it, with
the program as well. A study can always answer the question *who said this?*
