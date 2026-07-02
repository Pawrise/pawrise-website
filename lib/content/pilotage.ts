// Contenu Pilotage · synthèse des documents de cadrage (WBS, OBS, RACI,
// méthodologie, plan qualité, planning) consolidés pour la soutenance.

/* ---------------------------------------------------------------- WBS ---- */
export type WbsNode = { id: string; label: string; children?: WbsNode[] };

export const WBS: WbsNode[] = [
  {
    id: "1",
    label: "Pawrise Collar · Hardware",
    children: [
      { id: "1.1", label: "Capteurs & mesures (GPS, accéléro, température, cardio)" },
      { id: "1.2", label: "Système embarqué (MCU, firmware, drivers, énergie)" },
      { id: "1.3", label: "Communication (BLE, LTE/NB-IoT/LoRa, data packet, chiffrement)" },
      { id: "1.4", label: "Boîtier & conception physique (IP67, chocs, attache)" },
      { id: "1.5", label: "Batterie & autonomie (recharge, deep sleep, monitoring)" },
    ],
  },
  {
    id: "2",
    label: "Collector & Firmware Communication",
    children: [
      { id: "2.1", label: "Acquisition (lecture périodique, buffer edge, détection d'événements)" },
      { id: "2.2", label: "Transmission & protocoles (sync BLE, cellulaire, JSON/binaire, retry)" },
      { id: "2.3", label: "Sécurité (auth collier, intégrité, horodatage fiable)" },
    ],
  },
  {
    id: "3",
    label: "Backend & API Platform",
    children: [
      { id: "3.1", label: "Ingestion (API capteurs, normalisation, doublons, webhooks)" },
      { id: "3.2", label: "Stockage & modélisation (time-series, historique, agrégats)" },
      { id: "3.3", label: "API App & Vet (dashboard, historique structuré, notifications)" },
      { id: "3.4", label: "Administration (comptes, animaux, règles d'analyse)" },
    ],
  },
  {
    id: "4",
    label: "Pawrise Care Engine · IA & Analyse",
    children: [
      { id: "4.1", label: "Prétraitement (nettoyage, agrégation, anomalies simples)" },
      { id: "4.2", label: "Analyse comportementale (activité, sommeil, variations)" },
      { id: "4.3", label: "Analyse santé contextuelle (règles vété, seuils adaptatifs)" },
      { id: "4.4", label: "Chat IA & expertise (LLM + RAG, pédagogie, escalade)" },
      { id: "4.5", label: "Export vétérinaire (PDF structuré, JSON, vue chronologique)" },
    ],
  },
  {
    id: "5",
    label: "Mobile App · Propriétaire",
    children: [
      { id: "5.1", label: "Écran bien-être (score, activité, sommeil, constantes)" },
      { id: "5.2", label: "Localisation (carte GPS, geofencing, alertes zone)" },
      { id: "5.3", label: "Notifications & alertes (prévention, santé, rappels)" },
      { id: "5.4", label: "Chat & accompagnement (IA, historique, offramp véto)" },
    ],
  },
  {
    id: "6",
    label: "Vet Portal · Interface Vétérinaire",
    children: [
      { id: "6.1", label: "Vue patient (profil, historique brut, courbes)" },
      { id: "6.2", label: "Analyse pro (alertes, rapport auto, notes véto)" },
      { id: "6.3", label: "Collaboration (échanges, recommandations, suivi)" },
    ],
  },
  {
    id: "7",
    label: "Infrastructure & Ops",
    children: [
      { id: "7.1", label: "Hébergement (cloud, Docker, scalabilité API)" },
      { id: "7.2", label: "Monitoring (logs, perfs API, alertes internes)" },
      { id: "7.3", label: "CI/CD (tests auto, build mobile, déploiements)" },
    ],
  },
  {
    id: "8",
    label: "Data, Privacy & Compliance",
    children: [
      { id: "8.1", label: "Protection des données (anonymisation, consentement, transport)" },
      { id: "8.2", label: "Transparence & éthique (pas de diagnostic auto, explicabilité, traçabilité)" },
    ],
  },
  {
    id: "9",
    label: "Business & User Lifecycle",
    children: [
      { id: "9.1", label: "Onboarding & appairage (compte, BLE, profil animal)" },
      { id: "9.2", label: "Abonnement & facturation (Stripe, plans, statuts)" },
      { id: "9.3", label: "Support client (ticketing, base de connaissances)" },
      { id: "9.4", label: "Provisioning matériel (activation, cycle de vie)" },
      { id: "9.5", label: "Partenaires vétérinaires (réseau, attribution, métriques)" },
    ],
  },
];

/* ---------------------------------------------------------------- OBS ---- */
export type Pole = { name: string; accent: string; members: string[]; scope: string };

export const PO = { name: "Yassine El Gherrabi", role: "Product Owner" };

