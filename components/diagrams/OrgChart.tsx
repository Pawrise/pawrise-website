import { OBS, PO } from "@/lib/content/pilotage";

export default function OrgChart() {
  return (
    <div className="obs">
      <div className="obs-po">
        <span className="obs-role">{PO.role}</span>
        <b>{PO.name}</b>
        <span className="obs-sub">Vision produit · backlog · arbitrage</span>
      </div>
      <div className="obs-stem" />
      <div className="obs-poles">
        {OBS.map((p) => (
          <div className="obs-pole glass" key={p.name} style={{ ["--a" as string]: p.accent }}>
            <span className="obs-pole-acc" />
            <h4>{p.name}</h4>
            <p className="obs-scope">{p.scope}</p>
            <div className="obs-members">
              {p.members.map((m) => (
                <span className="obs-mem" key={m}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
