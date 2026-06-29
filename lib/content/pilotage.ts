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
  { name: "Backend / API", accent: "var(--svc)", members: ["Hamid", "Aaditya", "Elarif"], scope: "API, ingestion, BDD, auth, Vet Portal" },
  { name: "IoT / Hardware", accent: "var(--edge)", members: ["Cyril", "Ibrahim"], scope: "Firmware, capteurs, simulateur, collier" },
  { name: "IA / Data", accent: "var(--ai)", members: ["Nino", "Yassine"], scope: "Care Engine, RAG, POCs, modèle de données" },
  { name: "Design / Mobile", accent: "var(--cli)", members: ["Adam"], scope: "UX/UI, app mobile, identité, positionnement & marché" },
  { name: "Cloud / DevOps", accent: "var(--data)", members: ["Oumar", "Abderrahmane"], scope: "Cloud, CI/CD, monitoring, sécurité" },
];

// Yassine est Product Owner ET contributeur du pôle IA/Data (double casquette
// assumée) ; Elarif est rattaché Backend mais intervient en transverse Mobile,
// CI/CD et lien vétérinaire. Le détail nominatif par domaine figure dans COVERAGE.
export const PO_NOTE =
  "Yassine cumule le rôle de Product Owner et de contributeur IA/Data ; Elarif est rattaché au pôle Backend mais intervient en transverse sur le Mobile, le marché, la CI/CD et le lien vétérinaire. Le détail des responsabilités nominatives par domaine (avec backups) est précisé dans la table de couverture ci-dessous.";

// Table de couverture nominative : qui est responsable de quoi, et le backup
// qui assure la continuité. Source : Justification & Compétences (Confluence).
export type Coverage = { domain: string; leads: string; backup: string };
export const COVERAGE: Coverage[] = [
  { domain: "Product Ownership", leads: "Yassine", backup: "À définir" },
  { domain: "IoT / Hardware", leads: "Cyril, Ibrahim", backup: "Hamid (support)" },
  { domain: "Backend / API", leads: "Hamid, Aaditya, Elarif", backup: "Yassine" },
  { domain: "IA / Data", leads: "Nino, Yassine", backup: "À définir" },
  { domain: "Mobile / Frontend", leads: "Elarif, Adam", backup: "Hamid, Aaditya" },
  { domain: "Design / UX", leads: "Adam", backup: "À définir" },
  { domain: "Market / Business", leads: "Adam, Elarif", backup: "À définir" },
  { domain: "Cloud / DevOps", leads: "Oumar, Abderrahmane", backup: "Elarif (CI/CD)" },
  { domain: "Réseau vétérinaire", leads: "Elarif, Nino", backup: "À définir" },
];

