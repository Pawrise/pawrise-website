// Contenu Équipe · matrice de compétences (extrait) et justification.

export const MEMBERS = ["Yassine", "Elarif", "Ibrahim", "Cyril", "Aaditya", "Hamid", "Nino", "Adam", "Oumar", "Abder."];

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
  { skill: "UI / UX Design", levels: [0, 2, 0, 0, 1, 2, 3, 3, 0, 1] },
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

export const PROFILES = [
  { who: "Yassine · PO & Responsable IA", why: "3 ans chez Smart Tribune sur NLP/LLM/NER en production → maîtrise du Care Engine, cœur différenciant. Profil architecte." },
  { who: "Elarif · Responsable Fullstack", why: "Fullstack complet (React/Angular/Vue, Python/Java), CI/CD chez Naval Group. En contact direct avec une vétérinaire partenaire → ancrage terrain." },
  { who: "Ibrahim & Cyril · IoT", why: "Ibrahim évolue vers l'IoT (capteurs, LoRaWAN) en alternance ; Cyril expert électronique/firmware embarqué → jonction collier ↔ backend." },
  { who: "Nino & Adam · IA/Data & Design", why: "Profils front/design forts (React, UI/UX) qui portent l'app propriétaire et l'expérience produit." },
  { who: "Oumar & Abderrahmane · Cloud/DevOps", why: "Infra, conteneurisation, CI/CD, monitoring → socle de livraison et observabilité." },
];

export const GAPS = [
  { gap: "Capteurs miniaturisés fiables", mit: "R&D matérielle + simulateur de collier en fallback." },
  { gap: "Base time-series (aucun expert)", mit: "Montée en compétence ciblée + choix d'outils éprouvés." },
  { gap: "Commercial / acquisition", mit: "Phase post-MVP ; partenariats (assurances, cabinets)." },
];

export const TEAM_STATS = [
  { k: "10", v: "membres" },
  { k: "5", v: "pôles" },
  { k: "2 ans", v: "horizon projet" },
];
