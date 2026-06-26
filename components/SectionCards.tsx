"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useRef } from "react";
import { SECTIONS } from "@/lib/sections";

// Effet MagicBento (React Bits) : halo de bordure + spotlight lime qui suivent
// le curseur sur toute la grille (intensité par proximité de chaque carte).
export default function SectionCards() {
  const gridRef = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".card");
    if (!cards) return;
    cards.forEach((card) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      const prox = Math.max(0, 1 - dist / 360);
      card.style.setProperty("--glow", prox.toFixed(3));
    });
  };
  const onLeave = () => {
    gridRef.current?.querySelectorAll<HTMLElement>(".card").forEach((c) => c.style.setProperty("--glow", "0"));
  };

  // Pavage bento propre : 1 grande (2×2) + 1 large (2×1) + 6 normales = 12 cellules (3 rangées de 4).
  const SPAN: Record<string, string> = {
    "assistant-ia": "cell-big",
    architecture: "cell-wide",
  };
  const HL: Record<string, string> = {
    vision: "Orienter, jamais diagnostiquer",
    architecture: "Rust · LangGraph · K8s / GitOps",
    "assistant-ia": "Pipeline 6 nœuds · 3 garde-fous · RAG",
    backlog: "11 epics · 66 US (52 MVP)",
    pilotage: "WBS · OBS · RACI · Gantt",
    business: "9,99 €/mois · LTV ≈ 4×",
    risques: "AMDEC · Risk Map",
    equipe: "10 personnes · 5 pôles",
  };

  return (
    <section ref={gridRef} className="wrap grid magic-grid" onMouseMove={onMove} onMouseLeave={onLeave}>
      {SECTIONS.map((s, i) => (
        <motion.div
          key={s.slug}
          className={`grid-cell ${SPAN[s.slug] || ""}`}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.4, 0, 0.2, 1] }}
        >
          <Link href={`/${s.slug}`} className="card glass magic">
            <span className="ctag">{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            {HL[s.slug] && <span className="tile-hl">{HL[s.slug]}</span>}
            <span className="more">Explorer →</span>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
