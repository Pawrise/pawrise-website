"use client";

import CountUp from "@/components/fx/CountUp";

const STATS = [
  { to: 11, suffix: "", label: "epics" },
  { to: 66, suffix: "", label: "user stories" },
  { to: 10, suffix: "", label: "membres · 5 pôles" },
  { to: 20, suffix: " mois", label: "de roadmap" },
];

export default function HeroStats() {
  return (
    <div className="hero-stats wrap">
      {STATS.map((s) => (
        <div className="hstat glass" key={s.label}>
          <b><CountUp to={s.to} suffix={s.suffix} /></b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
