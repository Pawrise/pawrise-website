// Contenu Vision · synthèse du product brief.

export const VISION = {
  resume:
    "Pawrise Care est un collier connecté intelligent pour le suivi santé et bien-être des animaux de compagnie. Il combine un dispositif IoT (GPS, activité, température, rythme cardiaque), une plateforme backend de séries temporelles, un moteur d'analyse IA (Care Engine, LLM + RAG), une application mobile propriétaire et un Vet Portal.",
  nonNego:
    "Positionnement non-négociable : l'IA n'émet jamais de diagnostic médical. Elle structure, contextualise et oriente, et incite systématiquement à consulter un vétérinaire en cas de doute. C'est un outil d'orientation et de pré-consultation, pas un substitut clinique.",

  probleme: [
    "Les propriétaires manquent de visibilité continue et objective entre deux consultations.",
    "Les vétérinaires souffrent d'un manque d'historique structuré et d'une chronologie imprécise des symptômes.",
    "Les signaux faibles (fatigue, baisse d'activité, troubles du sommeil) sont détectés trop tard.",
  ],
  solution: [
    "Le collier transmet en continu vers le backend ; le moteur IA établit un profil de comportement normal par animal et détecte les anomalies.",
    "App propriétaire : score de bien-être, localisation, alertes, chat IA.",
    "Vet Portal : timeline médicale structurée, données brutes, résumé contextualisé non-diagnostique, export PDF.",
  ],

  personas: [
    { who: "Propriétaire d'animal", need: "Suivi rassurant et lisible, localisation, alertes en cas de signal faible." },
    { who: "Vétérinaire partenaire", need: "Historique structuré et contextualisé pour accélérer/préciser la consultation, sans substitution clinique." },
    { who: "Administrateur / Système", need: "Gestion des comptes, provisioning matériel, conformité." },
  ],

  mvpIn: [
    "Onboarding + appairage collier",
    "Collecte & transmission fiable des données",
    "Écran bien-être de base",
    "Localisation GPS + zones de sécurité",
    "Alertes santé essentielles",
    "Chat IA (RAG) avec garde-fous",
    "Vet Portal (timeline + résumé + export PDF)",
    "Conformité RGPD de base",
  ],
  mvpOut: [
    "Scoring de santé avancé multi-métriques",
    "Intégrations logiciels métiers vétérinaires",
    "Marketplace de vétérinaires",
    "Fonctionnalités sociales",
  ],

  killRisks: [
    { t: "Faux sentiment de sécurité", m: "Garde-fous d'escalade obligatoires." },
    { t: "Substitution au vétérinaire", m: "Cadrage produit strict : orientation, pas diagnostic." },
    { t: "Mauvaise interprétation des données", m: "Contextualisation systématique (race, âge, historique)." },
    { t: "Fiabilité matérielle du collier", m: "Simulateur en fallback, tests d'autonomie extérieure." },
  ],
};
