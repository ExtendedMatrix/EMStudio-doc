.. _how-to-stratigraphy-check-the-chronology:

Check the chronology
====================

*See the epochs on a time axis and resolve their overlaps.*

Epochs and periods follow each other: when two of them overlap, almost always a
bound is wrong, or a phase has been written as an epoch. The **Chronology**
window shows the epochs of the graph on a time axis, measures every overlap, and
offers the corrections. Every correction is one step of ``Edit ▸ Undo``.

Templu Mare has six epochs, from **II A.D.** to the surveys of **2013** and
**2015**; a study with fewer dates shows fewer bars.

Open the Chronology
-------------------

.. image:: /_static/screens/windows/chronology.jpg
   :alt: The Chronology window under the Matrix: the epochs as bands on a time axis, and the table of their bounds.

Use one of these:

- ``Tools ▸ Check the chronology…``;
- in the Matrix, right-click the name of an epoch at the left edge and choose
  **Check the chronology…**: the window opens with that epoch selected;
- from a warning of the study that concerns the chronology, its **Check the
  chronology** button.

The window opens beside the Graph window. Its type, **Chronology**, can also be
chosen from the type menu of any window (see :doc:`/reference/windows`).

Read the time axis
------------------

Each epoch is a bar, and each phase a bar under its epoch, placed between its
start and its end. The axis gives every stretch between two dates a width that
grows with its length but less than in proportion, so that twenty years beside
two thousand stay visible. Where two bars overlap the common stretch is red, and
its tooltip says how many years the two have in common. Click a bar to select
that epoch: the Matrix, the Inspector and the 3D scene follow the same selection.

When nothing overlaps the window says **No overlap.** When no epoch has dates it
says **No epoch has dates: nothing to check.**, and **Write the epochs' dates…**
takes you to the first field to fill.

Resolve an overlap
------------------

Each overlap has a card. Its first line names the two epochs, the years they
have in common and the stretch they share, in the form **… overlaps … by …
years**. Under it, the remedies:

#. When one epoch lies entirely inside the other, the card says so (**… lies
   entirely inside …: usually it is one of its phases.**). **Make it a phase of**
   followed by the name of the larger epoch turns it into a phase of that epoch.
#. Otherwise the card asks to check the two bounds first, and offers to cut at
   the other's bound: **… starts in** followed by the year moves the start of the
   later epoch, **… ends in** followed by the year moves the end of the earlier
   one. **Make it a phase…** stays visible but unavailable, and says by how many
   years the epoch sticks out.
#. **Fix in the table** puts the cursor on the start of that epoch in the table
   below, to write a different year.

A phase that comes out of its epoch has its own card, with **Delete and move into**
followed by the name of the epoch, for a phase that should not exist.

Correct the bounds in the table
-------------------------------

Under the cards, a table lists every epoch and phase (**Epoch / phase**) with
its **Start**, its **End**, its length in years (**Δ**) and **Inside**.

- Write a year in **Start** or **End** and press :kbd:`Enter`. Years before the
  common era are negative numbers.
- In **Inside**, choose an epoch to make this one a phase of it, or **— epoch —**
  to make a phase an epoch again.
- **Delete…** opens a row that says what the epoch holds (units, phases) and asks
  where to move it: choose the epoch or phase in **and move it into**, then
  **Delete and move**, or **Cancel**. The same command is in the menu of the
  epoch's name in the Matrix, as **Delete and move its content…**.

Put the bands in order
----------------------

The bands of the Matrix follow the dates of their epochs. When they do not, the
warnings of the study say **Lanes out of chronological order** and offer **Sort
lanes by date**. A new epoch is added from the menu of an epoch's name in the
Matrix, with **New epoch above** or **New epoch below**, which propose dates
between the two neighbours, or with **New epoch…** in the **Add** menu.

Measure time by horizons
------------------------

At the head of the Chronology window, **Horizons** (marked *beta*) holds the
periodizations of the project: shared measures of time, kept in the em.json and
the same for every graph. A unit, an epoch or a graph is inside a horizon when
its computed interval overlaps it. The Matrix, the Graph and the 3D scene read
the horizons through the switch **Epochs** / **Horizons** of their bar, window by
window.

.. image:: /_static/screens/windows/horizons.png
   :alt: The Horizons panel at the head of the Chronology: the periodization, the note on the order, and three horizons listed by their dates, the most recent on top, two of them marked by their overlap.

#. Choose a periodization in **Periodization**, or make one with **+**; **✎**
   renames it and **🗑** deletes it with its horizons.
#. **+ Horizon** adds a horizon right after the most recent one: it starts
   where that one ends and lasts a hundred years (in an empty list, from 0 to
   100). Write its name, its **From** and its **To** (negative years are before
   the common era), and choose its colour.
#. The list follows the dates: by **From**, then by **To**, the most recent on
   top, as the bands of the Matrix and the epochs. A row whose **From** or
   **To** you change takes its place when you leave the field, with
   :kbd:`Enter` or a click elsewhere, never while you type, and flashes once.
   There are no arrows to move a row: its dates give its place.
#. Each horizon is compared with the one before and the one after it in time.
   An overlap is said on both rows, with its years and its stretch, as
   **Overlaps … by … years (…–…)**; a gap as **… years uncovered between this
   and … (…–…)**. A file whose horizon has its **From** after its **To** shows
   **«From» (…) comes after «To» (…)** on that row. Nothing is corrected for
   you: you decide, and every change is one step of ``Edit ▸ Undo``.
#. A **From** after the **To** is refused as you write it: the message says
   **«From» (…) cannot come after «To» (…): nothing written**, and the field goes
   back to the year saved.
#. **Show** chooses the horizons the views draw, in this session only;
   **Nodes** counts the nodes inside each one; **×** deletes a horizon.

The order that a file stores for its horizons is read only to decide between
two horizons with the same dates; EMStudio never rewrites it.

Read the dating of each unit
----------------------------

The epochs are one part of the chronology; the other is the dating of each unit,
which the s3Dgraphy library computes from the relations: a start that rises from
the units below (*terminus post quem*), an end that comes down from the units
above (*terminus ante quem*), the dates of what a unit contains.

- Select a unit: the **Inspector** shows its start and end with where each comes
  from, and a click on the source goes to the unit or epoch that gives it (see
  :doc:`/reference/inspector`).
- Open a **Tabular** window on the **Datings** sheet to read the same for every
  unit, with the relation each bound comes from.

The dating is computed when it is needed and is never written into the study.
EMStudio asks it of its bridge: when the bridge does not answer, the sheet says
**calculation unavailable: bridge off** and the Inspector says so beside the
unit.

Two warnings concern the relations themselves. **A cycle of** relations means
that a chain of relations comes back to where it started: one of them is wrong,
and the Matrix draws in red the one that closes the cycle upwards. A unit
declared **the same time as** another, while a chain of relations puts one after
the other, also signals a wrong statement. Correct the relation (see
:doc:`add-and-connect-units`).

What you get
------------

Epochs that follow each other without overlaps, phases inside their epochs, bands
in chronological order, horizons in the order of their dates, and a dating for
each unit that you can trace back to the relation it comes from.

See also
--------

- :doc:`/reference/inspector` for the bounds and phases of an epoch.
- :doc:`lay-out-the-matrix` for the bands of the Matrix.
- :doc:`edit-many-units` to move several units to another epoch.
