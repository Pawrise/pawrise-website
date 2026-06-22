---
stepsCompleted: ["validate-prerequisites", "design-epics", "create-stories"]
inputDocuments:
  - "_bmad-output/planning-artifacts/PRD.md"
  - "_bmad-output/planning-artifacts/product-brief.md"
project: "Pawrise Care"
language: "French"
generatedBy: "BMAD bmm — create-epics-and-stories (assisté Claude Code, à partir du PRD)"
note: "Généré de manière autonome à la demande du PO. Les menus d'approbation interactifs BMAD ([A]/[P]/[C]) ont été court-circuités ; à valider/raffiner dans Claude Code via le skill bmad-create-epics-and-stories."
---

# Pawrise Care - Epic Breakdown

## Overview

Ce document fournit la décomposition complète en epics et stories pour **Pawrise Care**, transformant les exigences du PRD en stories implémentables, organisées par **valeur utilisateur** (et non par couche technique).

## Requirements Inventory

### Functional Requirements

FR1–FR34 — voir `PRD.md` §4. Résumé :
- **Collier & collecte (FR1–FR7)** : GPS, activité, température/rythme, collecte temps réel, buffer hors-ligne, transmission sécurisée, batterie.
- **Backend & données (FR8–FR12)** : ingestion/normalisation, séries temporelles, agrégats, APIs app/vet, gestion comptes & règles.
- **Moteur IA (FR13–FR18)** : prétraitement, modèle comportemental & anomalies, règles vétérinaires contextualisées, chat RAG, escalade non-diagnostique, rapport PDF.
- **App propriétaire (FR19–FR23)** : écran bien-être, localisation/historique, zones de sécurité, notifications, chat & mise en relation.
- **Vet Portal (FR24–FR28)** : vue patient, historique chronologique, résumé contextualisé + données brutes, alertes/rapport/notes, export & suivi.
- **Cycle de vie & business (FR29–FR34)** : onboarding compte/animal, appairage, abonnement/facturation, support, remplacement collier, onboarding vétérinaires.

### NonFunctional Requirements

NFR1 Fiabilité · NFR2 Autonomie/énergie · NFR3 Sécurité · NFR4 Confidentialité/RGPD · NFR5 Éthique IA · NFR6 Performance · NFR7 Scalabilité/Ops · NFR8 Robustesse physique · NFR9 Utilisabilité · NFR10 Maintenabilité. Détails dans `PRD.md` §5.

### Additional Requirements

- Méthodo : Scrum adapté, architecture **monolith-first → macroservices**.
- Décisions produit : pas de « score global de santé » côté vet, priorité chronologie, séparation stricte App/Vet Portal, contextualisation systématique.

### UX Design Requirements

UX-DR à produire via `bmad-ux` (Figma existant). Non bloquant pour ce découpage ; les stories d'UI référencent les écrans Figma quand disponibles.

### FR Coverage Map

