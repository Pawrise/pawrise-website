#import "../lib.typ": dtable, keybox, brand, accent, accent2, lime, mut, hair
#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge

= Architecture technique

== Vue d'ensemble (simplifiée)

Le système s'organise en trois zones : clients et accès, services métier (Rust) autour d'un bus d'événements, et données. L'IA (Care Engine) est isolée et bornée. Schéma des flux principaux :

#align(center, box(inset: 6pt, {
  set text(size: 7.5pt)
  diagram(
    spacing: (14mm, 9mm),
    node-corner-radius: 3pt,
    node-stroke: 0.6pt + hair,
    node((0, 0), [Collier], fill: rgb("#eaf6f7")),
    node((0, 2), [App Mobile\ Vet Portal], fill: rgb("#eef7ef")),
    node((1, 0), [Broker MQTT], fill: rgb("#eaf6f7")),
    node((1, 2), [KrakenD\ (gateway)], fill: rgb("#eef7ef")),
    node((2, 0), [Ingestion], fill: rgb("#fdf1e7")),
    node((2, 1), [Core API], fill: rgb("#fdf1e7")),
    node((2, 2), [Care Engine\ (IA)], fill: rgb("#f0edfb")),
    node((3, 0), [TimescaleDB], fill: rgb("#eaf6fb")),
    node((3, 1), [PostgreSQL], fill: rgb("#eaf6fb")),
    node((3, 2), [pgvector], fill: rgb("#eaf6fb")),
    node((3, 3), [Azure OpenAI\ (UE)], fill: rgb("#fdf7e6")),
    edge((0, 0), (1, 0), "-|>", [MQTT]),
    edge((1, 0), (2, 0), "-|>"),
    edge((2, 0), (3, 0), "-|>"),
    edge((2, 0), (2, 1), "-|>", [Kafka]),
    edge((0, 2), (1, 2), "-|>"),
    edge((1, 2), (2, 1), "-|>"),
    edge((1, 2), (2, 2), "-|>"),
    edge((2, 1), (3, 1), "-|>"),
    edge((2, 2), (3, 2), "-|>", [RAG]),
    edge((2, 2), (3, 3), "-|>"),
    edge((2, 2), (2, 1), "-|>", [tools]),
  )
}))

#text(size: 8pt, fill: mut)[Version interactive complète (toutes les briques, flux et parcours) sur pawrise-care.com.]

== Choix techniques justifiés

Chaque décision structurante : besoin, alternatives écartées, décision, et trade-off assumé.

#dtable(
  columns: (7em, 1fr, 1.7fr),
  headers: ("Choix", "Alternatives écartées", "Décision & trade-off"),
  rows: (
    ("Rust (services métier)", "Node, Python, Go, C#", "Perf + sûreté mémoire, empreinte minimale. Coût dev ~2,5× assumé (mitigé : monolithe-first, Python pour l'IA, réintroduction ciblée)."),
    ("MQTT / EMQX (entrée IoT)", "HTTP, CoAP, passerelle maison", "Standard IoT : pub/sub léger, QoS, offline gratuits. Un composant de plus à opérer."),
    ("Apache Kafka (bus)", "RabbitMQ, appels directs", "Débit, rétention, découplage. Plus gourmand en RAM (dimensionne le cluster)."),
    ("PostgreSQL + TimescaleDB + pgvector", "Mongo + Influx + Qdrant séparés", "Une seule famille : transactionnel, séries temporelles, vectoriel. Bascule Qdrant possible."),
    ("Pipeline LangGraph borné", "Agent LLM autonome", "Chaque étape testable, responsabilité juridique portée par le pipeline (ADR-001)."),
    ("Azure OpenAI EU + cascade + Cohere", "LLM hors UE, modèle unique", "Data residency UE, ~0,03-0,05 €/conv. Dépendance Microsoft mitigée (interface LLMProvider)."),
    ("Kubernetes auto-géré + GitOps", "PaaS, managé d'emblée", "Économique et souverain ; plus d'ops, mitigé par l'IaC. Managé EU au scale."),
    ("OIDC maison", "Auth0, Keycloak, Cognito", "Souveraineté + défi formateur ; coûteux (~4-6 mois-homme), revue de sécurité obligatoire."),
  ),
)
