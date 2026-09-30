EMStudio in the Extended Matrix Framework
=========================================

EMStudio does not try to be every tool. It is the **hub** other software plugs into,
the editor that *owns* the EM record while the rest of the ecosystem reads and writes
the same ``em.json`` and the same shared library.

The shared library
------------------

All the Extended Matrix tools consume **s3Dgraphy**, the reference implementation of
the EM language. Because they share it, they speak the same EM: EMStudio, the Blender
tools, Heriverse and the others all read the same nodes, edges and datamodel. A
change to the language happens once, in the library, and propagates.

How the change reaches EMStudio
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

"Propagates" is a step someone runs. The frontend is a browser application and
cannot import the Python library, so it keeps a **vendored copy** of the datamodel
in ``frontend/src/assets/``:

- the datamodel files (``s3Dgraphy_node_datamodel.json``,
  ``s3Dgraphy_connections_datamodel.json``, ``em_qualia_types.json``);
- the visual rules and the generated class registry (``em_visual_rules.json``,
  ``node_registry.generated.json``);
- the translations (``datamodel_translations.json``);
- the 2D icons and DTC glyphs.

After a datamodel change in s3Dgraphy, refresh the copy from the EMStudio
repository, then review and commit the diff:

.. code-block:: bash

   ./em.sh sync                              # auto-detect s3Dgraphy
   frontend/scripts/sync-datamodels.sh       # the same script, called directly

Never edit the copies by hand. The script also writes the visual rules for the
Rust core (``crates/em-core/assets/em_visual_rules.core.json``, without the glyph
paths), and ``cargo test -p em-core --test visual_rules_core`` checks that the two
copies agree. From the s3Dgraphy side, ``python -m s3dgraphy.tools.consumer_drift
--check`` fails when EMStudio's connections datamodel is behind the library.

EMStudio's Python sidecar does not use the vendored copy. It installs s3dgraphy
at the version pinned in ``tools/requirements.txt``, so it moves only when that
pin moves.

The whole chain, from the datamodel JSON to every tool, is documented once in the
s3Dgraphy manual: `Datamodel propagation
<https://docs.extendedmatrix.org/projects/s3dgraphy/en/v1.6/DATAMODEL_PROPAGATION.html>`__.

Connectors: one contract, many tools
------------------------------------

Other software connects to EMStudio as a **connector**: an adapter that declares what
it can do and speaks the common wire — ``em.json`` for the graph, a content-addressed
object store for assets, a CRDT for real-time sharing — with every write carrying its
**provenance** (a DTC act, attributed to whoever drives the tool). It is the *same*
contract the field chatbot uses: one interoperability base, many consumers.

A connector declares its **capabilities** — read or write the graph, subscribe to
changes, attach or resolve assets, materialise or publish 3D, ingest a batch, link
selection, presence — and EMStudio composes what is possible from them, refusing
honestly what a tool cannot do (no author, no write).

Sidecar and Hub, and the rendezvous
-----------------------------------

A connector meets EMStudio at a **rendezvous**, and the same connector works at every
rung: **direct** on one machine (a **Sidecar**, no server), a **LAN** server (a **Hub**
on the local network), or a **cloud** server (a **Hub** on the internet). "Standalone,
Sidecar, Hub" are the cells of two independent axes — being in a room, and having a
tool connected — that compose rather than exclude. See
:doc:`rooms-and-collaboration` for the axes and the three layers (document, ephemeral
interaction, presence) that keep one user's click from driving another's screen.

The tools around EMStudio
-------------------------

- **Blender** (EM-blender-tools) — the reference connector: live graph sync,
  materialising 3D from the store, publishing baked geometry back.
- **Heriverse** — dissemination: it reads the published study (graph and 3D) to
  render it online; a consumer connector at the cloud rung.
- **Tropy** — sources and photographs, ingested as documents and images.
- **PyArchInit** — excavation data, live when connected or read as a file when not.
- **Aioli** — image-based annotation and photogrammetry.

Each is a connector on the same contract; adding one is a small adapter, not a change
to EMStudio's core. That is the payoff of a single interoperability base: the
ecosystem grows by connectors, and the provenance of everything that enters through
any of them is complete by construction.
