// Contenu Assistant IA · synthèse de la spec Confluence « Chatbot IA » (Care Engine).
// Pipeline LangGraph borné à 6 nœuds, garde-fous 3 couches, flux owner & handoff véto.

export const CHATBOT_INTRO = {
  pitch:
    "Pawrise embarque un assistant conversationnel (« Care Engine ») qui contextualise l'état d'un chien à partir des données du collier, répond aux questions du propriétaire sur la base d'un corpus vétérinaire validé, et organise un handoff structuré vers un vétérinaire partenaire quand c'est pertinent.",
  rule:
    "L'assistant n'établit jamais de diagnostic médical (Code rural, Art. L243-1) : il explique, oriente, et invite à consulter.",
  archi:
    "Architecture : un pipeline LangGraph déterministe borné à 6 nœuds, déployé sur Azure OpenAI Europe. La mémoire long-terme est déléguée au backend Pawrise via tool calls (source de vérité unique).",
};

// Les 6 nœuds du pipeline (cœur du fonctionnement).
export type Node = { n: number; name: string; role: string; model?: string };
export const PIPELINE: Node[] = [
  { n: 1, name: "Circuit Breaker", role: "Classifie l'intention (abus, jailbreak, hors-scope, demande de diagnostic, clean). Si non-clean → branche dédiée, sans RAG ni LLM principal.", model: "LLM mini" },
  { n: 2, name: "Query Understanding", role: "Reformule la question en termes vétérinaires canoniques et déclenche un tool call télémétrie si besoin.", model: "LLM mini" },
  { n: 3, name: "Retrieval", role: "Recherche hybride BM25 (mots-clés) + dense (sémantique), fusion par Reciprocal Rank Fusion. Top-20.", model: "RAG" },
  { n: 4, name: "Relevance Filter", role: "Reranker dédié (Cohere v3) : top-20 → top-5 chunks les plus pertinents (~100 ms).", model: "Reranker" },
  { n: 5, name: "Customization", role: "LLM principal sous contrainte : génère la réponse + citations + signal d'escalade, tools bornés.", model: "LLM principal" },
  { n: 6, name: "Post-LLM Guardrail", role: "Détecte le langage « diagnostic », vérifie l'ancrage (chaque claim médical = une source) et force l'escalade selon les règles métier.", model: "LLM mini" },
];

// Garde-fous en 3 couches (défense en profondeur).
export const GUARDRAILS = [
  { c: "Couche 1 · pré-LLM", t: "Circuit Breaker", d: "Classifier d'intention. Tout ce qui n'est pas « clean » est dérouté vers une Safe Response ou une escalade — sans atteindre le LLM principal." },
  { c: "Couche 2 · raisonnement", t: "Contrainte", d: "System prompt strict + whitelist de tools + obligation de citer le corpus pour tout claim médical." },
  { c: "Couche 3 · post-LLM", t: "Guardrail", d: "Détection « diagnostic-like », contrôle d'ancrage sur les sources, et déclenchement forcé de l'escalade selon des règles explicites." },
];

// Périmètre : ce que l'assistant fait / ne fait jamais.
export const SCOPE_DO = [
  "Q&A santé / comportement à partir du corpus véto + télémétrie de l'animal",
  "Contextualisation d'une alerte collier (fréquence cardiaque, activité, geofence)",
  "Handoff vétérinaire structuré (dossier pré-consultation → Vet Portal)",
  "Refus systématique du diagnostic + invitation à consulter en cas de doute",
  "Audit complet de chaque conversation (rétention 5 ans)",
];
export const SCOPE_DONT = [
  "Diagnostic médical explicite (réservé aux vétérinaires — Code rural L243-1)",
  "Prescription, posologie, recommandation médicamenteuse",
  "Gestion d'urgences vitales (toujours rediriger vers un urgentiste 24h/24)",
  "Conseils de dressage / comportement (hors thèse produit)",
  "Conseils nutritionnels précis (demande un nutritionniste vétérinaire)",
];

// Deux parcours clés.
export type Flow = { id: string; title: string; steps: string[] };
export const FLOWS: Flow[] = [
  {
    id: "O3",
    title: "Alerte → Chat",
    steps: [
      "Le collier détecte une anomalie",
      "Push notification au propriétaire",
      "Ouverture du chat avec contexte pré-injecté (profil + télémétrie 24h + détail alerte)",
      "Le propriétaire pose sa question",
      "Pipeline LangGraph (6 nœuds)",
      "Réponse + bouton « Contacter un vétérinaire » si escalade",
      "Tout est journalisé (audit)",
    ],
  },
  {
    id: "O5",
    title: "Handoff vétérinaire",
    steps: [
      "Le propriétaire clique « Contacter un vétérinaire »",
      "Le Care Engine collecte le dossier (profil + 30j télémétrie + alertes + extraits chat)",
      "Le LLM produit une synthèse structurée (chronologie, symptômes, urgence)",
      "Génération PDF + JSON",
      "Push au Vet Portal",
      "Le propriétaire choisit le vétérinaire partenaire",
      "Le vétérinaire reçoit et ouvre le dossier structuré",
    ],
  },
];

// Décisions d'architecture clés (ADR condensés).
export const ADRS = [
  { id: "ADR-001", t: "Pipeline LangGraph borné (pas d'agent autonome)", d: "6 nœuds déterministes, chaque étape testable. La responsabilité juridique est portée par le pipeline ; un agent libre serait indéfendable face au Code rural." },
  { id: "ADR-002", t: "Azure OpenAI Europe + cascade", d: "Data residency EU stricte, pas d'entraînement sur les données. Cascade mini/principal pour contenir le coût. Interface LLMProvider abstraite (bascule possible)." },
  { id: "ADR-007", t: "Garde-fous 3 couches", d: "Défense en profondeur : l'échec d'une couche n'expose pas le système. Non négociable vu le Code rural." },
  { id: "ADR-008", t: "Retrieval hybride (BM25 + dense)", d: "BM25 capte les termes techniques exacts (Lyme, dysplasie), dense capte la similarité conversationnelle. Fusion RRF." },
  { id: "ADR-010", t: "Audit trail append-only", d: "Log immuable de chaque conversation (input, prompts, retrieval, output, décisions guardrail). Rétention 5 ans, base de la défense juridique et de l'eval." },
];

// KPIs cibles (MVP).
export const KPIS = [
  { k: "0", v: "faux diagnostic sur le golden set (conformité)" },
  { k: "≥ 95 %", v: "citation présente quand claim médical" },
  { k: "5–15 %", v: "taux d'escalade approprié" },
  { k: "p95 < 8 s", v: "réponse complète" },
  { k: "≥ 0,85", v: "recall@5 du retrieval" },
  { k: "≥ 95 %", v: "détection jailbreak" },
];
