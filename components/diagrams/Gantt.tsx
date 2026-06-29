"use client";

import { useState } from "react";
import { GANTT, MILESTONES, MONTHS } from "@/lib/content/pilotage";

const N = MONTHS.length; // 20 mois

export default function Gantt() {
  const [sel, setSel] = useState<number | null>(null);
  const active = sel === null ? null : GANTT[sel];

  return (
    <div className="gantt-wrap">
      <div className="gantt-scroll">
        <div className="gantt" style={{ ["--n" as string]: N }}>
          {/* en-tête mois */}
          <div className="gantt-row gantt-head">
            <div className="gantt-side" />
            <div className="gantt-track">
              {MONTHS.map((m, i) => (
                <span className="gantt-mcol" key={i} style={{ gridColumn: i + 1 }}>
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* barres */}
          {GANTT.map((b, i) => (
            <button
              type="button"
              className={`gantt-row gantt-rowbtn${sel === i ? " on" : ""}`}
              key={b.label}
              onClick={() => setSel(sel === i ? null : i)}
              aria-expanded={sel === i}
            >
              <div className="gantt-side">
                <b>{b.label}</b>
                <small>{b.team}</small>
              </div>
              <div className="gantt-track">
                {b.segs ? (
                  b.segs.map((s) => (
                    <span
                      key={s.label}
                      className={`gantt-bar seg ${s.kind}`}
                      style={{ gridColumn: `${s.start + 1} / ${s.end + 2}`, ["--c" as string]: b.accent }}
                    >
                      <span className="gantt-seglab">{s.label}</span>
                    </span>
                  ))
                ) : (
                  <span
                    className="gantt-bar"
                    style={{ gridColumn: `${b.start + 1} / ${b.end + 2}`, background: b.accent }}
                  />
                )}
              </div>
            </button>
          ))}

          {/* jalons */}
          <div className="gantt-row gantt-miles">
            <div className="gantt-side">Jalons</div>
            <div className="gantt-track">
              {MILESTONES.map((m) => (
                <span className="gantt-mile" key={m.idx} style={{ gridColumn: m.idx + 1 }}>
                  <span className="gantt-diamond" />
                  <span className="gantt-mlabel">{m.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* légende */}
      <div className="gantt-legend">
        <span><i className="gl-derisk" /> Dé-risquage (simulateur / POC, faible coût)</span>
        <span><i className="gl-build" /> Engagement (développement du coûteux)</span>
        <span className="gl-hint">Cliquez une ligne pour le détail</span>
      </div>

      {/* panneau détail */}
      {active && (
        <div className="gantt-detail glass">
          <div className="gd-head">
            <span className="gd-dot" style={{ background: active.accent }} />
            <h4>{active.label}</h4>
            <span className="gd-team">{active.team}</span>
            <button type="button" className="gd-x" onClick={() => setSel(null)} aria-label="Fermer">✕</button>
          </div>
          <div className="gd-body">
            <div>
              <span className="gd-lbl">Contenu</span>
              <ul className="gd-list">
                {active.detail.contenu.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="gd-meta">
              <div>
                <span className="gd-lbl">Livrable</span>
                <p>{active.detail.livrable}</p>
              </div>
              <div>
                <span className="gd-lbl">Dépendance</span>
                <p>{active.detail.depend}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
