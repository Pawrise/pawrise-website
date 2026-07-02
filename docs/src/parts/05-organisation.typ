#import "../lib.typ": dtable, keybox, keep, brand, lime, mut, hair, zebra, faint
#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge

= Organisation & compétences

== OBS · organigramme des responsabilités

Dix personnes réparties en cinq pôles de deux, sous le pilotage du Product Owner (Yassine El Gherrabi, qui cumule pilotage produit et contribution IA/Data). L'organigramme (OBS) ci-dessous relie le pilotage à chaque pôle et à ses membres ; le périmètre détaillé de chaque pôle suit.

#let dcol = (svc: rgb("#eef7ee"), edge: rgb("#e7f6f4"), ai: rgb("#f0edfb"), cli: rgb("#eaf1fb"), data: rgb("#ecebf6"))
#let pcell(t, m) = box(width: 2.3cm)[
  #set align(center)
  #text(fill: brand, weight: 800, size: 7.3pt)[#t]\
  #text(size: 6.4pt, fill: mut)[#m]
]

#align(center, box(inset: 4pt, {
  set text(size: 8pt)
  diagram(
    spacing: (6mm, 1.4cm),
    node-corner-radius: 3pt,
    node-stroke: 0.7pt + hair,
    node-inset: 5pt,
    node((0, 0), box(width: 4.6cm)[
      #set align(center)
      #text(fill: white, weight: 800, size: 8.5pt)[Product Owner]\
      #text(fill: white, size: 7pt)[Yassine El Gherrabi · pilotage transverse]
    ], fill: brand),
    node((-2, 1), pcell("Backend / API", "Hamid · Aaditya"), fill: dcol.svc),
    node((-1, 1), pcell("IoT / Hardware", "Cyril · Ibrahim"), fill: dcol.edge),
    node((0, 1), pcell("IA / Data", "Nino · Yassine"), fill: dcol.ai),
    node((1, 1), pcell("Design / Mobile", "Adam · Elarif"), fill: dcol.cli),
    node((2, 1), pcell("Cloud / DevOps", "Oumar · Abderrahmane"), fill: dcol.data),
    edge((0, 0), (-2, 1), "-"),
    edge((0, 0), (-1, 1), "-"),
    edge((0, 0), (0, 1), "-"),
    edge((0, 0), (1, 1), "-"),
    edge((0, 0), (2, 1), "-"),
  )
}))

#text(size: 8pt, fill: mut)[Elarif est rattaché au pôle Design/Mobile (binôme avec Adam sur l'application) mais intervient en transverse sur le Backend, l'IoT, la CI/CD, le marché et le lien vétérinaire.]

=== Périmètre par pôle

#let poles = (
  ("Backend / API", "Hamid · Aaditya", "API, ingestion, base de données, authentification, Vet Portal"),
  ("IoT / Hardware", "Cyril · Ibrahim", "Firmware, capteurs, simulateur, collier"),
  ("IA / Data", "Nino · Yassine", "Care Engine, RAG, POCs, pipeline de données"),
  ("Design / Mobile", "Adam · Elarif", "UX/UI, app mobile, identité visuelle, étude de marché"),
  ("Cloud / DevOps", "Oumar · Abderrahmane", "Cloud, CI/CD, monitoring, sécurité"),
)
#keep[
#dtable(
  columns: (auto, auto, 1fr),
  headers: ("Pôle", "Membres", "Périmètre"),
  rows: poles,
)
]

== Couverture nominative

#keep[
Chaque domaine est porté par un ou plusieurs responsables nommés, avec un backup identifié pour assurer la continuité.

#dtable(
  columns: (auto, 1fr, 1fr),
  headers: ("Domaine", "Responsable(s)", "Backup"),
  rows: (
    ("Product Ownership", "Yassine", "Elarif (transverse, vision produit)"),
    ("IoT / Hardware", "Cyril, Ibrahim", "Hamid, Elarif (support embarqué)"),
    ("Backend / API", "Hamid, Aaditya, Elarif", "Yassine"),
    ("IA / Data", "Nino, Yassine", "Hamid (pipelines Python)"),
    ("Mobile / Frontend", "Adam, Elarif", "Oumar (Android), Hamid, Aaditya"),
    ("Design / UX", "Adam", "Elarif (intégration front)"),
    ("Market / Business", "Adam, Elarif", "Yassine (PO)"),
    ("Cloud / DevOps", "Oumar, Abderrahmane", "Elarif (CI/CD)"),
    ("Réseau vétérinaire", "Elarif, Nino", "Binôme (2 contacts vété distincts)"),
  ),
)
]

