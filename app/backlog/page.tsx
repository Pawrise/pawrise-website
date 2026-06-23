import type { Metadata } from "next";
import EpicGrid from "@/components/diagrams/EpicGrid";
import FeatureMap from "@/components/diagrams/FeatureMap";
import { BACKLOG_STATS, FR_GROUPS, NFR_LIST, AC_EXAMPLE } from "@/lib/content/backlog";

export const metadata: Metadata = {
  title: "Backlog & Features · Pawrise Care",
  description: "11 epics et 66 user stories, fonctions attendues par lot et exigences FR/NFR.",
};

export default function BacklogPage() {
  return (
    <main>
      <header className="shead">
        <span className="ctag" style={{ color: "var(--edge)" }}>Backlog produit</span>
        <h1>Backlog &amp; Features</h1>
        <p>
          Le produit est découpé en {BACKLOG_STATS.epics} epics et {BACKLOG_STATS.us} user
          stories, dont {BACKLOG_STATS.mvp} dans le périmètre MVP. Chaque epic regroupe les
          fonctionnalités d&apos;un même domaine et couvre des exigences fonctionnelles (FR) et
          non-fonctionnelles (NFR) précises.
        </p>
      </header>

      <div className="wrap sect-stack">
        {/* Epics */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Epics &amp; périmètre</h2>
            <p>Les {BACKLOG_STATS.epics} epics, leur volume de user stories et les exigences couvertes.</p>
          </div>
          <div className="bk-stats">
            <div className="bk-stat"><b>{BACKLOG_STATS.epics}</b><span>epics</span></div>
            <div className="bk-stat"><b>{BACKLOG_STATS.us}</b><span>user stories</span></div>
            <div className="bk-stat"><b>{BACKLOG_STATS.mvp}</b><span>US dans le MVP</span></div>
            <div className="bk-stat"><b>43 / 10</b><span>FR / NFR</span></div>
          </div>
          <EpicGrid />
        </section>

        {/* Fonctions attendues par lot (WBS) */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Fonctions attendues par lot (WBS)</h2>
            <p>
              Pour chaque composant du WBS, ce que la solution doit <b>accomplir</b> — la
              description des features attendues pour faciliter l&apos;implémentation. Cliquez un lot.
            </p>
          </div>
          <div className="glass ps-body">
            <FeatureMap />
          </div>
        </section>

        {/* Exigences FR / NFR */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Exigences · fonctionnelles &amp; non-fonctionnelles</h2>
            <p>43 exigences fonctionnelles (FR) regroupées par domaine, et 10 exigences non-fonctionnelles (NFR).</p>
          </div>
          <div className="ps-grid2">
            <div className="glass ps-body">
              <h3 className="ps-sub">Fonctionnelles (FR1–FR43)</h3>
              {FR_GROUPS.map((fr) => (
                <div className="fr-row" key={fr.refs}>
                  <span className="fr-ref">{fr.refs}</span>
                  <div>
                    <b>{fr.g}</b>
                    <p className="ps-text" style={{ margin: "2px 0 0" }}>{fr.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">Non-fonctionnelles (NFR1–NFR10)</h3>
              <div className="nfr-tags">
                {NFR_LIST.map((n) => (
                  <span className="nfr-tag" key={n}>{n}</span>
                ))}
              </div>
              <h3 className="ps-sub" style={{ marginTop: 20 }}>Critères d&apos;acceptation</h3>
              <p className="ps-text">
                Les {BACKLOG_STATS.us} user stories suivent le format <b>Given / When / Then</b>.
                Exemple :
              </p>
              <div className="ac-card">
                <div className="ac-story">{AC_EXAMPLE.story}</div>
                <p className="ac-line">{AC_EXAMPLE.asA} {AC_EXAMPLE.iWant} {AC_EXAMPLE.soThat}</p>
                <ul className="ac-list">
                  {AC_EXAMPLE.ac.map((a) => (
                    <li key={a.k}><b>{a.k}</b> {a.v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
