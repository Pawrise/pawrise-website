import { MEMBERS, SKILLS, SKILL_LEGEND } from "@/lib/content/team";

export default function CompetencyHeatmap() {
  return (
    <div>
      <div className="raci-scroll">
        <table className="heat-table">
          <thead>
            <tr>
              <th className="heat-skill">Compétence</th>
              {MEMBERS.map((m) => (
                <th key={m}>{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SKILLS.map((row) => (
              <tr key={row.skill}>
                <td className="heat-skill">{row.skill}</td>
                {row.levels.map((lv, i) => (
                  <td key={i} className={`heat-cell lv-${lv}`} title={`${MEMBERS[i]} : ${lv}`} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="heat-legend">
        {SKILL_LEGEND.map((l) => (
          <span key={l.lvl} className="heat-leg">
            <span className={`heat-swatch lv-${l.lvl}`} />
            {l.t}
          </span>
        ))}
      </div>
    </div>
  );
}
