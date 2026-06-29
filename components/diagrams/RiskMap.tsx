import { RISKS, riskZone, PROBA, IMPACT } from "@/lib/content/risks";

const score = (r: { p: number; i: number }) => r.p * r.i;
const REG = [...RISKS].sort((a, b) => score(b) - score(a));
const nCrit = REG.filter((r) => riskZone(score(r)) === "crit").length;
const nHigh = REG.filter((r) => riskZone(score(r)) === "high").length;
const nMod = REG.filter((r) => riskZone(score(r)) === "mod").length;

export default function RiskMap() {
  // grille 5x5 : lignes = Probabilité (5 en haut → 1 en bas), colonnes = Impact (1→5)
  const rows = [5, 4, 3, 2, 1];
  const cols = [1, 2, 3, 4, 5];
  const at = (p: number, i: number) => RISKS.filter((r) => r.p === p && r.i === i);
  return (
    <div className="rmap">
      <div className="rmap-summary">
        <span><b>{REG.length}</b> risques</span>
        <span className="zt-crit"><b>{nCrit}</b> critiques</span>
        <span className="zt-high"><b>{nHigh}</b> élevés</span>
        <span className="zt-mod"><b>{nMod}</b> modérés</span>
      </div>
      <div className="rmap-grid-wrap">
        <div className="rmap-yaxis">Probabilité →</div>
        <div className="rmap-grid">
          {rows.map((p) => (
            <div className="rmap-row" key={p}>
              <span className="rmap-ytick">{PROBA[p]}</span>
              {cols.map((i) => {
                const z = riskZone(p * i);
                return (
                  <div className={`rmap-cell z-${z}`} key={i}>
                    {at(p, i).map((r) => (
                      <span className="rmap-dot" key={r.id} title={`${r.label} (${r.p}×${r.i}=${r.p * r.i})`}>
                        {r.id}
                      </span>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
          <div className="rmap-row rmap-xaxis">
            <span className="rmap-ytick" />
            {cols.map((i) => (
              <span className="rmap-xtick" key={i}>{IMPACT[i]}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="rmap-reg">
        {REG.map((r) => (
          <div className={`rmap-li z-${riskZone(score(r))}`} key={r.id}>
            <b>{r.id}</b>
            <span className="rmap-cat">{r.cat}</span>
            <span className="rmap-lbl">{r.label}</span>
            <em>{r.p}×{r.i}={score(r)}</em>
          </div>
        ))}
      </div>
    </div>
  );
}
