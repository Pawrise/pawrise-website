#import "../lib.typ": keybox, brand, mut, zebra, lime

= Résumé exécutif

*Pawrise Care* est un collier connecté qui suit en continu la santé et le bien-être d'un animal, l'explique au propriétaire via un assistant IA, et transmet au vétérinaire un dossier structuré et normalisé. Le positionnement est non négociable : *orienter, jamais diagnostiquer*.

Là où les acteurs établis (Tractive, Weenect, Invoxia) se concentrent sur la localisation, Pawrise Care ouvre la passerelle propriétaire vers vétérinaire que personne ne couvre : c'est une stratégie océan bleu sur un marché adressable de 26,5 M de chiens et chats en France.

#grid(columns: (1fr, 1fr, 1fr, 1fr), gutter: 8pt,
  ..(("11", "epics"), ("66", "user stories (52 MVP)"), ("10", "membres · 5 pôles"), ("20 mois", "de roadmap")).map(f => block(fill: zebra, radius: 4pt, inset: 9pt, width: 100%)[
    #text(fill: brand, weight: 900, size: 15pt, f.at(0))\ #text(size: 8pt, fill: mut, f.at(1))
  ])
)

#v(6pt)

Ce dossier réunit l'ensemble des livrables de conception : vision et marché, modèle économique et budget, découpage (WBS) et organisation (OBS, RACI), planning et méthodologie, plan qualité, gestion des risques, et l'architecture technique complète (système, cloud, IoT, IA). Les chiffres et tableaux sont générés à partir d'une source unique partagée avec le prototype en ligne, garantissant leur cohérence.

#keybox(title: "Ce qui distingue Pawrise Care")[
  Une IA d'orientation conçue conforme dès l'origine (Code rural, AI Act, RGPD), un réseau vétérinaire réel, un modèle économique dont le coût vétérinaire est plafonné par construction, et une architecture souveraine (UE) maîtrisée en coût.
]
