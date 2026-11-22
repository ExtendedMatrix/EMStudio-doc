// The screenshots of the manual, taken from the application itself.
//
// Opens EMStudio (the web build of the version the manual describes) in a
// headless Chromium, loads a copy of Templu Mare, brings each workspace, menu and
// window to the state a page shows, and saves the picture under
// docs/_static/screens/<section>/<name>.<ext>. See README.md for the bench.
//
//   node docs/_tools/screenshots.mjs [--lang en] [--only name,name…] [--list]
//
// Environment:
//   EM_DOC           a COPY of TempluMare_v11.em.json (never the original), with
//                    its EM/ folder beside it (proxies, DosCo) — required
//   EMSTUDIO_URL     the page (default http://localhost:5336/em/studio/)
//   EM_BRIDGE        a bridge serving the copy (default http://127.0.0.1:8936;
//                    "none" to go without: no models, no Files on the disk)
//   EM_NODE          a node's address, for the chip's menu (menus/who)
//   EM_NODE_STUB     "1": the page is answered for EM_NODE's /v1/health by the
//                    script itself, as a node answers it; so a neutral name
//                    (https://node.example.org/em) stands in the picture and no
//                    real node is asked
//   PLAYWRIGHT_CORE  playwright-core's index.js (default: the one of EMStudio's audit)
//   CHR              the Chromium headless shell
//
// --lang is the language of the interface (one of i18n.ts LOCALES). English
// pictures are the source and go to <section>/<name>; another language goes to
// <section>/<lang>/<name>, the place conf.py's figure_language_filename looks
// first when the manual is built in that language.

import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HOME = process.env.HOME;
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const LANG = opt("--lang", "en");
const ONLY = opt("--only", "") ? new Set(opt("--only", "").split(",")) : null;
const URL_ = process.env.EMSTUDIO_URL ?? "http://localhost:5336/em/studio/";
const BRIDGE = process.env.EM_BRIDGE ?? "http://127.0.0.1:8936";
const DOC = process.env.EM_DOC;
const PW = process.env.PLAYWRIGHT_CORE ??
  `${HOME}/Documents/GitHub/EMStudio/.claude/wip/reports/2026-10-08-audit-interazioni/node_modules/playwright-core/index.js`;
const CHR = process.env.CHR ??
  `${HOME}/Library/Caches/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-mac-arm64/chrome-headless-shell`;
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "_static", "screens");
const W = 1600, H = 1000;

// ---------------------------------------------------------------- helpers

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** click through the page, so that an element covered or re-rendered is still reached */
const click = (page, sel) => page.evaluate((s) => {
  const e = document.querySelector(s);
  if (!e) throw new Error(`no ${s}`);
  e.click();
}, sel);

const ws = async (page, id) => {
  await click(page, `#workspace-bar .ws-tab[data-ws="${id}"]`);
  await sleep(2500);
};

/** the id of the node called `name` (first match) in the active graph */
const idOf = (page, name, type = null) => page.evaluate(([n, t]) => {
  const d = JSON.parse(window.__EM_DRAG__.docJson());
  const g = d.graphs[d.active_graph_id];
  return g.nodes.find((x) => x.name === n && (!t || x.node_type === t))?.id ?? null;
}, [name, type]);

const pick = async (page, name, type = null) => {
  const id = await idOf(page, name, type);
  if (!id) throw new Error(`no node ${name}`);
  await page.evaluate((i) => { window.__EM_DRAG__.select(i); window.__EM_DRAG__.jumpTo(i); }, id);
  await sleep(1200);
  return id;
};

/** the box of one element, or of several together, with a margin; inside the window */
const boxOf = async (page, sels, pad = 8) => {
  const r = await page.evaluate((ss) => {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const s of ss) for (const e of document.querySelectorAll(s)) {
      const b = e.getBoundingClientRect();
      if (!b.width || !b.height) continue;
      x0 = Math.min(x0, b.left); y0 = Math.min(y0, b.top); x1 = Math.max(x1, b.right); y1 = Math.max(y1, b.bottom);
    }
    return x0 === Infinity ? null : { x0, y0, x1, y1 };
  }, Array.isArray(sels) ? sels : [sels]);
  if (!r) throw new Error(`nothing visible for ${sels}`);
  const x = Math.max(0, Math.floor(r.x0 - pad)), y = Math.max(0, Math.floor(r.y0 - pad));
  return { x, y, width: Math.min(W, Math.ceil(r.x1 + pad)) - x, height: Math.min(H, Math.ceil(r.y1 + pad)) - y };
};

/** a window of the workspace magnified (⛶) */
const max = async (page, type) => { await page.locator(`.tile-area[data-surface-type="${type}"] .win-max`).first().click(); await sleep(2000); };

