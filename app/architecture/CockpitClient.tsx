"use client";

import { useEffect, useRef } from "react";
import "./cockpit.css";
import { SHELL } from "./shell";
import { initCockpit } from "./cockpitRuntime";
import { ARCHI_DECISIONS_INTRO, ARCHI_DECISIONS } from "@/lib/content/architecture";

// Le cockpit d'architecture est désormais une vraie route du site (plus d'iframe).
// On réutilise tel quel le CSS, le shell HTML et le moteur JS d'origine : le rendu
// est donc strictement identique, mais la page fait partie du bundle Next.
export default function CockpitClient() {
  const started = useRef(false);

  useEffect(() => {
    // Sur petit écran, le cockpit interactif n'est pas exploitable : on n'initialise
    // rien (perf) et on ne bloque pas le scroll -> un message invite à passer sur desktop.
    if (window.matchMedia("(max-width:820px)").matches) return;

    // Bloque le scroll uniquement tant que cette page est montée ; retiré au
    // démontage pour ne pas casser le scroll des autres pages (navigation SPA).
    document.body.classList.add("cockpit-active");

    if (!started.current) {
      started.current = true;

      // Police Inter exactement comme le cockpit d'origine (sinon fallback système).
      if (!document.getElementById("cockpit-inter-font")) {
        const link = document.createElement("link");
        link.id = "cockpit-inter-font";
        link.rel = "stylesheet";
        link.href =
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";
        document.head.appendChild(link);
      }

      initCockpit();
    }

    return () => {
      document.body.classList.remove("cockpit-active");
    };
  }, []);

  // .cockpit-root : conteneur fixé sous la navbar du site (cf. cockpit.css).
  // .cockpit-mobile : message affiché à la place sur petit écran (CSS).
  return (
    <>
      <div className="cockpit-mobile">
        <div className="cmob-card glass">
          <span className="cmob-ic">🗺️</span>
          <h2>La carte interactive est sur desktop</h2>
          <p>
            Le <b>cockpit d&apos;architecture</b> (briques, flux et parcours, à explorer en
            zoomant et en cliquant) est pensé pour les grands écrans. Les <b>choix techniques
            justifiés</b> ci-dessous, eux, se lisent partout.
          </p>
        </div>
      </div>
      <div className="cockpit-root" dangerouslySetInnerHTML={{ __html: SHELL }} />

      {/* Option A : justifications consolidées sous le cockpit (et contenu mobile). */}
      <section id="archi-choix" className="arch-deco">
        <div className="wrap sect-stack">
          <div className="ps-head">
            <h2>Choix techniques justifiés</h2>
            <p>{ARCHI_DECISIONS_INTRO}</p>
          </div>
          <div className="archd-grid">
            {ARCHI_DECISIONS.map((d) => (
              <div className="archd glass" key={d.titre}>
                <h3>{d.titre}</h3>
                <div className="archd-row"><span>Besoin</span><p>{d.besoin}</p></div>
                <div className="archd-row"><span>Alternatives écartées</span><p>{d.alternatives}</p></div>
                <div className="archd-row"><span>Décision</span><p>{d.decision}</p></div>
                <div className="archd-row archd-to"><span>Trade-off assumé</span><p>{d.tradeoff}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
