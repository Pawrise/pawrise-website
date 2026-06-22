---
stepsCompleted: [1, 2, 3, 4]
project: "Pawrise Care"
language: "French"
inputDocuments:
  - "_bmad-output/planning-artifacts/PRD.md"
  - "_bmad-output/planning-artifacts/epics.md"
  - "docs/challenge-strategique.md"
  - "docs/unit-economics.md"
workflow: "bmad-create-architecture"
architectureDirection: "Poussée — Kubernetes, Helm, ArgoCD (GitOps), microservices Rust, monolith-first→macroservices assumé"
generatedBy: "BMAD bmm — create-architecture (déroulé interactif, assisté Claude Code)"
---

# Pawrise Care — Architecture

> Document construit pas à pas via le workflow BMAD `create-architecture`. Contenu ajouté à chaque étape validée (C).

> **Principe directeur (demande du PO) :** architecture **ambitieuse et assumée** (exigence Epitech + vitrine professionnelle). Chaque décision lourde doit être **justifiée tech + business**. Posture retenue : **poussée d'emblée** — microservices Rust, Kubernetes, Helm, ArgoCD (GitOps). Les caveats de la table ronde (coût d'apprentissage, ops) sont des **risques connus assumés**, pas des freins.

## Project Context Analysis

### Requirements Overview

- **43 exigences fonctionnelles** (FR1–FR43) et **10 non-fonctionnelles** (NFR1–NFR10), **10 epics / 52 user stories**.
- Domaines couverts : IoT embarqué, ingestion temps réel, plateforme de données, moteur IA (analyse + chat RAG), app mobile propriétaire, Vet Portal web, téléconsultation d'orientation + pool de rémunération, conformité RGPD.

### Scale & Complexity

- Complexité **élevée / enterprise**.
- Domaine principal : **système distribué full-stack** (embarqué → backend événementiel → IA/data → mobile + web).
- Composants architecturaux estimés : ~6 bounded contexts (ingestion, device-mgmt, analytics-IA, vet/téléconsult, identity/RGPD, billing-pool).

### Technical Constraints & Dependencies

- **3 magasins de données** : relationnel (référentiel/transactionnel) + **time-series (TimescaleDB)** + **vector store** (RAG).
- **IoT temps réel** : BLE/cellulaire, basse consommation, **buffer hors-ligne + resynchronisation**.
- **Conformité** : RGPD, traçabilité ; **éthique IA** : aucun diagnostic automatisé.
- **Direction technique imposée** : **Kubernetes + Helm + ArgoCD (GitOps), microservices Rust** (réalité polyglotte assumée : Rust pour ingestion/firmware/services à charge, Python pour IA/RAG, Go ou TS pour produit/CRUD).

### Cross-Cutting Concerns Identified

Sécurité/chiffrement (NFR3), RGPD & traçabilité (NFR4), éthique IA anti-diagnostic (NFR5), temps réel & backpressure, offline-sync, observabilité (NFR7), multi-acteurs (propriétaires/vétos) & contrôle d'accès, scalabilité (NFR7).

### Gaps à résoudre dans les décisions (relevés en Party Mode)

1. **Contrat de synchronisation hors-ligne** : ordre, déduplication, horloge device vs serveur (risque n°1 de corruption de données).
2. **SLA temps réel** : latence cible ingestion → alerte (à chiffrer).
3. **Cohérence des 3 DB** : source de vérité unique + pattern de propagation (outbox/CDC) relationnel → TimescaleDB/vector.
4. **Frontières de services** et adoption progressive du GitOps sans opérer une plateforme avant d'avoir un produit.

## Starter / Foundations & Tech Stack

> Préférences techniques résolues avec le PO. Versions vérifiées web (juin 2026). Règle directrice : **Rust partout, sauf contrainte** (seule exception forcée : Care Engine en Python car LangGraph est Python/TS). Coût d'apprentissage Rust **assumé** (objectif Epitech / vitrine), en pleine connaissance du benchmark interne (Confluence « [TECH] Benchmark Backend » : Rust = 2,5× coût dev — superseded par décision PO).

### Stack par couche (avec justification tech + business)

