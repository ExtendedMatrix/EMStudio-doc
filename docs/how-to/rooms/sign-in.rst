.. _how-to-rooms-sign-in:

Sign in with ORCID and to a node
================================

*Declare who you are and reach your StratiGraph node.*

Two things are asked of whoever works online, and EMStudio keeps them apart.
The **author** is who signs, on this computer: the person whose ORCID iD goes on
the stamps, the versions and the paradata. The **node** is the StratiGraph
server that keeps the rooms, and your **account** on it is how the node knows
you. The two are tied by the same ORCID: when the node's account and the author
of this computer carry the same iD, they are one person.

Both live in one menu: click the chip at the top right of the window (it reads
**Who signs?** until an author is declared). The menu opens with four numbered
steps, **Author**, **Node**, **Sign in** and **My space**, each with a tick when
it is done; a click on a step goes to its section. The label at the left of the
status bar (:kbd:`⇧⌘L` on the Mac, :kbd:`Ctrl+Shift+L` elsewhere) opens the
same menu at the section **Where you work**.

Say who signs
-------------

An author can be declared offline: nobody has to confirm it for you to start
working and saving.

.. image:: /_static/screens/menus/who.png
   :alt: The chip's menu with the Author section on top and its button Say who signs, then the node and account, where you work, and my space.

#. Open the chip's menu. In the section **Author**, press **Say who signs…**.
   The panel **Who you are** opens.
#. Under **Declare your ORCID iD**, type the iD (``0000-0000-0000-000X``) and,
   if you wish, your name. Press **Declare**. EMStudio checks the shape of the
   iD and its check digit: an iD with one wrong or two swapped digits is
   refused with the reason.

The chip now shows your name, and **Author** has its tick. The identity is
*declared*: you can work, stamp and save. Publishing as that person needs a
verification.

To change the name later, or to keep several people on one field laptop, use
**Edit in Settings › Identity**: the **Identity** tab of ``Settings…`` lists the
identities known on this computer, with **Use** and **Forget** for each (see
:doc:`/reference/settings`).

Verify the iD with ORCID
------------------------

#. In the section **Author** of the chip's menu, press **Verify with ORCID…**.
#. In the panel **Who you are**, the line **Verify with ORCID** says which way
   the verification will take, once EMStudio has checked that ORCID can be
   reached. Press **Verify with ORCID**.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         ORCID opens in the system's browser. Sign in there; EMStudio comes
         back by itself and reads your verified iD. If it does not come back,
         the page shows a code: paste it in the field **Paste ORCID's answer**
         of the panel and press **Use it**.

      .. tab-item:: Web
         :sync: web

         In the web version on a node's default configuration, the
         verification goes through the node's own ORCID sign-in: the line says
         **ORCID, through the node**, followed by the node's name. The page
         goes to the sign-in and comes back with the iD verified. A web page
         with an ORCID client of its own, set in **Settings… ▸ Identity**, goes
         straight to ORCID instead.

The identity is now *verified*. If ORCID verifies a different iD from the one
you declared, nothing is changed and EMStudio says so: only you know which of
the two is the mistake.

Choose your node
----------------

.. tab-set::
   :sync-group: platform

   .. tab-item:: Desktop
      :sync: desktop

      The desktop application has no node until you choose one.

      #. In the section **Node and account** of the chip's menu, press
         **Choose a node…**. The list **Choose the node** opens inside the menu.
      #. EMStudio looks in four places, and groups what it finds: **This
         computer**, **The local network (found by themselves)**, **Saved**, and
         **By hand**. Each node says whether it answers, its version and the
         ways in it offers. To use a node that is not listed, type its address
         under **By hand** (``https://…``) and press **Try**.
      #. Press **Use this node** beside the node you want. A saved node can be
         chosen even when it does not answer now: the status bar says when it
         answers again.

      Under **This computer**, **Turn on a node on this computer** starts a
      personal node: it listens to this computer only, and the files
      stay in your folders. **Open to the local network…** lets the other
      computers of the network reach it, after a question that says who will be
      able to come in; **Close to the network** and **Turn it off** undo it.

   .. tab-item:: Web
      :sync: web

      The node is the one that serves the page, found from its address
      (``…/em/studio/``): the step **Node** is already done. **Another node…**
      opens the list **Choose the node**, where the saved nodes and an address
      typed under **By hand** are checked. The search of the local network and
      the personal node of this computer belong to the desktop application: the
      list says that they are not available here.

The nodes this computer knows are kept in the **Connections** tab of
``Settings…`` (**Manage nodes and connections…** in the chip's menu opens it):
each one can be made the default, edited, tested and removed, and **Add a
node…** opens the same list to add one.

Sign in to the node
-------------------

#. In **Node and account**, the line of the node says whether it answers and how
   you entered it (at first **not entered**).
#. Press **Enter with ORCID**: the node signs you in through ORCID and accredits
   you, so that you may publish on it. Where the node has no internet, press
   **Enter with the node's password** instead and give your iD and the password
   that the node's manager gave you: the node attests who you are, without
   ORCID.

   .. tab-set::
      :sync-group: platform

      .. tab-item:: Desktop
         :sync: desktop

         The node's sign-in page opens in the system's browser. Sign in there:
         EMStudio comes back by itself. If it does not, copy the address the
         browser was sent to (it starts with
         ``org.extendedmatrix.emstudio:/oidc-return``) and paste it in the
         field **Paste the node's answer** of the panel **Who you are**, then
         press **Use it**. The desktop application signs in only when you ask.

      .. tab-item:: Web
         :sync: web

         The page goes to the node's sign-in and comes back to where you were,
         with the study you had open still on it. While the node's session is
         alive, EMStudio renews the access by itself.

#. Back in the menu, the node's line reads **accredited** (with ORCID) or
   **entered as declared** (with the node's password), followed by the name the
   node knows you by. The step **My space** gets its tick, and the section
   **My space** lists your rooms on the node.

If the node knows you by another name than the author of this computer, the
menu says so in one line: in a room, what you do is signed by the node's
person.

Sign out
--------

**Leave this node**, in **Node and account**, forgets this session's access and
closes the room you are in; your identity on this computer stays. **Sign in as
another user** leaves the node and asks for user and password again. **Sign out
of this identity**, at the foot of the panel **Who you are**, forgets the author
on this computer; what was already signed keeps its signature.

What you get
------------

An author who signs what you do, declared or verified, and a session on a node
with the access the node gave you. Creating a room, bringing a study into one
and publishing all need the three steps: when one is missing, the gesture opens
this menu at the missing step, says what it needs, and goes on by itself once
the step is done.

See also
--------

- :doc:`create-a-room` and :doc:`enter-and-share-a-room`, the next steps.
- :doc:`/reference/settings`, the tabs **Identity** and **Connections**.
- :doc:`/reference/desktop-and-web`, for the other differences between the
  desktop application and the web version.
- :doc:`/explanation/open-enter-create`, on where the copy you edit lives.
