"use client";

import { useState } from "react";
import { EPICS } from "@/lib/content/backlog";

type Filter = "all" | "mvp" | "post";

export default function EpicGrid() {
  const [f, setF] = useState<Filter>("all");
  const list = EPICS.filter((e) => f === "all" || (f === "mvp" ? e.mvp : !e.mvp));
  return (
    <div>
      <div className="efilter">
        {(["all", "mvp", "post"] as Filter[]).map((k) => (
          <button key={k} className={f === k ? "on" : ""} onClick={() => setF(k)} type="button">
            {k === "all" ? "Tous" : k === "mvp" ? "MVP" : "Post-MVP"}
          </button>
        ))}
      </div>
      <div className="epics">
        {list.map((e) => (
          <div className="epic glass" key={e.n} style={{ ["--a" as string]: e.accent }}>
            <span className="epic-acc" />
            <div className="epic-top">
              <span className="epic-n">E{e.n}</span>
              <span className={`epic-tag ${e.mvp ? "mvp" : "post"}`}>{e.mvp ? "MVP" : "Post-MVP"}</span>
            </div>
            <h4>{e.title}</h4>
            <p>{e.desc}</p>
            <span className="epic-us">{e.us} US</span>
          </div>
        ))}
      </div>
    </div>
  );
}
