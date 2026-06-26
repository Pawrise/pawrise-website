"use client";

import { motion } from "motion/react";

// Titre animé flou→net, lettre par lettre (esprit React Bits BlurText/SplitText).
export default function BlurText({
  text,
  className = "",
  per = "char",
  stagger = 0.04,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  per?: "char" | "word";
  stagger?: number;
  startDelay?: number;
}) {
  const parts = per === "char" ? Array.from(text) : text.split(" ");
  return (
    <span className={className} style={{ display: "inline-block" }} aria-label={text}>
      {parts.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, filter: "blur(12px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, delay: startDelay + i * stagger, ease: [0.2, 0, 0.2, 1] }}
        >
          {p === " " ? " " : p}
          {per === "word" ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
