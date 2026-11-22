.. _extending-python-command:

Add a command in Python
=======================

*The package of the first tutorial with code beside its data: a first
command, the development folder, reloading after a change, a command that
writes into the study, and a section of the Inspector.*

Data say what a community records; code does what the data cannot say: read
a new format, check a study, compute something outside the closed set of
operations, show a value where the person works. In EMStudio the code of a
package is **Python**, and it reaches the study through one door, the ``em``
library, the same that the **Python console** and EM Tools in Blender use.

In this tutorial the package ``volto-esempio`` becomes a **mixed package**:
its data, unchanged, and a little code that counts the points of the face,
marks units as restoration infills, and adds a section *The face* to the
Inspector. The finished package can be copied from
:download:`volto-esempio 0.2.0 </_includes/extending/volto-esempio-0.2.0.zip>`.

Before you start
----------------

- The package of :doc:`first-package`, installed in EMStudio.
- EMStudio for the desktop: the code of the plugins runs in its local
  service, and the web version does not load the plugins of a computer.
- A few lines of Python are enough to follow; the reference of the library
  is :doc:`em-api`, and every name of ``em`` is in the `EMStudio Python API
  <https://docs.extendedmatrix.org/projects/emstudio-python-api/en/latest/>`__.

1 · Data and code in two folders
--------------------------------

A mixed package keeps its two parts apart, so that the data can always be
installed alone, with the guarantee that nothing in them runs.

#. In ``volto-esempio``, make a folder ``data`` and move into it everything
   but ``em-extension.toml``: ``profile.json``, ``vocab``, ``landmarks``,
   ``colors``, ``forms``, ``examples`` and **a copy of** ``LICENSE``.
#. Make a folder ``code`` beside it, and in it a folder ``volto_strumenti``:
   the name of the Python module, unique, with letters, digits and ``_``.

.. code-block:: text

   volto-esempio/
     em-extension.toml
     LICENSE                       the licences of the two parts
     data/                         the data of the first tutorial, unchanged
       LICENSE
       profile.json
       vocab/ landmarks/ colors/ forms/ examples/
     code/
       volto_strumenti/
         __init__.py               the code

.. admonition:: Why a copy of the licence stays in ``data``
   :class: note

   The data of version 0.1.0 are already installed on your computer. EMStudio
   recognises them as the same data only if the files of the data are the same
   files, the licence included. They are, so the new archive leaves the
   installed data as they are and adds only the code.

2 · The envelope with two sections
----------------------------------

Change the head of ``em-extension.toml`` and the section ``[data]``:

.. literalinclude:: /_includes/extending/volto-esempio-misto/em-extension.toml
   :language: toml
   :lines: 1-14

- The archive becomes ``0.2.0``: something new has arrived.
- ``[data]`` keeps its own version, ``0.1.0``, because the data have not
  changed, and says where they now live, ``root = "data/"``.
- ``type = "mixed"`` and a second licence, the one of the code.

The two ``[[data.vocabularies]]`` stay as they were. At the end of the file
add the section of the code:

.. literalinclude:: /_includes/extending/volto-esempio-misto/em-extension.toml
   :language: toml
   :lines: 32-46

- ``[code]`` has its own ``version``, its ``root``, its licence, and its
  ``entry``: the module and, after ``:``, the object EMStudio calls.
- ``hosts`` says where the code runs: ``emstudio`` here; ``blender`` and
  ``server`` are the other two.
- ``[code.descriptor]`` declares what the code may do with a study:
  ``read-graph`` to read it, ``write-graph`` to write in it. A command that
  writes without this capability is refused at the moment it writes.
- Each ``[[code.commands]]`` declares one command: its ``id``, its ``label``
  in the languages of the package, the **slot** where it appears
  (``menu.tools@1`` is the command search, :kbd:`F3`, and the section
  **Commands of the plugins** of ``Settings… ▸ Extensions``), and whether it
  writes. A command
  exists for EMStudio only once the envelope declares it.

3 · The first command
---------------------

