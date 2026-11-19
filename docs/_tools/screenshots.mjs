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

const escape = async (page, n = 2) => { for (let i = 0; i < n; i++) { await page.keyboard.press("Escape"); await sleep(250); } };

// ---------------------------------------------------------------- the shots
//
// name: the file under screens/ (section/name); clip: a selector (or list) to
// cut the picture around, null for the whole window; png: true for small,
// text-heavy cuts (menus, dialogs), JPEG q85 otherwise.

const MODAL = ".modal:not(.hidden) .modal-card";
const tool = (id) => async (p) => { await click(p, `#${id}`); await sleep(1500); };

const SHOTS = [
  // the six workspaces, Templu Mare open
  { name: "workspaces/stratigraphy", prep: async (p) => { await ws(p, "canvas"); await pick(p, "SU001"); } },
  { name: "workspaces/sources", prep: async (p) => { await ws(p, "provenance"); await pick(p, "D.08", "document"); } },
  { name: "workspaces/archive", wait: 8000, prep: async (p) => { await ws(p, "assets"); } },
  { name: "workspaces/narrative", prep: async (p) => { await ws(p, "narrative"); } },
  { name: "workspaces/space", wait: 8000, prep: async (p) => { await ws(p, "space"); } },
  { name: "workspaces/sheets", wait: 5000, prep: async (p) => { await ws(p, "sheets"); await pick(p, "SU001"); } },

  // the menus of the window, and the chip's menu at the top right
  ...["file", "edit", "tools", "help"].map((m) => ({
    name: `menus/${m}`, png: true,
    clip: [`#dd-${m} .dd-toggle`, `#dd-${m} .dd-menu`],
    prep: async (p) => { await click(p, `#dd-${m} .dd-toggle`); await sleep(500); },
  })),
  { name: "menus/who", png: true, clip: ["#ns-who-chip", "#who-menu"], node: true, prep: tool("ns-who-chip") },

  // Settings, each tab
  ...["general", "identity", "connections", "viewers", "advanced", "addons"].map((tab) => ({
    name: `settings/${tab}`, png: true, clip: MODAL,
    prep: async (p) => { await click(p, "#btn-settings"); await sleep(800); await click(p, `#settings-tabs [data-tab-target="${tab}"]`); await sleep(800); },
  })),

  // the windows and the dialogs
  { name: "windows/inspector", clip: '.tile-area[data-surface-type="inspector"]', prep: async (p) => { await pick(p, "SU001"); } },
  { name: "windows/colours", wait: 6000, clip: "[data-colours-window]", prep: async (p) => { await ws(p, "space"); await tool("btn-tool-colours")(p); } },
  { name: "windows/vocabularies", png: true, clip: "[data-vocab-window]", prep: tool("btn-tool-vocabularies") },
  { name: "windows/extensions", png: true, clip: "[data-ext-window]", prep: tool("btn-tool-extensions") },
  {
    name: "windows/console", png: true, clip: "[data-console-window]", experimental: true,
    prep: async (p) => {
      await pick(p, "SU001");
      await tool("btn-tool-console")(p);
      await sleep(2500);
      const field = await p.$("[data-console-window] textarea");
      await field.click(); await field.type("sel"); await p.keyboard.press("Enter");
      await sleep(3000);
    },
  },
  { name: "windows/chronology", wait: 3000, prep: tool("btn-tool-chronology") },
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
  { name: "dialogs/workspaces", png: true, clip: MODAL, prep: tool("btn-help-workspaces") },
  { name: "dialogs/em-legend", png: true, clip: MODAL, prep: tool("btn-help-legend") },
  { name: "dialogs/stratiminer", png: true, clip: "#tool-float", prep: tool("btn-tool-stratiminer") },
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
    const clip = shot.clip ? await boxOf(page, shot.clip, shot.pad ?? 8) : undefined;
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
