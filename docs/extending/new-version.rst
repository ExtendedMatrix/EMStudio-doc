.. _extending-new-version:

Release a new version
=====================

*Decide which number moves, raise only the part that changed, and let the
studies that use the package choose when to follow.*

A version is a promise to the studies that declare it: **a version is never
reused**. The same id and version with another content is refused by every
tool and by every repository, so that a study never meets two different
packages under one name.

Which number moves
------------------

Versions have three numbers, *major.minor.patch*:

- **patch** (``0.1.0`` → ``0.1.1``) for labels, descriptions, colours and
  styles;
- **minor** (``0.1.0`` → ``0.2.0``) for new types, new concepts, new points,
  new combiners, new commands;
- **major** (``0.x`` → ``1.0.0``, ``1.x`` → ``2.0.0``) when a type is removed
  or changes its meaning, its primitive or its operation.

A package stays at ``0.x`` while it is ``proposed``.

Each part has its own version
-----------------------------

An archive has its own ``version``; in a mixed package, ``[data]`` and
``[code]`` have theirs. **Raise only the part that changed**, and always the
archive:

.. list-table::
   :header-rows: 1
   :widths: 34 22 22 22

   * - What changed
     - ``version``
     - ``[data].version`` and ``profile.json``
     - ``[code].version``
   * - a label of the data
     - 0.2.0 → 0.2.1
     - 0.1.0 → 0.1.1
     - unchanged
   * - a fix in the code
     - 0.2.0 → 0.2.1
     - unchanged
     - 0.1.0 → 0.1.1
   * - a new command
     - 0.2.0 → 0.3.0
     - unchanged
     - 0.1.0 → 0.2.0

The data of a package keep their version in two places that must agree:
``[data].version`` in the envelope and ``version`` in ``profile.json`` (for a
package of data only, the archive's ``version`` is the data's). The example
studies of the package declare it in their header: raise it there too.

Steps
-----

#. Change the files, and the numbers as in the table.
#. For a major version, write ``CHANGELOG.md`` beside the envelope: what
   changes in meaning, and what a study should check. EMStudio shows it when a
   study is about to follow a major version.
#. Validate and build (see :doc:`test-and-validate`).
#. Publish the archive beside the older ones (see :doc:`publish`). In em-profiles,
   a pull request with the new version; the curators of the package review
   it.

What the people who use the package see
---------------------------------------

- **New data sit beside the old ones.** No study changes the version it
  declares by itself: when a newer version is installed, the Extensions
  window says that the open file uses an older one and offers
  **Update the declaration to …**; for a major version, **What changes…**
  shows the notes first, and **Keep the old one** leaves the file as it is.
- **New code replaces the old one** on the computer, and the older versions
  stay available under **Versions…**. EMStudio loads the new code at its next
  start.
- **The question of trust comes back only when the code asks for more**: new
  permissions, new capabilities, or another origin. An update that changes
  none of these installs with the trust already given.
- **A review follows the code.** An update whose code section did not change
  keeps its review; changed code is code nobody has read yet.

See also
--------

- :doc:`/how-to/extensions/install-packages-and-plugins`, *Use a package in a
  study*.
- :doc:`/how-to/extensions/repositories-signatures-updates`, *Keep extensions
  up to date*.
- :doc:`permissions-and-trust`.
