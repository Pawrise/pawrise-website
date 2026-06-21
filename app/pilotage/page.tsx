import type { Metadata } from "next";
import WbsTree from "@/components/diagrams/WbsTree";
import OrgChart from "@/components/diagrams/OrgChart";
import RaciMatrix from "@/components/diagrams/RaciMatrix";
import Gantt from "@/components/diagrams/Gantt";
import { METHODO, QUALITY } from "@/lib/content/pilotage";

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
          qualité et planning sur 20 mois.
        </p>
      </header>

      <div className="wrap sect-stack">
        <section className="panel-sect">
          <div className="ps-head">
            <h2>WBS · Work Breakdown Structure</h2>
            <p>9 lots techniques, du collier à la conformité. Cliquez pour déplier.</p>
          </div>
          <div className="glass ps-body">
            <WbsTree />
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head">
            <h2>OBS · Organisation</h2>
            <p>9 personnes, 5 pôles, sous le pilotage du Product Owner.</p>
          </div>
          <div className="ps-body">
            <OrgChart />
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head">
            <h2>RACI · Responsabilités</h2>
            <p>Qui est responsable, approbateur, consulté ou informé pour chaque activité.</p>
          </div>
          <div className="glass ps-body">
            <RaciMatrix />
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head">
            <h2>Planning & Roadmap</h2>
            <p>Décembre 2025 → Juillet 2027 : conception, développement parallèle, intégration.</p>
          </div>
          <div className="glass ps-body">
            <Gantt />
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head">
            <h2>Méthodologie & Qualité</h2>
            <p>Scrum adapté, tests continus.</p>
          </div>
          <div className="ps-grid2">
            <div className="glass ps-body">
              <h3 className="ps-sub">Méthodologie · Scrum adapté</h3>
              <p className="ps-text">{METHODO.intro}</p>
              <div className="meth-rituals">
                {METHODO.rituels.map((r) => (
                  <div className="meth-rit" key={r.t}>
                    <b>{r.t}</b>
                    <span>{r.d}</span>
                  </div>
                ))}
              </div>
              <p className="ps-text">
                <b>Rôles :</b> {METHODO.roles.join(" · ")}
              </p>
              <p className="ps-text">
                <b>Outils :</b> {METHODO.outils}
              </p>
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">Plan qualité · tests Agile</h3>
              <ul className="ql-list">
                {QUALITY.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
