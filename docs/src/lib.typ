// ============================================================
//  Pawrise Care — template de documentation (Typst)
//  DA claire, sobre, "print-native" : blanc, accent indigo, sans-serif propre.
// ============================================================

#let accent = rgb("#37338f")   // indigo de marque
#let accent2 = rgb("#01aabb")  // teal (accents secondaires)
#let ink = rgb("#1b1b2e")
#let mut = rgb("#55566b")
#let faint = rgb("#8b8ca3")
#let hair = rgb("#e2e3ee")
#let zebra = rgb("#f6f7fb")

// ---- Tableau stylé réutilisable --------------------------------------------
#let dtable(columns: auto, headers: (), rows: (), align-cells: left) = {
  set text(size: 9pt)
  table(
    columns: columns,
    stroke: (x, y) => (bottom: 0.6pt + hair),
    align: (x, y) => if y == 0 { center + horizon } else { align-cells + horizon },
    inset: (x: 7pt, y: 6pt),
    fill: (x, y) => if y == 0 { accent } else if calc.even(y) { zebra } else { white },
    table.header(..headers.map(h => text(fill: white, weight: 800, size: 8.5pt, h))),
    ..rows.flatten(),
  )
}

// ---- Encadré "point clé / décision" ----------------------------------------
#let keybox(title: "", body) = {
  block(
    fill: rgb("#f0f0fb"),
    stroke: (left: 3pt + accent),
    radius: 3pt,
    inset: (x: 12pt, y: 10pt),
    width: 100%,
    spacing: 12pt,
  )[
    #if title != "" [#text(fill: accent, weight: 800, size: 9pt, upper(title))\ ]
    #text(size: 9.5pt, body)
  ]
}

// ---- Page de garde ---------------------------------------------------------
#let cover(title: "", subtitle: "", part: none, authors: (), date: "") = {
  set page(header: none, footer: none, numbering: none)
  place(top + left, dy: 0pt)[
    #box(baseline: 1.5pt, rect(width: 10pt, height: 10pt, radius: 2.5pt, fill: accent))
    #h(3pt)
    #text(fill: accent, weight: 900, size: 13pt)[Pawrise Care]
  ]
  v(1fr)
  if part != none [
    #text(fill: accent2, weight: 800, size: 11pt, upper(part))
    #v(4pt)
  ]
  text(fill: ink, weight: 900, size: 30pt, title)
  if subtitle != "" [
    #v(8pt)
    #text(fill: mut, size: 14pt, subtitle)
  ]
  v(20pt)
  line(length: 62pt, stroke: 3pt + accent)
  v(1fr)
  grid(
    columns: (1fr, auto),
    align: (left, right),
    [
      #text(fill: faint, size: 9pt, weight: 700, upper("Collier connecté · santé & bien-être animal"))\
      #text(fill: mut, size: 10pt)[T-ESP-800 · Epitech EIP]
    ],
    [
      #if authors.len() > 0 [#text(fill: mut, size: 9.5pt, authors.join(" · "))\ ]
      #text(fill: faint, size: 9.5pt, date)
    ],
  )
  pagebreak()
}

// ---- Configuration globale du document -------------------------------------
#let conf(doc-title: "Pawrise Care", body) = {
  set document(title: doc-title)
  set page(
    paper: "a4",
    margin: (x: 2.2cm, top: 2.4cm, bottom: 2cm),
    header: context {
      if counter(page).get().first() > 1 {
        set text(size: 8pt, fill: faint)
        grid(columns: (1fr, auto), align: (left, right),
          text(weight: 700, doc-title), [Pawrise Care])
        v(-6pt); line(length: 100%, stroke: 0.5pt + hair)
      }
    },
    footer: context {
      if counter(page).get().first() > 1 {
        set text(size: 8pt, fill: faint)
        line(length: 100%, stroke: 0.5pt + hair)
        v(2pt)
        grid(columns: (1fr, auto), align: (left, right),
          [T-ESP-800 · Pawrise Care],
          [#counter(page).display() / #context counter(page).final().first()])
      }
    },
  )
  set text(font: ("Helvetica Neue", "Arial"), size: 10.5pt, fill: ink, lang: "fr", hyphenate: false)
  set par(justify: true, leading: 0.72em, spacing: 1.05em)
  set list(indent: 6pt, spacing: 0.7em)
  set enum(indent: 6pt, spacing: 0.7em)

  // Titres
  set heading(numbering: "1.1")
  show heading.where(level: 1): it => {
    v(6pt)
    block(spacing: 10pt)[
      #text(fill: accent, weight: 900, size: 15pt)[#counter(heading).display() #h(6pt) #it.body]
      #v(-4pt)
      #line(length: 100%, stroke: 0.8pt + accent)
    ]
  }
  show heading.where(level: 2): it => {
    v(3pt)
    text(fill: ink, weight: 800, size: 12pt)[#counter(heading).display() #h(5pt) #it.body]
  }
  show heading.where(level: 3): it => {
    text(fill: accent, weight: 700, size: 10.5pt, it.body)
  }
  show link: it => text(fill: accent, it)

  body
}
