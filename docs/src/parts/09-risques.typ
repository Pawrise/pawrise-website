#import "../lib.typ": dtable, keybox, accent
#import "../../data/amdec.typ": AMDEC
#import "../../data/riskmap.typ": RISKMAP

= Gestion des risques

La maîtrise des risques repose sur deux analyses complémentaires : une *AMDEC* centrée sur le produit (modes de défaillance techniques) et une *Risk Map* centrée sur le projet (probabilité contre impact).

== AMDEC produit

L'AMDEC évalue chaque mode de défaillance par son indice de priorité de risque #text(weight: 700)[IPR = G × O × D] (Gravité × Occurrence × Détection, chaque facteur de 1 à 10). Les modes sont triés par IPR décroissant : la priorisation se lit de haut en bas.

#dtable(
  columns: (auto, auto, 1fr, 16pt, 16pt, 16pt, auto, auto),
  headers: ("Code", "Sous-système", "Mode de défaillance", "G", "O", "D", "IPR", "Niveau"),
  rows: AMDEC.map(r => (r.at(0), r.at(1), r.at(2), r.at(4), r.at(5), r.at(6), r.at(7), r.at(8))),
)

#text(size: 8.5pt, fill: rgb("#55566b"))[Seuils : IPR < 30 faible · 30–59 modéré · 60–99 élevé · ≥ 100 critique. La détection est inversée (1 = très détectable, 10 = indétectable).]

== Risk Map projet

La Risk Map positionne chaque risque projet selon son score #text(weight: 700)[Score = P × I] (Probabilité × Impact, de 1 à 5). Registre trié par score décroissant.

#dtable(
  columns: (auto, auto, 1fr, 22pt, 22pt, auto, auto),
  headers: ("ID", "Catégorie", "Risque", "P", "I", "Score", "Niveau"),
  rows: RISKMAP,
)

#text(size: 8.5pt, fill: rgb("#55566b"))[Zones : Score ≥ 15 critique · 9–14 élevé · 5–8 modéré · 1–4 faible.]

#keybox(title: "Politique de traitement")[
  Un plan de mitigation est rédigé pour chaque risque dont le score est supérieur ou égal à 9, rattaché aux actions de l'AMDEC et aux jalons de dé-risquage du planning. Les risques sous ce seuil sont surveillés sans plan dédié.
]
