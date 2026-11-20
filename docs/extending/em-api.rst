.. _extending-em-api:

The ``em`` API, essentials
==========================

*What a plugin, a script and the console use to read and write a study: the
graph, the writes, the vocabularies, the application, and the context of a
plugin.*

``em`` is the scripting API of the Extended Matrix, part of the s3Dgraphy
library: ``from s3dgraphy import em``. It has two halves. **The graph** —
reading, searching, writing, vocabularies, packages — is the same in
EMStudio, in EM Tools and in a script with no application. **The
application** — selection, views, the Space, commands — is given by the
program that hosts the code, and answers *no application* on the command
line. ``em.help()`` prints what is there; this page lists what a plugin needs
most. The version of the API is ``em.API_VERSION`` (``1.2.0`` in EMStudio
1.6), which ``em_api_min`` in the envelope is read against.

The graph
---------

.. list-table::
   :header-rows: 1
   :widths: 40 60

   * - Call
     - What it gives
   * - ``em.graph``
     - The study open in EMStudio (or by ``em.open`` on the command line), read
       again at every use.
   * - ``em.graph.node(ref)``
     - A node by its id or by its name (an ambiguous name is refused with the
       ids it names). ``em.graph.find(ref)`` gives ``None`` instead of a
       refusal.
   * - ``em.graph.nodes(type=…, name=…, where={quale: value})``
     - The nodes of a type (``US``, ``extractor``, ``document``…), with a name,
       whose properties match (a value or the address of a concept).
   * - ``em.graph.edges(source=…, target=…, type=…)``
     - The edges, filtered.
   * - ``em.graph.chronology(ref=None)``
     - The chronology the core computes, nothing written.

A node (``NodeView``) has ``id``, ``name``, ``type``, ``description``,
``data`` (read only), ``props()``, ``prop(name, default)`` (the value of a
property), ``property(name)``, ``edges(type=…, direction="out"|"in"|"both")``
and ``neighbours(type=…, direction=…)``. A property (``PropertyView``) has
``value``, ``term`` (``{concept, label, lang, vocabulary, version}`` for a
controlled value), ``unit`` and ``provenance`` (the ids it comes from).

Writing
-------

.. code-block:: python

   with em.write("Marked as restoration infill") as tx:
       tx.set_property("US1", "vlt:stato_superficie", concept=INFILL)

One block is **one act**: one step of ``Edit ▸ Undo``, one line in the Log,
and an act that records who wrote it — the person, and the plugin when a
plugin's command wrote it. The block is applied when it ends; an error inside
it applies nothing. There is no other way to change a study: the views of the
graph are read only.

.. list-table::
   :header-rows: 1
   :widths: 46 54

   * - ``tx.…``
     - What it does
   * - ``add_node(node_type, name, id=…, description=…, data=…)``
     - A node of a type the core knows; its id, when not given, follows from
       the act, so a script run twice adds nothing the second time.
   * - ``update(node, field, value)``, ``clear(node, field)``
     - ``name``, ``description``, or ``data.<key>``.
   * - ``add_edge(source, edge_type, target)``, ``remove_edge(…)``, ``remove(node)``
     - Edges of the EM language, checked when the act ends.
   * - ``set_property(unit, quale, value, concept=…, lang=…)``
     - The property of a unit, created when missing; with ``concept``, the
       double value: the address of the concept and its label.
   * - ``add_extractor(kind, on=…, point=…)``, ``start_pose(set, on=…)``, ``compute(combiner_type, on=…)``
     - Extractors, landmark sets and combiners of a package, as the tools of
       the Viewer place and compute them.

``em.write(label, volatile=True)`` writes proposals that are drawn and not
saved (the capability ``ingest-batch``); ``dry_run=True`` makes the act a
proof: what it would write, nothing applied.

Vocabularies and packages
-------------------------

- ``em.vocab.find(uri)`` — a concept installed on this computer, or ``None``;
  ``concept.label(lang)``, ``concept.labels``, ``concept.broader``,
  ``concept.narrower``. ``em.vocab.search(text, lang=…)``,
  ``em.vocab.installed()``.
- ``em.profiles.active()`` — the packages the open study uses;
  ``em.profiles.extractor_type(id)``, ``landmark_set(id)``,
  ``label(type_id, lang)``.

The application
---------------

``em.app.selection()``, ``em.app.select(ids)``, ``em.app.view(name)``,
``em.app.notify(message, level)``, ``em.app.space.camera()``,
``em.app.space.frame(ids)``, ``em.app.space.pick(prompt, primitive)``,
``em.app.commands.run(command_id, **slots)``. ``em.app.available`` is
``False`` with no application. ``em.host.current().language()`` is the
language of the interface.

Events
------

``em.on(event, fn)`` and, in a plugin, ``ctx.on(event, fn)``: ``fn(payload)``
runs after each ``selection-changed``, ``graph-changed``,
``document-opened``, ``document-saved``, ``document-closed`` or
``locale-changed``.

The context of a plugin
-----------------------

``setup(ctx)`` receives the context of the plugin:

.. list-table::
   :header-rows: 1
   :widths: 36 64

   * - ``ctx.…``
     - What it is
   * - ``command(id, fn)``
     - Binds a command declared in the envelope to its function (also as a
       decorator, ``@ctx.command("…")``). A command not declared is refused.
   * - ``on(event, fn)``, ``expose(name, obj)``
     - Listens to an event; makes a function available in the console as
       ``em.ext.<id>.<name>``.
   * - ``file(name, content, mime)``
     - The file an exporter returns.
   * - ``stamp(file, inputs=…, parameters=…, dtc_kind=…, technique=…)``
     - The stamp of a file the plugin made (API 1.2, see
       :doc:`stamp-derived-files`).
   * - ``data_dir``
     - The plugin's own folder, ``~/.s3dgraphy/plugins-data/<id>/``, kept
       across updates.
   * - ``package``
     - The data of the same archive (a mixed package): ``landmark_set(id)``,
       ``extractor_types``, ``combiner_types``, ``qualia_types``,
       ``label(type_id, lang)``; ``None`` for a plugin alone.
   * - ``id``, ``version``, ``host``, ``verified``
     - Who the plugin is, where it runs, whether a review covers it.

``teardown(ctx)``, when the object has it, runs when the plugin is turned off.

Errors
------

A function refuses with ``em.EmError({"en": "…", "it": "…"})``: the command
fails with the sentence in the language of the interface, and EMStudio stays
up. Any other exception is caught and said the same way. A write the contract
refuses raises ``em.Refused``; a feature the host lacks, ``em.NotAvailable``;
a node not found, ``em.NodeNotFound``.

On the command line
-------------------

``em.open(path)`` opens a study, ``em.use(graph, author=…)`` works on a graph
in memory with an author for its writes, ``em.save(path)`` writes it. With
``s3dgraphy.em.plugins``, ``sync(host, dev=True)``, ``invoke(plugin,
command, slots)`` and ``compute(items)`` load and run the plugins as
EMStudio does (see :doc:`test-and-validate`).

See also
--------

- :doc:`/how-to/extensions/python-console`, the same API in the console.
- :doc:`slots`, what a command receives and returns.