export const OBS: Pole[] = [
  { name: "Fullstack", accent: "var(--svc)", members: ["Hamid", "Aaditya"], scope: "Backend & portail : API, ingestion, base de données, authentification, Vet Portal" },
  { name: "IoT", accent: "var(--edge)", members: ["Cyril", "Ibrahim"], scope: "Collier : firmware, capteurs, simulateur, prototype matériel" },
  { name: "Design / Mobile", accent: "var(--cli)", members: ["Adam", "Elarif"], scope: "App : UX/UI, app mobile, identité visuelle, étude de marché" },
  { name: "IA / Data", accent: "var(--ai)", members: ["Nino", "Yassine"], scope: "Care Engine : RAG, POCs, pipeline de données" },
  { name: "Cloud / Ops", accent: "var(--data)", members: ["Oumar", "Abderrahmane"], scope: "Infra : cloud, CI/CD, monitoring, sécurité" },
];

// Chaque pôle compte deux personnes, le Product Owner assurant la coordination
// transverse. Yassine cumule PO et contributeur IA/Data ; Elarif est rattaché
// au pôle Design/Mobile (binôme avec Adam sur l'app) mais intervient en
// transverse sur le Backend, la CI/CD, le marché et le lien vétérinaire.
export const PO_NOTE =
  "Chaque pôle compte deux personnes, le Product Owner assurant la coordination transverse. Yassine cumule le rôle de Product Owner et de contributeur IA/Data. Elarif est rattaché au pôle Design/Mobile, en binôme avec Adam sur l'application, mais intervient en transverse sur le Backend, l'IoT, la CI/CD, le marché et le lien vétérinaire. Le détail des responsabilités nominatives par domaine, avec backups, est précisé dans la table de couverture ci-dessous.";

// Table de couverture nominative : qui est responsable de quoi, et le backup
// qui assure la continuité. Source : Justification & Compétences (Confluence),
// backups déduits des profils réels de l'équipe (pas de domaine sans relève).
export type Coverage = { domain: string; leads: string; backup: string };
export const COVERAGE: Coverage[] = [
  { domain: "Product Ownership", leads: "Yassine", backup: "Elarif (transverse, vision produit)" },
  { domain: "IoT / Hardware", leads: "Cyril, Ibrahim", backup: "Hamid, Elarif (support embarqué)" },
  { domain: "Backend / API", leads: "Hamid, Aaditya, Elarif", backup: "Yassine" },
  { domain: "IA / Data", leads: "Nino, Yassine", backup: "Hamid (pipelines Python)" },
  { domain: "Mobile / Frontend", leads: "Adam, Elarif", backup: "Oumar (Android), Hamid, Aaditya" },
  { domain: "Design / UX", leads: "Adam", backup: "Elarif (intégration front)" },
  { domain: "Market / Business", leads: "Adam, Elarif", backup: "Yassine (PO)" },
  { domain: "Cloud / DevOps", leads: "Oumar, Abderrahmane", backup: "Elarif (CI/CD)" },
  { domain: "Réseau vétérinaire", leads: "Elarif, Nino", backup: "Binôme (2 contacts vété distincts)" },
];

/* --------------------------------------------------------------- RACI ---- */
// R responsable · A approbateur (garant) · C consulté · I informé
// "AR" = à la fois responsable et garant (cas du PO sur un livrable qu'il pilote).
export type Raci = "R" | "A" | "AR" | "C" | "I" | "";
export const RACI_POLES = ["Pilotage (PO)", "Fullstack", "IoT", "Design/Mobile", "IA/Data", "Cloud/Ops"];
// A distribué : chaque pôle est garant (A) de son livrable, le PO reste garant
// du cadrage et de la gouvernance (RGPD, qualité). Règle respectée : exactement
// un A par ligne, au moins un R, chaque pôle au moins R une fois.
export const RACI_ROWS: { activite: string; cells: Raci[] }[] = [
  { activite: "Cadrage & spécifications", cells: ["AR", "C", "C", "C", "C", "C"] },
  { activite: "API & ingestion données", cells: ["C", "AR", "C", "I", "C", "C"] },
  { activite: "Collier & firmware", cells: ["C", "C", "AR", "I", "C", "I"] },
  { activite: "Application mobile", cells: ["C", "R", "I", "AR", "C", "I"] },
  { activite: "Moteur IA / Care Engine", cells: ["C", "C", "I", "C", "AR", "I"] },
  { activite: "Portail vétérinaire", cells: ["C", "AR", "I", "C", "C", "I"] },
  { activite: "Infra / CI-CD / monitoring", cells: ["I", "C", "I", "I", "I", "AR"] },
  { activite: "RGPD & sécurité données", cells: ["A", "R", "C", "I", "C", "C"] },
  { activite: "Tests & qualité", cells: ["A", "R", "R", "R", "R", "R"] },
];

