// Contenu IoT · le collier connecté (synthèse du document d'architecture IoT).
// Aligné sur l'architecture du site : transport MQTT (EMQX), firmware Rust embarqué,
// backend = stack du site (Hetzner + observabilité Grafana), PKI step-ca.

export const IOT_INTRO =
  "Le collier est le cœur produit : capteurs embarqués, connectivité cellulaire basse consommation et firmware Rust, pensés pour tenir sur batterie, fonctionner en zone blanche et transmettre en sécurité. Voici ce qu'on embarque et pourquoi.";

// Les défis à résoudre (problématique).
export const IOT_CHALLENGES = [
  { t: "Autonomie énergétique", d: "Un collier porté en continu ne peut pas être rechargé souvent. Cible : 7 à 15 jours. Or GPS, modem et capteurs sont énergivores, d'où une gestion fine de l'énergie (veille profonde, capteurs activés à la demande, transmission par batch)." },
  { t: "Zones blanches", d: "Le cas critique, la fugue, arrive souvent là où la couverture cellulaire est mauvaise (zones rurales, forêt). Le collier doit fonctionner en mode dégradé : stockage local puis rattrapage (store and forward) au retour du réseau." },
  { t: "Précision de localisation", d: "Le GPS dérive en ville (effet canyon) ou sous couvert, et le premier fix peut prendre plusieurs minutes. On accélère via l'A-GPS (éphémérides téléchargées par le réseau) et une fréquence d'acquisition adaptée au contexte." },
  { t: "Robustesse", d: "Le collier subit chocs, eau, écarts de température. Certification IP67 (poussière + immersion temporaire) et composants qualifiés de -20°C à +60°C, avec gestion thermique pour le contact avec la peau." },
  { t: "Sécurité des données", d: "Un appareil qui transmet la position d'un animal (donc indirectement de son propriétaire) doit être inviolable : authentification de chaque collier par certificat et chiffrement de bout en bout." },
];

// Architecture en 3 zones.
export const IOT_ZONES = [
  { z: "Zone 1 · Collier (Edge)", d: "Le hardware embarqué : MCU, capteurs, modem, GPS, batterie. Il collecte, met en tampon localement et transmet de façon chiffrée." },
  { z: "Zone 2 · Réseau & communication", d: "Connectivité cellulaire LPWAN (LTE-M) avec SIM IoT, transport MQTT sur TLS. Pensée pour la basse consommation et le réseau instable." },
  { z: "Zone 3 · Backend & cloud", d: "L'ingestion, le stockage et l'analyse côté plateforme (stack du site : Hetzner / Kubernetes, observabilité Grafana). Le collier s'y authentifie en mTLS via la gateway." },
];

// Composants embarqués retenus.
export type IotPart = { composant: string; choix: string; role: string };
export const IOT_COMPONENTS: IotPart[] = [
  { composant: "Microcontrôleur (MCU)", choix: "ESP32-S3 ou nRF9160 (SiP)", role: "Exécute le firmware Rust embarqué, pilote la machine à états, orchestre capteurs et modem. Secure element pour la clé privée (eFuse / TrustZone)." },
  { composant: "Modem cellulaire", choix: "LTE-M (SIM7000E ou nRF9160 intégré)", role: "Connectivité basse consommation au réseau cellulaire ; transmission de la télémétrie." },
  { composant: "GPS / GNSS", choix: "NEO-M8N ou GPS intégré au modem", role: "Localisation de l'animal ; A-GPS pour accélérer le premier fix." },
  { composant: "Centrale inertielle (IMU)", choix: "LSM6DSOX (ST)", role: "Accéléromètre + gyroscope : détecte l'activité, l'immobilité et les mouvements brusques (I²C)." },
  { composant: "Température", choix: "TMP117 (TI)", role: "Mesure de la température corporelle (contact indirect, I²C)." },
  { composant: "Fréquence cardiaque (option)", choix: "MAX30102 (PPG optique)", role: "Rythme cardiaque par photopléthysmographie ; feature différenciante (I²C)." },
  { composant: "Mémoire flash", choix: "128 Mo (SPI)", role: "Stockage local des données en attente de transmission (store and forward)." },
  { composant: "Batterie & PMU", choix: "Li-Po 2000 mAh + fuel gauge", role: "Alimentation autonome, gestion de charge et mesure précise du niveau." },
];

// Capteurs : choix justifiés (et alternatives écartées).
export type SensorChoice = { capteur: string; retenu: string; pourquoi: string };
export const IOT_SENSORS: SensorChoice[] = [
  { capteur: "Activité (IMU)", retenu: "LSM6DSOX", pourquoi: "Très basse consommation, fonctions intelligentes embarquées (détection de mouvement) qui déchargent le MCU. Préféré aux IMU sans machine à états interne." },
  { capteur: "Température", retenu: "TMP117", pourquoi: "Précision médicale (±0,1°C), idéale pour détecter une fièvre. Préféré aux capteurs génériques moins précis." },
  { capteur: "Fréquence cardiaque", retenu: "MAX30102 (PPG)", pourquoi: "Meilleur compromis précision/consommation (~20 mW), bibliothèque mature. Le radar 60 GHz est écarté : consommation 4×, précision faible sur chien mobile, usage réel = maison fixe." },
];

// Réseau & transport.
export const IOT_NETWORK = [
  { t: "LTE-M plutôt que NB-IoT", d: "LTE-M garde la mobilité (handover entre cellules) et une latence faible, indispensables pour suivre un animal en mouvement. NB-IoT, plus économe mais quasi statique, est écarté pour le cas fugue." },
  { t: "Transport MQTT sur TLS", d: "MQTT (broker EMQX) est le standard IoT : pub/sub léger, QoS, sessions persistantes, reconnexion et mode hors-ligne gratuits. Pensé batterie + réseau instable, cohérent avec la gateway du site." },
  { t: "SIM IoT 1NCE", d: "Forfait IoT multi-opérateurs (couverture étendue, tarif data adapté aux faibles volumes), au lieu d'une SIM grand public." },
  { t: "Mode dégradé (store and forward)", d: "Hors réseau, la télémétrie et les positions sont mises en flash puis renvoyées à la reconnexion, sans surconsommer en tentatives répétées." },
];

// Sécurité de la flotte.
export const IOT_SECURITY = [
  "PKI X.509 : autorité racine (Root CA) puis CA intermédiaire qui signe les certificats des colliers et du serveur. Sur le site, c'est step-ca.",
  "Authentification mutuelle (mTLS) : chaque collier prouve son identité par certificat, et vérifie le serveur. Un appareil non enregistré est refusé, même avec le firmware reverse-engineeré.",
  "Provisioning en usine : chaque collier reçoit un device_id et un certificat signé, la clé privée est gravée dans le secure element (eFuse / TrustZone).",
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
  { k: "7 à 15 j", v: "autonomie cible" },
  { k: "IP67", v: "poussière + immersion temporaire" },
  { k: "-20 à +60°C", v: "plage de température" },
  { k: "2000 mAh", v: "batterie Li-Po minimum" },
];