- FR1 → Epic 2 (capteurs GPS)
- FR2 → Epic 2 (activité/mouvement)
- FR3 → Epic 2 (température/rythme)
- FR4 → Epic 2 (collecte temps réel + énergie)
- FR5 → Epic 2 (buffer hors-ligne & resync)
- FR6 → Epic 2 (transmission sécurisée)
- FR7 → Epic 2 (batterie) / affichage Epic 1
- FR8 → Epic 2 (ingestion/normalisation)
- FR9 → Epic 2 (stockage séries temporelles)
- FR10 → Epic 2 (agrégats)
- FR11 → Epic 3 (API app) & Epic 7 (API vet)
- FR12 → Epic 1 (comptes & règles)
- FR13 → Epic 3 (prétraitement → bien-être)
- FR14 → Epic 5 (modèle comportemental & anomalies)
- FR15 → Epic 5 (règles vétérinaires contextualisées)
- FR16 → Epic 6 (chat RAG)
- FR17 → Epic 6 (escalade non-diagnostique)
- FR18 → Epic 7 (rapport PDF)
- FR19 → Epic 3 (écran bien-être)
- FR20 → Epic 4 (localisation/historique)
- FR21 → Epic 4 (zones de sécurité)
- FR22 → Epic 5 (notifications/alertes)
- FR23 → Epic 6 (chat & mise en relation)
- FR24 → Epic 7 (vue patient)
- FR25 → Epic 7 (historique chronologique)
- FR26 → Epic 7 (résumé contextualisé + données brutes)
- FR27 → Epic 7 (alertes/rapport/notes)
- FR28 → Epic 7 (export & suivi)
- FR29 → Epic 1 (onboarding compte/animal)
- FR30 → Epic 1 (appairage)
- FR31 → Epic 8 (abonnement/facturation)
- FR32 → Epic 8 (support)
- FR33 → Epic 1 (remplacement/désactivation collier)
- FR34 → Epic 7 (onboarding vétérinaires)
- FR35 → Epic 10 (PDF normalisé) — format produit par Epic 7
- FR36 → Epic 10 (handoff IA → vet + PDF auto)
- FR37 → Epic 10 (téléconsultation d'orientation par chat sécurisé — MVP)
- FR38 → Epic 10 (appel/visio sécurisé — post-MVP)
- FR39 → Epic 10 (proposition examen en centre — MVP ; booking — post-MVP)
- FR40 → Epic 10 (véto de garde sous contrat, orientation non-diagnostique)
- FR41 → Epic 10 (pool de rémunération vété, part d'abo plafonnée) + Epic 8 (offre)
- FR42 → Epic 10 (garde-fous anti-abus / fair-use)
- FR43 → Epic 10 (routage vers le vétérinaire traitant pour diagnostic)

## Epic List

### Epic 1: Onboarding, comptes & appairage du collier
Le propriétaire crée son compte, renseigne le profil de son animal et connecte son collier de bout en bout.
**FRs covered:** FR29, FR30, FR33, FR12, FR7 (affichage batterie)

### Epic 2: Collecte, transmission & stockage fiables des données
Les données du collier (GPS, activité, constantes) sont capturées, transmises de façon sécurisée et fiable, et stockées en historique exploitable — même en cas de perte de signal.
**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR8, FR9, FR10

### Epic 3: Suivi bien-être & activité (App)
Le propriétaire visualise un état de bien-être lisible (activité, sommeil, constantes) alimenté par les données traitées.
**FRs covered:** FR19, FR13, FR11 (API app)

### Epic 4: Localisation & zones de sécurité (App)
Le propriétaire localise son animal en temps réel, consulte l'historique des déplacements et est alerté s'il quitte une zone définie.
**FRs covered:** FR20, FR21

### Epic 5: Détection d'anomalies & alertes santé
Le système établit un comportement normal par animal, détecte les écarts, applique des règles vétérinaires contextualisées et notifie le propriétaire.
**FRs covered:** FR14, FR15, FR22

### Epic 6: Assistant IA conversationnel & escalade
Le propriétaire pose des questions à un chat IA (RAG) qui explique les données sans diagnostiquer et **déclenche le handoff** vers un vétérinaire en cas de doute (relais traité par l'Epic 10).
**FRs covered:** FR16, FR17, FR23

### Epic 7: Vet Portal — dossier & rapport normalisé
Le vétérinaire partenaire accède à un historique chronologique structuré et un résumé contextualisé non-diagnostique, ajoute des notes, et le portail **produit le PDF normalisé** (format réutilisé par le handoff de l'Epic 10).
**FRs covered:** FR24, FR25, FR26, FR27, FR28, FR18, FR11 (API vet), FR34

### Epic 10: Téléconsultation d'orientation & triage vétérinaire
À partir du handoff de l'IA, le propriétaire est mis en relation avec un **vétérinaire de garde partenaire** qui fait de l'**orientation non-diagnostique** (légal sans examen préalable), peut **proposer un examen physique** ou **router vers le vétérinaire traitant** pour le diagnostic. Rémunération par **pool plafonné** (part d'abonnement), PDF normalisé comme fil conducteur, garde-fous anti-abus.
**FRs covered:** FR35, FR36, FR37, FR39, FR40, FR41, FR42, FR43, FR38 (post-MVP)

### Epic 8: Abonnement, facturation & support
Le propriétaire gère son abonnement, ses paiements/factures et accède au support.
**FRs covered:** FR31, FR32

### Epic 9: Conformité, sécurité & confidentialité (RGPD)
Le propriétaire maîtrise ses données (consentement, export, suppression) et le système garantit sécurité et traçabilité.
**FRs covered:** NFR3, NFR4, NFR5 (capacités utilisateur dérivées)

### Epic 11: Plateforme, livraison & observabilité (Ops)
Socle technique industrialisé : cluster Kubernetes en IaC, livraison GitOps (Helm + Argo CD), CI (GitHub Actions), observabilité (OTel + Prometheus/Loki/Tempo/Grafana), secrets (SOPS + age) et PKI des colliers (step-ca).
**NFRs covered:** NFR1, NFR2, NFR6, NFR7, NFR9 (socle technique & exploitation)

---

## Epic 1: Onboarding, comptes & appairage du collier

Permettre à un nouveau propriétaire de créer son compte, profiler son animal et appairer son collier, posant les fondations (identité, animal, dispositif) pour toutes les fonctionnalités suivantes.

### Story 1.1: Création de compte sécurisée

As a propriétaire d'animal,
I want créer un compte avec email et mot de passe,
So that je peux accéder à l'application en toute sécurité.

**Acceptance Criteria:**

**Given** un visiteur sur l'écran d'inscription
**When** il saisit un email valide et un mot de passe respectant la politique de sécurité
**Then** un compte est créé, un email de vérification est envoyé
**And** un mot de passe faible ou un email déjà utilisé déclenche un message d'erreur explicite sans créer de compte.

### Story 1.2: Connexion et réinitialisation du mot de passe

As a propriétaire,
I want me connecter et réinitialiser mon mot de passe,
So that je récupère l'accès à mon compte en cas d'oubli.

**Acceptance Criteria:**

**Given** un compte vérifié existant
**When** l'utilisateur saisit des identifiants corrects
**Then** il est authentifié et une session sécurisée est ouverte
**And** une demande de réinitialisation envoie un lien à durée de vie limitée, et 5 échecs consécutifs verrouillent temporairement la connexion.

### Story 1.3: Création du profil animal

As a propriétaire,
I want renseigner le profil de mon animal (espèce, race, âge, poids, sexe),
So that les analyses et recommandations soient contextualisées.

**Acceptance Criteria:**

**Given** un propriétaire connecté sans animal enregistré
**When** il complète le formulaire de profil animal
**Then** l'animal est créé et associé à son compte
**And** les champs obligatoires manquants bloquent l'enregistrement avec indication claire, et un compte peut gérer plusieurs animaux.

### Story 1.4: Appairage guidé du collier

As a propriétaire,
I want appairer mon collier à l'application via un parcours guidé,
So that mon animal commence à être suivi.

**Acceptance Criteria:**

**Given** un propriétaire avec un profil animal et un collier à proximité
**When** il suit le parcours d'appairage (scan/identifiant + activation sécurisée)
**Then** le collier est lié à l'animal et confirme la connexion (état « connecté »)
**And** un collier déjà appairé à un autre compte ou hors de portée affiche une erreur actionnable.

### Story 1.5: État et niveau de batterie du collier

As a propriétaire,
I want voir l'état de connexion et le niveau de batterie de mon collier,
So that je sache si le suivi est actif et quand recharger.

**Acceptance Criteria:**

**Given** un collier appairé
**When** le propriétaire ouvre l'écran du dispositif
**Then** l'état (connecté/déconnecté), le pourcentage de batterie et la dernière synchronisation sont affichés
**And** un niveau de batterie sous un seuil déclenche une notification de recharge.

### Story 1.6: Remplacement ou désactivation d'un collier

As a propriétaire,
I want remplacer ou désactiver le collier de mon animal,
So that je gère la perte, la panne ou la fin d'usage du dispositif.

**Acceptance Criteria:**

**Given** un animal avec un collier appairé
**When** le propriétaire lance le remplacement ou la désactivation
**Then** l'ancien collier est dissocié, l'historique de l'animal est conservé et le nouveau collier peut être appairé
**And** un collier désactivé ne transmet plus de données et son statut est journalisé.

---

### Story 1.7: Notifications transactionnelles (email/SMS)
**En tant que** propriétaire, je veux recevoir les emails/SMS importants (vérification, réinitialisation, alertes santé), afin de activer mon compte et être prévenu à temps.

**Given** un évènement transactionnel (inscription, reset, alerte)
**When** le backend le déclenche
**Then** un email/SMS est envoyé via le provider et son statut de délivrabilité est suivi
**And** un échec d'envoi est retenté puis tracé.

## Epic 2: Collecte, transmission & stockage fiables des données

Garantir que les mesures du collier sont captées, transmises de façon sécurisée et fiable, puis stockées en historique exploitable — fondation de données de tout le produit.

### Story 2.1: Acquisition des mesures capteurs

As a propriétaire,
I want que mon collier mesure régulièrement position, activité et constantes,
So that le suivi de mon animal repose sur des données fiables.

**Acceptance Criteria:**

**Given** un collier appairé et actif
**When** le firmware exécute son cycle de mesure
**Then** GPS (FR1), activité/immobilité/mouvements brusques (FR2) et température/rythme (FR3) sont échantillonnés à intervalles configurés et horodatés
**And** un capteur défaillant est signalé sans interrompre la collecte des autres mesures.

### Story 2.2: Gestion énergétique adaptative

As a propriétaire,
I want que le collier adapte sa consommation,
So that l'autonomie soit maximale en usage réel.

**Acceptance Criteria:**

**Given** un collier en fonctionnement
**When** l'animal est immobile ou hors zone d'intérêt prolongée
**Then** la fréquence d'échantillonnage et de transmission est réduite selon une politique d'énergie (FR4, NFR2)
**And** un évènement significatif (mouvement brusque) réactive un échantillonnage haute fréquence.

### Story 2.3: Buffer hors-ligne et resynchronisation

As a propriétaire,
I want que les données soient conservées sans perte en cas de coupure réseau,
So that aucun trou n'apparaisse dans l'historique de mon animal.

**Acceptance Criteria:**

**Given** un collier qui perd la connexion BLE/cellulaire
**When** des mesures sont produites pendant la coupure
**Then** elles sont stockées localement puis resynchronisées dans l'ordre au retour du signal (FR5, NFR1)
**And** en cas de buffer plein, la politique de rétention documentée s'applique et l'évènement est journalisé.

### Story 2.4: Transmission sécurisée et intègre

As a propriétaire,
I want que les données de mon animal soient transmises de façon authentifiée et intègre,
So that elles ne puissent être ni usurpées ni altérées.

**Acceptance Criteria:**

**Given** un collier transmettant vers le backend
**When** un lot de mesures est envoyé
**Then** le collier est authentifié, le message est chiffré, horodaté et son intégrité vérifiée (FR6, NFR3)
**And** un message dont l'intégrité ou l'authentification échoue est rejeté et un réessai automatique est déclenché (NFR6).

### Story 2.5: Ingestion et normalisation backend

As a système,
I want ingérer, normaliser, filtrer et dédupliquer les données reçues,
So that les données stockées soient propres et cohérentes.

**Acceptance Criteria:**

**Given** des lots de mesures reçus par l'API d'ingestion
**When** le backend les traite
**Then** les doublons, retards et incohérences sont gérés et les données normalisées (FR8)
**And** les données rejetées sont journalisées avec leur cause pour observabilité.

### Story 2.6: Stockage en séries temporelles et agrégats

As a système,
I want stocker les mesures en séries temporelles avec agrégats,
So that l'historique long terme et les affichages soient performants.

**Acceptance Criteria:**

**Given** des données normalisées
**When** elles sont persistées
**Then** elles sont enregistrées en séries temporelles avec historique long terme (FR9) et des agrégats (jour/semaine) sont générés (FR10)
**And** une requête d'historique sur une plage donnée répond dans les budgets de performance définis (NFR6).

---

## Epic 3: Suivi bien-être & activité (App)

Offrir au propriétaire une vue synthétique et lisible de l'état de son animal, alimentée par les données traitées.

### Story 3.1: Prétraitement des données pour l'affichage

As a système,
I want nettoyer et fenêtrer les données capteurs,
So that les indicateurs présentés soient fiables.

**Acceptance Criteria:**

**Given** des séries temporelles brutes d'un animal
**When** le moteur exécute le prétraitement
**Then** le bruit et les valeurs aberrantes sont écartés et les données regroupées en fenêtres temporelles cohérentes (FR13)
**And** une fenêtre avec trop de données manquantes est marquée « incomplète » plutôt que calculée à tort.

### Story 3.2: API de lecture pour l'app propriétaire

As a application mobile,
I want récupérer les indicateurs d'un animal via une API dédiée,
So that l'écran bien-être s'alimente de façon sécurisée.

**Acceptance Criteria:**

**Given** un propriétaire authentifié et propriétaire de l'animal
**When** l'app appelle l'API bien-être
**Then** elle reçoit activité, sommeil et constantes agrégés, limités à ses propres animaux (FR11, contrôle d'accès)
**And** une tentative d'accès à un animal non possédé est refusée (403).

### Story 3.3: Écran bien-être

As a propriétaire,
I want consulter un écran bien-être synthétique,
So that je comprenne d'un coup d'œil l'état de mon animal.

**Acceptance Criteria:**

**Given** un animal avec des données disponibles
**When** le propriétaire ouvre l'écran bien-être
**Then** activité, sommeil et constantes du jour sont présentés de façon simple et lisible (FR19, NFR9)
**And** en l'absence de données récentes, un état vide explicite est affiché plutôt qu'un écran erroné.

### Story 3.4: Tendances historiques d'activité et de sommeil

As a propriétaire,
I want visualiser l'évolution de l'activité et du sommeil sur la durée,
So that je repère les changements de rythme de mon animal.

**Acceptance Criteria:**

**Given** un animal avec un historique suffisant
**When** le propriétaire sélectionne une période (jour/semaine/mois)
**Then** des courbes de tendance d'activité et de sommeil s'affichent à partir des agrégats
**And** les périodes sans données sont visuellement distinguées.

---

## Epic 4: Localisation & zones de sécurité (App)

Permettre au propriétaire de localiser son animal et d'être alerté en cas de sortie de zone.

### Story 4.1: Position GPS en temps réel

As a propriétaire,
I want voir la position actuelle de mon animal sur une carte,
So that je sache où il se trouve.

**Acceptance Criteria:**

**Given** un collier actif transmettant le GPS
**When** le propriétaire ouvre l'écran de localisation
**Then** la dernière position connue et son horodatage sont affichés sur une carte (FR20)
**And** si la position date de plus d'un seuil défini, une indication « position non récente » est montrée.

### Story 4.2: Historique des déplacements

As a propriétaire,
I want consulter l'historique des déplacements de mon animal,
So that je comprenne ses trajets et habitudes.

**Acceptance Criteria:**

**Given** un animal avec un historique de positions
**When** le propriétaire sélectionne une période
**Then** le trajet correspondant est tracé sur la carte (FR20)
**And** une période sans donnée affiche un message explicite.

### Story 4.3: Définition de zones de sécurité

As a propriétaire,
I want définir une ou plusieurs zones de sécurité,
So that je délimite les espaces sûrs pour mon animal.

**Acceptance Criteria:**

**Given** un propriétaire sur la carte
**When** il crée une zone (centre + rayon ou polygone) et l'enregistre
**Then** la zone est persistée et associée à l'animal (FR21)
**And** une zone invalide (rayon nul/chevauchement non géré) est refusée avec explication.

### Story 4.4: Alerte de sortie de zone

As a propriétaire,
I want être alerté si mon animal sort d'une zone de sécurité,
So that je réagisse rapidement en cas de fugue.

**Acceptance Criteria:**

**Given** un animal avec au moins une zone de sécurité active
**When** une position détecte le franchissement de la limite de zone
**Then** une notification est envoyée au propriétaire avec la position et l'heure (FR21, FR22)
**And** des franchissements répétés ne génèrent pas de spam (regroupement/anti-rebond).

---

### Story 4.5: Cartographie & rendu de la carte
**En tant que** propriétaire, je veux voir mon animal et mes zones sur une carte claire, afin de comprendre sa localisation d'un coup d'œil.

**Given** une position connue
**When** j'ouvre l'écran carte
**Then** la position et les zones de sécurité s'affichent sur un fond de carte (Mapbox/OSM)
**And** la carte reste lisible avec la dernière position connue même hors-ligne.

## Epic 5: Détection d'anomalies & alertes santé

Établir un comportement normal par animal, détecter les écarts, appliquer des règles vétérinaires contextualisées et notifier le propriétaire — sans diagnostiquer.

### Story 5.1: Modèle de comportement normal par animal

As a système,
I want établir une baseline de comportement propre à chaque animal,
So that les anomalies soient détectées par rapport à sa propre normalité.

**Acceptance Criteria:**

**Given** un historique suffisant pour un animal
**When** le moteur calcule la baseline d'activité/sommeil
**Then** un profil de comportement normal est stocké et mis à jour dans le temps (FR14)
**And** tant que l'historique est insuffisant, l'animal est marqué « apprentissage en cours » et aucune anomalie n'est levée à tort.

### Story 5.2: Détection d'anomalies d'activité et de sommeil

As a propriétaire,
I want que le système détecte les écarts de comportement de mon animal,
So that je sois informé d'un changement potentiellement important.

**Acceptance Criteria:**

**Given** un animal avec une baseline établie
**When** les mesures s'écartent significativement de la normale (inactivité prolongée, agitation, troubles du sommeil)
**Then** une anomalie est enregistrée avec son contexte et son niveau (FR14)
**And** une anomalie isolée non confirmée n'escalade pas immédiatement (seuil/persistance).

### Story 5.3: Règles vétérinaires contextualisées

As a système,
I want appliquer des règles vétérinaires validées contextualisées par race/âge/historique,
So that les alertes soient pertinentes et non génériques.

**Acceptance Criteria:**

**Given** une anomalie détectée et le profil de l'animal
**When** le moteur applique l'expert system
**Then** la pertinence est contextualisée par race, âge et historique (FR15) et l'écart est qualifié (vigilance/action)
**And** aucune sortie n'est formulée comme un diagnostic (NFR5).

### Story 5.4: Notifications et alertes au propriétaire

As a propriétaire,
I want recevoir des notifications en cas de signal faible ou comportement anormal,
So that je puisse agir ou consulter un vétérinaire.

**Acceptance Criteria:**

**Given** une anomalie qualifiée nécessitant l'attention du propriétaire
**When** le système émet l'alerte
**Then** une notification claire et non-diagnostique est envoyée, avec invitation à consulter en cas de doute (FR22, NFR5)
**And** les préférences de notification du propriétaire (canaux, silence) sont respectées.

### Story 5.5: Rappels de soins

As a propriétaire,
I want recevoir des rappels de soins réguliers (vaccins, traitements),
So that je n'oublie pas les échéances de santé de mon animal.

**Acceptance Criteria:**

**Given** un animal avec des échéances de soins configurées
**When** une échéance approche
**Then** un rappel est envoyé au propriétaire (FR22)
**And** un rappel traité (fait/reporté) met à jour l'échéance et n'est plus répété.

---

## Epic 6: Assistant IA conversationnel & escalade

Fournir au propriétaire un chat IA (RAG) qui explique les données sans diagnostiquer et l'oriente/escalade vers un vétérinaire en cas de doute.

### Story 6.1: Chat IA contextualisé (RAG)

As a propriétaire,
I want poser des questions sur l'état de mon animal à un assistant IA,
So that j'obtienne des explications compréhensibles basées sur ses données.

**Acceptance Criteria:**

**Given** un propriétaire authentifié avec un animal suivi
**When** il pose une question dans le chat
**Then** l'assistant répond à partir des données de l'animal et d'une base de connaissances vétérinaire via RAG (FR16)
**And** chaque réponse reste explicative et non-diagnostique, et cite/qualifie la nature des informations (NFR5).

### Story 6.2: Garde-fous anti-diagnostic

As a responsable produit,
I want que l'IA n'émette jamais de diagnostic médical,
So that le produit respecte ses contraintes éthiques et réglementaires.

**Acceptance Criteria:**

**Given** une question induisant une demande de diagnostic ou de traitement
**When** l'assistant formule sa réponse
**Then** il refuse de diagnostiquer, explique sa limite et recommande une consultation (FR17, NFR5)
**And** ce comportement est vérifié par un jeu de tests d'invites sensibles.

### Story 6.3: Déclenchement du handoff vers un vétérinaire

As a propriétaire,
I want que l'IA déclenche un relais vers un vétérinaire en cas de doute,
So that je bénéficie d'un avis professionnel sans repartir de zéro.

**Acceptance Criteria:**

**Given** une situation à risque détectée par l'IA ou demandée par l'utilisateur
**When** le handoff est déclenché
**Then** le relais vers le parcours de téléconsultation (Epic 10) est amorcé en passant le contexte de l'animal (FR17, FR23, FR36)
**And** si aucun vétérinaire n'est disponible, une alternative (prise de contact différée) est proposée.

### Story 6.4: Préparation d'un résumé pour consultation

As a propriétaire,
I want générer un résumé synthétique de l'état de mon animal,
So that je le partage lors d'une consultation.

**Acceptance Criteria:**

**Given** un animal avec des données et éventuelles anomalies
**When** le propriétaire demande un résumé
**Then** un récapitulatif synthétique et lisible est généré (FR17→FR18)
**And** le résumé indique explicitement qu'il ne constitue pas un diagnostic.

---

## Epic 7: Vet Portal — consultation vétérinaire augmentée

Donner au vétérinaire partenaire un accès structuré et contextualisé à l'historique de l'animal, des outils d'annotation et d'export — strictement séparé de l'app propriétaire.

### Story 7.1: Onboarding du vétérinaire partenaire

As a vétérinaire,
I want créer un compte partenaire vérifié,
So that j'accède au Vet Portal de façon sécurisée.

**Acceptance Criteria:**

**Given** un vétérinaire invité/candidat
**When** il complète l'onboarding (identité professionnelle, vérification)
**Then** un compte vétérinaire est créé avec un rôle distinct du propriétaire (FR34, contrôle d'accès)
**And** un compte non vérifié n'accède à aucune donnée patient.

### Story 7.2: Accès patient autorisé

As a vétérinaire,
I want accéder au dossier d'un animal avec l'autorisation du propriétaire,
So that je respecte la confidentialité tout en consultant les données utiles.

**Acceptance Criteria:**

**Given** un vétérinaire authentifié et un propriétaire ayant accordé l'accès
**When** le vétérinaire ouvre le dossier de l'animal
**Then** il accède aux données autorisées via l'API vet dédiée (FR11, FR24)
**And** sans consentement valide, l'accès est refusé et journalisé (NFR4).

### Story 7.3: Vue patient synthétique

As a vétérinaire,
I want une vue patient regroupant les informations médicales essentielles,
So that je gagne du temps en consultation.

**Acceptance Criteria:**

**Given** un dossier animal accessible
**When** le vétérinaire ouvre la vue patient
**Then** profil, constantes clés et tendances importantes sont regroupés (FR24)
**And** aucun « score global de santé » n'est présenté (décision produit).

### Story 7.4: Historique chronologique structuré

As a vétérinaire,
I want consulter un historique chronologique des données et évènements,
So that je reconstitue précisément l'évolution de l'animal.

**Acceptance Criteria:**

**Given** un dossier animal avec historique
**When** le vétérinaire ouvre la timeline
**Then** données capteurs, anomalies et soins sont présentés en chronologie lisible (FR25)
**And** la timeline est filtrable par période et par type d'évènement.

### Story 7.5: Résumé contextualisé et accès aux données brutes

As a vétérinaire,
I want un résumé contextualisé non-diagnostique et l'accès aux données brutes,
So that j'interprète moi-même cliniquement les informations.

**Acceptance Criteria:**

**Given** un dossier animal
**When** le vétérinaire consulte le résumé
**Then** un résumé contextualisé (race/âge/historique) explicitement non-diagnostique est affiché, avec accès aux données brutes sous-jacentes (FR26, NFR5)
**And** chaque élément de synthèse est traçable jusqu'à sa donnée source.

### Story 7.6: Alertes, rapport et notes professionnelles

As a vétérinaire,
I want consulter les alertes, compléter le rapport et ajouter des notes,
So that j'enrichisse le dossier de mon expertise.

**Acceptance Criteria:**

**Given** un dossier animal avec alertes générées
**When** le vétérinaire les consulte et annote
**Then** il peut compléter le rapport automatique et ajouter des notes horodatées attribuées à son compte (FR27)
**And** les notes sont conservées dans l'historique et visibles lors des consultations suivantes.

### Story 7.7: Rapport PDF normalisé et suivi dans le temps

As a vétérinaire,
I want générer/télécharger un rapport PDF **normalisé** et suivre l'évolution,
So that je conserve une trace exploitable, lisible quel que soit mon logiciel.

**Acceptance Criteria:**

**Given** un dossier animal consulté
**When** le vétérinaire demande le rapport
**Then** un PDF **normalisé/standardisé**, structuré en chronologie médicale, est généré dans le même format que celui du handoff (FR18, FR28, FR35)
**And** l'évolution entre deux rapports/consultations est consultable.

---

## Epic 8: Abonnement, facturation & support

Gérer la relation commerciale et l'assistance, de façon transparente et sécurisée.

### Story 8.1: Souscription d'un abonnement

As a propriétaire,
I want souscrire à un abonnement,
So that j'accède aux fonctionnalités du service.

**Acceptance Criteria:**

**Given** un propriétaire connecté sans abonnement actif
**When** il choisit une offre et paie
**Then** l'abonnement est activé et le paiement traité de façon sécurisée (FR31, NFR3)
**And** un paiement échoué n'active pas l'abonnement et affiche un message clair.

### Story 8.2: Consultation des factures et du statut

As a propriétaire,
I want consulter mes factures et le statut de mon abonnement,
So that je suive mes paiements.

**Acceptance Criteria:**

**Given** un propriétaire avec un historique de facturation
**When** il ouvre l'espace facturation
**Then** statut d'abonnement et factures téléchargeables sont affichés (FR31)
**And** seules ses propres données de facturation lui sont accessibles.

### Story 8.3: Gestion / résiliation de l'abonnement

As a propriétaire,
I want modifier ou résilier mon abonnement,
So that je garde le contrôle de mon engagement.

**Acceptance Criteria:**

**Given** un abonnement actif
**When** le propriétaire change d'offre ou résilie
**Then** le changement prend effet selon les règles définies et est confirmé (FR31)
**And** les conséquences (date de fin, accès) sont expliquées avant validation.

### Story 8.4: Support client et FAQ

As a propriétaire,
I want contacter le support et consulter une FAQ,
So that je résolve mes problèmes rapidement.

**Acceptance Criteria:**

**Given** un propriétaire connecté
**When** il ouvre le support
**Then** il accède à une FAQ et à un canal de contact (FR32)
**And** une demande envoyée reçoit un accusé de réception avec référence de suivi.

### Story 8.5: Offre d'abonnement finançant le pool vétérinaire

As a propriétaire,
I want une offre d'abonnement claire incluant l'accès à la téléconsultation d'orientation,
So that je comprenne ce qui est inclus et comment le vétérinaire est financé.

**Acceptance Criteria:**

**Given** les offres d'abonnement
**When** le propriétaire souscrit
**Then** l'offre précise l'inclusion de la **téléconsultation d'orientation** (dans la limite du fair-use) et qu'une **part de l'abonnement alimente le pool vétérinaire** (FR41, FR31)
**And** les éventuels add-ons (au-delà du fair-use, visio post-MVP) sont présentés de façon transparente avant paiement.

---

### Story 8.6: Paiement, facturation & reversement (Stripe)
**En tant que** propriétaire, je veux payer mon abonnement et recevoir mes factures de façon sécurisée, afin de accéder au service sans friction tout en finançant le pool vété.

**Given** un abonnement choisi
**When** le paiement est confirmé par Stripe (webhook signé)
**Then** l'abonnement est activé, la facture émise et la part du pool vété provisionnée
**And** un échec ou une contestation de paiement met l'abonnement dans l'état adéquat sans perte de données.

### Story 8.7: Back-office d'administration & support
**En tant que** équipe support/ops, je veux un back-office pour gérer abonnements, pool vété, modération et support, afin de exploiter le service et le réseau vétérinaire au quotidien.

**Given** un agent authentifié (RBAC admin)
**When** il accède au back-office
**Then** il peut consulter/gérer abonnements, pool vété et tickets support, avec traçabilité
**And** aucune action sensible n'est possible sans le rôle requis.

## Epic 9: Conformité, sécurité & confidentialité (RGPD)

Donner au propriétaire la maîtrise de ses données et garantir sécurité et traçabilité — exigences transverses rendues actionnables.

### Story 9.1: Consentement et gestion des autorisations

As a propriétaire,
I want gérer mon consentement et les accès accordés (ex. vétérinaire),
So that je contrôle qui voit les données de mon animal.

**Acceptance Criteria:**

**Given** un propriétaire connecté
**When** il consulte/modifie ses consentements et autorisations d'accès
**Then** les choix sont enregistrés, appliqués immédiatement et journalisés (NFR4)
**And** retirer un accès vétérinaire coupe immédiatement sa visibilité sur le dossier.

### Story 9.2: Export de mes données

As a propriétaire,
I want exporter l'ensemble des données me concernant et concernant mon animal,
So that j'exerce mon droit à la portabilité.

**Acceptance Criteria:**

**Given** un propriétaire connecté
**When** il demande un export de données
**Then** un export structuré et complet lui est fourni (NFR4)
**And** l'export est livré via un canal sécurisé et expire après un délai défini.

### Story 9.3: Suppression de compte et droit à l'oubli

As a propriétaire,
I want supprimer mon compte et mes données,
So that j'exerce mon droit à l'effacement.

**Acceptance Criteria:**

**Given** un propriétaire connecté
**When** il demande la suppression
**Then** ses données personnelles sont supprimées/anonymisées selon la politique de rétention, après confirmation (NFR4)
**And** les obligations légales de conservation (le cas échéant) sont respectées et expliquées.

### Story 9.4: Traçabilité des alertes et analyses

As a responsable conformité,
I want une traçabilité claire des alertes et analyses,
So that chaque sortie du système soit auditable.

**Acceptance Criteria:**

**Given** des alertes/analyses produites par le système
**When** un audit est réalisé
**Then** l'origine, l'horodatage et le contexte de chaque alerte/analyse sont consultables (NFR4, NFR5)
**And** aucune sortie ne peut être présentée comme un diagnostic médical.

---

### Story 9.5: Stockage & export sécurisé des fichiers (Object Storage)
**En tant que** propriétaire, je veux que mes exports RGPD et documents (PDF) soient stockés et accessibles de façon sécurisée, afin de récupérer mes données et pièces en confiance.

**Given** une demande d'export ou un PDF généré
**When** le fichier est produit
**Then** il est déposé sur le stockage objet (S3-compatible) et accessible via une URL signée à durée limitée
**And** un fichier expiré ou supprimé n'est plus accessible.

## Epic 10: Téléconsultation d'orientation & triage vétérinaire

Transformer le handoff de l'IA en mise en relation avec un **vétérinaire de garde partenaire** qui fait de l'**orientation non-diagnostique** (conforme à l'exigence d'examen préalable), avec un **PDF normalisé auto-généré** comme fil conducteur, une **rémunération par pool plafonné** (part d'abonnement, façon Spotify) et des **garde-fous anti-abus**. Le diagnostic est routé vers le **vétérinaire traitant** (examen physique).

### Story 10.1: Génération automatique du PDF normalisé au handoff

As a vétérinaire,
I want recevoir automatiquement une fiche normalisée du contexte de l'animal,
So that je n'aie pas à lire l'historique de l'app ni à connaître Pawrise.

**Acceptance Criteria:**

**Given** un handoff déclenché par l'IA (Story 6.3)
**When** le relais vers un vétérinaire est créé
**Then** un **PDF normalisé** (profil + chronologie + anomalies + résumé non-diagnostique) est **généré automatiquement** et attaché à la demande (FR36, FR35)
**And** le format est identique à celui produit par le Vet Portal (Story 7.7), indépendant de tout logiciel métier.

### Story 10.2: Format de PDF normalisé standardisé

As a responsable produit,
I want un format de rapport normalisé unique,
So that tout vétérinaire puisse le lire sans intégration logicielle dédiée.

**Acceptance Criteria:**

**Given** les données d'un animal
**When** un rapport est généré (au handoff ou depuis le Vet Portal)
**Then** il respecte un **gabarit normalisé** stable (sections, chronologie, mentions légales/non-diagnostic) (FR35)
**And** chaque élément reste traçable jusqu'à sa donnée source.

### Story 10.3: Handoff → file de prise en charge et téléconsultation d'orientation par chat (MVP)

As a propriétaire,
I want être pris en charge par un vétérinaire de garde via un chat sécurisé,
So that j'obtienne une orientation humaine rapide après le handoff de l'IA.

**Acceptance Criteria:**

**Given** un handoff déclenché par l'IA (Story 6.3)
**When** la demande entre dans la **file de prise en charge** des vétérinaires de garde disponibles
**Then** un vétérinaire **prend la main** et un canal de **chat chiffré** s'ouvre (mobile ou web), le PDF normalisé lui étant accessible (FR37, FR40, NFR3)
**And** l'échange reste **non-diagnostique (orientation)**, respecte le consentement (Epic 9) et est journalisé ; si aucun vétérinaire n'est disponible, une prise de contact différée est proposée.

### Story 10.4: Proposition d'examen physique & routage vers le vétérinaire traitant (MVP)

As a vétérinaire de garde,
I want proposer un examen physique ou router le dossier vers le vétérinaire traitant,
So that le diagnostic se fasse dans un cadre légal (relation établie).

**Acceptance Criteria:**

**Given** une orientation où un examen clinique est requis
**When** le vétérinaire de garde conclut la téléconsultation
**Then** il peut **proposer une venue en centre** (le sien ou les urgences) et/ou **router le PDF normalisé vers le vétérinaire traitant** de l'animal (FR39, FR43)
**And** la proposition est tracée ; *(la prise de RDV/booking intégrée est Post-MVP)*.

### Story 10.5: Pool de rémunération vétérinaire (part d'abonnement, plafonné) (MVP — règle de coût)

As a responsable produit,
I want rémunérer les vétérinaires via un pool alimenté par une part d'abonnement,
So that le coût vétérinaire soit plafonné et qu'aucun utilisateur ne coûte plus que son abonnement.

**Acceptance Criteria:**

**Given** des téléconsultations d'orientation réalisées sur une période
**When** la rémunération est calculée
**Then** elle est prélevée sur un **pool = part fixe (%) du revenu d'abonnement** et **distribuée au prorata de l'activité, pondérée par la réactivité et la qualité** (FR41)
**And** le coût vétérinaire total reste **borné au % défini du revenu** (aucun dépassement par utilisateur) ; la part « réactivité » accélère le service sans ouvrir la marge.

### Story 10.6: Garde-fous anti-abus & fair-use (MVP)

As a responsable produit,
I want limiter les abus d'escalade,
So that le service reste soutenable et de qualité.

**Acceptance Criteria:**

**Given** un utilisateur sollicitant des orientations vétérinaires
**When** l'IA filtre avant escalade et que le quota fair-use par période est suivi
**Then** seules les situations pertinentes escaladent, et au-delà du **quota fair-use** l'accès passe en **file basse priorité** ou en **add-on** (FR42)
**And** les seuils sont configurables et les dépassements journalisés.

### Story 10.7: Appel/visio sécurisé (Post-MVP)

As a propriétaire,
I want passer un appel/visio sécurisé avec le vétérinaire,
So that il puisse mieux évaluer la situation quand le chat ne suffit pas.

**Acceptance Criteria:**

**Given** une orientation par chat jugée insuffisante
**When** le vétérinaire ou le propriétaire propose un appel/visio
**Then** un **système d'appel/visio sécurisé complet** est établi entre les deux parties (FR38, NFR3)
**And** *(Post-MVP)* — hors périmètre du MVP, planifié après validation terrain.

## Epic 11: Plateforme, livraison & observabilité (Ops)

> Industrialiser le socle technique — cluster Kubernetes en IaC, livraison GitOps, intégration continue, observabilité, secrets et PKI — pour déployer en continu, de façon reproductible, sûre et observable.

### Story 11.1: Provisionnement du cluster Kubernetes
**En tant que** équipe plateforme, je veux provisionner le cluster Kubernetes via de l'IaC (kubeadm + Terraform/Ansible), afin de disposer d'un socle reproductible et versionné sans action manuelle.

**Given** un dépôt d'infrastructure-as-code
**When** on applique la configuration
**Then** le cluster kubeadm est créé sur Hetzner avec sauvegarde etcd planifiée
**And** aucune modification manuelle (kubectl apply) n'est nécessaire.

### Story 11.2: Livraison continue GitOps
**En tant que** équipe plateforme, je veux déployer les services via Helm et Argo CD (GitOps), afin de que chaque changement fusionné se déploie automatiquement et que le cluster reflète l'état décrit dans Git.

**Given** un chart Helm versionné
**When** une release est promue sur la branche d'environnement
**Then** Argo CD synchronise le cluster sur cet état (app-of-apps)
**And** un rollback se fait en revenant à la révision Git précédente.

### Story 11.3: Intégration continue
**En tant que** développeur, je veux que chaque commit déclenche build, tests et publication d'images via GitHub Actions, afin de détecter les régressions tôt et produire des artefacts prêts à déployer.

**Given** une pull request
**When** la CI s'exécute
**Then** build + tests + lint + image conteneur sont produits (cache sccache pour Rust)
**And** un échec de la CI bloque la fusion.

### Story 11.4: Observabilité de bout en bout
**En tant que** équipe ops, je veux collecter métriques, logs et traces via OpenTelemetry (Prometheus / Loki / Tempo / Grafana), afin de diagnostiquer rapidement les incidents et suivre les SLA.

**Given** des services instrumentés OpenTelemetry
**When** une requête traverse le système
**Then** métriques, logs et traces sont corrélés et visualisables dans Grafana
**And** des alertes se déclenchent au dépassement de seuil (NFR7).

### Story 11.5: Gestion des secrets
**En tant que** équipe plateforme, je veux chiffrer les secrets versionnés avec SOPS + age, afin de ne jamais exposer de secret en clair tout en restant GitOps-friendly.

**Given** un secret applicatif
**When** il est commité dans le dépôt GitOps
**Then** il est chiffré (SOPS + age) et n'est déchiffré que dans le cluster
**And** aucun secret en clair n'apparaît jamais dans Git.

### Story 11.6: PKI interne des colliers *(Post-MVP)*
**En tant que** équipe sécurité, je veux émettre, renouveler et révoquer les certificats des colliers via step-ca, afin de garantir l'authentification mutuelle (mTLS) de toute la flotte IoT.

**Given** un collier à appairer
**When** il s'enrôle auprès de la PKI
**Then** step-ca lui délivre un certificat et le broker MQTT fait confiance à la racine
**And** un collier perdu ou volé voit son certificat révoqué (CRL/OCSP).

### Story 11.7: Registre d'images conteneur
**En tant que** équipe plateforme, je veux pousser et tirer les images depuis un registre, afin de déployer des artefacts fiables et scannés.

**Given** une image produite par la CI
**When** elle est poussée au registre
**Then** elle est scannée (vulnérabilités) et disponible pour le cluster
**And** le déploiement échoue si l'image attendue est absente.

### Story 11.8: Ingress & TLS public
**En tant que** équipe plateforme, je veux exposer les services via un ingress avec TLS public automatique, afin de offrir un accès public sécurisé sans gestion manuelle des certificats.

**Given** un service à exposer
**When** l'ingress est configuré
**Then** le trafic public est routé en HTTPS avec certificat valide (cert-manager/Let's Encrypt), renouvelé automatiquement
**And** le mTLS des colliers (step-ca) reste indépendant.

### Story 11.9: Sauvegarde & restauration des données
**En tant que** équipe ops, je veux sauvegarder et pouvoir restaurer PostgreSQL/TimescaleDB (PITR) et etcd, afin de garantir la résilience et la non-perte des données de santé.

**Given** des sauvegardes planifiées
**When** un incident survient
**Then** une restauration point-in-time est possible dans l'objectif RPO/RTO défini
**And** les restaurations sont testées périodiquement.