// Variante stricte demandée en suivi : exactement un R, un A et un C par activité,
// tout le reste en I. Plus stricte que le standard, mais reste valide (un A unique
// par ligne, au moins un R). Le PO reste l'approbateur unique.
export const RACI_ROWS_STRICT: { activite: string; cells: Raci[] }[] = [
  { activite: "Cadrage & spécifications", cells: ["A", "R", "I", "I", "C", "I"] },
  { activite: "API & ingestion données", cells: ["A", "R", "I", "I", "I", "C"] },
  { activite: "Collier & firmware", cells: ["A", "C", "R", "I", "I", "I"] },
  { activite: "Application mobile", cells: ["A", "C", "I", "R", "I", "I"] },
  { activite: "Moteur IA / Care Engine", cells: ["A", "C", "I", "I", "R", "I"] },
  { activite: "Portail vétérinaire", cells: ["A", "R", "I", "I", "C", "I"] },
  { activite: "Infra / CI-CD / monitoring", cells: ["A", "C", "I", "I", "I", "R"] },
  { activite: "RGPD & sécurité données", cells: ["A", "R", "I", "I", "I", "C"] },
  { activite: "Tests & qualité", cells: ["A", "R", "I", "I", "C", "I"] },
];

/* ----------------------------------------------------------- PLANNING ---- */
// Frise Déc 2025 → Juil 2027 (20 mois, index 0..19). Déc 25 = 0, Déc 26 = 12, Juil 27 = 19.
export const MONTHS = [
  "Déc 25", "Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep",
  "Oct", "Nov", "Déc 26", "Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil 27",
];
// Bandeau d'années (lève l'ambiguïté Jan 26 / Jan 27) : start/end sont des index de mois.
export const YEARS = [
  { label: "2025", start: 0, end: 0 },
  { label: "2026", start: 1, end: 12 },
  { label: "2027", start: 13, end: 19 },
];
// Libellé de date depuis un index de mois (ex. 0 → "Déc 2025", 7 → "Juil 2026").
const MONTH_FULL = ["Déc", "Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc", "Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil"];
export function monthDate(i: number) {
  const y = i === 0 ? 2025 : i <= 12 ? 2026 : 2027;
  return `${MONTH_FULL[i]} ${y}`;
}
export function rangeLabel(start: number, end: number) {
  return `${monthDate(start)} → ${monthDate(end)}`;
}
// Index du mois courant sur la frise (clampé 0..19). Calculé côté client.
export function nowIndex(d: Date) {
  const idx = (d.getFullYear() - 2025) * 12 + d.getMonth() - 11; // déc 2025 = 0
  return Math.max(0, Math.min(MONTHS.length - 1, idx));
}