#pagebreak()

== Matrice de compétences (extrait)

Les *compétences requises* pour concevoir, développer et livrer Pawrise Care (management, embarqué, backend, IA, mobile, design, cloud), et leur *couverture* par chaque membre (auto-évaluation). Chaque compétence critique a au moins un profil confirmé.

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

=== Lecture de la matrice : forces & points de vigilance

La matrice se lit dans deux sens. *En forces* : plusieurs compétences sont couvertes par au moins deux profils experts (Python, Docker, architecture logicielle, web React/Next) ; combinées aux binômes de pôle et aux backups nominatifs (voir Couverture), elles garantissent qu'aucune brique courante ne dépend d'une seule personne. *En points de vigilance* : cinq compétences critiques ne comptent qu'un seul profil expert. Chacune fait l'objet d'un plan de mitigation explicite.

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("Compétence critique", "Seul expert", "Risque & mitigation"),
  rows: (
    ("IA · NLP / LLM / RAG (Care Engine)", "Yassine", "Cœur différenciant sur une personne → pipeline LangGraph borné et documenté (ADR), code testé et réappropriable, Nino en appui data."),
    ("Électronique embarquée / firmware", "Cyril", "Le collier dépend d'un expert → simulateur de capteurs en fallback (le reste n'attend pas le matériel), Ibrahim puis Hamid et Elarif en backup embarqué."),
    ("Design / UX", "Adam", "Identité produit sur une personne → Elarif (intermédiaire) prend le relais sur l'intégration front."),
    ("Mobile natif (Kotlin / Swift)", "Oumar (Android)", "Choix natif assumé et ambitieux → montée en compétence organisée du pôle Mobile : trois profils intermédiaires en Swift (Yassine, Elarif, Adam), Oumar ancre Android ; plusieurs membres ont déjà livré du mobile, dont Yassine (une app complète expédiée en production)."),
    ("Réseau vétérinaire", "Elarif", "Lien terrain sur une personne → Nino (intermédiaire) constitue un second contact vétérinaire."),
  ),
)

Ces cinq points recoupent volontairement des co-fondateurs ou responsables de pôle : le risque est concentré là où l'engagement est le plus fort. Au-delà de ces personnes, la *montée en compétence* est organisée (Scrum Master tournant, revues de code croisées, documentation d'onboarding) pour diffuser progressivement ces expertises.

== Justification du recrutement

Équipe constituée autour d'un principe : chaque membre couvre un *besoin réel* du projet (IoT, Backend, IA, Mobile, Design, Cloud, Business) tout en étant investi dans la mission. Trois membres sont co-fondateurs et promoteurs du projet (marqués ★). Justification professionnelle, membre par membre :

