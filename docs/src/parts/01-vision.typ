#import "../lib.typ": keybox, accent, brand, mut

= Vision & problématique

== Le problème

Les signaux de santé d'un animal de compagnie passent le plus souvent inaperçus jusqu'à ce que la situation devienne grave. Entre deux visites vétérinaires, le propriétaire n'a aucune visibilité continue sur l'état réel de son animal, et le vétérinaire reçoit un historique imprécis, reconstitué de mémoire. Les signaux faibles (baisse d'activité, troubles du sommeil, variations de constantes) sont donc détectés trop tard, souvent au stade critique.

Les colliers connectés ont beaucoup progressé : au-delà du GPS, plusieurs acteurs (Invoxia, Tractive) embarquent désormais des capteurs de santé (activité, fréquence cardiaque et respiratoire) et des alertes. Mais tous s'arrêtent à la donnée brute : ils mesurent et affichent des courbes, sans les expliquer ni accompagner le propriétaire. La valeur manquante n'est pas un capteur de plus, c'est l'interprétation.

== La solution Pawrise Care

Pawrise Care ne cherche pas à gagner la course aux capteurs. Sa valeur unique est l'*explicabilité* : un assistant IA, le Care Engine, traduit les données du collier en langage clair pour le propriétaire, contextualise les alertes et répond à ses questions. Et quand une situation le justifie, un réseau de vétérinaires partenaires prend le relais avec un dossier déjà préparé. La chaîne de valeur est claire : le collier mesure, l'IA explique et oriente, le vétérinaire décide.

== Proposition de valeur

Notre différenciation n'est pas le nombre de capteurs mais l'interprétation accompagnée, là où les concurrents s'arrêtent à la donnée brute. Elle repose sur deux piliers :

- *Explicabilité par l'IA* : l'assistant conversationnel explique l'état de l'animal en clair et contextualise les alertes. Une valeur difficile à copier car elle s'appuie sur un corpus vétérinaire validé et des garde-fous.
- *Relais vétérinaire* : dès qu'un avis médical devient nécessaire, un vétérinaire partenaire prend le relais avec un dossier normalisé prêt à l'emploi. Ce réseau est rémunéré par une part fixe des abonnements (pool), ce qui plafonne le coût vétérinaire par construction (voir modèle économique).

C'est un positionnement *océan bleu* : ne pas livrer la guerre des capteurs, mais ouvrir la passerelle propriétaire vers vétérinaire que les acteurs établis ne couvrent pas.

#keybox(title: "Règle d'or, non négociable")[
  L'assistant IA n'établit *jamais* de diagnostic médical (Code rural, article L243-1) : il explique, oriente, et invite à consulter. C'est précisément le réseau vétérinaire qui prend le relais dès qu'un acte médical est requis. Toute situation ambiguë déclenche une orientation ou une escalade vers le vétérinaire, jamais une conclusion médicale.
]

== Personas

Deux personas primaires, les deux faces de la plateforme, volontairement approfondis.

#block(breakable: false, grid(columns: (1fr, 1fr), gutter: 12pt,
  block(fill: rgb("#f6f7fb"), radius: 4pt, inset: 11pt, width: 100%)[
    #text(fill: brand, weight: 800, size: 10pt)[Propriétaire d'animal]
    #v(3pt)
    #text(size: 9pt)[25 à 55 ans, attaché à son animal, sans formation vétérinaire, accès vétérinaire parfois difficile (zone rurale, planning saturé).]
    #v(4pt)
    #text(size: 8.5pt, fill: mut)[*Objectifs* : comprendre l'état de son animal au quotidien, agir au bon moment, éviter l'urgence.\ *Frustrations* : données brutes illisibles, incertitude « est-ce grave ? », délais et coût des consultations.]
  ],
  block(fill: rgb("#f6f7fb"), radius: 4pt, inset: 11pt, width: 100%)[
    #text(fill: brand, weight: 800, size: 10pt)[Vétérinaire partenaire]
    #v(3pt)
    #text(size: 9pt)[En cabinet ou en téléconsultation, prudent face aux outils IA généralistes, intéressé par la préparation en amont des consultations.]
    #v(4pt)
    #text(size: 8.5pt, fill: mut)[*Objectifs* : préparer ses consultations, gagner du temps, fidéliser sa clientèle.\ *Frustrations* : historiques imprécis, données brutes non exploitables, sollicitations non filtrées.]
  ],
))

#v(6pt)
*Segments prioritaires (early adopters)* : propriétaires en zone d'accès vétérinaire limité, foyers multi-animaux, propriétaires de races à risques de santé connus. Un acteur secondaire « système / administration » (provisioning des colliers, RGPD, exploitation) est traité dans les parties Organisation et Architecture.
