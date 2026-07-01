#import "../lib.typ": dtable, brand, mut, hair

= Annexes

== Backlog complet · 66 user stories

L'intégralité des user stories, groupées par epic. Chaque story porte, dans l'outil de gestion (Jira), des critères d'acceptation au format Given/When/Then (exemple en partie WBS & fonctions). Périmètre et persona principal indiqués par epic.

#let dcolor(d) = (
  if d == "cli" { rgb("#eaf1fb") }
  else if d == "edge" { rgb("#e7f6f4") }
  else if d == "ai" { rgb("#f0edfb") }
  else if d == "svc" { rgb("#eef7ee") }
  else if d == "ext" { rgb("#fdf3e7") }
  else if d == "rose" { rgb("#fdeef1") }
  else { rgb("#ecebf6") }
)
#let usg(n, title, us, prio, persona, dc, rows) = (
  (table.cell(colspan: 2, fill: dcolor(dc), inset: (x: 7pt, y: 4pt))[
    #text(weight: 800, fill: brand, size: 8.5pt)[Epic #n · #title] #h(5pt) #text(size: 7pt, fill: mut)[#us US · #prio · #persona]
  ],)
    + rows.map(r => (
        text(fill: rgb("#37338f"), weight: 700, size: 8pt)[#r.at(0)],
        text(size: 8pt)[#r.at(1)],
      )).flatten()
)

#table(
  columns: (auto, 1fr),
  stroke: (x, y) => (bottom: 0.5pt + hair),
  align: left + horizon,
  inset: (x: 7pt, y: 4pt),
  fill: (x, y) => if y == 0 { brand },
  table.header(
    text(fill: white, weight: 800, size: 8pt)[Réf.],
    text(fill: white, weight: 800, size: 8pt)[User story],
  ),
  ..usg("1", "Onboarding, comptes & appairage", "7", "MVP", "Propriétaire", "cli", (
    ("1.1", "Créer un compte sécurisé (email + mot de passe)"),
    ("1.2", "Se connecter avec une session sécurisée"),
    ("1.3", "Réinitialiser son mot de passe"),
    ("1.4", "Créer le profil de son animal (nom, race, âge, poids)"),
    ("1.5", "Appairer le collier par QR code (BLE)"),
    ("1.6", "Gérer plusieurs animaux sur un même compte"),
    ("1.7", "Modifier ou supprimer un profil animal"),
  )),
  ..usg("2", "Collecte, transmission & stockage", "6", "MVP", "Système / collier", "edge", (
    ("2.1", "Collecter les mesures des capteurs à intervalle défini"),
    ("2.2", "Normaliser et dédupliquer les données reçues"),
    ("2.3", "Mettre les données en tampon local hors réseau"),
    ("2.4", "Retransmettre les données à la reconnexion"),
    ("2.5", "Stocker l'historique en séries temporelles"),
    ("2.6", "Authentifier le collier à chaque transmission (mTLS)"),
  )),
  ..usg("3", "Suivi bien-être & activité", "4", "MVP", "Propriétaire", "cli", (
    ("3.1", "Voir un score de bien-être quotidien"),
    ("3.2", "Consulter les courbes d'activité et de sommeil"),
    ("3.3", "Suivre les constantes (température, rythme)"),
    ("3.4", "Parcourir l'historique de santé"),
  )),
  ..usg("4", "Localisation & zones de sécurité", "5", "MVP", "Propriétaire", "cli", (
    ("4.1", "Localiser son animal en temps réel sur une carte"),
    ("4.2", "Définir des zones de sécurité (geofencing)"),
    ("4.3", "Recevoir une alerte de sortie de zone"),
    ("4.4", "Consulter l'historique des trajets"),
    ("4.5", "Activer le suivi temps réel (mode live)"),
  )),
  ..usg("5", "Détection d'anomalies & alertes santé", "5", "MVP", "Système / propriétaire", "ai", (
    ("5.1", "Établir un profil de comportement normal par animal"),
    ("5.2", "Ajuster des seuils d'alerte adaptatifs"),
    ("5.3", "Détecter une anomalie de comportement ou de santé"),
    ("5.4", "Recevoir une alerte santé compréhensible"),
    ("5.5", "Consulter le détail et l'historique des alertes"),
  )),
  ..usg("6", "Assistant IA & escalade", "4", "MVP", "Propriétaire", "ai", (
    ("6.1", "Poser une question à l'assistant IA (chat)"),
    ("6.2", "Obtenir une réponse fondée sur le corpus vétérinaire"),
    ("6.3", "Comprendre une alerte contextualisée par l'IA"),
    ("6.4", "Être orienté ou escaladé vers un vétérinaire si besoin"),
  )),
  ..usg("7", "Vet Portal · dossier & rapport", "7", "MVP", "Vétérinaire", "svc", (
    ("7.1", "Accéder à la vue patient d'un animal"),
    ("7.2", "Consulter l'historique médical chronologique"),
    ("7.3", "Lire un résumé contextualisé et les données brutes"),
    ("7.4", "Consulter les alertes de l'animal"),
    ("7.5", "Ajouter des notes au dossier"),
    ("7.6", "Exporter un rapport normalisé (PDF / JSON)"),
    ("7.7", "Suivre l'animal dans le temps (longitudinal)"),
  )),
  ..usg("8", "Abonnement, facturation & support", "7", "post-MVP", "Propriétaire", "ext", (
    ("8.1", "Choisir et souscrire un abonnement (Stripe)"),
    ("8.2", "Gérer le renouvellement de l'abonnement"),
    ("8.3", "Mettre à jour son moyen de paiement"),
    ("8.4", "Consulter ses factures"),
    ("8.5", "Résilier son abonnement"),
    ("8.6", "Contacter le support (ticket)"),
    ("8.7", "Consulter la FAQ"),
  )),
  ..usg("9", "Conformité, sécurité & RGPD", "5", "MVP", "Propriétaire / système", "rose", (
    ("9.1", "Donner ou retirer son consentement sur les données"),
    ("9.2", "Exporter ses données personnelles"),
    ("9.3", "Demander la suppression de son compte et de ses données"),
    ("9.4", "Bénéficier de l'anonymisation des données sensibles"),
    ("9.5", "Tracer les accès et actions (journal d'audit)"),
  )),
  ..usg("10", "Téléconsultation & triage", "7", "post-MVP", "Propriétaire / vétérinaire", "svc", (
    ("10.1", "Générer un PDF normalisé pour le vétérinaire"),
    ("10.2", "Être mis en relation avec un vétérinaire de garde"),
    ("10.3", "Recevoir une orientation non-diagnostique (triage)"),
    ("10.4", "Prendre rendez-vous avec un vétérinaire"),
    ("10.5", "Transmettre le dossier au vétérinaire (handoff)"),
    ("10.6", "Être routé vers son vétérinaire traitant"),
    ("10.7", "Rémunérer les vétérinaires via le pool plafonné"),
  )),
  ..usg("11", "Plateforme, livraison & observabilité", "9", "MVP", "Système / Ops", "data", (
    ("11.1", "Déployer les services via CI/CD (GitOps)"),
    ("11.2", "Conteneuriser et versionner chaque service"),
    ("11.3", "Provisionner l'infrastructure en IaC (Terraform)"),
    ("11.4", "Superviser la santé des services (monitoring)"),
    ("11.5", "Collecter métriques, logs et traces (OpenTelemetry)"),
    ("11.6", "Être alerté en cas d'incident"),
    ("11.7", "Gérer les secrets de façon chiffrée"),
    ("11.8", "Sauvegarder et restaurer les données"),
    ("11.9", "Assurer la montée en charge (scalabilité)"),
  )),
)

