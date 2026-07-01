// Contenu Équipe · matrice de compétences (extrait) et justification.

export const MEMBERS = ["Yassine", "Elarif", "Ibrahim", "Cyril", "Aaditya", "Hamid", "Nino", "Adam", "Oumar", "Abderrahmane"];

// Niveaux : 3 expert · 2 intermédiaire · 1 débutant · 0 aucune expérience.
// Extrait haute-densité de la matrice complète (skills les plus discriminants).
export type SkillRow = { skill: string; levels: number[] };
export const SKILLS: SkillRow[] = [
  { skill: "Rust", levels: [3, 1, 0, 2, 0, 0, 0, 0, 0, 0] },
  { skill: "Python", levels: [3, 3, 1, 0, 1, 2, 2, 0, 1, 2] },
  { skill: "Microcontrôleurs (ESP32)", levels: [0, 0, 1, 3, 0, 0, 0, 0, 0, 0] },
  { skill: "Firmware C/C++ embarqué", levels: [1, 1, 0, 3, 0, 1, 0, 0, 0, 0] },
  { skill: "IA · NLP / LLM / RAG", levels: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { skill: "React / Next.js", levels: [0, 2, 2, 2, 2, 2, 3, 3, 2, 1] },
  { skill: "React Native / Expo", levels: [0, 2, 2, 2, 0, 3, 2, 0, 0, 0] },
  { skill: "Docker / Conteneurisation", levels: [3, 3, 2, 0, 1, 2, 0, 2, 1, 1] },
  { skill: "CI/CD", levels: [2, 3, 2, 0, 1, 2, 0, 2, 2, 1] },
  { skill: "Architecture logicielle", levels: [3, 2, 2, 3, 1, 2, 0, 3, 1, 2] },
  { skill: "UI / UX Design", levels: [0, 2, 0, 0, 1, 2, 1, 3, 0, 1] },
  { skill: "Réseau vétérinaire", levels: [0, 3, 0, 0, 0, 0, 2, 0, 0, 0] },
];

export const SKILL_LEGEND = [
  { lvl: 3, t: "Expert" },
  { lvl: 2, t: "Intermédiaire" },
  { lvl: 1, t: "Débutant" },
  { lvl: 0, t: "Aucune" },
];

export const APPROACH =
  "Équipe constituée autour d'un principe : chaque membre couvre un besoin réel du projet (IoT, Backend, IA, Mobile, Design, Cloud, Business) tout en étant passionné par la mission. Chacun pilote un pôle correspondant à ses forces et contribue transversalement.";

// founder : co-fondateurs / promoteurs du projet (Yassine, Ibrahim, Elarif).
export type Profile = { who: string; why: string; founder?: boolean };
export const PROFILES: Profile[] = [
  { who: "Yassine · PO & Responsable IA", founder: true, why: "3 ans chez Smart Tribune sur NLP/LLM/NER en production → maîtrise du Care Engine, cœur différenciant. Profil architecte (Rust, Python, Kafka, K8s)." },
  { who: "Elarif · Responsable Fullstack", founder: true, why: "Fullstack complet (React/Angular/Vue, Python/Java), CI/CD chez Naval Group (GitLab, SonarQube). En contact direct avec une vétérinaire partenaire → ancrage terrain." },
  { who: "Cyril · Responsable IoT / Hardware", why: "Profil le plus expérimenté en électronique embarquée : STM32/ESP32, firmware C/C++, MQTT. Projets persos alignés (BioLink, Centaurus). A déjà résolu les problèmes du collier." },
  { who: "Ibrahim · Responsable IoT", founder: true, why: "Fullstack évoluant vers l'IoT en alternance (capteurs d'irrigation, LoRaWAN) → jonction firmware collier ↔ backend." },
  { who: "Aaditya · Dev Backend / API", why: "Backend orienté API avec sensibilité métier : transformation des données capteurs en valeur. Rigueur et engagement long terme." },
  { who: "Hamid · Dev Fullstack", why: "Fullstack polyvalent (TypeScript/React/Express/Python), gestion VPS et CI/CD. Curiosité embarqué → backup du pôle IoT." },
  { who: "Nino · Responsable Data", why: "Data Engineer en alternance (ETL Python) → pipeline de données pour le moteur IA. Connaît une étudiante vétérinaire (validation données)." },
  { who: "Adam · Responsable Design & Market", why: "Double profil dev fullstack + designer/commercial. 3 ans de freelance (acquisition client), maîtrise Figma → du wireframe au code (refonte CapFiEurope v2)." },
  { who: "Oumar · Responsable Cloud & DevOps", why: "Infrastructure et déploiement : pipelines CI/CD, dev mobile Android. Garant du cycle de livraison (test, déploiement, monitoring)." },
  { who: "Abderrahmane · Cloud & DevOps (renfort)", why: "MSc Pro Cloud Epitech (même socle qu'Oumar, Azure). Backend Django/Node, UML/architecture. Évite le point de défaillance unique sur le pôle le plus exposé à la montée en charge." },
];

export const GAPS = [
  { gap: "Capteurs miniaturisés fiables", mit: "R&D matérielle + simulateur de collier en fallback." },
  { gap: "Base time-series (aucun expert)", mit: "Montée en compétence ciblée + choix d'outils éprouvés." },
  { gap: "Commercial / acquisition", mit: "Phase post-MVP ; partenariats (assurances, cabinets)." },
];

export const TEAM_STATS = [
  { k: "10", v: "membres" },
  { k: "5", v: "pôles" },
  { k: "20 mois", v: "horizon projet" },
];
