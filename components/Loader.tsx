"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const PETALS = [0, 45, 90, 135, 180, 225, 270, 315];
const PETAL = "M0 -13 C7 -13 11 -22 9 -34 C8 -40 4 -44 0 -44 C-4 -44 -8 -40 -9 -34 C-11 -22 -7 -13 0 -13 Z";

// Loader 1er chargement : construction de la fleur (pétales en cascade) puis fondu.
export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.svg
            viewBox="0 0 100 100"
            width="96"
            height="96"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.4, 0.64, 1] }}
          >
            <g transform="translate(50 50)">
              {PETALS.map((deg, i) => (
                <motion.path
                  key={deg}
                  d={PETAL}
                  fill="#d3fc72"
                  transform={`rotate(${deg})`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.3 }}
                />
              ))}
            </g>
          </motion.svg>
          <motion.div
            className="loader-word"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            PAWRISE <span>CARE</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
