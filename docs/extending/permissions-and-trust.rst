.. _extending-permissions-and-trust:

Declare permissions and earn trust
==================================

*Say what the code needs and why, in the words the person reads before
installing it; then let a review answer for it.*

A Python plugin runs with the powers of the user who installed it, as any
program does. EMStudio cannot shut it in a cage on a personal computer, so
trust comes from what is **declared** and from who **read** the code. Your
part, as the author, is to declare honestly and briefly.

What the envelope declares
--------------------------

.. code-block:: toml

   [code]
   hosts = ["emstudio"]

     [code.permissions]
     files = "Reads the chosen 3D model to propose the points"

     [code.descriptor]
     capabilities = ["read-graph", "write-graph"]

     [[code.commands]]
     id = "vlt.mark_infill"
     writes = true

- **Permissions** say what the code does on the computer, each with its
  **reason**: ``files`` (it reads or writes files), ``network`` (it talks to
  the network), ``clipboard``, ``processes`` (it starts other programs). The
  reason is a short sentence, at most 64 characters, without a final full
  stop, written for the person who will read it in the panel **Code** under
  **Permissions, and why:**.
- **Capabilities** say what the code does with a study: ``read-graph``,
  ``write-graph``, and the others of :doc:`envelope`. A write without its
  capability is refused at the moment it is attempted.
- ``writes`` says, command by command, whether it changes the study. A
  command declared ``writes = false`` cannot write at all: the library
  refuses it.
- ``hosts`` says where the code runs: ``emstudio``, ``blender`` (EM Tools),
  ``server`` (a StratiGraph node, in a closed space).

Declare what the code does, nothing more: every permission the person reads
is a question you ask.

The question of trust
---------------------

Before installing a plugin, EMStudio shows the panel **Code**, marked
**NOT VERIFIED** when no review covers it: the permissions with their
reasons, what it can do, where its commands appear, and the sentence
**A Python plugin has your user's powers on this machine.** The answer —
**Install everything**, **Data only**, **Cancel** — is the person's trust.

The question comes back only when a new version **asks for more**: a new
permission, a new capability, another origin. So keep the declarations
stable: an update that only fixes the code installs without asking again.

Dependencies travel in the archive
----------------------------------

Nothing is downloaded with ``pip`` when a plugin is installed. A library the
code needs travels in the archive as a **wheel**, one for every platform
declared in ``[code].platforms`` (a pure-Python wheel serves all of them):
the person installs exactly the bytes the repository checked.

The development folder is yours
-------------------------------

The development folder loads code without the question, because the person
who writes it is the person who runs it. Its acts are marked
**development, not verified** in the menus and in the record of the study.

Earn a review
-------------

A **review** is a person's reading of the code. In the official index it is a
line of ``reviewed.json`` in em-extensions: the fingerprint of the code
section, who read it, in which role, and when. A plugin is reviewed by the
editor or by the curators of a community package that requires it; its
author does not review it alone. A code whose fingerprint is reviewed installs
without the question and is marked **reviewed by … on …**.

To make a review easy:

- keep the code short and readable, and the permissions few;
- write the files the code makes in ``ctx.data_dir``, its own folder, and
  stamp them (see :doc:`stamp-derived-files`);
- write every change through ``em.write``, which records the plugin in the act;
- add tests that run without EMStudio (see :doc:`test-and-validate`).

See also
--------

- :doc:`/explanation/extensions-and-trust`, for whoever installs.
- :doc:`design`, why the trust is built this way.
- :doc:`envelope`, every key of ``[code]``.
