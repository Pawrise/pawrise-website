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

- *Marché* : #link("https://www.facco.fr/chiffres-cles/")[FACCO / Kantar 2024-2025], #link("https://www.grandviewresearch.com/industry-analysis/pet-wearable-market")[Grand View Research (pet wearables)].
- *Prix cloud* : #link("https://www.hetzner.com/cloud/")[Hetzner Cloud] (ajustement tarifaire du 15 juin 2026), #link("https://www.scaleway.com/en/kubernetes-kapsule/")[Scaleway Kapsule], #link("https://www.ovhcloud.com/fr/public-cloud/kubernetes/")[OVHcloud Managed Kubernetes].
- *Prix modèles IA* : #link("https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/")[Azure OpenAI], #link("https://cohere.com/pricing")[Cohere], #link("https://mistral.ai/products/la-plateforme#pricing")[Mistral] (tarifs 2026).
- *Cadre légal* : #link("https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006583276")[Code rural, art. L243-1], #link("https://gdpr-info.eu/")[RGPD], #link("https://artificialintelligenceact.eu/")[AI Act], #link("https://eur-lex.europa.eu/eli/reg/2023/988")[GPSR (UE 2023/988)], #link("https://eur-lex.europa.eu/eli/reg/2023/1542")[Règlement Batteries (UE 2023/1542)].
- *Outils projet* : #link("https://www.atlassian.com/software/jira")[Jira], #link("https://www.atlassian.com/software/confluence")[Confluence], #link("https://github.com")[GitHub], #link("https://www.figma.com")[Figma]. *Documentation* : #link("https://typst.app")[Typst] (tableaux générés depuis la base de contenu du prototype).

== Prototype en ligne

Une version interactive de l'architecture (cockpit jouable), des diagrammes et de l'ensemble des contenus est disponible sur #link("https://pawrise-care.com")[pawrise-care.com]. Ce dossier en est la version académique, imprimable et autoportante.
