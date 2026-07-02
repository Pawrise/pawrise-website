#import "../lib.typ": keybox, brand, mut, lime, zebra, hair, limebg

= WBS & fonctions par epic

Ce *Work Breakdown Structure (WBS)* décompose le *périmètre total* du projet de façon *hiérarchique et orientée livrables*. Trois niveaux : le projet Pawrise Care (niveau 0), ses *11 epics* livrables (niveau 1, codes 1 à 11), et les *fonctions* attendues de chaque epic (niveau 2, codes 1.1, 1.2…). Les 66 user stories et leurs critères d'acceptation (Given/When/Then) affinent le niveau 2. Les codes FR/NFR affichés renvoient au référentiel défini en partie *Exigences produit (PRD)* ; la *traçabilité* epic vers exigences est portée par chaque carte ci-après (ligne « Exigences »).

Le diagramme unique ci-après (page suivante, en paysage) présente cette décomposition *sous forme d'arbre* : la racine (niveau 0, le projet) se ramifie vers les 11 epics livrables (niveau 1), dont chaque carte liste les *fonctions attendues* (niveau 2) ainsi que les *exigences* qu'elles couvrent, afin d'en faciliter l'implémentation. Les codes FR/NFR renvoient au référentiel de la partie *Exigences produit (PRD)*. Périmètre MVP : 9 epics (52 US) ; post-MVP : epics 8 et 10.

== User stories & critères d'acceptation

Chaque epic (niveau 1) se décline en *user stories* (66 au total, liste complète en annexe) ; chacune porte des *critères d'acceptation* testables au format Given/When/Then, qui rendent la fonction vérifiable et prête à implémenter. Exemple :

#keybox(title: "Story 1.1 · Création de compte sécurisée")[
  *En tant que* propriétaire d'animal, *je veux* créer un compte avec email et mot de passe, *afin d'*accéder à l'application en toute sécurité.\
  *Given* un visiteur sur l'écran d'inscription\
  *When* il saisit un email valide et un mot de passe respectant la politique de sécurité\
  *Then* un compte est créé et un email de vérification est envoyé\
  *And* un mot de passe faible ou un email déjà utilisé déclenche une erreur explicite sans créer de compte.
]

#let dcolor(d) = (
  if d == "cli" { rgb("#eaf1fb") }
  else if d == "edge" { rgb("#e7f6f4") }
  else if d == "ai" { rgb("#f0edfb") }
  else if d == "svc" { rgb("#eef7ee") }
  else if d == "ext" { rgb("#fdf3e7") }
  else if d == "rose" { rgb("#fdeef1") }
  else { rgb("#ecebf6") }
)
#let card(n, title, us, mvp, dom, funcs, fr) = block(
  width: 100%, height: 3.7cm, radius: 4pt, stroke: 0.6pt + hair, clip: true,
)[
  #block(fill: dcolor(dom), width: 100%, inset: (x: 6pt, y: 4pt))[
    #grid(columns: (1fr, auto), align: (left + horizon, right + horizon), column-gutter: 4pt,
      text(fill: brand, weight: 900, size: 7.5pt)[#n · #title],
      text(fill: mut, size: 6pt)[#us US · #mvp],
    )
  ]
  #block(inset: (x: 6pt, y: 5pt))[
    #for (j, f) in funcs.enumerate() [
      #text(fill: rgb("#37338f"), weight: 700, size: 6.3pt)[#(n + "." + str(j + 1))]#text(size: 6.3pt)[ #f]#linebreak()
    ]
    #v(3pt)
    #text(size: 5.8pt, fill: mut, style: "italic")[Exigences : #fr]
  ]
]

// ---- Arbre WBS : racine (niveau 0), barre de distribution, 11 epics --------
#let CARDH = 3.7cm
#let wst = 1pt + rgb("#5b57b0")          // trait des connecteurs
#let WCOL = (100% - 40pt) / 11           // largeur d'une colonne (10 gouttières de 4pt)

// Nœud compact de l'arbre (niveau 1)
#let mini(n, title, us, mvp, dom) = box(
  width: 100%, height: 1.3cm, radius: 3pt, clip: true,
  fill: dcolor(dom), stroke: 0.6pt + hair, inset: (x: 3pt, y: 3pt),
)[
  #set align(center)
  #set par(leading: 0.45em, justify: false)
  #text(fill: brand, weight: 900, size: 7.5pt)[#n]
  #linebreak()
  #text(size: 5.4pt, weight: 700, fill: brand)[#title]
  #linebreak()
  #text(size: 5pt, fill: mut)[#us US · #mvp]
]
#let EPICS = (
  ("1", "Onboarding & appairage", "7", "MVP", "cli"),
  ("2", "Collecte & stockage", "6", "MVP", "edge"),
  ("3", "Bien-être & activité", "4", "MVP", "cli"),
  ("4", "Localisation & zones", "5", "MVP", "cli"),
  ("5", "Anomalies & alertes", "5", "MVP", "ai"),
  ("6", "Assistant IA & escalade", "4", "MVP", "ai"),
  ("7", "Vet Portal · dossier", "7", "MVP", "svc"),
  ("8", "Abonnement & support", "7", "post", "ext"),
  ("9", "Conformité & RGPD", "5", "MVP", "rose"),
  ("10", "Téléconsultation & triage", "7", "post", "svc"),
  ("11", "Plateforme & Ops", "9", "MVP", "data"),
)

