.. _how-to-sources-trace-regions-on-images:

Trace regions on images
=======================

*Trace regions on a photograph or drawing in the Viewer and tie them to the record.*

.. TODO MAN03: write this page (map §3, how-to «Sources»).

..
   Material from the retired how-to/annotate-images.rst (1.6.0-dev.10), to
   rework here: the Annotator is gone and tracing lives in the Viewer.

   Annotate images
   ===============

   *Goal: trace regions on a photograph or drawing and tie them to the record.* This is
   the **Annotator** tab — the annotator surface, a Viewer, and the Inspector.

   .. image:: /_static/interface/06_annotator.jpg
      :width: 100%
      :alt: The Annotator tab — the annotator surface, a Viewer, and the Inspector

   Pick an image
   -------------

   The annotator works on an image that the record already points at. Select a
   **Document** (or a resource) whose bytes are an image, and it opens for annotation;
   until you do, the surface says so rather than showing an empty frame.

   What the pointer does
   ---------------------

   The annotator's **modes** are what the pointer *does*, the way an image editor
   separates viewing from painting:

   - **look** — pan and zoom the image without changing anything;
   - **trace** — draw a region (an outline on the image);
   - **mask** — paint an area.

   The regions you trace are attached to the image and travel with the record.

   .. note::

      In a secondary (unfocused) annotator window you see the image and the count of
      its regions, but tracing happens in the focused annotator — there is one active
      image surface at a time.
