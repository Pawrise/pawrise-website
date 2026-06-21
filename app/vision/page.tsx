import type { Metadata } from "next";
import { VISION } from "@/lib/content/vision";

export const metadata: Metadata = {
  title: "Vision · Pawrise Care",
  description: "Problème, solution, utilisateurs cibles, périmètre MVP et risques majeurs.",
};

export default function VisionPage() {
  return (
    <main>
      <header className="shead">
        <span className="ctag" style={{ color: "var(--cli)" }}>Vision produit</span>
        <h1>Vision</h1>
        <p>{VISION.resume}</p>
      </header>

      <div className="wrap sect-stack">
        <section className="panel-sect">
          <div className="glass ps-body nonego">
            <span className="nonego-tag">Positionnement non-négociable</span>
            <p>{VISION.nonNego}</p>
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-grid2">
            <div className="glass ps-body">
              <h3 className="ps-sub">🔍 Le problème</h3>
              <ul className="ql-list">
                {VISION.probleme.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">💡 La solution</h3>
              <ul className="ql-list">
                {VISION.solution.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head"><h2>Utilisateurs cibles</h2></div>
          <div className="persona-grid">
            {VISION.personas.map((p) => (
              <div className="persona glass" key={p.who}>
                <b>{p.who}</b>
                <span>{p.need}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head"><h2>Périmètre MVP</h2><p>Ce qui est dans le MVP, ce qui est différé.</p></div>
          <div className="ps-grid2">
            <div className="glass ps-body">
              <h3 className="ps-sub">✅ Dans le MVP</h3>
              <div className="scope-tags">
                {VISION.mvpIn.map((s) => <span className="scope in" key={s}>{s}</span>)}
              </div>
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">⏳ Différé (hors MVP)</h3>
              <div className="scope-tags">
                {VISION.mvpOut.map((s) => <span className="scope out" key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head"><h2>Risques majeurs & garde-fous</h2></div>
          <div className="kill-grid">
            {VISION.killRisks.map((k) => (
              <div className="kill glass" key={k.t}>
                <b>{k.t}</b>
                <span>{k.m}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
