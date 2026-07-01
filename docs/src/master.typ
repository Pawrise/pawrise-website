#import "lib.typ": conf, cover

#show: conf.with(doc-title: "Dossier de conception · Pawrise Care")

#cover(
  title: "Pawrise Care",
  subtitle: "Dossier de conception & documentation technique",
  part: "T-ESP-800 · Epitech EIP",
  authors: ("Équipe Pawrise Care",),
  date: "2026",
)

#outline(title: "Sommaire", depth: 2, indent: auto)
#pagebreak()

#include "parts/00-resume.typ"
#pagebreak()
#include "parts/01-vision.typ"
#pagebreak()
#include "parts/02-marche.typ"
#pagebreak()
#include "parts/03-economie.typ"
#pagebreak()
#include "parts/04-wbs.typ"
#pagebreak()
#include "parts/05-organisation.typ"
#pagebreak()
#include "parts/06-raci.typ"
#pagebreak()
#include "parts/07-planning.typ"
#pagebreak()
#include "parts/08-qualite.typ"
#pagebreak()
#include "parts/10-architecture.typ"
#pagebreak()
#include "parts/11-cloud.typ"
#pagebreak()
#include "parts/12-iot.typ"
#pagebreak()
#include "parts/13-ia.typ"
#pagebreak()
#include "parts/14-backlog.typ"
#pagebreak()
#include "parts/09-risques.typ"
#pagebreak()
#include "parts/99-annexes.typ"
