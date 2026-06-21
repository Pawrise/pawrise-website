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
  figures: [
    { k: "75 M", v: "animaux de compagnie en France" },
    { k: "≈ 7,5 M", v: "chiens" },
    { k: "≈ 15 M", v: "chats" },
    { k: "1 foyer / 2", v: "possède au moins un animal" },
  ],
  note:
    "Marché pet tech en forte croissance, porté par le « quantified self » appliqué aux animaux. Les concurrents (Tractive Dog 6, Weenect XT, Invoxia Minitailz, Jag S2) restent centrés sur la géolocalisation ; l'interprétation santé reste un espace ouvert. Sources : FACCO, Google Trends.",
};

/* ----------------------------------------------------------- SWOT ------- */
export type SwotQuad = { key: string; title: string; tone: "pos" | "neg"; items: string[] };
export const SWOT: SwotQuad[] = [
  {
    key: "S",
    title: "Forces",
    tone: "pos",
    items: [
      "Concept différenciant : GPS + santé + interprétation vétérinaire",
      "Expertise IA dans l'équipe (NLP / LLM / RAG)",
      "Vétérinaire partenaire réel → crédibilité scientifique",
      "Vision prévention & bien-être animal",
      "Prototypage par simulation capteurs",
      "Approche hybride : produit + plateforme vétérinaire",
    ],
  },
  {
    key: "W",
    title: "Faiblesses",
    tone: "neg",
    items: [
      "Développement hardware complexe et coûteux",
      "Besoin de données animales massives pour fiabiliser l'IA",
      "Capteurs fiables et miniaturisés difficiles à obtenir",
      "Risque de responsabilité si mauvaise interprétation",
      "Rentabilité dépendante de l'abonnement",
      "Marché où des marques sont déjà installées",
    ],
  },
  {
    key: "O",
    title: "Opportunités",
    tone: "pos",
    items: [
      "Marché pet tech en forte croissance",
      "Quantified self appliqué aux animaux",
      "Essor de la télémédecine vétérinaire",
      "Partenariats avec les assurances animales",
      "Intégration dans les cabinets vétérinaires",
      "Expansion : refuges, élevages, chiens de travail",
    ],
  },
  {
    key: "T",
    title: "Menaces",
    tone: "neg",
    items: [
      "Concurrence établie (Tractive, Invoxia, Weenect)",
      "Copie de la fonction d'analyse IA par les gros acteurs",
      "Contraintes réglementaires (conseil médical)",
      "Fiabilité des capteurs physiologiques",
      "Perte de confiance si l'IA conseille mal",
      "Marché hardware concurrentiel à faible marge",
    ],
  },
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
  rows: [
    { metric: "Marge brute", opt: "89 %", base: "69 %", pess: "21 %" },
    { metric: "LTV : CAC", opt: "22×", base: "5,4×", pess: "0,4×" },
    { metric: "Payback", opt: "2 mois", base: "6 mois", pess: "42 mois" },
  ],
  model:
    "Abonnement avec pool façon Spotify : une part fixe de l'abonnement finance le réseau vétérinaire, ce qui plafonne le coût vété par construction et protège la marge.",
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