Write ``code/volto_strumenti/__init__.py`` with the first function and the
object named by ``entry``:

.. literalinclude:: /_includes/extending/volto-esempio-misto/code/volto_strumenti/__init__.py
   :language: python
   :lines: 1-25

.. literalinclude:: /_includes/extending/volto-esempio-misto/code/volto_strumenti/__init__.py
   :language: python
   :pyobject: Plugin

.. code-block:: python

   plugin = Plugin()

For now, ``setup`` wires only ``vlt.count``: leave out the two lines of
``vlt.mark_infill`` and ``vlt.section``, which the next steps add with their
functions.

- A command is a function that receives its **slots** (a dictionary, empty
  here) and returns a value. EMStudio shows the value in a message.
- ``em.graph`` is the study open in EMStudio; ``nodes(type="extractor")``
  gives its extractors, and ``data`` the data of each node. The points of the
  face are the extractors whose kind is ``vlt:punto_del_volto``.
- ``em.host.current().language()`` is the language of the interface: the
  command answers in it.
- ``setup(ctx)`` runs when EMStudio loads the code: ``ctx.command`` binds a
  declared command to its function.

Check the package with the validator, as in the first tutorial:

.. code-block:: sh

   ~/em-packages-venv/bin/python -m s3dgraphy.extensions validate volto-esempio

4 · Try a line in the console first
-----------------------------------

The **Python console** speaks the same ``em`` as the code: it is the place to
try a line before writing it in a file.

#. Open the example study, ``data/examples/volto.em.json``.
#. Choose ``Window ▸ Python console… · beta``. The first line reminds you that
   ``em`` is imported and that ``g`` is the graph shown.
#. Write, and press :kbd:`Enter`:

   .. code-block:: python

      [n.name for n in em.graph.nodes(type="US")]

   The console prints ``['US1']``. Press **Help** to read what ``em``
   offers (see :doc:`/how-to/extensions/python-console`).

5 · Load the code from the development folder
---------------------------------------------

The **development folder** loads the plugins you are writing where they are:
no installation, no question of trust, because the person who writes the
code is the person who runs it.

#. Open ``Settings… ▸ Extensions`` and open the row **Development folder**,
   the last of the page.
#. Type the folder that holds ``volto-esempio`` (or the folder
   ``volto-esempio`` itself), and press **Use**.
#. The row of the package appears, marked **development, not verified**,
   with its folder and its state: **loaded**. When the code cannot load,
   the row says why, in the words of the validator or with the error of
   Python.

.. figure:: /_static/screens/extending/development-folder.png
   :alt: The row Development folder of the Extensions page, opened: the folder, and volto-esempio 0.1.0, development, not verified, loaded, with the button Reload.

   The package in development: loaded where it is, marked as not verified.

6 · Run it
----------

#. Press :kbd:`F3` (``Edit ▸ Search commands…``) and type ``face``. The
   command **Count the points of the face** answers, with the name of its
   extension where the search says where a command lives. The same command is
   listed in ``Settings… ▸ Extensions``, in the section **Commands of the
   plugins** under the extensions: the plugin has its own heading, with its
   name, its version and the mark **development**; under it, its command.
#. Press :kbd:`Enter` on **Count the points of the face**, or choose it in the
   section. A message answers
   *«Count the points of the face»: 0 points of the face*: the example study
   has no points yet.

7 · Change the code and reload it
---------------------------------

#. Change the sentence the function returns, and save the file.
#. In ``Settings… ▸ Extensions``, press **Reload** on the line of the package,
   in the row **Development folder**.
   The code is read again; run the command and read the new sentence.

A change of ``em-extension.toml`` (a new command, another slot) is read by
**Reload** too, because the envelope is validated each time.

8 · A command that writes
-------------------------

A command that changes the study does it inside ``em.write``: one block, one
step of ``Edit ▸ Undo``, one line in the Log, and an act that records which
plugin made the change.

