import type { Metadata } from "next";
import SwotMatrix from "@/components/diagrams/SwotMatrix";
import PageHeader from "@/components/PageHeader";
import PestelGrid from "@/components/diagrams/PestelGrid";
import { VALUE, MARKET, ECON, BOM, BOM_TOTAL, BOM_OPTIONS, BUDGET_NOTE, CLOUD_BUDGET, CLOUD_BUDGET_TOTAL, CLOUD_BUDGET_NOTE, CONFRONTATION, PESTEL_SYNTHESE } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Business & Stratégie · Pawrise Care",
  description: "Positionnement, marché, SWOT, PESTEL, modèle économique et budget prévisionnel.",
};

export default function BusinessPage() {
  return (
    <main>
      <PageHeader
        tag="Business & Stratégie"
        color="var(--ext)"
        title="Business & Stratégie"
        desc={
          <>
            Pourquoi Pawrise Care a sa place sur le marché : proposition de valeur,
            analyse du marché, SWOT, PESTEL, modèle économique et budget prévisionnel.
          </>
        }
      />

      <div className="wrap sect-stack">
        {/* Proposition de valeur */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Proposition de valeur</h2>
            <p>Un positionnement océan bleu : interpréter, pas seulement localiser.</p>
          </div>
          <div className="glass ps-body">
            <p className="ps-text" style={{ marginTop: 0 }}>{VALUE.pitch}</p>
            <p className="ps-text">{VALUE.ocean}</p>
            <div className="vp-piliers">
              {VALUE.piliers.map((p) => (
                <div className="vp-pilier" key={p.t}>
                  <b>{p.t}</b>
                  <span>{p.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marché */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Marché</h2>
            <p>Un marché large et porteur, encore mal couvert sur la santé.</p>
          </div>
          <div className="glass ps-body">
            <div className="mkt-figs">
              {MARKET.figures.map((f) => (
                <div className="mkt-fig" key={f.v}>
                  <b>{f.k}</b>
                  <span>{f.v}</span>
                </div>
              ))}
            </div>
            <p className="ps-text">{MARKET.note}</p>
          </div>
        </section>

        {/* SWOT */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>SWOT</h2>
            <p>Forces et faiblesses internes, opportunités et menaces externes.</p>
          </div>
          <SwotMatrix />
        </section>

        {/* Matrice de confrontation */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Matrice de confrontation</h2>
            <p>Ce que la stratégie tire du SWOT : croiser forces et faiblesses avec opportunités et menaces.</p>
          </div>
          <div className="confront">
            {CONFRONTATION.map((c) => (
              <div className={`confront-c ${c.tone}`} key={c.key}>
                <div className="confront-h">
                  <span className="confront-k">{c.key}</span>
                  <h4>{c.title}</h4>
                </div>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PESTEL */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>PESTEL</h2>
            <p>Les six familles de facteurs de l&apos;environnement macro.</p>
          </div>
          <PestelGrid />
          <div className="glass ps-body" style={{ marginTop: 16 }}>
            <h3 className="ps-sub">Hiérarchisation des facteurs</h3>
            <p className="ps-text" style={{ marginTop: 0 }}>
              Les leviers les plus favorables sont économiques et socioculturels ; les deux
              contraintes décisives sont la fiabilité de la mesure et la frontière du diagnostic.
            </p>
            <div className="raci-scroll">
              <table className="cov-table pestel-rank">
                <thead>
                  <tr><th>Dimension</th><th>Facteur structurant</th><th>Nature</th><th>Impact</th><th>Horizon</th></tr>
                </thead>
                <tbody>
                  {PESTEL_SYNTHESE.map((r) => (
                    <tr key={r.dim + r.facteur}>
                      <td className="cov-dom">{r.dim}</td>
                      <td>{r.facteur}</td>
                      <td><span className={`pr-nat ${r.nature === "Opportunité" ? "pos" : r.nature === "Vigilance" ? "mid" : "neg"}`}>{r.nature}</span></td>
                      <td>{r.impact}</td>
                      <td className="cov-bk">{r.horizon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Modèle économique */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Modèle économique</h2>
            <p>Unit-economics en trois scénarios.</p>
          </div>
          <div className="glass ps-body">
            <p className="ps-text" style={{ marginTop: 0 }}>
              <b>Hypothèses</b> (modèle prévisionnel, à valider) :
            </p>
            <ul className="ql-list" style={{ marginBottom: 16 }}>
              {ECON.hypotheses.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="raci-scroll">
              <table className="econ-table">
                <thead>
                  <tr>
                    <th>Métrique</th>
                    <th className="econ-opt">Optimiste</th>
                    <th>Base</th>
                    <th className="econ-pess">Pessimiste</th>
                  </tr>
                </thead>
                <tbody>
                  {ECON.rows.map((r) => (
                    <tr key={r.metric}>
                      <td className="raci-act">{r.metric}</td>
                      <td className="econ-opt">{r.opt}</td>
                      <td>{r.base}</td>
                      <td className="econ-pess">{r.pess}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ps-text" style={{ fontSize: "12px", color: "var(--faint)" }}>
              {ECON.footnote}
            </p>
            <p className="ps-text">{ECON.model}</p>
          </div>
        </section>

        {/* Budget prévisionnel */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Budget prévisionnel · collier</h2>
            <p>Coût matériel du prototype (BOM) et options de production.</p>
          </div>
          <div className="ps-grid2">
            <div className="glass ps-body">
              <h3 className="ps-sub">Nomenclature (Option D retenue)</h3>
              <table className="bom-table">
                <tbody>
                  {BOM.map((b) => (
                    <tr key={b.c}>
                      <td>{b.c}</td>
                      <td className="bom-p">{b.p}</td>
                    </tr>
                  ))}
                  <tr className="bom-total">
                    <td>Total unitaire</td>
                    <td className="bom-p">{BOM_TOTAL}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">Options de production</h3>
              <div className="bom-opts">
                {BOM_OPTIONS.map((o) => (
                  <div className={`bom-opt${o.o.includes("retenue") ? " on" : ""}`} key={o.o}>
                    <span>{o.o}</span>
                    <b>{o.p}</b>
                  </div>
                ))}
              </div>
              <p className="ps-text">{BUDGET_NOTE}</p>
            </div>
          </div>
        </section>

        {/* Budget cloud & exploitation */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Coût annuel de l&apos;infrastructure</h2>
            <p>Ce que coûte l&apos;infra sur un an une fois le produit lancé : hébergement souverain Hetzner (auto-géré, ligne ARM), sauvegardes et modèle de langage.</p>
          </div>
          <div className="glass ps-body">
            <div className="raci-scroll">
              <table className="cov-table">
                <thead>
                  <tr><th>Poste</th><th>Détail</th><th>Coût</th></tr>
                </thead>
                <tbody>
                  {CLOUD_BUDGET.map((c) => (
                    <tr key={c.poste}>
                      <td className="cov-dom">{c.poste}</td>
                      <td>{c.detail}</td>
                      <td className="cov-bk">{c.cout}</td>
                    </tr>
                  ))}
                  <tr className="bom-total">
                    <td>Total exploitation</td>
                    <td />
                    <td className="cov-bk">{CLOUD_BUDGET_TOTAL}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="ps-text" style={{ fontSize: 12 }}>{CLOUD_BUDGET_NOTE}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
