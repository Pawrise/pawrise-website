import { GANTT, MILESTONES, MONTHS } from "@/lib/content/pilotage";

const N = MONTHS.length; // 20 mois

export default function Gantt() {
  return (
    <div className="gantt-scroll">
      <div className="gantt" style={{ ["--n" as string]: N }}>
        {/* en-tête mois */}
        <div className="gantt-row gantt-head">
          <div className="gantt-side" />
          <div className="gantt-track">
            {MONTHS.map((m, i) => (
              <span className="gantt-mcol" key={i} style={{ gridColumn: i + 1 }}>
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* barres */}
        {GANTT.map((b) => (
          <div className="gantt-row" key={b.label}>
            <div className="gantt-side">
              <b>{b.label}</b>
              <small>{b.team}</small>
            </div>
            <div className="gantt-track">
              <span
                className="gantt-bar"
                style={{
                  gridColumn: `${b.start + 1} / ${b.end + 2}`,
                  background: b.accent,
                }}
              />
            </div>
          </div>
        ))}

        {/* jalons */}
        <div className="gantt-row gantt-miles">
          <div className="gantt-side">Jalons</div>
          <div className="gantt-track">
            {MILESTONES.map((m) => (
              <span className="gantt-mile" key={m.idx} style={{ gridColumn: m.idx + 1 }}>
                <span className="gantt-diamond" />
                <span className="gantt-mlabel">{m.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
