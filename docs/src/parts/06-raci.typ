#import "../lib.typ": dtable, keybox, brand, mut
#import "../../data/raci.typ": RACI_POLES, RACI_STD, RACI_STRICT

= Matrice RACI

La RACI attribue, pour chaque activité, un rôle à chaque pôle : *R* responsable (produit le livrable), *A* approbateur (garant, valide), *C* consulté, *I* informé.

== Règle appliquée

#keybox(title: "La vraie règle RACI")[
  Le seul impératif du standard est : *exactement un A (garant) par activité* et *au moins un R*. Les C et I sont en nombre libre. Un même pôle peut être A et R (noté A/R). Nous présentons deux lectures : une version standard (A distribué par pôle) et une version au format demandé en suivi (un R, un A, un C par activité).
]

== Version standard (A distribué)

Chaque pôle est garant de son propre livrable ; le Product Owner reste garant du cadrage et de la gouvernance (RGPD, qualité).

#dtable(
  columns: (1fr,) + (auto,) * RACI_POLES.len(),
  headers: ("Activité",) + RACI_POLES.flatten(),
  rows: RACI_STD,
  align-cells: center,
)

== Version format suiveur (1 R / 1 A / 1 C)

Exactement un R, un A et un C par activité, le reste en I. Plus stricte que le standard, mais toujours valide (un A unique, au moins un R). Le Product Owner est l'approbateur unique.

#dtable(
  columns: (1fr,) + (auto,) * RACI_POLES.len(),
  headers: ("Activité",) + RACI_POLES.flatten(),
  rows: RACI_STRICT,
  align-cells: center,
)

#text(size: 8.5pt, fill: mut)[Les 6 colonnes recoupent l'OBS : Pilotage (PO), Fullstack (backend & portail), IoT (collier), Design/Mobile (app), IA/Data (Care Engine), Cloud/Ops (infra).]
