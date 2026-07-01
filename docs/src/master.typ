#import "lib.typ": conf, cover

#show: conf.with(doc-title: "Dossier de conception — Pawrise Care")

#cover(
  title: "Pawrise Care",
  subtitle: "Dossier de conception & documentation technique",
  part: "T-ESP-800 · Epitech EIP",
  authors: ("Équipe Pawrise Care",),
  date: "2026",
)

#outline(title: "Sommaire", depth: 2, indent: auto)
#pagebreak()

#include "parts/01-vision.typ"
#pagebreak()
#include "parts/02-marche.typ"
#pagebreak()
#include "parts/03-economie.typ"
#pagebreak()
#include "parts/04-wbs.typ"
#pagebreak()
#include "parts/09-risques.typ"
