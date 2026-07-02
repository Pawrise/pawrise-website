#import "../lib.typ": dtable, keybox, keep, brand, mut

= Cloud & infrastructure

Une infrastructure *souveraine* (UE / RGPD), *maîtrisée en coût* et *prête à scaler* : Hetzner auto-géré via Terraform aujourd'hui, cloud managé européen le jour où la charge le justifie. Décrite en code, déployée en GitOps. Cette partie justifie le dimensionnement (à partir de l'architecture), le choix d'hébergement (bare metal / Hetzner / managé / hyperscaler) et l'exigence de souveraineté.

== Principes directeurs

- *Souveraineté & RGPD* : infrastructure et données de santé en UE ; Azure seulement pour le modèle de langage (région UE).
- *Infrastructure as Code* : toute l'infra en Terraform, un cluster se recrée à l'identique en une commande.
- *GitOps* : Git seule source de vérité ; Argo CD synchronise le cluster, rollback par revert.
- *Maîtrise des coûts* : lignes ARM, environnements de dev éphémères, auto-géré moins cher qu'un managé à capacités égales.
- *Observabilité* : chaque service tracé (OpenTelemetry) ; métriques, logs, traces centralisés dans Grafana.

== Dimensionnement (issu de l'architecture)

Les besoins ne sont pas choisis au hasard : ils découlent des charges de travail décrites en partie Architecture (services Rust, bases de données, bus d'événements, broker MQTT, moteur IA, observabilité). Estimation à faible charge, pour un lancement :

#keep[
#dtable(
  columns: (1fr, auto, auto),
  headers: ("Charge de travail", "vCPU", "RAM"),
  align-cells: left,
  rows: (
    ("Services métier Rust (Core API, ingestion, auth, portail…)", "~2 à 3", "~3 Go"),
    ("Bases de données (PostgreSQL + TimescaleDB + pgvector)", "~2", "~6 Go"),
    ("Bus d'événements (Kafka)", "~1 à 2", "~4 Go"),
    ("Broker MQTT (EMQX)", "~1", "~2 Go"),
    ("Care Engine (pipeline IA ; le LLM est déporté sur Azure)", "~1 à 2", "~3 Go"),
    ("Observabilité (Prometheus / Loki / Tempo / Grafana)", "~1 à 2", "~4 Go"),
    ("Gateway, ingress, Argo CD, PKI", "~1", "~2 Go"),
    ("Total (avec marge)", "≈ 16 vCPU", "≈ 32 Go"),
  ),
)
]

Rust et l'absence de LLM local (déporté sur Azure) gardent l'empreinte basse. La cible ≈ 16 vCPU / 32 Go correspond à *2× CAX31* (2 × 8 vCPU / 16 Go) en workers, plus *1× CAX21* en control-plane. On monte en charge simplement en ajoutant des workers.

== Comparaison des options d'hébergement

À capacité équivalente (≈ 16 vCPU / 32 Go + bases de données, load balancer, sauvegardes et IA, faible trafic) :

#keep[
#dtable(
  columns: (auto, auto, auto, auto, auto),
  headers: ("Option", "Coût annuel*", "Souveraineté UE", "Exploitation", "Lock-in"),
  align-cells: left,
  rows: (
    ("Bare metal (serveur dédié)", "~1 000 à 1 500 €", "Oui", "Élevée (matériel, pannes, redondance à doubler)", "Aucun"),
    ("Hetzner Cloud auto-géré (retenu)", "≈ 1 600 €", "Oui", "Moyenne (K8s, mais tout en IaC)", "Aucun (Terraform portable)"),
    ("Cloud managé EU (Scaleway / OVH)", "~3 000 à 3 700 €", "Oui", "Faible (control-plane managé)", "Modéré (fournisseur)"),
    ("Hyperscaler (AWS / Azure / GCP)", "~6 000 à 10 000 €", "Partielle (Cloud Act US)", "Faible", "Fort"),
  ),
)
]

#text(size: 8.5pt, fill: mut)[\* Ordres de grandeur, faible trafic et usage IA modéré : *coût d'infrastructure seul*, à capacité équivalente. Prix serveurs : tarifs publics Hetzner juin 2026 (Cloud CAX et dédiés AX). Tout compris (environnements de dev éphémères), l'option retenue revient à ≈ 1 750 €/an, chiffrée en partie Économie.]

Le *bare metal* est le moins cher en compute brut mais impose l'exploitation matérielle (remplacement de disque, redondance physique à acheter en double) et n'offre aucune élasticité : incompatible avec des environnements de dev éphémères. L'*hyperscaler* est confortable mais 4 à 6× plus cher, avec un fort lock-in et une souveraineté seulement partielle (voir ci-dessous). Le *cloud managé européen* est la bonne cible au scale. Pour la phase actuelle, *Hetzner Cloud auto-géré* offre le meilleur compromis coût / souveraineté / flexibilité.

