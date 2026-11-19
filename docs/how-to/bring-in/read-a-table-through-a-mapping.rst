.. _how-to-bring-in-read-a-table-through-a-mapping:

Read a table through a mapping
==============================

*Import a spreadsheet, a database or an XML file by saying what each of its columns means for the graph.*

A table of units kept in a spreadsheet, a site database, an XML export: each
describes the excavation in its own columns. A **mapping** says what each column
is in the Extended Matrix (which column identifies a unit, which one describes
it, which one names another unit it relates to), and EMStudio reads the table
through it. Everything happens in one window, the **Mapping editor**, which asks
three questions in order: what to read, how to read it, and where and how it
enters.

Before you start
----------------

Decide where the table should land. If the table carries the stratigraphy
itself, it becomes **A new graph**. If the stratigraphy is already in a graph and
the table adds descriptions or properties to its units (the more common case),
open that graph first: the table lands on **This graph**.

Open the editor
---------------

Choose ``File ▸ Import ▸ Table with a mapping…``. The **Mapping editor** opens in
a window of its own. Its sections are numbered in the order they appear.

The same editor opens, already filled, from two other places: from an auxiliary
file of a graph in the **EMtree**, and from StratiMiner's **Transform into
em.json** (see :doc:`build-a-graph-with-stratiminer`).

1 · Choose the source
---------------------

#. In **the source**, write the full path of the file (a ``.sqlite``, ``.xlsx``,
   ``.csv`` or ``.xml``), or pick it.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         **Browse…** opens the system dialog and fills in the real path of the
         file.

      .. tab-item:: Web
         :sync: web

         **Browse…** lists the folders that EMStudio's service can read, with
         **Places**, **Volumes**, **Bookmarks** and **Recent** at the side.
         **Open…** takes a file from your computer instead: the service keeps a
         copy of it and reads that. The mapping records the shape of the file,
         not its location, so a mapping made on the copy applies to the original
         later.

#. Press **Read the fields**. EMStudio says how it read the file, for example
   **read as xlsx — 14 field(s)**.
#. Check the details it proposes. **Header row** says which row holds the column
   names (EMStudio proposes the first row with every column filled). **table /
   sheet** chooses among the sheets of a workbook or the tables of a database.
   For an XML file, **one record is** asks which element is one record: the
   repeated elements are offered, the most frequent first.
#. In **Language of the source**, say in which language the table is written.
   **as the study** keeps the study's working language; another language is
   written on every node the import creates.

2 · Say how it is read
----------------------

In **How it is read**, choose one of four answers.

**A mapping written here**
   You describe the columns in the sections that follow. This is the answer for
   a table nobody has mapped before.

**A mapping file**
   A ``*_mapping.json`` written beside the dataset. Write its path, or press
   **Choose…**.

**A registered mapping**
   A mapping that s3Dgraphy already knows by name. The names appear as buttons:
   press one. When EMStudio recognises the table, it says so (**Recognised:**
   followed by the mapping's name and how many columns match) and proposes that
   mapping.

**None: an EM table**
   An ``em_data.xlsx`` (the table of units, epochs and claims of the Extended
   Matrix, the one StratiMiner produces) is read as it is.

3 · Map the fields (a mapping written here)
-------------------------------------------

The table **the fields** lists every column with **example values** and how
many sampled records had a value.

#. In **map to (CIDOC → EM)**, choose what the column describes: a class of the
   Extended Matrix (a stratigraphic unit, an epoch, a document) or a CIDOC-CRM
   class. Leave **— no class** for a column that does not matter.
#. In **role**, say what the column does for its record: **identifies the
   record**, **describes it**, **a property of it** (then give the **property
   name**), or **names another record (edge)**. A column left **— not mapped**
   is simply not read.
#. In **the relations**, press **+ relation** for each link between two mapped
   columns: choose the first column, the second, and the relation between them.
   Only the relations the Extended Matrix allows between those two kinds of node
   are offered.
#. In **the mapping**, give the mapping a name and press **Check it**. EMStudio
   answers **The mapping is coherent** or lists what prevents it from being
   applied.
#. To use the mapping again, press **Download the JSON**, or **Save into the
   registry** to make it a registered mapping. Saving into the registry works
   when EMStudio's service has a folder for the user's mappings; otherwise,
   download the JSON and keep it beside the dataset.

Where and how it enters
-----------------------

#. Choose the target: **A new graph**, or **This graph** followed by the name of
   the active graph. On **This graph**, a row whose key matches no unit of the
   graph creates nothing: it is listed instead.
#. Choose how the rows land:

   - **Provisional**: the new nodes appear in the graph in blue and stay out of
     the saved file until you write them in;
   - **Written into the graph**: the nodes become the graph's and travel with
     the saved file;
   - **Attached as an auxiliary file**: the table is kept on this graph as a
     source with a life of its own, read again when the file changes, and
     written into the graph when you agree. This answer needs **This graph**.

#. Press **Apply**.

What you get
------------

The editor reports what happened, for example **Written into the graph: 120
record(s) → 120 node(s), 85 edge(s)**. A new graph opens beside the graphs
already open. On the active graph the import is one step of the history.

After a provisional import, the editor shows how many provisional nodes are in
the graph, in blue, and offers **Write into the graph** to keep them or **Take
them out** to remove them. An attached table appears as an auxiliary file of the
graph in the **EMtree**.

See also
--------

- :doc:`build-a-graph-with-stratiminer`, to obtain an ``em_data.xlsx`` from a
  folder of sources.
- :doc:`/how-to/stratigraphy/edit-many-units`, to review the units after the
  import.
- :doc:`/reference/windows`, for the EMtree and the other windows.
