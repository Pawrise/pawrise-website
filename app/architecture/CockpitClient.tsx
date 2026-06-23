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
  return <div className="cockpit-root" dangerouslySetInnerHTML={{ __html: SHELL }} />;
}
