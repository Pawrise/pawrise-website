#import "../lib.typ": dtable, keep, brand, mut, lime, zebra, hair
#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge
#import fletcher.shapes: rect as frect

= WBS & fonctions par epic

Le découpage du travail suit directement la décomposition produit issue de la méthode BMAD : *11 epics* regroupant *66 user stories*, chacune portant des critères d'acceptation (Given/When/Then) et couvrant des exigences fonctionnelles et non fonctionnelles précises (FR/NFR, détail en partie Backlog). Le WBS ci-dessous organise ces epics par domaine ; chaque epic est une brique livrable de bout en bout.

== Structure de découpage (WBS)

Arbre du projet (page suivante, en paysage) : la racine se décompose en 11 epics, colorés par domaine, avec leur nombre de user stories et leur périmètre (MVP ou post-MVP).

#let dcolor(d) = (
  if d == "cli" { rgb("#eaf1fb") }
  else if d == "edge" { rgb("#e7f6f4") }
  else if d == "ai" { rgb("#f0edfb") }
  else if d == "svc" { rgb("#eef7ee") }
  else if d == "ext" { rgb("#fdf3e7") }
  else if d == "rose" { rgb("#fdeef1") }
  else { rgb("#ecebf6") }
)
#let epicnode(n, t, us, mvp) = align(center)[
  #text(fill: brand, weight: 900, size: 8pt)[E#n]\
  #text(fill: brand, weight: 700, size: 5.8pt)[#t]\
  #text(fill: mut, size: 5.5pt)[#us US · #mvp]
]
#let epics = (
  ("1", "Onboarding & appairage", "7", "MVP", "cli"),
  ("2", "Collecte & stockage", "6", "MVP", "edge"),
  ("3", "Bien-être & activité", "4", "MVP", "cli"),
  ("4", "Localisation & zones", "5", "MVP", "cli"),
  ("5", "Anomalies & alertes", "5", "MVP", "ai"),
  ("6", "Assistant IA", "4", "MVP", "ai"),
  ("7", "Vet Portal", "7", "MVP", "svc"),
  ("8", "Abonnement & support", "7", "post", "ext"),
  ("9", "Conformité RGPD", "5", "MVP", "rose"),
  ("10", "Téléconsultation", "7", "post", "svc"),
  ("11", "Plateforme & Ops", "9", "MVP", "data"),
)

#page(flipped: true)[
  #align(center)[
    #v(2pt)
    #text(fill: brand, weight: 800, size: 12pt)[WBS · Décomposition produit Pawrise Care (11 epics · 66 US)]
    #v(8pt)
    #set text(size: 6.5pt)
    #diagram(
      spacing: (1.6mm, 20mm),
      node((5, 0), text(fill: white, weight: 900, size: 10pt)[Pawrise Care], fill: brand, stroke: none, shape: frect, corner-radius: 4pt, inset: 9pt),
      ..epics.enumerate().map(((i, e)) => node((i, 1), epicnode(e.at(0), e.at(1), e.at(2), e.at(3)), fill: dcolor(e.at(4)), stroke: 0.6pt + hair, shape: frect, corner-radius: 3pt, inset: 4pt)),
      ..range(11).map(i => edge((5, 0), (i, 1), stroke: 0.6pt + hair.darken(20%))),
    )
    #v(10pt)
    #set text(size: 7pt)
    #grid(columns: 7, column-gutter: 10pt, row-gutter: 4pt,
      ..(
        ("cli", "Client & App"), ("edge", "IoT & Données"), ("ai", "IA & Santé"),
        ("svc", "Écosystème vété"), ("ext", "Business"), ("rose", "Conformité"), ("data", "Plateforme/Ops"),
      ).map(l => box[#box(baseline: 1pt, rect(width: 8pt, height: 8pt, radius: 2pt, fill: dcolor(l.at(0)), stroke: 0.5pt + hair)) #l.at(1)])
    )
  ]
]

== Fonctions attendues par epic

Ce que chaque epic doit accomplir (livrables fonctionnels, indépendamment de l'implémentation). Le périmètre MVP couvre 9 epics (52 US) ; les epics 8 et 10 sont post-MVP.

#dtable(
  columns: (auto, 1fr, auto, auto),
  headers: ("Epic", "Fonctions attendues", "US", "Périmètre"),
  rows: (
    ("1 · Onboarding, comptes & appairage", "Création de compte sécurisée, authentification, profil animal (race, âge, poids), appairage BLE du collier par QR code, gestion multi-animaux.", "7", "MVP"),
    ("2 · Collecte, transmission & stockage", "Ingestion des capteurs, normalisation et déduplication, tampon hors-ligne (store-and-forward) avec retry, stockage en séries temporelles, authentification du collier.", "6", "MVP"),
    ("3 · Suivi bien-être & activité", "Score de bien-être, courbes d'activité et de sommeil, constantes (température, rythme cardiaque), historique consultable.", "4", "MVP"),
    ("4 · Localisation & zones de sécurité", "Carte GPS temps réel, geofencing (zones sûres), alertes de sortie de zone, historique des trajets.", "5", "MVP"),
    ("5 · Détection d'anomalies & alertes", "Profil normal par animal, seuils adaptatifs, détection d'anomalies comportementales et de santé, génération d'alertes.", "5", "MVP"),
    ("6 · Assistant IA & escalade", "Chat conversationnel RAG sur corpus vétérinaire, garde-fous non-diagnostiques, contextualisation des alertes, escalade vers le vétérinaire.", "4", "MVP"),
    ("7 · Vet Portal · dossier & rapport", "Timeline médicale, résumé contextualisé + données brutes, alertes et notes, export PDF/JSON normalisé, suivi longitudinal.", "7", "MVP"),
    ("8 · Abonnement, facturation & support", "Plans et abonnement (Stripe), statuts et renouvellements, facturation, support et ticketing, FAQ.", "7", "post-MVP"),
    ("9 · Conformité, sécurité & RGPD", "Recueil du consentement, anonymisation / masquage des données personnelles, traçabilité et audit, gestion des droits (accès, suppression).", "5", "MVP"),
    ("10 · Téléconsultation & triage", "File de garde vétérinaire, handoff IA vers vétérinaire, orientation non-diagnostique, prise de rendez-vous, pool plafonné, routage vers le vétérinaire traitant.", "7", "post-MVP"),
    ("11 · Plateforme, livraison & observabilité", "CI/CD, déploiement GitOps, monitoring, observabilité OpenTelemetry (métriques, logs, traces), sécurité de l'infrastructure.", "9", "MVP"),
  ),
)

#text(size: 8.5pt, fill: mut)[Chaque epic est tracé jusqu'aux exigences (FR/NFR) et détaillé en user stories avec critères d'acceptation Given/When/Then : voir partie Backlog & exigences.]