/** the Files window of the Archive on a folder of the copy (relative to the
 *  project's root, the folder above EM/) */
const filesAt = async (page, rel) => {
  const root = dirname(dirname(DOC));
  await page.evaluate(([d]) => window.__EM_DRAG__.storageGo(d, "assets:1"), [`${root}/${rel}`]);
  await page.waitForSelector('.tile-area[data-surface-type="storage"] .storage-row', { timeout: 60000 });
  await sleep(1500);
};
const fileRow = (page, name) => page.locator(`.tile-area[data-surface-type="storage"] .storage-row[data-path$="/${name}"]`).first();

/** files of one folder picked together, then «Put … on the shelf» from the menu */
const shelve = async (page, rel, names) => {
  await filesAt(page, rel);
  for (const [i, n] of names.entries()) { await fileRow(page, n).click({ modifiers: i ? ["Meta"] : [] }); await sleep(300); }
  await fileRow(page, names[0]).click({ button: "right" }); await sleep(600);
  await page.locator('button[data-act="put-on-shelf"]').first().click(); await sleep(2000);
};

/** a region dragged on the image of the Viewer; with `q` the bubble is answered:
 *  the search, then the property whose label starts with `prop` */
const trace = async (page, [x0, y0, x1, y1], q, prop) => {
  await page.mouse.move(x0, y0); await page.mouse.down(); await page.mouse.move(x1, y1, { steps: 10 }); await page.mouse.up();
  await sleep(1500);
  if (!q) return;
  await page.keyboard.type(q); await sleep(1200);
  if (prop) { await page.locator(".rd-bubble-opt", { hasText: prop }).first().click(); await sleep(2000); }
};

/** Sources, the document D.11 (the zenithal view) in the Viewer, magnified, the
 *  tool Region chosen */
const d11 = async (page) => {
  await ws(page, "provenance");
  const id = await page.evaluate(() => { const d = JSON.parse(window.__EM_DRAG__.docJson()); const g = d.graphs[d.active_graph_id]; return g.nodes.find((x) => x.name === "D.11" && x.node_type === "document")?.id; });
  await page.evaluate((i) => { window.__EM_DRAG__.select(i); window.__EM_DRAG__.jumpTo(i); }, id);
  await sleep(4000);
  await max(page, "viewer");
  await page.locator('.rd-tool[data-tool="rect"]').first().click(); await sleep(800);
};

const escape = async (page, n = 2) => { for (let i = 0; i < n; i++) { await page.keyboard.press("Escape"); await sleep(250); } };

// ---------------------------------------------------------------- the shots
//
// name: the file under screens/ (section/name); clip: a selector (or list) to
// cut the picture around, null for the whole window; rect: a fixed box instead; png: true for small,
// text-heavy cuts (menus, dialogs), JPEG q85 otherwise.

const MODAL = ".modal:not(.hidden) .modal-card";
const FILES = '.tile-area[data-surface-type="storage"]';
const tool = (id) => async (p) => { await click(p, `#${id}`); await sleep(1500); };

