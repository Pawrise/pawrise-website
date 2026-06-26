// Marque Pawrise : fleur à 8 pétales (gouttes) en lime, reprise du deck.
export default function Logo({ size = 26 }: { size?: number }) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
      style={{ display: "block" }}
    >
      <g transform="translate(50 50)">
        {petals.map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            {/* pétale en goutte, pointe vers le centre */}
            <path
              d="M0 -13 C7 -13 11 -22 9 -34 C8 -40 4 -44 0 -44 C-4 -44 -8 -40 -9 -34 C-11 -22 -7 -13 0 -13 Z"
              fill="var(--lime, #d3fc72)"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
