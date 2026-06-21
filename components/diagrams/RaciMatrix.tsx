import { RACI_POLES, RACI_ROWS, type Raci } from "@/lib/content/pilotage";

const LABEL: Record<Exclude<Raci, "">, string> = {
  R: "Responsable",
  A: "Approbateur",
  C: "Consulté",
  I: "Informé",
};

export default function RaciMatrix() {
  return (
    <div className="raci">
      <div className="raci-scroll">
        <table className="raci-table">
          <thead>
            <tr>
              <th className="raci-act">Activité</th>
              {RACI_POLES.map((p) => (
                <th key={p}>{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RACI_ROWS.map((row) => (
              <tr key={row.activite}>
                <td className="raci-act">{row.activite}</td>
                {row.cells.map((c, i) => (
                  <td key={i} className={`raci-cell r-${c || "none"}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="raci-legend">
        {(Object.keys(LABEL) as Array<Exclude<Raci, "">>).map((k) => (
          <span key={k} className="raci-leg">
            <span className={`raci-dot r-${k}`}>{k}</span>
            {LABEL[k]}
          </span>
        ))}
      </div>
    </div>
  );
}
