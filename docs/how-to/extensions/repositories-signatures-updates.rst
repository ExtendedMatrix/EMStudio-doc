.. _how-to-extensions-repositories-signatures-updates:

Use repositories, signatures and updates
========================================

*Add a repository, check what is signed, and keep the extensions of this computer up to date.*

A **repository** is a list of extensions published in one place: the official
list of the Extended Matrix, the list of a project on the internet, or a folder
shared on the laboratory's network. EMStudio reads the list, its index, and
installs from it with the same page and the same questions as an installation
from disk. Every archive is checked against the fingerprint that the index gives
for it before it is opened. A repository may also be **signed**: then its index
and its archives are taken only when they carry a valid signature of the key you
gave for it.

Repositories belong to the extensions of this computer, and EM Tools in Blender
uses the same ones. They are managed in the desktop application: the web version
lists the packages that the node's administrator installed (see
:doc:`install-packages-and-plugins`).

Open the repositories
---------------------

#. Open ``Settings… ▸ Extensions`` (the command search, :kbd:`F3`, finds it as
   **Extensions…**).
#. Press the **selector of the repositories**, at the top of the page: the
   address of the repository in use, **official**, **+ N more** and ▾. The panel
   **Repositories** opens over the list.

.. image:: /_static/screens/settings/extensions-repositories.png
   :alt: The panel Repositories over the Extensions page: Allow online access ticked, Refresh all, the official repository Extended Matrix signed with its key, Check now and Edit, and the form Add a repository with its address and access token.

Allow online access
-------------------