| Couche | Choix | Version | Justif. tech | Justif. business |
| --- | --- | --- | --- | --- |
| Microservices métier | **Rust + Axum + Tokio + Tower-HTTP + SQLx** (clean arch : crates `api`/`domain`/`infra`/`shared`, tracing JSON) | Axum 0.8 · Tokio 1.x · Tower-HTTP 0.6 · SQLx 0.8 | Perf/latence (cf. Discord P99 500ms→<10ms), sûreté mémoire, SQL vérifié compile-time | Coûts cloud bas, vitrine d'excellence |
| Care Engine (IA/RAG) | **Python + LangGraph** (pipeline déterministe 6 nœuds) | — | Écosystème ML/LLM, contrainte LangGraph | Time-to-market IA |
| Bus d'événements | **Apache Kafka** | — | Très haut débit, écosystème connecteurs | Référence enterprise (CV/partenaires) |
| Ingress IoT (collier) | **Broker MQTT** (EMQX / Mosquitto) | — | Standard IoT léger (QoS, sessions persistantes, buffer offline) ; MQTT over TLS + cert client. **L'Ingestion s'y abonne** (client MQTT) | Pensé batterie + cellulaire instable ; pas de gateway maison à maintenir |
| Mobile (owner) | **Natif : Kotlin (Android) + SwiftUI (iOS)** | — | Perf/UX natives, accès capteurs/BLE | Vitrine ; ⚠️ risque : compétence iOS SwiftUI faible (matrice) |
| Web (Vet Portal) | **Next.js + Tailwind** | — | SSR, écosystème React | Compétence équipe (Adam) |
| Données | **PostgreSQL** + **TimescaleDB** + **Vector (pgvector vs Qdrant — à trancher Step 4)** | — | Les « 3 DB » | — |
| LLM | **Azure OpenAI EU** (interface `LLMProvider` abstraite) | — | Data residency EU, DPA, qualité FR (ADR-002) | DPA signable, bascule Mistral/self-host possible |
| RAG | **Hybride BM25 + dense + RRF** + **reranker Cohere rerank-multilingual-v3** + Query Understanding | — | NDCG@5 ≥ LLM-filter, latence ~100ms (ADR-003/008/009) | — |
| Plateforme | **Kubernetes auto-géré sur Hetzner** (k3s/kubeadm) + **Helm** + **ArgoCD** (app-of-apps / ApplicationSets, repo `apps`/`charts`/`env`) | ArgoCD chart 7.8.0 | GitOps déclaratif, multi-env | Budget maîtrisé + souveraineté EU (Hetzner = Allemagne, RGPD) |
| Audit | **Append-only, object storage S3-compatible Hetzner + rétention 5 ans** | — | Défense juridique Code rural (ADR-010) | Conformité |
| Repo | **Monorepo polyglotte** (Cargo workspace + Next.js + Python) + **repo GitOps séparé** | — | Frontières claires, CI mutualisée | — |

### Architecture macro-services de référence (Confluence Benchmark Backend)

4 services socles : **Broker MQTT (ingress collier) · Core API · Ingestion/Time-series · Care Engine** → cible **microservices Rust** (sauf Care Engine = Python, et l'ingress = **broker MQTT managé** type EMQX/Mosquitto). Découpage affiné au Step 4.

> **Évolution (2026-06-08)** : l'« IoT Gateway » Rust initialement envisagée est **remplacée par un broker MQTT standard** (composant d'**ingress**, au même niveau que KrakenD). Le collier publie en MQTT/TLS ; **l'Ingestion s'abonne directement au broker** (client MQTT), écrit TimescaleDB, puis **publie les évènements normalisés sur Kafka** (consommés en temps réel par le Care Engine pour la détection proactive). Le broker **ne parle pas à Kafka** ; le bus ne porte que des **évènements de domaine normalisés**, jamais de donnée brute — voir *Data Architecture*.

### Care Engine — déjà spécifié (réf. Confluence « Chatbot IA », 10 ADR)

ADR-001 pipeline LangGraph déterministe 6 nœuds · ADR-002 Azure OpenAI EU + cascade · ADR-003 reranker Cohere · ADR-004 mémoire = backend via tool calls (p95<200ms) · ADR-005 output JSON structuré · ADR-006 RGPD progressif (regex→Presidio) · ADR-007 garde-fous 3 couches · ADR-008 retrieval hybride · ADR-009 Query Understanding · ADR-010 audit append-only 5 ans. **Ces ADR sont la source de vérité du Care Engine et sont intégrés par référence.**

