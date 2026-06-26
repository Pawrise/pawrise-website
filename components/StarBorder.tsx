"use client";

// React Bits — StarBorder (CSS pur, sans dépendance). Bouton à bordure animée.
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: string;
  speed?: string;
  thickness?: number;
  className?: string;
  href?: string;
};

export default function StarBorder({
  children,
  color = "#d3fc72",
  speed = "5s",
  thickness = 1,
  className = "",
  href,
}: Props) {
  const inner = (
    <>
      <div className="sb-bottom" style={{ background: `radial-gradient(circle, ${color}, transparent 10%)`, animationDuration: speed }} />
      <div className="sb-top" style={{ background: `radial-gradient(circle, ${color}, transparent 10%)`, animationDuration: speed }} />
      <div className="sb-inner">{children}</div>
    </>
  );
  const style = { padding: `${thickness}px 0` };
  return href ? (
    <a href={href} className={`star-border ${className}`} style={style}>{inner}</a>
  ) : (
    <button className={`star-border ${className}`} style={style}>{inner}</button>
  );
}
