import type { Metadata } from "next";
import AmdecTable from "@/components/diagrams/AmdecTable";
import PageHeader from "@/components/PageHeader";
import RiskMap from "@/components/diagrams/RiskMap";

export const metadata: Metadata = {
  title: "Risques · Pawrise Care",
  description: "Étude AMDEC (4 domaines) et cartographie des risques projet.",
};

export default function RisquesPage() {
  return (
    <main>
      <PageHeader
        tag="Maîtrise des risques"
        color="var(--rose)"
        title="Risques"
        desc={
          <>
            Deux analyses complémentaires : l&apos;AMDEC cible les défaillances techniques du
            produit (collier, transmission, IA, escalade) ; la Risk Map cartographie les risques
            de conduite du projet.
          </>
        }
      />

      <div className="wrap sect-stack">
        <section className="panel-sect">
          <div className="ps-head">
            <h2>AMDEC · Modes de défaillance</h2>
            <p>Priorisation par IPR (G × O × D). Extrait des défaillances les plus critiques.</p>
          </div>
          <div className="glass ps-body">
            <AmdecTable />
          </div>
        </section>

        <section className="panel-sect">
          <div className="ps-head">
            <h2>Risk Map · Risques projet</h2>
            <p>Probabilité × Impact. Chaque pastille est un risque ; couleur = zone de criticité.</p>
          </div>
          <div className="glass ps-body">
            <RiskMap />
          </div>
        </section>
      </div>
    </main>
  );
}
