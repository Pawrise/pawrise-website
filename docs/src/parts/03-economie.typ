#import "../lib.typ": dtable, keybox, keep, brand, mut
#import "../../data/econ.typ": ECON
#import "../../data/bom.typ": BOM, BOM_TOTAL
#import "../../data/cloudbudget.typ": CLOUDBUDGET, CLOUD_TOTAL

= Modèle économique & budget

== Modèle économique

Le hardware est vendu proche de son coût ; la rentabilité vient de l'*abonnement récurrent*.

Le modèle intègre un *pool de rémunération façon Spotify*. Concrètement : une *part fixe* de chaque abonnement (un pourcentage défini du prix mensuel) alimente une cagnotte commune qui rémunère les vétérinaires, répartie entre eux au prorata de leur activité. La conséquence est que le *coût vétérinaire total ne peut jamais dépasser ce pourcentage du chiffre d'affaires*, quel que soit le nombre de sollicitations : il est plafonné « par construction », c'est-à-dire mathématiquement, et non par une simple règle de gestion. Aucun utilisateur ne coûte donc plus, en temps vétérinaire, que ce que son abonnement apporte au pool. C'est ce qui protège la marge : la dépense vétérinaire grandit avec les revenus, jamais plus vite. Des garde-fous (filtrage IA avant escalade, quota d'usage équitable) évitent l'abus tout en gardant le service soutenable.

*D'où vient le prix ?* Pour l'instant, on part sur un abonnement de *9,90 €/mois*, que l'on fera évoluer au fil du temps selon les besoins. On se positionne volontairement dans le haut du marché : les concurrents (Tractive, Invoxia) facturent de l'ordre de 5 à 13 €/mois, et notre valeur ajoutée (interprétation par l'IA et relais vétérinaire) justifie cet alignement par le haut.

*Les termes, en clair :*
- *Marge contributive* : ce qu'il reste de l'abonnement une fois payés les coûts directs d'un client (cloud, API d'IA, pool vétérinaire). Exemple : sur 9,90 €, s'il reste 6,80 €, la marge est de ~69 %.
- *Churn mensuel* : le pourcentage de clients qui résilient chaque mois. S'il est de 3 %/mois, un client reste en moyenne 1 / 0,03 ≈ 33 mois : c'est la *durée de vie client*.
- *LTV (valeur vie client)* : ce qu'un client rapporte au total sur toute sa durée de vie, soit abonnement × nombre de mois × marge. Exemple : 9,90 € × 30 mois × 69 % ≈ 205 €.
- *CAC (coût d'acquisition)* : ce qu'il faut dépenser (publicité, commercial) pour gagner un client.

== Unit economics (3 scénarios)

Les *unit economics* répondent à une seule question : un client, à lui seul, rapporte-t-il plus qu'il ne coûte ? On encadre l'incertitude avec trois scénarios (optimiste, réaliste, pessimiste).

*Comment les scénarios sont bâtis.* On fixe trois *leviers d'entrée* à partir de repères du marché de l'abonnement grand public : le *churn* (taux de résiliation mensuel, ~2 % / ~3 % / ~8 % par mois, d'où une durée de vie de ~48 / ~30 / ~12 mois), le *CAC* (35 / 50 / 90 €, repères d'acquisition digitale) et la *marge* (78 / 69 / 35 %, selon ce que consomment cloud, IA et pool vétérinaire). Les deux dernières lignes, *LTV : CAC* et *Payback*, en sont ensuite calculées. Optimiste = meilleurs niveaux plausibles ; base = prudent et réaliste ; pessimiste = combinaison défavorable servant de garde-fou. C'est un modèle prévisionnel, à affiner avec les chiffres réels une fois en marché.

#keep[
#dtable(
  columns: (1fr, auto, auto, auto),
  headers: ("Métrique", "Optimiste", "Base", "Pessimiste"),
  rows: ECON,
  align-cells: left,
)

#text(size: 8.5pt, fill: mut)[*Comment lire.* *LTV : CAC* compare ce qu'un client rapporte (LTV) à ce qu'il coûte à acquérir (CAC) : au-dessus de 3× le modèle est sain, à 1× on est à l'équilibre, en dessous on perd de l'argent. *Payback* : le nombre de mois pour rembourser le coût d'acquisition grâce à la marge mensuelle. Lecture du scénario de base : un client rapporte environ 4× sa mise, remboursé en ~7 mois. Le scénario pessimiste (churn et CAC élevés) ne rembourse jamais : c'est celui à éviter, en réduisant le churn et le coût d'acquisition.]
]

== Budget prévisionnel · collier (BOM)

#keep[
Nomenclature du prototype, option retenue (LTE sur mesure). Les composants sont alignés sur la partie IoT.

#dtable(
  columns: (1fr, auto),
  headers: ("Composant", "Coût unitaire"),
  rows: BOM,
)
#align(right)[#text(fill: brand, weight: 800)[Total unitaire : #BOM_TOTAL]]
]

== Budget cloud & exploitation (11 mois)

#keep[
Coûts de fonctionnement sur la phase projet : hébergement souverain Hetzner (cluster Kubernetes, ligne ARM) et modèle de langage.

#dtable(
  columns: (1fr, auto, auto),
  headers: ("Poste", "Détail", "Coût"),
  rows: CLOUDBUDGET,
)
#align(right)[#text(fill: brand, weight: 800)[Total exploitation : #CLOUD_TOTAL]]
]

#keybox(title: "Cohérence des coûts")[
  Hébergement 100 % Hetzner (souverain, UE), chiffré sur la ligne ARM la plus rentable depuis la hausse des prix Hetzner de juin 2026 ; borne haute sur les anciens prix AMD ≈ 987 €. Azure n'intervient que pour le modèle de langage. Le coût IA est d'environ 0,03 à 0,05 € par conversation et passe à l'échelle avec les abonnements. Détail sur les parties Cloud et Assistant IA.
]
