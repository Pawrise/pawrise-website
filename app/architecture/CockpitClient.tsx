"use client";

import { useEffect, useRef } from "react";
import "./cockpit.css";
import { SHELL } from "./shell";
import { initCockpit } from "./cockpitRuntime";

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
          <h2>L&apos;architecture, en grand</h2>
          <p>
            Cette section est une <b>carte interactive</b> : on y explore les briques du
            produit, les flux de données et les parcours, en zoomant et en cliquant. Pensée
            pour les grands écrans, elle se découvre bien mieux sur un <b>ordinateur</b>.
          </p>
          <p className="cmob-sub">En attendant, le reste du projet est à explorer juste ici.</p>
          <a href="/" className="cmob-btn">Retour à l&apos;accueil</a>
        </div>
      </div>
      <div className="cockpit-root" dangerouslySetInnerHTML={{ __html: SHELL }} />
    </>
  );
}
