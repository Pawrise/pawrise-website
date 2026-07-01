#import "../lib.typ": dtable, brand, mut, lime, zebra

= WBS & fonctions par lot

== Structure de découpage (WBS)

Le WBS décompose le projet en 9 lots techniques, du collier à la conformité. Chaque lot regroupe ses sous-composants.

#let wbs = (
  ("1 · Pawrise Collar — Hardware", ("Capteurs & mesures (GPS, accéléro, température, cardio)", "Système embarqué (MCU, firmware, énergie)", "Communication (BLE, LTE-M, chiffrement)", "Boîtier & conception physique (IP67)", "Batterie & autonomie")),
  ("2 · Collector & Firmware Communication", ("Acquisition (lecture périodique, buffer edge)", "Transmission & protocoles (sync, retry)", "Sécurité (auth collier, intégrité, horodatage)")),
  ("3 · Backend & API Platform", ("Ingestion (API capteurs, normalisation)", "Stockage & modélisation (time-series, agrégats)", "API App & Vet", "Administration (comptes, animaux, règles)")),
  ("4 · Pawrise Care Engine — IA & Analyse", ("Prétraitement", "Analyse comportementale", "Analyse santé contextuelle", "Chat IA & expertise (LLM + RAG)", "Export vétérinaire (PDF, JSON)")),
  ("5 · Mobile App — Propriétaire", ("Écran bien-être", "Localisation (GPS, geofencing)", "Notifications & alertes", "Chat & accompagnement")),
  ("6 · Vet Portal — Interface vétérinaire", ("Vue patient", "Analyse professionnelle", "Collaboration")),
  ("7 · Infrastructure & Ops", ("Hébergement (cloud, Docker, scalabilité)", "Monitoring (logs, perfs, alertes)", "CI/CD (tests, build, déploiements)")),
  ("8 · Data, Privacy & Compliance", ("Protection des données (anonymisation, consentement)", "Transparence & éthique (pas de diagnostic auto)")),
  ("9 · Business & User Lifecycle", ("Onboarding & appairage", "Abonnement & facturation (Stripe)", "Support client", "Provisioning matériel", "Partenaires vétérinaires")),
)

#for lot in wbs [
  #block(breakable: false, spacing: 9pt)[
    #text(fill: brand, weight: 800, size: 10pt, lot.at(0))
    #v(2pt)
    #grid(columns: (1fr, 1fr), gutter: 4pt, ..lot.at(1).map(c => text(size: 8.7pt, fill: mut)[• #c]))
  ]
]

== Fonctions attendues par lot

Ce que le système doit *accomplir* pour chaque composant (source : « High-Level Functions »). Description des features, indépendamment de l'implémentation.

#let feats = (
  ("Pawrise Collar — Hardware", "Mesurer GPS, activité, température et rythme cardiaque de façon régulière et précise ; exécuter un firmware fiable et sobre en énergie ; transmettre via BLE/cellulaire de façon sécurisée et synchronisée ; protéger contre eau, poussière et chocs (IP67) ; assurer une autonomie maximale avec information du niveau de batterie."),
  ("Collector & Firmware", "Récupérer les données à intervalles réguliers et détecter les événements significatifs ; conserver localement en cas de coupure ; synchroniser avec un protocole robuste basse consommation et réessayer en cas d'échec ; vérifier l'identité du collier, l'intégrité des données et un horodatage exact."),
  ("Backend & API", "Recevoir, normaliser, filtrer et dédupliquer les données ; enregistrer en séries temporelles avec historique long terme et agrégats ; exposer GPS/activité/santé à l'app et une vue structurée aux vétérinaires ; gérer comptes, animaux, règles d'analyse et contrôle d'accès."),
  ("Care Engine — IA", "Nettoyer et fenêtrer les données ; établir un comportement normal par animal et détecter les anomalies ; appliquer des règles vétérinaires contextualisées (race, âge, historique) ; répondre via LLM + RAG sur base validée, escalader en cas de doute ; générer un PDF/JSON structuré."),
  ("Mobile App", "Afficher un score de bien-être et l'état du jour ; montrer la position GPS temps réel, les zones sécurisées et l'historique ; prévenir des signaux faibles et rappeler les soins ; donner accès au chat IA et à la mise en relation vétérinaire."),
  ("Vet Portal", "Regrouper les informations médicales et l'historique détaillé ; consulter les alertes, lire et compléter le rapport, ajouter des notes ; faciliter le dialogue propriétaire ↔ vétérinaire et le suivi longitudinal."),
  ("Infrastructure & Ops", "Exécuter les services de façon fiable et scalable, gérer les environnements ; surveiller performances et anomalies, tracer les erreurs ; automatiser tests, versions et déploiements."),
  ("Data, Privacy & Compliance", "Sécuriser et chiffrer les données personnelles (RGPD) ; garantir que l'IA n'émet jamais de diagnostic, fournir des explications lisibles et tracer les alertes."),
  ("Business & User Lifecycle", "Créer un compte et guider l'appairage ; gérer abonnements, paiements et factures ; offrir support et FAQ ; activer/remplacer un collier ; onboarder les vétérinaires partenaires et attribuer les demandes."),
)

#dtable(
  columns: (auto, 1fr),
  headers: ("Lot", "Fonctions attendues"),
  rows: feats,
)
