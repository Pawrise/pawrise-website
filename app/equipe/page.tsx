import type { Metadata } from "next";
import OrgChart from "@/components/diagrams/OrgChart";
import PageHeader from "@/components/PageHeader";
import CompetencyHeatmap from "@/components/diagrams/CompetencyHeatmap";
import { APPROACH, PROFILES, GAPS, TEAM_STATS } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Équipe · Pawrise Care",
  description: "Organisation, matrice de compétences et justification de l'équipe.",
};

export default function EquipePage() {
  return (
    <main>
      <PageHeader tag="L'équipe" color="var(--ai)" title="Équipe" desc={APPROACH} />

      <div className="wrap sect-stack">
        <section className="panel-sect">
          <div className="bk-stats">
            {TEAM_STATS.map((s) => (
              <div className="bk-stat" key={s.v}><b>{s.k}</b><span>{s.v}</span></div>
            ))}
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head"><h2>Organisation (OBS)</h2><p>5 pôles sous le pilotage du Product Owner.</p></div>
          <div className="ps-body"><OrgChart /></div>
        </section>

        <section className="panel-sect">
          <div className="ps-head">
            <h2>Matrice de compétences</h2>
            <p>Extrait des compétences les plus discriminantes (matrice complète sur Confluence).</p>
          </div>
          <div className="glass ps-body"><CompetencyHeatmap /></div>
        </section>

        <section className="panel-sect">
          <div className="ps-head"><h2>Pourquoi cette équipe</h2></div>
          <div className="prof-grid">
            {PROFILES.map((p) => (
              <div className="prof glass" key={p.who}>
                <b>
                  {p.who}
                  {p.founder && <span className="prof-founder">Co-fondateur</span>}
                </b>
                <span>{p.why}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head"><h2>Gaps identifiés & mitigation</h2></div>
          <div className="ps-grid2">
            {GAPS.map((g) => (
              <div className="glass ps-body gap" key={g.gap}>
                <b>{g.gap}</b>
                <span>{g.mit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
