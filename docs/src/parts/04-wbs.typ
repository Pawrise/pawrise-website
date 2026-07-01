#import "../lib.typ": dtable, brand, mut, lime, zebra

= WBS & fonctions par lot

== Structure de découpage (WBS)

Le WBS décompose le projet en 9 lots techniques, du collier à la conformité, chacun subdivisé en sous-composants numérotés.

#let lot(n, titre, subs) = block(breakable: false, spacing: 8pt, width: 100%, inset: (left: 2pt))[
  #block(fill: brand, radius: 3pt, inset: (x: 8pt, y: 4pt), width: 100%)[
    #text(fill: white, weight: 800, size: 9.5pt)[#n · #titre]
  ]
  #v(1pt)
  #for s in subs [
    #grid(columns: (2.6em, 1fr), gutter: 0pt,
      text(fill: rgb("#37338f"), weight: 700, size: 8.5pt, s.at(0)),
      text(fill: mut, size: 8.5pt, s.at(1)),
    )
    #v(1.5pt)
  ]
]

#grid(columns: (1fr, 1fr), gutter: 14pt,
  [
    #lot("1", "Pawrise Collar — Hardware", (("1.1", "Capteurs & mesures"), ("1.2", "Système embarqué"), ("1.3", "Communication"), ("1.4", "Boîtier & conception physique"), ("1.5", "Batterie & autonomie")))
    #lot("2", "Collector & Firmware", (("2.1", "Acquisition de données"), ("2.2", "Transmission & protocoles"), ("2.3", "Sécurité")))
    #lot("3", "Backend & API Platform", (("3.1", "Ingestion des données"), ("3.2", "Stockage & modélisation"), ("3.3", "API App & Vet"), ("3.4", "Administration")))
    #lot("4", "Care Engine — IA & Analyse", (("4.1", "Prétraitement"), ("4.2", "Analyse comportementale"), ("4.3", "Analyse santé contextuelle"), ("4.4", "Chat IA & expertise"), ("4.5", "Export vétérinaire")))
    #lot("5", "Mobile App — Propriétaire", (("5.1", "Écran bien-être"), ("5.2", "Localisation"), ("5.3", "Notifications & alertes"), ("5.4", "Chat & accompagnement")))
  ],
  [
    #lot("6", "Vet Portal — Interface véto", (("6.1", "Vue patient"), ("6.2", "Analyse professionnelle"), ("6.3", "Collaboration")))
    #lot("7", "Infrastructure & Ops", (("7.1", "Hébergement"), ("7.2", "Monitoring"), ("7.3", "CI/CD")))
    #lot("8", "Data, Privacy & Compliance", (("8.1", "Protection des données"), ("8.2", "Transparence & éthique")))
    #lot("9", "Business & User Lifecycle", (("9.1", "Onboarding & appairage"), ("9.2", "Abonnement & facturation"), ("9.3", "Support client"), ("9.4", "Provisioning matériel"), ("9.5", "Partenaires vétérinaires")))
  ],
)

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
