"use client";

// React Bits — ShinyText (adapté : 'use client', TS, sans import CSS).
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "motion/react";

type Props = {
  text: string;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
};

export default function ShinyText({
  text,
  speed = 3,
  className = "",
  color = "#aab2dd",
  shineColor = "#ffffff",
  spread = 120,
}: Props) {
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const duration = speed * 1000;

  useAnimationFrame((time) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }
    elapsedRef.current += time - lastTimeRef.current;
    lastTimeRef.current = time;
    const cycle = duration + 1200;
    const t = elapsedRef.current % cycle;
    progress.set(t < duration ? (t / duration) * 100 : 100);
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [progress]);

  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`);

  return (
    <motion.span
      className={className}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundPosition,
      }}
    >
      {text}
    </motion.span>
  );
}
