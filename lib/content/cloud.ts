// Contenu Cloud & Infrastructure · choix d'hébergement, stack IaC/GitOps,
// stratégie de scale et maîtrise des coûts.
// Prix Hetzner à jour post-augmentation du 15 juin 2026 (ligne ARM CAX, +30 %
// seulement ; les lignes AMD CPX/CCX ont pris +113 à +176 %).

export const CLOUD_PRINCIPLES = [
  { t: "Souveraineté & RGPD", d: "Toute l'infrastructure et les données de santé animale restent en Union européenne (Hetzner aujourd'hui, Scaleway France au scale). Azure n'intervient que comme fournisseur de modèle (Azure OpenAI EU), jamais comme hébergeur des données." },
  { t: "Infrastructure as Code", d: "Toute l'infra est décrite en Terraform : un cluster se recrée à l'identique en une commande. Zéro configuration manuelle, donc reproductible, versionnée et auditable." },
  { t: "GitOps", d: "Git est la seule source de vérité. Argo CD synchronise en continu l'état du cluster avec le dépôt : on déploie en mergeant une Pull Request, on revient en arrière en révertant un commit." },
  { t: "Maîtrise des coûts", d: "Lignes ARM (les moins chères), environnements de dev éphémères détruits hors usage, et hébergement auto-géré nettement moins cher qu'un cloud managé à capacités égales." },
  { t: "Observabilité", d: "Chaque service est tracé de bout en bout (OpenTelemetry) ; métriques (Prometheus), logs (Loki) et traces (Tempo) sont centralisés dans Grafana pour diagnostiquer vite." },
];

export type CloudTech = { name: string; role: string; why: string };
export const CLOUD_STACK: CloudTech[] = [
  { name: "Terraform", role: "Provisionnement", why: "Décrit et crée toute l'infra Hetzner (nœuds, réseau, volumes, firewall) de façon reproductible. Permet de détruire puis recréer un environnement à la demande." },
  { name: "Kubernetes", role: "Orchestration", why: "Fait tourner et auto-répare la vingtaine de conteneurs (services Rust, Care Engine, Kafka, bases, observabilité) : redémarrage automatique, placement, montée en charge horizontale." },
  { name: "Helm", role: "Packaging", why: "Empaquette chaque service en chart versionné et paramétrable (dev / prod), pour des déploiements répétables." },
  { name: "Argo CD", role: "Déploiement GitOps", why: "Déploie automatiquement depuis Git : l'état réel du cluster suit toujours le dépôt, rollback par simple revert de commit." },
  { name: "SOPS + age", role: "Secrets", why: "Chiffre les secrets (clés, mots de passe) directement dans Git : rien en clair, déchiffrement uniquement dans le cluster." },
  { name: "step-ca", role: "PKI interne", why: "Autorité de certification interne : chaque collier et chaque service s'authentifie en mTLS par certificat." },
  { name: "OpenTelemetry + Prometheus / Loki / Tempo / Grafana", role: "Observabilité", why: "Métriques, logs et traces unifiés : on voit l'état du système et on remonte une requête à travers tous les services." },
  { name: "KrakenD + Traefik / cert-manager", role: "Gateway & Ingress", why: "KrakenD agrège les API ; Traefik et cert-manager gèrent l'entrée HTTP et les certificats TLS automatiques." },
];

// Comparatif des modèles d'hébergement (lignes = critères).
export const HOSTING_COLS = ["Bare Metal", "VPS auto-géré (Hetzner)", "Cloud managé (Scaleway / hyperscaler)"];
export const HOSTING_ROWS: { crit: string; cells: string[] }[] = [
  { crit: "Coût à capacité égale", cells: ["Le plus bas, mais engagement", "Très bas (ARM), facturé à l'heure", "Plus élevé (compute premium)"] },
  { crit: "Scalabilité", cells: ["Manuelle, lente", "Horizontale via K8s (ajout de nœuds)", "Automatique (autoscaling managé)"] },
  { crit: "Ops à notre charge", cells: ["Tout, matériel inclus", "Le cluster K8s, automatisé par Terraform", "Minimale (control-plane + DB managés)"] },
  { crit: "RGPD / UE", cells: ["Selon hébergeur", "Oui (Hetzner, UE)", "Oui en région UE (Scaleway / OVH, FR)"] },
  { crit: "Mise en place", cells: ["Plusieurs jours", "Quelques minutes (Terraform)", "Quelques minutes"] },
  { crit: "Adapté à", cells: ["Pas pour nous", "Maintenant (dev → keynote → early prod)", "Au scale (traction réelle)"] },
];
export const HOSTING_DECISION =
  "Décision : VPS Cloud Hetzner auto-géré, lignes ARM (CAX), provisionné par Terraform. Depuis la hausse des prix Hetzner du 15 juin 2026 (jusqu'à +176 % sur les lignes AMD CPX/CCX, +30 % seulement sur l'ARM CAX), la ligne ARM devient la plus rentable et reste largement suffisante pour notre charge. Le bare metal est écarté (trop d'ops matérielle pour une équipe étudiante) ; le cloud managé est gardé pour le passage à l'échelle.";

