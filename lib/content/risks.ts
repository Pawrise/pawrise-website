// Contenu Risques · étude AMDEC (4 domaines) et Risk Map projet.

/* ---------------------------------------------------------- AMDEC -------- */
// IPR = G (gravité) × O (occurrence) × D (détection). Plus c'est haut, plus c'est urgent.
export type Amdec = {
  dom: string; code: string; sous: string; mode: string;
  cause: string; effet: string;
  g: number; o: number; d: number; action: string; resp: string;
};
// Source : tableau AMDEC officiel (AMDEC_Pawrise_Care.pdf) : 14 modes, 4 domaines.
export const AMDEC: Amdec[] = [
  {
    dom: "Collier", code: "H01", sous: "Batterie", mode: "Décharge rapide / autonomie insuffisante",
    cause: "Batterie sous-dimensionnée, firmware sans mode éco énergie, capteurs toujours actifs.",
    effet: "Collier éteint sans prévenir : perte de données en temps réel, fausse alerte d'absence d'activité.",
    g: 7, o: 6, d: 4, resp: "Cyril Porez (IoT)",
    action: "Mode éco énergie, alerte push à 20 % de batterie, dimensionner la batterie pour ≥ 5 jours d'autonomie.",
  },
  {
    dom: "Collier", code: "H02", sous: "Capteurs", mode: "Défaillance du capteur accéléromètre",
    cause: "Choc physique, humidité, mauvaise soudure, composant défectueux à réception.",
    effet: "Score d'activité figé ou nul : faux bien-être affiché, anomalie non détectée par l'IA.",
    g: 6, o: 4, d: 5, resp: "Cyril Porez (IoT)",
    action: "Tests de validation à réception (QA hardware), watchdog firmware si valeurs statiques > 30 min, boîtier IP67.",
  },
  {
    dom: "Collier", code: "H03", sous: "Capteur température / FC", mode: "Mesures erronées (faux positifs physiologiques)",
    cause: "Capteur mal positionné, fourrure épaisse, mouvement pendant la mesure.",
    effet: "Alerte de fièvre ou de tachycardie infondée : anxiété du propriétaire, sursollicitation vétérinaire.",
    g: 7, o: 7, d: 6, resp: "Nino Litim (IA) + Véto partenaire",
    action: "Plages normales validées avec le vétérinaire, moyenne glissante (5 mesures) avant alerte, disclaimer médical.",
  },
  {
    dom: "Collier", code: "H04", sous: "Communication BLE", mode: "Perte de synchronisation smartphone ↔ collier",
    cause: "Hors portée BLE (~10 m), interférences Wi-Fi / 2.4 GHz, app tuée en arrière-plan par l'OS.",
    effet: "Données non remontées : historique lacunaire, position GPS en retard, alertes de zone non déclenchées.",
    g: 5, o: 7, d: 4, resp: "Cyril Porez (IoT) + Elarif Inzoudine (DevOps)",
    action: "Cache local sur le collier (flash embarqué), sync auto à la reconnexion, notification si collier non vu > 1 h.",
  },
  {
    dom: "Transmission", code: "T01", sous: "API Backend", mode: "Indisponibilité du backend (downtime)",
    cause: "Déploiement raté, surcharge serveur, certificat SSL expiré, incident du cloud provider.",
    effet: "App inutilisable (pas de dashboard, pas d'alertes, pas de chat IA) : perte de confiance utilisateur.",
    g: 8, o: 4, d: 3, resp: "Elarif Inzoudine (DevOps) + Oumar Abakar (Cloud)",
    action: "CI/CD avec rollback auto, healthcheck, monitoring uptime, SLA cloud ≥ 99,5 %, alerte si downtime > 2 min.",
  },
  {
    dom: "Transmission", code: "T02", sous: "Time-series DB", mode: "Corruption ou perte de données capteurs",
    cause: "Race condition à l'ingestion, connexion coupée en cours d'écriture, migration DB sans backup.",
    effet: "Historique de santé incomplet : score de bien-être faussé, vétérinaire sans contexte pour orienter.",
    g: 8, o: 3, d: 4, resp: "Yassine El Gherrabi (Backend) + Oumar Abakar (Cloud)",
    action: "Écriture idempotente (UUID par mesure), backups quotidiens, tests d'intégrité post-migration, réplication.",
  },
  {
    dom: "Transmission", code: "T03", sous: "GPS WebSocket", mode: "Latence excessive du GPS en temps réel",
    cause: "Congestion réseau, WebSocket instable, fréquence de polling trop élevée vs batterie.",
    effet: "Carte GPS décalée de plusieurs minutes : le propriétaire ne localise pas l'animal, zones non fiables.",
    g: 6, o: 5, d: 5, resp: "Ibrahim Sylla / Hamid Bennacef (Full-stack)",
    action: "Fréquence GPS adaptative (plus rapide hors zone), reconnexion auto avec back-off exponentiel.",
  },
  {
    dom: "Moteur IA", code: "I01", sous: "Analyse comportementale", mode: "Faux négatif : anomalie non détectée",
    cause: "Seuils trop permissifs, données d'entraînement insuffisantes, animal au comportement atypique.",
    effet: "Problème de santé réel non signalé : retard de soin, aggravation de l'état de l'animal.",
    g: 9, o: 5, d: 6, resp: "Nino Litim + Adam Lamouri (Data/IA)",
    action: "Seuils calibrés avec le vétérinaire, baseline individuelle par animal, apprentissage de 2 semaines à l'onboarding.",
  },
  {
    dom: "Moteur IA", code: "I02", sous: "Analyse comportementale", mode: "Faux positif : alerte infondée",
    cause: "Seuils trop stricts, animal qui joue activement, capteur bruité non filtré.",
    effet: "Alertes excessives : fatigue d'alerte, sur-consultation vétérinaire, coût supplémentaire.",
    g: 5, o: 7, d: 5, resp: "Nino Litim + Adam Lamouri (Data/IA)",
    action: "Fenêtre de confirmation (anomalie persistante > N min), score de confiance affiché, feedback « fausse alerte ».",
  },
  {
    dom: "Moteur IA", code: "I03", sous: "Chat RAG vétérinaire", mode: "Réponse médicalement incorrecte du LLM",
    cause: "Hallucination du LLM, corpus vétérinaire incomplet ou non validé, prompt engineering insuffisant.",
    effet: "Conseil erroné suivi par le propriétaire : retard ou traitement inapproprié, risque juridique pour Pawrise.",
    g: 9, o: 5, d: 5, resp: "Yassine El Gherrabi (LLM/RAG) + Véto partenaire",
    action: "Corpus validé par le vétérinaire, disclaimer systématique, score de confiance RAG, escalade véto si confiance < seuil.",
  },
  {
    dom: "Moteur IA", code: "I04", sous: "Chat RAG vétérinaire", mode: "Indisponibilité ou latence excessive du LLM",
    cause: "Quota API dépassé, provider en maintenance, modèle self-hosted sous-dimensionné.",
    effet: "Chat IA inaccessible : utilisateur bloqué, escalade forcée vers le vétérinaire pour des questions mineures.",
    g: 6, o: 4, d: 3, resp: "Yassine El Gherrabi + Elarif Inzoudine",
    action: "Circuit breaker avec message dégradé, fallback FAQ statique, monitoring du quota API, alerte budget à 80 %.",
  },
  {
    dom: "Escalade", code: "E01", sous: "Déclenchement automatique", mode: "Escalade non déclenchée pour un cas urgent",
    cause: "Critères d'escalade trop restrictifs, bug du moteur de règles, anomalie non catégorisée.",
    effet: "Propriétaire non alerté de consulter un vrai vétérinaire : risque vital pour l'animal.",
    g: 10, o: 4, d: 5, resp: "Yassine El Gherrabi (PO/Backend) + Véto partenaire",
    action: "Critères revus avec le vétérinaire, tests E2E avec scénarios critiques simulés, alerte SMS en plus du push si gravité ≥ 8.",
  },
  {
    dom: "Escalade", code: "E02", sous: "Portail vétérinaire", mode: "Vétérinaire partenaire indisponible",
    cause: "Véto en consultation, nuit / week-end, résiliation du partenariat, absence non gérée par le système.",
    effet: "Cas sérieux en attente sans prise en charge : SLA non respecté, perte de confiance.",
    g: 8, o: 5, d: 4, resp: "Yassine El Gherrabi (PO) + Adam Lamouri (UX)",
    action: "Pool de vétérinaires (min. 2), statut de disponibilité en temps réel, transfert auto si non répondu en 15 min, véto de garde.",
  },
  {
    dom: "Escalade", code: "E03", sous: "Continuité des données", mode: "Données collier non accessibles au vétérinaire",
    cause: "Bug d'autorisation, données non synchronisées au moment de l'escalade, portail en maintenance.",
    effet: "Vétérinaire qui consulte sans contexte : orientation moins précise, perte de la valeur différenciatrice de Pawrise.",
    g: 7, o: 4, d: 4, resp: "Ibrahim Sylla / Hamid Bennacef + Elarif Inzoudine",
    action: "Export PDF auto à chaque escalade, cache des dernières 24 h accessible hors-ligne, tests d'intégration escalade → portail.",
  },
];

