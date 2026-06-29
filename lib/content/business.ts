// Contenu Business & Stratégie · synthèse SWOT, PESTEL, marché, positionnement,
// modèle économique et budget prévisionnel.

/* ----------------------------------------------- PROPOSITION DE VALEUR --- */
export const VALUE = {
  pitch:
    "Là où Tractive, Weenect ou Invoxia se concentrent sur la localisation, Pawrise Care interprète. Le collier combine GPS, capteurs de santé et une lecture vétérinaire structurée pour orienter le propriétaire vers le bon soin, au bon moment.",
  ocean:
    "Stratégie océan bleu : ne pas affronter le marché GPS saturé, mais ouvrir la passerelle propriétaire ↔ vétérinaire (PDF normalisé, suivi longitudinal), un espace que les acteurs établis ne couvrent pas.",
  piliers: [
    { t: "Prévention", d: "Détecter les signaux faibles avant qu'ils n'empirent." },
    { t: "Orientation non-diagnostique", d: "Aide à l'observation, jamais un acte médical." },
    { t: "Réseau vétérinaire", d: "Escalade vers un professionnel avec un dossier prêt à l'emploi." },
  ],
};

/* --------------------------------------------------------- MARCHÉ ------- */
export const MARKET = {
  // Cadrage TAM / SAM / SOM pour éviter de confondre le marché total (tous
  // animaux) avec le marché réellement adressable par un collier chien/chat.
  figures: [
    { k: "≈ 73 M", v: "TAM · animaux de compagnie en France (tous)" },
    { k: "≈ 26,5 M", v: "SAM · chiens (9,9 M) + chats (16,6 M), cible du collier" },
    { k: "1 foyer / 2", v: "possède au moins un animal" },
    { k: "Cible 3-5 ans", v: "SOM · quelques dizaines de milliers d'abonnés (early adopters)" },
  ],
  note:
    "Le marché total (TAM ≈ 73 M, tous animaux) inclut poissons, oiseaux et NAC : le marché réellement adressable (SAM) par un collier connecté est celui des chiens et chats, soit ≈ 26,5 M (9,9 M chiens + 16,6 M chats, FACCO 2024). Marché pet tech en forte croissance, porté par l'humanisation des animaux. Les concurrents (Tractive, Weenect, Invoxia Minitailz) proposent désormais aussi des mesures de santé, mais restent sur la donnée brute ; l'interprétation accompagnée (IA + vétérinaire) reste notre différenciation. Sources : FACCO 2024-2025, rapports marché pet tech.",
};