export type CloudPhase = { kind: string; periode: string; titre: string; points: string[] };
export const CLOUD_PHASES: CloudPhase[] = [
  {
    kind: "Maintenant",
    periode: "Dev → keynote → premiers utilisateurs",
    titre: "Hetzner Cloud auto-géré (Terraform)",
    points: [
      "Cluster Kubernetes provisionné par Terraform : control-plane CAX21 + 2 workers CAX31, environ 52 €/mois (~630 €/an) pour ~20 vCPU et 40 Go provisionnés, dimensionnés pour un besoin de ≈ 16 vCPU / 32 Go.",
      "Lignes ARM (CAX) : le meilleur rapport prix / puissance chez Hetzner depuis juin 2026.",
      "Déploiement GitOps via Argo CD, secrets chiffrés (SOPS + age), PKI interne (step-ca).",
      "Souveraineté UE (Allemagne / Finlande), 20 To de trafic inclus par serveur.",
    ],
  },
  {
    kind: "Scale",
    periode: "Quand la traction réelle le justifie (hors école)",
    titre: "Cloud managé EU · Scaleway Kapsule",
    points: [
      "Control-plane Kubernetes managé et gratuit : on n'opère plus le control-plane soi-même.",
      "PostgreSQL managé, Object Storage S3, Load Balancer et GPU à la demande.",
      "Reste en France / UE (RGPD), sans lock-in ni surcoût hyperscaler.",
      "Alternative équivalente : OVHcloud Managed K8s (egress UE gratuit). Azure AKS gardé pour un besoin multi-région ou un SLA entreprise.",
    ],
  },
];

export const COST_CONTROL = {
  intro:
    "Le réflexe « j'éteins les serveurs hors usage » ne fonctionne pas chez Hetzner : un serveur arrêté reste facturé tant qu'il n'est pas supprimé. Le bon mécanisme s'appuie sur l'Infrastructure as Code.",
  points: [
    "Facturation horaire avec un plafond mensuel : un serveur qui n'existe que quelques heures par jour est facturé au prorata.",
    "Environnements de dev éphémères : « terraform destroy » le soir et le week-end, « terraform apply » le matin.",
    "Un cluster de dev actif ~40 h/semaine au lieu de 168 h coûte environ 25 % du plafond, soit près de 70 % d'économie sur le compute de dev.",
    "Les données sont préservées sur des volumes persistants (~0,057 €/Go/mois) ou des snapshots ; seul le compute est détruit puis recréé.",
  ],
};

export type AnnualCost = { scenario: string; quoi: string; cout: string };
export const ANNUAL_COST: AnnualCost[] = [
  { scenario: "Bare metal (serveur dédié)", quoi: "Compute brut le moins cher, mais toute l'ops matérielle à notre charge : réservé à des tests, jamais à la production", cout: "~1 000 à 1 500 €/an" },
  { scenario: "Hetzner Cloud auto-géré (retenu)", quoi: "1× CAX21 + 2× CAX31 (ARM) + backups + volumes + Load Balancer + domaine + IA", cout: "≈ 1 750 €/an (dont ~150 € de dev)" },
  { scenario: "Cloud managé EU", quoi: "Scaleway / OVH : 3 nœuds + PostgreSQL managé + Object Storage + LB + IA", cout: "~3 000 à 3 700 €/an" },
  { scenario: "Hyperscaler (référence)", quoi: "Azure AKS équivalent (multi-région, SLA entreprise)", cout: "~6 000 à 10 000 €/an" },
];
export const ANNUAL_NOTE =
  "Ordres de grandeur, hors école. En phase projet (démo, faible trafic), l'IA coûte environ 15 €/mois ; au stade premiers utilisateurs, l'usage IA (Azure OpenAI cascade + Cohere) monte vers 30 à 50 €/mois. Le coût réel est piloté par le trafic et le volume de requêtes IA. Le chiffrage détaillé figure dans la page Budget.";

export const CLOUD_ANTI_OVERENG =
  "Pourquoi pas un hyperscaler tout de suite ? Coût 4 à 6 fois supérieur, souveraineté seulement partielle (le Cloud Act américain peut s'appliquer même en région UE), lock-in fournisseur et complexité inutile tant qu'on n'a ni multi-région ni SLA entreprise à tenir. On reste sur de l'auto-géré souverain et peu cher, et on bascule vers du managé le jour où la charge et l'équipe le justifient. Construire pour une échelle qu'on n'a pas encore, ce serait du sur-engineering.";
