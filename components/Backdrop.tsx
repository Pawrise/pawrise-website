"use client";

import Aurora from "@/components/Aurora";
import { motion, useScroll, useTransform } from "motion/react";

// Fond DA PAWRISE : Aurora (React Bits) en parallax — au scroll on avance
// dans le fond (il défile plus lentement que le contenu), sans rester figé.
export default function Backdrop() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1600], [0, -340]);
  return (
    <div className="backdrop" aria-hidden>
      <motion.div className="aurora-top" style={{ y }}>
        <Aurora colorStops={["#01aabb", "#d3fc72", "#37338f"]} amplitude={1.1} blend={0.55} speed={0.7} />
      </motion.div>
      <motion.span className="aurora-blob b4" style={{ y: useTransform(scrollY, [0, 1600], [0, -140]) }} />
      <div className="bd-scrim" />
    </div>
  );
}
