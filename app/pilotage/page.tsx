import type { Metadata } from "next";
import WbsTree from "@/components/diagrams/WbsTree";
import OrgChart from "@/components/diagrams/OrgChart";
import RaciMatrix from "@/components/diagrams/RaciMatrix";
import Gantt from "@/components/diagrams/Gantt";
import {
  METHODO,
  METHODO_JUSTIF,
  STORY_POINTS,
  QUALITY,
  TEST_STRATEGY,
  CODE_CONVENTIONS,
  GIT_WORKFLOW,
  CICD,
  ONBOARDING,
  COVERAGE,
  PO_NOTE,
  PHASES,
  JIRA,
} from "@/lib/content/pilotage";

export const metadata: Metadata = {
  title: "Pilotage · Pawrise Care",
  description: "WBS, OBS, RACI, méthodologie, plan qualité et planning du projet Pawrise Care.",
};

export default function PilotagePage() {
  return (
    <main>
      <header className="shead">
        <span className="ctag" style={{ color: "var(--svc)" }}>
          Gestion de projet
        </span>
        <h1>Pilotage</h1>
        <p>
          Comment l&apos;équipe découpe, organise et planifie le travail : structure de
          découpage (WBS), organisation (OBS), responsabilités (RACI), méthodologie,
          plan qualité et planning sur 20 mois.
        </p>
      </header>

      <div className="wrap sect-stack">
        {/* WBS */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>WBS · Work Breakdown Structure</h2>
            <p>9 lots techniques, du collier à la conformité. Cliquez pour déplier.</p>
          </div>
          <div className="glass ps-body">
            <WbsTree />
          </div>
        </section>

        {/* OBS + couverture nominative */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>OBS · Organisation</h2>
            <p>10 personnes, 5 pôles, sous le pilotage du Product Owner.</p>
          </div>
          <div className="ps-body">
            <OrgChart />
          </div>
          <p className="ps-text" style={{ padding: "0 4px" }}>{PO_NOTE}</p>
          <div className="glass ps-body" style={{ marginTop: 16 }}>
            <h3 className="ps-sub">Couverture nominative · qui fait quoi</h3>
            <p className="ps-text" style={{ marginTop: 0 }}>
              Chaque domaine est porté par un ou plusieurs responsables nommés, avec un backup
              identifié pour assurer la continuité (adéquation ressource / tâche).
            </p>
            <div className="raci-scroll">
              <table className="cov-table">
                <thead>
                  <tr><th>Domaine</th><th>Responsable(s)</th><th>Backup</th></tr>
                </thead>
                <tbody>
                  {COVERAGE.map((c) => (
                    <tr key={c.domain}>
                      <td className="cov-dom">{c.domain}</td>
                      <td>{c.leads}</td>
                      <td className="cov-bk">{c.backup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* RACI */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>RACI · Responsabilités par activité</h2>
            <p>Qui est responsable, approbateur, consulté ou informé pour chaque activité (par pôle).</p>
          </div>
          <div className="glass ps-body">
            <RaciMatrix />
          </div>
        </section>

        {/* Planning & Roadmap + preuve Jira */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Planning &amp; Roadmap</h2>
            <p>Décembre 2025 → Juillet 2027 : conception, développement parallèle, intégration.</p>
          </div>
          <div className="glass ps-body">
            <Gantt />
          </div>
          <div className="phases">
            {PHASES.map((ph) => (
              <div className="glass ps-body phase" key={ph.nom}>
                <div className="phase-h">
                  <b>{ph.nom}</b>
                  <span>{ph.periode}</span>
                </div>
                <p className="ps-text" style={{ margin: "0 0 10px" }}>{ph.objectif}</p>
                <ul className="phase-lines">
                  {ph.lignes.map((l) => (
                    <li key={l.quoi}>
                      <span>{l.quoi}</span>
                      <em>{l.qui}{l.quand ? ` · ${l.quand}` : ""}</em>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Outil de gestion · preuve Jira */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Outil de gestion · Jira</h2>
            <p>{JIRA.intro}</p>
          </div>
          <div className="bk-stats">
            {JIRA.stats.map((s) => (
              <div className="bk-stat" key={s.v}><b>{s.k}</b><span>{s.v}</span></div>
            ))}
          </div>
          <div className="ps-grid2" style={{ marginTop: 4 }}>
            <div className="glass ps-body">
              <h3 className="ps-sub">Flux de travail (board)</h3>
              <div className="flow-steps">
                {JIRA.workflow.map((w, i) => (
                  <span className="flow-step" key={w}>
                    {w}{i < JIRA.workflow.length - 1 ? <span className="flow-arrow">→</span> : null}
                  </span>
                ))}
              </div>
              <p className="ps-text">
                Board Jira (projet SCRUM) sur <b>{JIRA.url.replace("https://", "")}</b> : backlog
                priorisé, sprints, et tâches assignées nominativement aux 10 membres.
              </p>
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">Estimation · {""}story points (Planning Poker)</h3>
              <p className="ps-text" style={{ marginTop: 0 }}>{STORY_POINTS.intro}</p>
              <div className="sp-scale">
                {STORY_POINTS.echelle.map((e) => (
                  <div className="sp-row" key={e.pts}>
                    <span className="sp-pts">{e.pts}</span>
                    <span className="sp-ex">{e.ex}</span>
                  </div>
                ))}
              </div>
              <p className="ps-text" style={{ fontSize: 12 }}>{STORY_POINTS.regle}</p>
            </div>
          </div>
        </section>

        {/* Méthodologie + justification */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Méthodologie · Scrum adapté</h2>
            <p>Le choix méthodologique, sa justification et la cadence de l&apos;équipe.</p>
          </div>
          <div className="ps-grid2">
            <div className="glass ps-body">
              <p className="ps-text" style={{ marginTop: 0 }}>{METHODO.intro}</p>
              <div className="meth-rituals">
                {METHODO.rituels.map((r) => (
                  <div className="meth-rit" key={r.t}>
                    <b>{r.t}</b>
                    <span>{r.d}</span>
                  </div>
                ))}
              </div>
              <p className="ps-text"><b>Rôles :</b> {METHODO.roles.join(" · ")}</p>
              <p className="ps-text"><b>Outils :</b> {METHODO.outils}</p>
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">Pourquoi {METHODO_JUSTIF.choix} ?</h3>
              <p className="ps-text" style={{ marginTop: 0 }}>{METHODO_JUSTIF.pourquoi}</p>
              <div className="alt-list">
                {METHODO_JUSTIF.alternatives.map((a) => (
                  <div className="alt-row" key={a.nom}>
                    <div className="alt-top">
                      <b>{a.nom}</b>
                      <span className={`alt-verdict ${a.verdict === "Écarté" ? "no" : "mid"}`}>{a.verdict}</span>
                    </div>
                    <p className="ps-text" style={{ margin: "3px 0 0" }}>{a.raison}</p>
                  </div>
                ))}
              </div>
              <p className="ps-text" style={{ fontSize: 12 }}>{METHODO_JUSTIF.adaptation}</p>
            </div>
          </div>
        </section>

        {/* Plan qualité complet */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Plan qualité</h2>
            <p>Stratégie de tests par couche, conventions de code, workflow Git, CI/CD et onboarding — pour faciliter l&apos;intégration de nouveaux développeurs.</p>
          </div>

          <div className="glass ps-body">
            <h3 className="ps-sub">Stratégie de tests par couche</h3>
            <p className="ps-text" style={{ marginTop: 0 }}>
              {QUALITY[0]} {QUALITY[2]} {QUALITY[3]}
            </p>
            <div className="raci-scroll">
              <table className="cov-table">
                <thead>
                  <tr><th>Couche</th><th>Outils</th><th>Cible</th></tr>
                </thead>
                <tbody>
                  {TEST_STRATEGY.map((t) => (
                    <tr key={t.couche}>
                      <td className="cov-dom">{t.couche}</td>
                      <td>{t.outils}</td>
                      <td className="cov-bk">{t.cible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="ps-grid2" style={{ marginTop: 16 }}>
            <div className="glass ps-body">
              <h3 className="ps-sub">Conventions de code</h3>
              <ul className="ql-list">
                {CODE_CONVENTIONS.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">Workflow Git</h3>
              <p className="ps-text" style={{ marginTop: 0 }}>{GIT_WORKFLOW.intro}</p>
              <ul className="ql-list">
                {GIT_WORKFLOW.branches.map((b) => (
                  <li key={b.n}><b>{b.n}</b> — {b.d}</li>
                ))}
              </ul>
              <p className="ps-text" style={{ fontSize: 12 }}><b>Commits :</b> {GIT_WORKFLOW.commits}</p>
              <p className="ps-text" style={{ fontSize: 12 }}><b>Pull Request :</b> {GIT_WORKFLOW.pr}</p>
            </div>
          </div>

          <div className="ps-grid2" style={{ marginTop: 16 }}>
            <div className="glass ps-body">
              <h3 className="ps-sub">CI/CD &amp; déploiement</h3>
              <ul className="ql-list">
                {CICD.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">Onboarding développeur</h3>
              <ul className="ql-list">
                {ONBOARDING.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
