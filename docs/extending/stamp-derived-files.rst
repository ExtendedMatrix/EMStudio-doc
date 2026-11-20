.. _extending-stamp-derived-files:

Stamp the files your code makes
===============================

*A good practice for code that makes files from other files: one line writes
beside each file the record of how it was made.*

A picture cut from a geophysical slice, a cache, a texture baked on a
surface, a table exported from a study: files like these outlive the session
that made them, and are often found alone, years later. A **stamp** is the
small record written beside such a file, ``<file>.stamp.json``, that says
which software made it, with which parameters, from which inputs, and which
bytes it produced. Whoever finds the file can tell what it comes from and
check it.

Stamping is **encouraged, never required**. A package whose code writes no
stamp installs and works exactly as one that does; the validator says it at
most as a piece of advice (``code_stamp_advice``), never as an error.

When to stamp
-------------

Every time the code **makes a file from other files**: a converted or
resampled picture, a cache, a baked drape, a glb or a 3tz, an export. Not for
a file it only reads, and not for the study itself: the ``em.json`` keeps its
own history.

Before you start
----------------

- A package with code (see :doc:`python-command`).
- Declare in the envelope ``em_api_min = "1.2"``: the stamp arrived with
  version 1.2 of the ``em`` API.

Stamp a file from a command
---------------------------

The example writes a table of the widths between the eyes of every unit and
stamps it:

.. literalinclude:: /_includes/extending/snippets/export_widths.py
   :language: python

#. Write the file in the plugin's **own folder**, ``ctx.data_dir``
   (``~/.s3dgraphy/plugins-data/<id>/``), never beside the sources, which may
   be read-only or shared.
#. Call ``ctx.stamp`` with the file and what it was made from:

   - ``inputs`` — what the file was made from, **by identity**: a path of a
     file (its fingerprint is computed; the path is never written in the
     stamp), or a mapping with the ``resource_id`` of a resource of the graph
     and, for an input with no bytes, its ``kind``;
   - ``parameters`` — what a person would need to make the same file again;
   - ``dtc_kind`` — the kind of step, from the vocabulary of the DTC:
     ``format_conversion``, ``transformation``, ``georeferencing``,
     ``export``, ``lod_generation``…;
   - ``technique`` — the step in your own words.

#. ``ctx.stamp`` writes ``widths.csv.stamp.json`` beside the file and returns
   the stamp. The plugin is named as the agent, with its id and version,
   followed by the library.

The command is declared like any other, with the permission that says why
it writes files:

.. code-block:: toml

   [code.permissions]
   files = "Writes the table of the widths in its own folder"

   [[code.commands]]
   id = "vlt.export"
   label = { en = "Export the widths between the eyes", it = "Esporta le larghezze tra gli occhi" }
   in = ["menu.tools@1"]
   writes = false

``writes = false`` refers to the **study**: the command writes a file on the
computer, and nothing in the graph.

What the stamp says
-------------------

.. code-block:: json

   {
     "stamp": 1,
     "self": {"resource_id": "res:…", "digest": "sha256:…", "media_type": "text/csv", "format": "csv", "…": "…"},
     "from": [{"resource_id": "volto", "kind": "graph"}],
     "how": {"dtc_kind": "export", "technique": "table of the widths between the eyes",
             "parameters": {"quale": "vlt:larghezza_occhi", "unit": "m"},
             "software": [{"name": "A face and its measures (EXAMPLE)", "id": "volto-esempio", "version": "0.1.0"},
                          {"name": "s3dgraphy", "version": "…"}]},
     "by": {"at": "2026-11-20T06:03:18Z"}
   }

- ``self`` is the file, by its fingerprint: the same bytes made twice are the
  same artifact.
- ``from`` cites the inputs. When an input is the file of a resource of the
  graph, the stamp names that resource, so the chain reads backwards:
  acquisition → resource → derived file.
- ``by`` has no person: the agent is the software named in ``how``.

From a script
-------------

Outside a plugin, ``em.stamp(file, inputs=[…], …)`` does the same; inside a
plugin's command it finds the calling plugin by itself.

What you get
------------

Files that say where they come from: a stamp beside each file the code makes,
in the format of `dtcstamp <https://github.com/zalmoxes-laran/dtcstamp>`__,
which s3Dgraphy can merge into the DTC of a study.

See also
--------

- `SPEC.md §6.7 <https://github.com/ExtendedMatrix/em-profiles/blob/main/SPEC.md>`__,
  the good practice in the specification.
- :doc:`em-api`, ``ctx.stamp`` and ``em.stamp``.
- :doc:`/reference/geofisica`, a package that stamps the pictures of its slices.
