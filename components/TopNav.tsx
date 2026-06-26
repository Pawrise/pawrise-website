"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SECTIONS } from "@/lib/sections";
import Logo from "@/components/Logo";

// PillNav (esprit React Bits) : barre pill glass, indicateur actif qui glisse
// (motion layoutId), condensation au scroll, menu mobile en cascade.
export default function TopNav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  // ferme le menu mobile au changement de route
  useEffect(() => setOpen(false), [path]);

  const isActive = (slug: string) => path === `/${slug}` || path === `/${slug}/`;

  return (
    <header className={`topnav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <Link href="/" className="brand" aria-label="Accueil Pawrise Care">
          <span className="logo"><Logo size={24} /></span>
          <span className="brand-txt">
            <b>Pawrise Care</b>
            <small>Collier connecté · santé animale</small>
          </span>
        </Link>

        <nav className="pill-links" aria-label="Sections">
          {SECTIONS.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className={`pill-link${isActive(s.slug) ? " on" : ""}`}>
              {isActive(s.slug) && (
                <motion.span layoutId="nav-pill" className="pill-ind" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
              )}
              <span className="pill-label">{s.title}</span>
            </Link>
          ))}
        </nav>

        <button className="nav-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="nav-overlay-links">
              {SECTIONS.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Link href={`/${s.slug}`} className={isActive(s.slug) ? "on" : ""}>
                    <span className="ov-tag">{s.tag}</span>
                    {s.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
