#import "../lib.typ": dtable, keybox, brand, mut, zebra

= IoT · le collier connecté

Le collier est le cœur produit : capteurs embarqués, connectivité cellulaire basse consommation et firmware C (Zephyr RTOS), pensés pour tenir sur batterie, fonctionner en zone blanche et transmettre en sécurité.

#grid(columns: (1fr, 1fr, 1fr, 1fr), gutter: 8pt,
  ..(("10-15 j", "autonomie (nominal → éco)"), ("IP67", "poussière + immersion"), ("-20 à +60°C", "plage de température"), ("2000 mAh", "batterie Li-Po")).map(f => block(fill: zebra, radius: 4pt, inset: 9pt, width: 100%)[
    #text(fill: brand, weight: 900, size: 13pt, f.at(0))\ #text(size: 8pt, fill: mut, f.at(1))
  ])
)

== Les défis à résoudre

- *Autonomie énergétique* · 10 à 12 jours en usage nominal, jusqu'à 15 j en économie (seuil d'acceptabilité 7 j) ; GPS, modem et capteurs sont énergivores, d'où veille profonde (PSM/eDRX du modem), capteurs à la demande, transmission par batch.
- *Zones blanches* · le cas critique (fugue) arrive souvent sans couverture ; mode dégradé : stockage local puis rattrapage (store and forward).
- *Précision de localisation* · GPS qui dérive et premier fix long, accélérés par l'A-GPS et une fréquence adaptée au contexte.
- *Robustesse* · chocs, eau, température : certification IP67 et composants qualifiés -20 à +60°C, gestion thermique au contact de la peau.
- *Sécurité des données* · un appareil qui transmet la position doit être inviolable : authentification par certificat et chiffrement de bout en bout.

== Architecture en 3 zones

Du collier au backend, le système se découpe en trois zones :

#dtable(
  columns: (auto, 1fr),
  headers: ("Zone", "Rôle & frontière"),
  rows: (
    ("Zone 1 · Collier (Edge)", "Le dispositif porté : collecte des capteurs, traitement local (sortie de zone, immobilité) même sans réseau, tampon store-and-forward, gestion d'énergie, transmission chiffrée. Interfaces I²C (capteurs), SPI (flash), BLE (appairage)."),
    ("Zone 2 · Réseau & communication", "Réseau cellulaire LTE-M / NB-IoT + SIM 1NCE ; optimisation d'énergie côté réseau (PSM, eDRX) ; sécurité de transport (TLS + mTLS)."),
    ("Zone 3 · Backend & plateforme", "Ingestion, stockage et analyse côté plateforme du dossier : broker EMQX → Ingestion → Kafka → TimescaleDB, PKI step-ca, observabilité Grafana (Hetzner / Kubernetes). Le collier s'y authentifie en mTLS."),
  ),
)

== Choix du microcontrôleur : nRF9160 (SiP)

#keybox(title: "Un seul silicium, plus d'AT commands")[
  Le nRF9160 est un *SiP* qui intègre le microcontrôleur (ARM Cortex-M33) et le modem LTE-M/NB-IoT dans la même puce. Alternative écartée : un MCU plus un modem externe (ESP32-S3 + BG95, ou LilyGO T-SIM7080G), qui oblige le firmware à piloter le modem par *AT commands* (protocole textuel hérité des années 1980 : chaînes à construire, réponses fragiles à parser, timeouts empiriques, 250+ pages de documentation). Avec le nRF9160, la connectivité est gérée par la *LTE Link Control library* du nRF Connect SDK (`lte_lc_connect()`, en C sur Zephyr) : plus d'AT commands. Son *TrustZone* sert de secure element pour la clé privée.
]

== Firmware : C (C11) sur Zephyr RTOS

Le firmware est écrit en *C (C11)* sur *Zephyr RTOS*, standard de l'écosystème Nordic (nRF Connect SDK). Choix tranché après comparatif C / C++ / Rust :

- *Compatibilité native* nRF Connect SDK + Zephyr : pilotes et bibliothèques officiels (modem, capteurs I²C, MQTT, TLS) directement disponibles ; empreinte mémoire minimale et déterminisme temps réel adaptés au nRF9160.
- *Sûreté mémoire* : le C ne la garantit pas nativement (contrairement à Rust) ; elle est obtenue par *MISRA C:2012 + CERT C*, *allocation statique* (pas de `malloc` en fonctionnement normal), *analyse statique* (Clang-Tidy, Cppcheck), revues de code et tests unitaires.
- *Cohérence produit* : Rust est écarté pour l'embarqué (écosystème Nordic C-first) mais reste le langage des *services backend*. Chaque couche utilise le bon outil : *C/Zephyr* embarqué, *Rust* services, *Python* pour l'IA.

== Composants embarqués

