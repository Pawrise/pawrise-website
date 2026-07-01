#import "../lib.typ": dtable, keybox, brand, mut, zebra

= IoT · le collier connecté

Le collier est le cœur produit : capteurs embarqués, connectivité cellulaire basse consommation et firmware Rust, pensés pour tenir sur batterie, fonctionner en zone blanche et transmettre en sécurité.

#grid(columns: (1fr, 1fr, 1fr, 1fr), gutter: 8pt,
  ..(("7 à 15 j", "autonomie cible"), ("IP67", "poussière + immersion"), ("-20 à +60°C", "plage de température"), ("2000 mAh", "batterie Li-Po")).map(f => block(fill: zebra, radius: 4pt, inset: 9pt, width: 100%)[
    #text(fill: brand, weight: 900, size: 13pt, f.at(0))\ #text(size: 8pt, fill: mut, f.at(1))
  ])
)

== Les défis à résoudre

- *Autonomie énergétique* · cible 7 à 15 jours ; GPS, modem et capteurs sont énergivores, d'où veille profonde, capteurs à la demande, transmission par batch.
- *Zones blanches* · le cas critique (fugue) arrive souvent sans couverture ; mode dégradé : stockage local puis rattrapage (store and forward).
- *Précision de localisation* · GPS qui dérive et premier fix long, accélérés par l'A-GPS et une fréquence adaptée au contexte.
- *Robustesse* · chocs, eau, température : certification IP67 et composants qualifiés -20 à +60°C, gestion thermique au contact de la peau.
- *Sécurité des données* · un appareil qui transmet la position doit être inviolable : authentification par certificat et chiffrement de bout en bout.

== Architecture en 3 zones

- *Zone 1 · Collier (Edge)* : MCU, capteurs, modem, GPS, batterie. Collecte, tampon local, transmission chiffrée.
- *Zone 2 · Réseau & communication* : LTE-M + SIM IoT, transport MQTT sur TLS, pensé basse consommation et réseau instable.
- *Zone 3 · Backend & cloud* : ingestion, stockage, analyse (stack du site : Hetzner/Kubernetes, observabilité Grafana). Le collier s'y authentifie en mTLS.

== Composants embarqués

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("Composant", "Choix", "Rôle"),
  rows: (
    ("Microcontrôleur", "ESP32-S3 ou nRF9160", "Exécute le firmware Rust, pilote la machine à états, orchestre capteurs et modem ; clé privée en secure element."),
    ("Modem cellulaire", "LTE-M (SIM7000E / nRF9160)", "Connectivité basse consommation ; transmission de la télémétrie."),
    ("GPS / GNSS", "NEO-M8N ou GPS intégré", "Localisation ; A-GPS pour accélérer le premier fix."),
    ("Centrale inertielle", "LSM6DSOX (ST)", "Accéléromètre + gyroscope : activité, immobilité, mouvements brusques."),
    ("Température", "TMP117 (TI)", "Température corporelle (précision ±0,1°C)."),
    ("Fréquence cardiaque (option)", "MAX30102 (PPG)", "Rythme cardiaque par photopléthysmographie."),
    ("Mémoire flash", "128 Mo (SPI)", "Stockage local en attente de transmission."),
    ("Batterie & PMU", "Li-Po 2000 mAh + fuel gauge", "Alimentation autonome, gestion de charge, niveau précis."),
  ),
)

== Capteurs : choix justifiés

- *Activité (IMU) → LSM6DSOX* : très basse consommation, fonctions intelligentes embarquées qui déchargent le MCU.
- *Température → TMP117* : précision médicale (±0,1°C), idéale pour détecter une fièvre.
- *Fréquence cardiaque → MAX30102 (PPG)* : meilleur compromis précision/consommation (~20 mW), bibliothèque mature. Le radar 60 GHz est écarté (consommation 4×, précision faible sur chien mobile, usage réel = maison fixe).

== Réseau & sécurité

*Réseau :* LTE-M plutôt que NB-IoT (garde la mobilité et une latence faible, indispensables pour suivre un animal) ; transport MQTT sur TLS (broker EMQX : pub/sub léger, QoS, offline gratuits) ; SIM IoT 1NCE ; mode dégradé store-and-forward.

*Sécurité :* PKI X.509 (Root CA → CA intermédiaire signant colliers et serveur, via step-ca) ; authentification mutuelle mTLS (un appareil non enregistré est refusé, même firmware reverse-engineeré) ; provisioning en usine (device_id + certificat, clé en secure element) ; activation par appairage BLE (QR code).

== Logique embarquée : machine à états

Le firmware Rust adapte acquisitions et transmission selon l'état de l'animal et du réseau : *BOOT* (démarrage), *PAIRING* (appairage BLE), *REST* (repos, sobre), *ACTIVE* (activité), *ESCAPE* (sortie de zone, GPS accéléré), *LIVE* (temps réel à la demande), *NO_NETWORK* (zone blanche, stockage local), *LOW_POWER* (batterie faible, services réduits).
