// Contenu Backlog · 11 epics issus du découpage produit (66 User Stories).

export type Epic = { n: number; title: string; us: number; mvp: boolean; desc: string; accent: string };

export const EPICS: Epic[] = [
  { n: 1, title: "Onboarding, comptes & appairage du collier", us: 7, mvp: true, desc: "Création de compte, appairage BLE, profil animal.", accent: "var(--cli)" },
  { n: 2, title: "Collecte, transmission & stockage fiables", us: 6, mvp: true, desc: "Ingestion capteurs, retry/fallback, séries temporelles.", accent: "var(--edge)" },
  { n: 3, title: "Suivi bien-être & activité (App)", us: 4, mvp: true, desc: "Score bien-être, activité, sommeil, constantes.", accent: "var(--cli)" },
  { n: 4, title: "Localisation & zones de sécurité (App)", us: 5, mvp: true, desc: "Carte GPS temps réel, geofencing, alertes zone.", accent: "var(--cli)" },
  { n: 5, title: "Détection d'anomalies & alertes santé", us: 5, mvp: true, desc: "Profil normal par animal, seuils adaptatifs, alertes.", accent: "var(--ai)" },
  { n: 6, title: "Assistant IA conversationnel & escalade", us: 4, mvp: true, desc: "Chat RAG, garde-fous, offramp vétérinaire.", accent: "var(--ai)" },
  { n: 7, title: "Vet Portal · dossier & rapport normalisé", us: 7, mvp: true, desc: "Timeline médicale, résumé contextualisé, export PDF.", accent: "var(--svc)" },
  { n: 8, title: "Abonnement, facturation & support", us: 7, mvp: false, desc: "Stripe, plans, statuts, ticketing.", accent: "var(--ext)" },
  { n: 9, title: "Conformité, sécurité & confidentialité (RGPD)", us: 5, mvp: true, desc: "Consentement, anonymisation, traçabilité.", accent: "var(--rose)" },
  { n: 10, title: "Téléconsultation d'orientation & triage", us: 7, mvp: false, desc: "File de garde, handoff vétérinaire, triage.", accent: "var(--svc)" },
  { n: 11, title: "Plateforme, livraison & observabilité (Ops)", us: 9, mvp: true, desc: "CI/CD, déploiement, monitoring, OpenTelemetry.", accent: "var(--data)" },
];

export const BACKLOG_STATS = {
  epics: EPICS.length,
  us: EPICS.reduce((s, e) => s + e.us, 0),
  mvp: EPICS.filter((e) => e.mvp).reduce((s, e) => s + e.us, 0),
};
