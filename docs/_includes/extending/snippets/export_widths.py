import csv

from s3dgraphy import em

WIDTH = "vlt:larghezza_occhi"
_ctx = None                                   # set by setup: the plugin's context


def export_widths(slots):
    """vlt.export: the width between the eyes of every unit, as a CSV file, stamped."""
    path = _ctx.data_dir / "widths.csv"       # the plugin's own folder, never beside the sources
    with open(path, "w", newline="", encoding="utf-8") as fh:
        table = csv.writer(fh)
        table.writerow(["unit", "width_m"])
        for unit in em.graph.nodes(type="US"):
            table.writerow([unit.name, unit.prop(WIDTH, "")])
    _ctx.stamp(path,
               inputs=[{"resource_id": em.graph.id, "kind": "graph"}],
               parameters={"quale": WIDTH, "unit": "m"},
               dtc_kind="export",
               technique="table of the widths between the eyes")
    return str(path)


class Plugin:
    def setup(self, ctx):
        global _ctx
        _ctx = ctx
        ctx.command("vlt.export", export_widths)


plugin = Plugin()
