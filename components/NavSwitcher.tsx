// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { SECTIONS } from "@/lib/sections";
import Logo from "@/components/Logo";
import GooeyNav from "@/components/navbits/GooeyNav";
import Dock from "@/components/navbits/Dock";
import StaggeredMenu from "@/components/navbits/StaggeredMenu";

type NavKind = "gooey" | "dock" | "staggered";

const NAV_ITEMS = [{ slug: "", title: "Accueil" }, ...SECTIONS.map((s) => ({ slug: s.slug, title: s.title }))];

export default function NavSwitcher() {
  const path = usePathname();
  const router = useRouter();
  const [kind, setKind] = useState<NavKind>("gooey");

  useEffect(() => {
    const saved = localStorage.getItem("navKind") as NavKind | null;
    if (saved) setKind(saved);
  }, []);
  const choose = (k: NavKind) => {
    setKind(k);
    localStorage.setItem("navKind", k);
  };

  const activeIndex = Math.max(
    0,
    NAV_ITEMS.findIndex((it) => (it.slug === "" ? path === "/" : path === `/${it.slug}` || path === `/${it.slug}/`))
  );

  return (
    <>
      {kind === "gooey" && (
        <header className="topnav nav-gooey">
          <div className="wrap nav-inner">
            <Link href="/" className="brand">
              <span className="logo"><Logo size={24} /></span>
              <span className="brand-txt"><b>Pawrise Care</b><small>Collier connecté · santé animale</small></span>
            </Link>
            <div style={{ marginLeft: "auto" }}>
              <GooeyNav
                items={NAV_ITEMS.map((it) => ({ label: it.title, href: it.slug === "" ? "/" : `/${it.slug}` }))}
                initialActiveIndex={activeIndex}
              />
            </div>
          </div>
        </header>
      )}

      {kind === "dock" && (
        <>
          <header className="topnav nav-dock-brand">
            <div className="wrap nav-inner">
              <Link href="/" className="brand">
                <span className="logo"><Logo size={24} /></span>
                <span className="brand-txt"><b>Pawrise Care</b><small>Collier connecté · santé animale</small></span>
              </Link>
            </div>
          </header>
          <div className="dock-fixed">
            <Dock
              items={NAV_ITEMS.map((it) => ({
                label: it.title,
                icon: <span className="dock-ico-txt">{it.slug === "" ? "🏠" : it.title.slice(0, 2)}</span>,
                onClick: () => router.push(it.slug === "" ? "/" : `/${it.slug}`),
              }))}
            />
          </div>
        </>
      )}

      {kind === "staggered" && (
        <StaggeredMenu
          items={SECTIONS.map((s) => ({ label: s.title, link: `/${s.slug}`, ariaLabel: s.title }))}
          position="right"
          colors={["#01aabb", "#37338f"]}
          accentColor="#d3fc72"
        />
      )}

      {/* Sélecteur de test (provisoire) */}
      <div className="nav-switcher" role="group" aria-label="Tester la navbar">
        <span>Navbar :</span>
        {(["gooey", "dock", "staggered"] as NavKind[]).map((k) => (
          <button key={k} className={kind === k ? "on" : ""} onClick={() => choose(k)}>
            {k === "gooey" ? "Gooey" : k === "dock" ? "Dock" : "Staggered"}
          </button>
        ))}
      </div>
    </>
  );
}
