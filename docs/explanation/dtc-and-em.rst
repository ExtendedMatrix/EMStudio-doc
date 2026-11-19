.. _explanation-dtc-and-em:

DTC and EM, two planes
======================

.. TODO MAN05: touch up; DTC = the life of the digital asset, EM = the interpretation of what it represents. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

Every asset a study uses — a photograph, a scan, a 3D model, a document — came from
somewhere and was made somehow. The **DTC** model records that, so the record can
always answer *where did this come from* and *who says so*.

Three acts
----------

Provenance is built from three kinds of act:

- **Acquisition** — material entered the study. Files dropped in the Documentation
  tab arrive *with* their acquisition; it is the root of a chain.
- **Derivation** — something was made from other material, with a tool (a mesh from
  photographs, a drawing from a scan). A derivation points back at its inputs.
- **Attribution** — who declares the author, licence and embargo of an asset.

Together they form a **corpus**: a forest of chains whose leaves can be shared
between them. It has its own tab (:doc:`../how-to/sources/declare-provenance`) and, in a
room, lives resident in the object store so the rights can be enforced from it.

The attributor is not the author
--------------------------------

Attribution is an **act**, signed by *you* — the **attributor** — at the moment you
perform it. It is distinct from the **author**, who made the thing and may be absent,
historical, or unknown. Each attributed field is three-state: absent, a value, or
explicitly withdrawn. This lets the record say honestly "attributed by X on date Y"
without pretending X authored the asset. It matters most for AI: a machine-proposed
statement is authored by the model and *validated* by a human, and both are recorded
— the question "who made this?" always has an answer.

Rights that bite
----------------

The licence and embargo declared here are **enforced**, not annotated. Resolving an
asset is fail-closed: if the graph is silent it serves; under embargo it refuses with
the date (to anyone below editor); if the graph is unreadable it refuses rather than
risk leaking bytes. The rule is the same whether the image is fetched by the viewer,
by IIIF, or by a connector.

A nested stack
--------------

The DTC (documentation) sits under the Extended Matrix, which sits under the
Landscape; each level is the transformation-and-reasoning about the level below.
Documentation is where the material and its provenance live; the matrix is the
interpretation; the landscape composes sites. See
:doc:`place-in-the-framework`.
