// Choix techniques justifiés · les décisions structurantes de l'architecture.
// Chaque décision : besoin → alternatives écartées → décision → trade-off assumé.
// Source : benchmarks Confluence + cockpit + ADR (page Assistant IA) + page Cloud.

export const ARCHI_DECISIONS_INTRO =
  "L'architecture repose sur quelques décisions structurantes, chacune benchmarkée. On présente ici le besoin, les alternatives écartées, la décision et son trade-off : aucun choix n'est gratuit, chacun est assumé.";

export type Decision = {
  titre: string;
  besoin: string;
  alternatives: string;
  decision: string;
  tradeoff: string;
};

export const ARCHI_DECISIONS: Decision[] = [
  {
    titre: "Rust pour les services métier",
    besoin: "Des services backend fiables et performants (ingestion temps réel, API, auth) sur une infra peu coûteuse.",
    alternatives: "Node.js/NestJS, Python/FastAPI, Go/Gin, C#/ASP.NET, Rust/Axum (benchmark backend complet).",
    decision: "Rust (Axum) pour les services métier ; Python réservé au Care Engine (IA).",
    tradeoff: "Assumé : le benchmark montre un coût de développement environ 2,5× supérieur et seulement deux développeurs Rust dans l'équipe. On le choisit pour la performance, la sûreté mémoire (une classe entière de bugs disparaît), une empreinte serveur minimale et la montée en compétence. Garde-fous : périmètre Rust ciblé sur les services critiques, Python assumé pour l'IA, workspace Cargo partagé, et réintroduction ciblée d'un autre langage si un service devient un point chaud.",
  },
  {
    titre: "Découpage en services",
    besoin: "Faire évoluer et monter en charge chaque partie du système séparément, sans créer une constellation ingérable.",
    alternatives: "Monolithe unique, microservices fins.",
    decision: "Un ensemble restreint de services dont les frontières suivent quatre critères : domaine métier (bounded context), runtime (Rust / Python), profil de charge et frontière de sécurité. Concrètement : OIDC isolé (sécurité), Core API (cœur transactionnel), Ingestion (flux MQTT haute fréquence), Téléconsult/Pool (avec état, WebSocket), Care Engine (runtime Python, cloisonné).",
    tradeoff: "Montée en charge et durcissement ciblés par service ; surcoût d'exploitation absorbé par Kubernetes, le GitOps et l'observabilité. On ne fragmente pas au-delà : un nouveau service ne naît que lorsqu'un des quatre critères le justifie, jamais par principe.",
  },
  {
    titre: "MQTT (EMQX) pour l'entrée IoT",
    besoin: "Recevoir la télémétrie de colliers sur batterie et réseau cellulaire instable.",
    alternatives: "HTTP/REST, CoAP, passerelle maison.",
    decision: "Broker MQTT (EMQX) en point d'entrée, TLS et certificat par collier (step-ca).",
    tradeoff: "MQTT est le standard IoT : pub/sub léger, QoS, sessions persistantes, reconnexion et mode hors-ligne gratuits. Coût : un composant de plus à opérer dans le cluster.",
  },
  {
    titre: "Apache Kafka comme bus d'événements",
    besoin: "Découpler les services et ne perdre aucun événement (ingestion, projections, file de téléconsultation, audit).",
    alternatives: "RabbitMQ, appels synchrones directs entre services.",
    decision: "Apache Kafka comme épine dorsale événementielle.",
    tradeoff: "Kafka offre haut débit, rétention des messages et un large écosystème de connecteurs. Coût : plus gourmand en RAM que RabbitMQ, ce qui dimensionne le cluster. Choix assumé pour la robustesse et l'évolutivité.",
  },
  {
    titre: "PostgreSQL + TimescaleDB + pgvector",
    besoin: "Stocker le métier transactionnel, les séries temporelles de télémétrie et les embeddings du corpus vétérinaire.",
    alternatives: "MongoDB + InfluxDB + Qdrant, soit trois moteurs séparés.",
    decision: "Une seule famille PostgreSQL : TimescaleDB (séries temporelles) et pgvector (vectoriel) en extensions.",
    tradeoff: "Un seul moteur à opérer et sauvegarder, SQL vérifié à la compilation, open-source sans licence. Bascule possible vers Qdrant si la charge vectorielle l'exige (interface RAG abstraite).",
  },
  {
    titre: "Pipeline LangGraph déterministe (pas d'agent autonome)",
    besoin: "Un assistant IA dont chaque étape est testable et juridiquement défendable (non-diagnostic).",
    alternatives: "Agent LLM autonome en boucle libre.",
    decision: "Pipeline LangGraph borné à 6 nœuds ; le LLM est cantonné dans une cage (ADR-001).",
    tradeoff: "Moins de flexibilité qu'un agent libre, mais la responsabilité juridique est portée par le pipeline. Un agent libre serait indéfendable face au Code rural. Détail sur la page Assistant IA.",
  },
  {
    titre: "Azure OpenAI EU + cascade + Cohere",
    besoin: "Un LLM de qualité en français, conforme RGPD, à coût maîtrisé.",
    alternatives: "LLM hébergé hors UE, modèle unique pour tout le pipeline.",
    decision: "Azure OpenAI déployé en UE, cascade (un modèle par nœud) et reranker Cohere (ADR-002 / ADR-003).",
    tradeoff: "Data residency UE et coût d'environ 0,03 à 0,05 € par conversation. Dépendance à Microsoft, mitigée par une interface LLMProvider (bascule Mistral ou self-host). Budget détaillé sur la page Assistant IA.",
  },
  {
    titre: "Kubernetes auto-géré + GitOps",
    besoin: "Faire tourner les services et toutes leurs dépendances (bases, Kafka, broker MQTT, observabilité), scaler et déployer de façon reproductible, à coût maîtrisé et souverain.",
    alternatives: "PaaS, Kubernetes managé d'emblée, simple docker-compose.",
    decision: "Cluster Kubernetes auto-géré (Terraform) sur Hetzner, déploiement GitOps via Argo CD.",
    tradeoff: "Le plus économique et souverain, mais le plus exigeant en opérations (sauvegarde etcd, mises à jour). Mitigé par l'Infrastructure as Code et un passage au managé EU au scale. Détail sur la page Cloud.",
  },
  {
    titre: "OIDC maison",
    besoin: "Identité, connexion et droits owner / vétérinaire, avec consentement RGPD.",
    alternatives: "Auth0, Keycloak, Cognito.",
    decision: "Serveur OIDC maison (Rust).",
    tradeoff: "Choix de souveraineté et défi technique formateur, mais coûteux (environ 4 à 6 mois-homme) et sensible côté sécurité. Garde-fous : revue de sécurité et tests d'abus obligatoires avant la mise en production.",
  },
];
