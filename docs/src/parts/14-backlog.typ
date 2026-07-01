#import "../lib.typ": dtable, keybox, keep, brand, mut, zebra
#import "../../data/backlog.typ": BACKLOG, BACKLOG_EPICS, BACKLOG_US, BACKLOG_MVP

= Backlog & exigences

Le découpage produit compte #BACKLOG_EPICS epics et #BACKLOG_US user stories, dont #BACKLOG_MVP dans le périmètre MVP. Chaque story porte des critères d'acceptation au format Given/When/Then. Cette partie fournit le *référentiel d'exigences* (FR/NFR) auquel renvoie le WBS, et la *traçabilité* epic vers exigences.

== Epics (traçabilité vers les exigences)

La colonne « Exigences » relie chaque epic aux exigences du référentiel ci-après : c'est la matrice de traçabilité (chaque exigence est portée par au moins un epic, aucune n'est orpheline).

#dtable(
  columns: (auto, 1fr, auto, auto, auto),
  headers: ("#", "Epic", "US", "Périmètre", "Exigences"),
  rows: BACKLOG,
)

== Référentiel des exigences fonctionnelles (FR1 à FR43)

Les exigences fonctionnelles décrivent ce que le système doit faire. Elles sont issues du cahier des exigences produit (PRD) et regroupées par domaine.

#let frg(title, lines) = block(breakable: false, width: 100%, spacing: 9pt, inset: (bottom: 2pt))[
  #text(fill: brand, weight: 800, size: 9pt)[#title]
  #v(2pt)
  #for l in lines [ #text(size: 8.2pt)[#text(fill: rgb("#37338f"), weight: 700)[#l.at(0)] #l.at(1)]#linebreak() ]
]

#grid(columns: (1fr, 1fr), gutter: 16pt,
  [
    #frg("Collier & collecte", (
      ("FR1", "Localisation GPS de l'animal"),
      ("FR2", "Mesure de l'activité (accéléromètre)"),
      ("FR3", "Mesure de la température corporelle"),
      ("FR4", "Mesure du rythme cardiaque (option)"),
      ("FR5", "Collecte périodique et temps réel"),
      ("FR6", "Tampon local en cas de perte réseau"),
      ("FR7", "Transmission sécurisée + gestion batterie"),
    ))
    #frg("Backend & données", (
      ("FR8", "Ingestion et normalisation des données"),
      ("FR9", "Stockage en séries temporelles"),
      ("FR10", "Calcul d'agrégats et d'indicateurs"),
      ("FR11", "API de données pour l'application"),
      ("FR12", "Comptes, animaux et règles d'accès"),
    ))
    #frg("Moteur IA", (
      ("FR13", "Prétraitement et fenêtrage des données"),
      ("FR14", "Modèle de comportement normal par animal"),
      ("FR15", "Détection d'anomalies (seuils adaptatifs)"),
      ("FR16", "Assistant conversationnel (chat RAG)"),
      ("FR17", "Escalade non-diagnostique vers le véto"),
      ("FR18", "Rapport structuré (PDF / JSON)"),
    ))
    #frg("App propriétaire", (
      ("FR19", "Écran bien-être / état du jour"),
      ("FR20", "Localisation temps réel et historique"),
      ("FR21", "Zones de sécurité (geofencing) et alertes"),
      ("FR22", "Notifications et rappels de soins"),
      ("FR23", "Accès au chat IA et mise en relation véto"),
    ))
  ],
  [
    #frg("Vet Portal", (
      ("FR24", "Vue patient (dossier regroupé)"),
      ("FR25", "Historique médical chronologique"),
      ("FR26", "Résumé contextualisé + données brutes"),
      ("FR27", "Alertes, rapport et ajout de notes"),
      ("FR28", "Export et suivi longitudinal"),
    ))
    #frg("Cycle de vie & business", (
      ("FR29", "Création de compte et onboarding"),
      ("FR30", "Appairage du collier (BLE / QR code)"),
      ("FR31", "Abonnement et facturation"),
      ("FR32", "Support client et FAQ"),
      ("FR33", "Profil animal, multi-animaux, remplacement"),
      ("FR34", "Onboarding des vétérinaires partenaires"),
    ))
    #frg("Téléconsultation & triage", (
      ("FR35", "PDF normalisé pour le vétérinaire"),
      ("FR36", "Handoff structuré IA vers vétérinaire"),
      ("FR37", "Orientation non-diagnostique (triage)"),
      ("FR38", "File de garde vétérinaire"),
      ("FR39", "Prise de rendez-vous"),
      ("FR40", "Pool de rémunération plafonné"),
      ("FR41", "Garde-fous et contrôle qualité"),
      ("FR42", "Routage vers le vétérinaire traitant"),
      ("FR43", "Traçabilité et audit des téléconsultations"),
    ))
  ],
)

== Exigences non fonctionnelles (NFR1 à NFR10)

Les exigences non fonctionnelles décrivent les qualités et contraintes du système.

#dtable(
  columns: (auto, 1fr),
  headers: ("Code", "Exigence"),
  rows: (
    ("NFR1 · Fiabilité", "Disponibilité du service et tolérance aux pannes."),
    ("NFR2 · Autonomie / énergie", "Autonomie du collier et sobriété énergétique."),
    ("NFR3 · Sécurité", "Chiffrement, authentification, mTLS de bout en bout."),
    ("NFR4 · Confidentialité / RGPD", "Consentement, minimisation, droits des personnes."),
    ("NFR5 · Éthique IA", "Non-diagnostic, garde-fous, transparence."),
    ("NFR6 · Performance", "Temps de réponse maîtrisés (objectifs p95)."),
    ("NFR7 · Scalabilité / Ops", "Montée en charge et exploitabilité."),
    ("NFR8 · Robustesse physique", "IP67, résistance aux chocs et températures."),
    ("NFR9 · Utilisabilité", "Simplicité d'usage et accessibilité."),
    ("NFR10 · Maintenabilité", "Qualité de code, tests, documentation."),
  ),
)

== Exemple de critère d'acceptation

#keybox(title: "Story 1.1 · Création de compte sécurisée")[
  *En tant que* propriétaire d'animal, *je veux* créer un compte avec email et mot de passe, *afin d'*accéder à l'application en toute sécurité.\
  *Given* un visiteur sur l'écran d'inscription\
  *When* il saisit un email valide et un mot de passe respectant la politique de sécurité\
  *Then* un compte est créé et un email de vérification est envoyé\
  *And* un mot de passe faible ou un email déjà utilisé déclenche une erreur explicite sans créer de compte.
]
