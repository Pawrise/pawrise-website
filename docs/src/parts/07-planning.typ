#import "../lib.typ": dtable, keybox, brand, lime, accent, mut, hair, zebra

= Planning & méthodologie

== Vue d'ensemble

Projet sur 20 mois (décembre 2025 → juillet 2027), en trois phases : *Conception* (livrables pour la keynote de juin 2026), *Développement* (tous les composants en parallèle), *Intégration* (assemblage, tests, stabilisation). Le parallélisme est possible car les composants sont volontairement peu couplés ; le portail vétérinaire est le seul vraiment dépendant (backend + IA), d'où un démarrage plus tardif.

== Diagramme de Gantt

#let mlabels = ("D25","J","F","M","A","M","J","J","A","S","O","N","D26","J","F","M","A","M","J","J27")
#let gtask(label, s, e, crit, seg: none) = {
  (
    text(size: 7.5pt)[#if crit [#box(circle(radius: 2pt, fill: lime)) ]#label],
    ..range(20).map(i => {
      let inrange = i >= s and i <= e
      let col = if seg != none and i <= seg { rgb("#b9b6e0") } else { accent }
      box(width: 100%, height: 7pt, radius: 1pt, fill: if inrange { col } else { none })
    })
  )
}
#set text(size: 7pt)
#table(
  columns: (6.2em,) + (1fr,) * 20,
  stroke: (x, y) => (bottom: 0.4pt + hair),
  inset: (x: 1.5pt, y: 3pt),
  align: horizon,
  fill: (x, y) => if y == 0 { brand },
  table.header(text(fill: white, weight: 700, size: 6.5pt)[Tâche], ..mlabels.map(m => text(fill: white, size: 6pt, m))),
  ..gtask("Cadrage", 0, 3, false),
  ..gtask("Marché/design", 1, 5, false),
  ..gtask("Archi/bench", 2, 5, false),
  ..gtask("POCs", 4, 6, false),
  ..gtask("Infrastructure", 7, 9, true),
  ..gtask("Backend & API", 7, 13, true),
  ..gtask("Collier IoT", 7, 16, false, seg: 11),
  ..gtask("Moteur IA", 7, 16, true, seg: 11),
  ..gtask("App Mobile", 7, 17, false),
  ..gtask("Portail Véto", 14, 17, true),
  ..gtask("Intégration", 17, 19, true),
)
#set text(size: 10.5pt)
#text(size: 8pt, fill: mut)[#box(circle(radius: 2pt, fill: lime)) chemin critique · zone claire = phase de dé-risquage (simulateur / POC) avant l'engagement du coûteux.]

== Jalons

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("#", "Date", "Jalon"),
  rows: (
    ("1", "Juin 2026", "Keynote (tous les livrables de conception prêts)"),
    ("2", "Sep 2026", "Infrastructure opérationnelle"),
    ("3", "Nov 2026", "Simulateur collier"),
    ("4", "Jan 2027", "Backend complet"),
    ("5", "Avr 2027", "MVP intégré (Care Engine + backend)"),
    ("6", "Mai 2027", "Portail vétérinaire livré"),
    ("7", "Juil 2027", "Fin de projet (produit testé et stabilisé)"),
  ),
)

== Dépendances clés

- *Infrastructure → Backend* : le backend se déploie sur l'infrastructure.
- *Simulateur collier → Moteur IA* : l'IA s'entraîne et se teste sur des données simulées.
- *Backend (API) → App Mobile* : l'app consomme les API au fil de l'eau.
- *Moteur IA + Backend → Portail Véto* : alertes et rapports viennent de l'IA et des données.

== Méthodologie

*Scrum adapté* (agile itératif). Le périmètre évolue avec les apprentissages (POCs IA, faisabilité hardware, retours du vétérinaire partenaire) : on livre par incréments, on réoriente à chaque sprint. Sprints de 2 semaines, daily / point d'équipe, sprint review, rétrospective. Rôles : Product Owner (Yassine), Scrum Master tournant, équipe par pôles. Outils : Jira (backlog, sprints, story points), Confluence (docs), GitHub (code, PR, CI), Figma (design).

*Alternatives écartées :* Waterfall (cahier des charges figé, incompatible avec l'incertitude R&D) ; Kanban pur (pas de cadence ni d'engagement de sprint, peu de prévisibilité pour 10 personnes) dont on retient le tableau visuel et la limite de WIP.

*Estimation :* Planning Poker sur échelle de Fibonacci (1, 2, 3, 5, 8, 13). Au-delà de 13 points, le ticket est découpé.
