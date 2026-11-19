.. _explanation-extensions-and-trust:

Extensions and trust
====================

*What a package, a plugin, a repository and a signature are, and what a signature guarantees.*

EMStudio can be extended by other people: a project adds the properties of its
kind of study, a laboratory its recording sheet, a programmer a command that
reads a format. Each extension asks for some trust, and the amount depends on
what it carries. EMStudio says plainly what each piece guarantees, so that the
part left to your judgement is clear.

Data and code
-------------

An extension carries data, code, or both, and the difference is the one that
matters most.

- A **community package** carries **data only**: vocabularies, properties for a
  kind of study, extractors and sets of canonical points to place on a model,
  recording sheets, colour schemes. Every tool of the Extended Matrix reads it,
  and it runs nothing. The worst a package can do is describe something badly.
- A **plugin** carries **Python code**: commands, importers and exporters,
  checks, panels. On your computer a Python plugin has the powers of your user,
  as any program you run does.
- A **mixed package** carries both. You can install its data alone, with
  **Data only**, and add the code later.

Extensions are installed on the computer, not in a study, and EM Tools in
Blender uses the same ones. A study declares the community packages it uses,
with their version, as it declares its vocabularies (see :doc:`vocabularies`).

The trust question
------------------

Before installing a plugin, EMStudio shows its panel **Code**: the permissions
it asks and the reason it gives for each, what it can do (*read the graph*,
*write the graph*), and where its commands appear. The answer you give,
**Install everything**, **Data only** or **Cancel**, is your trust in that code.

The question comes back only when it has something new to ask: when a new
version asks for more, can do more, or comes from elsewhere. An update that
changes none of these installs with the trust already given. A plugin loaded
from a development folder, for those who write plugins, is marked
**development, not verified**.

Every act of a plugin is recorded in the study with the plugin that made it, so
that a value written by a plugin can always be told apart from one written by a
person.

Repositories
------------

A **repository** is a list of extensions published in one place: the official
list of the Extended Matrix, the list of a project on the internet, or a folder
on the laboratory's network. Its index gives, for every archive, a fingerprint
computed from the archive's bytes. EMStudio checks every archive against that
fingerprint before opening it, so what you install is exactly what the index
names.

Reading a repository on the internet needs **Allow online access**, a single
switch for the whole computer; a repository in a folder works without it.

What a signature guarantees
---------------------------

A repository can be **signed**. Whoever runs it holds a secret key and publishes
the matching public key; you give EMStudio that public key when you add the
repository. From then on, its index and its archives are taken only when they
carry a valid signature of that key.

A signature guarantees two things:

- **who published the bytes**: the holder of the key you chose to trust;
- **that the bytes arrived unchanged**: an archive altered on the way, or on the
  server, no longer matches its signature and is refused.

A signature says nothing about the quality or the intentions of the code. It
tells you that these are the bytes the repository published; whether the
repository deserves your trust is a judgement about the people behind it.

Reviews
-------

What a signature leaves open, a **review** can answer in part. A repository can
list the plugins whose code a person has read, with who read it and when. If you
tick **Trust the reviews of this repository**, a reviewed plugin installs
without the trust question and shows **reviewed by … on …**. A review is the
judgement of a person, and its worth is the worth of that person's reading; you
decide, repository by repository, whose reviews to accept.

EMStudio shows the two marks apart: **signed by the key … of …** for where the
bytes come from, **reviewed by … on …** for who read the code.

Plugins of the node
-------------------

A StratiGraph node can run plugins for a room, and there the question of trust
is answered differently, because the code runs on a shared server. Only the
node's administrator installs them, and each runs in a closed space: no network,
none of the node's files, a time limit and limits on what it may use. The node first proves that
the closed space holds; when it cannot prove it, its plugins stay off. The owner
of a room turns a plugin on for that room, and what the plugin writes arrives as
changes of the room, signed by the person who ran it and by the plugin.

What stays with you
-------------------

Fingerprints, signatures and the closed space of the node are checked by the
program. Three things remain matters of trust, and EMStudio leaves them to you:

- the people who hold the key of a repository;
- the people whose reviews you accept;
- a plugin installed from disk with no signature and no review, whose code you
  accept by answering the trust question.

The how-to pages describe the gestures: :doc:`/how-to/extensions/install-packages-and-plugins`
and :doc:`/how-to/extensions/repositories-signatures-updates`.