/* --------------------------------------------------------------- RACI ---- */
// R responsable · A approbateur · C consulté · I informé
export type Raci = "R" | "A" | "C" | "I" | "";
export const RACI_POLES = ["Pilotage (PO)", "Fullstack", "IoT", "Design/Mobile", "IA/Data", "Cloud/Ops"];
export const RACI_ROWS: { activite: string; cells: Raci[] }[] = [
  { activite: "Cadrage & spécifications", cells: ["R", "C", "C", "C", "C", "C"] },
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
// Une barre peut être découpée en segments : "derisk" (simulateur / POC, on dé-risque
// d'abord, à faible coût) puis "build" (engagement du coûteux). Le détail relie enfin
// chaque barre à son contenu, son livrable et sa dépendance (cf. panneau au clic).
export type Seg = { label: string; start: number; end: number; kind: "derisk" | "build" };
export type Bar = {
  label: string; team: string; start: number; end: number; accent: string;
  segs?: Seg[];
  detail: { contenu: string[]; livrable: string; depend: string };
};
export const GANTT: Bar[] = [
  {
    label: "Conception / cadrage", team: "Toute l'équipe", start: 0, end: 6, accent: "var(--ai)",
    detail: {
      contenu: ["Cadrage : WBS, OBS, RACI, SWOT, PESTEL, AMDEC, Risk Map", "Architecture, specs, benchmarks", "Étude de marché, positionnement, personas", "Design system, wireframes", "POCs : simulateur collier, RAG / Chat IA"],
      livrable: "Tous les livrables prêts pour la keynote (juin 2026).",
      depend: "Aucune : socle de départ pour tout le reste.",
    },
  },
  {
    label: "Infrastructure", team: "Oumar", start: 7, end: 9, accent: "var(--data)",
    detail: {
      contenu: ["Cloud, cluster Kubernetes", "CI/CD (GitOps)", "Monitoring / observabilité"],
      livrable: "Socle de déploiement opérationnel (sept. 2026).",
      depend: "Démarre dès juillet : prérequis du déploiement backend.",
    },
  },
  {
    label: "Backend", team: "Hamid · Aaditya · Elarif", start: 7, end: 13, accent: "var(--svc)",
    detail: {
      contenu: ["API (Rust), base de données", "Authentification (OIDC)", "Ingestion des données collier"],
      livrable: "Backend complet et documenté (janv. 2027).",
      depend: "Avance en parallèle ; se déploie sur l'infra dès qu'elle est prête.",
    },
  },
  {
    label: "Collier IoT", team: "Cyril · Ibrahim", start: 7, end: 16, accent: "var(--edge)",
    segs: [
      { label: "Simulateur", start: 7, end: 11, kind: "derisk" },
      { label: "Hardware", start: 12, end: 16, kind: "build" },
    ],
    detail: {
      contenu: ["Simulateur de capteurs (dérisque sans matériel)", "Firmware embarqué", "Carte électronique, boîtier, transmission"],
      livrable: "Simulateur (nov. 2026) puis prototype matériel (avr. 2027).",
      depend: "On valide tout sur simulateur avant d'engager le hardware coûteux.",
    },
  },
  {
    label: "App Mobile", team: "Adam · Elarif", start: 7, end: 17, accent: "var(--cli)",
    detail: {
      contenu: ["Auth, dashboard bien-être", "Carte GPS, zones de sécurité", "Chat IA, notifications"],
      livrable: "App propriétaire complète (mai 2027).",
      depend: "Branche les API backend au fur et à mesure de leur livraison.",
    },
  },
  {
    label: "Moteur IA + Data", team: "Nino · Yassine", start: 7, end: 16, accent: "var(--ai)",
    segs: [
      { label: "POCs", start: 7, end: 11, kind: "derisk" },
      { label: "Intégration", start: 12, end: 16, kind: "build" },
    ],
    detail: {
      contenu: ["POCs RAG / pipeline LangGraph (dérisque l'IA tôt)", "Garde-fous non-diagnostiques", "Intégration au backend et aux données réelles"],
      livrable: "Care Engine intégré au MVP (avr. 2027).",
      depend: "POCs autonomes ; l'intégration consomme les données du backend.",
    },
  },
  {
    label: "Portail Véto", team: "Hamid · Aaditya · Elarif", start: 14, end: 17, accent: "var(--svc)",
    detail: {
      contenu: ["Dashboard vétérinaire, timeline", "Escalade et handoff", "Rapports / PDF normalisé"],
      livrable: "Portail vétérinaire livré (mai 2027).",
      depend: "Seul composant vraiment dépendant : démarre en février, une fois le moteur IA et le backend assez avancés.",
    },
  },
  {
    label: "Intégration & tests", team: "Toute l'équipe", start: 17, end: 19, accent: "var(--rose)",
    detail: {
      contenu: ["Tests E2E (tous les composants connectés)", "Bêta interne, tests utilisateurs", "Documentation technique et guide"],
      livrable: "Produit assemblé, testé et stabilisé (juil. 2027).",
      depend: "Phase finale : rassemble tous les composants.",
    },
  },
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

// Pourquoi on peut paralléliser : peu de dépendances réelles entre composants.
export const DEP_NOTE =
  "Le parallélisme n'est pas un pari : les composants sont volontairement peu couplés. Le portail vétérinaire est le seul à vraiment dépendre des autres (il a besoin du moteur IA et du backend), c'est pourquoi il démarre plus tard, en février 2027. Tout le reste avance en parallèle dès juillet 2026, et les briques risquées (collier, IA) sont d'abord dé-risquées par un simulateur et des POCs avant d'engager le coûteux.";
export const DEPENDENCIES: { from: string; to: string; why: string }[] = [
  { from: "Infrastructure", to: "Backend", why: "le backend se déploie sur l'infra" },
  { from: "Simulateur collier", to: "Moteur IA", why: "l'IA s'entraîne et se teste sur des données simulées" },
  { from: "Backend (API)", to: "App Mobile", why: "l'app consomme les API au fil de l'eau" },
  { from: "Moteur IA + Backend", to: "Portail Véto", why: "alertes et rapports viennent de l'IA et des données" },
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
    periode: "Juil 2026 → Avr 2027",
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
    { k: "100+", v: "tickets (epics, tâches, sous-tâches)" },
    { k: "19", v: "epics Jira (suivi, ≥ 11 epics produit)" },
    { k: "10 / 10", v: "membres avec tickets assignés" },
    { k: "4", v: "statuts de flux (à faire → en cours → revue → terminé)" },
  ],
  workflow: ["À faire", "En cours", "Revue en cours", "Terminé"],
};

/* ----------------------------------------------------- PLAN QUALITÉ ----- */
// Conservé pour compat ; résumé des principes de test agile.
export const QUALITY = [
  "Tests écrits en parallèle ou avant le code (TDD quand possible).",
  "Chaque sprint inclut rédaction, exécution et validation des tests.",
  "La Definition of Done d'une User Story inclut obligatoirement ses tests.",
  "Les tests automatisés s'exécutent à chaque Pull Request via la CI.",
];

// Plan qualité détaillé (critère team_practices). Stratégie de tests par couche,
// conventions, Git workflow, CI/CD et onboarding, adapté à la stack réelle.
export const TEST_STRATEGY: { couche: string; outils: string; cible: string }[] = [
  { couche: "Firmware collier (Rust no_std)", outils: "tests unitaires embarqués + simulateur de capteurs", cible: "Logique de collecte/encodage validée hors matériel via le simulateur." },
  { couche: "Services backend (Rust)", outils: "tests unitaires (cargo test) + tests d'intégration API", cible: "Logique métier et endpoints couverts ; tests d'abus obligatoires sur l'auth." },
  { couche: "Moteur IA / Care Engine (Python)", outils: "pytest + jeux d'évaluation RAG + garde-fous anti-diagnostic", cible: "Non-régression des réponses et déclenchement systématique de l'escalade en cas de doute." },
  { couche: "App mobile (Kotlin / SwiftUI)", outils: "tests unitaires natifs + tests d'UI critiques", cible: "Parcours d'onboarding, appairage et alertes vérifiés." },
  { couche: "Bout en bout (E2E)", outils: "scénarios end-to-end en phase d'intégration", cible: "Collier → backend → IA → app/portail validés ensemble (phase 3)." },
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
  "À chaque Pull Request : lint + tests automatiques via GitHub Actions (merge bloqué si rouge).",
  "Build et publication d'images conteneurisées (Docker) versionnées.",
  "Déploiement GitOps : Helm + Argo CD synchronisent le cluster Kubernetes depuis Git (source de vérité).",
  "Secrets chiffrés (SOPS + age) injectés dans le cluster ; observabilité OpenTelemetry → Prometheus/Loki/Tempo → Grafana.",
];

export const ONBOARDING = [
  "Accès : dépôt GitHub, projet Jira (SCRUM) et espace Confluence (PC) donnés dès l'arrivée.",
  "Lecture d'entrée : ce plan qualité, le Git Workflow et l'architecture globale (cockpit).",
  "Mise en route locale : clone du repo, installation des dépendances, lancement en local (README de chaque service).",
  "Première contribution : prendre un ticket « bonne première tâche » dans Jira, ouvrir une PR en suivant les conventions.",
];
