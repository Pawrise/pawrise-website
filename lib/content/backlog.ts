// Contenu Backlog · 11 epics issus du découpage produit (66 User Stories).
// Les exigences couvertes (FR/NFR) viennent de la FR Coverage Map (project-docs).

export type Epic = { n: number; title: string; us: number; mvp: boolean; desc: string; fr: string; accent: string };

export const EPICS: Epic[] = [
  { n: 1, title: "Onboarding, comptes & appairage du collier", us: 7, mvp: true, desc: "Création de compte, appairage BLE, profil animal.", fr: "FR12, FR29, FR30, FR33", accent: "var(--cli)" },
  { n: 2, title: "Collecte, transmission & stockage fiables", us: 6, mvp: true, desc: "Ingestion capteurs, retry/fallback, séries temporelles.", fr: "FR1–FR10, NFR2, NFR8", accent: "var(--edge)" },
  { n: 3, title: "Suivi bien-être & activité (App)", us: 4, mvp: true, desc: "Score bien-être, activité, sommeil, constantes.", fr: "FR11, FR13, FR19, NFR9", accent: "var(--cli)" },
  { n: 4, title: "Localisation & zones de sécurité (App)", us: 5, mvp: true, desc: "Carte GPS temps réel, geofencing, alertes zone.", fr: "FR20, FR21", accent: "var(--cli)" },
  { n: 5, title: "Détection d'anomalies & alertes santé", us: 5, mvp: true, desc: "Profil normal par animal, seuils adaptatifs, alertes.", fr: "FR14, FR15, FR22", accent: "var(--ai)" },
  { n: 6, title: "Assistant IA conversationnel & escalade", us: 4, mvp: true, desc: "Chat RAG, garde-fous, offramp vétérinaire.", fr: "FR16, FR17, FR23", accent: "var(--ai)" },
  { n: 7, title: "Vet Portal · dossier & rapport normalisé", us: 7, mvp: true, desc: "Timeline médicale, résumé contextualisé, export PDF.", fr: "FR18, FR24–FR28, FR34", accent: "var(--svc)" },
  { n: 8, title: "Abonnement, facturation & support", us: 7, mvp: false, desc: "Stripe, plans, statuts, ticketing.", fr: "FR31, FR32", accent: "var(--ext)" },
  { n: 9, title: "Conformité, sécurité & confidentialité (RGPD)", us: 5, mvp: true, desc: "Consentement, anonymisation, traçabilité.", fr: "NFR3, NFR4, NFR5", accent: "var(--rose)" },
  { n: 10, title: "Téléconsultation d'orientation & triage", us: 7, mvp: false, desc: "File de garde, handoff vétérinaire, triage.", fr: "FR35–FR43", accent: "var(--svc)" },
  { n: 11, title: "Plateforme, livraison & observabilité (Ops)", us: 9, mvp: true, desc: "CI/CD, déploiement, monitoring, OpenTelemetry.", fr: "NFR1, NFR6, NFR7, NFR10", accent: "var(--data)" },
];

export const BACKLOG_STATS = {
  epics: EPICS.length,
  us: EPICS.reduce((s, e) => s + e.us, 0),
  mvp: EPICS.filter((e) => e.mvp).reduce((s, e) => s + e.us, 0),
};

/* ----------------------------------------------- EXIGENCES (FR / NFR) ---- */
// Inventaire résumé. Détail complet dans le PRD (§4/§5) et project-docs.
export const FR_GROUPS = [
  { g: "Collier & collecte", refs: "FR1–FR7", d: "GPS, activité, température/rythme, collecte temps réel, buffer hors-ligne, transmission sécurisée, batterie." },
  { g: "Backend & données", refs: "FR8–FR12", d: "Ingestion/normalisation, séries temporelles, agrégats, APIs app/vet, comptes & règles." },
  { g: "Moteur IA", refs: "FR13–FR18", d: "Prétraitement, modèle comportemental & anomalies, règles vété contextualisées, chat RAG, escalade non-diagnostique, rapport PDF." },
  { g: "App propriétaire", refs: "FR19–FR23", d: "Écran bien-être, localisation/historique, zones de sécurité, notifications, chat & mise en relation." },
  { g: "Vet Portal", refs: "FR24–FR28", d: "Vue patient, historique chronologique, résumé contextualisé + brut, alertes/rapport/notes, export & suivi." },
  { g: "Cycle de vie & business", refs: "FR29–FR34", d: "Onboarding compte/animal, appairage, abonnement/facturation, support, remplacement collier, onboarding vétos." },
  { g: "Téléconsultation & triage", refs: "FR35–FR43", d: "PDF normalisé, handoff IA→véto, orientation non-diagnostique, examen/booking, pool plafonné, garde-fous, routage véto traitant." },
];

export const NFR_LIST = [
  "NFR1 Fiabilité", "NFR2 Autonomie/énergie", "NFR3 Sécurité", "NFR4 Confidentialité/RGPD",
  "NFR5 Éthique IA", "NFR6 Performance", "NFR7 Scalabilité/Ops", "NFR8 Robustesse physique",
  "NFR9 Utilisabilité", "NFR10 Maintenabilité",
];

// Exemple concret du format des 66 critères d'acceptation (Given/When/Then).
export const AC_EXAMPLE = {
  story: "Story 1.1 · Création de compte sécurisée",
  asA: "En tant que propriétaire d'animal,",
  iWant: "je veux créer un compte avec email et mot de passe,",
  soThat: "afin d'accéder à l'application en toute sécurité.",
  ac: [
    { k: "Given", v: "un visiteur sur l'écran d'inscription" },
    { k: "When", v: "il saisit un email valide et un mot de passe respectant la politique de sécurité" },
    { k: "Then", v: "un compte est créé et un email de vérification est envoyé" },
    { k: "And", v: "un mot de passe faible ou un email déjà utilisé déclenche une erreur explicite sans créer de compte" },
  ],
};
