import { RISKS, riskZone, PROBA, IMPACT } from "@/lib/content/risks";

export default function RiskMap() {
  // grille 5x5 : lignes = Probabilité (5 en haut → 1 en bas), colonnes = Impact (1→5)
  const rows = [5, 4, 3, 2, 1];
  const cols = [1, 2, 3, 4, 5];
  const at = (p: number, i: number) => RISKS.filter((r) => r.p === p && r.i === i);
  return (
    <div className="rmap">
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
                      <span className="rmap-dot" key={r.id} title={r.label}>
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
        {RISKS.map((r) => (
          <div className={`rmap-li z-${riskZone(r.p * r.i)}`} key={r.id}>
            <b>{r.id}</b>
            <span>{r.label}</span>
            <em>{r.p}×{r.i}={r.p * r.i}</em>
          </div>
        ))}
      </div>
    </div>
  );
}
