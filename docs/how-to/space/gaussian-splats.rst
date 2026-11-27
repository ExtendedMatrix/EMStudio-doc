.. _how-to-space-gaussian-splats:

Gaussian splats as representation models
========================================

*A survey made of fuzzy, coloured points: drawn in the Space as a model, read by the tools with a rule of its own.*

A **Gaussian splat** (3D Gaussian Splatting, 3DGS) shows a place as millions of
small, soft, coloured ellipsoids instead of triangles. EMStudio draws it with
**Gaussian Splat Lite** (William Liu, Apache-2.0) as a **representation
model**: like a mesh or a tileset it belongs to a document, it depicts one or
more epochs, it has a pose and a frame, it is listed in the Outliner and saved
with the study.

What EMStudio reads
-------------------

- **One file**: a 3DGS ``.ply`` (the usual layout of the training tools, or
  SuperSplat's compressed PLY), ``.spz``, ``.sog``, a ``.rad`` without levels
  of detail. A PLY that is a mesh or a plain point cloud is not a splat: the
  Space says so, with what is missing, and draws nothing.
- **A streamed scene**, whose detail follows the camera: a ``.rad`` with levels
  of detail, a SOG folder entered by its ``lod-meta.json``, an ``.lcc2`` index.
  It is the second kind of streamed model beside the tilesets.
- **A 3D Tiles tileset of splats** (glTF tiles with ``KHR_gaussian_splatting``,
  as written by *3DGS-PLY-3DTiles-Converter*), as a folder with its
  ``tileset.json`` or packed in a ``.3tz``: it is a tileset like the others,
  refined by the distance, and its tiles are splats.

The splat engine is loaded with the first splat drawn, never before: a study
without splats does not pay for it.

Add a splat to a study
----------------------

Drop the file on the Space, or use **File ▸ Bring in…** (see
:ref:`how-to-bring-in-porta-dentro`): ``.ply``, ``.spz``, ``.sog``, ``.rad``,
``.lcc2`` and a ``lod-meta.json`` are models, to be made the representation
model of an epoch (RM) or a model of a document (RMDoc), as a mesh is. A
tileset of splats enters as any tileset. The model then follows the rules of
:ref:`how-to-space-load-models-and-tilesets`: its document, its epochs, its pose
(:kbd:`G` / :kbd:`R` / :kbd:`S`), its georeference.

.. image:: /_static/screens/space/splat-model.png
   :alt: A Gaussian splat drawn in the Space as a representation model, its label over it

.. image:: /_static/screens/space/splat-tileset.png
   :alt: A tileset of Gaussian splats packed in a .3tz, refined by the distance

How a point is taken on a splat
-------------------------------

A splat has no surface: a click must say where along the ray the point is. The
rule is **the first place where the opacity of a splat reaches 0.5**, going
from the camera into the scene (the isosurface of the alpha of the nearest
splat crossed). The value 0.5 was chosen by measuring it against the mesh of the
same object, on the east wall of the podium of Templu Mare:

- on a **clean** splat (its Gaussians laid on the surface), the point falls
  **0.2–0.4 cm** from the mesh (median; 0.4–1.2 cm for nine points in ten);
- on a splat with the **fuzz of a trained one** (centres scattered by 1 cm,
  semi-transparent, 2 % of floaters in front), **1.5–2.7 cm** (median), with
  points up to 17 cm in front where a floater sits on the ray;
- a lower threshold takes the haze in front (3–9 cm with 0.15), a higher one
  misses the splat in one point out of three or more.

Every extractor written from a point taken on a splat says how it was taken,
in two attributes: ``pick_rule`` ``splat_alpha_isosurface`` and
``pick_opacity`` ``0.5``.

The tools on a splat
--------------------

- :ref:`how-to-space-wall-from-plan`, :ref:`how-to-space-from-elevation`,
  :ref:`how-to-space-seven-point-box` and :ref:`how-to-space-alignment` work on a
  splat as on a mesh, with the rule above. *Snap to the mesh's edges* has no
  edges to find: the point stays where it was taken. *From elevation* fits its
  plane on your clicks and faces the camera.
- :ref:`how-to-space-annotate-surface` **does not work on a splat**: an areal is
  cut out of the model's own triangles, and a splat has none. EMStudio refuses
  the click and says so. Draw the areal on a **mesh of the same object**, or
  draw the face with *From elevation* (a plane fitted on the splat) and annotate
  that.

.. image:: /_static/screens/space/splat-alignment.png
   :alt: An alignment clicked on a Gaussian splat: three points on the top of the wall

.. image:: /_static/screens/space/splat-elevation.png
   :alt: A solid drawn with From elevation on the face of a Gaussian splat

Limits
------

- The points are as good as the splat: floaters and haze in front of a surface
  move them toward the camera. Where a mesh of the same object exists, read on
  the mesh; read on the splat what the mesh does not have.
- An areal cannot be cut on a splat (above).
- The *Versions for each use* and the flow of levels of detail of the meshes do
  not apply: a streamed splat chooses its detail by itself, within a budget of
  three million splats and the memory of the tiles (Preferences).
- A splat's colours are its own: the colour modes of the Space paint the
  proxies; the models' opacity (Overlays) fades a splat too.
- In the desktop application the splat engine is inside the program (2.5 MB);
  on the web it is fetched with the first splat.
- Measured on an Apple M4 Max: 60 frames per second with a tileset of splats of
  270 MB (355 000 splats drawn) beside the study's meshes and tileset; 26 frames
  per second with 3.3 million splats drawn at once.