// Une barre peut être découpée en segments : "derisk" (simulateur / POC, on dé-risque
// d'abord, à faible coût) puis "build" (engagement du coûteux). `critical` marque les
// tâches du chemin critique (Infra → Backend → IA → Portail → Intégration). Le détail
// relie chaque tâche à son contenu, son livrable et sa dépendance (panneau au clic).
export type Seg = { label: string; start: number; end: number; kind: "derisk" | "build" };
export type Bar = {
  id: string; phase: string; label: string; team: string;
  start: number; end: number; accent: string;
  segs?: Seg[]; critical?: boolean; deps?: string[];
  detail: { contenu: string[]; livrable: string; depend: string };
};
// Les phases du planning (pour les séparateurs et la vue groupée).
export const GANTT_PHASES = [
  { key: "Conception", periode: "Déc 2025 → Juin 2026" },
  { key: "Développement", periode: "Juil 2026 → Mai 2027" },
  { key: "Intégration", periode: "Mai → Juil 2027" },
];
export const GANTT: Bar[] = [
  // ---- Phase 1 · Conception ----
  {
    id: "c1", phase: "Conception", label: "Cadrage & spécifications", team: "Toute l'équipe", start: 0, end: 3, accent: "var(--ai)",
    detail: {
      contenu: ["WBS, OBS, RACI", "SWOT, PESTEL, AMDEC, Risk Map", "Spécifications fonctionnelles (FR/NFR)"],
      livrable: "Dossier de cadrage complet.",
      depend: "Aucune : socle de départ pour tout le reste.",
    },
  },
  {
    id: "c2", phase: "Conception", label: "Marché, personas & design", team: "Adam · Elarif", start: 1, end: 5, accent: "var(--cli)",
    detail: {
      contenu: ["Étude de marché, positionnement océan bleu", "Personas propriétaire et vétérinaire", "Design system, wireframes"],
      livrable: "Étude de marché + maquettes validées.",
      depend: "S'appuie sur le cadrage initial.",
    },
  },
  {
    id: "c3", phase: "Conception", label: "Architecture & benchmarks", team: "Pôles techniques", start: 2, end: 5, accent: "var(--svc)",
    detail: {
      contenu: ["Architecture système (3 zones)", "Benchmarks backend, BDD, LLM, mobile, cloud", "Choix techniques justifiés (ADR)"],
      livrable: "Architecture cible et stack arrêtées.",
      depend: "Découle du cadrage et de l'étude de marché.",
    },
  },
  {
    id: "c4", phase: "Conception", label: "POCs (simulateur, RAG)", team: "Nino · Yassine · Cyril", start: 4, end: 6, accent: "var(--edge)",
    detail: {
      contenu: ["Simulateur de capteurs collier", "POC RAG / pipeline LangGraph", "Validation de faisabilité avant la keynote"],
      livrable: "POCs prêts pour la keynote (juillet 2026).",
      depend: "Dé-risque l'IoT et l'IA avant le développement.",
    },
  },
  // ---- Phase 2 · Développement : les 11 epics du WBS (codes E1-E11) ----
  // Aligné sur le dossier (partie Planning) : mêmes codes, mêmes dates Jira,
  // segment clair = préparation non bloquante, segment plein = consolidation.
  {
    id: "e11", phase: "Développement", label: "E11 · Plateforme & Ops", team: "Cloud/Ops", start: 7, end: 9, accent: "var(--data)", critical: true,
    detail: {
      contenu: ["Cluster Kubernetes (Hetzner, Terraform)", "CI/CD + déploiement GitOps (Argo CD)", "Observabilité OpenTelemetry (Prometheus / Loki / Tempo / Grafana)", "Sécurité de l'infrastructure"],
      livrable: "Infrastructure opérationnelle (sept. 2026).",
      depend: "Le socle : tout se déploie dessus. Construite en premier, puis exploitée en continu (déploiements, monitoring, RGPD infra).",
    },
  },
  {
    id: "e2", phase: "Développement", label: "E2 · Collecte & stockage", team: "IoT · Backend", start: 7, end: 13, accent: "var(--edge)", critical: true, deps: ["e11"],
    segs: [
      { label: "Simulateur", start: 7, end: 10, kind: "derisk" },
      { label: "Collier réel", start: 11, end: 13, kind: "build" },
    ],
    detail: {
      contenu: ["Ingestion capteurs, normalisation, déduplication", "Tampon hors-ligne (store-and-forward) + retry", "Stockage en séries temporelles (TimescaleDB)", "Authentification du collier (mTLS)"],
      livrable: "Chaîne de collecte complète, backend complet (janv. 2027).",
      depend: "La donnée alimente tout : le simulateur (dès juillet) permet aux features et à l'IA de démarrer sans attendre le collier réel.",
    },
  },
  {
    id: "e1", phase: "Développement", label: "E1 · Onboarding & appairage", team: "Fullstack · Mobile", start: 7, end: 11, accent: "var(--cli)",
    segs: [
      { label: "Design / maquettes", start: 7, end: 8, kind: "derisk" },
      { label: "Consolidation", start: 9, end: 11, kind: "build" },
    ],
    detail: {
      contenu: ["Compte sécurisé + authentification", "Profil animal (race, âge, poids)", "Appairage BLE du collier (QR code)", "Gestion multi-animaux"],
      livrable: "Parcours d'entrée complet (nov. 2026).",
      depend: "Démarre sur maquettes ; consolide sur l'API d'authentification réelle.",
    },
  },
  {
    id: "e9", phase: "Développement", label: "E9 · Conformité & RGPD", team: "Cloud/Ops · PO", start: 7, end: 16, accent: "var(--rose)",
    segs: [
      { label: "Cadre (DPIA, consentement)", start: 7, end: 9, kind: "derisk" },
      { label: "Application continue", start: 10, end: 16, kind: "build" },
    ],
    detail: {
      contenu: ["Recueil du consentement", "Anonymisation / masquage PII", "Traçabilité & audit", "Gestion des droits (accès, suppression)"],
      livrable: "Conformité RGPD appliquée en continu jusqu'au MVP (avr. 2027).",
      depend: "Cadre posé tôt (privacy by design), appliqué au fil des livraisons de chaque pôle.",
    },
  },
  {
    id: "e3", phase: "Développement", label: "E3 · Bien-être & activité", team: "Mobile · IA", start: 8, end: 15, accent: "var(--cli)", deps: ["e2"],
    segs: [
      { label: "Préparation (données simulées)", start: 8, end: 10, kind: "derisk" },
      { label: "Consolidation", start: 11, end: 15, kind: "build" },
    ],
    detail: {
      contenu: ["Score de bien-être", "Courbes activité / sommeil", "Constantes (température, rythme)", "Historique consultable"],
      livrable: "Suivi bien-être complet dans l'app (MVP avr. 2027).",
      depend: "Démarre sur les données simulées (E2), consolide sur les données réelles.",
    },
  },
  {
    id: "e4", phase: "Développement", label: "E4 · Localisation & zones", team: "Mobile · Backend", start: 9, end: 16, accent: "var(--cli)", deps: ["e2"],
    segs: [
      { label: "Préparation (mocks carte)", start: 9, end: 11, kind: "derisk" },
      { label: "Consolidation", start: 12, end: 16, kind: "build" },
    ],
    detail: {
      contenu: ["Carte GPS temps réel", "Geofencing (zones de sécurité)", "Alertes de sortie de zone", "Historique des trajets"],
      livrable: "Localisation et zones dans l'app (MVP avr. 2027).",
      depend: "Positions simulées (E2) puis réelles ; alertes branchées sur le backend.",
    },
  },
  {
    id: "e5", phase: "Développement", label: "E5 · Anomalies & alertes", team: "IA/Data", start: 9, end: 16, accent: "var(--ai)", deps: ["e2"],
    segs: [
      { label: "Machinerie", start: 9, end: 12, kind: "derisk" },
      { label: "Calibrage données réelles", start: 13, end: 16, kind: "build" },
    ],
    detail: {
      contenu: ["Profil de comportement normal par animal", "Seuils adaptatifs", "Détection d'anomalies", "Génération d'alertes santé"],
      livrable: "Détection d'anomalies calibrée (MVP avr. 2027).",
      depend: "Démarrage à froid : détecter une anomalie exige des mois d'historique par animal. Machinerie dès septembre, calibrage sur données réelles en décembre.",
    },
  },
  {
    id: "e6", phase: "Développement", label: "E6 · Assistant IA & escalade", team: "IA/Data", start: 9, end: 16, accent: "var(--ai)", critical: true, deps: ["e2"],
    segs: [
      { label: "Pipeline & corpus", start: 9, end: 13, kind: "derisk" },
      { label: "Intégration", start: 14, end: 16, kind: "build" },
    ],
    detail: {
      contenu: ["Chat RAG sur corpus vétérinaire", "Garde-fous non-diagnostiques", "Contextualisation des alertes", "Escalade vers le vétérinaire"],
      livrable: "Care Engine intégré au MVP (avr. 2027).",
      depend: "Part du POC RAG de la conception ; consolide sur les données et alertes réelles (E2, E5).",
    },
  },
  {
    id: "e7", phase: "Développement", label: "E7 · Vet Portal · dossier", team: "Fullstack", start: 11, end: 17, accent: "var(--svc)", critical: true, deps: ["e2", "e6"],
    segs: [
      { label: "Échafaudage (mocks)", start: 11, end: 13, kind: "derisk" },
      { label: "Câblage IA & données", start: 14, end: 17, kind: "build" },
    ],
    detail: {
      contenu: ["Timeline médicale, vue patient", "Résumé contextualisé + données brutes", "Alertes, notes, suivi longitudinal", "Export PDF / JSON normalisé"],
      livrable: "Portail vétérinaire livré (mai 2027).",
      depend: "Le seul epic vraiment dépendant (backend + IA) : échafaudage sur mocks dès novembre, câblage aux vraies sorties IA en février.",
    },
  },
  {
    id: "e8", phase: "Développement", label: "E8 · Abonnement & support", team: "Fullstack", start: 17, end: 18, accent: "var(--ext)",
    detail: {
      contenu: ["Plans & abonnement (Stripe)", "Statuts & renouvellements", "Facturation", "Support / ticketing, FAQ"],
      livrable: "Abonnement opérationnel (post-MVP).",
      depend: "Post-MVP : différé par priorité (non requis pour valider le produit), pas par blocage technique.",
    },
  },
  {
    id: "e10", phase: "Développement", label: "E10 · Téléconsultation & triage", team: "Fullstack · IA", start: 17, end: 19, accent: "var(--svc)",
    detail: {
      contenu: ["File de garde vétérinaire", "Handoff IA → vétérinaire", "Orientation non-diagnostique, prise de RDV", "Pool plafonné, routage vers le vétérinaire traitant"],
      livrable: "Téléconsultation de bout en bout (post-MVP, juil. 2027).",
      depend: "Post-MVP : s'appuie sur le portail (E7) et l'escalade (E6).",
    },
  },
  // ---- Phase 3 · Intégration ----
  {
    id: "i1", phase: "Intégration", label: "Tests E2E (tous composants)", team: "Toute l'équipe", start: 17, end: 18, accent: "var(--rose)", deps: ["e7"],
    detail: {
      contenu: ["Tests E2E des flux critiques (collier → backend → IA → app / portail)", "Tests de charge et de performance (p95)", "Stabilisation"],
      livrable: "Produit intégré et testé.",
      depend: "Rassemble tous les composants livrés par les 11 epics.",
    },
  },
  {
    id: "i2", phase: "Intégration", label: "Bêta interne + documentation", team: "Toute l'équipe", start: 18, end: 19, accent: "var(--rose)", deps: ["i1"],
    detail: {
      contenu: ["Bêta interne, tests utilisateurs", "Corrections et finitions", "Documentation technique et guide utilisateur"],
      livrable: "Produit stabilisé, fin de projet (juil. 2027).",
      depend: "Suit les tests E2E.",
    },
  },
];
// `lvl` étage les libellés (0 = sous l'axe, 1 = plus bas) pour éviter le chevauchement
// des jalons proches (ex. MVP intégré idx 16 / Portail Véto idx 17).
export const MILESTONES: { idx: number; label: string; lvl: 0 | 1 }[] = [
  { idx: 7, label: "Keynote", lvl: 0 },
  { idx: 9, label: "Infra op.", lvl: 1 },
  { idx: 11, label: "Simulateur", lvl: 0 },
  { idx: 13, label: "Backend complet", lvl: 1 },
  { idx: 16, label: "MVP intégré", lvl: 0 },
  { idx: 17, label: "Portail Véto", lvl: 1 },
  { idx: 19, label: "Fin projet", lvl: 0 },
];