#let c1 = card("1", "Onboarding & appairage", "7", "MVP", "cli",
  ("Compte sécurisé + authentification", "Profil animal (race, âge, poids)", "Appairage BLE du collier (QR code)", "Gestion multi-animaux"), "FR12, FR29, FR30, FR33")
#let c2 = card("2", "Collecte & stockage", "6", "MVP", "edge",
  ("Ingestion capteurs, normalisation, dédup.", "Tampon hors-ligne (store-and-forward) + retry", "Stockage séries temporelles", "Authentification du collier"), "FR1–FR10, NFR2, NFR8")
#let c3 = card("3", "Bien-être & activité", "4", "MVP", "cli",
  ("Score de bien-être", "Courbes activité / sommeil", "Constantes (température, rythme)", "Historique consultable"), "FR11, FR13, FR19, NFR9")
#let c4 = card("4", "Localisation & zones", "5", "MVP", "cli",
  ("Carte GPS temps réel", "Geofencing (zones sûres)", "Alertes de sortie de zone", "Historique des trajets"), "FR20, FR21")
#let c5 = card("5", "Anomalies & alertes", "5", "MVP", "ai",
  ("Profil normal par animal", "Seuils adaptatifs", "Détection d'anomalies", "Génération d'alertes santé"), "FR14, FR15, FR22")
#let c6 = card("6", "Assistant IA & escalade", "4", "MVP", "ai",
  ("Chat RAG sur corpus vétérinaire", "Garde-fous non-diagnostiques", "Contextualisation des alertes", "Escalade vers le vétérinaire"), "FR16, FR17, FR23")
#let c7 = card("7", "Vet Portal · dossier", "7", "MVP", "svc",
  ("Timeline médicale", "Résumé contextualisé + données brutes", "Alertes, notes, suivi longitudinal", "Export PDF / JSON normalisé"), "FR18, FR24–FR28, FR34")
#let c8 = card("8", "Abonnement & support", "7", "post", "ext",
  ("Plans & abonnement (Stripe)", "Statuts & renouvellements", "Facturation", "Support / ticketing, FAQ"), "FR31, FR32")
#let c9 = card("9", "Conformité & RGPD", "5", "MVP", "rose",
  ("Recueil du consentement", "Anonymisation / masquage PII", "Traçabilité & audit", "Gestion des droits (accès, suppression)"), "NFR3, NFR4, NFR5")
#let c10 = card("10", "Téléconsultation & triage", "7", "post", "svc",
  ("File de garde vétérinaire", "Handoff IA → vétérinaire", "Orientation non-diagnostique, RDV", "Pool plafonné, routage véto traitant"), "FR35–FR43")
#let c11 = card("11", "Plateforme & Ops", "9", "MVP", "data",
  ("CI/CD + déploiement GitOps", "Monitoring", "Observabilité OpenTelemetry", "Sécurité de l'infrastructure"), "NFR1, NFR6, NFR7, NFR10")
#let clecture = block(width: 100%, height: CARDH, radius: 4pt, fill: limebg, stroke: (left: 3pt + lime), inset: 7pt)[
  #text(fill: brand, weight: 800, size: 7.5pt)[Lecture]
  #v(3pt)
  #text(size: 6.3pt)[66 US au total, 9 epics en MVP (52 US), 2 post-MVP (E8, E10 · 14 US).]
  #v(3pt)
  #text(size: 6pt, fill: mut)[Couleur = domaine : #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("cli"))) App · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("edge"))) IoT · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("ai"))) IA · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("svc"))) Vété · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("ext"))) Business · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("rose"))) Conformité · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("data"))) Ops]
  #v(3pt)
  #text(size: 5.8pt, fill: mut, style: "italic")[En italique : exigences (FR/NFR) couvertes, définies en partie Exigences produit (PRD).]
]

#page(flipped: true)[
  #align(center)[#text(fill: brand, weight: 800, size: 12pt)[WBS · décomposition hiérarchique orientée livrables]]
  #align(center)[#text(size: 8pt, fill: mut)[Niveau 0 : Pawrise Care (périmètre total) → Niveau 1 : 11 epics livrables (1 à 11) → Niveau 2 : fonctions (1.1, 1.2…). En italique : exigences (FR/NFR) couvertes.]]
  #v(3pt)
  // Arbre : racine (niveau 0), barre de distribution, 11 epics (niveau 1)
  #stack(
    spacing: 0pt,
    align(center, box(fill: brand, radius: 4pt, inset: (x: 16pt, y: 5.5pt))[
      #text(fill: white, weight: 900, size: 9.5pt)[0 · Pawrise Care]
      #h(8pt)
      #text(fill: white, size: 7pt)[périmètre total · 11 epics · 66 US]
    ]),
    align(center, line(angle: 90deg, length: 6pt, stroke: wst)),
    box(width: 100%, height: 0pt)[#place(top + left, dx: WCOL / 2, line(length: 100% - WCOL, stroke: wst))],
    grid(columns: (1fr,) * 11, column-gutter: 4pt, ..range(11).map(_ => align(center, line(angle: 90deg, length: 6pt, stroke: wst)))),
    grid(columns: (1fr,) * 11, column-gutter: 4pt, ..EPICS.map(e => mini(..e))),
  )
  #v(5pt)
  #align(center, text(size: 7.5pt, fill: mut)[Niveau 2 · détail des livrables : fonctions attendues et exigences couvertes, par epic])
  #v(2pt)
  #grid(
    columns: (1fr,) * 4,
    gutter: 6pt,
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, clecture,
  )
]
