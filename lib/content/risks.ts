// Contenu Risques · étude AMDEC (4 domaines) et Risk Map projet.

/* ---------------------------------------------------------- AMDEC -------- */
// IPR = G (gravité) × O (occurrence) × D (détection). Plus c'est haut, plus c'est urgent.
export type Amdec = {
  dom: string; code: string; mode: string;
  g: number; o: number; d: number; action: string;
};
export const AMDEC: Amdec[] = [
  { dom: "Collier", code: "H03", mode: "Défaut d'étanchéité (IP67)", g: 7, o: 3, d: 6, action: "Tests d'immersion, validation boîtier" },
  { dom: "Collier", code: "H04", mode: "Mesure cardio/température erronée", g: 6, o: 4, d: 5, action: "Calibration + seuils de plausibilité" },
  { dom: "Collier", code: "H01", mode: "Décharge batterie prématurée", g: 6, o: 5, d: 3, action: "Deep sleep + alerte niveau bas" },
  { dom: "Transmission", code: "T01", mode: "Perte de connexion prolongée", g: 5, o: 6, d: 3, action: "Buffer edge + resend" },
  { dom: "Transmission", code: "T03", mode: "Collier non authentifié injecte des données", g: 8, o: 2, d: 5, action: "PKI step-ca, mTLS" },
  { dom: "Moteur IA", code: "I01", mode: "Faux négatif (urgence non détectée)", g: 9, o: 3, d: 7, action: "Garde-fous d'escalade, seuils prudents" },
  { dom: "Moteur IA", code: "I03", mode: "Hallucination / conseil hors-cadre", g: 8, o: 3, d: 6, action: "Guardrail 3 couches, RAG borné" },
  { dom: "Moteur IA", code: "I02", mode: "Faux positif anxiogène", g: 4, o: 5, d: 4, action: "Contextualisation, message rassurant" },
  { dom: "Escalade", code: "E01", mode: "Escalade non prise à temps", g: 8, o: 3, d: 5, action: "File de garde, SLA, relance" },
  { dom: "Escalade", code: "E02", mode: "Contexte/PDF incomplet transmis", g: 5, o: 4, d: 4, action: "Gabarit normalisé + validation" },
];

export const AMDEC_LEGEND = [
  { k: "G · Gravité", d: "Impact si la défaillance survient (1 → 10)" },
  { k: "O · Occurrence", d: "Probabilité d'apparition (1 → 10)" },
  { k: "D · Détection", d: "1 = très détectable → 10 = indétectable" },
];
export function ipr(a: Amdec) { return a.g * a.o * a.d; }
export function iprLevel(v: number) {
  if (v >= 100) return "crit";
  if (v >= 60) return "high";
  if (v >= 30) return "mod";
  return "low";
}

/* -------------------------------------------------------- RISK MAP ------- */
// Score = P (probabilité 1-5) × I (impact 1-5).
export type Risk = { id: string; label: string; p: number; i: number };
export const RISKS: Risk[] = [
  { id: "R1", label: "Retard keynote", p: 3, i: 4 },
  { id: "R2", label: "Hardware complexe → retard IoT", p: 4, i: 4 },
  { id: "R3", label: "RAG plus long que prévu", p: 3, i: 3 },
  { id: "R4", label: "Intégration tardive → bugs", p: 3, i: 4 },
  { id: "R5", label: "Responsabilité (mauvais conseil)", p: 2, i: 5 },
  { id: "R6", label: "Capteurs peu fiables", p: 3, i: 4 },
  { id: "R7", label: "Concurrence copie l'IA", p: 3, i: 3 },
  { id: "R8", label: "Désengagement d'un membre", p: 2, i: 3 },
  { id: "R9", label: "Marge hardware faible", p: 3, i: 2 },
  { id: "R10", label: "Fuite de données (RGPD)", p: 2, i: 5 },
];
export function riskZone(score: number) {
  if (score >= 15) return "crit";
  if (score >= 9) return "high";
  if (score >= 5) return "mod";
  return "low";
}
export const PROBA = ["", "Rare", "Peu probable", "Possible", "Probable", "Quasi certain"];
export const IMPACT = ["", "Insignifiant", "Mineur", "Modéré", "Majeur", "Catastrophique"];
