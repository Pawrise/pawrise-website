#import "../lib.typ": dtable, keybox, keep, brand, lime, limebg, hair, mut, zebra

= Marché & analyse stratégique

== Proposition de valeur

Les concurrents (Tractive, Weenect, Invoxia) ne se limitent plus au GPS : ils embarquent aussi des capteurs de santé. Mais ils s'arrêtent à la donnée brute. Pawrise Care *interprète* : GPS et capteurs de santé, plus une lecture accompagnée par l'IA et le vétérinaire pour orienter le propriétaire vers le bon soin, au bon moment. C'est un positionnement *océan bleu* : ne pas livrer la guerre des capteurs, mais ouvrir la passerelle propriétaire vers vétérinaire (dossier normalisé, suivi longitudinal) que les acteurs établis ne couvrent pas.

Trois piliers : *Prévention* (détecter les signaux faibles avant qu'ils n'empirent), *Orientation non-diagnostique* (aide à l'observation, jamais un acte médical), *Réseau vétérinaire* (escalade vers un professionnel avec un dossier prêt à l'emploi, rémunéré par une part fixe des abonnements).

== Marché (TAM / SAM / SOM)

On dimensionne le marché en entonnoir : le *TAM* (Total Addressable Market) est le marché total si l'on captait tout le monde ; le *SAM* (Serviceable Addressable Market) la part que notre produit peut réellement adresser ; le *SOM* (Serviceable Obtainable Market) la part réalistement captable à court/moyen terme.

#grid(columns: (1fr, 1fr, 1fr, 1fr), gutter: 8pt,
  ..(("≈ 73 M", "TAM · tous animaux de compagnie en France"), ("≈ 26,5 M", "SAM · chiens (9,9 M) + chats (16,6 M)"), ("1 foyer / 2", "possède au moins un animal"), ("3-5 ans", "SOM · dizaines de milliers d'abonnés")).map(f => block(fill: zebra, radius: 4pt, inset: 9pt, width: 100%)[
    #text(fill: brand, weight: 900, size: 14pt, f.at(0))\
    #text(size: 8pt, fill: mut, f.at(1))
  ])
)

#v(6pt)
*TAM ≈ 73 M* : l'ensemble des animaux de compagnie en France, poissons, oiseaux et NAC compris. *SAM ≈ 26,5 M* : les chiens et chats (9,9 M + 16,6 M), seuls réellement adressables par un collier connecté. *SOM* : quelques dizaines de milliers d'abonnés visés sur 3 à 5 ans, compte tenu de la notoriété à bâtir, du budget et de la concurrence. Le repère « 1 foyer sur 2 » (part des foyers français possédant un animal) illustre la profondeur du marché. Le marché pet tech est en forte croissance, porté par l'humanisation des animaux ; les concurrents mesurent désormais la santé mais restent sur la donnée brute, l'interprétation accompagnée (IA + vétérinaire) reste notre différenciation.

#text(size: 8.5pt, fill: mut)[Sources : #link("https://www.facco.fr/chiffres-cles/")[FACCO / Kantar, chiffres clés 2024-2025] ; rapports de marché pet tech (#link("https://www.grandviewresearch.com/industry-analysis/pet-wearable-market")[Grand View Research, pet wearables]).]

== SWOT

#let quad(title, tone, items) = block(
  fill: if tone == "pos" { limebg } else { rgb("#fdeef0") },
  stroke: (left: 3pt + if tone == "pos" { lime } else { rgb("#e8879a") }),
  radius: 3pt, inset: 10pt, width: 100%, height: 100%, spacing: 8pt,
)[
  #text(fill: brand, weight: 800, size: 10pt, title)
  #v(3pt)
  #for it in items [ #text(size: 8.7pt)[*#it.at(0)* : #it.at(1)]#v(3pt) ]
]

#block(breakable: false, box(width: 100%, height: 392pt,
  grid(columns: (1fr, 1fr), rows: (1fr, 1fr), gutter: 8pt,
    quad("Forces", "pos", (
      ("Santé expliquée et accompagnée", "la donnée brute des concurrents traduite en clair par l'IA, relayée par un vétérinaire."),
      ("Expertise IA + garde-fous non-diagnostiques", "RAG/LLM maîtrisés en interne, conformité intégrée dès le départ."),
      ("Vétérinaire partenaire réel", "crédibilité scientifique et accès au métier."),
      ("Données longitudinales propriétaires", "un actif santé par animal qui grossit avec le temps."),
    )),
    quad("Faiblesses", "neg", (
      ("Hardware complexe et coûteux", "conception d'un collier fiable, lourde en temps et budget."),
      ("Démarrage à froid des données", "fiabilité de l'IA dépendante de données à accumuler."),
      ("Prototype non finalisé", "encore sur capteurs simulés, risque technique avant produit réel."),
      ("Rentabilité à prouver", "modèle d'abonnement dont la viabilité reste à valider."),
    )),
    quad("Opportunités", "pos", (
      ("Marché français massif et porteur", "26,5 M de chiens et chats, segment connecté en croissance."),
      ("Humanisation des animaux", "disposition réelle à payer pour la santé et la prévention."),
      ("Assurance animale en croissance", "nos données aident la prévention et la tarification : canal + revenu B2B."),
      ("Interopérabilité via le PDF normalisé", "gain de temps vétérinaire, adoption facilitée."),
    )),
    quad("Menaces", "neg", (
      ("Concurrents déjà sur la santé", "Invoxia, Tractive mesurent déjà FC/FR : angle santé non vierge."),
      ("Acteur capitalisé qui copie la couche vétérinaire", "un géant pourrait aller plus vite."),
      ("Cadre réglementaire strict et mouvant", "acte médical réservé au vétérinaire, IA encadrée (AI Act)."),
      ("Adoption lente des vétérinaires", "profession prudente et surchargée."),
    )),
  )
))