#. Declare the command in the envelope:

   .. literalinclude:: /_includes/extending/volto-esempio-misto/em-extension.toml
      :language: toml
      :lines: 48-54

   ``context.node@1`` is the context menu of a node. ``when`` says when it
   is offered: here when every selected node is a stratigraphic unit. The
   slot ``units`` has the kind ``ids``: EMStudio fills it with the selected
   nodes.

#. Write the function, and wire it in ``setup`` with
   ``ctx.command("vlt.mark_infill", mark_infill)``:

   .. literalinclude:: /_includes/extending/volto-esempio-misto/code/volto_strumenti/__init__.py
      :language: python
      :pyobject: mark_infill

   ``tx.set_property`` writes the property ``vlt:stato_superficie`` of each
   unit with the concept *restoration infill*: the address of the concept
   and its label, as the Inspector would write it.

#. Press **Reload**, then open the context menu of ``US1`` in the Matrix. The
   command is there, with the mark **development**.

   .. figure:: /_static/screens/extending/context-menu.png
      :alt: The context menu of a unit in the Matrix: at the end, before Delete, the entry Mark as restoration infill, development.

      A command declared in ``context.node@1``.

#. Choose it. The message says that one step was written, each one a step of
   undo; ``Edit ▸ Undo`` takes it back.

9 · A section of the Inspector
------------------------------

A command can also show a value where the person reads the unit: a section
of the Inspector. It only reads, so it is declared ``writes = false``, and
EMStudio refuses any write it attempts.

#. Declare it:

   .. literalinclude:: /_includes/extending/volto-esempio-misto/em-extension.toml
      :language: toml
      :lines: 56-62

   The slot ``id`` has the kind ``id``: EMStudio fills it with the unit shown
   by the Inspector.

#. Write the function, and wire it with
   ``ctx.command("vlt.section", face_section)``:

   .. literalinclude:: /_includes/extending/volto-esempio-misto/code/volto_strumenti/__init__.py
      :language: python
      :pyobject: face_section

   The section is a list of rows, each with a ``label`` and a ``value``; a
   label written in several languages is shown in the language of the
   interface. ``em.vocab.find`` gives the concept of the value, and its label
   in that language.

#. Press **Reload** and select ``US1``. The Inspector shows the section
   *The face*: the width between the eyes (not computed yet) and the state of
   the surface, *restoration infill* after step 8.

   .. figure:: /_static/screens/extending/inspector-section.png
      :alt: The section The face of the Inspector, from the package in development: Width between the eyes, a dash; State of the surface, restoration infill.

      A command declared in ``inspector.section@1``.

The whole file, as it stands now, is
:download:`code/volto_strumenti/__init__.py </_includes/extending/volto-esempio-misto/code/volto_strumenti/__init__.py>`.

10 · From the development folder to an archive
----------------------------------------------

#. Build the archive, from the folder that holds ``volto-esempio``:

   .. code-block:: sh

      ~/em-packages-venv/bin/python -m s3dgraphy.extensions build volto-esempio

   It writes ``volto-esempio-0.2.0.zip``, always the same bytes for the same
   folder, after checking it with the validator.

#. Clear the development folder (**Clear**), so that the installed copy is
   the one EMStudio loads.
#. In ``Settings… ▸ Extensions``, press **Install from disk…** and choose the
   archive. The panel **Data** says that the data 0.1.0 are already
   installed and identical; the panel **Code** is marked
   **NOT VERIFIED, from disk** and says what the code can do. Answer
   **Install everything**: this answer is your trust in the code.

From here, :doc:`test-and-validate` tells how to test the code without
EMStudio, :doc:`permissions-and-trust` what the code may ask, and
:doc:`publish` how to give the package to others.

What you have learnt
--------------------

The code of a package is a Python module beside its data. The envelope
declares each command and where it appears; ``setup`` binds the commands to
functions; a function receives the slots EMStudio fills and returns a value
the slot knows how to show. Every write passes through ``em.write`` and
becomes one step of undo, recorded with the plugin that made it. The
development folder loads the code where it is, and **Reload** reads it again.
