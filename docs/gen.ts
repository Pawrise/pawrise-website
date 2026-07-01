// Génère les tableaux Typst à partir de lib/content (source unique de vérité).
// Lancer : npx tsx docs/gen.ts  → écrit docs/data/*.typ
import { writeFileSync } from "node:fs";
import { AMDEC, RISKS, ipr, iprLevel, riskZone } from "../lib/content/risks";
import { BOM, BOM_TOTAL_P1, BOM_TOTAL_PK, CLOUD_BUDGET, CLOUD_BUDGET_TOTAL, ECON } from "../lib/content/business";
import { EPICS, BACKLOG_STATS } from "../lib/content/backlog";
import { RACI_POLES, RACI_ROWS, RACI_ROWS_STRICT } from "../lib/content/pilotage";

const OUT = new URL("./data/", import.meta.url);
const s = (v: unknown) => `"${String(v).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
const row = (cells: unknown[]) => `  (${cells.map(s).join(", ")}),`;
const emit = (name: string, header: string, rows: string[]) =>
  `// Généré depuis lib/content — NE PAS ÉDITER À LA MAIN.\n#let ${name} = (\n${rows.join("\n")}\n)\n${header}`;

const lvlFr: Record<string, string> = { crit: "Critique", high: "Élevé", mod: "Modéré", low: "Faible" };

// AMDEC (tri IPR décroissant)
{
  const rows = [...AMDEC].sort((a, b) => ipr(b) - ipr(a)).map((a) =>
    row([a.code, a.sous, a.mode, a.resp, a.g, a.o, a.d, ipr(a), lvlFr[iprLevel(ipr(a))]]));
  writeFileSync(new URL("amdec.typ", OUT), emit("AMDEC", "", rows));
}
// Risk Map (registre, tri score décroissant)
{
  const rows = [...RISKS].sort((a, b) => b.p * b.i - a.p * a.i).map((r) =>
    row([r.id, r.cat, r.label, r.p, r.i, r.p * r.i, lvlFr[riskZone(r.p * r.i)]]));
  writeFileSync(new URL("riskmap.typ", OUT), emit("RISKMAP", "", rows));
}
// BOM collier
{
  const rows = BOM.map((b) => row([b.c, b.p1, b.pk]));
  writeFileSync(new URL("bom.typ", OUT), emit("BOM", `#let BOM_TOTAL_P1 = ${s(BOM_TOTAL_P1)}\n#let BOM_TOTAL_PK = ${s(BOM_TOTAL_PK)}\n`, rows));
}
// Budget cloud
{
  const rows = CLOUD_BUDGET.map((c) => row([c.poste, c.detail, c.cout]));
  writeFileSync(new URL("cloudbudget.typ", OUT), emit("CLOUDBUDGET", `#let CLOUD_TOTAL = ${s(CLOUD_BUDGET_TOTAL)}\n`, rows));
}
// Unit economics
{
  const rows = ECON.rows.map((r) => row([r.metric, r.opt, r.base, r.pess]));
  writeFileSync(new URL("econ.typ", OUT), emit("ECON", "", rows));
}
// Backlog epics
{
  const rows = EPICS.map((e) => row([`E${e.n}`, e.title, `${e.us}`, e.mvp ? "MVP" : "Post-MVP", e.fr]));
  const foot = `#let BACKLOG_EPICS = ${BACKLOG_STATS.epics}\n#let BACKLOG_US = ${BACKLOG_STATS.us}\n#let BACKLOG_MVP = ${BACKLOG_STATS.mvp}\n`;
  writeFileSync(new URL("backlog.typ", OUT), emit("BACKLOG", foot, rows));
}
// RACI (standard + strict)
{
  const mk = (rows: { activite: string; cells: string[] }[]) =>
    rows.map((r) => row([r.activite, ...r.cells.map((c) => (c === "AR" ? "A/R" : c || "-"))]));
  const body =
    emit("RACI_POLES", "", RACI_POLES.map((p) => row([p]))) + "\n" +
    emit("RACI_STD", "", mk(RACI_ROWS)) + "\n" +
    emit("RACI_STRICT", "", mk(RACI_ROWS_STRICT));
  writeFileSync(new URL("raci.typ", OUT), body);
}

console.log("Tableaux Typst générés dans docs/data/ :", ["amdec", "riskmap", "bom", "cloudbudget", "econ", "backlog", "raci"].join(", "));
