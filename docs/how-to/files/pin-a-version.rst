.. _how-to-files-pin-a-version:

Pin a version
=============

*Fix a citable version of the study.*

A study changes for years, while a paper, a report or a delivery cites the study
as it was on a given day. **Pin version…** writes that state as a separate file
which later work cannot reach: the stable thing a citation, and a DOI, can point
at.

Read the version of the study
-----------------------------

When the study has a version, the status bar shows **Project** followed by the
version number, for example *Project v12*. Hold the pointer on it to read:

* the **content digest**, a fingerprint computed from the graphs;
* **revision of**, the fingerprint of the version it came from;
* **modified**, the date and time of the version.

The version advances only when the content changes: when the file is saved or
pinned after a change to its graphs, and when it receives the graphs of another
file (see :doc:`integrate-another-file`). Saving a file whose graphs
have not changed leaves the number as it is, and so does a change that is only a
way of looking at the graphs, such as a colour scheme (see :doc:`clean-the-file`).

Pin
---

#. Save the study first, so that the pinned version is the one on the disk (see
   :doc:`open-save-recent`).
#. Click a graph of the file you want to pin: EMStudio pins the file of the
   active graph.
#. Choose ``File ▸ Pin version…``.

EMStudio settles the version and hands the snapshot over as a download, named
after the graph with the version number and the ending ``.pinned.em.json``, for
example ``Temple-v12.pinned.em.json``. The file holds the whole study as it is,
with its version, its fingerprint and the date and time of the pinning. The
message **pinned** repeats the version and its fingerprint, and the Log keeps the
same line.

If the study has no graph yet, a message says that there is nothing to pin.

Keep the pinned file
--------------------

Move the pinned file into the folder of the project, beside the study, or into
the archive where your citable data lives. Do not edit it: its value is to stay
as it was written. Continue your work in the ``.em.json`` of the study, whose
version will advance with the next changes.

The DOI is minted by the Catalog; the pinned file is the stable thing it points
at.

What you get
------------

A snapshot of the study with a version number and a fingerprint, which a
citation can name and anyone can check against the content.

See also
--------

* :doc:`/reference/emjson`, the version numbers of an ``.em.json`` and the
  version of the work.
* :doc:`/how-to/archive/versions-for-each-use`, the versions of the models for
  each use, a different thing from the version of the study.
* :doc:`project-folder`, where to keep the study and its files.
