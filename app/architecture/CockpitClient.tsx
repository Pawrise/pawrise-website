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
    if (started.current) return;
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
  }, []);

  // .cockpit-root : conteneur fixé sous la navbar du site (cf. cockpit.css).
  return <div className="cockpit-root" dangerouslySetInnerHTML={{ __html: SHELL }} />;
}
