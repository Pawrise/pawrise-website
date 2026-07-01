#import "../lib.typ": dtable, keybox, brand, mut, zebra
#import "../../data/backlog.typ": BACKLOG, BACKLOG_EPICS, BACKLOG_US, BACKLOG_MVP

= Backlog & exigences

Le découpage produit compte #BACKLOG_EPICS epics et #BACKLOG_US user stories, dont #BACKLOG_MVP dans le périmètre MVP. Chaque story porte des critères d'acceptation au format Given/When/Then.

== Epics

#dtable(
  columns: (auto, 1fr, auto, auto, auto),
  headers: ("#", "Epic", "US", "Périmètre", "Exigences"),
  rows: BACKLOG,
)

== Exigences (FR / NFR)

*Fonctionnelles (FR1 à FR43)* — regroupées par domaine : collier & collecte (FR1–7), backend & données (FR8–12), moteur IA (FR13–18), app propriétaire (FR19–23), Vet Portal (FR24–28), cycle de vie & business (FR29–34), téléconsultation & triage (FR35–43).

*Non-fonctionnelles (NFR1 à NFR10)* — Fiabilité, Autonomie/énergie, Sécurité, Confidentialité/RGPD, Éthique IA, Performance, Scalabilité/Ops, Robustesse physique, Utilisabilité, Maintenabilité.

== Exemple de critère d'acceptation

#keybox(title: "Story 1.1 · Création de compte sécurisée")[
  *En tant que* propriétaire d'animal, *je veux* créer un compte avec email et mot de passe, *afin d'*accéder à l'application en toute sécurité.\
  *Given* un visiteur sur l'écran d'inscription\
  *When* il saisit un email valide et un mot de passe respectant la politique de sécurité\
  *Then* un compte est créé et un email de vérification est envoyé\
  *And* un mot de passe faible ou un email déjà utilisé déclenche une erreur explicite sans créer de compte.
]