// Pourquoi on peut paralléliser : peu de dépendances réelles entre composants.
export const DEP_NOTE =
  "Le parallélisme n'est pas un pari : les 5 pôles avancent en parallèle dès juillet et aucun epic n'attend qu'un autre soit terminé. Chacun démarre par sa part non bloquante (design, maquettes / mocks, simulateur, machinerie) et ne consolide qu'une fois sa dépendance réelle disponible. Le Vet Portal (E7) est le seul epic vraiment dépendant (backend + IA) : échafaudage sur mocks dès novembre 2026, câblage aux vraies sorties IA en février 2027. E8 et E10 sont post-MVP : différés par priorité, pas par blocage technique.";
export const DEPENDENCIES: { from: string; to: string; why: string }[] = [
  { from: "E11 Plateforme (socle)", to: "Tous les epics", why: "tout se déploie sur l'infrastructure, construite en premier puis exploitée en continu" },
  { from: "E2 Collecte (simulateur)", to: "E3, E4, E5, E6", why: "la donnée alimente tout : features et IA démarrent sur données simulées, sans attendre le collier" },
  { from: "Baseline de données", to: "E5 Anomalies", why: "détecter une anomalie exige plusieurs mois d'historique par animal (démarrage à froid)" },
  { from: "E6 IA + E2 données", to: "E7 Vet Portal", why: "le portail affiche les résumés et alertes issus de l'IA" },
];
export const PLANNING_RISKS: { risque: string; impact: string; mitigation: string }[] = [
  { risque: "Retard de la keynote", impact: "Bloque le démarrage de la phase de développement", mitigation: "Prioriser les livrables réellement évalués" },
  { risque: "Hardware complexe", impact: "Retard du collier IoT", mitigation: "Simulateur en fallback : le reste n'attend pas le matériel" },
  { risque: "RAG plus long que prévu", impact: "Retard du moteur IA", mitigation: "Lancer les POCs très tôt (dès la phase de conception)" },
  { risque: "Intégration tardive", impact: "Bugs découverts trop tard", mitigation: "Tests continus tout au long, pas seulement à la fin" },
];

