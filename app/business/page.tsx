import type { Metadata } from "next";
import SwotMatrix from "@/components/diagrams/SwotMatrix";
import PestelGrid from "@/components/diagrams/PestelGrid";
import { VALUE, MARKET, ECON, BOM, BOM_TOTAL, BOM_OPTIONS, BUDGET_NOTE } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Business & Stratégie · Pawrise Care",
  description: "Positionnement, marché, SWOT, PESTEL, modèle économique et budget prévisionnel.",
};

export default function BusinessPage() {
  return (
    <main>
      <header className="shead">
        <span className="ctag" style={{ color: "var(--ext)" }}>
          Business & Stratégie
        </span>
        <h1>Business &amp; Stratégie</h1>
        <p>
          Pourquoi Pawrise Care a sa place sur le marché : proposition de valeur,
          analyse du marché, SWOT, PESTEL, modèle économique et budget prévisionnel.
        </p>
      </header>

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

        {/* PESTEL */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>PESTEL</h2>
            <p>Les six familles de facteurs de l&apos;environnement macro.</p>
          </div>
          <PestelGrid />
        </section>

        {/* Modèle économique */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Modèle économique</h2>
            <p>Unit-economics en trois scénarios.</p>
          </div>
          <div className="glass ps-body">
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
      </div>
    </main>
  );
}
