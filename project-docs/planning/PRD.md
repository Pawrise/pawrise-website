---
stepsCompleted: ["requirements-inventory"]
inputDocuments:
  - "_bmad-output/planning-artifacts/product-brief.md"
  - "Confluence PC: Pawrise Care – High-Level Functions"
project: "Pawrise Care"
language: "French"
generatedBy: "BMAD bmm — PRD (assisté Claude Code, à partir du contexte Confluence)"
---

# Pawrise Care — Product Requirements Document (PRD)

## 1. Contexte & vision

Voir `product-brief.md`. Pawrise Care = collier connecté + plateforme IA pour le suivi santé/bien-être animal. Produit d'**orientation et de pré-consultation**, jamais de diagnostic. Public : propriétaires d'animaux et vétérinaires partenaires.

## 2. Objectifs produit

1. Donner au propriétaire une vision **continue, lisible et rassurante** de l'état de son animal.
2. Fournir au vétérinaire un **historique structuré et contextualisé** accélérant la consultation.
3. Détecter et remonter les **signaux faibles** sans jamais poser de diagnostic.
4. Garantir **fiabilité du dispositif**, **sécurité** et **conformité RGPD**.

## 3. Personas

- **P1 — Propriétaire** : utilise l'app mobile au quotidien.
- **P2 — Vétérinaire partenaire** : utilise le Vet Portal en consultation.
- **P3 — Administrateur / Système** : gère comptes, matériel, conformité.

## 4. Exigences fonctionnelles (Functional Requirements)

### Collier & collecte (Hardware / Firmware)
- **FR1** — Le collier mesure et enregistre la position GPS de l'animal à intervalles réguliers.
- **FR2** — Le collier détecte l'activité, l'immobilité et les mouvements brusques.
- **FR3** — Le collier mesure la température et (si dispo) le rythme cardiaque.
- **FR4** — Le système embarqué collecte les données capteurs en temps réel et optimise la consommation énergétique.
- **FR5** — Le collier conserve localement les données en cas de perte de connexion et les resynchronise au retour du signal.
- **FR6** — Le collier transmet les données vers le backend en **MQTT over TLS** (réseau cellulaire ; BLE pour la synchro de proximité avec l'app), avec **authentification par certificat client (mTLS, PKI step-ca)**, intégrité et horodatage. *Le point d'entrée backend est un **broker MQTT** (EMQX/Mosquitto), pas une gateway maison.*
- **FR7** — Le système informe l'utilisateur du niveau de batterie restant du collier.

### Backend & plateforme de données
- **FR8** — Le backend ingère les données du collier via un **broker MQTT auquel le service d'ingestion s'abonne directement** ; il les normalise, filtre et déduplique, écrit les séries temporelles, puis **publie les évènements normalisés sur Kafka** (consommés en temps réel pour la détection proactive).
- **FR9** — Le backend stocke les données capteurs sous forme de séries temporelles avec historique long terme.
- **FR10** — Le backend génère des données agrégées pour simplifier les calculs et l'affichage.
- **FR11** — Le backend expose des API distinctes pour l'app propriétaire et pour le Vet Portal, avec contrôle d'accès adapté.
- **FR12** — Le backend gère les comptes utilisateurs, les animaux associés et les règles d'analyse configurables.

### Moteur IA (Pawrise Care Engine)
- **FR13** — Le moteur prétraite les données (nettoyage du bruit, valeurs aberrantes, fenêtrage temporel).
- **FR14** — Le moteur établit un modèle de comportement normal propre à chaque animal et détecte les anomalies d'activité/sommeil.
- **FR15** — Le moteur applique des règles vétérinaires validées (expert system) contextualisées par race, âge et historique.
- **FR16** — Le moteur fournit un chat IA (LLM + RAG) répondant aux questions à partir des données de l'animal et d'une base de connaissances vétérinaire.
- **FR17** — Le moteur escalade automatiquement vers un vétérinaire partenaire en cas de doute, et n'émet jamais de diagnostic.
- **FR18** — Le moteur génère un **PDF normalisé/standardisé** structuré en chronologie médicale, lisible par n'importe quel vétérinaire **sans connaître l'app Pawrise ni aucun logiciel métier** (voir FR35).

### App mobile — Propriétaire
- **FR19** — L'app affiche un écran bien-être (score/synthèse d'activité, sommeil, constantes) lisible.
- **FR20** — L'app affiche la position GPS en temps réel et l'historique des déplacements.
- **FR21** — L'app permet de définir des zones de sécurité et alerte si l'animal en sort.
- **FR22** — L'app envoie des notifications/alertes (signaux faibles, comportement anormal, rappels de soins).
- **FR23** — L'app donne accès au chat IA et à la mise en relation avec un vétérinaire partenaire.

### Vet Portal — Vétérinaire
- **FR24** — Le Vet Portal présente une vue patient regroupant les informations médicales essentielles de l'animal.
- **FR25** — Le Vet Portal affiche un **historique chronologique structuré** des données capteurs et des tendances (activité, sommeil, constantes).
- **FR26** — Le Vet Portal présente un **résumé contextualisé non-diagnostique** et permet d'accéder aux données brutes.
- **FR27** — Le vétérinaire peut consulter les alertes générées, compléter un rapport automatique et ajouter des notes professionnelles au dossier.
- **FR28** — Le Vet Portal permet l'export structuré (PDF) et le suivi de l'évolution dans le temps.

