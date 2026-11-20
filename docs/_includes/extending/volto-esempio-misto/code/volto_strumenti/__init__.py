"""Two commands and a section of the Inspector for the package volto-esempio.

An EXAMPLE written for the EMStudio guide, «Add a command in Python».
"""
from s3dgraphy import em

STATE = "vlt:stato_superficie"
WIDTH = "vlt:larghezza_occhi"
POINT = "vlt:punto_del_volto"
INFILL = "https://w3id.org/extendedmatrix/profile/volto-esempio/vocab/stato-superficie/integrata"


def language():
    """The language of the interface, "en" or "it"."""
    lang = (em.host.current().language() or "en")[:2]
    return lang if lang in ("en", "it") else "en"


def count_points(slots):
    """vlt.count: how many points of the face the open study holds."""
    points = [n for n in em.graph.nodes(type="extractor")
              if n.data.get("em_kind") == POINT]
    if language() == "it":
        return f"{len(points)} punti del volto"
    return f"{len(points)} points of the face"


def mark_infill(slots):
    """vlt.mark_infill: the selected units become restoration infills."""
    units = slots["units"]
    with em.write("Marked as restoration infill") as tx:
        for unit in units:
            tx.set_property(unit, STATE, concept=INFILL)
    return len(units)


def face_section(slots):
    """vlt.section: the rows of the section «The face» of the Inspector."""
    unit = em.graph.node(slots["id"])
    width = unit.prop(WIDTH)
    state = "—"
    prop = unit.property(STATE)
    term = prop.term if prop is not None else None
    if term:
        concept = em.vocab.find(term["concept"])
        state = concept.label(language()) if concept else term["label"]
    return [
        {"label": {"en": "Width between the eyes", "it": "Larghezza tra gli occhi"},
         "value": f"{float(width):.3f} m" if width not in (None, "") else "—"},
        {"label": {"en": "State of the surface", "it": "Stato della superficie"},
         "value": state},
    ]


class Plugin:
    """What EMStudio loads: ``setup`` wires the commands the manifest declares."""

    def setup(self, ctx):
        ctx.command("vlt.count", count_points)
        ctx.command("vlt.mark_infill", mark_infill)
        ctx.command("vlt.section", face_section)

    def teardown(self, ctx):
        pass


plugin = Plugin()
