"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import BlurText from "@/components/fx/BlurText";

// En-tête de page animé (titre BlurText lettre par lettre + tag/intro en fondu).
export default function PageHeader({
  tag,
  title,
  desc,
  color = "var(--lime)",
}: {
  tag: string;
  title: string;
  desc: ReactNode;
  color?: string;
}) {
  return (
    <header className="shead">
      <motion.span className="ctag" style={{ color }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        {tag}
      </motion.span>
      <h1><BlurText text={title} per="char" stagger={0.035} /></h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
        {desc}
      </motion.p>
    </header>
  );
}
