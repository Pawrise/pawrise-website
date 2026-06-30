import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  CLOUD_PRINCIPLES,
  CLOUD_STACK,
  HOSTING_COLS,
  HOSTING_ROWS,
  HOSTING_DECISION,
  CLOUD_PHASES,
  COST_CONTROL,
  ANNUAL_COST,
  ANNUAL_NOTE,
  CLOUD_ANTI_OVERENG,
} from "@/lib/content/cloud";

export const metadata: Metadata = {
  title: "Cloud & Infrastructure · Pawrise Care",
  description:
    "Choix d'hébergement, stack Infrastructure as Code (Terraform, Kubernetes, Argo CD), stratégie de scale et maîtrise des coûts.",
};

export default function CloudPage() {
  return (
    <main>
      <PageHeader
        tag="Infrastructure"
        color="#4aa8ff"
        title="Cloud & Infrastructure"
        desc={
          <>
            Une infrastructure souveraine (UE / RGPD), maîtrisée en coût et prête à
            scaler : Hetzner auto-géré via Terraform aujourd&apos;hui, cloud managé européen
            le jour où la charge le justifie. Décrite en code, déployée en GitOps.
          </>
        }
      />

      <div className="wrap sect-stack">
        {/* Principes directeurs */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Principes directeurs</h2>
            <p>Les cinq règles qui guident tous nos choix d&apos;infrastructure.</p>
          </div>
          <div className="prof-grid">
            {CLOUD_PRINCIPLES.map((p) => (
              <div className="prof glass" key={p.t}>
                <b>{p.t}</b>
                <span>{p.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stack d'infrastructure */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>La stack d&apos;infrastructure</h2>
            <p>Chaque outil, son rôle et pourquoi on l&apos;a choisi.</p>
          </div>
          <div className="glass ps-body">
            <div className="raci-scroll">
              <table className="cov-table">
                <thead>
                  <tr><th>Techno</th><th>Rôle</th><th>Pourquoi</th></tr>
                </thead>
                <tbody>
                  {CLOUD_STACK.map((t) => (
                    <tr key={t.name}>
                      <td className="cov-dom">{t.name}</td>
                      <td>{t.role}</td>
                      <td className="cov-bk">{t.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Choix d'hébergement */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Le choix d&apos;hébergement</h2>
            <p>Bare Metal, VPS auto-géré ou cloud managé : ce qu&apos;on retient et pourquoi.</p>
          </div>
          <div className="glass ps-body">
            <div className="raci-scroll">
              <table className="cov-table">
                <thead>
                  <tr>
                    <th>Critère</th>
                    {HOSTING_COLS.map((c) => <th key={c}>{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {HOSTING_ROWS.map((r) => (
                    <tr key={r.crit}>
                      <td className="cov-dom">{r.crit}</td>
                      {r.cells.map((cell, i) => (
                        <td key={i} className={i === 1 ? "cov-bk" : undefined}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ql-golden">{HOSTING_DECISION}</p>
          </div>
        </section>

        {/* Stratégie en deux temps */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Stratégie en deux temps</h2>
            <p>Commencer simple et souverain, scaler uniquement quand le besoin réel apparaît.</p>
          </div>
          <div className="ps-grid2">
            {CLOUD_PHASES.map((ph) => (
              <div className="glass ps-body" key={ph.kind}>
                <div className="phase-h">
                  <b>{ph.kind} · {ph.titre}</b>
                  <span>{ph.periode}</span>
                </div>
                <ul className="ql-list" style={{ marginTop: 12 }}>
                  {ph.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Maîtrise des coûts en dev */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Maîtrise des coûts en développement</h2>
            <p>Éteindre ne suffit pas : on détruit et on recrée à la demande.</p>
          </div>
          <div className="glass ps-body">
            <p className="ps-text" style={{ marginTop: 0 }}>{COST_CONTROL.intro}</p>
            <ul className="ql-list">
              {COST_CONTROL.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </section>

        {/* Projection de coût annuel */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Coût annuel hors école</h2>
            <p>Ce que coûterait le projet sur un an selon le modèle d&apos;hébergement.</p>
          </div>
          <div className="glass ps-body">
            <div className="raci-scroll">
              <table className="cov-table">
                <thead>
                  <tr><th>Scénario</th><th>Ce qu&apos;il comprend</th><th>Coût annuel</th></tr>
                </thead>
                <tbody>
                  {ANNUAL_COST.map((a) => (
                    <tr key={a.scenario}>
                      <td className="cov-dom">{a.scenario}</td>
                      <td>{a.quoi}</td>
                      <td className="cov-bk">{a.cout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="raci-note" style={{ marginTop: 12 }}>{ANNUAL_NOTE}</p>
          </div>
        </section>

        {/* Anti sur-engineering */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Pourquoi pas un hyperscaler tout de suite</h2>
          </div>
          <div className="glass ps-body">
            <p className="ps-text" style={{ margin: 0 }}>{CLOUD_ANTI_OVERENG}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
