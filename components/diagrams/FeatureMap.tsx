"use client";

import { useState } from "react";
import { FEATURES } from "@/lib/content/features";

// Fonctions attendues par lot du WBS (features de la solution). Chaque lot est
// dépliable et liste, par sous-composant, ce que le système doit accomplir.
export default function FeatureMap() {
  const [open, setOpen] = useState<string | null>("1");
  return (
    <div className="featmap">
      {FEATURES.map((g) => {
        const isOpen = open === g.id;
        return (
          <div className={`feat-lot${isOpen ? " open" : ""}`} key={g.id}>
            <button
              type="button"
              className="feat-head"
              onClick={() => setOpen(isOpen ? null : g.id)}
              aria-expanded={isOpen}
            >
              <span className="feat-id">{g.id}</span>
              <span className="feat-lot-name">{g.lot}</span>
              <span className="feat-caret">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="feat-body">
                {g.sub.map((s) => (
                  <div className="feat-sub" key={s.id}>
                    <div className="feat-sub-h">
                      <span className="feat-sub-id">{s.id}</span>
                      {s.title}
                    </div>
                    <ul className="feat-fns">
                      {s.fns.map((fn) => (
                        <li key={fn}>{fn}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
