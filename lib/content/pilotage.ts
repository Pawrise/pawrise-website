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
  { name: "Fullstack / Backend", accent: "var(--svc)", members: ["Hamid", "Aaditya"], scope: "API, ingestion, BDD, auth, Vet Portal" },
  { name: "IoT / Hardware", accent: "var(--edge)", members: ["Cyril", "Ibrahim"], scope: "Firmware, capteurs, simulateur, collier" },
  { name: "IA / Data", accent: "var(--ai)", members: ["Nino", "Yassine"], scope: "Care Engine, RAG, POCs, modèle de données" },
  { name: "Design / Market", accent: "var(--cli)", members: ["Adam", "Elarif"], scope: "UX/UI, app mobile, positionnement" },
  { name: "Cloud / DevOps", accent: "var(--data)", members: ["Oumar", "Abderrahmane"], scope: "Cloud, CI/CD, monitoring, sécurité" },
];

/* --------------------------------------------------------------- RACI ---- */
// R responsable · A approbateur · C consulté · I informé
export type Raci = "R" | "A" | "C" | "I" | "";
export const RACI_POLES = ["Pilotage (PO)", "Fullstack", "IoT", "Design/Mobile", "IA/Data", "Cloud/Ops"];
export const RACI_ROWS: { activite: string; cells: Raci[] }[] = [
  { activite: "Cadrage & specifications", cells: ["A", "C", "C", "C", "C", "C"] },
  { activite: "API & ingestion données", cells: ["A", "R", "C", "I", "C", "C"] },
  { activite: "Collier & firmware", cells: ["A", "C", "R", "I", "C", "I"] },
  { activite: "Application mobile", cells: ["A", "C", "I", "R", "C", "I"] },
  { activite: "Moteur IA / Care Engine", cells: ["A", "C", "I", "C", "R", "I"] },
  { activite: "Portail vétérinaire", cells: ["A", "R", "I", "C", "C", "I"] },
  { activite: "Infra / CI-CD / monitoring", cells: ["A", "C", "I", "I", "I", "R"] },
  { activite: "RGPD & sécurité données", cells: ["A", "R", "C", "I", "C", "C"] },
  { activite: "Tests & qualité", cells: ["A", "R", "C", "C", "C", "C"] },
];

/* ----------------------------------------------------------- PLANNING ---- */
// Frise Déc 2025 → Juil 2027 (20 mois, index 0..19)
export const MONTHS = [
  "Déc 25", "Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep",
  "Oct", "Nov", "Déc 26", "Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil 27",
];
export type Bar = { label: string; team: string; start: number; end: number; accent: string };
export const GANTT: Bar[] = [
  { label: "Conception / cadrage", team: "Toute l'équipe", start: 0, end: 6, accent: "var(--ai)" },
  { label: "Infrastructure", team: "Oumar", start: 7, end: 9, accent: "var(--data)" },
  { label: "Backend", team: "Hamid · Aaditya · Elarif", start: 7, end: 13, accent: "var(--svc)" },
  { label: "Collier IoT", team: "Cyril · Ibrahim", start: 7, end: 16, accent: "var(--edge)" },
  { label: "App Mobile", team: "Adam · Elarif", start: 7, end: 17, accent: "var(--cli)" },
  { label: "Moteur IA + Data", team: "Nino · Yassine", start: 7, end: 16, accent: "var(--ai)" },
  { label: "Portail Véto", team: "Hamid · Aaditya · Elarif", start: 14, end: 17, accent: "var(--svc)" },
  { label: "Intégration & tests", team: "Toute l'équipe", start: 17, end: 19, accent: "var(--rose)" },
];
export const MILESTONES: { idx: number; label: string }[] = [
  { idx: 6, label: "🎤 Keynote" },
  { idx: 9, label: "Infra op." },
  { idx: 11, label: "Simulateur" },
  { idx: 13, label: "Backend complet" },
  { idx: 16, label: "MVP intégré" },
  { idx: 17, label: "Portail Véto" },
  { idx: 19, label: "🎓 Fin projet" },
];

/* ------------------------------------------------- MÉTHODO & QUALITÉ ---- */
export const METHODO = {
  intro:
    "Pawrise Care adopte une méthodologie Scrum adaptée : agilité itérative et incrémentale, tenant compte des contraintes académiques de l'équipe (9 personnes, projet sur 20 mois).",
  rituels: [
    { t: "Sprint", d: "Cycles courts de 2 semaines, livraison continue de valeur." },
    { t: "Daily / point d'équipe", d: "Synchronisation rapide, levée des blocages." },
    { t: "Sprint Review", d: "Démonstration de l'incrément aux parties prenantes." },
    { t: "Rétrospective", d: "Amélioration continue du process à chaque fin de sprint." },
  ],
  roles: ["Product Owner (Yassine)", "Scrum Master tournant", "Équipe de développement (pôles)"],
  outils: "Jira (backlog, sprints, estimation story points) · Confluence (docs) · GitHub (code, PR, CI) · Figma (design).",
};

export const QUALITY = [
  "Tests écrits en parallèle ou avant le code (TDD quand possible).",
  "Chaque sprint inclut rédaction, exécution et validation des tests.",
  "La Definition of Done d'une User Story inclut obligatoirement ses tests.",
  "Les tests automatisés s'exécutent à chaque Pull Request via la CI.",
];
