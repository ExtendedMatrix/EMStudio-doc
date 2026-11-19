.. _reference-changelog:

Changelog
=========

.. TODO MAN05: the 1.6 told by themes, from CHANGELOG.md. The text below is the 1.6.0-dev.10 page, kept until it is rewritten.

EMStudio is a fast-moving project; this manual tracks the **1.6** line.

The authoritative, per-release list of changes lives with the software (the
release notes on the EMStudio repository). This appendix records only the
milestones a reader of the manual should know about.

1.6
---

- The shell became a **windowing** environment: everything is a tileable window,
  and the top tabs are **arrangements** of windows (Documentation · Graph · DTC ·
  Comparisons · Narrative · Annotator), replacing the earlier "phases and views"
  split.
- The interface is **English by default**, with Italian selectable.
- The **narrative** authoring surface matured: auto-scaffolding, AI-assisted drafts
  with human validation, live embeds, and exports to HTML, Word, LaTeX and Jupyter
  that carry their figures.
- **Rooms** and the object store: shared editing (CRDT), per-asset rights that bite,
  and the DTC provenance model.
- The **connector** contract that lets other tools (Blender first) plug in as
  Sidecar or Hub.

.. note::

   Because the software moves faster than the printed page, where a screenshot in
   this manual has fallen behind the interface, trust the text.