/* ------------------------------------------------- MÉTHODO & QUALITÉ ---- */
export const METHODO = {
  intro:
    "Pawrise Care adopte une méthodologie Scrum adaptée : agilité itérative et incrémentale, tenant compte des contraintes académiques de l'équipe (10 personnes, projet sur 20 mois).",
  rituels: [
    { t: "Sprint", d: "Cycles courts de 2 semaines, livraison continue de valeur." },
    { t: "Daily / point d'équipe", d: "Synchronisation rapide, levée des blocages." },
    { t: "Sprint Review", d: "Démonstration de l'incrément aux parties prenantes." },
    { t: "Rétrospective", d: "Amélioration continue du process à chaque fin de sprint." },
  ],
  roles: ["Product Owner (Yassine)", "Scrum Master tournant", "Équipe de développement (pôles)"],
  outils: "Jira (backlog, sprints, estimation story points) · Confluence (docs) · GitHub (code, PR, CI) · Figma (design).",
};

// Justification du choix méthodologique vs alternatives (critère proj_methodology).
export const METHODO_JUSTIF = {
  choix: "Scrum adapté (agile itératif)",
  pourquoi:
    "Le périmètre évolue avec les apprentissages (POCs IA, faisabilité hardware, retours du vétérinaire partenaire) : on ne peut pas tout figer en amont. Scrum permet de livrer par incréments, de réorienter à chaque sprint et d'absorber l'incertitude technique sans replanifier tout le projet.",
  alternatives: [
    {
      nom: "Waterfall / cycle en V",
      verdict: "Écarté",
      raison:
        "Suppose un cahier des charges figé en amont. Incompatible avec l'incertitude R&D (IA, capteurs) et les retours terrain itératifs.",
    },
    {
      nom: "Kanban pur (flux continu)",
      verdict: "Partiellement intégré",
      raison:
        "Excellent pour un flux continu, mais sans cadence ni engagement de sprint il offre peu de prévisibilité pour une équipe de 10 et une soutenance jalonnée. On en retient le tableau visuel et la limite de WIP.",
    },
  ],
  adaptation:
    "« Adapté » car l'équipe est étudiante : Scrum Master tournant (montée en compétence de tous), sprints alignés sur le calendrier académique, et un PO unique garant de la priorisation.",
};

// Estimation : Planning Poker sur échelle de Fibonacci (page Confluence Story Points).
export const STORY_POINTS = {
  intro:
    "Les tickets Jira sont estimés en story points (effort global : complexité, volume, incertitude, dépendances), pas en heures. L'estimation se fait en équipe par Planning Poker pour aligner la compréhension.",
  echelle: [
    { pts: "1", ex: "Très simple, très clair (ex. créer un canal, changer un paramètre Jira)." },
    { pts: "2", ex: "Simple avec un peu de vérification (ex. configurer un repo GitHub)." },
    { pts: "3", ex: "Travail normal + mini-livrable (ex. produire le WBS, une matrice RACI)." },
    { pts: "5", ex: "Gros ticket, coordination, risque moyen (ex. benchmark hardware)." },
    { pts: "8", ex: "Complexe / flou / long (ex. étude de marché complète, gros état de l'art)." },
  ],
  regle: "Au-delà de 13 points, le ticket est découpé. Les points restent stables pendant le sprint.",
};