const SHOTS = [
  // the six workspaces, Templu Mare open
  { name: "workspaces/stratigraphy", prep: async (p) => { await ws(p, "canvas"); await pick(p, "SU001"); } },
  { name: "workspaces/sources", prep: async (p) => { await ws(p, "provenance"); await pick(p, "D.08", "document"); } },
  { name: "workspaces/archive", wait: 8000, prep: async (p) => { await ws(p, "assets"); } },
  { name: "workspaces/narrative", prep: async (p) => { await ws(p, "narrative"); } },
  { name: "workspaces/space", wait: 8000, prep: async (p) => { await ws(p, "space"); } },
  { name: "workspaces/sheets", wait: 5000, prep: async (p) => { await ws(p, "sheets"); await pick(p, "SU004"); } },
  // MICRO-SEG05 · the seventh (MICRO-SEG02): Script Editor, Python Console under it, the Matrix
  { name: "workspaces/scripting", wait: 4000, prep: async (p) => { await ws(p, "scripting"); await pick(p, "SU001"); } },

  // the menus of the window, and the chip's menu at the top right. MICRO-SEG29:
  // Tools is gone, Window is a menu of the page on every platform
  ...["file", "edit", "window", "help"].map((m) => ({
    name: `menus/${m}`, png: true,
    clip: [`#dd-${m} .dd-toggle`, `#dd-${m} .dd-menu`],
    prep: async (p) => { await click(p, `#dd-${m} .dd-toggle`); await sleep(500); },
  })),
  {
    // MICRO-SEG29 · the command search (F3): a word typed in the language of the
    // pictures, the results with where each command lives now
    name: "menus/command-search", png: true, clip: ".cmd-search", wait: 800,
    prep: async (p) => {
      await p.mouse.click(800, 990); await sleep(300);
      await p.keyboard.press("F3"); await sleep(800);
      await p.keyboard.type(LANG === "it" ? "cronologia" : "chronology"); await sleep(800);
    },
  },
  { name: "menus/who", png: true, clip: ["#ns-who-chip", "#who-menu"], node: true, prep: tool("ns-who-chip") },

  // Settings, each tab. MICRO-SEG11: Extensions (it was the window Tools ▸ Extensions…)
  // and Third-party tools (it was Add-ons, the tab keeps its id «addons»); the
  // Extensions page shows what the bench's machine holds (README: Geofisica from the
  // official repository, data only, and the example package). MICRO-SEG29: Colours
  // (taken from the Space, so that the page names it) and Vocabularies (the page of
  // the window Tools ▸ Vocabularies… of before: the bench's HOME has the example
  // package's vocabulary)
  ...["general", "identity", "connections", "viewers", "colours", "vocabularies", "extensions", "addons", "advanced"].map((tab) => ({
    name: `settings/${tab}`, png: true, clip: MODAL, wait: tab === "extensions" || tab === "vocabularies" ? 2500 : 600,
    prep: async (p) => {
      if (tab === "colours") await ws(p, "space");
      await click(p, "#btn-settings"); await sleep(800); await click(p, `#settings-tabs [data-tab-target="${tab}"]`); await sleep(800);
    },
  })),
  {
    // the repositories' selector opened: the panel Repositories, the official first
    name: "settings/extensions-repositories", png: true, clip: MODAL, wait: 1500,
    prep: async (p) => { await tool("btn-tool-extensions")(p); await sleep(2000); await click(p, "[data-ext='repos']"); },
  },

  // the windows and the dialogs
  { name: "windows/inspector", clip: '.tile-area[data-surface-type="inspector"]', prep: async (p) => { await pick(p, "SU001"); } },
  { name: "windows/colours", wait: 6000, clip: "[data-colours-window]", prep: async (p) => { await ws(p, "space"); await tool("btn-tool-colours")(p); } },

  {
    // MICRO-TIL002: the console is a window type (its root [data-py-console]), not a floating panel
    name: "windows/console", png: true, clip: "[data-py-console]",
    prep: async (p) => {
      await pick(p, "SU001");
      await tool("btn-tool-console")(p);
      await sleep(2500);
      const field = await p.$("[data-py-console] textarea");
      await field.click(); await field.type("sel"); await p.keyboard.press("Enter");
      await sleep(3000);
    },
  },
  {
    // MICRO-SEG11 · the colours of the console (MICRO-SEG09): a result, an error with
    // its traceback, and the double Tab, its list in green under the line repeated
    name: "windows/console-colours", png: true, clip: "[data-py-console]",
    prep: async (p) => {
      await pick(p, "SU001");
      await tool("btn-tool-console")(p);
      await sleep(2500);
      // the console's area magnified (⛶), so that the three answers stand together
      await p.evaluate(() => document.querySelector("[data-py-console]").closest(".tile-area").querySelector(".win-max").click());
      await sleep(1500);
      const field = await p.$("[data-py-console] textarea");
      await field.click();
      for (const line of ["sel", "1/0"]) { await field.type(line); await p.keyboard.press("Enter"); await sleep(2500); }
      await field.type("g.node"); await p.keyboard.press("Tab"); await sleep(1200); await p.keyboard.press("Tab");
      await sleep(2500);
      // the empty part of the magnified area left out of the picture
      await p.addStyleTag({ content: "[data-py-console]{height:400px!important;max-height:400px!important}" });
      await sleep(500);
    },
  },
  {
    // MICRO-SEG11 · Settings ▸ Extensions, the row «Development folder · beta» opened
    // (experimental functions on). Taken alone, with the bench's development folder
    // set to a copy of _includes/extending/volto-esempio-misto (README). Up to
    // 1.6.0-dev.145 a long list squashed the row to its border: the rule that EMStudio
    // carries after it (MICRO-SEG11, .ext-scroll > *) is put in the page here
    name: "extending/development-folder", png: true, clip: "[data-ext-dev]", experimental: true, wait: 1500,
    prep: async (p) => {
      await p.addStyleTag({ content: ".ext-scroll > * { flex-shrink: 0; }" });
      await tool("btn-tool-extensions")(p); await sleep(2500); await click(p, "[data-ext-toggle='dev']"); await sleep(800);
      await p.evaluate(() => document.querySelector("[data-ext-dev]").scrollIntoView({ block: "center" })); },
  },
  { name: "windows/chronology", wait: 3000, prep: tool("btn-tool-chronology") },
  {
    // MICRO-SEG18 · the Horizons panel at the head of the Chronology (MICRO-SEG16):
    // a periodization made in the page (Templu Mare has none; nothing is saved),
    // three horizons dated so that two overlap, listed by their dates, the most
    // recent on top, the overlap said on both rows
    name: "windows/horizons", png: true, clip: ".hz-panel", wait: 1500,
    prep: async (p) => {
      await tool("btn-tool-chronology")(p); await sleep(1500);
      await p.locator(".hz-panel .hz-btn", { hasText: "+" }).first().click(); await sleep(1200);
      const add = p.locator(".hz-panel button").filter({ hasText: /^\+ \S/ }).first();
      for (let i = 0; i < 3; i++) { await add.click(); await sleep(1000); }
      const ids = await p.evaluate(() => [...document.querySelectorAll(".hz-panel tr[data-hz-row]")].map((r) => r.dataset.hzRow));
      ids.reverse();   // the oldest first: the most recent is on top
      const names = { en: ["Republic", "Early Empire", "Late Antiquity"], it: ["Repubblica", "Alto Impero", "Tarda antichità"] }[LANG] ?? ["Republic", "Early Empire", "Late Antiquity"];
      const dates = [[-509, -27], [-27, 284], [250, 600]];
      for (const [i, id] of ids.entries()) {
        const set = async (sel, v) => { const f = p.locator(sel).first(); await f.fill(String(v)); await f.press("Tab"); await sleep(900); };
        await set(`[data-hz-name="${id}"]`, names[i]);
        await set(`[data-hz-num="${id}|start_time"]`, dates[i][0]);
        await set(`[data-hz-num="${id}|end_time"]`, dates[i][1]);
      }
      await p.locator(".hz-panel strong").first().click(); await sleep(1600);   // the last row's flash gone
    },
  },
  { name: "dialogs/georeferencing", png: true, clip: "[data-gr-card]", prep: tool("btn-georef") },
  {
    name: "dialogs/porta-dentro", png: true, clip: MODAL,
    prep: async (p) => {
      const dir = dirname(DOC) + "/DosCo/";
      await p.evaluate((fs) => { window.__EM_DRAG__.porta(fs); }, ["D.07.01.jpg", "D.07.02.jpg", "D.07.03.jpg"].map((n) => ({ path: dir + n, name: n })));
      await sleep(3000);
    },
  },
  { name: "dialogs/print-sheets", png: true, clip: "#skp .skp-box", prep: tool("btn-print-sheets") },
  { name: "dialogs/collect-resources", png: true, clip: MODAL, prep: tool("btn-collect-files") },
  {
    // MICRO-SEG05 · seven rows: the card made wide and tall enough to show them all, no scroll
    name: "dialogs/workspaces", png: true, clip: MODAL,
    prep: async (p) => {
      await tool("btn-help-workspaces")(p);
      await p.evaluate(() => {
        const card = document.querySelector(".modal.ws-help .modal-card");
        if (!card) return;
        card.style.maxWidth = "none"; card.style.width = "1100px"; card.style.maxHeight = "none";
        for (const el of card.querySelectorAll("*")) {
          const cs = getComputedStyle(el);
          if (cs.overflowY === "auto" || cs.overflowY === "scroll") { el.style.overflow = "visible"; el.style.maxHeight = "none"; }
        }
      });
      await sleep(500);
    },
  },
  { name: "dialogs/em-legend", png: true, clip: MODAL, prep: tool("btn-help-legend") },
  { name: "dialogs/stratiminer", png: true, clip: "#tool-float", prep: tool("btn-tool-stratiminer") },

  // Space: the survey of 2015 as a tileset, chosen in the Outliner, the camera
  // brought closer with the zoom of the scene's bar
  {
    name: "workspaces/space-tileset", wait: 25000,
    prep: async (p) => {
      await ws(p, "space"); await sleep(4000);
      await pick(p, "Survey_2015_egm2008", "representation_model");
      const z = await p.evaluate(() => { const b = document.querySelectorAll('.tile-area[data-surface-type="scene"] .scn-nav-btn')[0].getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; });
      await p.mouse.move(z.x, z.y); await p.mouse.down(); await p.mouse.move(z.x, z.y - 120, { steps: 20 }); await p.mouse.up();
    },
  },
  // the Outliner of the Space, magnified: the menu of a container with a tileset
  {
    name: "windows/outliner-containers", png: true, rect: { x: 8, y: 100, width: 1592, height: 460 },
    prep: async (p) => {
      await ws(p, "space"); await sleep(3000);
      await max(p, "outliner");
      const ol = '.tile-area[data-surface-type="outliner"]';
      // the proxies of the first two epochs folded, so that the models show
      for (let i = 0; i < 2; i++) {
        await p.evaluate((ol) => { const r = [...document.querySelectorAll(ol + " .uo-row")].filter((e) => /^▾/.test(e.textContent.trim()) && e.querySelector(".uo-tw") && /\d+ \/ \d+/.test(e.textContent))[0]; r?.querySelector(".uo-tw")?.click(); }, ol);
        await sleep(800);
      }
      await p.locator(ol + " .uo-row", { hasText: "Survey2015" }).first().locator(".uo-altchip").click();
      await sleep(1000);
    },
  },

  // MICRO-SEG21 · the Outliner of the Space, magnified: the three columns on every
  // row (isolate · arrow · eye), one row selected, one hidden, one not
  // selectable, one locked (its padlock beside the name), a survivor's ⟲
  {
    name: "windows/outliner-columns", png: true, wait: 1200,
    rect: { x: 0, y: 98, width: 640, height: 440 },
    prep: async (p) => {
      await ws(p, "space"); await sleep(3000);
      // magnified in a window 640 wide: the name and the columns close enough to be read together
      await max(p, "outliner");
      await p.setViewportSize({ width: 640, height: 1000 }); await sleep(1500);
      const ol = '.tile-area[data-surface-type="outliner"]';
      const rows = () => p.evaluate((ol) => [...document.querySelectorAll(ol + " .uo-row[data-skey^='proxy:']")]
        .filter((e) => e.getBoundingClientRect().height > 0).map((e) => e.dataset.skey), ol);
      // the first epoch's proxies opened, a type of units opened
      for (let i = 0; i < 3 && (await rows()).length < 6; i++) {
        await p.evaluate((ol) => { const r = [...document.querySelectorAll(ol + " .uo-row")].find((e) => e.querySelector(".uo-tw")?.textContent === "▸" && !e.dataset.skey && e.dataset.key.includes("/px")); r?.querySelector(".uo-tw")?.click(); }, ol);
        await sleep(800);
      }
      const ks = await rows();
      if (ks.length < 5) throw new Error(`only ${ks.length} proxies' rows`);
      const row = (k) => `${ol} .uo-row[data-skey="${k}"]`;
      await p.locator(`${row(ks[4])} .uo-label`).first().click({ button: "right" }); await sleep(600);
      await click(p, '.scn-menu [data-s3="pin"]'); await sleep(600);
      await click(p, `${row(ks[2])} [data-eye]`); await sleep(400);
      await click(p, `${row(ks[3])} [data-sp="arrow"]`); await sleep(400);
      await click(p, `${row(ks[1])} .uo-label`); await sleep(500);
      await p.mouse.move(5, 995);
    },
  },

  // Sources: two regions traced on D.11 and read; the bubble of the first
  {
    name: "dialogs/what-are-you-extracting", png: true, rect: { x: 600, y: 160, width: 460, height: 600 },
    prep: async (p) => { await d11(p); await trace(p, [690, 510, 905, 725], "SU001"); },
  },
  {
    name: "windows/viewer-regions", wait: 1500,
    prep: async (p) => {
      await d11(p);
      await trace(p, [690, 510, 905, 725], "SU001", "Material");
      await trace(p, [945, 655, 1100, 900], "SU002", "definition");
      await p.locator(".rd-tool.on").first().click();
    },
  },
  // the media of a document, in the Viewer
  {
    name: "windows/media", png: true, clip: '.tile-area[data-surface-type="viewer"]', wait: 4000,
    prep: async (p) => {
      await ws(p, "provenance");
      const id = await pick(p, "D.01", "document");
      await p.evaluate((i) => window.__EM_DRAG__.openMediaViewer(i), id);
    },
  },

  // Archive: the Files window, the Shelf, the stamp, the versions, the targets
  // MICRO-SEG28 · the Archive's Outliner: the documents and their files, D.01
  // opened (its models, the tileset of its container), its card in Files
  {
    name: "windows/outliner-documents", png: true, wait: 1500,
    clip: ['.tile-area[data-surface-type="outliner"]', `${FILES} .dcard`],
    prep: async (p) => {
      await ws(p, "assets");
      const ol = '.tile-area[data-surface-type="outliner"]';
      await p.waitForSelector(`${ol} .uo-row[data-doc-row="1"]`, { timeout: 30000 });
      // the selection reveals its row (the index is a virtual list), then it opens
      const id = await pick(p, "D.01", "document");
      await p.locator(`${ol} .uo-row[data-doc-row="1"][data-id="${id}"] .uo-label`).first().click(); await sleep(1500);
      await p.locator(`${ol} .uo-row[data-doc-row="1"][data-id="${id}"] .uo-tw`).first().click(); await sleep(800);
      await p.evaluate((ol) => [...document.querySelectorAll(`${ol} .uo-row.uo-group`)]
        .find((e) => /^(Models|Modelli)$/.test(e.querySelector(".uo-label")?.textContent?.trim() ?? ""))?.querySelector(".uo-tw")?.dispatchEvent(new MouseEvent("click", { bubbles: true })), ol);
      await sleep(800);
      // D.01's branch in sight: its row at the top of the list
      await p.evaluate(([ol, id]) => {
        const sc = document.querySelector(`${ol} .uo-scroll`);
        const i = window.__EM_DRAG__.uoRows().findIndex((r) => r.id === id && r.docDrop);
        if (sc && i >= 0) sc.scrollTop = Math.max(0, i * 22 - 44);
      }, [ol, id]);
      await sleep(800);
    },
  },
  {
    name: "windows/files", png: true, clip: FILES, wait: 2000,
    prep: async (p) => {
      await ws(p, "assets"); await filesAt(p, "EM/DosCo");
      await p.locator(`${FILES} .files-tab[data-tab="info"]`).first().click();
    },
  },
  {
    name: "windows/shelf", png: true, clip: '.tile-area[data-surface-type="shelf"]', wait: 3000,
    prep: async (p) => {
      await ws(p, "assets");
      await shelve(p, "EM/DosCo", ["D.06 TMplan1A.JPG", "D.07 Maison Carree Nimes.png", "D.08 Ordine_Corinzio.jpg", "D.11 Zenitale.jpg", "TM003.pdf", "TM009.pdf"]);
      await shelve(p, "RB/cesium", ["Survey_2015_egm2008.3tz"]);
      await max(p, "shelf");
      await p.locator(".shelf-row", { hasText: "D.11 Zenitale" }).first().click();
    },
  },
  {
    name: "dialogs/stamp", png: true, clip: FILES,
    prep: async (p) => {
      await ws(p, "assets"); await max(p, "storage"); await filesAt(p, "EM/DosCo");
      const row = fileRow(p, "D.11.01.jpg");
      await row.click(); await sleep(600);
      await row.click({ button: "right" }); await sleep(600);
      await p.locator('button[data-act="compose-one"]').first().click(); await sleep(2000);
      await p.locator('button.stamp-road[data-mode="origin"]').first().click();
    },
  },
  {
    name: "windows/files-optimise", png: true, clip: FILES,
    prep: async (p) => {
      await ws(p, "assets"); await filesAt(p, "EM/proxies");
      await fileRow(p, "SU001.glb").click(); await sleep(800);
      await p.locator(`${FILES} .files-tab[data-tab="optimize"]`).first().click();
    },
  },
  {
    name: "windows/consolidate", wait: 3000,
    prep: async (p) => { await tool("btn-consolidate")(p); await sleep(40000); await max(p, "storage"); },
  },
  // MICRO-SEG22 · the «#» paragraphs proposed as titles (the bar, and the first
  // one with its own «Transform»); then the story with its sections: the Index's
  // tree, the numbered titles, a section's Inspector with «Transform into…»
  {
    name: "narrative/heading-hints", png: true,
    clip: ['.tile-area[data-surface-type="narrative"] .nv-block-row[data-block="0:3"]', '.tile-area[data-surface-type="narrative"] .nv-block-row[data-block="0:4"]'],
    prep: async (p) => {
      await ws(p, "narrative");
      await p.evaluate(() => document.querySelector('.tile-area[data-surface-type="narrative"] .nv-block-row[data-block="0:3"]').scrollIntoView({ block: "center" }));
    },
  },
  {
    name: "narrative/sections", wait: 1200,
    prep: async (p) => {
      await ws(p, "narrative");
      await click(p, '.tile-area[data-surface-type="narrative"] [data-nv-hints-act="all"]'); await sleep(1500);
      // chapter 4, «Survey of the architectonic fragments»: sections and subsections
      await click(p, '.tile-area[data-surface-type="narrative"] .nv-block-row[data-block="3:4"]'); await sleep(1000);
      await p.evaluate(() => document.querySelector('.tile-area[data-surface-type="narrative"] .nv-block-row[data-block="3:4"]').scrollIntoView({ block: "start" }));
      await p.evaluate(() => document.querySelector('.nidx-h[data-chapter="3"]')?.scrollIntoView({ block: "center" }));
    },
  },
  // MICRO-SEG23 · «Narrates» in order of time: chapter 7's Inspector, the epochs
  // oldest first with their dates, II A.D.'s activities inside it, and the
  // question asked when II A.D. is ticked
  {
    name: "narrative/narrates", wait: 800,
    prep: async (p) => {
      await ws(p, "narrative");
      await p.evaluate(() => { const h = document.querySelector('.tile-area[data-surface-type="narrative"] .nv-chapter[data-chapter="6"] .nv-chapter-head'); h.scrollIntoView({ block: "start" }); h.click(); });
      await sleep(1200);
      await p.evaluate(() => [...document.querySelectorAll(".nlp-row")].find((r) => r.querySelector(".nlp-name")?.textContent === "II A.D.")?.querySelector("input").click());
      await sleep(600);
    },
  },
  // MICRO-SEG24 · the figures an epoch or an activity carries: chapter 8
  // (Virtual Activity 1) narrates VAct.01, «＋ Figure» opens the menu
  {
    name: "narrative/figure-menu", wait: 800,
    prep: async (p) => {
      await ws(p, "narrative");
      await p.evaluate(() => document.querySelector('.tile-area[data-surface-type="narrative"] .nv-chapter[data-chapter="7"]').scrollIntoView({ block: "start" }));
      await sleep(600);
      await click(p, '.tile-area[data-surface-type="narrative"] [data-nv-figure="7"]');
      await sleep(700);
    },
  },
  // …the Matrix of VAct.01 inserted: the canvas's slice, «Fig. 8.1» and its
  // automatic caption, the Inspector on the figure
  {
    name: "narrative/figure", wait: 1200,
    prep: async (p) => {
      await ws(p, "narrative");
      await p.evaluate(() => document.querySelector('.tile-area[data-surface-type="narrative"] .nv-chapter[data-chapter="7"]').scrollIntoView({ block: "start" }));
      await sleep(600);
      await click(p, '.tile-area[data-surface-type="narrative"] [data-nv-figure="7"]');
      await sleep(600);
      await click(p, '.nv-fig-menu button[data-nv-fig$="|matrix"]');
      await sleep(1800);
      await p.evaluate(() => document.querySelector('.tile-area[data-surface-type="narrative"] .nv-chapter[data-chapter="7"] .nv-matrix-layout')?.scrollIntoView({ block: "center" }));
    },
  },
  // …and «Coherence with the Matrix» in the Index after VAct.01 was renamed
  {
    name: "narrative/coherence", wait: 1000,
    prep: async (p) => {
      await ws(p, "narrative");
      await click(p, '.tile-area[data-surface-type="narrative"] [data-nv-figure="7"]');
      await sleep(600);
      await click(p, '.nv-fig-menu button[data-nv-fig$="|matrix"]');
      await sleep(1500);
      const id = await idOf(p, "VAct.01 Foundations of the temple");
      await p.evaluate((i) => window.__EM_DRAG__.renameNode(i, "VAct.01 Foundations and podium"), id);
      await sleep(1500);
      await p.evaluate(() => { const s = document.querySelector('[data-nidxact="coherence"]'); if (s && !s.parentElement.open) s.click(); });
      await sleep(800);
      await p.evaluate(() => document.querySelector(".nidx-coh-sect")?.scrollIntoView({ block: "start" }));
    },
  },
  // MICRO-SEG26 · the 3D that accompanies the text: chapter 8 (Virtual
  // Activity 1) cites SU001–SU004, USV102, USV108; its paragraph clicked, the 3D
  // follows (VAct.01's proxies, the cited units lit)
  {
    name: "narrative/follow-3d", wait: 9000,
    prep: async (p) => {
      await ws(p, "narrative");
      await p.evaluate(() => document.querySelector('.tile-area[data-surface-type="narrative"] .nv-chapter[data-chapter="7"]').scrollIntoView({ block: "start" }));
      await sleep(600);
      await click(p, '.tile-area[data-surface-type="narrative"] .nv-block-row[data-block="7:0"]');
      await sleep(2500);
    },
  },
  // MICRO-SEG31 · the companion 3D is small beside the page: the gizmo, «ⓘ» open on the scene's state, «⋯», «Follow the text»
  {
    name: "space/compact-view", png: true, clip: '.tile-area[data-surface-type="scene"]', pad: 0, wait: 6000,
    prep: async (p) => {
      await ws(p, "narrative");
      await p.evaluate(() => document.querySelector('.tile-area[data-surface-type="narrative"] .nv-chapter[data-chapter="7"]').scrollIntoView({ block: "start" }));
      await sleep(600);
      await click(p, '.tile-area[data-surface-type="narrative"] .nv-block-row[data-block="7:0"]');
      await sleep(9000);
      await click(p, '.tile-area[data-surface-type="scene"] [data-vp="info"]');
      await sleep(600);
    },
  },
  // …a unit picked in the 3D: the parts of the story about it lit, in the page and the Index
  {
    name: "narrative/about-unit", wait: 1500,
    prep: async (p) => {
      await ws(p, "narrative");
      const id = await idOf(p, "USV101");
      await p.evaluate((i) => window.__EM_DRAG__.aboutUnit(i), id);
      await sleep(600);
      await click(p, "[data-nv-about-go=next]");
      await sleep(1500);
    },
  },
  // …and from the Space, «Bring into the Narrative…» (the viewport's ⋯, Shift+N)
  {
    name: "narrative/bring-view", png: true, clip: '[data-app-dialog="nv-bring"] .modal-card', pad: 4, wait: 600,
    prep: async (p) => {
      await ws(p, "space");
      await sleep(4000);
      const w = await p.evaluate(() => window.__EM_DRAG__.wins().find((x) => x.type === "scene")?.id);
      await p.evaluate((i) => { void window.__EM_DRAG__.bringView(i, null, "space"); }, w);
      await p.waitForSelector('[data-app-dialog="nv-bring"]', { timeout: 10000 });
    },
  },
];

