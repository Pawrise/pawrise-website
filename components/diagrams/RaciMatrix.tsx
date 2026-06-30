"use client";

import { useState } from "react";
import { RACI_POLES, RACI_ROWS, type Raci } from "@/lib/content/pilotage";

// Définitions reprises de la page RACI Confluence.
const LEGEND: { k: Exclude<Raci, "" | "AR">; label: string; def: string }[] = [
  { k: "R", label: "Responsable", def: "Le pôle en charge de la mission : il produit le livrable." },
  { k: "A", label: "Approbateur", def: "Le pôle garant : il valide le livrable (review)." },
  { k: "C", label: "Consulté", def: "Le pôle consulté en amont par l'équipe en charge." },
  { k: "I", label: "Informé", def: "Le pôle tenu informé du livrable." },
];

export default function RaciMatrix() {
  const [col, setCol] = useState<number | null>(null);

  return (
    <div className="raci">
      <div className="raci-scroll">
        <table className="raci-table">
          <thead>
            <tr>
              <th className="raci-act">Activité</th>
              {RACI_POLES.map((p, i) => (
                <th
                  key={p}
                  className={col === i ? "raci-colon" : ""}
                  onMouseEnter={() => setCol(i)}
                  onMouseLeave={() => setCol(null)}
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RACI_ROWS.map((row) => (
              <tr key={row.activite}>
                <td className="raci-act">{row.activite}</td>
                {row.cells.map((c, i) => (
                  <td
                    key={i}
                    className={`raci-cell r-${c || "none"}${col === i ? " raci-colon" : ""}`}
                    onMouseEnter={() => setCol(i)}
                    onMouseLeave={() => setCol(null)}
                  >
                    {c === "AR" ? <span className="raci-ar">A/R</span> : c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="raci-legend">
        {LEGEND.map((l) => (
          <span key={l.k} className="raci-leg">
            <span className={`raci-dot r-${l.k}`}>{l.k}</span>
            <span className="raci-leg-txt">
              <b>{l.label}</b>
              <em>{l.def}</em>
            </span>
          </span>
        ))}
      </div>
      <p className="raci-note">
        <b>Règle appliquée :</b> exactement un garant (A) par activité et au moins un responsable (R).
        Le A est distribué : chaque pôle est garant de son propre livrable, le Product Owner reste
        garant du cadrage et de la gouvernance (RGPD, qualité). <b>A/R</b>{" "}
        signale un pôle à la fois responsable et garant. Les 6 pôles recoupent
        l&apos;organisation (OBS) ci-dessus : Fullstack
        (backend &amp; portail), IoT (collier), Design/Mobile (app), IA/Data (Care Engine),
        Cloud/Ops (infra).
      </p>
    </div>
  );
}
