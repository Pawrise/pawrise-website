"use client";

import { useEffect, useState } from "react";
import { GANTT, GANTT_PHASES, MILESTONES, MONTHS, YEARS, rangeLabel, monthDate, nowIndex } from "@/lib/content/pilotage";

const N = MONTHS.length; // 20 mois

export default function Gantt() {
  const [sel, setSel] = useState<string | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const active = GANTT.find((b) => b.id === sel) || null;

  // Repère "aujourd'hui" calculé côté client (évite tout mismatch d'hydratation).
  useEffect(() => {
    setNow(nowIndex(new Date()));
  }, []);

  return (
    <div className="gantt-wrap">
      <div className="gantt-scroll">
        <div className="gantt" style={{ ["--n" as string]: N }}>
          {/* en-tête : années puis mois */}
          <div className="gantt-row gantt-head">
            <div className="gantt-side" />
            <div className="gantt-track gantt-years">
              {YEARS.map((y) => (
                <span className="gantt-ycol" key={y.label} style={{ gridColumn: `${y.start + 1} / ${y.end + 2}` }}>
                  {y.label}
                </span>
              ))}
            </div>
          </div>
          <div className="gantt-row gantt-head">
            <div className="gantt-side" />
            <div className="gantt-track">
              {MONTHS.map((m, i) => (
                <span className="gantt-mcol" key={i} style={{ gridColumn: i + 1 }}>
                  {m}
                </span>
              ))}
              {now !== null && (
                <span className="gantt-now" style={{ gridColumn: now + 1 }} title={`Aujourd'hui (${MONTHS[now]})`}>
                  <span className="gantt-now-dot" />
                </span>
              )}
            </div>
          </div>

          {/* tâches, groupées par phase */}
          {GANTT.map((b, i) => {
            const firstOfPhase = i === 0 || GANTT[i - 1].phase !== b.phase;
            const phase = GANTT_PHASES.find((p) => p.key === b.phase);
            return (
              <div key={b.id} className="gantt-group">
                {firstOfPhase && (
                  <div className="gantt-phase">
                    <span className="gantt-phase-name">{b.phase}</span>
                    <span className="gantt-phase-per">{phase?.periode}</span>
                  </div>
                )}
                <button
                  type="button"
                  className={`gantt-row gantt-rowbtn${sel === b.id ? " on" : ""}${b.critical ? " crit" : ""}`}
                  onClick={() => setSel(sel === b.id ? null : b.id)}
                  aria-expanded={sel === b.id}
                  aria-controls="gantt-detail"
                >
                  <div className="gantt-side">
                    <b>{b.label}{b.critical && <span className="gantt-critdot" title="Chemin critique" />}</b>
                    <small>{b.team}</small>
                    <small className="gantt-dates">{rangeLabel(b.start, b.end)}</small>
                  </div>
                  <div className="gantt-track">
                    {/* quadrillage vertical mensuel */}
                    {MONTHS.map((_, c) => (
                      <span className="gantt-grid" key={c} style={{ gridColumn: c + 1 }} />
                    ))}
                    {now !== null && <span className="gantt-nowline" style={{ gridColumn: now + 1 }} />}
                    {b.segs ? (
                      b.segs.map((s) => (
                        <span
                          key={s.label}
                          className={`gantt-bar seg ${s.kind}`}
                          style={{ gridColumn: `${s.start + 1} / ${s.end + 2}`, ["--c" as string]: b.accent }}
                          title={`${s.label} · ${rangeLabel(s.start, s.end)}`}
                        >
                          <span className="gantt-seglab">{s.label}</span>
                        </span>
                      ))
                    ) : (
                      <span
                        className="gantt-bar"
                        style={{ gridColumn: `${b.start + 1} / ${b.end + 2}`, background: b.accent }}
                        title={rangeLabel(b.start, b.end)}
                      >
                        <span className="gantt-barlab">{rangeLabel(b.start, b.end)}</span>
                      </span>
                    )}
                  </div>
                </button>
              </div>
            );
          })}

        </div>
      </div>

      {/* jalons · frise-étapes (lisible desktop & mobile) */}
      <div className="gantt-steps-wrap">
        <span className="gantt-steps-title">Jalons</span>
        <ol className="gantt-steps">
          {MILESTONES.map((m, i) => (
            <li className="gstep" key={m.idx}>
              <span className="gstep-n">{i + 1}</span>
              <span className="gstep-date">{monthDate(m.idx)}</span>
              <span className="gstep-name">{m.label}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* légende */}
      <div className="gantt-legend">
        <span><i className="gl-derisk" /> Préparation (design / mocks / simulateur / machinerie)</span>
        <span><i className="gl-build" /> Consolidation / intégration</span>
        <span><i className="gl-crit" /> Chemin critique</span>
        <span className="gl-hint">Cliquez une tâche pour le détail</span>
      </div>

      {/* panneau détail */}
      {active && (
        <div className="gantt-detail glass" id="gantt-detail">
          <div className="gd-head">
            <span className="gd-dot" style={{ background: active.accent }} />
            <h4>{active.label}</h4>
            <span className="gd-team">{active.team}</span>
            <span className="gd-when">{rangeLabel(active.start, active.end)}</span>
            {active.critical && <span className="gd-crit">Chemin critique</span>}
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