// ---------------------------------------------------------------- run

if (args.includes("--list")) { for (const s of SHOTS) console.log(s.name); process.exit(0); }
if (!DOC || !existsSync(DOC)) { console.error("EM_DOC: the path of a copy of TempluMare_v11.em.json"); process.exit(2); }

const pw = await import(PW).then((m) => (m.chromium ? m : m.default));
const browser = await pw.chromium.launch({
  executablePath: existsSync(CHR) ? CHR : undefined,
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
});
const doc = JSON.parse(readFileSync(DOC, "utf8"));

/** a fresh page: a clean profile in LANG, the default theme, the study open.
 *  `experimental` turns on Settings ▸ Advanced ▸ the experimental functions (the
 *  console); `node` names the node of Settings ▸ Connections (EM_NODE). */
async function fresh(shot) {
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1, ignoreHTTPSErrors: true });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => console.log(`  page error: ${String(e).slice(0, 200)}`));
  const seed = { "emstudio.locale": LANG };
  if (shot.experimental) seed["emstudio.experimental"] = "1";
  if (shot.node && process.env.EM_NODE) seed["emstudio.settings"] = JSON.stringify({ sync: { hubUrl: process.env.EM_NODE } });
  if (shot.node && process.env.EM_NODE && process.env.EM_NODE_STUB === "1") {
    await ctx.route(`${process.env.EM_NODE.replace(/\/+$/, "")}/v1/health`, (r) => r.fulfill({
      status: 200, contentType: "application/json", headers: { "access-control-allow-origin": "*" },
      body: JSON.stringify({ service: "stratigraph-server", version: "1.6", auth: "password" }),
    }));
  }
  await page.addInitScript(([seed, token]) => {
    // the bridge's secret, as the desktop shell hands it to the page (the console)
    if (token) window.EM_BRIDGE_TOKEN = token;
    if (sessionStorage.getItem("man06")) return;
    localStorage.clear();
    for (const [k, v] of Object.entries(seed)) localStorage.setItem(k, v);
    sessionStorage.setItem("man06", "1");
  }, [seed, process.env.EM_BRIDGE_TOKEN ?? null]);
  await page.goto(URL_ + (BRIDGE !== "none" ? `?bridge=${encodeURIComponent(BRIDGE)}` : ""));
  await page.waitForFunction(() => !!window.__EM_DRAG__?.openAt, null, { timeout: 90000 });
  await page.evaluate(([d, path]) => window.__EM_DRAG__.openAt(d, path), [doc, DOC]);
  await page.waitForFunction(() => (window.__EM_SCENE__?.()?.nodes?.length ?? 0) > 50, null, { timeout: 90000 });
  await sleep(2500);
  return { ctx, page };
}

