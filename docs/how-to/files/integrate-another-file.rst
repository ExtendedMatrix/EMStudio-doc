.. _how-to-files-integrate-another-file:

Integrate another file
======================

*Bring the graphs of another file into the one you are working on.*

Two people may work on copies of the same study, each on a computer of their own,
or a colleague may send you the graphs of a nearby trench. **Integrate into this
file…** folds another ``.em.json`` into the file of the active graph. It works on
this computer alone, with no node and no room.

Before you start
----------------

Open the study that will receive the graphs, and click one of its graphs so that
it is the active graph: the graphs that arrive go into the file of the active
graph. Keep a copy of the file if you want to compare the result with the
original.

Integrate
---------

#. Choose ``File ▸ Integrate into this file…``.
#. Pick the other ``.em.json`` in the dialog.

EMStudio compares the two files graph by graph and node by node, through their
identifiers:

* a graph that the open file does not have is added to it, and appears in the
  Outliner under the same file;
* a graph that both files hold is merged: the nodes they share become one node,
  and the nodes and relations that only the other file has are added;
* the colour schemes kept in the other file come along too (see
  :doc:`clean-the-file`).

The message **project integrated** says how many graphs were added, how many
were merged and how many shared nodes were reconciled. The file now has unsaved
changes, and its version advances: save it to keep the result (see
:doc:`open-save-recent`).

Review the contested nodes
--------------------------

When both files changed the same node, the more recent change wins. Each such
case is listed in the panel **contested nodes**, with a sentence that says who
overwrote whom, and when; a node changed by someone who left no date says so.

#. Read the rows of the panel. **Show** takes you to the node in the graph.
#. Where the older version is the right one, click **Keep …'s version** on its
   row; the button names the author of that version. The node goes back to it,
   and the change is recorded as yours.
#. Close the panel with **✕**. The chip **conflicts** in the status bar opens it
   again, with the conflicts of the last integration.

The Log keeps one line for every contested node.

What you get
------------

One file with the graphs of both, the shared nodes reconciled, and every contested
change listed for you to decide. To work on the same study with others at the
same time instead, see :doc:`/how-to/rooms/enter-and-share-a-room`.

See also
--------

* :doc:`/reference/emjson`, the graphs of an ``.em.json`` and their identifiers.
* :doc:`/explanation/open-enter-create`, files on this computer and rooms on a
  node.
