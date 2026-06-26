// @ts-nocheck
"use client";

import { usePathname, useRouter } from "next/navigation";
import StaggeredMenu from "@/components/navbits/StaggeredMenu";
import { SECTIONS } from "@/lib/sections";

export default function SiteNav() {
  const path = usePathname();
  const router = useRouter();
  const active = path === "/" ? "/" : path.replace(/\/$/, "");

  const items = [
    { label: "Accueil", link: "/", tag: "Pawrise Care", ariaLabel: "Accueil" },
    ...SECTIONS.map((s) => ({ label: s.title, link: `/${s.slug}`, tag: s.tag, ariaLabel: s.title })),
  ];

  return (
    <StaggeredMenu
      items={items}
      position="right"
      colors={["#01aabb", "#37338f"]}
      accentColor="#d3fc72"
      activeLink={active}
      onNavigate={(l: string) => router.push(l)}
      footer={
        <div className="sm-footer-in">
          <span className="sm-footer-tag">T-ESP-800 · Epitech EIP</span>
          <span className="sm-footer-sub">Collier connecté · IA d&apos;orientation vétérinaire</span>
        </div>
      }
    />
  );
}
