#import "../lib.typ": dtable, keybox, keep, brand, mut
#import "../../data/econ.typ": ECON
#import "../../data/bom.typ": BOM, BOM_TOTAL_P1, BOM_TOTAL_PK
#import "../../data/cloudbudget.typ": CLOUDBUDGET, CLOUD_TOTAL

= Modèle économique & budget

== Modèle économique

Le modèle repose sur *deux revenus*, comme chez les concurrents : la *vente du collier* (paiement unique) et un *abonnement récurrent* qui porte la rentabilité. C'est un modèle « rasoir et lames » : le matériel est vendu *proche de son coût*, la marge vient de l'abonnement.

*Ce que nous coûte le collier* : *≈ 66 €/u en série (1000 pièces)*, *≈ 131 € en prototype unitaire* (BOM détaillé plus bas et en partie IoT). Le coût chute avec le volume (achats groupés, PCBA en série).

*Ce que font les concurrents* : collier à l'achat + abonnement obligatoire (le traceur ne fonctionne pas sans la connectivité cellulaire de l'abonnement).

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("Acteur", "Collier (achat)", "Abonnement"),
  align-cells: left,
  rows: (
    ("Tractive (DOG 6)", "≈ 70 €", "≈ 5 à 13 €/mois (5 € en engagement 2 ans, 13 € au mois)"),
    ("Weenect", "≈ 50 €", "≈ 4 à 13 €/mois (4,16 € en 3 ans, 12,99 € au mois)"),
    ([*Pawrise (nous)*], [*69 €*], [*9,90 €/mois*]),
  ),
)

#text(size: 8.5pt, fill: mut)[Tarifs éditeurs consultés en juillet 2026 (#link("https://tractive.com/en/c/plans")[Tractive], #link("https://www.weenect.com/fr/fr/collier-gps-chien/")[Weenect]) ; parité dollar/euro retenue.]

*Notre prix, décidé et justifié :*
- *Collier : 69 €.* Aligné sur le haut de la fourchette matériel (Tractive DOG 6 ≈ 70 €) et *proche de notre coût série* (≈ 66 €) : quasi neutre à l'échelle. Plus cher que Weenect (≈ 50 €), justifié par un *matériel plus riche* (cellulaire LTE-M autonome, GNSS dédié, capteurs santé IMU / température / fréquence cardiaque), pas un simple traceur GPS.
- *Abonnement : 9,90 €/mois.* *Compétitif* face au tarif *au mois* des concurrents (≈ 13 €) et *premium* face à leurs offres *prépayées* (≈ 4 à 7 €), justifié par la valeur ajoutée : interprétation par l'IA et relais vétérinaire.
- *Au lancement*, le faible volume garde le coût proche du prototype (≈ 131 €) : le collier vendu 69 € est alors *sous son coût* (≈ 60 € de subvention par unité), un *investissement d'acquisition* financé par la valeur vie client jusqu'à ce que la série ramène le coût vers ≈ 66 €.

Le modèle intègre un *pool de rémunération façon Spotify* : une *part fixe* de chaque abonnement alimente une cagnotte qui rémunère les vétérinaires, répartie au prorata de leur activité. Conséquence : le coût vétérinaire total ne peut jamais dépasser ce pourcentage du chiffre d'affaires, quel que soit le nombre de sollicitations. Il est donc plafonné « par construction » (mathématiquement), ce qui protège la marge : la dépense vétérinaire grandit avec les revenus, jamais plus vite. Des garde-fous (filtrage IA avant escalade, usage équitable) évitent l'abus.

À l'échelle, le collier est *quasi neutre* (69 € vendu vs ≈ 66 € de coût) : les *unit economics* ci-dessous reposent donc sur l'*abonnement*. La subvention matérielle du lancement est un coût d'acquisition ponctuel, absorbé par la valeur vie client (≈ 205 €).

