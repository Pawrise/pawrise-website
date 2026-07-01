#import "../lib.typ": dtable, keybox, keep, brand, lime, mut, hair, zebra, faint

= Organisation & compétences

== OBS · organisation des responsabilités

#let poles = (
  ("Backend / API", "Hamid · Aaditya", "API, ingestion, base de données, authentification, Vet Portal"),
  ("IoT / Hardware", "Cyril · Ibrahim", "Firmware, capteurs, simulateur, collier"),
  ("IA / Data", "Nino · Yassine", "Care Engine, RAG, POCs, pipeline de données"),
  ("Design / Mobile", "Adam · Elarif", "UX/UI, app mobile, identité visuelle, étude de marché"),
  ("Cloud / DevOps", "Oumar · Abderrahmane", "Cloud, CI/CD, monitoring, sécurité"),
)
#keep[
Dix personnes réparties en cinq pôles de deux, sous le pilotage du Product Owner (Yassine El Gherrabi, qui cumule pilotage produit et contribution IA/Data).

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("Pôle", "Membres", "Périmètre"),
  rows: poles,
)
]

Elarif est rattaché au pôle Design/Mobile (binôme avec Adam sur l'application) mais intervient en transverse sur le Backend, la CI/CD, le marché et le lien vétérinaire.

== Couverture nominative

#keep[
Chaque domaine est porté par un ou plusieurs responsables nommés, avec un backup identifié pour assurer la continuité.

#dtable(
  columns: (auto, 1fr, 1fr),
  headers: ("Domaine", "Responsable(s)", "Backup"),
  rows: (
    ("Product Ownership", "Yassine", "Elarif (transverse, vision produit)"),
    ("IoT / Hardware", "Cyril, Ibrahim", "Hamid (support embarqué)"),
    ("Backend / API", "Hamid, Aaditya, Elarif", "Yassine"),
    ("IA / Data", "Nino, Yassine", "Hamid (pipelines Python)"),
    ("Mobile / Frontend", "Adam, Elarif", "Hamid, Aaditya"),
    ("Design / UX", "Adam", "Elarif (intégration front)"),
    ("Market / Business", "Adam, Elarif", "Yassine (PO)"),
    ("Cloud / DevOps", "Oumar, Abderrahmane", "Elarif (CI/CD)"),
    ("Réseau vétérinaire", "Elarif, Nino", "Binôme (2 contacts vété distincts)"),
  ),
)
]

== Matrice de compétences (extrait)

Niveaux : #box(rect(width:8pt,height:8pt,fill:brand)) expert · #box(rect(width:8pt,height:8pt,fill:rgb("#7d79c0"))) intermédiaire · #box(rect(width:8pt,height:8pt,fill:rgb("#c9c7e8"))) débutant · #box(rect(width:8pt,height:8pt,fill:zebra,stroke:0.5pt+hair)) aucune expérience.

#let lvlcol = (l) => if l == 3 { brand } else if l == 2 { rgb("#7d79c0") } else if l == 1 { rgb("#c9c7e8") } else { zebra }
#let skills = (
  ("Rust", (3,1,0,2,0,0,0,0,0,0)),
  ("Python", (3,3,1,0,1,2,2,0,1,2)),
  ("Microcontrôleurs (ESP32)", (0,0,1,3,0,0,0,0,0,0)),
  ("Firmware C/C++ embarqué", (1,1,0,3,0,1,0,0,0,0)),
  ("IA · NLP / LLM / RAG", (3,0,0,0,0,0,0,0,0,0)),
  ("React / Next.js", (0,2,2,2,2,2,1,3,2,1)),
  ("Docker / Conteneurisation", (3,3,2,0,1,2,0,2,1,1)),
  ("CI/CD", (2,3,2,0,1,2,0,2,2,1)),
  ("Architecture logicielle", (3,2,2,3,1,2,0,3,1,2)),
  ("UI / UX Design", (0,2,0,0,1,2,1,3,0,1)),
  ("Réseau vétérinaire", (0,3,0,0,0,0,2,0,0,0)),
)
#set text(size: 8pt)
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
#set text(size: 10.5pt)

== Justification de l'équipe

L'équipe a été constituée pour que chaque membre couvre un besoin réel du projet (IoT, Backend, IA, Mobile, Design, Cloud, Business). Trois membres sont co-fondateurs et promoteurs du projet : Yassine, Ibrahim et Elarif. Les profils clés : Yassine (3 ans NLP/LLM en production → Care Engine), Cyril (le plus expérimenté en embarqué, STM32/ESP32, projets IoT persos), Ibrahim (fullstack évoluant vers l'IoT, LoRaWAN), Nino (data engineer, ETL), Adam (designer + commercial, 3 ans freelance), Oumar et Abderrahmane (binôme Cloud/DevOps, même socle Epitech).