== Glossaire

#dtable(
  columns: (auto, 1fr),
  headers: ("Terme", "Définition"),
  rows: (
    ("Care Engine", "Moteur d'IA conversationnelle de Pawrise Care (pipeline LangGraph 6 nœuds)."),
    ("RAG", "Retrieval-Augmented Generation : le LLM répond à partir de documents récupérés (corpus vétérinaire)."),
    ("mTLS", "Authentification mutuelle TLS : client et serveur se prouvent mutuellement leur identité par certificat."),
    ("GitOps", "Déploiement piloté par Git : l'état du cluster suit ce qui est décrit dans le dépôt (Argo CD)."),
    ("IaC", "Infrastructure as Code : l'infrastructure décrite en fichiers versionnés (Terraform)."),
    ("IPR", "Indice de priorité de risque (AMDEC) = Gravité × Occurrence × Détection."),
    ("LTV / CAC", "Valeur vie client / coût d'acquisition client."),
    ("LTE-M", "Réseau cellulaire basse consommation pour l'IoT, avec mobilité."),
    ("Store and forward", "Stockage local des données hors réseau, renvoyées à la reconnexion."),
  ),
)

== Références des décisions d'architecture (ADR)

Les dix ADR du Care Engine sont détaillées dans la partie « IA · le Care Engine ». Les choix d'architecture système et cloud sont justifiés dans les parties correspondantes (besoin, alternatives écartées, décision, trade-off).

== Sources & outils

- *Marché* : #link("https://www.facco.fr/chiffres-cles/")[FACCO / Kantar 2024-2025], #link("https://www.grandviewresearch.com/industry-analysis/pet-wearable-market")[Grand View Research (pet wearables)].
- *Prix cloud* : #link("https://www.hetzner.com/cloud/")[Hetzner Cloud] (ajustement tarifaire du 15 juin 2026), #link("https://www.scaleway.com/en/kubernetes-kapsule/")[Scaleway Kapsule], #link("https://www.ovhcloud.com/fr/public-cloud/kubernetes/")[OVHcloud Managed Kubernetes].
- *Prix modèles IA* : #link("https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/")[Azure OpenAI], #link("https://cohere.com/pricing")[Cohere], #link("https://mistral.ai/products/la-plateforme#pricing")[Mistral] (tarifs 2026).
- *Cadre légal* : #link("https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006583276")[Code rural, art. L243-1], #link("https://gdpr-info.eu/")[RGPD], #link("https://artificialintelligenceact.eu/")[AI Act], #link("https://eur-lex.europa.eu/eli/reg/2023/988")[GPSR (UE 2023/988)], #link("https://eur-lex.europa.eu/eli/reg/2023/1542")[Règlement Batteries (UE 2023/1542)].
- *Outils projet* : #link("https://www.atlassian.com/software/jira")[Jira], #link("https://www.atlassian.com/software/confluence")[Confluence], #link("https://github.com")[GitHub], #link("https://www.figma.com")[Figma]. *Documentation* : #link("https://typst.app")[Typst] (tableaux générés depuis la base de contenu du prototype).

== Prototype en ligne

Une version interactive de l'architecture (cockpit jouable), des diagrammes et de l'ensemble des contenus est disponible sur #link("https://pawrise-care.com")[pawrise-care.com]. Ce dossier en est la version académique, imprimable et autoportante.
