import { AMDEC, AMDEC_LEGEND, ipr, iprLevel } from "@/lib/content/risks";

export default function AmdecTable() {
  return (
    <div>
      <div className="amdec-leg">
        {AMDEC_LEGEND.map((l) => (
          <span key={l.k}><b>{l.k}</b> · {l.d}</span>
        ))}
        <span><b>IPR = G × O × D</b></span>
      </div>
      <div className="raci-scroll">
        <table className="amdec-table">
          <thead>
            <tr>
              <th>Domaine</th><th>Code</th><th>Mode de défaillance</th>
              <th>G</th><th>O</th><th>D</th><th>IPR</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {AMDEC.map((a) => {
              const v = ipr(a);
              return (
                <tr key={a.code}>
                  <td className="am-dom">{a.dom}</td>
                  <td className="am-code">{a.code}</td>
                  <td className="am-mode">{a.mode}</td>
                  <td>{a.g}</td><td>{a.o}</td><td>{a.d}</td>
                  <td className={`am-ipr lvl-${iprLevel(v)}`}>{v}</td>
                  <td className="am-act">{a.action}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="amdec-scale">
        <span className="lvl-low">&lt; 30 Faible</span>
        <span className="lvl-mod">30–59 Modéré</span>
        <span className="lvl-high">60–99 Élevé</span>
        <span className="lvl-crit">≥ 100 Critique</span>
      </div>
    </div>
  );
}
