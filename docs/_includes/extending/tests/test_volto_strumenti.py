"""Tests of the code of volto-esempio, without EMStudio (an example of the EMStudio guide).

Run from the folder that holds volto-esempio/ and tests/:

    ~/em-packages-venv/bin/python -m pytest tests
"""
from pathlib import Path

import pytest

from s3dgraphy import em
from s3dgraphy.em import plugins

PACKAGE = Path(__file__).resolve().parents[1] / "volto-esempio"
STUDY = PACKAGE / "data" / "examples" / "volto.em.json"
INFILL = "https://w3id.org/extendedmatrix/profile/volto-esempio/vocab/stato-superficie/integrata"


@pytest.fixture
def study(tmp_path, monkeypatch):
    """The example study open, and the package loaded as from the development folder.
    HOME is a temporary folder: nothing of this computer's extensions is read or written."""
    monkeypatch.setenv("HOME", str(tmp_path))
    monkeypatch.setenv("S3DGRAPHY_PLUGINS_DEV_DIR", str(PACKAGE))
    em.open(str(STUDY))
    em.use(em.host.current().graph(), author="https://orcid.org/0000-0002-1825-0097")
    loaded = {p.id: p for p in plugins.sync("emstudio", dev=True)}
    assert loaded["volto-esempio"].state == "loaded", loaded["volto-esempio"].problems
    yield
    plugins.reset()


def test_count_says_how_many_points(study):
    result = plugins.invoke("volto-esempio", "vlt.count", {})
    assert result.ok
    assert result.data["value"] == "0 points of the face"


def test_mark_infill_writes_the_concept(study):
    result = plugins.invoke("volto-esempio", "vlt.mark_infill", {"units": ["us1"]},
                            author="https://orcid.org/0000-0002-1825-0097")
    assert result.ok, result.message
    term = em.graph.node("us1").property("vlt:stato_superficie").term
    assert term["concept"] == INFILL


def test_the_section_only_reads(study):
    [answer] = plugins.compute([{"key": "us1", "plugin": "volto-esempio", "command": "vlt.section",
                                 "slot": "inspector.section", "slots": {"id": "us1"}}])
    assert answer["ok"]
    assert [row["label"] for row in answer["value"]] == ["Width between the eyes", "State of the surface"]
