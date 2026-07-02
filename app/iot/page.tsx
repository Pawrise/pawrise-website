import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  IOT_INTRO,
  IOT_CHALLENGES,
  IOT_MCU,
  IOT_ZONES,
  IOT_COMPONENTS,
  IOT_SENSORS,
  IOT_NETWORK,
  IOT_SECURITY,
  IOT_STATES,
  IOT_CONSTRAINTS,
} from "@/lib/content/iot";

export const metadata: Metadata = {
  title: "IoT & Collier · Pawrise Care",
  description:
    "Le collier connecté : composants embarqués, capteurs justifiés, réseau LTE-M / MQTT, sécurité mTLS et logique firmware.",
};

export default function IotPage() {
  return (
    <main>
      <PageHeader
        tag="IoT / Hardware"
        color="#5eead4"
        title="Collier connecté"
        desc={IOT_INTRO}
      />

      <div className="wrap sect-stack">
        {/* Contraintes cibles */}
        <section className="panel-sect">
          <div className="bk-stats">
            {IOT_CONSTRAINTS.map((c) => (
              <div className="bk-stat" key={c.v}><b>{c.k}</b><span>{c.v}</span></div>
            ))}
          </div>
        </section>

        {/* Les défis */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Les défis à résoudre</h2>
            <p>Concevoir un collier autonome, fiable en zone blanche et sécurisé soulève des contraintes interdépendantes.</p>
          </div>
          <div className="prof-grid">
            {IOT_CHALLENGES.map((c) => (
              <div className="prof glass" key={c.t}>
                <b>{c.t}</b>
                <span>{c.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture 3 zones */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Architecture en 3 zones</h2>
            <p>Du collier jusqu&apos;au backend, chaque zone a un rôle clair.</p>
          </div>
          <div className="ps-grid2">
            {IOT_ZONES.map((z) => (
              <div className="glass ps-body" key={z.z}>
                <h3 className="ps-sub" style={{ marginTop: 0 }}>{z.z}</h3>
                <p className="ps-text" style={{ margin: 0 }}>{z.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Choix du MCU */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>{IOT_MCU.titre}</h2>
          </div>
          <div className="glass ps-body">
            <p className="ps-text">{IOT_MCU.d}</p>
          </div>
        </section>

        {/* Composants embarqués */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Le collier : composants embarqués</h2>
            <p>Ce qu&apos;on met dans le collier, et le rôle de chaque brique.</p>
          </div>
          <div className="glass ps-body">
            <div className="raci-scroll">
              <table className="cov-table">
                <thead>
                  <tr><th>Composant</th><th>Choix</th><th>Rôle</th></tr>
                </thead>
                <tbody>
                  {IOT_COMPONENTS.map((c) => (
                    <tr key={c.composant}>
                      <td className="cov-dom">{c.composant}</td>
                      <td>{c.choix}</td>
                      <td className="cov-bk">{c.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Capteurs justifiés */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Capteurs : choix justifiés</h2>
            <p>Les capteurs retenus, et les alternatives écartées.</p>
          </div>
          <div className="glass ps-body">
            <div className="raci-scroll">
              <table className="cov-table">
                <thead>
                  <tr><th>Mesure</th><th>Retenu</th><th>Pourquoi</th></tr>
                </thead>
                <tbody>
                  {IOT_SENSORS.map((s) => (
                    <tr key={s.capteur}>
                      <td className="cov-dom">{s.capteur}</td>
                      <td>{s.retenu}</td>
                      <td className="cov-bk">{s.pourquoi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Réseau & transport */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Réseau & transport</h2>
            <p>Connectivité basse consommation, pensée pour le réseau instable.</p>
          </div>
          <div className="prof-grid">
            {IOT_NETWORK.map((n) => (
              <div className="prof glass" key={n.t}>
                <b>{n.t}</b>
                <span>{n.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sécurité */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Sécurité de la flotte</h2>
            <p>Aucun faux collier ne peut injecter de données : authentification par certificat de bout en bout.</p>
          </div>
          <div className="glass ps-body">
            <ul className="ql-list">
              {IOT_SECURITY.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </section>

        {/* Machine à états */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Logique embarquée : machine à états</h2>
            <p>Le firmware C/Zephyr adapte ses acquisitions et sa transmission selon l&apos;état de l&apos;animal et du réseau.</p>
          </div>
          <div className="prof-grid">
            {IOT_STATES.map((s) => (
              <div className="prof glass" key={s.s}>
                <b>{s.s}</b>
                <span>{s.d}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
