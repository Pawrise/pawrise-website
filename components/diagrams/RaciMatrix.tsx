"use client";

import { useState } from "react";
import { RACI_POLES, RACI_ROWS, RACI_ROWS_STRICT, type Raci } from "@/lib/content/pilotage";

// Définitions reprises de la page RACI Confluence.
const LEGEND: { k: Exclude<Raci, "" | "AR">; label: string; def: string }[] = [
  { k: "R", label: "Responsable", def: "Le pôle en charge de la mission : il produit le livrable." },
  { k: "A", label: "Approbateur", def: "Le pôle garant : il valide le livrable (review)." },
  { k: "C", label: "Consulté", def: "Le pôle consulté en amont par l'équipe en charge." },
  { k: "I", label: "Informé", def: "Le pôle tenu informé du livrable." },
];

export default function RaciMatrix() {
  const [col, setCol] = useState<number | null>(null); // survol (desktop)
  const [pin, setPin] = useState<number | null>(null); // clic / tactile (mobile)
  const [mode, setMode] = useState<"standard" | "strict">("standard");
  const rows = mode === "standard" ? RACI_ROWS : RACI_ROWS_STRICT;
  const activeCol = pin ?? col; // la colonne figée prime sur le survol

  return (
    <div className="raci">
      <div className="efilter raci-switch">
        <button type="button" className={mode === "standard" ? "on" : ""} onClick={() => setMode("standard")}>
          Standard (A distribué)
        </button>
        <button type="button" className={mode === "strict" ? "on" : ""} onClick={() => setMode("strict")}>
          Format suiveur (1 R / 1 A / 1 C)
        </button>
      </div>
      <div className="raci-scroll">
        <table className="raci-table">
          <thead>
            <tr>
              <th className="raci-act">Activité</th>
              {RACI_POLES.map((p, i) => (
                <th
                  key={p}
                  className={`raci-poleh${activeCol === i ? " raci-colon" : ""}${pin === i ? " pinned" : ""}`}
                  onMouseEnter={() => setCol(i)}
                  onMouseLeave={() => setCol(null)}
                  onClick={() => setPin(pin === i ? null : i)}
                  title="Cliquer pour figer la colonne"
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.activite}>
                <td className="raci-act">{row.activite}</td>
                {row.cells.map((c, i) => (
                  <td
                    key={i}
                    className={`raci-cell r-${c || "none"}${activeCol === i ? " raci-colon" : ""}`}
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
      {mode === "standard" ? (
        <p className="raci-note">
          <b>Version standard :</b> exactement un garant (A) par activité et au moins un responsable (R),
          C et I libres. Le A est distribué : chaque pôle est garant de son propre livrable, le Product
          Owner reste garant du cadrage et de la gouvernance (RGPD, qualité). <b>A/R</b>{" "}
          signale un pôle à la fois responsable et garant. C&apos;est la lecture conforme au standard RACI.
        </p>
      ) : (
        <p className="raci-note">
          <b>Version format suiveur :</b> exactement un R, un A et un C par activité, tout le reste en I.
          Plus stricte que le standard (qui autorise plusieurs R et C), elle reste valide : un garant (A)
          unique et au moins un responsable (R) par activité. Le Product Owner est l&apos;approbateur unique,
          chaque pôle responsable de son livrable.
        </p>
      )}
      <p className="raci-note" style={{ marginTop: 8 }}>
        Les 6 pôles recoupent l&apos;organisation (OBS) ci-dessus : Fullstack (backend &amp; portail),
        IoT (collier), Design/Mobile (app), IA/Data (Care Engine), Cloud/Ops (infra). La RACI arbitre
        au niveau des pôles, l&apos;échelon de responsabilité ; la responsabilité individuelle, tâche par
        tâche, est portée par l&apos;assignation nominative des tickets Jira (10/10 membres) et par la
        couverture nominative par domaine.
      </p>
    </div>
  );
}
