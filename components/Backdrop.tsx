import Aurora from "@/components/Aurora";

// Fond DA PAWRISE : Aurora (React Bits) ancrée EN HAUT de la page (position
// absolute) — elle reste en haut et défile/part au scroll, sans suivre le viewport.
// Le grain (body::after) reste, lui, en texture fixe.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden>
      <div className="aurora-top">
        <Aurora colorStops={["#01aabb", "#d3fc72", "#37338f"]} amplitude={1.1} blend={0.55} speed={0.7} />
      </div>
      <span className="aurora-blob b4" />
      <div className="bd-scrim" />
    </div>
  );
}