/* ----------------------------------------- ROADMAP DÉTAILLÉE (3 phases) -- */
// Source : page Confluence « Planning & Roadmap ». Complète la frise Gantt.
export type Phase = {
  nom: string;
  periode: string;
  objectif: string;
  lignes: { quoi: string; qui: string; quand?: string }[];
};
export const PHASES: Phase[] = [
  {
    nom: "Phase 1 · Conception",
    periode: "Déc 2025 → Juin 2026",
    objectif: "Préparer tous les livrables pour la keynote.",
    lignes: [
      { quoi: "Cadrage : WBS, OBS, RACI, SWOT, PESTEL, AMDEC, Risk Map", qui: "Toute l'équipe" },
      { quoi: "Organisation : méthodologie, Quality Plan, outils", qui: "Yassine" },
      { quoi: "Technique : benchmarks, architecture, specs", qui: "Pôles tech" },
      { quoi: "Marché : étude, positionnement, personas", qui: "Adam, Elarif" },
      { quoi: "POCs : simulateur collier, RAG / Chat IA", qui: "Nino, Yassine, Cyril" },
    ],
  },
  {
    nom: "Phase 2 · Développement",
    periode: "Juil 2026 → Mai 2027",
    objectif: "Développer tous les composants en parallèle.",
    lignes: [
      { quoi: "Infrastructure : Cloud, CI/CD, monitoring", qui: "Oumar, Abderrahmane", quand: "Juil → Sept 2026" },
      { quoi: "Backend : API, BDD, Auth, Ingestion", qui: "Hamid, Aaditya, Elarif", quand: "Juil 2026 → Jan 2027" },
      { quoi: "Collier IoT : simulateur puis hardware", qui: "Cyril, Ibrahim", quand: "Juil 2026 → Avr 2027" },
      { quoi: "App Mobile : Auth, Dashboard, GPS, Chat IA", qui: "Adam, Elarif", quand: "Juil 2026 → Mai 2027" },
      { quoi: "Moteur IA + Data : POCs puis intégration", qui: "Nino, Yassine", quand: "Juil 2026 → Avr 2027" },
      { quoi: "Portail Véto : dashboard, escalade, rapports", qui: "Hamid, Aaditya, Elarif", quand: "Fév → Mai 2027" },
    ],
  },
  {
    nom: "Phase 3 · Intégration",
    periode: "Mai → Juil 2027",
    objectif: "Assembler, tester, stabiliser.",
    lignes: [
      { quoi: "Tests E2E : tous les composants connectés", qui: "Toute l'équipe", quand: "Mai 2027" },
      { quoi: "Beta interne : tests utilisateurs", qui: "Toute l'équipe", quand: "Mai → Juin 2027" },
      { quoi: "Documentation : doc technique, guide utilisateur", qui: "Toute l'équipe", quand: "Juil 2027" },
    ],
  },
];

// Preuve d'adoption de l'outil de gestion (instantané du board Jira projet SCRUM).
export const JIRA = {
  url: "https://pawrise.atlassian.net",
  intro:
    "Le projet est piloté sur un board Jira (projet SCRUM) adopté par les 10 membres : backlog, sprints, estimation en story points et assignation nominative des tâches. Confluence héberge la documentation, GitHub le code et les PR.",
  stats: [
    { k: "170+", v: "tickets (epics, tâches, sous-tâches, user stories)" },
    { k: "23", v: "epics Jira (12 cadrage & documentation · 11 produit)" },
    { k: "66", v: "user stories produit, chacune avec critères d'acceptation Given/When/Then" },
    { k: "10 / 10", v: "membres avec tickets assignés" },
    { k: "4", v: "statuts de flux (à faire → en cours → revue → terminé)" },
  ],
  workflow: ["À faire", "En cours", "Revue en cours", "Terminé"],
};

/* ----------------------------------------------------- PLAN QUALITÉ ----- */
// Conservé pour compat ; résumé des principes de test agile.
export const QUALITY = [
  "Tests unitaires et fonctionnels obligatoires ; E2E / smoke sur les flux critiques.",
  "Couverture visée à 90 % sur le code critique (palier « exemplary » Google), plancher CI bloquant à 80 %, sans course au 100 %.",
  "La Definition of Done d'une User Story inclut obligatoirement ses tests et sa couverture.",
  "Les tests automatisés s'exécutent à chaque Pull Request via la CI (merge bloqué si rouge).",
];

// Definition of Done : conditions qu'une User Story doit toutes remplir pour
// être considérée comme terminée. Source : Quality Plan + Git Workflow +
// Stratégie de tests (Confluence). Sert de garde-fou partagé par l'équipe.
export const DEFINITION_OF_DONE = [
  "Les critères d'acceptation de la User Story (Given/When/Then) sont tous satisfaits.",
  "Le code est relu et approuvé par au moins un pair via une Pull Request.",
  "Les tests de la story sont écrits et passent : unitaires et fonctionnels obligatoires (intégration et E2E si flux critique).",
  "La couverture de code atteint le seuil fixé (mesurée en CI, merge bloqué sinon).",
  "La CI est verte : format, lint, tests et audit automatiques réussis (le merge est bloqué sinon).",
  "La documentation utile est à jour (README du service, doc d'API, Confluence si besoin).",
  "Aucune régression : un bug corrigé est couvert par un test de non-régression.",
];

