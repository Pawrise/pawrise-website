"use client";

import { useState } from "react";
import { AMDEC, AMDEC_LEGEND, ipr, iprLevel } from "@/lib/content/risks";

// Tri par IPR décroissant : la priorisation se lit de haut en bas.
const ROWS = [...AMDEC].sort((a, b) => ipr(b) - ipr(a));
const nCrit = ROWS.filter((a) => iprLevel(ipr(a)) === "crit").length;
const nHigh = ROWS.filter((a) => iprLevel(ipr(a)) === "high").length;

export default function AmdecTable() {
  const [sel, setSel] = useState<string | null>(null);
  const active = ROWS.find((a) => a.code === sel) || null;

  return (
    <div>
      <div className="amdec-summary">
        <span><b>{ROWS.length}</b> modes de défaillance</span>
        <span className="lvl-crit"><b>{nCrit}</b> critiques</span>
        <span className="lvl-high"><b>{nHigh}</b> élevés</span>
        <span className="am-sumhint">Triés par IPR décroissant · cliquez une ligne pour le détail</span>
      </div>

      <div className="amdec-leg">
        {AMDEC_LEGEND.map((l) => (
          <span key={l.k}><b>{l.k}</b> · {l.d}</span>
        ))}
        <span><b>IPR = G × O × D</b></span>
      </div>

      <div className="raci-scroll">
        <table className="amdec-table">
          <thead>
            <tr>
              <th>Code</th><th>Sous-système</th><th>Mode de défaillance</th>
              <th>G</th><th>O</th><th>D</th><th>IPR</th><th>Niveau</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((a) => {
              const v = ipr(a);
              const lvl = iprLevel(v);
              return (
                <tr
                  key={a.code}
                  className={`amdec-row${sel === a.code ? " on" : ""}`}
                  onClick={() => setSel(sel === a.code ? null : a.code)}
                >
                  <td className="am-code">{a.code}</td>
                  <td className="am-dom">{a.sous}</td>
                  <td className="am-mode">{a.mode}</td>
                  <td>{a.g}</td><td>{a.o}</td><td>{a.d}</td>
                  <td className={`am-ipr lvl-${lvl}`}>{v}</td>
                  <td><span className={`am-badge lvl-${lvl}`}>{lvl === "crit" ? "Critique" : lvl === "high" ? "Élevé" : lvl === "mod" ? "Modéré" : "Faible"}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="amdec-scale">
        <span className="lvl-low">&lt; 30 Faible</span>
        <span className="lvl-mod">30–59 Modéré</span>
        <span className="lvl-high">60–99 Élevé</span>
        <span className="lvl-crit">≥ 100 Critique</span>
      </div>

      {active && (
        <div className="amdec-detail glass">
          <div className="amd-head">
            <span className="am-code">{active.code}</span>
            <h4>{active.sous} · {active.mode}</h4>
            <span className={`am-badge lvl-${iprLevel(ipr(active))}`}>IPR {ipr(active)}</span>
            <button type="button" className="gd-x" onClick={() => setSel(null)} aria-label="Fermer">✕</button>
          </div>
          <div className="amd-grid">
            <div><span className="gd-lbl">Cause potentielle</span><p>{active.cause}</p></div>
            <div><span className="gd-lbl">Effet sur le système / l&apos;utilisateur</span><p>{active.effet}</p></div>
            <div><span className="gd-lbl">Actions préventives / correctives</span><p>{active.action}</p></div>
            <div><span className="gd-lbl">Responsable suggéré</span><p>{active.resp}</p></div>
          </div>
        </div>
      )}
    </div>
  );
}
