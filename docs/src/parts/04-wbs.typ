#import "../lib.typ": brand, mut, lime, zebra, hair, limebg

= WBS & fonctions par epic

Le découpage du travail suit la décomposition produit issue de la méthode BMAD : *11 epics* regroupant *66 user stories*, chacune portant des critères d'acceptation (Given/When/Then). Chaque epic est une brique livrable de bout en bout, tracée jusqu'aux exigences fonctionnelles et non fonctionnelles (FR/NFR) qu'elle couvre.

Le diagramme ci-après (page suivante, en paysage) réunit sur une seule vue *la structure* (les 11 epics, colorés par domaine) et *les fonctions* attendues de chacun, avec leur nombre de user stories, leur périmètre (MVP / post-MVP) et les exigences couvertes. Le périmètre MVP couvre 9 epics (52 US) ; les epics 8 et 10 sont post-MVP. Le détail des user stories et des critères d'acceptation figure en partie Backlog & exigences.

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
      text(fill: brand, weight: 900, size: 7.5pt)[E#n · #title],
      text(fill: mut, size: 6pt)[#us US · #mvp],
    )
  ]
  #block(inset: (x: 6pt, y: 5pt))[
    #for f in funcs [ #text(size: 6.3pt)[• #f]#linebreak() ]
    #v(3pt)
    #text(size: 5.8pt, fill: mut, style: "italic")[#fr]
  ]
]

#page(flipped: true)[
  #align(center)[#text(fill: brand, weight: 800, size: 12pt)[WBS produit · fonctions par epic (11 epics · 66 US)]]
  #v(6pt)
  #grid(
    columns: (1fr,) * 4,
    gutter: 6pt,
    card("1", "Onboarding & appairage", "7", "MVP", "cli",
      ("Compte sécurisé + authentification", "Profil animal (race, âge, poids)", "Appairage BLE du collier (QR code)", "Gestion multi-animaux"), "FR12, FR29, FR30, FR33"),
    card("2", "Collecte & stockage", "6", "MVP", "edge",
      ("Ingestion capteurs, normalisation, dédup.", "Tampon hors-ligne (store-and-forward) + retry", "Stockage séries temporelles", "Authentification du collier"), "FR1–FR10, NFR2, NFR8"),
    card("3", "Bien-être & activité", "4", "MVP", "cli",
      ("Score de bien-être", "Courbes activité / sommeil", "Constantes (température, rythme)", "Historique consultable"), "FR11, FR13, FR19, NFR9"),
    card("4", "Localisation & zones", "5", "MVP", "cli",
      ("Carte GPS temps réel", "Geofencing (zones sûres)", "Alertes de sortie de zone", "Historique des trajets"), "FR20, FR21"),
    card("5", "Anomalies & alertes", "5", "MVP", "ai",
      ("Profil normal par animal", "Seuils adaptatifs", "Détection d'anomalies", "Génération d'alertes santé"), "FR14, FR15, FR22"),
    card("6", "Assistant IA & escalade", "4", "MVP", "ai",
      ("Chat RAG sur corpus vétérinaire", "Garde-fous non-diagnostiques", "Contextualisation des alertes", "Escalade vers le vétérinaire"), "FR16, FR17, FR23"),
    card("7", "Vet Portal · dossier", "7", "MVP", "svc",
      ("Timeline médicale", "Résumé contextualisé + données brutes", "Alertes, notes, suivi longitudinal", "Export PDF / JSON normalisé"), "FR18, FR24–FR28, FR34"),
    card("8", "Abonnement & support", "7", "post", "ext",
      ("Plans & abonnement (Stripe)", "Statuts & renouvellements", "Facturation", "Support / ticketing, FAQ"), "FR31, FR32"),
    card("9", "Conformité & RGPD", "5", "MVP", "rose",
      ("Recueil du consentement", "Anonymisation / masquage PII", "Traçabilité & audit", "Gestion des droits (accès, suppression)"), "NFR3, NFR4, NFR5"),
    card("10", "Téléconsultation & triage", "7", "post", "svc",
      ("File de garde vétérinaire", "Handoff IA → vétérinaire", "Orientation non-diagnostique, RDV", "Pool plafonné, routage véto traitant"), "FR35–FR43"),
    card("11", "Plateforme & Ops", "9", "MVP", "data",
      ("CI/CD + déploiement GitOps", "Monitoring", "Observabilité OpenTelemetry", "Sécurité de l'infrastructure"), "NFR1, NFR6, NFR7, NFR10"),
    block(width: 100%, height: 3.7cm, radius: 4pt, fill: limebg, stroke: (left: 3pt + lime), inset: 7pt)[
      #text(fill: brand, weight: 800, size: 7.5pt)[Lecture]
      #v(3pt)
      #text(size: 6.3pt)[66 US au total, 9 epics en MVP (52 US), 2 post-MVP (E8, E10 · 14 US).]
      #v(3pt)
      #text(size: 6pt, fill: mut)[Couleur = domaine : #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("cli"))) App · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("edge"))) IoT · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("ai"))) IA · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("svc"))) Vété · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("ext"))) Business · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("rose"))) Conformité · #box(baseline:1pt, rect(width:6pt,height:6pt,radius:1pt,fill:dcolor("data"))) Ops]
      #v(3pt)
      #text(size: 5.8pt, fill: mut, style: "italic")[En italique : exigences (FR/NFR) couvertes. Détail des US et critères d'acceptation en partie Backlog.]
    ],
  )
]
