.. _how-to-sources-trace-regions-on-images:

Trace regions on images
=======================

*Trace regions on a photograph or drawing in the Viewer and tie them to the record.*

A region traced on an image is a reading of that image: *here*, on this
photograph, one sees the material of a wall or the edge of a cut. EMStudio
records it as an **extractor** of the document, with the region as its place
on the image, and ties it to the property of the unit it informs. Tracing
happens in the **Viewer & card**, the main window of the **Sources** workspace,
on the document it shows.

Before you start
----------------

- Open a study and switch to the **Sources** workspace.
- The image must be the document's own: its file, or a resource linked to it.
  A picture on the **Shelf** becomes a document with **Annotate**, which opens it
  in the Viewer.

Trace first, then say what you read
-----------------------------------

.. image:: /_static/screens/dialogs/what-are-you-extracting.png
   :alt: The bubble What are you extracting? over a region just traced on D.11: SU001 written in the search field, and the properties of SU001 listed, Material first.

#. In the **Outliner**, under **Documents**, select the document, for example
   D.11, the zenithal view of the Great Temple. The **Viewer & card** shows the
   image. The pin (📌) in the Viewer's bar keeps it on this document while you
   select other nodes.
#. In the bar of the Viewer, the **Tracing tools** offer **Region** and
   **Polygon**. Choose one:

   - **Region**: drag on the image;
   - **Polygon**: click the vertices, then press :kbd:`Enter`, double-click, or
     click the first vertex to close it.

   :kbd:`Esc` puts the tool down and goes back to looking.
#. As soon as the region is closed, a bubble asks
   **What are you extracting?** Write in the search field a property or a unit,
   for example ``SU001``, and choose the property among those found, such as its
   **Material**. The arrow keys and :kbd:`Enter` choose from the keyboard.
#. If the unit does not have the property yet, use the line
   **or a new property of**: choose the **Unit**, write the **Property name**,
   for example ``material``, and press **Create**.

A message confirms that the reading is born, with its chain. The tool stays
chosen, so that you can trace the next region at once.

Trace for a property you are working on
---------------------------------------

The same reading can start from the unit.

#. Select the unit in the **Outliner** or in the Matrix. In the **Inspector**,
   its properties are listed with their paradata.
#. Under the property, press **Interpretation**. The menu **Read from where?**
   lists the documents of the study: choose the document to read.
#. The Viewer opens on that document, ready to trace. Its bar says
   *choose Region or Polygon, then mark it on the image*.
#. Choose **Region** or **Polygon** and trace. A message confirms that the
   region is marked.

When the property already has a reading, the button says
**+ source (creates a combiner)**: the second reading makes a **combiner**,
which holds the two readings together.

What you get
------------

.. image:: /_static/screens/windows/viewer-regions.jpg
   :alt: The Viewer & card magnified on D.11, the zenithal view of the Great Temple, with two regions traced and labelled D.11.03 and D.11.04, and the tools Region and Polygon in the bar.

One step of the history, which ``Edit ▸ Undo`` takes back, makes:

- an extractor of the document, named after it in the series of its readings,
  with the region as its place on the image;
- the link from the extractor to the property it informs (and the property
  itself, when you created it).

The **Inspector** shows the new extractor, selected. On the document, the
section **Extractions from this document** lists every reading with the badge
of its place: a click on **region on the image** opens the document with that
region in view, and **Read** opens the document on that reading, ready to
trace. An
extraction that informs nothing yet offers **Interpretation**, which asks again
**What are you extracting?**. In the **Inspector** of the unit, the property
shows its chain: the property, the extractor, the document.

The regions of an image travel with the record. When the image is served
through IIIF, ``Document ▸ Copy the regions as Web Annotations (IIIF)``, in the
menu of the Viewer window, copies them in the standard form that other IIIF
viewers read.

Other documents
---------------

The same Viewer reads other kinds of documents. On a text, select a passage and
press **Read the selected passage**. On a 3D model, the tools read a measure:
**Spot height**, **Impost height**, **Bedding plane (3 points)**,
**Bedding plane (a face)**, **Line** and **Polyline**. On a PDF the tools are
shown and turned off: EMStudio does not trace on the pages of a PDF yet.

See also
--------

- :doc:`documents-and-media` shows how the pictures of a unit gather, including
  those reached through the readings.
- :doc:`declare-provenance` says where the image itself comes from.
- :doc:`/reference/windows` describes the **Viewer & card**, and
  :ref:`reference-inspector` the sections of a document.
