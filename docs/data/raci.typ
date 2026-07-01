// Généré depuis lib/content — NE PAS ÉDITER À LA MAIN.
#let RACI_POLES = (
  ("Pilotage (PO)"),
  ("Fullstack"),
  ("IoT"),
  ("Design/Mobile"),
  ("IA/Data"),
  ("Cloud/Ops"),
)

// Généré depuis lib/content — NE PAS ÉDITER À LA MAIN.
#let RACI_STD = (
  ("Cadrage & spécifications", "A/R", "C", "C", "C", "C", "C"),
  ("API & ingestion données", "C", "A/R", "C", "I", "C", "C"),
  ("Collier & firmware", "C", "C", "A/R", "I", "C", "I"),
  ("Application mobile", "C", "R", "I", "A/R", "C", "I"),
  ("Moteur IA / Care Engine", "C", "C", "I", "C", "A/R", "I"),
  ("Portail vétérinaire", "C", "A/R", "I", "C", "C", "I"),
  ("Infra / CI-CD / monitoring", "I", "C", "I", "I", "I", "A/R"),
  ("RGPD & sécurité données", "A", "R", "C", "I", "C", "C"),
  ("Tests & qualité", "A", "R", "R", "R", "R", "R"),
)

// Généré depuis lib/content — NE PAS ÉDITER À LA MAIN.
#let RACI_STRICT = (
  ("Cadrage & spécifications", "A", "R", "I", "I", "C", "I"),
  ("API & ingestion données", "A", "R", "I", "I", "I", "C"),
  ("Collier & firmware", "A", "C", "R", "I", "I", "I"),
  ("Application mobile", "A", "C", "I", "R", "I", "I"),
  ("Moteur IA / Care Engine", "A", "C", "I", "I", "R", "I"),
  ("Portail vétérinaire", "A", "R", "I", "I", "C", "I"),
  ("Infra / CI-CD / monitoring", "A", "C", "I", "I", "I", "R"),
  ("RGPD & sécurité données", "A", "R", "I", "I", "I", "C"),
  ("Tests & qualité", "A", "R", "I", "I", "C", "I"),
)