#dtable(
  columns: (auto, 1fr),
  headers: ("Membre & rôle", "Justification professionnelle"),
  rows: (
    ("Yassine · PO & Resp. IA ★", "3 ans chez Smart Tribune sur NLP/LLM/NER en production → maîtrise du Care Engine, cœur différenciant. Profil architecte (Rust, Python, Kafka, K8s)."),
    ("Elarif · Resp. Fullstack ★", "Fullstack complet (React/Angular/Vue, Python/Java), CI/CD chez Naval Group (GitLab, SonarQube). Intervient en transverse (Backend, IoT, CI/CD). En contact direct avec une vétérinaire partenaire → ancrage terrain."),
    ("Cyril · Resp. IoT / Hardware", "Le plus expérimenté en électronique embarquée : STM32/ESP32, firmware C/C++, MQTT. Projets persos alignés (BioLink, Centaurus). A déjà résolu les problèmes du collier."),
    ("Ibrahim · Resp. IoT ★", "Fullstack évoluant vers l'IoT en alternance (capteurs d'irrigation, LoRaWAN) → jonction firmware collier ↔ backend."),
    ("Aaditya · Dev Backend / API", "Backend orienté API avec sensibilité métier : transformer les données capteurs en valeur. Rigueur et engagement long terme."),
    ("Hamid · Dev Fullstack", "Fullstack polyvalent (TypeScript/React/Express/Python), gestion VPS et CI/CD. Curiosité embarqué → backup du pôle IoT."),
    ("Nino · Resp. Data", "Data Engineer en alternance (ETL Python) → pipeline de données du moteur IA. Connaît une étudiante vétérinaire (validation des données)."),
    ("Adam · Resp. Design & Market", "Double profil dev fullstack + designer/commercial. 3 ans de freelance (acquisition client), maîtrise Figma → du wireframe au code (refonte CapFiEurope v2)."),
    ("Oumar · Resp. Cloud & DevOps", "Infrastructure et déploiement : pipelines CI/CD, dev mobile Android. Garant du cycle de livraison (test, déploiement, monitoring)."),
    ("Abderrahmane · Cloud & DevOps (renfort)", "MSc Pro Cloud Epitech (même socle qu'Oumar, Azure). Backend Django/Node, UML/architecture. Arrivé plus tard dans l'équipe : l'architecture ayant évolué vers Kubernetes, le GitOps (Argo CD) et une observabilité complète, un binôme est devenu nécessaire pour épauler Oumar, absorber cette charge accrue et éviter le point de défaillance unique sur le pôle le plus exposé à la montée en charge."),
  ),
)

#text(size: 8.5pt, fill: mut)[★ co-fondateur et promoteur du projet.]

#pagebreak()

== Compétences non couvertes par l'équipe

Pawrise Care est un *projet de fin d'études (EIP)* : l'équipe conçoit le produit et en livre un *prototype / MVP*, sans budget d'entreprise. Certaines compétences ne sont donc détenues par *aucun* membre. Plutôt que de les passer sous silence, chacune est traitée par une stratégie réaliste à notre échelle : *monter en compétence*, *s'appuyer sur notre partenaire vétérinaire*, *utiliser des ressources gratuites et l'encadrement Epitech*, ou *reporter explicitement* à une éventuelle phase produit (hors périmètre académique).

#[
#set par(justify: false)
#dtable(
  columns: (3.5cm, 1fr, 1.15fr),
  headers: ("Compétence manquante", "Enjeu pour le projet", "Stratégie & mitigation (échelle EIP)"),
  rows: (
    ("Électronique de série (PCB, miniaturisation)", "Un collier industrialisé demande de l'électronique de série ; hors de portée d'une équipe étudiante sans budget.", "Hors périmètre académique : on valide toute la chaîne logicielle sur un simulateur de capteurs ; l'industrialisation du matériel est renvoyée à une phase produit."),
    ("Base de données séries temporelles", "Fort volume de télémétrie à stocker et interroger efficacement ; aucun expert dédié.", "Monter en compétence : apprentissage ciblé sur un outil éprouvé (TimescaleDB), qui reste du PostgreSQL familier."),
    ("Sécurité applicative", "Poser des bases saines (authentification, secrets, mTLS) sans spécialiste sécurité dans l'équipe.", "Ressources gratuites & encadrement : checklists OWASP, revues de code entre pairs, cours et intervenants Epitech ; un audit approfondi relèverait d'une phase produit."),
    ("Expertise vétérinaire médicale", "Corpus et critères d'escalade crédibles ; pas de vétérinaire dans l'équipe (et, par choix, aucun diagnostic produit).", "Partenaire : vétérinaire partenaire (contact d'Elarif) et étudiante vétérinaire (via Nino) pour valider le corpus et les seuils d'orientation."),
    ("Conformité RGPD / AI Act", "Traitement de données et IA encadrés par la loi ; pas de juriste dans l'équipe.", "Ressources gratuites : guides et modèles de DPIA de la CNIL (gratuits), principes RGPD appliqués dès la conception ; le PO en est garant."),
    ("Commercial / acquisition client", "La croissance suppose une force commerciale, absente à ce stade.", "Reporter : hors périmètre académique (post-MVP) ; premiers canaux envisagés via partenariats (assurances, cabinets vétérinaires)."),
  ),
)
]