== Souveraineté : pourquoi l'UE

Les données de santé animale, rattachées à un propriétaire identifié, sont des données personnelles au sens du RGPD. Un hébergeur européen évite l'exposition au *Cloud Act* américain, qui peut contraindre un fournisseur US à communiquer des données même hébergées dans une région UE. D'où le choix d'un acteur européen (Hetzner) pour toute l'infrastructure ; le seul service non européen, le grand modèle de langage, passe par *Azure OpenAI en région UE*, avec résidence des données et sans réutilisation pour l'entraînement (voir partie IA).

#keybox(title: "Décision")[
  Cluster Kubernetes sur *VPS Cloud Hetzner (lignes ARM CAX)*, auto-géré et provisionné par Terraform. Depuis la hausse Hetzner du 15 juin 2026 (jusqu'à +176 % sur l'AMD, +30 % seulement sur l'ARM), la ligne ARM est la plus rentable et suffit à notre charge. Bare metal écarté (exploitation matérielle) ; cloud managé européen gardé pour le passage à l'échelle.
]

== Stratégie en deux temps

*Maintenant (dev → keynote → premiers utilisateurs) :* cluster Kubernetes provisionné par Terraform (control-plane CAX21 + 2 workers CAX31), déploiement GitOps, secrets chiffrés, PKI interne, souveraineté UE.

*Au scale (traction réelle) :* Cloud managé EU, Scaleway Kapsule (control-plane managé gratuit, PostgreSQL managé, Object Storage, GPU à la demande), sans lock-in hyperscaler. Alternative : OVHcloud Managed Kubernetes. Azure AKS gardé pour un besoin multi-région ou un SLA entreprise.

== La stack d'infrastructure

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("Techno", "Rôle", "Pourquoi"),
  rows: (
    ("Terraform", "Provisionnement", "Décrit et crée toute l'infra Hetzner de façon reproductible ; détruire/recréer un environnement à la demande."),
    ("Kubernetes", "Orchestration", "Fait tourner et auto-répare l'ensemble des conteneurs (services métier, bases, bus, observabilité) ; redémarrage, placement, montée en charge."),
    ("Helm", "Packaging", "Chaque service en chart versionné et paramétrable (dev/prod)."),
    ("Argo CD", "Déploiement GitOps", "Déploie depuis Git ; l'état du cluster suit le dépôt, rollback par revert."),
    ("SOPS + age", "Secrets", "Secrets chiffrés dans Git, déchiffrés uniquement dans le cluster."),
    ("step-ca", "PKI interne", "Autorité de certification : chaque collier et service s'authentifie en mTLS."),
    ("OTel + Prometheus/Loki/Tempo/Grafana", "Observabilité", "Métriques, logs et traces unifiés."),
    ("KrakenD + Traefik / cert-manager", "Gateway & Ingress", "Agrégation d'API, entrée HTTP et TLS automatique."),
  ),
)

== Vue plateforme : topologie de déploiement

En complément de la vue logique (partie Architecture), ce schéma (exporté du cockpit interactif) situe chaque brique d'infrastructure autour du cluster : la chaîne *CI/CD externe* (GitHub Actions → Helm → Argo CD → cluster), l'*enceinte Kubernetes* auto-gérée, la *PKI interne* (step-ca) qui authentifie colliers et services, l'*observabilité in-cluster* (OpenTelemetry → Prometheus / Loki / Tempo / Grafana) et l'*hôte Hetzner* qui porte l'ensemble.

#let lsync = rgb("#10b981")
#let levent = rgb("#a855f7")
#let lctrl = rgb("#0ea5e9")

#page(flipped: true)[
  #v(3pt)
  #align(center)[#text(size: 8pt, fill: mut)[
    #box(baseline: 1pt, line(length: 14pt, stroke: 1.4pt + lctrl)) contrôle / déploiement · #box(baseline: 1pt, line(length: 14pt, stroke: 1.4pt + levent)) télémétrie · #box(baseline: 1pt, line(length: 14pt, stroke: 1.4pt + lsync)) synchrone. Enceinte pointillée = cluster Kubernetes ; socle = hôte Hetzner.
  ]]
  #v(5pt)
  #align(center, image("/figures/architecture-plateforme.svg", width: 87%))
]

== Maîtrise des coûts en développement

Un serveur arrêté reste facturé chez Hetzner : « éteindre » n'économise rien. Le bon mécanisme s'appuie sur l'IaC :

- Facturation horaire avec plafond mensuel : un serveur qui n'existe que quelques heures par jour est facturé au prorata.
- Environnements de dev éphémères : `terraform destroy` le soir et le week-end, `terraform apply` le matin.
- Un cluster de dev actif ~40 h/semaine (au lieu de 168) coûte ~25 % du plafond, soit près de 70 % d'économie sur le compute de dev.
- Données préservées sur volumes persistants (~0,057 €/Go/mois) ou snapshots ; seul le compute est recréé.
