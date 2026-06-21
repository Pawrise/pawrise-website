import type { Metadata } from "next";
import EpicGrid from "@/components/diagrams/EpicGrid";
import { BACKLOG_STATS } from "@/lib/content/backlog";

export const metadata: Metadata = {
  title: "Backlog & Features · Pawrise Care",
  description: "11 epics et 66 user stories, du collier au Vet Portal.",
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
          fonctionnalités d&apos;un même domaine.
        </p>
      </header>

      <div className="wrap sect-stack">
        <section className="panel-sect">
          <div className="bk-stats">
            <div className="bk-stat"><b>{BACKLOG_STATS.epics}</b><span>epics</span></div>
            <div className="bk-stat"><b>{BACKLOG_STATS.us}</b><span>user stories</span></div>
            <div className="bk-stat"><b>{BACKLOG_STATS.mvp}</b><span>US dans le MVP</span></div>
          </div>
          <EpicGrid />
        </section>
      </div>
    </main>
  );
}
