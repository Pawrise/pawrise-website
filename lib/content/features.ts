// Fonctions attendues par lot du WBS (ce que chaque composant doit ACCOMPLIR).
// Source : page Confluence « Pawrise Care – High-Level Functions ».
// Décrit les features attendues de la solution pour faciliter l'implémentation.

export type FeatureGroup = {
  id: string;
  lot: string;
  sub: { id: string; title: string; fns: string[] }[];
};

export const FEATURES: FeatureGroup[] = [
  {
    id: "1",
    lot: "Pawrise Collar · Hardware",
    sub: [
      { id: "1.1", title: "Capteurs & mesures", fns: ["Mesurer et enregistrer la position GPS", "Détecter activité, immobilité, mouvements brusques", "Mesurer température et éventuellement rythme cardiaque", "Fournir des mesures précises et régulières"] },
      { id: "1.2", title: "Système embarqué", fns: ["Collecter les données capteurs en temps réel", "Optimiser la consommation énergétique", "Exécuter un firmware fiable", "Assurer une disponibilité continue"] },
      { id: "1.3", title: "Communication du collier", fns: ["Transmettre les données via BLE ou cellulaire", "Garantir la synchronisation malgré une perte de signal", "Sécuriser l'envoi (authentification + intégrité)", "Standardiser le format des messages"] },
      { id: "1.4", title: "Boîtier & conception physique", fns: ["Protéger contre eau, poussière et chocs (IP67)", "Offrir confort à l'animal (poids, forme)", "Intégrer les capteurs de façon stable", "Résister à un usage prolongé en extérieur"] },
      { id: "1.5", title: "Batterie & autonomie", fns: ["Assurer une autonomie maximale", "Permettre une recharge simple", "Adapter la consommation à l'usage", "Informer du niveau de batterie"] },
    ],
  },
  {
    id: "2",
    lot: "Collector & Firmware Communication",
    sub: [
      { id: "2.1", title: "Acquisition de données", fns: ["Récupérer les données brutes à intervalles réguliers", "Détecter des événements significatifs", "Conserver localement en cas de perte de connexion"] },
      { id: "2.2", title: "Transmission & protocoles", fns: ["Synchroniser avec l'app mobile", "Utiliser un protocole robuste vers le backend", "Transmettre en mode basse consommation", "Réessayer automatiquement en cas d'échec"] },
      { id: "2.3", title: "Sécurité", fns: ["Vérifier l'identité du collier avant transmission", "Garantir l'intégrité des données reçues", "Assurer un horodatage exact"] },
    ],
  },
  {
    id: "3",
    lot: "Backend & API Platform",
    sub: [
      { id: "3.1", title: "Ingestion des données", fns: ["Recevoir les données brutes du collier", "Normaliser, filtrer et nettoyer", "Gérer doublons, retards, incohérences", "Propager vers les modules d'analyse"] },
      { id: "3.2", title: "Stockage & modélisation", fns: ["Enregistrer en séries temporelles", "Maintenir un historique long terme", "Générer des agrégats"] },
      { id: "3.3", title: "API App & Vet", fns: ["Fournir GPS, activité, santé à l'app", "Fournir une vue structurée aux vétérinaires", "Alimenter alertes et recommandations"] },
      { id: "3.4", title: "Administration", fns: ["Gérer comptes et animaux", "Configurer les règles d'analyse", "Contrôler les accès propriétaire/vétérinaire"] },
    ],
  },
  {
    id: "4",
    lot: "Pawrise Care Engine · IA & Analyse",
    sub: [
      { id: "4.1", title: "Prétraitement", fns: ["Nettoyer les données (bruit, aberrations)", "Regrouper en fenêtres temporelles", "Détecter des signaux simples"] },
      { id: "4.2", title: "Analyse comportementale", fns: ["Établir un comportement normal par animal", "Détecter les anomalies d'activité/sommeil", "Mesurer l'évolution de la vitalité"] },
      { id: "4.3", title: "Analyse santé contextuelle", fns: ["Appliquer des règles vétérinaires validées", "Contextualiser selon race, âge, historique", "Identifier les écarts nécessitant vigilance"] },
      { id: "4.4", title: "Chat IA & expertise", fns: ["Résumer les données en explications claires", "Répondre via LLM + RAG sur base vétérinaire", "Escalader automatiquement en cas de doute", "Préparer un rapport pour consultation"] },
      { id: "4.5", title: "Export vétérinaire", fns: ["Générer un PDF clair et structuré", "Offrir un export numérique standardisé", "Organiser une chronologie médicale lisible"] },
    ],
  },
  {
    id: "5",
    lot: "Mobile App · Propriétaire",
    sub: [
      { id: "5.1", title: "Écran bien-être", fns: ["Afficher un score global de bien-être", "Présenter activité, sommeil, constantes", "Offrir une vue simple de l'état actuel"] },
      { id: "5.2", title: "Localisation", fns: ["Montrer la position GPS en temps réel", "Définir des zones sécurisées + alertes", "Afficher l'historique des déplacements"] },
      { id: "5.3", title: "Notifications & alertes", fns: ["Prévenir des signaux faibles", "Alerter d'un comportement anormal", "Rappeler les soins (vaccins, traitements)"] },
      { id: "5.4", title: "Chat & accompagnement", fns: ["Accéder au chat IA", "Interaction fluide utilisateur ↔ expert", "Mise en relation avec un vétérinaire partenaire"] },
    ],
  },
  {
    id: "6",
    lot: "Vet Portal · Interface Vétérinaire",
    sub: [
      { id: "6.1", title: "Vue patient", fns: ["Regrouper les informations médicales", "Fournir l'historique détaillé des capteurs", "Mettre en avant les tendances"] },
      { id: "6.2", title: "Analyse professionnelle", fns: ["Consulter les alertes générées", "Lire et compléter le rapport automatique", "Ajouter des notes professionnelles"] },
      { id: "6.3", title: "Collaboration", fns: ["Faciliter le dialogue propriétaire ↔ vétérinaire", "Proposer des recommandations ciblées", "Suivre l'évolution dans le temps"] },
    ],
  },
  {
    id: "7",
    lot: "Infrastructure & Ops",
    sub: [
      { id: "7.1", title: "Hébergement", fns: ["Exécuter les services de façon fiable et scalable", "Gérer les environnements (dev/test/prod)", "Garantir la disponibilité"] },
      { id: "7.2", title: "Monitoring", fns: ["Surveiller performances et usage des APIs", "Détecter rapidement les anomalies", "Tracer les erreurs"] },
      { id: "7.3", title: "CI/CD", fns: ["Automatiser tests et déploiements", "Gérer les versions", "Faciliter la livraison continue"] },
    ],
  },
  {
    id: "8",
    lot: "Data, Privacy & Compliance",
    sub: [
      { id: "8.1", title: "Protection des données", fns: ["Sécuriser les données personnelles", "Chiffrer en transit et au repos", "Respecter le RGPD"] },
      { id: "8.2", title: "Transparence & éthique", fns: ["Garantir que l'IA n'émet jamais de diagnostic", "Fournir des explications lisibles", "Assurer la traçabilité des alertes"] },
    ],
  },
  {
    id: "9",
    lot: "Business & User Lifecycle",
    sub: [
      { id: "9.1", title: "Onboarding & appairage", fns: ["Créer un compte simplement et en sécurité", "Guider la connexion du collier", "Faciliter le profilage de l'animal"] },
      { id: "9.2", title: "Abonnement & facturation", fns: ["Gérer abonnements et paiements", "Consulter factures et statut", "Sécuriser les transactions"] },
      { id: "9.3", title: "Support client", fns: ["Contacter le support simplement", "Répondre aux questions fréquentes"] },
      { id: "9.4", title: "Provisioning matériel", fns: ["Activer un collier en sécurité", "Gérer remplacement et désactivation"] },
      { id: "9.5", title: "Partenaires vétérinaires", fns: ["Onboarder un vétérinaire partenaire", "Attribuer les demandes selon disponibilité", "Garantir un retour d'expérience"] },
    ],
  },
];
