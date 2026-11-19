.. _how-to-space-colours-and-legend:

Colour the scene and read the legend
====================================

*Colour the proxies by type, epoch or a property, and read the legend.*

The proxies of the **3D scene** take, at first, the colour of their unit's type,
as the Extended Matrix draws it. The **Colours** window gives them other
colours, to answer other questions: which units were born in which epoch, which
are new in the epoch shown, which share a value of a property, such as the
material. The colours are a way of looking: they change the scene, not the
units. A set of colours for the values of a property is a **colour scheme**, and
it can be kept in a ``.emc`` file, the file EM Tools uses for the same purpose,
or inside the em.json.

Before you start
----------------

Open the study in the **Space** workspace and choose an epoch in the bar of the
**3D scene**. The colours apply to the proxies of the epoch shown.

Open the Colours window
-----------------------

Press **Colours** in the bar of the **3D scene**, or choose ``Tools ▸ Colours…``.
The window works on the Space it was opened from (from the Tools menu, the active
one). Its first line, **Epoch shown:**, names the epoch and the number of its
proxies.

The window floats over the page: drag it by its bar and resize it from its
corner. **⇱** takes it out into a window of its own, which you can move to
another screen, and **⇲** brings it back. The **?** explains each part.

The **▾** beside **Colours** in the bar, or a right click on it, opens the quick
menu instead: the same three ways of colouring, without the list of values, and
**Open the Colours window…**.

Choose how to colour
--------------------

#. Choose one of the three ways at the top of the window.

   **EM**
      Each proxy in the colour of its unit's type, as always. This is the
      starting point.

   **Epochs**
      Two variants. **Epoch of birth** gives every unit the colour of the epoch
      it was born in, as EM Tools does. **New and survived** looks at the epoch
      shown: the units born there are in full colour, those born before and still
      alive are faded. The list gives the epochs with their colours. An epoch's
      colour belongs to the graph: changing it here changes the colour of the
      epoch node, as one step of undo.

   **Property**
      One colour for each value of a property. Continue with the steps below.

#. In **Property**, choose the property in the list. Each name is followed by the
   number of units of the epoch that have it: in Templu Mare, ``material``.
#. Read the values found. Each row gives the **Value**, how many **Units** have
   it, and its colour. Text values start from a qualitative palette, numbers
   from a scale between their least and their greatest value.
#. To change one colour, click its swatch. To see which units have a value,
   click the value: the units are selected, and the scene shows them selected.
#. To recolour all the values at once, choose a **Scale** and press **Apply the
   scale**. For numbers, **min** and **max** set the ends of the scale. A scale
   for numbers chosen for text values is allowed, and the window warns that the
   colours will then follow the alphabetical order.
#. Look at the two rows at the bottom, which are always there: **has the
   property, empty value** and **does not have the property**. Each has its
   colour and its count. Tick **leave as it is** to let the units without the
   property keep the colour of their type.
#. Every change appears at once in the scene, as a draft. At the foot of the
   window, **Apply** confirms it, as one step of undo and a line in the **Log**;
   **Cancel** puts the colours back as they were. Closing the window with changes
   not applied asks whether to apply them, drop them, or keep editing.

Read the legend
---------------

With **Epochs** or **Property**, a legend appears in a corner of the scene: each
colour with its epoch or value, and the number of proxies.

- A click on a row isolates those proxies, a second click hides them, a third
  gives them back.
- **▾** folds the legend into one line, which says how many values it holds;
  **▸** opens it again.
- Drag the legend by its head: it goes to the corner of the scene nearest to
  where you drop it. Its corner resizes it. A long legend shows its first rows,
  and a last row that says how many more there are opens the rest.
- **✎** opens the **Colours** window on the same scheme.

The legend's place and size are kept for each view, on this computer.

Keep a colour scheme
--------------------

A scheme made for a property can outlive the session in two ways.

As a ``.emc`` file
   **Save .emc…** writes the scheme as a file, and **Open .emc…** reads one,
   including those written by EM Tools in Blender. The file keeps the colours of
   the values and of the two special rows.

In the em.json
   The section **In the file**, at the bottom of the window, lists the schemes
   the study's file holds, the one this graph uses marked **in use**.

   - **Keep in the file…** asks for a name and puts the scheme on screen into the
     file, as the one this graph uses.
   - **Use** colours the graph with a scheme of the file, and writes in the file
     that the graph uses it; **Stop using** leaves the scheme in the file.
   - **×** takes a scheme out of the file.
   - **Expel to a folder…** writes each scheme as a ``.emc``, then asks whether to
     take the schemes out of the file: **Take them out** or **Keep them in the
     file**.
   - **Import into the file…** takes one or more ``.emc`` files in, each named
     after its file.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         **Expel to a folder…** asks for a folder, starting from the em.json's
         own, and writes the ``.emc`` files there. **Import into the file…**
         opens the system's dialog, where several files can be picked at once.

      .. tab-item:: Web
         :sync: web

         **Expel to a folder…** downloads one ``.emc`` for each scheme into the
         browser's downloads. **Import into the file…** opens the browser's file
         picker.

   Each of these gestures marks the file as changed, and the message that
   follows offers to undo it. The schemes are saved with the file, and a study
   opens with the scheme its graph uses. ``File ▸ Clean the file…`` can take
   them all out again.

What you get
------------

The proxies of the scene are coloured by the question you asked, with a legend
to read them. The colours never change the units: the graph keeps its types and
its values. The choice of colours stays with the view on this computer, unless
you keep the scheme in the file or in a ``.emc``. EM Tools reads both: a scheme
in use in the em.json is applied when the file is imported into Blender.

See also
--------

- :doc:`/reference/em-legend`, for the colours and shapes of the Extended Matrix.
- :doc:`/how-to/files/clean-the-file`, to take the schemes out of the file.
- :doc:`containers-and-epochs`, for what the scene shows in each epoch.