export const AMDEC_LEGEND = [
  { k: "G · Gravité", d: "Impact pour l'utilisateur ou l'animal (1 → 10)" },
  { k: "O · Occurrence", d: "Fréquence d'apparition (1 → 10)" },
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
// Source : registre officiel (RiskMap_PawriseCare_v3.xlsx) : 14 risques, 5 catégories.
// Plans de mitigation : politique Confluence = rédigés pour tout risque score ≥ 9.
// Rattachés aux actions déjà validées dans l'AMDEC et aux jalons de dé-risquage du Gantt.
// Les risques < 9 restent en surveillance (mitig vide).
export type Risk = {
  id: string; cat: string; label: string; p: number; i: number;
  mitig?: string; resp?: string;
};
export const RISKS: Risk[] = [
  {
    id: "R01", cat: "Technique", label: "Capteur FC non fiable sur l'animal", p: 4, i: 5,
    mitig: "Plages physiologiques validées avec le vétérinaire, moyenne glissante sur 5 mesures avant toute alerte, disclaimer médical systématique (cohérent avec l'AMDEC H03).",
    resp: "Cyril Porez (IoT) + Véto partenaire",
  },
  {
    id: "R02", cat: "Technique", label: "Bus factor : Cyril seul sur le hardware IoT (firmware)", p: 4, i: 5,
    mitig: "Documentation firmware versionnée, montée en compétence d'un second développeur en binôme sur le hardware, revues de code systématiques pour supprimer le point de défaillance unique.",
    resp: "Cyril Porez (IoT)",
  },
  {
    id: "R03", cat: "Technique", label: "Données d'entraînement insuffisantes : modèle IA peu fiable", p: 3, i: 4,
    mitig: "Baseline individuelle par animal, apprentissage de 2 semaines à l'onboarding, enrichissement progressif du dataset (cohérent avec l'AMDEC I01).",
    resp: "Nino Litim + Adam Lamouri (Data/IA)",
  },
  {
    id: "R04", cat: "Technique", label: "GPS : latence / dérive, temps réel non garanti", p: 3, i: 4,
    mitig: "Fréquence GPS adaptative (plus rapide hors zone), reconnexion automatique avec back-off exponentiel, tolérance d'affichage (cohérent avec l'AMDEC T03).",
    resp: "Ibrahim Sylla / Hamid Bennacef (Full-stack)",
  },
  {
    id: "R05", cat: "Technique", label: "BLE : perte de connexion collier-mobile", p: 3, i: 3,
    mitig: "Cache local sur le collier (flash embarqué), synchronisation automatique à la reconnexion, notification si le collier n'est pas vu depuis plus d'une heure (cohérent avec l'AMDEC H04).",
    resp: "Cyril Porez (IoT) + Elarif Inzoudine (DevOps)",
  },
  {
    id: "R06", cat: "Technique", label: "Dépassement du budget API LLM", p: 4, i: 2,
  },
  {
    id: "R07", cat: "Légal", label: "LLM génère un conseil médical erroné : responsabilité juridique", p: 3, i: 5,
    mitig: "Corpus vétérinaire validé, disclaimer systématique, score de confiance RAG, escalade vers le vétérinaire si la confiance passe sous le seuil (cohérent avec l'AMDEC I03).",
    resp: "Yassine El Gherrabi (LLM/RAG) + Véto partenaire",
  },
  {
    id: "R08", cat: "Légal", label: "Non-conformité RGPD (données de santé animale)", p: 2, i: 4,
  },
  {
    id: "R09", cat: "Marché", label: "Vétérinaire partenaire unique : rupture du partenariat", p: 3, i: 4,
    mitig: "Pool de vétérinaires partenaires (minimum 2), contrat-cadre, vétérinaire de garde pour assurer la continuité du service (cohérent avec l'AMDEC E02).",
    resp: "Yassine El Gherrabi (PO)",
  },
  {
    id: "R10", cat: "Marché", label: "Faible adoption : propriétaires pas prêts à payer", p: 2, i: 4,
  },
  {
    id: "R11", cat: "Marché", label: "Concurrence déjà positionnée (Tractive, Weenect)", p: 4, i: 2,
  },
  {
    id: "R12", cat: "Humain", label: "Départ ou indisponibilité d'un membre clé", p: 3, i: 4,
    mitig: "Documentation tenue à jour, binôme sur chaque brique critique, absence de point de défaillance unique dans l'équipe.",
    resp: "Yassine El Gherrabi (PO)",
  },
  {
    id: "R13", cat: "Planning", label: "Sous-estimation de la charge firmware : dérapage calendaire", p: 4, i: 3,
    mitig: "Buffer de planning, jalons de dé-risquage placés en début de phase (cf. Gantt), revue de charge hebdomadaire pour réajuster tôt.",
    resp: "Yassine El Gherrabi (PO) + Cyril Porez (IoT)",
  },
  {
    id: "R14", cat: "Planning", label: "Retard du prototype collier (composants / impression 3D)", p: 3, i: 3,
    mitig: "Composants commandés en avance, fournisseurs alternatifs identifiés, impression 3D internalisée pour ne pas dépendre d'un prestataire.",
    resp: "Cyril Porez (IoT)",
  },
];
export function riskZone(score: number) {
  if (score >= 15) return "crit";
  if (score >= 9) return "high";
  if (score >= 5) return "mod";
  return "low";
}
export const PROBA = ["", "Rare", "Peu probable", "Possible", "Probable", "Quasi certain"];
export const IMPACT = ["", "Insignifiant", "Mineur", "Modéré", "Majeur", "Catastrophique"];
