#import "../lib.typ": dtable, keybox, brand, mut, zebra

= IoT · le collier connecté

Le collier est le cœur produit : capteurs embarqués, connectivité cellulaire basse consommation et firmware Rust, pensés pour tenir sur batterie, fonctionner en zone blanche et transmettre en sécurité.

#grid(columns: (1fr, 1fr, 1fr, 1fr), gutter: 8pt,
  ..(("12 à 15 j", "autonomie cible"), ("IP67", "poussière + immersion"), ("-20 à +60°C", "plage de température"), ("2000 mAh", "batterie Li-Po")).map(f => block(fill: zebra, radius: 4pt, inset: 9pt, width: 100%)[
    #text(fill: brand, weight: 900, size: 13pt, f.at(0))\ #text(size: 8pt, fill: mut, f.at(1))
  ])
)

== Les défis à résoudre

- *Autonomie énergétique* · cible 12 à 15 jours ; GPS, modem et capteurs sont énergivores, d'où veille profonde, capteurs à la demande, transmission par batch.
- *Zones blanches* · le cas critique (fugue) arrive souvent sans couverture ; mode dégradé : stockage local puis rattrapage (store and forward).
- *Précision de localisation* · GPS qui dérive et premier fix long, accélérés par l'A-GPS et une fréquence adaptée au contexte.
- *Robustesse* · chocs, eau, température : certification IP67 et composants qualifiés -20 à +60°C, gestion thermique au contact de la peau.
- *Sécurité des données* · un appareil qui transmet la position doit être inviolable : authentification par certificat et chiffrement de bout en bout.

== Choix du microcontrôleur : nRF9160 (SiP)

#keybox(title: "Un seul silicium, plus d'AT commands")[
  Le nRF9160 est un *SiP* qui intègre le microcontrôleur (ARM Cortex-M33) et le modem LTE-M/NB-IoT dans la même puce. Alternative écartée : un MCU plus un modem externe (ESP32-S3 + BG95, ou LilyGO T-SIM7080G), qui oblige le firmware à piloter le modem par *AT commands* (protocole textuel hérité des années 1980 : chaînes à construire, réponses fragiles à parser, timeouts empiriques, 250+ pages de documentation). Avec le nRF9160, la connectivité est gérée par la bibliothèque modem Nordic (LTE Link Control), exposée à notre firmware *Rust* via la crate `nrf-modem` : plus d'AT commands. Son *TrustZone* sert de secure element pour la clé privée.
]

== Composants embarqués

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("Composant", "Choix", "Rôle"),
  rows: (
    ("MCU + modem (SiP)", "nRF9160-SICA", "Exécute le firmware Rust et la machine à états ; modem LTE-M/NB-IoT intégré ; TrustZone = secure element."),
    ("GNSS dédié", "u-blox ZOE-M8Q", "Localisation multi-constellation (GPS/GLONASS/Galileo/BeiDou), plus précise que le GNSS intégré seul."),
    ("Centrale inertielle", "LSM6DSOX (ST)", "Accéléromètre + gyroscope avec Machine Learning Core embarqué : activité, immobilité, chocs."),
    ("Température", "TMP117 (TI)", "Température corporelle, précision ±0,1°C."),
    ("Fréquence cardiaque", "1 option parmi 4 (axe R&D)", "Rythme cardiaque (PPG optique ou piézo) ; indicateur de tendance, non médical."),
    ("Mémoire flash", "W25Q128 (16 Mo)", "Tampon local store-and-forward (~72 h)."),
    ("PMU + régulateur", "BQ25895 + TLV62585", "Charge Li-Po, fuel gauge I²C, régulation 3,3 V, protections."),
    ("Antennes", "Taoglas FPC (LTE-M + GNSS)", "Antennes flexibles pour la cellulaire et le GNSS."),
    ("Batterie", "Li-Po 2000 mAh (103450)", "Alimentation autonome, autonomie cible 12 à 15 jours."),
  ),
)

== Capteurs : choix justifiés

- *Activité (IMU) → LSM6DSOX* : très basse consommation, Machine Learning Core embarqué (détection de mouvement) qui décharge le MCU.
- *Température → TMP117* : précision médicale (±0,1°C), idéale pour détecter une fièvre.
- *Fréquence cardiaque → axe R&D (décision Go/No-Go fin du mois 6)* : quatre candidats testés sur chien, MAX30102 (PPG rouge/IR), APDS-9960 (PPG vert 530 nm), MAXM86161 (PPG 3 longueurs d'onde) et un capteur piézocéramique (vibration mécanique). Le PPG optique est calibré pour l'humain : sa fiabilité sur un animal à fourrure et en mouvement doit être validée. En production, une seule option est retenue, ou un emplacement non peuplé (DNP) si No-Go. Les données restent des indicateurs de tendance, non médicaux.

== Réseau & sécurité

*Réseau :* LTE-M plutôt que NB-IoT (garde la mobilité et une latence faible, indispensables pour suivre un animal), NB-IoT en repli ; antennes flexibles Taoglas FPC (LTE-M et GNSS) ; transport MQTT sur TLS (broker EMQX : pub/sub léger, QoS, offline gratuits) ; SIM IoT 1NCE (500 Mo / 10 ans, roaming 165 pays) ; mode dégradé store-and-forward.

*Sécurité :* PKI X.509 (Root CA → CA intermédiaire signant colliers et serveur, via step-ca) ; authentification mutuelle mTLS (un appareil non enregistré est refusé, même firmware reverse-engineeré) ; provisioning en usine (device_id + certificat, clé dans le TrustZone) ; activation par appairage BLE (QR code).

== Logique embarquée : machine à états

Le firmware Rust adapte acquisitions et transmission selon l'état de l'animal et du réseau : *BOOT* (démarrage), *PAIRING* (appairage BLE), *REST* (repos, sobre), *ACTIVE* (activité), *ESCAPE* (sortie de zone, GPS accéléré), *LIVE* (temps réel à la demande), *NO_NETWORK* (zone blanche, stockage local), *LOW_POWER* (batterie faible, services réduits).

== Du prototype au produit

*Phase de développement :* kit *nRF9160-DK* + shields/breakouts I²C sans soudure (Qwiic / STEMMA QT), pour valider firmware et capteurs, ≈ 228 € (≈ 332 € avec la R&D fréquence cardiaque à 4 candidats).

*Produit final :* PCB 4 couches custom, composants nus (SMD/CMS) assemblés chez JLCPCB, boîtier PC/ABS injecté IP67 (70×46×20 mm), antennes FPC. ≈ 131 € en prototype unitaire, ≈ 66 €/u en série de 1000. Détail chiffré en partie Modèle économique & budget.