/* ----------------------------------------------------------- SWOT ------- */
export type SwotItem = { t: string; d: string };
export type SwotQuad = { key: string; title: string; tone: "pos" | "neg"; items: SwotItem[] };
export const SWOT: SwotQuad[] = [
  {
    key: "S",
    title: "Forces",
    tone: "pos",
    items: [
      { t: "Santé expliquée et accompagnée", d: "Les concurrents affichent de la donnée brute ; nous la traduisons en clair via l'assistant IA, et un vétérinaire partenaire prend le relais. Une valeur qu'on ne trouve pas ailleurs et difficile à copier." },
      { t: "Expertise IA et garde-fous non-diagnostiques", d: "On maîtrise le RAG et le LLM en interne, et on a conçu des barrières pour ne jamais diagnostiquer : compétence rare et conformité intégrée dès le départ." },
      { t: "Vétérinaire partenaire réel", d: "Un vétérinaire valide les contenus et reçoit les dossiers : crédibilité scientifique et accès au métier (confiance, données)." },
      { t: "Positionnement non-diagnostique conforme", d: "On oriente, on ne diagnostique pas (Code rural, AI Act) : on peut opérer légalement là où un diagnostic automatisé serait interdit." },
      { t: "Données longitudinales propriétaires", d: "Chaque jour d'usage enrichit un historique santé par animal : un actif qui grossit avec le temps et devient un avantage difficile à rattraper." },
      { t: "Modèle produit et plateforme vétérinaire", d: "On vend un collier et on relie propriétaires et vétérinaires : plus il y a d'utilisateurs des deux côtés, plus la valeur monte (effet réseau)." },
    ],
  },
  {
    key: "W",
    title: "Faiblesses",
    tone: "neg",
    items: [
      { t: "Hardware complexe et coûteux", d: "Concevoir un collier fiable prend du temps et de l'argent : cela pèse sur le budget et le délai face à un pur logiciel." },
      { t: "Démarrage à froid des données", d: "L'IA a besoin de beaucoup de données animales qu'on n'a pas encore : la fiabilité au lancement dépend de données à accumuler d'abord." },
      { t: "Prototype non finalisé", d: "Le développement s'appuie encore sur des capteurs simulés, pas un produit validé en conditions réelles : il reste un risque technique avant le vrai produit." },
      { t: "Sensibilité juridique de l'orientation", d: "Même sans diagnostic, une formulation mal comprise pourrait créer un litige ou entamer la confiance. Le risque est borné par les garde-fous et l'audit des conversations sur 5 ans, mais il impose une rigueur permanente." },
      { t: "Rentabilité à prouver", d: "Le modèle repose sur l'abonnement et n'a pas encore démontré qu'un client rapporte plus qu'il ne coûte : la viabilité financière reste à valider." },
      { t: "Marque à construire et dépendance à un LLM tiers", d: "On part de zéro en notoriété, et l'IA repose sur un fournisseur externe (Azure OpenAI) qu'on ne maîtrise pas totalement (coût, conditions)." },
    ],
  },
  {
    key: "O",
    title: "Opportunités",
    tone: "pos",
    items: [
      { t: "Marché français massif et porteur", d: "26,5 M de chiens et chats en France et un segment de colliers connectés en forte croissance : un grand bassin de clients sur un marché en hausse." },
      { t: "Humanisation des animaux", d: "L'animal est traité comme un membre de la famille : une vraie disposition à payer pour sa santé et sa prévention." },
      { t: "Convergence technologique favorable", d: "Miniaturisation des capteurs, progrès de l'IA et montée des échanges vétérinaires à distance (message, appel, visio) rendent la solution réalisable et attendue." },
      { t: "Assurance animale en croissance", d: "Marché français en forte hausse et peu pénétré ; nos données aident les assureurs sur la prévention et la tarification : un partenariat gagnant-gagnant et un canal de distribution." },
      { t: "Interopérabilité via le PDF normalisé", d: "Un dossier standardisé fait gagner du temps aux vétérinaires : cela facilite et fidélise l'adoption côté cabinets." },
      { t: "Expansion de segments", d: "Au-delà du grand public : refuges, élevages, chiens de travail et foyers multi-animaux, autant de relais de croissance après le MVP." },
    ],
  },
  {
    key: "T",
    title: "Menaces",
    tone: "neg",
    items: [
      { t: "Concurrents déjà présents sur la santé", d: "Invoxia Minitailz et Tractive mesurent déjà la fréquence cardiaque et respiratoire avec des alertes : notre angle santé n'est plus vierge, il faut prouver vite que l'explication et le vétérinaire font la différence." },
      { t: "Acteur capitalisé qui ajoute la couche vétérinaire", d: "Un grand acteur (Invoxia, un géant technologique, un assureur) pourrait copier notre pont IA et vétérinaire avec plus de moyens et aller plus vite que nous." },
      { t: "Cadre réglementaire strict et mouvant", d: "L'acte médical reste réservé au vétérinaire et l'IA est encadrée (AI Act). Tout glissement perçu vers l'acte médical nous exposerait, et une évolution des règles pourrait contraindre l'orientation par IA." },
      { t: "Dépendance aux fournisseurs", d: "Les capteurs (matériel) et le LLM tiers ne sont pas sous notre contrôle : une hausse de prix, une rupture ou un changement de conditions nous impacte directement." },
      { t: "Adoption lente des vétérinaires", d: "Profession prudente et surchargée : sans vétérinaires partenaires, la promesse d'accompagnement s'effondre." },
      { t: "Sensibilité au prix et à la conjoncture", d: "Collier et abonnement représentent une dépense récurrente que les ménages arbitrent : en baisse de pouvoir d'achat, elle peut être perçue comme non essentielle." },
    ],
  },
];

/* ------------------------------------------- MATRICE DE CONFRONTATION --- */
// Ce qu'on FAIT du SWOT : croiser forces/faiblesses avec opportunités/menaces.
export type Confront = { key: string; title: string; tone: "pos" | "neg"; text: string };
export const CONFRONTATION: Confront[] = [
  { key: "SO", title: "Offensif · Forces × Opportunités", tone: "pos", text: "Capitaliser sur le pont IA et vétérinaire et sur les données longitudinales pour capter un marché en croissance et nouer des partenariats avec les assurances." },
  { key: "ST", title: "Défensif · Forces × Menaces", tone: "pos", text: "Le moat (interprétation, accompagnement vétérinaire et conformité non-diagnostique) protège de la simple copie et d'un durcissement réglementaire." },
  { key: "WO", title: "Rattrapage · Faiblesses × Opportunités", tone: "neg", text: "Combler le manque de données via les cabinets et les assureurs, et financer le matériel par l'abonnement et les partenariats." },
  { key: "WT", title: "Vigilance · Faiblesses × Menaces", tone: "neg", text: "Réduire la dépendance aux fournisseurs (capteurs, LLM) et prouver la rentabilité avant que la concurrence ou la réglementation ne se durcissent." },
];

