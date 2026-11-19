.. _how-to-rooms-enter-and-share-a-room:

Enter a room and share it
=========================

.. TODO MAN04: rewrite with the three verbs. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

*Goal: work with other people, or alongside another tool, on the same record.*
EMStudio can work alone, in a shared room, or in Sidecar with a tool — and these
compose. This guide is the practical side; the model is in
:doc:`/explanation/open-enter-create`.

Alone (Standalone)
------------------

With no room and no tool connected, you are in **Standalone**: your document, your
machine, no server. The status bar shows ``Standalone``. Everything about editing,
laying out and exporting works here.

Join a room (Hub)
-----------------

A **room** is a shared envelope served by a Field Computing Node or an
institutional/cloud server, with identity, roles, presence and real-time merge.

#. In *Settings ▸ Live sync*, set the server **URL** (the base) and the **room**
   name.
#. Use **Mode ▸ Hub** in the toolbar — this is where the app asks for your access
   **token** (it lives in memory for the session, and is not written anywhere).

Now edits propagate to everyone in the room, merged and **attributed** to their
author. Your **role** (viewer < editor < admin < owner) governs what you may do: a
viewer can read but not write, an asset under embargo is refused with its date.

Presence, not control
---------------------

In a room you see, as **presence**, where others are working — you may follow, or
not. A click of yours never drives another person's screen: that tight coupling
belongs to *your* own tools (Sidecar), not to the room.

Sidecar with a tool
-------------------

Connect a tool — Blender first — to your EMStudio and they become one workstation:
select a unit in EMStudio and its 3D object highlights in Blender, and back. Locally
this needs no server; across machines or with the web version it goes through a
room (then it is a Hub). See
:doc:`/explanation/open-enter-create` and
:doc:`/explanation/place-in-the-framework` for the connectors.