*Les termes, en clair :*
- *Marge contributive* : ce qu'il reste de l'abonnement une fois payés les coûts directs d'un client (cloud, API d'IA, pool vétérinaire). Exemple : sur 9,90 €, s'il reste 6,80 €, la marge est de ~69 %.
- *Churn mensuel* : le pourcentage de clients qui résilient chaque mois. S'il est de 3 %/mois, un client reste en moyenne 1 / 0,03 ≈ 33 mois, arrondis prudemment à ≈ 30 mois dans notre scénario de base : c'est la *durée de vie client*.
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
Nomenclature du produit final (PCB custom, assemblage JLCPCB), en prototype unitaire et en série de 1000. Choix clé : le nRF9160 (SiP MCU + modem) qui supprime les AT commands. Composants détaillés en partie IoT.

#dtable(
  columns: (1fr, auto, auto),
  headers: ("Composant", "Prototype ×1", "Série ×1000"),
  rows: BOM,
)
#align(right)[#text(fill: brand, weight: 800)[Total : #BOM_TOTAL_P1 (prototype) · #BOM_TOTAL_PK (série)]]
]

== Coût annuel de l'infrastructure

Coût d'exploitation sur *un an*, en production une fois le produit lancé, développement inclus. Hébergement souverain (UE), auto-géré via Terraform et Kubernetes. Le dimensionnement retenu (≈ 16 vCPU / 32 Go) découle directement de l'architecture (services Rust, bases de données, bus d'événements, broker MQTT, moteur IA, observabilité), justifié en partie Cloud.

*Hypothèses de calcul* : lancement à faible trafic et usage IA modéré ; prix serveurs = tarifs publics Hetzner de juin 2026 (ligne ARM CAX) ; parité euro/dollar retenue pour l'IA ; certificats TLS gratuits (Let's Encrypt).

=== Détail des postes

#keep[
#dtable(
  columns: (1fr, auto, auto),
  headers: ("Poste", "Détail", "Coût annuel"),
  rows: CLOUDBUDGET,
)
#align(right)[#text(fill: brand, weight: 800)[Total : #CLOUD_TOTAL]]
]

Comment chaque poste est chiffré :
- *Compute (cluster)* : 1× CAX21 (10,49 €) + 2× CAX31 (2 × 20,99 €) = 52,47 €/mois, soit ≈ 630 €/an. Taille calée sur le besoin de 16 vCPU / 32 Go.
- *Sauvegardes & volumes* : ~150 Go de volumes bloc (0,057 €/Go) + sauvegardes automatiques (+20 % du prix des instances) ≈ 19 €/mois, soit ≈ 230 €/an.
- *Load balancer + IP publique* : LB11 à 5,99 €/mois, soit ≈ 72 €/an.
- *Sauvegardes hors-site* : Storage Box (rétention longue durée) ~5 €/mois, soit ≈ 60 €/an.
- *Modèle de langage (IA)* : ~0,03 à 0,05 € par conversation ; poste *variable*, ≈ 600 €/an à faible volume, qui croît avec les abonnements qui le financent.
- *Nom de domaine* : ≈ 12 €/an (TLS gratuit).

#text(size: 8.5pt, fill: mut)[Sources des prix : #link("https://www.hetzner.com/cloud/")[Hetzner Cloud] + #link("https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/")[ajustement du 15/06/2026] (CAX21 10,49 €, CAX31 20,99 €/mois ; volumes 0,057 €/Go) ; IA : #link("https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/")[Azure OpenAI], #link("https://cohere.com/pricing")[Cohere].]

=== Développement & tests (à la consommation)

L'essentiel du développement ne coûte rien, et les tests sont payés à l'usage :
- *Développement en local* : 0 €. Chaque développeur lance la stack sur sa machine (Docker Compose / kind).
- *Intégration continue* : GitHub Actions (offre incluse pour le projet).
- *Environnement de test / staging éphémère* : un petit cluster (~31 €/mois en continu) n'est actif que ~40 h/semaine, détruit le soir et le week-end via `terraform destroy` (~24 % du temps), soit ≈ 7,5 €/mois → ≈ 90 €/an.
- *Consommation IA de test* : ~5 €/mois à l'usage, soit ≈ 60 €/an.