// Règle d'or produit : invariant éthique vérifié systématiquement par les tests
// du Care Engine. Source : Stratégie de tests (Confluence).
export const QUALITY_GOLDEN =
  "Règle d'or produit : l'IA n'émet jamais de diagnostic. Les tests du Care Engine vérifient que toute situation ambiguë déclenche une orientation ou une escalade vers le vétérinaire, jamais une conclusion médicale.";

// Plan qualité détaillé (critère team_practices). Stratégie de tests par couche,
// conventions, Git workflow, CI/CD et onboarding, adapté à la stack réelle.
export const TEST_STRATEGY: { couche: string; outils: string; cible: string }[] = [
  { couche: "Firmware collier (C / Zephyr)", outils: "tests unitaires (Zephyr) + analyse statique (Clang-Tidy, Cppcheck, MISRA C) + simulateur de capteurs", cible: "Logique de collecte/encodage validée hors matériel ; sûreté mémoire par MISRA C + allocation statique." },
  { couche: "Services backend (Rust)", outils: "tests unitaires (cargo nextest) + intégration API sur services réels (testcontainers)", cible: "Logique métier et endpoints couverts ; tests d'abus obligatoires sur l'auth." },
  { couche: "Moteur IA / Care Engine (Python)", outils: "pytest + jeux d'évaluation RAG + garde-fous anti-diagnostic", cible: "Non-régression des réponses et déclenchement systématique de l'escalade en cas de doute." },
  { couche: "App mobile (Kotlin / SwiftUI)", outils: "tests unitaires natifs + tests d'UI critiques", cible: "Parcours d'onboarding, appairage et alertes vérifiés." },
  { couche: "Bout en bout (E2E / smoke)", outils: "scénarios end-to-end sur les flux critiques (phase d'intégration)", cible: "Collier → backend → IA → app/portail validés ensemble." },
  { couche: "Performance / charge", outils: "tests de charge (k6 / Locust) sur les endpoints critiques", cible: "Temps de réponse p95 et montée en charge validés avant la production (NFR6, NFR7)." },
];

export const CODE_CONVENTIONS = [
  "Linting/formatage automatiques par langage : rustfmt + clippy (Rust), ruff/black (Python), ktlint (Kotlin), ESLint + Prettier (TS/Next).",
  "Nommage cohérent par langage (snake_case Rust/Python, camelCase Kotlin/TS) et noms descriptifs.",
  "Toute fonctionnalité passe par une Pull Request relue par au moins un pair avant merge.",
  "Pas de secret en clair dans le code : variables d'environnement + secrets chiffrés (SOPS).",
];

export const GIT_WORKFLOW = {
  intro:
    "Règles Git officielles du projet : travail collaboratif structuré, traçabilité complète et livraisons fiables. Branche stable protégée, le travail se fait sur des branches dédiées fusionnées par Pull Request relue.",
  branches: [
    { n: "main", d: "Branche stable et déployable. Protégée : merge uniquement via PR validée." },
    { n: "develop", d: "Intégration continue des fonctionnalités avant stabilisation." },
    { n: "feat/<scope>", d: "Une fonctionnalité = une branche, rattachée à un ticket Jira (ex. feat/SCRUM-42-appairage)." },
    { n: "fix/<scope>", d: "Correction de bug isolée et traçable." },
  ],
  commits: "Messages de commit conventionnels (feat:, fix:, docs:, chore:…) référençant la clé du ticket Jira pour la traçabilité.",
  pr: "Chaque PR : description claire, lien Jira, CI verte (lint + tests) et revue d'au moins un pair avant merge.",
};

export const CICD = [
  "CI centrée Cargo (quasi full-Rust), tout gate bloquant : cargo fmt --check, cargo sort --check, cargo clippy -- -D warnings, cargo machete.",
  "Tests + couverture : cargo llvm-cov nextest --fail-under-lines 80 (objectif 90 % sur le code critique) ; intégration via testcontainers.",
  "Sécurité & supply chain : cargo audit (RustSec) à chaque PR, Dependabot hebdomadaire groupé (Cargo, GitHub Actions, mobile).",
  "Déploiement GitOps : images Docker versionnées, Helm + Argo CD ; environnements develop → staging → production, canal hotfix dédié.",
  "Secrets chiffrés (SOPS + age) ; observabilité OpenTelemetry → Prometheus/Loki/Tempo → Grafana ; rollback par revert Git.",
];

export const ONBOARDING = [
  "Accès : dépôt GitHub, projet Jira (SCRUM) et espace Confluence (PC) donnés dès l'arrivée.",
  "Lecture d'entrée : ce plan qualité, le Git Workflow et l'architecture globale (cockpit).",
  "Mise en route locale : clone du repo, installation des dépendances, lancement en local (README de chaque service).",
  "Première contribution : prendre un ticket « bonne première tâche » dans Jira, ouvrir une PR en suivant les conventions.",
];
