// Diagramme natif du pipeline LangGraph (6 nœuds) du Care Engine.
// Recrée la logique de la spec Confluence au thème du site (SVG inline).

const NODES = [
  { n: 1, name: "Circuit Breaker", tag: "LLM mini", color: "#2dd4bf" },
  { n: 2, name: "Query Understanding", tag: "LLM mini", color: "#2dd4bf" },
  { n: 3, name: "Retrieval", tag: "BM25 + dense", color: "#22d3ee" },
  { n: 4, name: "Relevance Filter", tag: "Reranker", color: "#a78bfa" },
  { n: 5, name: "Customization", tag: "LLM principal", color: "#fb923c" },
  { n: 6, name: "Post-LLM Guardrail", tag: "LLM mini", color: "#2dd4bf" },
];

const NODE_W = 184;
const NODE_H = 88;
const GAP = 16;
const X0 = 20;
const Y = 150;
const xOf = (i: number) => X0 + i * (NODE_W + GAP);

export default function ChatbotPipeline() {
  const lastRight = xOf(5) + NODE_W;
  return (
    <div className="cbp-scroll">
      <svg className="cbp" viewBox={`0 0 ${lastRight + 20} 380`} role="img" aria-label="Pipeline LangGraph en 6 nœuds">
        <defs>
          <marker id="cbp-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 Z" fill="#90a4c8" />
          </marker>
          <marker id="cbp-arrow-r" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 Z" fill="#fb7185" />
          </marker>
        </defs>

        {/* Entrée */}
        <rect x={X0} y={40} width={NODE_W * 2 + GAP} height={48} rx={10} fill="rgba(45,212,191,.08)" stroke="rgba(45,212,191,.4)" />
        <text x={X0 + 16} y={60} className="cbp-lbl">Entrée</text>
        <text x={X0 + 16} y={78} className="cbp-sub">Question + contexte (profil, télémétrie 24h, alerte)</text>
        <line x1={X0 + NODE_W} y1={88} x2={X0 + NODE_W} y2={Y} stroke="#90a4c8" strokeWidth={1.5} markerEnd="url(#cbp-arrow)" />

        {/* Nœuds + flèches */}
        {NODES.map((node, i) => {
          const x = xOf(i);
          return (
            <g key={node.n}>
              {i < NODES.length - 1 && (
                <line x1={x + NODE_W} y1={Y + NODE_H / 2} x2={x + NODE_W + GAP} y2={Y + NODE_H / 2} stroke="#90a4c8" strokeWidth={1.6} markerEnd="url(#cbp-arrow)" />
              )}
              <rect x={x} y={Y} width={NODE_W} height={NODE_H} rx={12} fill="rgba(20,28,46,.92)" stroke={node.color} strokeWidth={1.4} />
              <rect x={x} y={Y} width={4} height={NODE_H} rx={2} fill={node.color} />
              <circle cx={x + 22} cy={Y + 24} r={11} fill={node.color} />
              <text x={x + 22} y={Y + 28} className="cbp-num">{node.n}</text>
              <text x={x + 40} y={Y + 28} className="cbp-name">{node.name}</text>
              <text x={x + 16} y={Y + 52} className="cbp-tag" fill={node.color}>{node.tag}</text>
              {/* flèche vers l'audit */}
              <line x1={x + NODE_W / 2} y1={Y + NODE_H} x2={x + NODE_W / 2} y2={310} stroke="rgba(144,164,200,.35)" strokeWidth={1} strokeDasharray="3 4" />
            </g>
          );
        })}

        {/* Sortie */}
        <line x1={lastRight} y1={Y + NODE_H / 2} x2={lastRight + 4} y2={Y + NODE_H / 2} stroke="#90a4c8" strokeWidth={1.6} />

        {/* Branche Safe Response (depuis nœud 1 et nœud 6) */}
        <rect x={xOf(2)} y={Y - 96} width={NODE_W * 2 + GAP} height={44} rx={10} fill="rgba(251,113,133,.08)" stroke="rgba(251,113,133,.45)" />
        <text x={xOf(2) + 14} y={Y - 70} className="cbp-lbl" fill="#fda4af">Safe Response (canned) · Escalade vétérinaire</text>
        {/* nœud 1 -> safe */}
        <path d={`M ${xOf(0) + NODE_W / 2} ${Y} V ${Y - 74} H ${xOf(2)}`} fill="none" stroke="#fb7185" strokeWidth={1.4} strokeDasharray="4 4" markerEnd="url(#cbp-arrow-r)" />
        {/* nœud 6 -> safe (arrive sur le bord droit de la box Safe Response) */}
        <path d={`M ${xOf(5) + NODE_W / 2} ${Y} V ${Y - 74} H ${xOf(2) + NODE_W * 2 + GAP}`} fill="none" stroke="#fb7185" strokeWidth={1.4} strokeDasharray="4 4" markerEnd="url(#cbp-arrow-r)" />

        {/* Audit log */}
        <rect x={X0} y={310} width={lastRight - X0} height={44} rx={10} fill="rgba(255,255,255,.04)" stroke="var(--line)" />
        <text x={X0 + 16} y={330} className="cbp-lbl">Audit log · append-only</text>
        <text x={X0 + 16} y={347} className="cbp-sub">Chaque conversation tracée (input, retrieval, prompts, output) · rétention 5 ans</text>
      </svg>
    </div>
  );
}
