#import "../lib.typ": dtable, brand, mut, hair, zebra

= Exigences produit (PRD)

Ce chapitre constitue le cœur du *Product Requirements Document (PRD)* : il définit *ce que le produit doit faire* et *les qualités qu'il doit garantir*. La vision, le problème et les personas figurent en partie Vision ; les exigences ci-dessous ont été élicitées avec la méthode BMAD et servent de *référentiel* au découpage du travail (WBS, partie suivante).

On distingue les *exigences fonctionnelles (FR)*, ce que le système doit faire, et les *exigences non fonctionnelles (NFR)*, les qualités et contraintes. Chaque exigence porte un *code unique*, un *énoncé testable*, une *méthode de vérification*, une *priorité* (MVP ou post-MVP) et l'*epic* qui la couvre ; les deux dernières colonnes assurent la traçabilité (aucune exigence orpheline) et le contrôle qualité. Les bandeaux de domaine reprennent les couleurs du WBS.

#let dcolor(d) = (
  if d == "cli" { rgb("#eaf1fb") }
  else if d == "edge" { rgb("#e7f6f4") }
  else if d == "ai" { rgb("#f0edfb") }
  else if d == "svc" { rgb("#eef7ee") }
  else if d == "ext" { rgb("#fdf3e7") }
  else if d == "rose" { rgb("#fdeef1") }
  else { rgb("#ecebf6") }
)

== Exigences fonctionnelles (FR1 à FR43)

