#import "../lib.typ": dtable, keybox, brand, accent, lime, mut, hair, limebg
#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge

= IA — le Care Engine

L'assistant conversationnel contextualise l'état d'un chien à partir des données du collier, répond sur la base d'un corpus vétérinaire validé, et organise un handoff structuré vers un vétérinaire quand c'est pertinent.

#keybox(title: "Règle d'or")[
  L'assistant n'établit jamais de diagnostic médical (Code rural, article L243-1) : il explique, oriente, et invite à consulter. Architecture : un pipeline LangGraph déterministe borné à 6 nœuds, déployé sur Azure OpenAI Europe ; la mémoire long-terme est déléguée au backend via tool calls.
]

== Pipeline LangGraph (6 nœuds)

#align(center, box(inset: 6pt, {
  set text(size: 7pt)
  diagram(
    spacing: (7mm, 11mm),
    node-corner-radius: 3pt,
    node-stroke: 0.6pt + hair,
    node((2, -1), [Safe Response / escalade vétérinaire], fill: rgb("#fdeef0"), stroke: 0.6pt + rgb("#e8879a")),
    node((0, 0), [1. Circuit\ Breaker], fill: rgb("#eaf6f7")),
    node((1, 0), [2. Query\ Understanding], fill: rgb("#eaf6f7")),
    node((2, 0), [3. Retrieval\ BM25+dense], fill: rgb("#eaf6fb")),
    node((3, 0), [4. Relevance\ Filter], fill: rgb("#f0edfb")),
    node((4, 0), [5. Customization\ (LLM principal)], fill: rgb("#fdf1e7")),
    node((5, 0), [6. Post-LLM\ Guardrail], fill: rgb("#eaf6f7")),
    edge((0, 0), (1, 0), "-|>"),
    edge((1, 0), (2, 0), "-|>"),
    edge((2, 0), (3, 0), "-|>"),
    edge((3, 0), (4, 0), "-|>"),
    edge((4, 0), (5, 0), "-|>"),
    edge((0, 0), (2, -1), "-|>", stroke: rgb("#e8879a")),
    edge((5, 0), (2, -1), "-|>", stroke: rgb("#e8879a")),
  )
}))

#text(size: 8pt, fill: mut)[Pipeline déterministe et borné : chaque étape est testable et journalisée (audit append-only, rétention 5 ans). Le LLM est cantonné à sa tâche.]

== Garde-fous (défense en profondeur, 3 couches)

- *Couche 1 — pré-LLM (Circuit Breaker)* : classifier d'intention ; tout ce qui n'est pas « clean » est dérouté vers une Safe Response ou une escalade, sans atteindre le LLM principal.
- *Couche 2 — raisonnement* : system prompt strict + whitelist de tools + obligation de citer le corpus pour tout claim médical.
- *Couche 3 — post-LLM* : détection « diagnostic-like », contrôle d'ancrage sur les sources, déclenchement forcé de l'escalade selon des règles explicites.

== Périmètre

*Ce qu'on fait :* Q&A santé/comportement (corpus + télémétrie), contextualisation d'une alerte collier, handoff vétérinaire structuré (PDF + JSON), refus systématique du diagnostic, audit complet.

*Ce qu'on ne fait jamais :* diagnostic explicite, prescription/posologie, gestion d'urgences vitales (redirection urgentiste), conseils de dressage, conseils nutritionnels précis.

== Coût des modèles (cascade « un modèle par nœud »)

Chaque nœud utilise le modèle le moins cher qui fait le travail ; seul le nœud de génération mobilise le gros modèle.

#dtable(
  columns: (auto, 1fr, auto),
  headers: ("Nœud", "Modèle", "Prix (entrée / sortie, 1M tokens)"),
  rows: (
    ("1 · Circuit Breaker", "mini · GPT-5-nano", "0,05 $ / 0,40 $"),
    ("2 · Query Understanding", "mini · GPT-5-nano", "0,05 $ / 0,40 $"),
    ("3 · Retrieval", "embeddings text-embedding-3-large + BM25", "0,13 $ / 0"),
    ("4 · Relevance Filter", "Cohere Rerank 3.5 multilingue", "2 $ / 1 000 recherches"),
    ("5 · Customization", "principal · GPT-5 (ou GPT-4.1)", "~1,25 à 2,50 $ / ~10 $"),
    ("6 · Post-Guardrail", "mini · GPT-5-nano", "0,05 $ / 0,40 $"),
  ),
)

#keybox(title: "Coût par conversation ≈ 0,03 à 0,05 €")[
  Répartition : génération ~85 %, reranking ~10 %, nœuds mini ~2 %, embeddings < 0,5 %. La cascade économise ~30 à 35 % vs tout passer par le gros modèle. Ce coût valide la cible de la spec (moins de 0,05 €/conversation). Alternative souveraine prévue (ADR-002) : Mistral (UE), coût équivalent, données 100 % UE. Prix éditeurs en dollars, parité dollar/euro retenue.
]

== Décisions d'architecture (ADR)

#dtable(
  columns: (auto, 1fr),
  headers: ("ADR", "Décision"),
  rows: (
    ("001 — Pipeline borné", "6 nœuds déterministes, pas d'agent autonome : responsabilité juridique portée par le pipeline."),
    ("002 — Azure OpenAI EU + cascade", "Data residency UE, pas d'entraînement sur les données ; interface LLMProvider (bascule possible)."),
    ("003 — Reranker dédié", "Cohere Rerank 3.5 : latence ~10× meilleure qu'un filtre LLM, meilleure pertinence."),
    ("004 — Mémoire = backend", "Pas de fact store dans le chatbot ; tool calls vers le Core API (source de vérité unique)."),
    ("005 — Sortie JSON structurée", "Le front affiche les actions sans parser du markdown fragile."),
    ("006 — RGPD progressif", "MVP : masquage regex des PII ; V1 : Presidio + dictionnaire vétérinaire."),
    ("007 — Garde-fous 3 couches", "Défense en profondeur : l'échec d'une couche n'expose pas le système."),
    ("008 — Retrieval hybride", "BM25 (termes exacts) + dense (similarité), fusion RRF."),
    ("009 — Query Understanding", "Reformulation en termes vétérinaires + tool télémétrie avant le RAG."),
    ("010 — Audit append-only", "Log immuable de chaque conversation, rétention 5 ans : défense juridique et base d'eval."),
  ),
)

== Objectifs de succès (KPIs MVP)

0 faux diagnostic sur le golden set · ≥ 95 % de citation quand claim médical · 5 à 15 % de taux d'escalade approprié · réponse complète p95 < 8 s · recall\@5 ≥ 0,85 · détection jailbreak ≥ 95 %.
