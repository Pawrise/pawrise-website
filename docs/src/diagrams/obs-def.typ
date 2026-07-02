// Diagramme OBS enrichi · partagé entre le dossier (parts/05-organisation.typ)
// et l'export SVG (diagrams/obs-organigramme.typ). Une seule source de vérité.
#import "../lib.typ": brand, mut, hair

#let obs-dcol = (svc: rgb("#eef7ee"), edge: rgb("#e7f6f4"), ai: rgb("#f0edfb"), cli: rgb("#eaf1fb"), data: rgb("#ecebf6"))
#let obs-stroke = 1pt + rgb("#5b57b0")

#let obs-lbl(t) = text(size: 5.6pt, fill: mut, weight: 700, tracking: 0.5pt)[#t]

#let obs-pole(n, name, refs, transverse, fill, perim, livr, backup) = box(
  width: 100%, height: 6cm, radius: 4pt, stroke: 0.6pt + hair, clip: true,
)[
  #set par(justify: false, leading: 0.5em)
  #block(fill: fill, width: 100%, height: 1.35cm, inset: (x: 7pt, y: 5pt))[
    #text(size: 5.8pt, fill: mut, tracking: 0.8pt)[PÔLE 0#n]\
    #text(fill: brand, weight: 900, size: 8.5pt)[#name]\
    #text(size: 6.4pt)[Référents · #text(weight: 700)[#refs]]
    #if transverse != none [\ #text(size: 6pt, fill: mut)[Transverse · #transverse]]
  ]
  #block(inset: (x: 7pt, y: 5pt))[
    #obs-lbl("PÉRIMÈTRE")\
    #text(size: 6.3pt)[#perim]
    #v(3pt)
    #obs-lbl("LIVRABLES")\
    #text(size: 6.3pt)[#livr]
    #v(3pt)
    #obs-lbl("BACKUP")\
    #text(size: 6.3pt)[#backup]
  ]
]

#let obs-diagram() = {
  let CW = (100% - 32pt) / 5
  stack(
    spacing: 0pt,
    // Racine · Product Owner (périmètre, livrables, backup)
    align(center, box(fill: brand, radius: 4pt, inset: (x: 14pt, y: 9pt), width: 62%)[
      #set par(justify: false, leading: 0.5em)
      #set align(center)
      #text(size: 6pt, fill: white.transparentize(25%), tracking: 1pt)[COORDINATION · PRODUCT OWNER]\
      #text(fill: white, weight: 900, size: 10pt)[Yassine El Gherrabi]
      #v(4pt)
      #grid(columns: (1fr, 1fr), column-gutter: 12pt, align: left,
        [
          #text(size: 5.6pt, fill: white.transparentize(30%), weight: 700, tracking: 0.5pt)[PÉRIMÈTRE]\
          #text(size: 6.3pt, fill: white)[Vision produit · backlog & priorisation · arbitrages · cohérence fonctionnelle · gouvernance (RGPD, qualité)]
        ],
        [
          #text(size: 5.6pt, fill: white.transparentize(30%), weight: 700, tracking: 0.5pt)[LIVRABLES]\
          #text(size: 6.3pt, fill: white)[Backlog priorisé · roadmap projet · arbitrages produit · validation des jalons]
        ],
      )
      #v(3pt)
      #text(size: 6pt, fill: white.transparentize(20%))[Backup · Elarif (transverse, vision produit)]
    ]),
    // Connecteurs : descente, barre de distribution, 5 attaches
    align(center, line(angle: 90deg, length: 7pt, stroke: obs-stroke)),
    box(width: 100%, height: 0pt)[#place(top + left, dx: CW / 2, line(length: 100% - CW, stroke: obs-stroke))],
    grid(columns: (1fr,) * 5, column-gutter: 8pt, ..range(5).map(_ => align(center, line(angle: 90deg, length: 7pt, stroke: obs-stroke)))),
    // Les 5 pôles
    grid(
      columns: (1fr,) * 5,
      column-gutter: 8pt,
      obs-pole("1", "Fullstack", "Hamid · Aaditya", "Elarif", obs-dcol.svc,
        [Backend & portail : API, ingestion des données, base de données, authentification, Vet Portal.],
        [API fonctionnelle · schéma de données · endpoints d'ingestion · portail vétérinaire · services documentés],
        [Yassine]),
      obs-pole("2", "IoT", "Cyril · Ibrahim", "Elarif (embarqué)", obs-dcol.edge,
        [Collier : firmware, capteurs, simulateur, prototype matériel.],
        [Prototype collier · firmware de test · choix capteurs · validation batterie / connectivité],
        [Hamid, Elarif]),
      obs-pole("3", "Design / Mobile", "Adam · Elarif", none, obs-dcol.cli,
        [App : UX/UI, app mobile, identité visuelle, étude de marché.],
        [Maquettes & parcours utilisateur · écrans mobile · identité visuelle · retours marché],
        [Oumar (Android), Hamid, Aaditya]),
      obs-pole("4", "IA / Data", "Nino · Yassine", none, obs-dcol.ai,
        [Care Engine : RAG, POCs, pipeline de données.],
        [Pipeline de données · moteur d'analyse testable · règles d'alerte · prototype RAG encadré],
        [Hamid (pipelines Python)]),
      obs-pole("5", "Cloud / Ops", "Oumar · Abderrahmane", none, obs-dcol.data,
        [Infra : cloud, CI/CD, monitoring, sécurité.],
        [Environnement déployé · pipeline CI/CD · monitoring · configuration sécurité · documentation infra],
        [Elarif (CI/CD)]),
    ),
  )
}
