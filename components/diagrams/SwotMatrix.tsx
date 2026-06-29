import { SWOT } from "@/lib/content/business";

export default function SwotMatrix() {
  return (
    <div className="swot">
      {SWOT.map((q) => (
        <div className={`swot-q ${q.tone}`} key={q.key}>
          <div className="swot-head">
            <span className="swot-k">{q.key}</span>
            <h4>{q.title}</h4>
          </div>
          <ul>
            {q.items.map((it) => (
              <li key={it.t}>
                <b>{it.t}</b>
                <span>{it.d}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