#text(size: 8.5pt, fill: mut)[Sources : marché #link("https://www.facco.fr/chiffres-cles/")[FACCO / Kantar] ; santé embarquée des concurrents #link("https://www.invoxia.com/")[Invoxia], #link("https://tractive.com/")[Tractive] ; cadre réglementaire #link("https://eur-lex.europa.eu/eli/reg/2024/1689")[AI Act (UE 2024/1689)], #link("https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006583276")[Code rural, art. L243-1].]

== Matrice de confrontation

#keep[
Ce qu'on fait du SWOT : croiser forces et faiblesses avec opportunités et menaces pour en tirer des axes d'action.

#dtable(
  columns: (auto, 1fr),
  headers: ("Axe", "Stratégie"),
  rows: (
    ("Offensif · Forces × Opportunités", "Viser les assureurs animaliers : le suivi continu et le dossier vétérinaire réduisent leurs sinistres, nos données nourrissent leur tarification. On gagne un canal de distribution et un revenu B2B."),
    ("Défensif · Forces × Menaces", "Ne pas livrer la guerre des capteurs (déjà gagnée par Tractive/Invoxia) : se protéger sur l'orientation accompagnée et le réseau vétérinaire, non copiables sans partenariats longs à nouer."),
    ("Rattrapage · Faiblesses × Opportunités", "Transformer le démarrage à froid en boucle de données : les premiers cabinets et assureurs partenaires apportent cas réels et co-financement, fiabilisant l'IA et le matériel plus vite."),
    ("Vigilance · Faiblesses × Menaces", "Sécuriser les points faibles avant de grandir : LLM derrière une couche d'abstraction, garde-fous documentés pour encaisser un durcissement réglementaire, rentabilité prouvée sur un périmètre réduit."),
  ),
)
]

== PESTEL

#keep[
L'analyse macro-environnementale, fil conducteur : orienter, jamais diagnostiquer.

#dtable(
  columns: (auto, 1fr, auto),
  headers: ("Axe", "Synthèse", "À retenir"),
  rows: (
    ("Politique", "France 2030, BPI et UE financent l'IA et l'e-santé ; le bien-être animal est une priorité publique (loi du 30/11/2021) ; souveraineté des données.", "Terrain favorable si hébergement souverain UE."),
    ("Économique", "Marché animalier large et résilient ; pet tech en croissance. Vigilance : abonnement récurrent (~10 €/mois) dans un contexte de lassitude.", "Maîtrise du churn et du CAC décisive."),
    ("Socioculturel", "L'animal, membre de la famille ; demande de prévention proactive ; usages numériques entrés dans les mœurs.", "Demande qui colle à notre proposition."),
    ("Technologique", "Convergence capteurs / IA / cloud / télémédecine. Réserve : mesurer des constantes fiables sur un animal qui bouge.", "Fiabilité de la mesure = risque central."),
    ("Environnemental", "Éco-conception imposée (Règlement Batteries UE 2023/1542, DEEE, indice de réparabilité) ; sobriété numérique (Green IT).", "Durabilité matériel + sobriété numérique."),
    ("Légal", "RGPD, Code rural (diagnostic réservé aux vétérinaires), AI Act, sécurité produit (GPSR UE 2023/988).", "Tout repose sur la frontière orienter / diagnostiquer."),
  ),
)
]

#text(size: 8.5pt, fill: mut)[Sources officielles : #link("https://www.economie.gouv.fr/france-2030")[France 2030], #link("https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044387560")[loi n° 2021-1539 (bien-être animal)], #link("https://www.facco.fr/chiffres-cles/")[FACCO / Kantar] ; #link("https://eur-lex.europa.eu/eli/reg/2016/679")[RGPD], #link("https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006583276")[Code rural L243-1], #link("https://eur-lex.europa.eu/eli/reg/2024/1689")[AI Act], #link("https://eur-lex.europa.eu/eli/reg/2023/988")[GPSR (UE 2023/988)], #link("https://eur-lex.europa.eu/eli/reg/2023/1542")[Règlement Batteries (UE 2023/1542)], #link("https://www.economie.gouv.fr/particuliers/indice-reparabilite")[indice de réparabilité].]
