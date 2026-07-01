#import "../lib.typ": dtable, brand, mut

= Annexes

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

- *Marché* : FACCO 2024-2025, rapports marché pet tech.
- *Prix cloud* : documentation Hetzner (ajustement du 15 juin 2026), Scaleway Kapsule, OVHcloud.
- *Prix modèles IA* : tarifs publics Azure OpenAI, Cohere, Mistral (2026).
- *Cadre légal* : Code rural (art. L243-1), RGPD, AI Act, GPSR (UE 2023/988), Règlement Batteries (UE 2023/1542).
- *Outils projet* : Jira, Confluence, GitHub, Figma. *Documentation* : Typst (tableaux générés depuis la base de contenu du prototype).

== Prototype en ligne

Une version interactive de l'architecture (cockpit jouable), des diagrammes et de l'ensemble des contenus est disponible sur #link("https://pawrise-care.com")[pawrise-care.com]. Ce dossier en est la version académique, imprimable et autoportante.
