"use client";

import { useState } from "react";
import { WBS, type WbsNode } from "@/lib/content/pilotage";

function Branch({ node, seed }: { node: WbsNode; seed: boolean }) {
  const [open, setOpen] = useState(seed);
  const has = !!node.children?.length;
  return (
    <li className="wbs-li">
      <button
        className={`wbs-node${has ? " has" : ""}${open ? " open" : ""}`}
        onClick={() => has && setOpen((o) => !o)}
        type="button"
      >
        <span className="wbs-id">{node.id}</span>
        <span className="wbs-label">{node.label}</span>
        {has && <span className="wbs-caret">{open ? "−" : "+"}</span>}
      </button>
      {has && open && (
        <ul className="wbs-children">
          {node.children!.map((c) => (
            <Branch key={c.id} node={c} seed={false} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function WbsTree() {
  const [allOpen, setAllOpen] = useState(false);
  return (
    <div className="wbs">
      <div className="wbs-bar">
        <span className="wbs-root">Pawrise Care</span>
        <button className="wbs-toggle" type="button" onClick={() => setAllOpen((o) => !o)}>
          {allOpen ? "Tout replier" : "Tout déplier"}
        </button>
      </div>
      {/* remount on toggle so each branch re-seeds its open state */}
      <ul className="wbs-children" key={String(allOpen)}>
        {WBS.map((n) => (
          <Branch key={n.id} node={n} seed={allOpen} />
        ))}
      </ul>
    </div>
  );
}
