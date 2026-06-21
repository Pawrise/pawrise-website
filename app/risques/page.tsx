import type { Metadata } from "next";
import AmdecTable from "@/components/diagrams/AmdecTable";
import RiskMap from "@/components/diagrams/RiskMap";

export const metadata: Metadata = {
  title: "Risques · Pawrise Care",
  description: "Étude AMDEC (4 domaines) et cartographie des risques projet.",
};

export default function RisquesPage() {
  return (
    <main>
      <header className="shead">
        <span className="ctag" style={{ color: "var(--rose)" }}>Maîtrise des risques</span>
        <h1>Risques</h1>
        <p>
          Deux analyses complémentaires : l&apos;AMDEC cible les défaillances techniques du
          produit (collier, transmission, IA, escalade) ; la Risk Map cartographie les risques
          de conduite du projet.
        </p>
      </header>

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
