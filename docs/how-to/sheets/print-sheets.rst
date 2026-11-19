.. _how-to-sheets-print-sheets:

Print sheets
============

*Choose which sheets to print, how many and in which order, and make the PDF.*

EMStudio prints the recording sheets of a graph on A4, recto and verso, as the
definition lays them out. The printed page is drawn by stratigraph-templates, the
same renderer StratiField uses, through the bridge: the bridge of the desktop
application, or the StratiGraph node on the web. One window decides which
sheets go to print: one sheet, the selection, or the units of the graph that
meet a set of criteria.

Before you start
----------------

- Open a study whose sheets you want to print (see
  :doc:`fill-the-recording-sheet`).
- Select the units first if you want to print only those, in the Matrix or in
  the **Outliner**.

Open the window
---------------

Choose ``File ▸ Print sheets…``, or press **Print A4…** in the head of the
**Sheet** window. The window **Print sheets** opens, with the name and version
of the definition beside its title.

#. Under **What**, choose the sheets to start from:

   - **This sheet**, followed by the name of the unit the **Sheet** shows (the
     choice when you came from **Print A4…**);
   - **The selection**, with the number of selected units (the choice when you
     came from the menu with units selected);
   - **Every unit of the graph**, with their number.

#. Narrow them down with the lists of criteria. Each entry shows how many units
   of the graph it has.

   - **Unit type**: SU, USV and the other types present in the graph.
   - **Epoch**: the epochs of the graph, from the oldest. A unit counts for the
     epoch in which it begins and for those in which it survives.
   - **Activity / group**: the activities and groups the units belong to.
   - **State of the sheet**: **Full**, **With empty boxes**, or **To complete
     (a required box empty)**. The required boxes are those the definition
     marks with an asterisk; in ICCD US 2021, **SU**, **LOCALITY** and
     **DEFINITION**.
   - **Record status**: the status set in the head of the sheet, and **No
     status**.

   Ticked entries combine: a unit must meet every list, and within one list one
   of the ticked entries is enough. To filter by state or status, EMStudio reads
   the sheets one by one; the window shows **Reading the sheets** with the
   progress.

#. Write in **Numbers** the numbers or the names you want, for example
   ``1-20, 35, 40-45, USM12``. A number or a range matches the last number in a
   unit's name, so ``4`` keeps SU004; a word matches the whole name.
#. Write in **Search** words that must all appear in the name or in the
   description of the unit.
#. Choose the **Order**: **By number**, **By epoch (oldest first)**, or **As in
   the Matrix (top to bottom)**.
#. Choose the **Sides**: **Recto and verso**, or **Recto only**.
#. Choose the **Output**: **One PDF (the print dialog)**, or **One PDF per sheet
   (a folder)**.

At the foot, the window counts the sheets and the pages, for example **11
sheets, 22 pages**, and shows the name of the file: the definition, the graph
and the day, such as ``ICCD US 2021 · Temple · 2026-11-19.pdf``. When no unit
meets every criterion it says **No sheet: no unit meets every criterion**.

The criteria start empty each time the window opens; the order, the sides and
the output stay as you last chose them.

Print them as one PDF
---------------------

#. Press **Print…**. The bridge draws the sheets twenty at a time, and the
   window shows **Drawing the sheets** with the progress. **Stop** interrupts
   the work between two groups of sheets, and nothing is printed.
#. The preview shows all the pages. Its line says how to make the PDF.
#. Press **Print…** in the preview.

.. tab-set::
   :sync-group: platform

   .. tab-item:: Desktop
      :sync: desktop

      A window of its own opens with the sheets, and the system's print dialog
      opens over it. Choose a printer, or **Save as PDF** in the dialog to
      write the PDF. The window with the sheets stays open as a preview: close
      it when you are done.

   .. tab-item:: Web
      :sync: web

      The browser's print dialog opens on the preview. Choose a printer, or
      the destination **Save as PDF** to write the PDF.

Press **Close** to leave the preview. The Log records how many sheets were
drawn, the pages and the name of the file.

Print one PDF per sheet
-----------------------

Each sheet in its own file, named after the definition, the graph, the day and
the unit, needs a bridge that makes PDFs by itself.

.. tab-set::
   :sync-group: platform

   .. tab-item:: Desktop
      :sync: desktop

      The bridge of the desktop application prints through the system's print
      dialog. With **One PDF per sheet (a folder)** chosen, the window says
      **the desktop makes its PDF with the print dialog («Save as PDF»): choose
      «One PDF»** and **Print…** stays off. Print the sheets as one PDF, as
      above.

   .. tab-item:: Web
      :sync: web

      When the node makes PDFs, press **Print…**: every PDF is downloaded, one
      file per sheet, and a message counts them. When it does not, the window
      says why at its foot, and **Print…** stays off.

What you get
------------

The sheets you chose, in the order you chose, on A4 pages ready to print or to
keep as a PDF, with a file name that says which definition, which graph and
which day.

See also
--------

- :doc:`fill-the-recording-sheet`
- :doc:`/reference/desktop-and-web`
- :doc:`/reference/menus`
