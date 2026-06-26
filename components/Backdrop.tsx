"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

// Aurora (WebGL) chargée à la demande et UNIQUEMENT sur la home (perf).
// Les pages internes gardent le dégradé statique DA (body) + glow lime + scrim.
const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

export default function Backdrop() {
  const path = usePathname();
  const isHome = path === "/";
  return (
    <div className="backdrop" aria-hidden>
      {isHome && (
        <div className="aurora-top">
          <Aurora colorStops={["#01aabb", "#d3fc72", "#37338f"]} amplitude={1.1} blend={0.55} speed={0.7} />
        </div>
      )}
      <span className="aurora-blob b4" />
      <div className="bd-scrim" />
    </div>
  );
}
