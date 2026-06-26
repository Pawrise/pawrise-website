"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Effets globaux (toutes pages) : révélation au scroll des blocs + spotlight lime
// au survol des petites cartes. Aucune édition par page nécessaire.
// On ne révèle QUE les sections (statiques). Révéler les cartes internes cassait
// les contenus dynamiques (filtres, WBS) qui apparaissent sans être observés.
const REVEAL_SEL = ".panel-sect";
const SPOT_SEL = ".block, .epic, .swot-q, .pestel-c, .persona, .kill, .prof";

export default function PageFX() {
  const path = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll<HTMLElement>(REVEAL_SEL).forEach((el) => io.observe(el));

    const onMove = (ev: Event) => {
      const me = ev as MouseEvent;
      const c = ev.currentTarget as HTMLElement;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${me.clientX - r.left}px`);
      c.style.setProperty("--my", `${me.clientY - r.top}px`);
    };
    const cards = Array.from(document.querySelectorAll<HTMLElement>(SPOT_SEL));
    cards.forEach((c) => {
      c.classList.add("spot");
      c.addEventListener("mousemove", onMove);
    });

    return () => {
      io.disconnect();
      cards.forEach((c) => c.removeEventListener("mousemove", onMove));
    };
  }, [path]);

  return null;
}
