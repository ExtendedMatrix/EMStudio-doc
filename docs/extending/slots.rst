.. _extending-slots:

Slots
=====

*Where a command of a plugin appears, what EMStudio gives it, and what it
gives back.*

A **slot** is a place of the interface, or of the work, where EMStudio
accepts something from a plugin. It has a name and a version,
``context.node@1``, a promise the program keeps from one release to the next.
A command lists its slots in ``in``; a slot with a version higher than the
program knows turns that entry off, not the plugin, and the Extensions page
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

From the slots to «Where you will find it»
------------------------------------------

The Extensions page of the Settings tells the person, for every extension,
**where it will show** in EMStudio, under *Where you will find it*. Nothing of
that list is written by hand: EMStudio reads it from your envelope, from the
``in`` of each command, from ``[[code.panels]]`` and from the vocabularies of
the data. What you declare is what the person reads, before installing.

.. list-table::
   :header-rows: 1
   :widths: 38 62

   * - What you declare
     - The line of *Where you will find it*
   * - ``door.reader@2``
     - **File ▸ Bring in…**, *reader* and the command's label; with
       ``folders = true``, *it reads a folder*
   * - ``menu.file.import@1``, ``menu.file.export@1``
     - **File ▸ Import**, **File ▸ Export**
   * - ``[[code.panels]]``
     - **Right panel**, **Left panel**, **Panel below** or
       **A window of its own**, from its ``place`` (right when it is not given),
       with the panel's ``label``
   * - ``space.layer@1``
     - **Space ▸ Layers**
   * - ``space.tool@1``
     - **Space ▸ Tools**, every tool's label
   * - ``inspector.section@1``
     - **Inspector**, *section* and its label; **Show me** says the kind of
       node to select (its ``when``)
   * - ``tabular.column@1``
     - **Tabular ▸ Columns**
   * - ``statusbar@1``
     - **Status bar**
   * - ``menu.tools@1``
     - **Tools menu**
   * - ``context.node@1``
     - **A node's context menu**
   * - ``check@1``
     - **Checks**
   * - ``export.narrative@1``
     - **Narrative ▸ Export**
   * - ``[[data.vocabularies]]``
     - **Vocabularies**, *in the Inspector's pickers*, by name
   * - any command
     - **Python**: the line that runs it from the console,
       ``em.plugins.invoke("<plugin>", "<command>", {…})`` with its required
       slots, for the first command that no menu carries (else the first), and
       *+ N more commands*

The lines keep this order, one per place, whatever the order of your commands;
two commands in the same slot share one line, with both labels. A line is
marked ● when the place is there now (the code loaded, the data installed) and
○ when it comes with the code, and **Show me** takes the person there.

What this asks of an author:

- give every command and every panel a ``label`` in the languages you can
  (``{"en": …, "it": …}``): the line shows the label, else the id;
- declare the slots the command really serves: a command in no slot is still
  reachable, but only from Python;
- declare ``folders = true`` on a reader that takes a folder, and ``place`` on a
  panel that should not open on the right.

The places are read from the archive before anything is installed (the preview
of **Install from disk…** and of a repository's **Install** says them), so the
person knows where to look before trusting your code.

See also
--------

- :doc:`envelope`, the keys of a command.
- :doc:`em-api`, what a function may call.
- :doc:`python-command`, three slots at work.
