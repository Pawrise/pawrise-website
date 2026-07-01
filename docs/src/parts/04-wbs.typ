#import "../lib.typ": dtable, brand, mut, lime, zebra, hair
#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge
#import fletcher.shapes: rect as frect

= WBS & fonctions par lot

== Structure de découpage (WBS)

Le WBS décompose le projet en 9 lots techniques, du collier à la conformité, chacun subdivisé en sous-composants numérotés. L'arbre ci-après (page suivante, en paysage) présente la décomposition complète.

#let lotnode(n, t, subs) = align(left)[
  #text(fill: brand, weight: 800, size: 7pt)[#n · #t]
  #v(2.5pt)
  #for s in subs [ #text(fill: rgb("#37338f"), weight: 700, size: 6pt)[#s.at(0)] #text(fill: mut, size: 6pt)[#s.at(1)]#linebreak() ]
]

#page(flipped: true)[
  #align(center)[
    #v(4pt)
    #text(fill: brand, weight: 800, size: 12pt)[WBS · Décomposition du projet Pawrise Care]
    #v(10pt)
    #set text(size: 7pt)
    #diagram(
      spacing: (4mm, 22mm),
      node((4, 0), text(fill: white, weight: 900, size: 10pt)[Pawrise Care], fill: brand, stroke: none, shape: frect, corner-radius: 4pt, inset: 9pt),
      ..(
        ("1", "Collar · HW", (("1.1","Capteurs"), ("1.2","Système embarqué"), ("1.3","Communication"), ("1.4","Boîtier IP67"), ("1.5","Batterie"))),
        ("2", "Firmware", (("2.1","Acquisition"), ("2.2","Transmission"), ("2.3","Sécurité"))),
        ("3", "Backend & API", (("3.1","Ingestion"), ("3.2","Stockage"), ("3.3","API App/Vet"), ("3.4","Administration"))),
        ("4", "Care Engine IA", (("4.1","Prétraitement"), ("4.2","Comportement"), ("4.3","Santé contextuelle"), ("4.4","Chat IA"), ("4.5","Export véto"))),
        ("5", "Mobile App", (("5.1","Bien-être"), ("5.2","Localisation"), ("5.3","Notifications"), ("5.4","Chat"))),
        ("6", "Vet Portal", (("6.1","Vue patient"), ("6.2","Analyse pro"), ("6.3","Collaboration"))),
        ("7", "Infra & Ops", (("7.1","Hébergement"), ("7.2","Monitoring"), ("7.3","CI/CD"))),
        ("8", "Data & Privacy", (("8.1","Protection"), ("8.2","Transparence"))),
        ("9", "Business", (("9.1","Onboarding"), ("9.2","Abonnement"), ("9.3","Support"), ("9.4","Provisioning"), ("9.5","Partenaires véto"))),
      ).enumerate().map(((i, l)) => node((i, 1), lotnode(l.at(0), l.at(1), l.at(2)), fill: zebra, stroke: 0.6pt + hair, shape: frect, corner-radius: 3pt, inset: 5pt)),
      ..range(9).map(i => edge((4, 0), (i, 1), stroke: 0.6pt + hair.darken(20%))),
    )
  ]
]

== Fonctions attendues par lot

Ce que le système doit *accomplir* pour chaque composant (source : « High-Level Functions »). Description des features, indépendamment de l'implémentation.

#let feats = (
  ("Pawrise Collar · Hardware", "Mesurer GPS, activité, température et rythme cardiaque de façon régulière et précise ; exécuter un firmware fiable et sobre en énergie ; transmettre via BLE/cellulaire de façon sécurisée et synchronisée ; protéger contre eau, poussière et chocs (IP67) ; assurer une autonomie maximale avec information du niveau de batterie."),
  ("Collector & Firmware", "Récupérer les données à intervalles réguliers et détecter les événements significatifs ; conserver localement en cas de coupure ; synchroniser avec un protocole robuste basse consommation et réessayer en cas d'échec ; vérifier l'identité du collier, l'intégrité des données et un horodatage exact."),
  ("Backend & API", "Recevoir, normaliser, filtrer et dédupliquer les données ; enregistrer en séries temporelles avec historique long terme et agrégats ; exposer GPS/activité/santé à l'app et une vue structurée aux vétérinaires ; gérer comptes, animaux, règles d'analyse et contrôle d'accès."),
  ("Care Engine · IA", "Nettoyer et fenêtrer les données ; établir un comportement normal par animal et détecter les anomalies ; appliquer des règles vétérinaires contextualisées (race, âge, historique) ; répondre via LLM + RAG sur base validée, escalader en cas de doute ; générer un PDF/JSON structuré."),
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
