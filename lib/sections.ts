export type Block = { title: string; desc: string };
export type Section = {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  accent: string;
  blocks: Block[];
};

export const SECTIONS: Section[] = [
  {
    slug: "vision",
    title: "Vision",
    tag: "Le pourquoi",
    desc: "Le problème détecté trop tard, la solution Pawrise et le positionnement non-négociable : orienter, jamais diagnostiquer.",
    accent: "#2dd4bf",
    blocks: [
      { title: "Le problème", desc: "Les signaux de santé d'un animal passent inaperçus jusqu'à ce que ce soit grave." },
      { title: "La solution Pawrise", desc: "Collier capteurs + IA d'orientation non-diagnostique + réseau vétérinaire." },
      { title: "Proposition de valeur", desc: "Agir au bon moment : orienter vers le bon soin avant que ça n'empire." },
      { title: "Personas", desc: "Propriétaire d'animal · vétérinaire partenaire." },
    ],
  },
  {
    slug: "architecture",
    title: "Architecture & Tech",
    tag: "Comment c'est construit",
    desc: "Le cockpit d'architecture interactif (flux, parcours et vue Plateforme & Ops) et les choix techniques justifiés.",
    accent: "#38bdf8",
    blocks: [
      { title: "Cockpit interactif", desc: "Diagramme jouable : flux, parcours, vue Plateforme & Ops." },
      { title: "Choix technologiques", desc: "Rust, MQTT, Kafka, LangGraph, K8s/GitOps, tous justifiés." },
      { title: "Stratégie de test", desc: "Comment les choix techniques valident les attentes fonctionnelles." },
      { title: "Modèle de données", desc: "PostgreSQL · TimescaleDB · pgvector." },
    ],
  },
  {
    slug: "assistant-ia",
    title: "Assistant IA",
    tag: "Le différenciateur",
    desc: "Le Care Engine : assistant conversationnel non-diagnostique, pipeline LangGraph 6 nœuds, garde-fous 3 couches et handoff vétérinaire structuré.",
    accent: "#a78bfa",
    blocks: [
      { title: "Pipeline 6 nœuds", desc: "LangGraph déterministe et borné, chaque étape testable." },
      { title: "Garde-fous 3 couches", desc: "Pré-LLM, contrainte de raisonnement, post-LLM. Jamais de diagnostic." },
      { title: "RAG hybride", desc: "BM25 + dense + reranker sur corpus vétérinaire validé." },
      { title: "Handoff vétérinaire", desc: "Dossier pré-consultation structuré (PDF + JSON) vers le Vet Portal." },
    ],
  },
  {
    slug: "backlog",
    title: "Backlog & Features",
    tag: "Le quoi",
    desc: "Le découpage produit : 11 epics et 66 user stories, dont 52 dans le périmètre MVP.",
    accent: "#a78bfa",
    blocks: [
      { title: "11 epics", desc: "Du collier à la téléconsultation + plateforme/ops." },
      { title: "66 user stories", desc: "Critères d'acceptation Given/When/Then." },
      { title: "FR1–43 / NFR1–10", desc: "Exigences fonctionnelles & non-fonctionnelles." },
      { title: "Features & Requirements (WBS)", desc: "Description des fonctions attendues + leurs exigences." },
    ],
  },
  {
    slug: "pilotage",
    title: "Pilotage",
    tag: "Gestion de projet",
    desc: "WBS, OBS, RACI, Gantt, méthodologie et plan qualité : l'organisation du travail sur 20 mois.",
    accent: "#fb923c",
    blocks: [
      { title: "WBS", desc: "Décomposition hiérarchique orientée livrables (diagramme)." },
      { title: "OBS", desc: "Organigramme : responsabilités par tâche (diagramme)." },
      { title: "RACI", desc: "Responsable · Approbateur · Consulté · Informé." },
      { title: "Méthodologie", desc: "Scrum adapté : pourquoi, cadence, rituels." },
      { title: "Plan qualité", desc: "Conventions, tests, CI/CD, déploiement, onboarding." },
      { title: "Planning & Roadmap", desc: "Phases + Gantt/Jira, estimation en story points." },
    ],
  },
  {
    slug: "business",
    title: "Business & Stratégie",
    tag: "Le marché",
    desc: "Positionnement océan bleu, SWOT, PESTEL, modèle économique et budget prévisionnel du collier.",
    accent: "#fbbf24",
    blocks: [
      { title: "SWOT", desc: "Forces · Faiblesses · Opportunités · Menaces." },
      { title: "PESTEL", desc: "Politique · Éco · Social · Tech · Environnement · Légal." },
      { title: "Marché & concurrents", desc: "Étude de marché et benchmark concurrentiel." },
      { title: "Modèle économique", desc: "Abonnement + pool de rémunération vétérinaire." },
      { title: "Budget prévisionnel", desc: "Matériel/cloud + estimation des coûts." },
      { title: "Unit economics", desc: "Coûts bornés, marge, rentabilité." },
    ],
  },
  {
    slug: "risques",
    title: "Risques",
    tag: "Maîtrise",
    desc: "AMDEC sur le produit (IPR = G×O×D) et Risk Map projet (probabilité × impact).",
    accent: "#fb7185",
    blocks: [
      { title: "Risk Map", desc: "Matrice probabilité × impact." },
      { title: "AMDEC", desc: "Modes de défaillance, effets, criticité (S×O×D)." },
      { title: "Kill-risks & mitigations", desc: "Les 3 risques majeurs et comment on les adresse." },
    ],
  },
  {
    slug: "equipe",
    title: "Équipe",
    tag: "Les 10",
    desc: "Organisation en 5 pôles, matrice de compétences et justification de l'équipe.",
    accent: "#22d3ee",
    blocks: [
      { title: "Organisation (OBS)", desc: "Qui fait quoi, ressources allouées par tâche." },
      { title: "Matrice de compétences", desc: "Compétences nécessaires pour piloter, développer, livrer." },
      { title: "Justification du recrutement", desc: "Choix de l'équipe argumenté professionnellement." },
      { title: "Rôles & responsabilités", desc: "Articulation avec le RACI." },
    ],
  },
];

export const getSection = (slug: string) => SECTIONS.find((s) => s.slug === slug);
