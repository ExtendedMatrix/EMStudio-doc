.. _how-to-sources-declare-provenance:

Declare provenance
==================

*Say where each file comes from: stamp it as an origin or as a step made from other files, then read its chain and its rights.*

A photograph taken on the site, a mesh computed from those photographs, a
lighter version of the mesh: each file of a study comes from somewhere, and the
*transformation chain* (DTC) says from where. In EMStudio the chain is written
where the files are, in the **Files** window of the **Archive** workspace, by
*stamping* them. A stamp is a small file written next to yours, which records
what the file is, who made it, when, with which program and from which other
files. The **Shelf** keeps a copy of it. A stamp is never corrected: if it is
wrong, a new one is issued.

Before you start
----------------

- Open a study (the copy of Templu Mare from :doc:`/tutorial/first-study` is
  fine) and switch to the **Archive** workspace.
- Say who you are in the **Identity** tab of **Settings…**: the **Operator** of
  every stamp then fills itself in (see :doc:`/reference/settings`).
- In the **Files** window, walk to the folder that holds the files.

Stamp a file that is an origin
------------------------------

An origin is a file born here: a photograph taken in the field, a scan made in
the laboratory, a file downloaded from an archive.

#. In the **Files** window, right-click the file and choose
   **Stamp this file…**. To stamp several files as one act, pick them first; the
   menu then offers to stamp the picked files together. The **Files** window
   also offers a command that stamps all the files of the folder together.
#. The stamp form opens in the **Files** window. Under
   **Where does it come from?**, choose **It is an origin**.
#. Choose the **Kind** of act in the list, for example a photographic survey.
   When the kind says that the file was retrieved from elsewhere, write in
   **From where? A DOI or a URL** the public address of the source.
#. Give the act a name in the field **The name of this common stamp**: it is the
   same for all the files stamped together, for example ``Survey of 12 March``.
   Add the **Instrument** if you know it.
#. Check the **Operator**, and write in **Date** the day of the act, which is
   often not today. **Today** fills in the current date.
#. Add a **Title** and a **Description** if they help a reader.
#. Press the button **Stamp** followed by the number of files, for example
   **Stamp 1 file**.

Stamp a step made from other files
----------------------------------

A step is a process: an alignment of photographs, a mesh, a reduction, a
conversion, a georeference. The files it used must be stamped first.

#. Right-click a stamped file and choose **Stamp a step from this file…**. The
   form asks **What did you make from it?**: choose, among the unstamped files of
   the folder, the files that the step produced.
#. Alternatively, start from the products: choose **Stamp this file…** on them
   and, under **Where does it come from?**, choose **It comes from other files**.
   Then pick the inputs in **From which files**.
#. When a parent has no stamp of its own (an object inside a ``.blend``, a file
   nobody stamped, a set of sources), declare it under
   **…or declared, not stamped** with **+ Declare a parent**, and climb further
   with **+ what that comes from**. A declared parent has no fingerprint, and the
   chain draws it dashed.
#. Choose the **Kind** of process, then fill **Software**, **Parameters** and,
   for a program you wrote yourself, **Program version**.
#. Check **Operator** and **Date**, and press **Stamp**.

For a Metashape project, the command **Stamp the photogrammetric chain…** on the
``.psx`` file writes one stamp per step, from the acquisition to the texturing.

Read the chain
--------------

#. Select a stamped file in the **Files** window. The
   **Transformation chain (DTC)** window beside it draws the chain of that file,
   read from the stamps on the disk, in the lanes **From**, **Step** and **To**.
   A starting file that is not in this folder is drawn with a **?**.
#. Click a file in the chain: the **Files** window goes to that file.
#. To find the node of a stamped file in the graph, right-click it in the
   **Files** window and choose **Show in the graph**.

The chains of the whole study, as far as the graph holds them, are drawn by a
**Graph** window in **DTC** mode: choose **DTC** in the **Mode** menu of any Graph
window, for example in the **Sources** workspace. Each lane is one stage of the
making, from what entered the study to the processes, named by their technique,
and to their products. The lowest lane, **Used in the record**, holds the units
and documents that cite the result.

Declare the rights and the author
---------------------------------

A stamp says how a file was made. Who may use it is said on the resource, in the
**Inspector**.

#. Select the resource, for example with **Show in the graph** from the
   **Files** window.
#. Under **Rights of this resource (DTC)**, write the **Licence**. While the
   field is empty, a button offers the graph's licence, or the StratiGraph
   default when the graph declares none. Fill **Embargo until** and
   **Reason for the embargo** when the bytes must wait.
#. Under **Author (who made it)**, write the name and the ORCID iD of whoever
   made the file, even somebody who is not here. Press **I am the author** when
   it is you.

The author is the person who made the file; the person who writes it down is
the attributor, and EMStudio records the attributor separately, with the date.
For a whole acquisition lot, the same fields are under
**Rights of this lot (DTC)**, and a file with rights of its own keeps them.

What you get
------------

- Next to each stamped file, its stamp, which travels with the file: whoever
  receives the file can check it. The **Shelf** keeps a copy of each stamp.
- A chain that the **Transformation chain (DTC)** window draws from the disk,
  and that a **Graph** window in **DTC** mode draws for the whole study.
- Rights that the StratiGraph node applies when it serves the bytes: while the
  embargo runs, the file goes only to those who work on the study, and the
  licence travels with every download.

In the **Inspector**, every node also shows its author, licence and embargo
under **Own / inherited**, with the node they come from. See
:ref:`reference-inspector` for the sections of a resource and for the rules of
inheritance.

See also
--------

- :doc:`/explanation/dtc-and-em` explains the two planes, the chain of the files
  and the stratigraphic record.
- :doc:`documents-and-media` ties the stamped files to the units they show.
- :doc:`/how-to/bring-in/porta-dentro` brings stamped files into the study as
  documents.
- :doc:`/reference/windows` describes the **Files** window and the
  **Transformation chain (DTC)**.
