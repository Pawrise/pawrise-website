#import "../lib.typ": dtable, keybox, brand, lime, mut, hair, faint

= Planning & méthodologie

== Vue d'ensemble

Projet sur 20 mois (décembre 2025 → juillet 2027), en trois phases : *Conception* (livrables pour la keynote de juillet 2026), *Développement* (les 11 epics produit, en parallèle), *Intégration* (assemblage, tests, stabilisation). Le parallélisme est possible car les composants sont volontairement peu couplés ; le portail vétérinaire (E7) est le seul vraiment dépendant (backend + IA), d'où un démarrage plus tardif.

== Diagramme de Gantt

Le diagramme ci-après (page suivante, en paysage) est *aligné sur les 11 epics du WBS* (mêmes codes E1–E11, mêmes couleurs de domaine) avec des *dates issues du backlog Jira*, pour une traçabilité directe WBS → PRD → Jira. Il reflète le travail réel de *5 pôles en parallèle* : aucun epic n'attend qu'un autre soit terminé. Chaque epic démarre par une *préparation* non bloquante (segment clair : design, maquettes / mocks, simulateur, machinerie) puis *consolide* quand sa dépendance réelle est prête (segment plein). Le *chemin critique* (●) et les *jalons* (◆) sont positionnés sur la frise ; la colonne du mois courant est surlignée. Le séquencement est justifié sous le diagramme.

#let cbar = (
  cross: rgb("#6b6f8a"),
  cli:   rgb("#3f7fe0"),
  edge:  rgb("#12a3b4"),
  ai:    rgb("#7b6cd9"),
  svc:   rgb("#2f9e63"),
  data:  rgb("#3b37a0"),
  rose:  rgb("#d6577f"),
  ext:   rgb("#e08a3c"),
)
#let gmonths = ("Déc","Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Déc","Jan","Fév","Mar","Avr","Mai","Juin","Juil")
#let msIdx = (7, 9, 11, 13, 16, 17, 19)
#let today = 7
#let crit = rgb("#0e7a3d")

#let lead(s) = if s > 0 { (table.cell(colspan: s)[],) } else { () }
#let trail(e) = if e < 19 { (table.cell(colspan: 19 - e)[],) } else { () }