/* ---------------------------------------------------------- PESTEL ------ */
export type Pestel = { letter: string; axe: string; summary: string; key: string };
export const PESTEL: Pestel[] = [
  {
    letter: "P", axe: "Politique",
    summary: "Santé animale encadrée (Animal Health Law UE 2016/429, Code rural). L'UE soutient l'IA via l'AI Act.",
    key: "Ne pas être interprété comme un acte médical.",
  },
  {
    letter: "E", axe: "Économique",
    summary: "75 M d'animaux en France, 1 foyer sur 2. Pet tech en croissance ; concurrents centrés sur la localisation.",
    key: "Espace ouvert sur l'interprétation santé.",
  },
  {
    letter: "S", axe: "Socioculturel",
    summary: "L'animal est un membre de la famille ; attentes fortes de prévention et d'usages numériques.",
    key: "Demande d'une approche proactive du bien-être.",
  },
  {
    letter: "T", axe: "Technologique",
    summary: "Miniaturisation des capteurs, IA/ML, cloud et télémédecine convergent.",
    key: "Environnement technique favorable.",
  },
  {
    letter: "E", axe: "Environnemental",
    summary: "Impact du matériel (batterie, composants) et du numérique.",
    key: "Durabilité, recyclage, green IT.",
  },
  {
    letter: "L", axe: "Légal",
    summary: "RGPD, médecine vétérinaire réservée aux vétérinaires, AI Act, sécurité produit & bien-être animal.",
    key: "Outil d'aide à l'observation, pas de diagnostic auto.",
  },
];

/* ------------------------------------------------- MODÈLE ÉCONOMIQUE ---- */
export const ECON = {
  // Hypothèses explicites (modèle prévisionnel, à valider) : la marge porte sur
  // l'ABONNEMENT (le hardware est vendu ~au coût). Trois scénarios pilotés par
  // le churn (durée de vie) et le CAC.
  hypotheses: [
    "Abonnement : 9,90 €/mois (ordre de grandeur du marché : Tractive, Weenect).",
    "Marge contributive sur l'abonnement (après cloud, API LLM et pool vété).",
    "Durée de vie client = 1 / churn mensuel ; LTV = abo × durée de vie × marge.",
    "Le collier est vendu proche de son coût (BOM ≈ 50 €) : la rentabilité vient de l'abonnement récurrent.",
  ],
  rows: [
    { metric: "Marge contributive (abo)", opt: "78 %", base: "69 %", pess: "35 %" },
    { metric: "Durée de vie (churn)", opt: "≈ 48 mois", base: "≈ 30 mois", pess: "≈ 12 mois" },
    { metric: "CAC", opt: "≈ 35 €", base: "≈ 50 €", pess: "≈ 90 €" },
    { metric: "LTV : CAC", opt: "≈ 10×", base: "≈ 4×", pess: "≈ 0,5×" },
    { metric: "Payback", opt: "≈ 5 mois", base: "≈ 7 mois", pess: "non atteint *" },
  ],
  footnote:
    "* Scénario pessimiste : LTV:CAC < 1 → le client résilie (≈ 12 mois) avant d'avoir remboursé son coût d'acquisition. Le payback n'est donc jamais atteint : c'est précisément le scénario que le modèle doit éviter (réduire le churn et le CAC).",
  model:
    "Abonnement avec pool façon Spotify : une part fixe de l'abonnement finance le réseau vétérinaire, ce qui plafonne le coût vété par construction et protège la marge contributive.",
};

/* ------------------------------------------- BUDGET PRÉVISIONNEL (HW) --- */
// BOM prototype collier · Option D recommandée (circuit sur mesure LTE).
export const BOM = [
  { c: "ESP32 Dev Kit (MCU)", p: "≈ 11 €" },
  { c: "Module Quectel BG95-M2 (LTE)", p: "≈ 17 €" },
  { c: "Accéléromètre GY-291", p: "≈ 4 €" },
  { c: "Batterie LiPo 3,7 V 1000 mAh", p: "≈ 11 €" },
  { c: "Boîtier étanche IP67", p: "≈ 2 €" },
  { c: "Carte SIM Hologram", p: "2,95 €" },
  { c: "LED NeoPixel", p: "≈ 1 €" },
  { c: "PCB prototype", p: "≈ 0,50 €" },
];
export const BOM_TOTAL = "≈ 50 € / unité";
export const BOM_OPTIONS = [
  { o: "Option A · 2G, sans soudure", p: "≈ 67 €/u" },
  { o: "Option B · LTE, sans soudure", p: "≈ 181 €/u" },
  { o: "Option C · 2G, à souder", p: "≈ 55 €/u" },
  { o: "Option D · LTE sur mesure (retenue)", p: "≈ 50 €/u" },
];
export const BUDGET_NOTE =
  "Kit de développement initial : ≈ 106–111 € (investissement unique de prototypage). Côté logiciel, le projet s'appuie sur des crédits cloud étudiants et des briques open source ; les coûts récurrents (cloud, API LLM) sont maîtrisés et passent à l'échelle avec les abonnements.";
