// Contenu Business & Stratégie · synthèse SWOT, PESTEL, marché, positionnement,
// modèle économique et budget prévisionnel.

/* ----------------------------------------------- PROPOSITION DE VALEUR --- */
export const VALUE = {
  pitch:
    "Les concurrents (Tractive, Weenect, Invoxia) ne se limitent plus au GPS : ils embarquent aussi des capteurs de santé, mais s'arrêtent à la donnée brute. Pawrise Care interprète : GPS et capteurs de santé, plus une lecture accompagnée par l'IA et le vétérinaire pour orienter le propriétaire vers le bon soin, au bon moment. On ne court pas après la course aux capteurs, notre valeur est l'explicabilité.",
  ocean:
    "Stratégie océan bleu : ne pas affronter le marché GPS saturé, mais ouvrir la passerelle propriétaire ↔ vétérinaire (PDF normalisé, suivi longitudinal), un espace que les acteurs établis ne couvrent pas.",
  piliers: [
    { t: "Prévention", d: "Détecter les signaux faibles avant qu'ils n'empirent." },
    { t: "Orientation non-diagnostique", d: "Aide à l'observation, jamais un acte médical." },
    { t: "Réseau vétérinaire", d: "Escalade vers un professionnel avec un dossier prêt à l'emploi, rémunéré par une part fixe des abonnements (pool)." },
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
  { key: "SO", title: "Offensif · Forces × Opportunités", tone: "pos", text: "Viser les assureurs animaliers : notre suivi continu et le dossier vétérinaire réduisent leurs sinistres, et nos données de santé nourrissent leur tarification. On gagne à la fois un canal de distribution et un revenu B2B, sur un marché de l'assurance qui décolle." },
  { key: "ST", title: "Défensif · Forces × Menaces", tone: "pos", text: "Ne pas livrer la guerre des capteurs, déjà gagnée par Tractive et Invoxia avec plus de moyens. On se protège sur l'orientation accompagnée et le réseau vétérinaire : un pur acteur hardware ne peut pas le copier sans nouer lui aussi des partenariats vétérinaires longs à construire." },
  { key: "WO", title: "Rattrapage · Faiblesses × Opportunités", tone: "neg", text: "Transformer le démarrage à froid en boucle de données : les premiers cabinets et assureurs partenaires apportent des cas réels et du co-financement, ce qui fiabilise l'IA et le matériel bien plus vite qu'en avançant seuls." },
  { key: "WT", title: "Vigilance · Faiblesses × Menaces", tone: "neg", text: "Sécuriser les points faibles avant de grandir : garder le LLM derrière une couche d'abstraction (changer de fournisseur si besoin), documenter les garde-fous pour encaisser un durcissement réglementaire sans tout refaire, et prouver la rentabilité sur un petit périmètre avant de produire le collier en volume." },
];

/* ---------------------------------------------------------- PESTEL ------ */
// Analyse de l'environnement macro. Fil conducteur : orienter, jamais diagnostiquer.
// Le PESTEL reste macro ; la concurrence directe est traitée dans le SWOT.
export type Pestel = { letter: string; axe: string; summary: string; key: string };
export const PESTEL: Pestel[] = [
  {
    letter: "P", axe: "Politique",
    summary: "L'environnement politique est porteur : la France (France 2030, BPI) et l'UE financent l'innovation en IA et en e-santé. Le bien-être animal est devenu une priorité publique (loi du 30 novembre 2021 contre la maltraitance), et la souveraineté des données de santé monte dans le débat.",
    key: "Un terrain favorable, à condition d'héberger les données dans le respect de la souveraineté européenne.",
  },
  {
    letter: "E", axe: "Économique",
    summary: "Le marché animalier est large et résilient : on ne réduit pas facilement le budget d'un animal vu comme un membre de la famille. La pet tech croît, portée par le suivi connecté. Point de vigilance : le modèle repose sur un abonnement récurrent (~10 €/mois) dans un contexte de lassitude des abonnements.",
    key: "Marché porteur, mais la maîtrise du churn et du coût d'acquisition est décisive.",
  },
  {
    letter: "S", axe: "Socioculturel",
    summary: "L'animal est désormais un membre à part entière de la famille : les propriétaires veulent comprendre son comportement et prévenir les problèmes plutôt que les subir. Les usages numériques (apps, objets connectés) sont entrés dans les mœurs, ce qui abaisse la barrière à l'adoption.",
    key: "Une demande de prévention proactive qui colle exactement à notre proposition.",
  },
  {
    letter: "T", axe: "Technologique",
    summary: "Tout converge pour rendre le produit crédible : miniaturisation des capteurs, progrès de l'IA et du machine learning pour détecter les anomalies, cloud et apps pour restituer simplement, et montée de la télémédecine vétérinaire. Réserve importante : mesurer des constantes fiables sur un animal qui bouge, poilu et de morphologie variable, reste un vrai verrou technique.",
    key: "Environnement technique favorable, mais la fiabilité de la mesure physiologique est le risque central à maîtriser.",
  },
  {
    letter: "E", axe: "Environnemental",
    summary: "Fabriquer un objet électronique a un impact qu'il faut limiter par l'éco-conception (matériaux non nocifs, batterie durable, réparabilité), dans un cadre réglementé : Règlement Batteries (UE) 2023/1542, directive DEEE, indice de réparabilité. Le numérique a lui aussi une empreinte, d'où des pratiques de Green IT (traitements optimisés, stockage limité au nécessaire).",
    key: "Durabilité du matériel et sobriété numérique, autant pour la conformité que pour l'image.",
  },
  {
    letter: "L", axe: "Légal",
    summary: "Quatre cadres structurent le produit : le RGPD (les données de l'animal restent indirectement liées au propriétaire), le Code rural (le diagnostic est réservé aux vétérinaires), l'AI Act (IA transparente, pas de décision automatisée assimilable à un diagnostic), et la sécurité produit via le règlement RSGP/GPSR (UE) 2023/988 (qui remplace l'ancienne directive depuis le 13 décembre 2024).",
    key: "Tout repose sur la frontière orienter / diagnostiquer : on aide à observer, on ne pose jamais d'acte médical.",
  },
];

// Synthèse : hiérarchisation des facteurs les plus structurants.
export type PestelRank = { dim: string; facteur: string; nature: "Opportunité" | "Vigilance" | "Contrainte"; impact: string; horizon: string };
export const PESTEL_SYNTHESE: PestelRank[] = [
  { dim: "P · Politique", facteur: "Soutien public à l'IA et à l'e-santé (France 2030, BPI)", nature: "Opportunité", impact: "Moyen", horizon: "Moyen terme" },
  { dim: "E · Économique", facteur: "Marché large, résilient et en croissance (pet tech)", nature: "Opportunité", impact: "Fort", horizon: "Court terme" },
  { dim: "E · Économique", facteur: "Lassitude des abonnements / disposition à payer", nature: "Vigilance", impact: "Fort", horizon: "Court terme" },
  { dim: "S · Socioculturel", facteur: "Humanisation de l'animal + adoption du numérique", nature: "Opportunité", impact: "Fort", horizon: "Court terme" },
  { dim: "T · Technologique", facteur: "Convergence capteurs / IA / cloud / télémédecine", nature: "Opportunité", impact: "Fort", horizon: "Moyen terme" },
  { dim: "T · Technologique", facteur: "Fiabilité de la mesure physiologique", nature: "Contrainte", impact: "Fort", horizon: "Court terme" },
  { dim: "E · Environnemental", facteur: "Réglementations matériel (Batteries 2023/1542, DEEE)", nature: "Contrainte", impact: "Moyen", horizon: "Moyen terme" },
  { dim: "L · Légal", facteur: "Frontière diagnostic / non-diagnostic (Code rural, AI Act)", nature: "Contrainte", impact: "Fort", horizon: "Court terme" },
  { dim: "L · Légal", facteur: "Conformité RGPD & sécurité produit (UE 2023/988)", nature: "Contrainte", impact: "Moyen", horizon: "Court terme" },
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
    "Le collier est vendu proche de son coût (BOM ≈ 56 €) : la rentabilité vient de l'abonnement récurrent.",
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
// Composants alignés sur la page IoT (sélection détaillée du document hardware).
export const BOM = [
  { c: "ESP32-S3 (MCU)", p: "≈ 9 €" },
  { c: "SIM7000E (modem LTE-M + GPS intégré)", p: "≈ 16 €" },
  { c: "IMU LSM6DSOX (accéléro + gyro)", p: "≈ 4 €" },
  { c: "Capteur température TMP117", p: "≈ 4 €" },
  { c: "Capteur cardiaque MAX30102 (option)", p: "≈ 3 €" },
  { c: "Mémoire flash 128 Mo (SPI)", p: "≈ 1,50 €" },
  { c: "Batterie LiPo 2000 mAh + PMU", p: "≈ 12 €" },
  { c: "Boîtier étanche IP67", p: "≈ 2 €" },
  { c: "LED NeoPixel", p: "≈ 1 €" },
  { c: "PCB prototype", p: "≈ 0,50 €" },
  { c: "Carte SIM IoT 1NCE", p: "≈ 3 €" },
];
export const BOM_TOTAL = "≈ 56 € / unité";
export const BOM_OPTIONS = [
  { o: "Option A · 2G, sans soudure", p: "≈ 73 €/u" },
  { o: "Option B · LTE, sans soudure", p: "≈ 187 €/u" },
  { o: "Option C · 2G, à souder", p: "≈ 61 €/u" },
  { o: "Option D · LTE sur mesure (retenue)", p: "≈ 56 €/u" },
];
export const BUDGET_NOTE =
  "Kit de développement initial : ≈ 106–111 € (investissement unique de prototypage). Côté logiciel, le projet s'appuie sur des briques open source et un hébergement souverain ; les coûts d'exploitation ci-dessous restent maîtrisés et passent à l'échelle avec les abonnements.";

/* --------------------------------------- BUDGET CLOUD & EXPLOITATION ---- */
// Coût annuel d'exploitation d'une infra de PRODUCTION (produit lancé), pas de
// découpage par phase. Hébergement Hetzner auto-géré (K8s + Terraform), ligne
// ARM CAX (Ampere Altra). Prix : tarifs publics Hetzner juin 2026. IA = Azure
// OpenAI + Cohere (poste variable, croît avec les abonnements).
export type CloudCost = { poste: string; detail: string; cout: string };
export const CLOUD_BUDGET: CloudCost[] = [
  { poste: "Cluster Kubernetes (auto-géré)", detail: "1× CAX21 control-plane + 2× CAX31 workers (ARM Ampere, 8 vCPU / 16 Go)", cout: "≈ 630 €/an" },
  { poste: "Sauvegardes & volumes", detail: "volumes bloc ~150 Go (0,057 €/Go) + backups automatiques (+20 %)", cout: "≈ 230 €/an" },
  { poste: "Load balancer + IP publique", detail: "LB11 (répartition de charge, TLS)", cout: "≈ 72 €/an" },
  { poste: "Sauvegardes hors-site", detail: "Storage Box (rétention longue durée)", cout: "≈ 60 €/an" },
  { poste: "Modèle de langage (IA)", detail: "Azure OpenAI + Cohere · ~0,03 à 0,05 €/conversation (variable)", cout: "≈ 600 €/an" },
  { poste: "Nom de domaine", detail: ".com (TLS Let's Encrypt gratuit)", cout: "≈ 12 €/an" },
];
export const CLOUD_BUDGET_TOTAL = "≈ 1 600 €/an";
export const CLOUD_BUDGET_NOTE =
  "Coût d'exploitation d'une infrastructure de production sur un an. Hébergement 100 % Hetzner (souverain, UE) sur la ligne ARM CAX (Ampere Altra), la plus rentable après la hausse tarifaire Hetzner du 15 juin 2026 (l'ARM a bien moins augmenté que l'AMD/Intel). Seul le poste IA est variable : il croît avec le nombre de conversations, donc avec les abonnements qui le financent. Un hyperscaler équivalent (Azure AKS) coûterait de l'ordre de 4 à 6× plus. Prix serveurs : tarifs publics Hetzner Cloud, juin 2026.";
