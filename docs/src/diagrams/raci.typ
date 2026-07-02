// Export SVG · matrices RACI (extrait de parts/06-raci.typ).
// Page 1 : A distribué par pôle · page 2 : 1 R / 1 A / 1 C par activité.
#import "../lib.typ": brand, accent2, faint, hair
#import "../../data/raci.typ": RACI_POLES, RACI_STD, RACI_STRICT

#set page(width: 19cm, height: auto, margin: 14pt, fill: white)
#set text(font: ("Helvetica Neue", "Arial"), size: 8.5pt, fill: rgb("#1b1b2e"), lang: "fr")

#let rfill(v) = if v == "A" or v == "A/R" { brand } else if v == "R" { accent2 } else if v == "C" { rgb("#e9f3ca") } else if v == "I" { rgb("#eef0f5") } else { white }
#let rfg(v) = if v == "A" or v == "A/R" or v == "R" { white } else if v == "C" { brand } else { faint }
#let chip(v, label) = box(fill: rfill(v), radius: 2pt, inset: (x: 5pt, y: 1.5pt))[#text(fill: rfg(v), weight: 700, size: 8pt)[#label]]

#let racitable(data) = {
  set text(size: 8.5pt)
  table(
    columns: (1fr,) + (1.5cm,) * 6,
    stroke: (x, y) => (bottom: 0.5pt + hair),
    align: (x, y) => if x == 0 { left + horizon } else { center + horizon },
    inset: (x: 5pt, y: 6pt),
    table.header(
      table.cell(fill: brand)[#text(fill: white, weight: 800, size: 7.5pt)[Activité]],
      ..RACI_POLES.map(p => table.cell(fill: brand)[#text(fill: white, weight: 800, size: 7pt)[#p]]),
    ),
    ..data.map(r => (
      text(size: 8.5pt)[#r.at(0)],
      ..r.slice(1).map(v => table.cell(fill: rfill(v))[#text(fill: rfg(v), weight: 700, size: 8.5pt)[#v]]),
    )).flatten()
  )
}

#let legend = [Légende : #chip("A", "A") garant · #chip("R", "R") responsable · #chip("C", "C") consulté · #chip("I", "I") informé.]

#text(weight: 800, fill: brand, size: 10pt)[Matrice RACI]
#v(2pt)
#legend
#v(4pt)
#racitable(RACI_STD)

#pagebreak()

#text(weight: 800, fill: brand, size: 10pt)[Matrice RACI]
#v(2pt)
#legend
#v(4pt)
#racitable(RACI_STRICT)