### Cycle de vie & business
- **FR29** — L'utilisateur crée un compte de manière simple et sécurisée (onboarding) et saisit le profil de l'animal.
- **FR30** — L'utilisateur appaire son collier à l'application via un parcours guidé (provisioning/activation sécurisée).
- **FR31** — Le système gère les abonnements, paiements et la consultation des factures/statut de façon sécurisée.
- **FR32** — Le système offre un canal de support client et une FAQ.
- **FR33** — Le système gère le remplacement ou la désactivation d'un collier.
- **FR34** — Le système gère l'onboarding des vétérinaires partenaires et l'attribution des demandes selon disponibilité.

### Téléconsultation, handoff & triage
- **FR35** — Le système génère un **PDF normalisé/standardisé** du contexte de l'animal (profil + chronologie + anomalies), lisible par tout vétérinaire indépendamment de son logiciel métier. *(MVP)*
- **FR36** — Lors d'une escalade, le chatbot IA réalise un **handoff** vers un vétérinaire en **générant automatiquement** ce PDF normalisé et en transmettant le contexte, afin que le vétérinaire n'ait pas à lire l'historique de l'app. *(MVP)*
- **FR37** — Le système fournit une **communication sécurisée in-app (mobile + web)** par **chat** entre propriétaire et vétérinaire. *(MVP)*
- **FR38** — Le système fournit un **système d'appel/visio sécurisé complet** entre propriétaire et vétérinaire. *(Post-MVP)*
- **FR39** — Le vétérinaire d'orientation peut **proposer une venue en centre** (le sien, ou une orientation vers le vétérinaire traitant / les urgences) lorsqu'un **examen physique** est requis. *(Proposition = MVP ; prise de RDV/booking intégrée = Post-MVP)*

### Modèle opératoire & rémunération vétérinaire
- **FR40** — L'escalade route vers un **vétérinaire de garde partenaire sous contrat** qui réalise une **orientation/triage non-diagnostique** (« un vrai vétérinaire en téléconsultation »), conformément à l'exigence d'examen clinique préalable ; le **diagnostic** relève du vétérinaire traitant (examen physique). *(MVP)*
- **FR41** — Les vétérinaires partenaires sont rémunérés via un **pool alimenté par une part fixe de chaque abonnement** (modèle « pool » type Spotify), **distribué au prorata de l'activité, pondéré par la réactivité et la qualité** ; le coût vétérinaire est ainsi **plafonné à un % du revenu** et **aucun utilisateur ne coûte plus que sa part d'abonnement**. *(MVP côté règle de coût ; outillage de distribution itératif)*
- **FR42** — Le système applique des **garde-fous anti-abus** : filtrage par l'IA avant escalade + **quota d'orientation (fair-use)** par utilisateur/période, au-delà duquel l'accès passe en file basse priorité ou en add-on. *(MVP)*
- **FR43** — Le vétérinaire d'orientation peut **router le dossier (PDF normalisé) vers le vétérinaire traitant** de l'animal pour un acte diagnostique. *(MVP)*

## 5. Exigences non-fonctionnelles (Non-Functional Requirements)

- **NFR1 — Fiabilité** : disponibilité continue du système embarqué et des services backend ; reprise après perte de signal sans perte de données.
- **NFR2 — Autonomie & énergie** : autonomie maximale du collier ; recharge simple ; adaptation de la consommation à l'usage/environnement.
- **NFR3 — Sécurité** : authentification du collier, chiffrement en transit et au repos, intégrité et horodatage des données.
- **NFR4 — Confidentialité / conformité** : respect du RGPD ; consentement ; traçabilité des alertes et analyses.
- **NFR5 — Éthique IA** : aucun diagnostic ni décision médicale automatisés ; explications lisibles ; incitation systématique à consulter en cas de doute.
- **NFR6 — Performance** : APIs performantes ; transmission fiable même en mode basse consommation ; réessais automatiques.
- **NFR7 — Scalabilité & Ops** : hébergement scalable ; environnements dev/test/prod ; monitoring, traçage des erreurs ; CI/CD.
- **NFR8 — Robustesse physique** : boîtier résistant eau/poussière/chocs, confort animal (poids, forme, matériau), usage extérieur prolongé.
- **NFR9 — Utilisabilité** : affichages simples et compréhensibles ; séparation stricte App propriétaire / Vet Portal.
- **NFR10 — Maintenabilité** : architecture monolith-first évoluant vers macroservices, frontières découvertes avant découpage.

## 6. Décisions produit actées (validation terrain)

- Exclusion d'un « score global de santé » côté Vet Portal (risque d'interprétation).
- Priorisation de la **chronologie** des symptômes/données.
- **Séparation stricte** App propriétaire / Vet Portal.
- Contextualisation systématique des données (race, âge, historique).

## 7. Hors périmètre (MVP)

Scoring santé multi-métriques avancé, intégration logiciels métiers vétérinaires, marketplace vétérinaire, fonctionnalités sociales.

**Téléconsultation — MVP vs post-MVP :** le MVP couvre handoff IA + **téléconsultation d'orientation par chat sécurisé** (vétérinaire de garde, non-diagnostique) + **PDF normalisé** + **proposition** de venue en centre + **pool de rémunération** + garde-fous anti-abus (FR35–FR37, FR39–FR43). Restent **post-MVP** : **système d'appel/visio sécurisé complet** (FR38) et **prise de RDV/booking intégrée** en centre vétérinaire.