// Tâche de phase (conception / intégration) : barre pleine + équipe
#let task(name, team, s, e, key) = {
  (
    table.cell(align: left + horizon, inset: (x: 5pt, y: 3pt))[#text(size: 7pt)[#name]],
    table.cell(align: left + horizon, inset: (x: 5pt, y: 3pt))[#text(size: 6pt, fill: mut)[#team]],
  ) + lead(s) + (table.cell(colspan: e - s + 1, inset: (x: 1pt, y: 3pt))[#box(width: 100%, height: 7pt, radius: 2.5pt, fill: cbar.at(key))],) + trail(e)
}

// Epic : code + nom + équipe, barre pleine (drend = fin du segment de dé-risquage)
#let epic(name, team, s, e, key, isc, drend) = {
  let col = cbar.at(key)
  let barcells = if drend == none {
    (table.cell(colspan: e - s + 1, inset: (x: 1pt, y: 3pt))[#box(width: 100%, height: 7pt, radius: 2.5pt, fill: col)],)
  } else {
    (
      table.cell(colspan: drend - s + 1, inset: (left: 1pt, right: 0pt, top: 3pt, bottom: 3pt))[#box(width: 100%, height: 7pt, radius: (left: 2.5pt), fill: col.lighten(58%))],
      table.cell(colspan: e - drend, inset: (left: 0pt, right: 1pt, top: 3pt, bottom: 3pt))[#box(width: 100%, height: 7pt, radius: (right: 2.5pt), fill: col)],
    )
  }
  (
    table.cell(align: left + horizon, inset: (x: 5pt, y: 3pt))[#text(size: 7pt, weight: 600)[#if isc [#text(fill: crit, weight: 700)[● ]]#name]],
    table.cell(align: left + horizon, inset: (x: 5pt, y: 3pt))[#text(size: 6pt, fill: mut)[#team]],
  ) + lead(s) + barcells + trail(e)
}

#let pband(txt, bg) = (table.cell(colspan: 22, fill: bg, align: left + horizon, inset: (x: 5pt, y: 2.5pt))[#text(weight: 700, size: 7pt, fill: brand)[#txt]],)

#page(flipped: true)[
  #align(center)[#text(fill: brand, weight: 800, size: 13pt)[Diagramme de Gantt · Pawrise Care]]
  #v(2pt)
  #align(center)[#text(size: 7.5pt, fill: mut)[
    Barre = epic (couleur = domaine WBS) · #box(baseline: 1pt, rect(width: 13pt, height: 6pt, radius: 2pt, fill: cbar.ai)) consolidation / intégration · #box(baseline: 1pt, rect(width: 13pt, height: 6pt, radius: 2pt, fill: cbar.ai.lighten(58%))) préparation (design / mocks / simulateur / machinerie) · #text(fill: crit, weight: 700)[●] chemin critique · #text(fill: crit)[◆] jalon · #box(baseline: 1pt, rect(width: 9pt, height: 6pt, fill: lime)) mois courant
  ]]
  #v(6pt)
  #table(
    columns: (4.6cm, 2.7cm) + (1fr,) * 20,
    align: horizon,
    inset: 0pt,
    stroke: (x, y) => (
      left: if x == 2 { 0.6pt + rgb("#b9bbd0") }
            else if x == 3 or x == 15 { 0.7pt + rgb("#a9abc6") }
            else if x > 3 and x <= 21 { 0.4pt + rgb("#d4d6e6") }
            else { none },
      bottom: 0.4pt + hair,
    ),
    table.header(
      table.cell(colspan: 2, fill: white, stroke: none)[],
      table.cell(colspan: 1, fill: brand, align: center, inset: 3pt)[#text(fill: white, size: 6pt, weight: 700)[2025]],
      table.cell(colspan: 12, fill: brand, align: center, inset: 3pt)[#text(fill: white, size: 6.5pt, weight: 700)[2026]],
      table.cell(colspan: 7, fill: brand, align: center, inset: 3pt)[#text(fill: white, size: 6.5pt, weight: 700)[2027]],
      table.cell(fill: brand, align: left + horizon, inset: (x: 5pt, y: 4pt))[#text(fill: white, weight: 800, size: 6.5pt)[Lot / epic]],
      table.cell(fill: brand, align: left + horizon, inset: (x: 5pt, y: 4pt))[#text(fill: white, weight: 800, size: 6.5pt)[Équipe]],
      ..gmonths.enumerate().map(p => table.cell(fill: if p.at(0) == today { lime } else { brand }, align: center + horizon, inset: (y: 4pt))[#text(fill: if p.at(0) == today { brand } else { white }, size: 5.8pt, weight: if p.at(0) == today { 700 } else { 400 })[#p.at(1)]]),
    ),
    ..pband("Phase 1 · Conception : Déc 2025 → Juin 2026 (livrables de cadrage + POCs)", rgb("#eef1fb")),
    ..task("Cadrage & spécifications (WBS, PRD)", "Toute l'équipe", 0, 3, "cross"),
    ..task("Marché, personas & design", "Adam · Elarif", 1, 5, "cli"),
    ..task("Architecture & benchmarks", "Pôles techniques", 2, 5, "svc"),
    ..task("POCs (simulateur, RAG)", "Nino · Yassine · Cyril", 4, 6, "ai"),
    ..pband("Phase 2 · Développement : Juil 2026 → Mai 2027 (11 epics produit, dates Jira)", rgb("#eafaf1")),
    ..epic("E11 · Plateforme & Ops", "Cloud/Ops", 7, 9, "data", true, none),
    ..epic("E2 · Collecte & stockage", "IoT · Backend", 7, 13, "edge", true, 10),
    ..epic("E1 · Onboarding & appairage", "Fullstack · Mobile", 7, 11, "cli", false, 8),
    ..epic("E9 · Conformité & RGPD", "Cloud/Ops · PO", 7, 16, "rose", false, 9),
    ..epic("E3 · Bien-être & activité", "Mobile · IA", 8, 15, "cli", false, 10),
    ..epic("E4 · Localisation & zones", "Mobile · Backend", 9, 16, "cli", false, 11),
    ..epic("E5 · Anomalies & alertes", "IA/Data", 9, 16, "ai", false, 12),
    ..epic("E6 · Assistant IA & escalade", "IA/Data", 9, 16, "ai", true, 13),
    ..epic("E7 · Vet Portal · dossier", "Fullstack", 11, 17, "svc", true, 13),
    ..epic("E8 · Abonnement & support", "Fullstack", 17, 18, "ext", false, none),
    ..epic("E10 · Téléconsultation & triage", "Fullstack · IA", 17, 19, "svc", false, none),
    ..pband("Phase 3 · Intégration : Mai → Juil 2027 (transverse)", rgb("#fdeef3")),
    ..task("Tests E2E (tous composants)", "Toute l'équipe", 17, 18, "cross"),
    ..task("Bêta interne + documentation", "Toute l'équipe", 18, 19, "cross"),
    table.cell(colspan: 2, align: left + horizon, inset: (x: 5pt, y: 4pt))[#text(size: 6.5pt, weight: 700, fill: brand)[Jalons]],
    ..range(20).map(i => table.cell(align: center + horizon, inset: (y: 3pt))[#if msIdx.contains(i) [#text(fill: crit, size: 8pt)[◆]]]),
  )
  #v(5pt)
  #align(center)[#text(size: 7.5pt, fill: mut)[Jalons : ◆ Keynote (juil. 2026) · Infra op. (sept.) · Simulateur (nov.) · Backend complet (janv. 2027) · MVP intégré (avr.) · Portail Véto (mai) · Fin de projet (juil. 2027). E8 et E10 sont post-MVP (démarrage après le MVP d'avril 2027). Détail en table ci-après.]]
]

== Jalons

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("#", "Date", "Jalon"),
  rows: (
    ("1", "Juil 2026", "Keynote (tous les livrables de conception prêts)"),
    ("2", "Sep 2026", "Infrastructure opérationnelle (E11)"),
    ("3", "Nov 2026", "Simulateur collier (dé-risquage E2)"),
    ("4", "Jan 2027", "Backend complet (E1, E2)"),
    ("5", "Avr 2027", "MVP intégré (E3–E6, E9 : Care Engine + backend)"),
    ("6", "Mai 2027", "Portail vétérinaire livré (E7)"),
    ("7", "Juil 2027", "Fin de projet (E8, E10, intégration : produit testé et stabilisé)"),
  ),
)

== Séquencement & dépendances

Les 5 pôles avancent en parallèle dès juillet ; *aucun pôle n'est bloqué* : chacun démarre la part non bloquante de son epic (design, maquettes / mocks, simulateur, machinerie) et ne *consolide* qu'une fois la dépendance réelle disponible. Quatre dépendances structurent l'ordre :

- *E11 Plateforme (socle)* : tout se déploie sur l'infrastructure ; construite en premier (juil. → sept.), puis exploitée en continu (déploiements, monitoring, RGPD infra).
- *E2 Collecte → features & IA* : la donnée alimente tout. Le *simulateur* (dès juillet) permet aux features (E3, E4) et à l'IA (E5, E6) de démarrer sur données simulées, sans attendre le collier réel.
- *Baseline de données → E5 Anomalies* : détecter une anomalie exige plusieurs mois d'historique par animal (démarrage à froid). La machinerie se prépare dès septembre ; le calibrage sur données réelles vient en décembre.
- *E6 IA + E2 données → E7 Vet Portal* : le portail affiche résumés et alertes. Son échafaudage démarre sur mocks (nov.) ; le câblage aux vraies sorties IA vient en février.

*E8 (abonnement)* et *E10 (téléconsultation)* sont *post-MVP* : différés par priorité (non requis pour valider le produit), pas par blocage technique.

== Méthodologie

*Scrum adapté* (agile itératif). Le périmètre évolue avec les apprentissages (POCs IA, faisabilité hardware, retours du vétérinaire partenaire) : on livre par incréments, on réoriente à chaque sprint. Sprints de 2 semaines, daily / point d'équipe, sprint review, rétrospective. Rôles : Product Owner (Yassine), Scrum Master tournant, équipe par pôles. Outils : Jira (backlog, sprints, story points), Confluence (docs), GitHub (code, PR, CI), Figma (design).

*Alternatives écartées :* Waterfall (cahier des charges figé, incompatible avec l'incertitude R&D) ; Kanban pur (pas de cadence ni d'engagement de sprint, peu de prévisibilité pour 10 personnes) dont on retient le tableau visuel et la limite de WIP.

*Estimation :* Planning Poker sur échelle de Fibonacci (1, 2, 3, 5, 8, 13). Au-delà de 13 points, le ticket est découpé.

#pagebreak()

== Outil de pilotage (Jira)

Le projet est piloté sur un board *Jira* (projet SCRUM, pawrise.atlassian.net) adopté par les *10 membres* : backlog produit, sprints, estimation en story points (Planning Poker) et *assignation nominative* des tâches. Les 11 epics du Gantt y portent leurs dates de début et d'échéance. Confluence héberge la documentation, GitHub le code et les revues (Pull Requests + CI), Figma le design. Le suivi des livraisons s'appuie sur un flux à quatre statuts.

#dtable(
  columns: (auto, 1fr),
  headers: ("Indicateur", "Valeur"),
  rows: (
    ("Tickets", "170+ (epics, tâches, sous-tâches, user stories)"),
    ("Epics", "23 · 12 cadrage & documentation, 11 produit"),
    ("User stories produit", "66, chacune avec critères d'acceptation Given/When/Then"),
    ("Membres avec tickets assignés", "10 / 10"),
    ("Flux de statuts", "À faire → En cours → Revue → Terminé"),
  ),
)
