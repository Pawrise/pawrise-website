#import "../lib.typ": keybox, brand, mut, hair, lime
#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge
#import fletcher.shapes: rect as frect

= Méthode BMAD

Les exigences, les epics et l'architecture de ce dossier ont été produits avec *BMAD* (Breakthrough Method for Agile AI-Driven Development), une méthode agile assistée par IA. Des *agents spécialisés* (Analyste, Product Manager, Architecte, Scrum Master, Développeur, QA) produisent et affinent les artefacts en deux temps : une *phase de planification* (brief, PRD, architecture), puis des *cycles de développement* itératifs (story → implémentation → revue). L'humain valide et arbitre à chaque étape : les agents accélèrent la production, ils ne décident pas seuls.

#v(4pt)
#align(center, box(inset: 4pt, {
  set text(size: 7.5pt)
  diagram(
    spacing: (10mm, 13mm),
    node-corner-radius: 3pt,
    node-stroke: 0.6pt + hair,
    // libellés de phase
    node((-0.9, 0), text(fill: brand, weight: 800, size: 8pt)[Phase 1\ Planification], stroke: none, fill: none),
    node((-0.9, 1), text(fill: brand, weight: 800, size: 8pt)[Phase 2\ Développement], stroke: none, fill: none),
    // phase 1
    node((0, 0), [*Analyste*\ Brief projet], fill: rgb("#eaf1fb")),
    node((1, 0), [*Product Manager*\ PRD · epics, FR/NFR], fill: rgb("#eaf1fb")),
    node((2, 0), [*Architecte*\ Architecture], fill: rgb("#eaf1fb")),
    // phase 2 (cycle)
    node((0, 1), [*Scrum Master*\ User story + AC], fill: rgb("#eef7ee")),
    node((1, 1), [*Développeur*\ Implémentation], fill: rgb("#eef7ee")),
    node((2, 1), [*QA*\ Revue & tests], fill: rgb("#eef7ee")),
    edge((0, 0), (1, 0), "-|>"),
    edge((1, 0), (2, 0), "-|>"),
    edge((2, 0), (0, 1), "-|>"),
    edge((0, 1), (1, 1), "-|>"),
    edge((1, 1), (2, 1), "-|>"),
    edge((2, 1), (0, 1), "-|>", bend: 42deg, label-side: right, label: text(size: 6.5pt, fill: mut)[boucle itérative]),
  )
}))

#text(size: 8pt, fill: mut)[Phase 1 : définir *le quoi* (documents de conception). Phase 2 : construire *le comment*, par incréments, chaque story étant relue et testée avant la suivante.]

== Ce que BMAD a produit, et où le retrouver

#keybox(title: "De la méthode au dossier")[
  - *Brief & vision du produit* → partie Vision & problématique.
  - *PRD : epics + exigences FR/NFR* → partie Exigences produit (PRD) et partie WBS & fonctions.
  - *Architecture technique* → partie Architecture technique.
  - *User stories & critères d'acceptation* → partie WBS & fonctions (backlog).
]

== Un usage adapté, pas automatique

BMAD structure et accélère la production des artefacts, mais ne remplace pas la décision humaine : chaque sortie d'agent est *relue, corrigée et validée* par l'équipe (choix technologiques, arbitrages de périmètre, conformité). C'est une aide à la conception, gouvernée par l'équipe.
