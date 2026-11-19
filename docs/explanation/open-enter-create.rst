.. _explanation-open-enter-create:

Open, enter, create
===================

.. TODO MAN05: rewrite with the three verbs (was «Rooms, Sidecar, and collaboration»). The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

EMStudio can work entirely on its own, alongside another tool on your machine,
or inside a shared room with other people and their tools. These are not three
separate "modes" you switch between — they are **two independent axes that
compose**. Understanding the two axes removes almost every confusion about how
EMStudio connects to the rest of the ecosystem.

Two axes, not three modes
-------------------------

**Axis 1 — collaboration:** *no room* ↔ *room*. A **room** is a shared envelope
served by a server (the Field Computing Node, or an institutional/cloud server).
It carries identity, access control, presence, real-time merge (CRDT), and
persistence. Without a room you are alone with your document; in a room, one or
more people share the same record.

**Axis 2 — connectors:** *no tool* ↔ *one or more tools connected*. This is about
tool-to-tool (Blender, Heriverse, Tropy…), not person-to-person.

The two axes are orthogonal, and their four cells are the "modes" you may have
heard named:

.. list-table::
   :header-rows: 1
   :widths: 20 40 40

   * -
     - no tool
     - tool connected
   * - **no room**
     - **Standalone** — you, your document
     - **Sidecar** — a tool linked directly (local)
   * - **room**
     - Collaborative EMStudio — people, one record
     - **Hub** — tools join the shared room

So **Sidecar and Hub are the same connector over two transports**; the room is a
layer *on top*, not an alternative. They do not overlap — they compose. You can
be alone with a Sidecar link to your own Blender, or in a room with three
colleagues and no tools, or both at once.

Where tools meet EMStudio: the rendezvous ladder
------------------------------------------------

"Is there a network in the middle?" only asks *which rendezvous* a connection
uses. The same connector runs at every rung:

#. **Direct** — same machine, no server = **Sidecar**. Two desktop apps talking
   (EMStudio desktop + Blender), producing an ``em.json`` on one side and a
   ``.blend`` on the other.
#. **LAN server** — a Field Computing Node on the local network = **Hub (local)**.
   Two EMStudio instances, or Blender on another machine in the same building.
#. **Cloud server** — an institutional or ECCCH server online = **Hub (global)**.
   Heriverse online, or a partner tool anywhere on the internet.

Only the transport adapter changes; the shared language (the ``em.json`` graph,
the content-addressed object store, the real-time CRDT) stays the same. Desktop
tools tend to sit at rung ① but can climb; online tools (Heriverse) are born at
rung ③; the **web** version of EMStudio lives from rung ② upward, because a
browser needs a server to reach another machine.

What is shared, and how far it reaches
--------------------------------------

Three different kinds of state can travel between tools and people, each with its
own **reach** — and keeping them apart is what makes collaboration feel right
rather than intrusive.

**1. The document** (the graph, the assets, the DTC provenance — the persistent
record). Reach: **the whole room**. If you add or edit US1, everyone in the room
sees it, merged and attributed. This is the point of a room.

**2. Ephemeral interaction** (selection, hover, camera, focus — "click US1 here,
highlight US1's 3D object there"). Reach: **one user's own linked tools** — the
**Sidecar link**. It is not a change to the document, and it does **not** reach
other people.

**3. Presence** (awareness — "Emanuel is looking at US1"). Reach: **the room, as
information only**, never as a command.

The consequence is the line that matters: a room **never lets one person's click
drive another person's software**. Driving someone else's selection or camera
would be hostile, so it is not done. That tight "click-here-selects-there"
coupling is the Sidecar link, and it is scoped to *your* tools. Even inside a
room you will want a Sidecar link between your own EMStudio and your own Blender
or Heriverse — the room shares the document and shows presence; your Sidecar
link drives your own view.

Examples
--------

**EMStudio + Blender, same user, same machine (Sidecar).** Click US1 in EMStudio
and the object highlights in Blender; select the object in Blender and its node
selects in EMStudio. This is your compound workstation — ephemeral, personal.

**EMStudio + Heriverse (Hub, cloud).** Heriverse online reads the published study
(the graph and the 3D from the store) and disseminates it. If you have your own
Sidecar link to it, clicking a node still focuses the object *for you*; other
viewers are not driven by your clicks.

**A room with two archaeologists.** You both edit the same matrix; every change
propagates and is attributed to its author. You see, as presence, where the other
is working — and you may choose to follow, or not. Neither of you controls the
other's screen.

Why this matters for plugins
----------------------------

Because the three reaches are distinct, a connector plugin declares *which layers*
it participates in — as separate capabilities: ``sync-document`` (room reach),
``link-selection`` (user reach — the Sidecar interactivity), and ``presence``
(room reach, information only). The contract itself makes it impossible for one
user's selection to become another user's command. See
:doc:`place-in-the-framework` for how connectors fit the wider ecosystem.
