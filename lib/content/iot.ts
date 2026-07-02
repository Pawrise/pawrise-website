// Contenu IoT · le collier connecté (synthèse du document d'architecture IoT + BOM).
// Aligné sur l'architecture du site : SiP nRF9160 (MCU + modem, sans AT commands),
// transport MQTT (EMQX), firmware C/Zephyr embarqué, backend = stack du site
// (Hetzner + observabilité Grafana), PKI step-ca.

export const IOT_INTRO =
  "Le collier est le cœur produit : capteurs embarqués, connectivité cellulaire basse consommation et firmware C (Zephyr RTOS) sur un SiP nRF9160 (MCU + modem intégrés, sans AT commands), pensés pour tenir sur batterie, fonctionner en zone blanche et transmettre en sécurité. Voici ce qu'on embarque et pourquoi.";

// Les défis à résoudre (problématique).
export const IOT_CHALLENGES = [
  { t: "Autonomie énergétique", d: "Un collier porté en continu ne peut pas être rechargé souvent. Cible : 12 à 15 jours. Or GPS, modem et capteurs sont énergivores, d'où une gestion fine de l'énergie (veille profonde, capteurs activés à la demande, transmission par batch)." },
  { t: "Zones blanches", d: "Le cas critique, la fugue, arrive souvent là où la couverture cellulaire est mauvaise (zones rurales, forêt). Le collier doit fonctionner en mode dégradé : stockage local puis rattrapage (store and forward) au retour du réseau." },
  { t: "Précision de localisation", d: "Le GPS dérive en ville (effet canyon) ou sous couvert, et le premier fix peut prendre plusieurs minutes. On accélère via l'A-GPS (éphémérides téléchargées par le réseau) et une fréquence d'acquisition adaptée au contexte." },
  { t: "Robustesse", d: "Le collier subit chocs, eau, écarts de température. Certification IP67 (poussière + immersion temporaire) et composants qualifiés de -20°C à +60°C, avec gestion thermique pour le contact avec la peau." },
  { t: "Sécurité des données", d: "Un appareil qui transmet la position d'un animal (donc indirectement de son propriétaire) doit être inviolable : authentification de chaque collier par certificat et chiffrement de bout en bout." },
];

// Choix du microcontrôleur : nRF9160 (SiP) et suppression des AT commands.
export const IOT_MCU = {
  titre: "Choix du MCU : nRF9160 (SiP), plus d'AT commands",
  d: "Le nRF9160 est un SiP qui intègre le microcontrôleur (ARM Cortex-M33) et le modem LTE-M/NB-IoT dans la même puce. L'alternative (MCU + modem externe : ESP32-S3 + BG95, ou LilyGO T-SIM7080G) oblige le firmware à piloter le modem par AT commands (protocole textuel des années 1980 : chaînes à construire, réponses fragiles à parser, timeouts empiriques, 250+ pages de doc). Avec le nRF9160, la connectivité passe par la LTE Link Control library du nRF Connect SDK (lte_lc_connect(), en C sur Zephyr) : plus d'AT commands. Son TrustZone sert de secure element pour la clé privée.",
};

// Architecture en 3 zones.
export const IOT_ZONES = [
  { z: "Zone 1 · Collier (Edge)", d: "Le hardware embarqué : SiP nRF9160 (MCU + modem), GNSS dédié, capteurs, batterie. Il collecte, met en tampon localement et transmet de façon chiffrée." },
  { z: "Zone 2 · Réseau & communication", d: "Connectivité cellulaire LPWAN (LTE-M, NB-IoT en repli) avec SIM IoT, transport MQTT sur TLS. Pensée pour la basse consommation et le réseau instable." },
  { z: "Zone 3 · Backend & cloud", d: "L'ingestion, le stockage et l'analyse côté plateforme (stack du site : Hetzner / Kubernetes, observabilité Grafana). Le collier s'y authentifie en mTLS via la gateway." },
];

// Composants embarqués retenus.
export type IotPart = { composant: string; choix: string; role: string };
export const IOT_COMPONENTS: IotPart[] = [
  { composant: "MCU + modem (SiP)", choix: "nRF9160-SICA", role: "Exécute le firmware C/Zephyr et la machine à états. Le SiP intègre le modem LTE-M/NB-IoT : connectivité via la LTE Link Control library du nRF Connect SDK, sans AT commands. TrustZone = secure element pour la clé privée." },
  { composant: "GNSS dédié", choix: "u-blox ZOE-M8Q", role: "Localisation multi-constellation (GPS/GLONASS/Galileo/BeiDou), plus précise que le GNSS intégré seul ; A-GPS pour accélérer le premier fix." },
  { composant: "Centrale inertielle (IMU)", choix: "LSM6DSOX (ST)", role: "Accéléromètre + gyroscope avec Machine Learning Core embarqué : activité, immobilité, chocs (I²C)." },
  { composant: "Température", choix: "TMP117 (TI)", role: "Mesure de la température corporelle, précision ±0,1°C (I²C)." },
  { composant: "Fréquence cardiaque", choix: "1 option parmi 4 (axe R&D)", role: "Rythme cardiaque (PPG optique ou piézo) ; feature différenciante conditionnée à un Go/No-Go. Indicateur de tendance, non médical." },
  { composant: "Mémoire flash", choix: "W25Q128 (16 Mo, SPI)", role: "Tampon local des données en attente de transmission (store and forward, ~72 h)." },
  { composant: "PMU + régulateur", choix: "BQ25895 + TLV62585", role: "Charge Li-Po, fuel gauge I²C (niveau précis), régulation 3,3 V et protections." },
  { composant: "Antennes", choix: "Taoglas FPC (LTE-M + GNSS)", role: "Antennes flexibles dédiées à la cellulaire et au GNSS." },
  { composant: "Batterie", choix: "Li-Po 2000 mAh (103450)", role: "Alimentation autonome ; autonomie cible 12 à 15 jours." },
];

