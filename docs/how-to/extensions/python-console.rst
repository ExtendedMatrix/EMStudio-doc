.. _how-to-extensions-python-console:

Use the Python console
======================

*Run Python on the open study, with every change one step of undo and its code recorded.*

The **Python console** runs Python on the study open in EMStudio, through the
``em`` library of s3Dgraphy, the same that EM Tools and the plugins use. It
reads the graph, the selection and the vocabularies, and it writes through
``em.write``: each write is one step of ``Edit ▸ Undo``, a line in the Log, and
an act whose chain keeps the code that ran. The console is marked *beta*, a
young function, and a Python script has the powers of your user on this
computer.

Before you start
----------------

- Use the desktop application: the console works through its bridge.
- Open a study. The console works on the open one; with none, it says so.

Open the console
----------------

#. Choose ``Tools ▸ Python console… · beta``. A window **Python Console** opens
   under the active window, or the one this workspace already has comes
   forward. It is a type of window like the others: any area of any workspace
   can become a console from the window type menu of its header, and the
   **Scripting** workspace has one ready, under the **Script Editor**.
#. Its head says **Python · em on «…»** with the name of the open study, and
   **beta**. The first line reminds you that ``em`` is imported, that
   ``g`` is ``em.graph``, the graph shown, and that ``sel`` is the selection.

Read the study
--------------

.. image:: /_static/screens/windows/console.png
   :alt: The Python console after the line sel: the identifier of the selected unit printed under it.

#. Select SU001 in the Matrix.
#. In the field at the bottom, write ``sel`` and press :kbd:`Enter`. The console
   prints, under your line, the list of the selected nodes (their identifiers):
   ``sel`` is read again at every run.
#. Press **Help** to print ``em.help()``: what ``em`` offers here.

:kbd:`Enter` runs a complete line; for a block of several lines, end it with an
empty line, or press :kbd:`⌘Enter` (:kbd:`Ctrl+Enter`) to run at once.
:kbd:`Shift+Enter` starts a new line. :kbd:`Tab` completes a name.

The head of the window also has the link **Python API reference** (the same
entry is in the ``Help`` menu): it opens the complete reference of ``em``, the
`EMStudio Python API <https://docs.extendedmatrix.org/projects/emstudio-python-api/en/latest/>`__, in the browser on
the desktop and in a new tab on the web.

Write into the study
--------------------

A write is a block opened by ``em.write`` with a label. The label names the step
in the Log and in ``Edit ▸ Undo``.

.. code-block:: python

   with em.write("Description of the selected unit") as tx:
       tx.update(sel[0], "description", "Foundation of the colonnade")

#. Before writing, press **Try** (:kbd:`⌘⇧Enter`, :kbd:`Ctrl+Shift+Enter`). The
   same code runs with every write made a proof: the console shows, line by
   line, what it would add or change, and that nothing was applied.
#. Press **Run**. The console says **written** with the label, the number of
   nodes, and that its code is in the chain of the act. The **Inspector** shows
   the new description at once.
#. ``Edit ▸ Undo`` takes the whole block back as one step.

The history
-----------

:kbd:`↑` and :kbd:`↓` bring back the code you ran, also from earlier sessions:
the history belongs to this computer. :kbd:`Ctrl+R` searches it; :kbd:`Enter`
takes the line found and :kbd:`Esc` goes back. **Clear** (:kbd:`Ctrl+L`) empties
the console's lines and keeps the history.

What you get
------------

Python on the study, with the safety of the rest of EMStudio: every change one
step of undo, a line in the Log, and an act that records the code that made it,
so that a script's work can be read and checked like any other.

Write a script
--------------

The **Script Editor** is the other window of Python, beside the console in the
**Scripting** workspace (see :doc:`/reference/workspaces`). It keeps a script in
a ``.py`` file of the ``scripts/`` folder beside the ``em.json``; a study with no
folder keeps its scripts in the browser.

- **New**, **Open**, **Save** and **Save as…** in its header work on the
  scripts of the project; a ● in the title marks a script with unsaved changes.
- **▶ Run Script** (:kbd:`Alt+P`, as in Blender) runs the script in the
  console's session: what it prints goes to the console.
- **Try** (:kbd:`Alt+Shift+P`) runs the same script with every ``em.write`` as a
  proof: what it would write, nothing applied.
- **Templates** offers examples from the Python API reference to start from.

See also
--------

- :doc:`install-packages-and-plugins`, for the plugins, and the development
  folder for a plugin you are writing.
- :doc:`/how-to/sources/declare-provenance`, to read the chain of an act.
