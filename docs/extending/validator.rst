.. _extending-validator:

What the validator says
=======================

*Every sentence of the validator and of the tools around it, with its code
and its level, as the library writes them.*

The EM tools validate a package with one implementation: the Extensions
window shows its words before installing, ``python -m s3dgraphy.extensions
validate`` prints them, the repositories run them on every proposal. Each
problem has a **code**, a **level** and a sentence in English and Italian
(``--lang it``); the place where it was found (a file, a key) is written in
front of the sentence.

- **error** — it refuses the package, or only its code when the problem
  concerns the code alone (the data go in all the same);
- **warning** — advice, never a refusal;
- **info** — what ``build`` changed in the archive it wrote;
- **refusal** — an operation of the command line or of the window that stops
  (an installation, a repository, a removal), with the reason;
- **—** — said by another path: a file that cannot be read, a signature, a
  node's closed space.

The words between ‹ › are filled in with the case at hand: a path, a key, a
value, a version. ``python -m s3dgraphy.extensions validate --json`` gives the
same problems as data, each with its ``code``.

.. include:: /reference/_generated/extending-messages.rst