### Première story d'implémentation (foundation)

Scaffolding **Cargo workspace** (crate-template de service Rust : `api`/`domain`/`infra`/`shared`) + **chart Helm** + **Application ArgoCD** + provisioning **cluster K8s kubeadm** (hébergeur éco EU) + pipeline CI (cache `sccache`).

## Core Architectural Decisions

### Decision Priority Analysis

**Critical (bloquent l'implémentation) :** langages par service · 3 DB & cohérence · identité · bus · cloud/K8s · LLM.
**Important (façonnent l'archi) :** comms inter-services · observabilité · temps réel · resync hors-ligne · gateway.
**Différées (post-MVP) :** Qdrant (si scale), **Debezium/CDC** (si écritures hors-app), Presidio (RGPD V1), multimodal vision, self-host LLM.

### Data Architecture

- **PostgreSQL** = source de vérité métier (Core API) · **TimescaleDB** = télémétrie séries temporelles · **pgvector** = RAG (corpus véto) → **Qdrant si scale** (interface RAG abstraite, ADR-008).
- **Ingestion télémétrie collier (MQTT → Ingestion → TimescaleDB, puis → Kafka)** : le collier publie en **MQTT/TLS** (certificat client, PKI step-ca) sur un **broker MQTT** (EMQX/Mosquitto) ; le service **Ingestion s'y abonne directement** (client MQTT, *shared subscriptions* pour scaler), décode, normalise / déduplique / resync, écrit **TimescaleDB**, puis **publie les évènements normalisés sur Kafka** — consommés en temps réel par le **Care Engine** (détection des signaux faibles → alerte push) et les projections/agrégats. *Justif. tech : le broker ne fait que l'ingress MQTT (il n'écrit ni ne ponte vers Kafka) ; Kafka ne porte que des **évènements de domaine** normalisés, jamais de brut. L'event-driven sert la détection proactive temps réel — différenciateur produit. Stockage seul = `Broker → Ingestion → TimescaleDB` ; Kafka = fan-out temps réel.*
- **Propagation des événements → Kafka** : les services **publient directement** leurs événements de domaine normalisés sur Kafka ; les consommateurs projettent vers TimescaleDB / read-models. *Choix MVP : simplicité (pas de worker dédié).* **Pattern Outbox transactionnel + worker (et/ou Debezium CDC) différé** — à introduire si une **garantie zéro-perte** stricte sur le dual-write devient nécessaire (facturation, consentement).
- **Registre de schémas d'événements** : **Protobuf** + compatibilité **backward-only** (protège les consommateurs).
- **Migrations DB** : `sqlx`/`refinery`, stratégie **expand-and-contract** (jamais de breaking sur une source lue).
- **Cache : Redis** (sessions, hot reads, rate-limit).
- **Stockage objet : S3-compatible** (MinIO self-host / Hetzner Object Storage) — **PDF normalisés, exports RGPD, archivage de l'audit** ; accès par URLs signées.
- **Contrat de resync hors-ligne** : numéro de séquence monotone par device + clé d'idempotence + timestamp serveur-autoritaire + fenêtre de déduplication (last-write-wins par métrique).

### Authentication & Security

- **Identité : service d'auth Rust-native — OIDC 100% maison** (émetteur OAuth2/OIDC, JWT, **RBAC owner vs véto**, flux **consentement** Epic 9). *Justif. : défi/vitrine Epitech + « Rust partout » + souveraineté.* **Risque sécurité assumé → mitigations obligatoires** : crates éprouvées (`oauth2`, `openidconnect`, `jsonwebtoken`, `argon2`), revue de sécurité dédiée, tests d'abus, rotation des clés JWKS, refresh-token rotation + PKCE. Coût ~4-6 mois-homme acté.
- **API gateway : KrakenD** (validation JWT en bordure, agrégation) — compétence PO.
- **Auth device (collier → Broker MQTT) : MQTT over TLS + certificat client (mTLS device)** (ADR-aligné FR6).
- **Cycle de vie des certificats collier** : PKI interne (**step-ca**) — provisioning à l'appairage, rotation, **révocation (CRL/OCSP)**, gestion collier perdu/volé.
- **Chiffrement** : TLS en transit + chiffrement au repos ; **RGPD progressif** (regex MVP → Presidio V1, ADR-006) ; **audit append-only 5 ans** (ADR-010).

### API & Communication Patterns

- **MQTT/TLS** (collier → broker, ingress IoT ; l'Ingestion s'abonne au broker) · **REST/JSON** vers les fronts (output structuré ADR-005) · **gRPC** entre services Rust (contrats typés, perf) · **Kafka** pour l'événementiel (évènements de domaine normalisés, dont la télémétrie publiée par l'Ingestion).
- **Intégrations tierces (EU) :** **Stripe** (abonnements + **payouts** du pool vété, webhooks signés reçus par le Core API) · **Email/SMS transactionnel** (Brevo / Postmark / SES : vérification, réinitialisation, alertes) · **Cartographie** (Mapbox / OpenStreetMap, rendu côté app).
- **Erreurs** : RFC 7807 (`application/problem+json`). **Rate limiting** : KrakenD.
- **Temps réel** : push **FCM/APNs** + **WebSocket** (chat) ; SLA ingestion→alerte **p95 < 3 s**, fraîcheur GPS < 60 s.

### Frontend Architecture

- **Vet Portal** : Next.js + Tailwind + **React Query** (server state) + **Zustand** (UI state).
- **Back-office interne** : Next.js (RBAC admin) — support, **gestion du pool vétérinaire**, modération, exploitation.
- **Mobile** : **Kotlin/Android (MVVM/MVI)** + **SwiftUI/iOS (MVVM)**. ⚠️ Risque compétence iOS (matrice) → prévoir montée en compétence/binôme.

### Infrastructure & Deployment

- **K8s auto-géré via kubeadm** (hébergeur éco EU : Hetzner/Scaleway/OVH, à finaliser) + **Helm** + **ArgoCD** (app-of-apps / ApplicationSets ; repo GitOps `apps`/`charts`/`env`). *Justif. : kubeadm = standard upstream, pédagogique (CKA) ; coût maîtrisé + souveraineté EU.* **Condition (mitigation Party Mode)** : tout en **IaC** (Terraform infra + Ansible provisioning kubeadm), **zéro `kubectl apply` manuel**, sauvegarde **etcd** planifiée.
- **CI : GitHub Actions** (org `Pawrise`) + cache **sccache** (Rust) ; **CD : ArgoCD**.
- **Observabilité : OpenTelemetry + Prometheus + Grafana + Loki + Tempo**.
- **Secrets : SOPS + age** (ou Sealed Secrets) — GitOps-friendly.
- **Registre d'images : GHCR ou Harbor self-host** (scan de vulnérabilités) — la CI pousse, le cluster tire au déploiement.
- **Ingress & TLS public : Ingress controller (Traefik / nginx) + cert-manager (Let's Encrypt)** — entrée réseau du cluster, distincte du **mTLS device** géré par step-ca.

### Decision Impact Analysis

**Séquence d'implémentation :**
1. Foundation (workspace Rust + chart Helm + Application ArgoCD + cluster kubeadm + CI).
2. Broker MQTT (EMQX) + Ingestion/Time-series (Rust, client MQTT → TimescaleDB + publie sur Kafka) — chemin chaud + resync.
3. Core API (Rust) + identité (publication d'événements directe ; Outbox/CDC si besoin ultérieur).
4. Care Engine (Python/LangGraph) branché sur Core API (tool calls, ADR-004).
5. Fronts (Mobile, Vet Portal) + téléconsultation/pool.

**Dépendances croisées :** KrakenD dépend du service d'auth ; Care Engine dépend des contrats tools du Core API (p95 < 200 ms, ADR-004) ; ArgoCD dépend du repo GitOps.

**Note kill-risk (Party Mode / John) :** la construction est **fondation-first** (choix PO, cohérent avec l'objectif Epitech « archi ambitieuse »). Pour ne pas affamer le vrai kill-risk (validation terrain vétérinaire), le **track validation vété — non technique, pôle Market/Design — tourne EN PARALLÈLE** dès maintenant, indépendamment de la fondation technique.
