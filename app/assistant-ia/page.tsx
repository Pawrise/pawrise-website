import type { Metadata } from "next";
import ChatbotPipeline from "@/components/diagrams/ChatbotPipeline";
import PageHeader from "@/components/PageHeader";
import {
  CHATBOT_INTRO,
  PIPELINE,
  GUARDRAILS,
  SCOPE_DO,
  SCOPE_DONT,
  FLOWS,
  ADRS,
  KPIS,
} from "@/lib/content/chatbot";

export const metadata: Metadata = {
  title: "Assistant IA · Pawrise Care",
  description:
    "Le Care Engine : assistant conversationnel non-diagnostique, pipeline LangGraph 6 nœuds, garde-fous 3 couches et handoff vétérinaire.",
};

export default function AssistantIAPage() {
  return (
    <main>
      <PageHeader tag="Care Engine" color="var(--ai)" title="Assistant IA" desc={CHATBOT_INTRO.pitch} />

      <div className="wrap sect-stack">
        {/* Règle d'or */}
        <section className="panel-sect">
          <div className="glass ps-body cb-rule">
            <span className="cb-rule-ic">⚖️</span>
            <div>
              <h3 className="ps-sub" style={{ margin: 0 }}>Règle d&apos;or</h3>
              <p className="ps-text" style={{ marginTop: 4 }}>{CHATBOT_INTRO.rule}</p>
            </div>
          </div>
          <p className="ps-text" style={{ padding: "0 4px" }}>{CHATBOT_INTRO.archi}</p>
        </section>

        {/* Pipeline */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Pipeline · LangGraph en 6 nœuds</h2>
            <p>Un pipeline déterministe et borné : chaque étape est testable et journalisée. Le LLM est cantonné à sa tâche, dans une cage.</p>
          </div>
          <div className="glass ps-body">
            <ChatbotPipeline />
          </div>
          <div className="blocks" style={{ padding: "18px 0 0" }}>
            {PIPELINE.map((n) => (
              <div className="block glass" key={n.n}>
                <div className="cb-node-h">
                  <span className="cb-node-n">{n.n}</span>
                  <h4 style={{ margin: 0 }}>{n.name}</h4>
                </div>
                {n.model ? <span className="soon">{n.model}</span> : null}
                <p>{n.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Garde-fous */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Garde-fous · défense en profondeur</h2>
            <p>Trois couches indépendantes : l&apos;échec de l&apos;une n&apos;expose pas le système. Non négociable vu le Code rural.</p>
          </div>
          <div className="blocks" style={{ padding: 0 }}>
            {GUARDRAILS.map((g) => (
              <div className="block glass" key={g.c} style={{ borderTop: "2px solid var(--ai)" }}>
                <span className="soon">{g.c}</span>
                <h4>{g.t}</h4>
                <p>{g.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Périmètre */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Périmètre</h2>
            <p>Ce que l&apos;assistant fait — et ce qu&apos;il ne fait jamais, par design.</p>
          </div>
          <div className="ps-grid2">
            <div className="glass ps-body">
              <h3 className="ps-sub" style={{ color: "#7fe9d6" }}>✓ Ce qu&apos;on fait</h3>
              <ul className="ql-list">
                {SCOPE_DO.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub" style={{ color: "#fda4af" }}>✕ Ce qu&apos;on ne fait jamais</h3>
              <ul className="ql-list">
                {SCOPE_DONT.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Flux */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Parcours clés</h2>
            <p>De l&apos;alerte collier à la conversation, puis au handoff vétérinaire structuré.</p>
          </div>
          <div className="ps-grid2">
            {FLOWS.map((f) => (
              <div className="glass ps-body" key={f.id}>
                <h3 className="ps-sub">{f.id} · {f.title}</h3>
                <ol className="cb-flow">
                  {f.steps.map((s) => <li key={s}>{s}</li>)}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* ADR + KPIs */}
        <section className="panel-sect">
          <div className="ps-head">
            <h2>Décisions &amp; objectifs</h2>
            <p>Les arbitrages d&apos;architecture clés et les indicateurs de succès (MVP).</p>
          </div>
          <div className="ps-grid2">
            <div className="glass ps-body">
              <h3 className="ps-sub">Décisions d&apos;architecture (ADR)</h3>
              {ADRS.map((a) => (
                <div className="cb-adr" key={a.id}>
                  <div className="cb-adr-h"><span className="cb-adr-id">{a.id}</span><b>{a.t}</b></div>
                  <p className="ps-text" style={{ margin: "2px 0 0" }}>{a.d}</p>
                </div>
              ))}
            </div>
            <div className="glass ps-body">
              <h3 className="ps-sub">Objectifs de succès (KPIs)</h3>
              <div className="cb-kpis">
                {KPIS.map((k) => (
                  <div className="cb-kpi" key={k.v}>
                    <b>{k.k}</b>
                    <span>{k.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
