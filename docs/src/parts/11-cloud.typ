#import "../lib.typ": dtable, keybox, brand, mut

= Cloud & infrastructure

Une infrastructure souveraine (UE / RGPD), maîtrisée en coût et prête à scaler : Hetzner auto-géré via Terraform aujourd'hui, cloud managé européen le jour où la charge le justifie. Décrite en code, déployée en GitOps.

== Principes directeurs

- *Souveraineté & RGPD* — infrastructure et données de santé en UE ; Azure seulement pour le modèle de langage.
- *Infrastructure as Code* — toute l'infra en Terraform, un cluster se recrée à l'identique en une commande.
- *GitOps* — Git seule source de vérité ; Argo CD synchronise le cluster, rollback par revert.
- *Maîtrise des coûts* — lignes ARM, environnements de dev éphémères, auto-géré moins cher qu'un managé à capacités égales.
- *Observabilité* — chaque service tracé (OpenTelemetry) ; métriques, logs, traces centralisés dans Grafana.

== La stack d'infrastructure

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("Techno", "Rôle", "Pourquoi"),
  rows: (
    ("Terraform", "Provisionnement", "Décrit et crée toute l'infra Hetzner de façon reproductible ; détruire/recréer un environnement à la demande."),
    ("Kubernetes", "Orchestration", "Fait tourner et auto-répare la vingtaine de services ; redémarrage, placement, montée en charge."),
    ("Helm", "Packaging", "Chaque service en chart versionné et paramétrable (dev/prod)."),
    ("Argo CD", "Déploiement GitOps", "Déploie depuis Git ; l'état du cluster suit le dépôt, rollback par revert."),
    ("SOPS + age", "Secrets", "Secrets chiffrés dans Git, déchiffrés uniquement dans le cluster."),
    ("step-ca", "PKI interne", "Autorité de certification : chaque collier et service s'authentifie en mTLS."),
    ("OTel + Prometheus/Loki/Tempo/Grafana", "Observabilité", "Métriques, logs et traces unifiés."),
    ("KrakenD + Traefik / cert-manager", "Gateway & Ingress", "Agrégation d'API, entrée HTTP et TLS automatique."),
  ),
)

== Choix d'hébergement

#keybox(title: "Décision")[
  VPS Cloud Hetzner auto-géré, lignes ARM (CAX), provisionné par Terraform. Depuis la hausse des prix Hetzner du 15 juin 2026 (jusqu'à +176 % sur les lignes AMD, +30 % seulement sur l'ARM), la ligne ARM devient la plus rentable et reste suffisante pour notre charge. Le bare metal est écarté (trop d'ops matérielle) ; le cloud managé est gardé pour le passage à l'échelle.
]

== Stratégie en deux temps

*Maintenant (dev → keynote → premiers utilisateurs) :* cluster Kubernetes provisionné par Terraform (control-plane CAX21 + 2 workers CAX31, ~40 €/mois), déploiement GitOps, secrets chiffrés, PKI interne, souveraineté UE.

*Au scale (traction réelle) :* Cloud managé EU — Scaleway Kapsule (control-plane managé gratuit, PostgreSQL managé, Object Storage, GPU à la demande), sans lock-in hyperscaler. Alternative : OVHcloud Managed K8s. Azure AKS gardé pour un besoin multi-région ou SLA entreprise.

== Maîtrise des coûts en développement

Un serveur arrêté reste facturé chez Hetzner : « éteindre » n'économise rien. Le bon mécanisme s'appuie sur l'IaC :

- Facturation horaire avec plafond mensuel : un serveur qui n'existe que quelques heures par jour est facturé au prorata.
- Environnements de dev éphémères : `terraform destroy` le soir et le week-end, `terraform apply` le matin.
- Un cluster de dev actif ~40 h/semaine (au lieu de 168) coûte ~25 % du plafond, soit près de 70 % d'économie sur le compute de dev.
- Données préservées sur volumes persistants (~0,05 €/Go/mois) ou snapshots ; seul le compute est recréé.

== Coût annuel hors école

#dtable(
  columns: (auto, 1fr, auto),
  headers: ("Scénario", "Ce qu'il comprend", "Coût annuel"),
  rows: (
    ("VPS simple (auto-géré)", "2× Hetzner CAX41 (ARM) + backups + volumes + Load Balancer + domaine + IA", "~1 500 à 1 800 €/an"),
    ("Cloud managé EU", "Scaleway / OVH : 3 nœuds + PostgreSQL managé + Object Storage + LB + IA", "~3 000 à 3 700 €/an"),
    ("Hyperscaler (référence)", "Azure AKS équivalent (multi-région, SLA entreprise)", "~6 000 à 10 000 €/an"),
  ),
)

#text(size: 8.5pt, fill: mut)[Ordres de grandeur, faible trafic et usage IA modéré. Passer hyperscaler avant d'en avoir le besoin serait du sur-engineering.]
