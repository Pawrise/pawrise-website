import { PESTEL } from "@/lib/content/business";

export default function PestelGrid() {
  return (
    <div className="pestel">
      {PESTEL.map((p) => (
        <div className="pestel-c glass" key={p.axe}>
          <span className="pestel-l">{p.letter}</span>
          <h4>{p.axe}</h4>
          <p className="pestel-sum">{p.summary}</p>
          <p className="pestel-key">{p.key}</p>
        </div>
      ))}
    </div>
  );
}
