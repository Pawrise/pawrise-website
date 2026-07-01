#import "../lib.typ": dtable, brand, mut, hair, zebra

= Exigences produit (PRD)

Ce chapitre constitue le cœur du *Product Requirements Document (PRD)* : il définit *ce que le produit doit faire* et *les qualités qu'il doit garantir*. La vision, le problème et les personas figurent en partie Vision ; les exigences ci-dessous ont été élicitées avec la méthode BMAD et servent de *référentiel* au découpage du travail (WBS, partie suivante).

On distingue les *exigences fonctionnelles (FR)*, ce que le système doit faire, et les *exigences non fonctionnelles (NFR)*, les qualités et contraintes. Chaque exigence porte un *code unique*, un *énoncé testable*, une *priorité* (MVP ou post-MVP) et l'*epic* qui la couvre ; cette dernière colonne assure la traçabilité exigence vers découpage (aucune exigence orpheline).

== Exigences fonctionnelles (FR1 à FR43)

#let grp(dom, rows) = (
  (table.cell(colspan: 4, fill: rgb("#e9eaf4"), inset: (x: 7pt, y: 4pt))[#text(weight: 800, fill: brand, size: 8.5pt)[#dom]],)
    + rows.map(r => (
        text(fill: rgb("#37338f"), weight: 700, size: 8pt)[#r.at(0)],
        text(size: 8pt)[#r.at(1)],
        text(size: 8pt, fill: if r.at(2) == "post" { mut } else { brand })[#r.at(2)],
        text(size: 8pt, fill: mut)[#r.at(3)],
      )).flatten()
)

#table(
  columns: (auto, 1fr, auto, auto),
  stroke: (x, y) => (bottom: 0.5pt + hair),
  align: (x, y) => left + horizon,
  inset: (x: 7pt, y: 4.5pt),
  fill: (x, y) => if y == 0 { brand },
  table.header(
    text(fill: white, weight: 800, size: 8pt)[Code],
    text(fill: white, weight: 800, size: 8pt)[Exigence],
    text(fill: white, weight: 800, size: 8pt)[Prio.],
    text(fill: white, weight: 800, size: 8pt)[Epic],
  ),
  ..grp("Collier & collecte", (
    ("FR1", "Localisation GPS de l'animal", "MVP", "E2"),
    ("FR2", "Mesure de l'activité (accéléromètre)", "MVP", "E2"),
    ("FR3", "Mesure de la température corporelle", "MVP", "E2"),
    ("FR4", "Mesure du rythme cardiaque (option)", "MVP", "E2"),
    ("FR5", "Collecte périodique et temps réel", "MVP", "E2"),
    ("FR6", "Tampon local en cas de perte réseau", "MVP", "E2"),
    ("FR7", "Transmission sécurisée et gestion de la batterie", "MVP", "E2"),
  )),
  ..grp("Backend & données", (
    ("FR8", "Ingestion et normalisation des données", "MVP", "E2"),
    ("FR9", "Stockage en séries temporelles", "MVP", "E2"),
    ("FR10", "Calcul d'agrégats et d'indicateurs", "MVP", "E2"),
    ("FR11", "API de données pour l'application", "MVP", "E3"),
    ("FR12", "Gestion des comptes, animaux et règles d'accès", "MVP", "E1"),
  )),
  ..grp("Moteur IA", (
    ("FR13", "Prétraitement et fenêtrage des données", "MVP", "E3"),
    ("FR14", "Modèle de comportement normal par animal", "MVP", "E5"),
    ("FR15", "Détection d'anomalies (seuils adaptatifs)", "MVP", "E5"),
    ("FR16", "Assistant conversationnel (chat RAG)", "MVP", "E6"),
    ("FR17", "Escalade non-diagnostique vers le vétérinaire", "MVP", "E6"),
    ("FR18", "Génération d'un rapport structuré (PDF / JSON)", "MVP", "E7"),
  )),
  ..grp("App propriétaire", (
    ("FR19", "Écran bien-être / état du jour", "MVP", "E3"),
    ("FR20", "Localisation temps réel et historique", "MVP", "E4"),
    ("FR21", "Zones de sécurité (geofencing) et alertes", "MVP", "E4"),
    ("FR22", "Notifications et rappels de soins", "MVP", "E5"),
    ("FR23", "Accès au chat IA et mise en relation vétérinaire", "MVP", "E6"),
  )),
  ..grp("Vet Portal", (
    ("FR24", "Vue patient (dossier regroupé)", "MVP", "E7"),
    ("FR25", "Historique médical chronologique", "MVP", "E7"),
    ("FR26", "Résumé contextualisé et données brutes", "MVP", "E7"),
    ("FR27", "Alertes, rapport et ajout de notes", "MVP", "E7"),
    ("FR28", "Export et suivi longitudinal", "MVP", "E7"),
  )),
  ..grp("Cycle de vie & business", (
    ("FR29", "Création de compte et onboarding", "MVP", "E1"),
    ("FR30", "Appairage du collier (BLE / QR code)", "MVP", "E1"),
    ("FR31", "Abonnement et facturation", "post", "E8"),
    ("FR32", "Support client et FAQ", "post", "E8"),
    ("FR33", "Profil animal, multi-animaux, remplacement", "MVP", "E1"),
    ("FR34", "Onboarding des vétérinaires partenaires", "MVP", "E7"),
  )),
  ..grp("Téléconsultation & triage", (
    ("FR35", "PDF normalisé pour le vétérinaire", "post", "E10"),
    ("FR36", "Handoff structuré IA vers vétérinaire", "post", "E10"),
    ("FR37", "Orientation non-diagnostique (triage)", "post", "E10"),
    ("FR38", "File de garde vétérinaire", "post", "E10"),
    ("FR39", "Prise de rendez-vous", "post", "E10"),
    ("FR40", "Pool de rémunération plafonné", "post", "E10"),
    ("FR41", "Garde-fous et contrôle qualité", "post", "E10"),
    ("FR42", "Routage vers le vétérinaire traitant", "post", "E10"),
    ("FR43", "Traçabilité et audit des téléconsultations", "post", "E10"),
  )),
)

#pagebreak(weak: true)

== Exigences non fonctionnelles (NFR1 à NFR10)

Qualités et contraintes transverses du système (toutes en périmètre MVP).

#dtable(
  columns: (auto, 1fr, auto),
  headers: ("Code", "Exigence", "Epic"),
  rows: (
    ("NFR1 · Fiabilité", "Disponibilité du service et tolérance aux pannes.", "E11"),
    ("NFR2 · Autonomie / énergie", "Autonomie du collier et sobriété énergétique.", "E2"),
    ("NFR3 · Sécurité", "Chiffrement, authentification, mTLS de bout en bout.", "E9"),
    ("NFR4 · Confidentialité / RGPD", "Consentement, minimisation, droits des personnes.", "E9"),
    ("NFR5 · Éthique IA", "Non-diagnostic, garde-fous, transparence.", "E9"),
    ("NFR6 · Performance", "Temps de réponse maîtrisés (objectifs p95).", "E11"),
    ("NFR7 · Scalabilité / Ops", "Montée en charge et exploitabilité.", "E11"),
    ("NFR8 · Robustesse physique", "IP67, résistance aux chocs et températures.", "E2"),
    ("NFR9 · Utilisabilité", "Simplicité d'usage et accessibilité.", "E3"),
    ("NFR10 · Maintenabilité", "Qualité de code, tests, documentation.", "E11"),
  ),
)
