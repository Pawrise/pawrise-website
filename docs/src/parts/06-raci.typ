#import "../lib.typ": keybox, brand, accent, accent2, mut, faint, hair
#import "../../data/raci.typ": RACI_POLES, RACI_STD, RACI_STRICT

= Matrice RACI

La RACI attribue, pour chaque activité, un rôle à chaque pôle : *R* responsable (produit le livrable), *A* approbateur (garant, valide), *C* consulté, *I* informé. Elle arbitre au niveau des *pôles*, l'échelon de responsabilité ; la responsabilité *individuelle*, tâche par tâche, est portée en aval par la couverture nominative par domaine (partie Organisation) et par l'assignation nominative des tickets dans Jira, où chacun des 10 membres a ses tâches attribuées (partie Planning).

== Règle appliquée

#keybox(title: "La vraie règle RACI")[
  Le seul impératif du standard est : *exactement un A (garant) par activité* et *au moins un R*. Les C et I sont en nombre libre. Un même pôle peut être A et R (noté A/R). Nous présentons deux lectures : une version standard (A distribué par pôle) et une version au format demandé en suivi (un R, un A, un C par activité).
]

// ---- Rendu coloré des cellules RACI --------------------------------------
#let rfill(v) = if v == "A" or v == "A/R" { brand } else if v == "R" { accent2 } else if v == "C" { rgb("#e9f3ca") } else if v == "I" { rgb("#eef0f5") } else { white }
#let rfg(v) = if v == "A" or v == "A/R" or v == "R" { white } else if v == "C" { brand } else { faint }
#let chip(v, label) = box(fill: rfill(v), radius: 2pt, inset: (x: 5pt, y: 1.5pt))[#text(fill: rfg(v), weight: 700, size: 8pt)[#label]]

#let racitable(data) = {
  set text(size: 8.5pt)
  table(
    columns: (1fr,) + (1.5cm,) * 6,
    stroke: (x, y) => (bottom: 0.5pt + hair),
    align: (x, y) => if x == 0 { left + horizon } else { center + horizon },
    inset: (x: 5pt, y: 6pt),
    table.header(
      table.cell(fill: brand)[#text(fill: white, weight: 800, size: 7.5pt)[Activité]],
      ..RACI_POLES.map(p => table.cell(fill: brand)[#text(fill: white, weight: 800, size: 7pt)[#p]]),
    ),
    ..data.map(r => (
      text(size: 8.5pt)[#r.at(0)],
      ..r.slice(1).map(v => table.cell(fill: rfill(v))[#text(fill: rfg(v), weight: 700, size: 8.5pt)[#v]]),
    )).flatten()
  )
}

Légende : #chip("A", "A") garant · #chip("R", "R") responsable · #chip("C", "C") consulté · #chip("I", "I") informé.

== Version standard (A distribué)

#block(breakable: false)[
Chaque pôle est garant de son propre livrable ; le Product Owner reste garant du cadrage et de la gouvernance (RGPD, qualité).

#racitable(RACI_STD)
]

== Version format suiveur (1 R / 1 A / 1 C)

#block(breakable: false)[
Exactement un R, un A et un C par activité, le reste en I. Plus stricte que le standard, mais toujours valide (un A unique, au moins un R). Le Product Owner est l'approbateur unique.

#racitable(RACI_STRICT)
]

Le C unique n'est pas arbitraire : c'est le pôle dont le livrable *dépend le plus directement*, son interface principale. Par exemple, le collier consulte le *Fullstack* (protocole de transmission vers le backend), et le portail vétérinaire consulte l'*IA/Data* (résumés et alertes affichés). Le cadrage initial, transverse par nature, consulte en réalité tous les pôles (voir version standard) ; la version stricte n'en retient qu'un par convention de format.

== Contrôle de cohérence

Les deux matrices respectent des invariants vérifiables, garants de leur validité :

- *Un A par activité* : chaque activité a exactement un garant → aucune décision sans responsable de validation.
- *Au moins un R par activité* : chaque livrable a un pôle qui le produit → aucun angle mort.
- *Chaque pôle est R (ou A/R) au moins une fois* : aucun pôle sans responsabilité propre (Fullstack : API et portail ; IoT : collier ; Design/Mobile : app ; IA/Data : Care Engine ; Cloud/Ops : infra ; PO : cadrage).
- *Gouvernance centralisée* : le PO reste garant (A) du cadrage, de la conformité RGPD et de la qualité, cohérent avec son rôle transverse dans l'OBS.

#text(size: 8.5pt, fill: mut)[Les 6 colonnes recoupent l'OBS : Pilotage (PO), Fullstack (backend & portail), IoT (collier), Design/Mobile (app), IA/Data (Care Engine), Cloud/Ops (infra).]
