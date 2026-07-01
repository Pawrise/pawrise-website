#import "../lib.typ": dtable, keybox, brand, mut
#import "../../data/econ.typ": ECON
#import "../../data/bom.typ": BOM, BOM_TOTAL
#import "../../data/cloudbudget.typ": CLOUDBUDGET, CLOUD_TOTAL

= Modèle économique & budget

== Modèle économique

Le hardware est vendu proche de son coût ; la rentabilité vient de l'*abonnement récurrent*. Le modèle intègre un *pool façon Spotify* : une part fixe de l'abonnement finance le réseau vétérinaire, ce qui plafonne le coût vétérinaire par construction et protège la marge contributive.

*Hypothèses :* abonnement 9,90 €/mois (ordre de grandeur du marché) ; marge contributive après cloud, API LLM et pool vétérinaire ; durée de vie client = 1 / churn mensuel ; LTV = abonnement × durée de vie × marge.

== Unit economics (3 scénarios)

#dtable(
  columns: (1fr, auto, auto, auto),
  headers: ("Métrique", "Optimiste", "Base", "Pessimiste"),
  rows: ECON,
  align-cells: left,
)

#text(size: 8.5pt, fill: mut)[Scénario pessimiste : LTV:CAC inférieur à 1, le client résilie (≈ 12 mois) avant d'avoir remboursé son coût d'acquisition. Le payback n'est jamais atteint : c'est le scénario que le modèle doit éviter, en réduisant le churn et le CAC.]

== Budget prévisionnel · collier (BOM)

Nomenclature du prototype, option retenue (LTE sur mesure). Les composants sont alignés sur la partie IoT.

#dtable(
  columns: (1fr, auto),
  headers: ("Composant", "Coût unitaire"),
  rows: BOM,
)
#align(right)[#text(fill: brand, weight: 800)[Total unitaire : #BOM_TOTAL]]

== Budget cloud & exploitation (11 mois)

Coûts de fonctionnement sur la phase projet : hébergement souverain Hetzner (cluster Kubernetes, ligne ARM) et modèle de langage.

#dtable(
  columns: (1fr, auto, auto),
  headers: ("Poste", "Détail", "Coût"),
  rows: CLOUDBUDGET,
)
#align(right)[#text(fill: brand, weight: 800)[Total exploitation : #CLOUD_TOTAL]]

#keybox(title: "Cohérence des coûts")[
  Hébergement 100 % Hetzner (souverain, UE), chiffré sur la ligne ARM la plus rentable depuis la hausse des prix Hetzner de juin 2026 ; borne haute sur les anciens prix AMD ≈ 987 €. Azure n'intervient que pour le modèle de langage. Le coût IA est d'environ 0,03 à 0,05 € par conversation et passe à l'échelle avec les abonnements. Détail sur les parties Cloud et Assistant IA.
]
