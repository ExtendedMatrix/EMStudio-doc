.. _extending-design:

How extensions are designed
===========================

*Why a package has two levels, how it enters the graph without inventing
node types, why every write passes through one contract, and why signatures
and reviews.*

The Extended Matrix is one language shared by many communities. Extensions
exist so that each community can record what is its own **without the
language breaking into dialects**: a study written with a package must stay a
study of the Extended Matrix, readable by whoever does not have the package.
Every choice described here follows from that.

Two levels: data and code
-------------------------

A package carries **data**, **code**, or both, and the line between them is
the line of trust.

**Data** are declarations: vocabularies, properties with their units, kinds
of reading with their geometry, sets of points, combiners over a closed set
of operations, recording sheets, colour schemes. They describe; they do not
run. A tool can read them completely, check them completely, and refuse what
does not hold. This is why a package of data installs without any question:
the worst it can do is describe something badly, and a person can read every
line of it. It is also why the same package serves EMStudio, EM Tools in
Blender and a StratiGraph node: each tool reads the same declarations.

**Code** does what declarations cannot: read a new format, compute outside
the closed set, check a study, show a value where the person works. Code runs
with the powers of whoever runs it, so it comes with a question of trust,
asked once and asked again only when the code asks for more.

The two levels travel in one archive and stay apart: a mixed package keeps its
data and its code in separate folders, the data never contain an executable
file, and a person may always take the data alone. A community can therefore
begin with data only — most needs are met there — and add code later, without
changing what its studies already declare.

The closed sets are part of the same choice. A combiner names an operation
the core knows (a distance, an angle, a ratio, a mean…), never a formula: a
formula in the data would be code in disguise, and would ask for the trust
that data are meant to spare.

Entering the graph without new node types
-----------------------------------------

A package adds **kinds**, not types. A point placed on a face is a core
``extractor`` node that names its kind in ``data.em_kind``
(``vlt:punto_del_volto``); the width computed from two points is a core
property, with its chain to a core ``combiner``; a document of a community is
a core ``document`` with its kind. The stratigraphic unit stays the unit of the
Extended Matrix, with its relations and its propagation, for everybody.

This keeps three promises:

- **a study stays one language**: the Matrix, the chronology, the
  propagation and the export to RDF are computed from core types, the same in
  every study;
- **a study travels**: a tool that does not have the package still draws every
  node, keeps the labels written with the values, and writes back what it
  read. A missing package is never a reason to refuse a file;
- **a package can change** with its own version, curators and pace, without
  touching the version of the core or of the file format.

Node and edge types of a package existed in the first draft of the
specification and are **suspended in EM 1.6**: a type that changes what the
core derives is where the language would split. A need of that kind becomes a
proposal for the core, discussed for everybody.

The prefix is the other half of the same idea. Every term a package adds is
written ``<prefix>:<name>``, so it never collides with the core or with
another package, and a reader always knows whose term it is.

The contract of writes
----------------------

A plugin, a script in the console and EM Tools change a study through **one
door**: ``em.write``. The block becomes a set of changes that passes the
contract of the connectors — the command is declared, its slots are filled,
an author is present, the capability to write was declared, the edges are
those the language allows — and is applied by the program as **one step**,
with its line in the Log and an act that records the person and the plugin.

There is no second channel. The views of the graph a plugin reads are read
only, a command declared to read cannot write, and a write that the contract
refuses leaves the study as it was. So a value written by a plugin can always
be told apart from one written by a person, undone like any other, and read
back in the record of the study, with the plugin's name and version.

Signatures and reviews
----------------------

A package of data asks for no trust; code does, and on a personal computer no
program can shut Python in a cage. Trust is therefore built from what can be
checked, and the rest is left, clearly, to people.

- **A fingerprint** in the index ties every archive to the bytes that were
  published: an archive changed on the way no longer matches and is refused.
- **A signature** says who published those bytes: the holder of a key the
  person chose to trust, a laboratory or the Extended Matrix. It speaks of
  origin and integrity, not of quality.
- **A review** says that a person read the code: the editor, or the curators
  of a package that needs it, for that exact code. Its worth is the worth of
  that reading, and each person decides whose reviews to accept.
- **The question of trust** remains for everything else, and the program asks
  it only when there is something new to ask.

On a StratiGraph node, where code runs on a shared server, the answer is
different: only the administrator installs plugins, and each runs in a closed
space with no network, none of the node's files and a time limit. The program
proves that the closed space holds before turning any plugin on.

See also
--------

- :doc:`/explanation/extensions-and-trust`, the same questions from the side of
  whoever installs.
- `SPEC.md <https://github.com/ExtendedMatrix/em-profiles/blob/main/SPEC.md>`__
  of em-profiles, the contract every tool keeps.
