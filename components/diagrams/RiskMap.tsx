"use client";

import { useState } from "react";
import { RISKS, riskZone, PROBA, IMPACT, type Risk } from "@/lib/content/risks";

const score = (r: Risk) => r.p * r.i;
const REG = [...RISKS].sort((a, b) => score(b) - score(a));
const nCrit = REG.filter((r) => riskZone(score(r)) === "crit").length;
const nHigh = REG.filter((r) => riskZone(score(r)) === "high").length;
const nMod = REG.filter((r) => riskZone(score(r)) === "mod").length;

const zoneLabel = (z: string) =>
  z === "crit" ? "Critique" : z === "high" ? "Élevé" : z === "mod" ? "Modéré" : "Faible";

export default function RiskMap() {
  // grille 5x5 : lignes = Probabilité (5 en haut → 1 en bas), colonnes = Impact (1→5)
  const rows = [5, 4, 3, 2, 1];
  const cols = [1, 2, 3, 4, 5];
  const at = (p: number, i: number) => RISKS.filter((r) => r.p === p && r.i === i);
  const [sel, setSel] = useState<string | null>(null);
  const active = REG.find((r) => r.id === sel) || null;
  const toggle = (id: string) => setSel((s) => (s === id ? null : id));

  return (
    <div className="rmap">
      <div className="rmap-summary">
        <span><b>{REG.length}</b> risques</span>
        <span className="zt-crit"><b>{nCrit}</b> critiques</span>
        <span className="zt-high"><b>{nHigh}</b> élevés</span>
        <span className="zt-mod"><b>{nMod}</b> modérés</span>
        <span className="rmap-sumhint">Cliquez un risque pour son plan de mitigation</span>
      </div>

      <div className="rmap-grid-wrap">
        <div className="rmap-yaxis">Probabilité ↑</div>
        <div className="rmap-grid">
          {rows.map((p) => (
            <div className="rmap-row" key={p}>
              <span className="rmap-ytick">{PROBA[p]}</span>
              {cols.map((i) => {
                const z = riskZone(p * i);
                return (
                  <div className={`rmap-cell z-${z}`} key={i}>
                    {at(p, i).map((r) => (
                      <button
                        type="button"
                        className={`rmap-dot${sel === r.id ? " on" : ""}`}
                        key={r.id}
                        onClick={() => toggle(r.id)}
                        title={`${r.label} (${r.p}×${r.i}=${r.p * r.i})`}
                      >
                        {r.id}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
          <div className="rmap-row rmap-xaxis">
            <span className="rmap-ytick" />
            {cols.map((i) => (
              <span className="rmap-xtick" key={i}>{IMPACT[i]}</span>
            ))}
          </div>
          <div className="rmap-xtitle">Impact →</div>
        </div>
      </div>

      <div className="rmap-reg">
        {REG.map((r) => (
          <button
            type="button"
            className={`rmap-li z-${riskZone(score(r))}${sel === r.id ? " on" : ""}`}
            key={r.id}
            onClick={() => toggle(r.id)}
          >
            <b>{r.id}</b>
            <span className="rmap-cat">{r.cat}</span>
            <span className="rmap-lbl">{r.label}</span>
            <em>{r.p}×{r.i}={score(r)}</em>
          </button>
        ))}
      </div>

      {active && (
        <div className="rmap-detail glass">
          <div className="rmd-head">
            <span className="rmap-id">{active.id}</span>
            <span className="rmap-cat">{active.cat}</span>
            <h4>{active.label}</h4>
            <span className={`am-badge lvl-${riskZone(score(active))}`}>
              {active.p}×{active.i}={score(active)} · {zoneLabel(riskZone(score(active)))}
            </span>
            <button type="button" className="gd-x" onClick={() => setSel(null)} aria-label="Fermer">✕</button>
          </div>
          <div className="rmd-body">
            {active.mitig ? (
              <>
                <div><span className="gd-lbl">Plan de mitigation</span><p>{active.mitig}</p></div>
                <div><span className="gd-lbl">Responsable</span><p>{active.resp}</p></div>
              </>
            ) : (
              <div>
                <span className="gd-lbl">Traitement</span>
                <p>Risque sous le seuil de criticité (score &lt; 9) : surveillé en continu, sans plan de mitigation dédié, conformément à la politique de la Risk Map.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <p className="rmap-note">
        Politique de traitement : un plan de mitigation est rédigé pour chaque risque dont le score est ≥ 9. Les risques sous ce seuil sont surveillés sans plan dédié.
      </p>
    </div>
  );
}