let failed = 0, done = 0;
for (const shot of SHOTS) {
  if (ONLY && !ONLY.has(shot.name) && !ONLY.has(shot.name.split("/")[0])) continue;
  const { ctx, page } = await fresh(shot);
  try {
    await shot.prep(page);
    await sleep(shot.wait ?? 600);
    // the transient message at the bottom («N file(s) not found»: the copy
    // carries no tilesets) is not part of what a page shows
    await page.addStyleTag({ content: "#toast{display:none!important}" });
    // the thumbnails and the pictures asked of the bridge
    await page.waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 15000 }).catch(() => {});
    await sleep(300);
    const [section, base] = shot.name.split("/");
    const dir = LANG === "en" ? join(OUT, section) : join(OUT, section, LANG);
    mkdirSync(dir, { recursive: true });
    const path = join(dir, `${base}.${shot.png ? "png" : "jpg"}`);
    const clip = shot.rect ?? (shot.clip ? await boxOf(page, shot.clip, shot.pad ?? 8) : undefined);
    await page.screenshot({ path, clip, timeout: 90000, ...(shot.png ? {} : { type: "jpeg", quality: 85 }) });
    console.log(`✓ ${shot.name}`);
    done++;
  } catch (e) {
    console.log(`✗ ${shot.name}: ${String(e).split("\n")[0]}`);
    failed++;
  }
  await ctx.close();
}
await browser.close();
console.log(`${done} taken, ${failed} failed (${LANG})`);
process.exit(failed ? 1 : 0);
