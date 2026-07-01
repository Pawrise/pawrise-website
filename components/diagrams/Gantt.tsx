"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GANTT, GANTT_PHASES, MILESTONES, MONTHS, YEARS, rangeLabel, nowIndex } from "@/lib/content/pilotage";

const N = MONTHS.length; // 20 mois

type Link = { key: string; d: string; crit: boolean };

export default function Gantt() {
  const [sel, setSel] = useState<string | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [showDeps, setShowDeps] = useState(true);
  const [links, setLinks] = useState<Link[]>([]);
  const active = GANTT.find((b) => b.id === sel) || null;

  const ganttRef = useRef<HTMLDivElement>(null);
  const trackRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Repère "aujourd'hui" calculé côté client (évite tout mismatch d'hydratation).
  useEffect(() => {
    setNow(nowIndex(new Date()));
  }, []);

  // Trace les flèches de dépendance en mesurant la position réelle des barres.
  useLayoutEffect(() => {
    const measure = () => {
      const cont = ganttRef.current;
      if (!cont) return;
      const cr = cont.getBoundingClientRect();
      const out: Link[] = [];
      GANTT.forEach((b) => {
        if (!b.deps) return;
        const st = trackRefs.current[b.id];
        if (!st) return;
        const sr = st.getBoundingClientRect();
        const sx = sr.left - cr.left;
        const startX = sx + (b.start / N) * sr.width; // bord gauche du successeur
        const startY = sr.top - cr.top + sr.height / 2;
        b.deps.forEach((pid) => {
          const pt = trackRefs.current[pid];
          const pb = GANTT.find((x) => x.id === pid);
          if (!pt || !pb) return;
          const pr = pt.getBoundingClientRect();
          const px = pr.left - cr.left;
          // pour un prédécesseur segmenté, la dépendance porte sur la fin du
          // segment de dé-risquage (ex. simulateur), pas sur la fin du hardware.
          const endIdx = pb.segs ? pb.segs[0].end : pb.end;
          const endX = px + ((endIdx + 1) / N) * pr.width; // bord droit utile du prédécesseur
          const endY = pr.top - cr.top + pr.height / 2;
          const dx = Math.max(20, Math.min(64, Math.abs(startX - endX) * 0.5));
          const d = `M ${endX.toFixed(1)} ${endY.toFixed(1)} C ${(endX + dx).toFixed(1)} ${endY.toFixed(1)}, ${(startX - dx).toFixed(1)} ${startY.toFixed(1)}, ${startX.toFixed(1)} ${startY.toFixed(1)}`;
          out.push({ key: `${pid}-${b.id}`, d, crit: !!(pb.critical && b.critical) });
        });
      });
      setLinks(out);
    };
    const raf = requestAnimationFrame(measure);
    const t = setTimeout(measure, 350); // après reveal / polices
    const ro = new ResizeObserver(measure);
    if (ganttRef.current) ro.observe(ganttRef.current);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [now]);

  return (
    <div className="gantt-wrap">
      <div className="gantt-scroll">
        <div className="gantt" style={{ ["--n" as string]: N }} ref={ganttRef}>
          {/* flèches de dépendance (overlay mesuré) */}
          {showDeps && links.length > 0 && (
            <svg className="gantt-deps" aria-hidden="true">
              <defs>
                <marker id="gdep-a" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#8ea3c4" />
                </marker>
                <marker id="gdep-c" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#d3fc72" />
                </marker>
              </defs>
              {links.map((l) => (
                <path
                  key={l.key}
                  d={l.d}
                  className={`gdep-path${l.crit ? " crit" : ""}`}
                  markerEnd={`url(#${l.crit ? "gdep-c" : "gdep-a"})`}
                />
              ))}
            </svg>
          )}

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
                  <div className="gantt-track" ref={(el) => { trackRefs.current[b.id] = el; }}>
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

          {/* jalons */}
          <div className="gantt-row gantt-miles">
            <div className="gantt-side">Jalons</div>
            <div className="gantt-track">
              {MONTHS.map((_, c) => (
                <span className="gantt-grid" key={c} style={{ gridColumn: c + 1 }} />
              ))}
              {MILESTONES.map((m) => (
                <span className={`gantt-mile lvl-${m.lvl}`} key={m.idx} style={{ gridColumn: m.idx + 1 }}>
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
        <span><i className="gl-derisk" /> Dé-risquage (simulateur / POC)</span>
        <span><i className="gl-build" /> Engagement (développement)</span>
        <span><i className="gl-diamond" /> Jalon</span>
        <span><i className="gl-crit" /> Chemin critique</span>
        <span><i className="gl-dep" /> Dépendance</span>
        <button type="button" className={`gantt-depbtn${showDeps ? " on" : ""}`} onClick={() => setShowDeps((v) => !v)}>
          {showDeps ? "Masquer les liens" : "Afficher les liens"}
        </button>
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