Tick **Allow online access**, at the top of the panel, to let EMStudio read the
repositories on the internet. The switch is one for the whole computer, as in
Blender, and it is off by default: off, nothing goes to the network. A
repository in a folder (``file://``, the laboratory's network) works with the
switch off. **Refresh all** reads every repository in use again.

The repositories in the panel
-----------------------------

The **official repository**, *Extended Matrix*, is always the first line, marked
**official**. Its tick pauses it or uses it again; it is never removed. When it
has not been added on this computer yet, its line is there all the same, and
ticking it adds it.

Each line gives the repository's name, **on the internet** or **folder**,
**token set** when it has one, **signed · key …** for a signed repository, its
address, how many entries it had and when it was read (or **not read yet**), and
the problems of the last reading. A repository without a key says
**Not signed: each package asks once before its code runs**.

- The tick on the left pauses a repository (**paused**: what it installed
  stays) or uses it again.
- **Check now** reads its index again.
- **Edit** opens its details in place: **Trust the reviews of this
  repository**, **Check for updates at start-up**, **Access token…** and
  **Signing key…**.
- **Remove repository**, for the others, forgets the repository and its list;
  what you installed from it stays installed.

Add a repository
----------------

#. Under **Add a repository**, at the foot of the panel, write in
   **Address (https, file:// or a folder)** the address of the repository's
   index (``https://…`` or ``file://…``) or the path of a folder; on the desktop,
   **Choose a folder…** opens the system's folder dialog, for a folder on the
   laboratory's network.
#. **Access token (optional, never shown again)** is for a private repository.
   It is sent only to the server of that repository, kept on this computer, and
   never shown again.
#. Press **Add**. EMStudio reads the repository at once: a folder always, a
   repository on the internet when online access is on.

**More options…** opens the window **Add a repository** with every field:

- **Address**, with **ExtendedMatrix (official)**, which writes the address of
  the official list, and **Choose a folder…**;
- **Name**, taken from the address when left empty;
- **Access token (optional)**;
- **Check for updates at start-up**, which makes EMStudio read this repository
  when it starts and say what can be updated (off by default);
- **Trust the reviews of this repository**: a plugin whose code this repository
  lists as reviewed then installs without the trust question, marked with who
  read it and when. Choosing the official list ticks it;
- **Public key (minisign), optional**: the public key that whoever runs the
  repository publishes, the line that starts with ``RW``. With a key, an index
  or an archive not signed by that key is refused.

Install from a repository
-------------------------

#. On the page, what a repository offers is listed under the repository's own
   heading, in the same list as what is installed. An entry not on this computer
   says **Not installed**; open its row to read what it contains and where it
   will show (see :doc:`install-packages-and-plugins`).
#. Press **Install** (or **Update**). EMStudio downloads the archive, checks it,
   and opens **Install from …** with the same panels **Data** and **Code** as an
   installation from disk.
#. Under the panels, read what comes with it:

   - a line that says the archive is the one the repository's index names;
   - for a signed repository, a line that says it is signed by the repository's
     key, over that fingerprint;
   - the packages it requires, installed first, with a mark on those that carry
     code;
   - the packages it offers but does not install;
   - a vocabulary in tier C, downloaded from its source onto this computer only
     when online access is on.

#. Answer **Install everything**, **Data only** or **Cancel**, as for a package
   from disk. The extension stays under its repository's heading, and
   **Install the code…** of a package taken as data only installs the code from
   the same repository.

Read a signature
----------------

A signature says who published the bytes: the holder of a key. It does not say
that anyone read the code. EMStudio shows the two things apart.

- **signed by the key … of …**, beside an installed extension or in the
  confirmation, names the key and the repository: these are the bytes that the
  repository published, unchanged on the way.
- **reviewed by … on …** names the person who read the code, in the list of a
  repository whose reviews you trust.
- A code that is signed and that nobody has reviewed yet says both, and which
  step is missing: *from extendedmatrix, signed ✓ · one step missing: a review
  of its code (none in extendedmatrix's list of the reviewed)*. Until a review
  is listed, its code runs on the trust you gave when you installed it.

.. image:: /_static/screens/settings/extensions-signed.png
   :alt: The Code part of Geofisica, installed from the official repository: versions 0.1.0, from extendedmatrix, signed, one step missing: a review of its code; under it, signed by the key 269B910A23431722 of extendedmatrix.

To sign a repository after adding it, press **Edit** on its line in the panel
**Repositories**, then **Signing key…**, and paste its public keys, one per
line. An empty field makes the repository
unsigned again: only the fingerprints of its index count.

Keep extensions up to date
--------------------------

- When a repository offers a newer version of something installed, the row of
  the extension says **Update 0.1.0 → 0.2.0** (with its versions), and its
  action is **Update**. **Updates**, at the top of the page, shows only these.
- **Update all (…)**, in the bar at the foot of the page, updates every extension a repository offers newer, one
  after the other. Its window lists first the updates that ask the trust
  question again, because what the code asks, what it can do, or where it comes
  from has changed. **Update the others** leaves those aside;
  **Update all, trusting these too** updates them as well.
- A new version of the data goes beside the old one: no study changes the
  version it declares until you update its declaration (see
  :doc:`install-packages-and-plugins`).
- With **Check for updates at start-up** ticked, a message appears a few seconds
  after EMStudio starts, **Updates available:** with the list, and
  **Extensions…** to open the page. Nothing is installed by itself.

Go back to an earlier version
-----------------------------

#. Open the row of an installed extension and press **Versions…**. The versions on
   this computer appear side by side: **Data** and **Code**, with the one
   **in use**.
#. On an older code version, **Use this** makes it the active code again, with no
   download; the program loads it at its next start. If it asks for more than
   the current one, the trust question comes back.
#. **Remove this version** takes one version away; a study that declares it
   opens all the same, with the labels saved in its values.
#. **Remove the old code versions** keeps only the code in use. The data are
   never removed in bulk.

**Clean up…**, in the bar at the foot of the page, lists what no installed extension owns
(half-finished installations, old downloads) and removes it after you confirm.

What you get
------------

Extensions that come from known places: archives checked against their index,
signed by the key you chose to trust when the repository is signed, updated when
you decide, with the trust question asked again whenever a plugin asks for more.

See also
--------

- :doc:`install-packages-and-plugins`, for the confirmation's panels and the trust
  question.
- :doc:`/explanation/extensions-and-trust`, for what a signature and a review
  guarantee.
- :doc:`/reference/desktop-and-web`, for repositories in a folder.
- :doc:`/reference/settings`, section *Third-party tools*, for the tools
  EMStudio downloads; **Check for updates…** updates EMStudio itself.
