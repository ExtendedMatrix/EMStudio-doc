.. _extending-slots:

Slots
=====

*Where a command of a plugin appears, what EMStudio gives it, and what it
gives back.*

A **slot** is a place of the interface, or of the work, where EMStudio
accepts something from a plugin. It has a name and a version,
``context.node@1``, a promise the program keeps from one release to the next.
A command lists its slots in ``in``; a slot with a version higher than the
program knows turns that entry off, not the plugin, and the Extensions window
says so.

The slots of this version
-------------------------

.. include:: /reference/_generated/extending-slots.rst

What a command receives
-----------------------

A command is a function ``fn(slots)``. ``slots`` is a dictionary whose keys are
the ``name`` of each slot declared in ``[[code.commands]]``; EMStudio fills
them by their ``kind``, and **never invents a value**:

.. list-table::
   :header-rows: 1
   :widths: 16 84

   * - Kind
     - What EMStudio puts there
   * - ``id``
     - A selected node: the first ``id`` slot gets the first selected node,
       the second the second. In a section of the Inspector, the node shown.
   * - ``ids``
     - All the selected nodes, a list; in a column of the Tabular window, the
       rows of the sheet.
   * - ``path``
     - The file or folder of a reader, an import or a panel's field; for a
       command of a menu whose ``path`` is required, EMStudio asks for a file
       first (desktop only).
   * - ``geometry``
     - What the person placed with a tool of the Space: the ``primitive``,
       its ``vertices`` in the frame of the model, the node it was placed
       ``on``, the ``frame``.
   * - ``string``, ``number``, ``bool``
     - What the person wrote in the field of a panel of the same ``name``.
       Never guessed: a required one that is missing refuses the command, with
       its name.

What a command gives back
-------------------------

.. list-table::
   :header-rows: 1
   :widths: 24 76

   * - Slot
     - What the function returns, and what EMStudio does with it
   * - ``menu.tools@1``, ``context.node@1``
     - Anything: a text is shown in a message, other values as JSON. A
       command that wrote says how many steps it wrote.
   * - ``menu.file.export@1``, ``export.narrative@1``
     - A file, ``ctx.file(name, content, mime)``: EMStudio saves it where the
       person chooses (desktop) or downloads it (web).
   * - ``menu.file.import@1``, ``door.reader@2``
     - What the reading wrote, inside ``em.write``. A reader declares
       ``accept`` (the extensions it takes, those EMStudio does not know),
       ``claims`` (extensions EMStudio knows, offered as *Read as: …* beside
       its own reading), ``folders = true`` (it reads a folder), and
       ``panel`` (a panel of the plugin where the person says what the files
       do not).
   * - ``check@1``
     - A list of warnings, each ``{"rule": …, "sev": "error" | "warning" |
       "info", "node": <id or None>, "txt": <text or {"en": …, "it": …}>}``,
       shown in the **Warnings** sheet. It only reads.
   * - ``inspector.section@1``
     - Rows: a dictionary ``{label: value}``, a list of ``{"label", "value"}``
       or of pairs, or a text (one row). At most 40 rows of 200 characters.
       It only reads; ``buttons`` names commands drawn under the rows.
   * - ``tabular.column@1``
     - ``{id: value}`` for the rows of the sheet named by ``view``, each at
       most 200 characters. It only reads.
   * - ``statusbar@1``
     - One line, at most 80 characters. It only reads.
   * - ``space.tool@1``
     - What the tool wrote, inside ``em.write``. The command declares
       ``primitive`` and ``icon``, and a slot of kind ``geometry``.
   * - ``space.layer@1``
     - The description of a layer, ``layer = "raster_stack"``: planes with a
       picture, which EMStudio draws. The pictures live in the plugin's own
       folder. :doc:`/reference/geofisica` shows one at work.

A text may always be a dictionary of languages, ``{"en": "…", "it": "…"}``:
EMStudio shows the language of the interface, else English.

Slots that are calls of the API
-------------------------------

Four slots need no command: the plugin uses them from ``setup(ctx)`` or from a
command.

- ``event@1`` — ``ctx.on(event, fn)``: ``fn(payload)`` runs after each
  event of every study (the events are listed in :doc:`em-api`). A write in
  a listener runs after the event, never inside the step that caused it.
- ``space.pick@1`` — ``em.app.space.pick(prompt, primitive)`` asks the person
  to place a point (or a line, a path, a surface) in the Space.
- ``console@1`` — ``ctx.expose(name, object)`` makes a function available in
  the console as ``em.ext.<plugin>.<name>``.
- ``panel@1`` — ``[[code.panels]]`` in the envelope (see :doc:`envelope`):
  EMStudio draws the fields, the values computed by read-only commands, and
  the buttons that run commands with the fields.

Read only means read only
-------------------------

A command in a slot that only shows a value (``check``, ``inspector.section``,
``tabular.column``, ``statusbar``, ``space.layer``) is declared
``writes = false``; one declared otherwise is refused by the validator, and
a write it attempts is refused by the library.

See also
--------

- :doc:`envelope`, the keys of a command.
- :doc:`em-api`, what a function may call.
- :doc:`python-command`, three slots at work.
