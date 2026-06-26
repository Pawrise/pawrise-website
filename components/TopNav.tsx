"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";
import Logo from "@/components/Logo";

export default function TopNav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 28));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className={`topnav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="logo"><Logo size={24} /></span>
          <span className="brand-txt">
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
