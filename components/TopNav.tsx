"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SECTIONS } from "@/lib/sections";

export default function TopNav() {
  const path = usePathname();
  return (
    <header className="topnav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="logo">🐾</span>
          <span>
            <b>Pawrise Care</b>
            <small>Collier connecté · santé animale</small>
          </span>
        </Link>
        <nav className="links">
          {SECTIONS.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className={path === `/${s.slug}` ? "on" : ""}
            >
              {s.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
