// Export SVG · matrice de compétences (extrait de parts/05-organisation.typ).
// Toute modification de la matrice doit être reportée ici et dans la partie source.
#import "../lib.typ": brand, hair

#set page(width: 19cm, height: auto, margin: 14pt, fill: white)
#set text(font: ("Helvetica Neue", "Arial"), size: 8pt, fill: rgb("#1b1b2e"), lang: "fr")

#let c3 = rgb("#0e7a3d")
#let c2 = rgb("#6fbf4b")
#let c1 = rgb("#f5c542")
#let c0 = rgb("#e6e8ef")
Niveaux : #box(rect(width:8pt,height:8pt,radius:1pt,fill:c3)) expert · #box(rect(width:8pt,height:8pt,radius:1pt,fill:c2)) intermédiaire · #box(rect(width:8pt,height:8pt,radius:1pt,fill:c1)) débutant · #box(rect(width:8pt,height:8pt,radius:1pt,fill:c0,stroke:0.5pt+hair)) aucune expérience.

#let lvlcol = (l) => if l == 3 { c3 } else if l == 2 { c2 } else if l == 1 { c1 } else { c0 }
#let skills = (
  ("Rust", (3,1,0,2,0,0,0,0,0,0)),
  ("Python", (3,3,1,0,1,2,2,0,1,2)),
  ("Microcontrôleurs (ESP32)", (0,0,1,3,0,0,0,0,0,0)),
  ("Firmware C/C++ embarqué", (1,1,0,3,0,1,0,0,0,0)),
  ("IA · NLP / LLM / RAG", (3,0,0,0,0,0,0,0,0,0)),
  ("React / Next.js", (0,2,2,2,2,2,3,3,2,1)),
  ("Kotlin (Android)", (0,0,0,0,0,0,0,0,3,0)),
  ("Swift / SwiftUI (iOS)", (2,2,0,0,0,0,0,2,0,0)),
  ("Docker / Conteneurisation", (3,3,2,0,1,2,0,2,1,1)),
  ("CI/CD", (2,3,2,0,1,2,0,2,2,1)),
  ("Architecture logicielle", (3,2,2,3,1,2,0,3,1,2)),
  ("UI / UX Design", (0,2,0,0,1,2,1,3,0,1)),
  ("Réseau vétérinaire", (0,3,0,0,0,0,2,0,0,0)),
)
#let members = ("Yassine","Elarif","Ibrahim","Cyril","Aaditya","Hamid","Nino","Adam","Oumar","Abderrahmane")
#table(
  columns: (4.6cm,) + (1fr,) * 10,
  stroke: (x, y) => (bottom: 0.5pt + hair),
  inset: (x: 4pt, y: 5pt),
  align: (x, y) => if x == 0 { left + bottom } else { center + bottom },
  fill: (x, y) => if y == 0 { brand },
  table.header(
    box(height: 62pt)[#place(bottom + left)[#text(fill: white, weight: 800, size: 7.5pt)[Compétence]]],
    ..members.map(m => box(height: 62pt)[#place(bottom + center)[#rotate(-90deg, reflow: true, text(fill: white, weight: 700, size: 7.5pt, m))]]),
  ),
  ..skills.map(row => (text(size: 8pt, row.at(0)),) + row.at(1).map(l => align(center, box(width: 12pt, height: 11pt, radius: 2pt, fill: lvlcol(l))))).flatten()
)
