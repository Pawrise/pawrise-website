import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture & Tech · Pawrise Care",
};

// Le cockpit d'architecture (auto-suffisant) est servi depuis /public/cockpit.html
// et intégré ici en plein écran sous la barre de navigation.
export default function ArchitecturePage() {
  return (
    <iframe
      src="/cockpit.html"
      title="Cockpit d'architecture Pawrise Care"
      className="cockpit-frame"
    />
  );
}