// Capteurs : choix justifiés (et alternatives écartées).
export type SensorChoice = { capteur: string; retenu: string; pourquoi: string };
export const IOT_SENSORS: SensorChoice[] = [
  { capteur: "Activité (IMU)", retenu: "LSM6DSOX", pourquoi: "Très basse consommation, Machine Learning Core embarqué (détection de mouvement) qui décharge le MCU. Préféré aux IMU sans logique interne." },
  { capteur: "Température", retenu: "TMP117", pourquoi: "Précision médicale (±0,1°C), idéale pour détecter une fièvre. Préféré aux capteurs génériques moins précis." },
  { capteur: "Fréquence cardiaque", retenu: "Axe R&D · 4 candidats", pourquoi: "MAX30102 (PPG rouge/IR), APDS-9960 (PPG vert 530 nm), MAXM86161 (PPG 3 longueurs d'onde) et un capteur piézocéramique sont testés sur chien ; décision Go/No-Go fin du mois 6. Le PPG optique étant calibré pour l'humain, sa fiabilité sur un animal à fourrure et en mouvement doit être validée. Donnée de tendance, non médicale. Le radar 60 GHz est écarté (consommation, précision faible sur chien mobile)." },
];

// Réseau & transport.
export const IOT_NETWORK = [
  { t: "LTE-M plutôt que NB-IoT", d: "LTE-M garde la mobilité (handover entre cellules) et une latence faible, indispensables pour suivre un animal en mouvement. NB-IoT, plus économe mais quasi statique, est gardé en repli." },
  { t: "Antennes flexibles Taoglas (FPC)", d: "Deux antennes FPC dédiées, une LTE-M et une GNSS, intégrables dans le boîtier compact du collier." },
  { t: "Transport MQTT sur TLS", d: "MQTT (broker EMQX) est le standard IoT : pub/sub léger, QoS, sessions persistantes, reconnexion et mode hors-ligne gratuits. Pensé batterie + réseau instable, cohérent avec la gateway du site." },
  { t: "SIM IoT 1NCE", d: "Forfait IoT multi-opérateurs (500 Mo / 10 ans, roaming 165 pays), adapté aux faibles volumes, au lieu d'une SIM grand public." },
  { t: "Mode dégradé (store and forward)", d: "Hors réseau, la télémétrie et les positions sont mises en flash puis renvoyées à la reconnexion, sans surconsommer en tentatives répétées." },
];

// Sécurité de la flotte.
export const IOT_SECURITY = [
  "PKI X.509 : autorité racine (Root CA) puis CA intermédiaire qui signe les certificats des colliers et du serveur. Sur le site, c'est step-ca.",
  "Authentification mutuelle (mTLS) : chaque collier prouve son identité par certificat, et vérifie le serveur. Un appareil non enregistré est refusé, même avec le firmware reverse-engineeré.",
  "Provisioning en usine : chaque collier reçoit un device_id et un certificat signé, la clé privée est protégée dans le TrustZone du nRF9160.",
  "Activation par l'utilisateur : appairage BLE (QR code), association device_id ↔ user_id, le collier passe de l'état « provisioned » à « active ».",
];

// Machine à états du firmware.
export const IOT_STATES = [
  { s: "BOOT", d: "Démarrage, auto-test, reprise après crash." },
  { s: "PAIRING", d: "Appairage BLE avec le smartphone à la première activation." },
  { s: "REST", d: "Animal au repos : acquisitions espacées, consommation minimale." },
  { s: "ACTIVE", d: "Animal en activité : acquisitions plus fréquentes." },
  { s: "ESCAPE", d: "Sortie de zone détectée : GPS et transmission accélérés (cas fugue)." },
  { s: "LIVE", d: "Suivi temps réel à la demande du propriétaire." },
  { s: "NO_NETWORK", d: "Zone blanche : stockage local, pas de tentatives inutiles." },
  { s: "LOW_POWER", d: "Batterie faible : services réduits au strict minimum + alerte." },
];

// Contraintes physiques cibles.
export const IOT_CONSTRAINTS = [
  { k: "12 à 15 j", v: "autonomie cible" },
  { k: "IP67", v: "poussière + immersion temporaire" },
  { k: "-20 à +60°C", v: "plage de température" },
  { k: "2000 mAh", v: "batterie Li-Po" },
];
