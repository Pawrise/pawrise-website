"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useRef } from "react";
import { SECTIONS } from "@/lib/sections";

function Card({ slug, tag, title, desc }: { slug: string; tag: string; title: string; desc: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Link ref={ref} href={`/${slug}`} className="card glass spotlight" onMouseMove={onMove}>
      <span className="ctag">{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="more">Explorer →</span>
    </Link>
  );
}

export default function SectionCards() {
  return (
    <section className="wrap grid">
      {SECTIONS.map((s, i) => (
        <motion.div
          key={s.slug}
          className="grid-cell"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.4, 0, 0.2, 1] }}
        >
          <Card slug={s.slug} tag={s.tag} title={s.title} desc={s.desc} />
        </motion.div>
      ))}
    </section>
  );
}