#dtable(
  columns: (auto, auto, 1fr),
  headers: ("Composant", "Choix", "Rôle"),
  rows: (
    ("MCU + modem (SiP)", "nRF9160-SICA", "Exécute le firmware C/Zephyr et la machine à états ; modem LTE-M/NB-IoT intégré ; TrustZone = secure element."),
    ("GNSS dédié", "u-blox ZOE-M8Q (ou SAM-M10)", "Multi-constellation (GPS/GLONASS/Galileo/BeiDou), plus précis que le GNSS intégré ; NEO-M8N en prototype ; A-GPS (AssistNow) pour un premier fix en 3-5 s."),
    ("Centrale inertielle", "LSM6DSOX (ST)", "Accéléromètre + gyroscope avec Machine Learning Core embarqué : activité, immobilité, chocs."),
    ("Température", "TMP117 (TI)", "Température corporelle, précision ±0,1°C."),
    ("Fréquence cardiaque", "MAX30102 (réf.) · 4 candidats R&D", "PPG optique, option de référence MAX30102 ; 3 alternatives testées, Go/No-Go fin mois 6 ; indicateur de tendance, non médical."),
    ("Mémoire flash", "W25Q128 (16 Mo)", "Tampon local store-and-forward (~72 h)."),
    ("PMU + régulateur", "BQ25895 + TLV62585", "Charge Li-Po, fuel gauge I²C, régulation 3,3 V, protections."),
    ("Antennes", "Taoglas FPC (LTE-M + GNSS)", "Antennes flexibles pour la cellulaire et le GNSS."),
    ("Batterie", "Li-Po 2000 mAh (103450)", "Alimentation autonome, autonomie 10 à 15 jours."),
  ),
)

== Capteurs : choix justifiés

- *Activité (IMU) → LSM6DSOX* : très basse consommation, Machine Learning Core embarqué (détection de mouvement) qui décharge le MCU.
- *Température → TMP117* : précision médicale (±0,1°C), idéale pour détecter une fièvre.
- *Fréquence cardiaque → axe R&D (décision Go/No-Go fin du mois 6)* : quatre candidats testés sur chien, avec le *MAX30102* (PPG rouge/IR) comme option de référence, puis APDS-9960 (PPG vert 530 nm), MAXM86161 (PPG 3 longueurs d'onde) et un capteur piézocéramique (vibration mécanique). Le PPG optique est calibré pour l'humain : sa fiabilité sur un animal à fourrure et en mouvement doit être validée. En production, une seule option est retenue, ou un emplacement non peuplé (DNP) si No-Go. Les données restent des indicateurs de tendance, non médicaux.

== Réseau & sécurité

*Réseau :* *LTE-M (Cat-M1)* retenu plutôt que NB-IoT : il garde la *mobilité* (handover, jusqu'à ~160 km/h), une *latence faible* (10-15 ms contre 1,6-10 s en NB-IoT) et un débit montant suffisant pour les lots GPS, indispensables pour suivre un animal en fugue ; NB-IoT reste un *repli* de couverture. Antennes flexibles Taoglas FPC (LTE-M + GNSS, séparées d'au moins 20 mm) ; SIM IoT *1NCE* (500 Mo / 10 ans, roaming 165 pays ; ~100 Mo/an réels). Transport *MQTT sur TLS* vers le broker *EMQX* (pub/sub léger, QoS, sessions offline) ; le MVP peut démarrer par des *lots HTTPS* avant de basculer sur MQTT. Mode dégradé *store-and-forward* en zone blanche.

*Sécurité :* *TLS 1.2+* (1.3 préféré : AES-256-GCM ou ChaCha20, échange ECDHE), avec *reprise de session* pour économiser la batterie. *PKI X.509* via *step-ca* (Root CA → CA intermédiaire signant colliers et serveur) ; *mTLS* : un appareil non enregistré est refusé, même firmware reverse-engineeré. Certificat collier provisionné en usine (clé dans le *TrustZone*, validité ~2 ans, rotation OTA) ; certificat serveur court (90 j). Contrôle d'accès *RBAC* : propriétaire (accès complet), proche (lecture), vétérinaire (santé, post-MVP). Activation par appairage BLE (QR code).

== Flux de données

- *Montant (collier → plateforme)*, ~80-90 % du trafic : *lot périodique* (5-15 min, points GPS + capteurs, ~2 Ko), *alerte immédiate* (< 30 s, sortie de zone), *live tracking* (5-10 s, à la demande). En cas d'échec, *retry avec back-off* (1 → 5 → 15 → 30 → 60 min) ; les données restent en ring buffer flash *jusqu'à l'ACK* de la plateforme (aucune perte).
- *Descendant (plateforme → collier)* : activation du live (`live_until`), changement de configuration (intervalles, zones de sécurité), mise à jour OTA (post-MVP). MVP par polling du device, push MQTT ensuite.

== Logique embarquée : machine à états

Le firmware adapte acquisitions et transmission selon l'état de l'animal et du réseau : *BOOT* (démarrage, contrôle batterie/config), *PAIRING* (appairage BLE), *REST* (repos : accéléromètre wake-on-motion, GNSS off, modem en PSM), *ACTIVE* (activité : fix GPS 5-15 min, batch 5-15 min), *ESCAPE* (sortie de zone : fix accéléré 5-10 s puis dégradé, envoi immédiat ; passe en *LOW_POWER_ESCAPE* si la batterie faiblit), *LIVE* (temps réel à la demande, arrêt automatique à expiration), *NO_NETWORK* (zone blanche : log local, back-off, ring buffer 24-72 h), *LOW_POWER* (batterie faible, services réduits).

== Du prototype au produit

*Phase de développement :* kit *nRF9160-DK* + shields/breakouts I²C sans soudure (Qwiic / STEMMA QT), pour valider firmware et capteurs, ≈ 228 € (≈ 332 € avec la R&D fréquence cardiaque à 4 candidats).

*Produit final :* PCB 4 couches custom, composants nus (SMD/CMS) assemblés chez JLCPCB, boîtier PC/ABS injecté IP67 (70×46×20 mm), antennes FPC. ≈ 131 € en prototype unitaire, ≈ 66 €/u en série de 1000. Détail chiffré en partie Modèle économique & budget.
