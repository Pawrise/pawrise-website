import type { Metadata } from "next";
import CockpitClient from "./CockpitClient";

export const metadata: Metadata = {
  title: "Architecture & Tech · Pawrise Care",
};

export default function ArchitecturePage() {
  return <CockpitClient />;
}