#let grp(dom, dc, rows) = (
  (table.cell(colspan: 5, fill: dcolor(dc), inset: (x: 7pt, y: 4pt))[#text(weight: 800, fill: brand, size: 8.5pt)[#dom]],)
    + rows.map(r => (
        text(fill: rgb("#37338f"), weight: 700, size: 7.8pt)[#r.at(0)],
        text(size: 7.8pt)[#r.at(1)],
        text(size: 7.6pt, fill: mut)[#r.at(2)],
        text(size: 7.8pt, fill: if r.at(3) == "post" { mut } else { brand })[#r.at(3)],
        text(size: 7.8pt, fill: mut)[#r.at(4)],
      )).flatten()
)

#table(
  columns: (auto, 1fr, 1fr, auto, auto),
  stroke: (x, y) => (bottom: 0.5pt + hair),
  align: (x, y) => left + horizon,
  inset: (x: 7pt, y: 4pt),
  fill: (x, y) => if y == 0 { brand },
  table.header(
    text(fill: white, weight: 800, size: 7.8pt)[Code],
    text(fill: white, weight: 800, size: 7.8pt)[Exigence],
    text(fill: white, weight: 800, size: 7.8pt)[Vérification],
    text(fill: white, weight: 800, size: 7.8pt)[Prio.],
    text(fill: white, weight: 800, size: 7.8pt)[Epic],
  ),
  ..grp("Collier & collecte", "edge", (
    ("FR1", "Localisation GPS de l'animal", "Test terrain (écart de position)", "MVP", "E2"),
    ("FR2", "Mesure de l'activité (accéléromètre)", "Test capteur vs référence", "MVP", "E2"),
    ("FR3", "Mesure de la température corporelle", "Étalonnage vs thermomètre", "MVP", "E2"),
    ("FR4", "Mesure du rythme cardiaque (option)", "Comparaison capteur médical", "MVP", "E2"),
    ("FR5", "Collecte périodique et temps réel", "Test de fréquence d'échantillonnage", "MVP", "E2"),
    ("FR6", "Tampon local en cas de perte réseau", "Test hors-ligne / reconnexion", "MVP", "E2"),
    ("FR7", "Transmission sécurisée et gestion batterie", "Test de charge + autonomie", "MVP", "E2"),
  )),
  ..grp("Backend & données", "data", (
    ("FR8", "Ingestion et normalisation des données", "Tests d'intégration API", "MVP", "E2"),
    ("FR9", "Stockage en séries temporelles", "Tests requêtes / rétention", "MVP", "E2"),
    ("FR10", "Calcul d'agrégats et d'indicateurs", "Tests unitaires de calcul", "MVP", "E2"),
    ("FR11", "API de données pour l'application", "Tests d'intégration API", "MVP", "E3"),
    ("FR12", "Gestion des comptes, animaux et accès", "Tests d'autorisation (abus)", "MVP", "E1"),
  )),
  ..grp("Moteur IA", "ai", (
    ("FR13", "Prétraitement et fenêtrage des données", "Tests unitaires du pipeline", "MVP", "E3"),
    ("FR14", "Modèle de comportement normal", "Jeu d'évaluation par animal", "MVP", "E5"),
    ("FR15", "Détection d'anomalies (seuils adaptatifs)", "Jeu d'éval + taux faux positifs", "MVP", "E5"),
    ("FR16", "Assistant conversationnel (chat RAG)", "Golden set Q/R, recall", "MVP", "E6"),
    ("FR17", "Escalade non-diagnostique", "Tests garde-fous (0 diagnostic)", "MVP", "E6"),
    ("FR18", "Rapport structuré (PDF / JSON)", "Validation du format", "MVP", "E7"),
  )),
  ..grp("App propriétaire", "cli", (
    ("FR19", "Écran bien-être / état du jour", "Tests UI + revue UX", "MVP", "E3"),
    ("FR20", "Localisation temps réel et historique", "Test E2E carte", "MVP", "E4"),
    ("FR21", "Zones de sécurité (geofencing) et alertes", "Test franchissement de zone", "MVP", "E4"),
    ("FR22", "Notifications et rappels de soins", "Test déclenchement d'alertes", "MVP", "E5"),
    ("FR23", "Accès au chat IA et mise en relation", "Test E2E du parcours", "MVP", "E6"),
  )),
  ..grp("Vet Portal", "svc", (
    ("FR24", "Vue patient (dossier regroupé)", "Tests UI + revue vétérinaire", "MVP", "E7"),
    ("FR25", "Historique médical chronologique", "Test d'affichage", "MVP", "E7"),
    ("FR26", "Résumé contextualisé et données brutes", "Revue véto de pertinence", "MVP", "E7"),
    ("FR27", "Alertes, rapport et ajout de notes", "Test E2E portail", "MVP", "E7"),
    ("FR28", "Export et suivi longitudinal", "Validation de l'export", "MVP", "E7"),
  )),
  ..grp("Cycle de vie & business", "ext", (
    ("FR29", "Création de compte et onboarding", "Test E2E inscription", "MVP", "E1"),
    ("FR30", "Appairage du collier (BLE / QR code)", "Test d'appairage BLE", "MVP", "E1"),
    ("FR31", "Abonnement et facturation", "Test paiement (sandbox Stripe)", "post", "E8"),
    ("FR32", "Support client et FAQ", "Test parcours support", "post", "E8"),
    ("FR33", "Profil animal, multi-animaux, remplacement", "Tests fonctionnels", "MVP", "E1"),
    ("FR34", "Onboarding des vétérinaires partenaires", "Test parcours véto", "MVP", "E7"),
  )),
  ..grp("Téléconsultation & triage", "svc", (
    ("FR35", "PDF normalisé pour le vétérinaire", "Validation du format", "post", "E10"),
    ("FR36", "Handoff structuré IA vers vétérinaire", "Test E2E IA vers véto", "post", "E10"),
    ("FR37", "Orientation non-diagnostique (triage)", "Tests garde-fous", "post", "E10"),
    ("FR38", "File de garde vétérinaire", "Test de routage", "post", "E10"),
    ("FR39", "Prise de rendez-vous", "Test de booking", "post", "E10"),
    ("FR40", "Pool de rémunération plafonné", "Test de plafond", "post", "E10"),
    ("FR41", "Garde-fous et contrôle qualité", "Tests adversariaux", "post", "E10"),
    ("FR42", "Routage vers le vétérinaire traitant", "Test de routage", "post", "E10"),
    ("FR43", "Traçabilité et audit des téléconsultations", "Vérification des logs", "post", "E10"),
  )),
)

#pagebreak(weak: true)

== Exigences non fonctionnelles (NFR1 à NFR10)

Qualités et contraintes transverses du système (toutes en périmètre MVP).

#dtable(
  columns: (auto, 1fr, 1fr, auto),
  headers: ("Code", "Exigence", "Vérification", "Epic"),
  rows: (
    ("NFR1 · Fiabilité", "Disponibilité et tolérance aux pannes.", "Tests de charge / chaos, SLA", "E11"),
    ("NFR2 · Autonomie / énergie", "Autonomie du collier et sobriété.", "Mesure d'autonomie terrain", "E2"),
    ("NFR3 · Sécurité", "Chiffrement, authentification, mTLS.", "Audit / pentest, revue de code", "E9"),
    ("NFR4 · Confidentialité / RGPD", "Consentement, minimisation, droits.", "Revue conformité, DPIA", "E9"),
    ("NFR5 · Éthique IA", "Non-diagnostic, garde-fous, transparence.", "Golden set anti-diagnostic", "E9"),
    ("NFR6 · Performance", "Temps de réponse maîtrisés.", "Tests de performance (p95)", "E11"),
    ("NFR7 · Scalabilité / Ops", "Montée en charge et exploitabilité.", "Tests de montée en charge", "E11"),
    ("NFR8 · Robustesse physique", "IP67, chocs et températures.", "Tests IP67, chocs, thermiques", "E2"),
    ("NFR9 · Utilisabilité", "Simplicité d'usage et accessibilité.", "Tests utilisateurs", "E3"),
    ("NFR10 · Maintenabilité", "Qualité de code, tests, documentation.", "Revue de code, couverture tests", "E11"),
  ),
)