Total développement ≈ *150 €/an*. Un serveur arrêté restant facturé chez Hetzner, l'économie vient de la destruction/recréation par IaC, pas de l'extinction (mécanisme détaillé en partie Cloud).

=== Comparaison (coût annuel, capacité équivalente)

#keep[
#dtable(
  columns: (1fr, auto),
  headers: ("Option d'hébergement", "Coût annuel*"),
  rows: (
    ("Bare metal (serveur dédié)", "~1 000 à 1 500 €"),
    ("Hetzner Cloud auto-géré (retenu)", "≈ 1 750 € (dont ~150 € de dev)"),
    ("Cloud managé EU (Scaleway / OVH)", "~3 000 à 3 700 €"),
    ("Hyperscaler (AWS / Azure / GCP)", "~6 000 à 10 000 €"),
  ),
)
]
#text(size: 8.5pt, fill: mut)[\* Capacité équivalente (~16 vCPU / 32 Go + bases de données, load balancer, sauvegardes et IA), faible trafic. Critères complets (souveraineté, exploitation, lock-in) en partie Cloud.]

*Pourquoi pas le bare metal* : il reste acceptable pour des tests ponctuels, mais il n'est pas maintenable en production. Il ajoute toute une couche de complexité opérationnelle dont on ne veut absolument pas : gestion physique des serveurs, remplacement des disques et du matériel défaillant, redondance à provisionner et câbler en double, mises à jour firmware, supervision matérielle, et aucune élasticité pour absorber un pic ou créer un environnement à la demande. Le gain sur le compute brut ne compense pas cette charge d'exploitation permanente. On le réserve donc, au mieux, à des tests, jamais à la production.

*Pourquoi pas l'hyperscaler aujourd'hui* : notre charge de lancement ne le justifie tout simplement pas. Il coûte 4 à 6× plus cher, avec un fort lock-in et une souveraineté seulement partielle (le Cloud Act américain peut s'appliquer même sur une région européenne). Y aller avant d'en avoir le besoin serait du sur-engineering. On le garde en réserve pour un éventuel besoin multi-région ou un SLA entreprise.

*Retenu* : Hetzner Cloud auto-géré, le meilleur compromis coût / souveraineté / élasticité pour notre charge actuelle ; le cloud managé européen prend le relais au moment du passage à l'échelle.

=== Prudence des chiffres (scénarios majorants)

Tous les montants présentés sont volontairement des majorants (hypothèses pessimistes), afin de ne jamais sous-estimer le budget :

- *Développement* : le calcul suppose un environnement de test actif environ 40 h par semaine, chaque semaine. En réalité, nous ne développerons pas en continu, et un environnement de staging ne sera monté que lors des vraies phases de test, bien plus rarement. Le coût réel de développement sera donc nettement inférieur aux ≈ 150 €/an affichés.
- *Intelligence artificielle* : le coût de 0,03 à 0,05 € par conversation est une fourchette haute, délibérément peu optimiste. Les optimisations prévues (mise en cache, cascade de modèles, modèles moins chers sur les nœuds simples) le feront baisser. Surtout, le poste IA est encadré par des *alertes de consommation* et des *plafonds journaliers* : au-delà d'un seuil, le service se dégrade gracieusement ou bascule sur une réponse de repli, ce qui rend tout dérapage budgétaire impossible.

Autrement dit, le total de ≈ 1 750 €/an est un plafond prudent, pas une projection optimiste : le coût réel devrait être sensiblement inférieur.

=== Ce qui varie avec l'échelle

Seul le poste IA est réellement variable : il croît avec le nombre de conversations, donc avec les abonnements qui le financent, ce qui garde ce coût couvert par la marge. Le compute, lui, augmente par paliers (ajout de workers) et bascule vers un cloud managé européen au moment du passage à l'échelle (voir partie Cloud). L'infrastructure reste ainsi maîtrisée et proportionnée à l'usage.
