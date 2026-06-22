---
name: Pawrise Care
status: draft
sources:
  - {planning_artifacts}/epics.md
  - {planning_artifacts}/PRD.md
  - {planning_artifacts}/product-brief.md
  - .working/screen-inventory.md
  - .working/design-brief.md
updated: 2026-06-21
---

# Pawrise Care — Experience Spine

> Contrat « comment ça marche » : navigation, comportements, états, accessibilité, parcours.
> Indépendant du visuel. `DESIGN.md` (produit dans claude.ai/design) = identité visuelle ;
> il gagne sur le visuel, ce document gagne sur le comportement. Inventaire complet des écrans
> et blocs : `.working/screen-inventory.md` (tracé aux user stories).

## Foundation

Produit **multi-surface**, un seul langage décliné :

| Surface | Form factor | UI system | Posture |
|---|---|---|---|
| App propriétaire | Mobile iOS + Android (natif) | Conventions plateforme (nav, gestes, dynamic type) | Grand public, rassurant, mode clair par défaut |
| Vet Portal | Web responsive, desktop-first | Web (design system maison) | Pro, dense mais humain |
| Admin / Back-office | Web desktop | Web (design system maison) | Utilitaire, data, lisible |
| Site vitrine | Web responsive | Web (design system maison) | Marketing, émotionnel, conversion |

**Principe directeur (gating) :** l'IA **oriente, ne diagnostique jamais**. Toute formulation, tout
état et tout composant qui touche la santé doit refléter ça — observer/contextualiser/orienter,
inciter à consulter, **ne pas dramatiser**.

## Information Architecture

### App propriétaire — tab bar (5) + stack pré-auth + modales
**Pré-auth (stack) :** Welcome → Inscription / Connexion → Création profil animal → Appairage collier → entre dans l'app.

| Onglet | Atteint depuis | Rôle | Profondeur (push) |
|---|---|---|---|
| 🐾 Bien-être (accueil) | Ouverture app | Score bien-être, activité, sommeil, constantes | → Tendances historiques · → Détail constante |
| 🗺️ Carte | Tab bar | Localisation temps réel | → Historique trajets · → Zones (liste/édition) |
| 🔔 Alertes | Tab bar | Centre de notifications santé/prévention/rappels | → Détail alerte → Chat IA · → Rappels de soins |
| 💬 Chat IA | Tab bar | Assistant d'orientation | → Mise en relation véto → Téléconsult → Résumé/PDF |
| 👤 Profil | Tab bar | Compte, dispositif, abo, RGPD | → Mon dispositif · Abonnement · Factures · Support · Consentements · Export · Suppression |

**Modales (1 niveau max) :** appairage collier, création/édition de zone, souscription abonnement, demande de mise en relation.

### Vet Portal — sidebar + onglets patient
**Sidebar :** File de prise en charge · Patients · Notifications · Profil.
**Dans un patient (onglets) :** Vue synthétique · Timeline · Données brutes · Rapport.
Entrée typique : File de prise en charge → prendre une demande → (consentement) → dossier patient.

### Admin / Back-office — sidebar
Dashboard · Utilisateurs · Parc colliers · Réseau véto · Pool & paiements · Tickets · Conformité RGPD.

### Site vitrine — top nav
Home · Produit · Pour les vétérinaires · Tarifs · À propos · Contact. Footer : légal/RGPD.

→ Liste exhaustive des écrans, blocs et US : `.working/screen-inventory.md`. Ce document gagne sur conflit.

## Voice and Tone

Microcopy en français, claire, **rassurante, non-diagnostique**. La voix de marque/esthétique vit dans `DESIGN.md`.

| Faire | Éviter |
|---|---|
| « L'activité de Pablo est un peu basse cette semaine. » | « Anomalie détectée ! » / « Risque de maladie » |
| « Je peux vous orienter — je ne pose pas de diagnostic. » | « Voici le diagnostic : … » |
| « On vous met en relation avec un vétérinaire. » | « Urgence : contactez un véto immédiatement » (sauf vraie sécurité) |
| « Pablo est sorti de la zone "Maison". » (sécurité = direct) | Jargon médical non expliqué |
| Phrases courtes, complètes, humaines. | Points d'exclamation anxiogènes, alarmisme, gamification. |

**Règle santé :** tout libellé d'état santé propose une **action douce** (« en savoir plus », « demander à l'IA »), jamais une conclusion médicale.

## Component Patterns

Comportements ; specs visuelles dans `DESIGN.md.Components`.

| Composant | Où | Règles comportementales |
|---|---|---|
| Status-pill bien-être | Accueil, alertes | Échelle non-alarmiste : **Bon / À surveiller / À consulter**. Couleur + **libellé + icône** (jamais la couleur seule). « À consulter » ouvre une action douce, pas une alerte rouge. |
| Carte d'alerte santé | Onglet Alertes, détail | Signal + contextualisation (âge/race/historique) + CTA « Demander à l'IA ». Non-lue = marqueur discret. |
| Bulle de chat IA | Chat IA | Mention persistante « orientation, pas diagnostic ». Réponses citent les données de l'animal. Bouton « Parler à un vétérinaire » toujours accessible. |
| Carte de mise en relation (handoff) | Chat → véto | Récap de la situation + **consentement explicite** au partage + statut de file d'attente en temps réel. |
| Carte rapport PDF | App + Vet Portal | Aperçu du PDF normalisé, partage, versionné dans le temps. |
| Timeline médicale | Vet Portal | Événements chronologiques structurés, filtrables ; **pas de score global** affiché côté véto (décision produit). |
| Carte graphique (courbes) | Bien-être, Vet Portal | Activité/sommeil/constantes vs « normale » de l'animal. État vide explicite si pas de données. |
| Assistant d'appairage | Modale | Stepper BLE : détecter → connecter → tester signal → succès ; reprise possible si échec. |
| Éditeur de zone | Carte (modale) | Rayon ajustable sur carte, nom, alertes on/off. |
| Carte d'abonnement | Profil | Plans, **explication du pool véto** (part fixe → coût plafonné), paiement Stripe. |
| Champs & formulaires | Partout | Validation inline, erreurs explicites et réparatrices, jamais bloquantes sans raison. |

## State Patterns

| État | Contexte | Traitement |
|---|---|---|
| Vide (pas de données) | Bien-être, carte, timeline | Message explicite + prochaine action (ex. « Pas encore de données — vérifiez l'appairage du collier »). Jamais un écran « cassé ». |
| Chargement | Toutes listes/graphes | Skeleton, pas de spinner plein écran. |
| **Hors-ligne** (collier ou app) | Données capteurs (US 2.3) | Le collier **bufferise**, l'app indique « dernière synchro il y a X ». Pas d'alarme ; resync auto. |
| Erreur réseau | Actions | Message réparateur (« On n'a pas pu joindre le serveur — réessayer ») + retry. |
| Succès | Appairage, abo, partage | Confirmation brève et claire (« Collier appairé », « Rapport envoyé »). |
| Sécurité (sortie de zone) | Carte/alerte | **Seul cas direct/urgent** : alerte immédiate, claire, actionnable (voir sur la carte). |

## Interaction Primitives

- **Navigation app** : tab bar persistante ; push pour le détail ; retour par geste/headers plateforme.
- **Pull-to-refresh** sur listes de données (bien-être, alertes).
- **Carte** : pan/zoom, recentrage, tap sur point = détail ; tracé de zone par glisser.
- **Chat** : envoi optimiste, indicateur « l'IA réfléchit », messages citant les données.
- **Feedback** : transitions courtes (<250ms), retour haptique sur actions clés (app), pas de motion gratuite.
- **Confirmations destructives** (résiliation, suppression compte, suppression zone) : double confirmation explicite.

## Accessibility Floor

- Contraste **AA minimum** (texte et composants) ; à valider sur la DA de claude.ai/design.
- **Statut jamais par la couleur seule** : toujours libellé + icône (status-pill, alertes).
- Cibles tactiles ≥ 44×44 pt (app) ; focus visible (web).
- **Dynamic type** honoré (app) ; rendu lisible jusqu'aux grandes tailles, sans troncature.
- Labels lecteur d'écran sur icônes/graphes ; alternatives textuelles aux courbes.
- `prefers-reduced-motion` respecté (web) ; animations désactivables.
- Langage clair (FR), pas de jargon non expliqué — sert aussi l'accessibilité cognitive.

## Key Flows

Parcours nommés, avec un **beat climax**. (Protagonistes illustratifs.)

### 1. Léa et la baisse d'activité de Pablo (orientation → véto)
Léa, propriétaire d'un labrador, reçoit une **alerte douce** : activité basse cette semaine.
Elle ouvre le **détail** (contextualisé : âge, race) → tape **« Demander à l'IA »** → le **chat** explique,
rappelle qu'il oriente sans diagnostiquer, et propose une **mise en relation**. Léa **consent au partage**,
entre dans la **file de téléconsultation**. **★ Climax :** elle est connectée à un vétérinaire de garde
qui a **déjà tout le contexte** (résumé + PDF normalisé) — zéro reprise d'historique. Le véto propose
si besoin un **examen physique** chez le vétérinaire traitant.

### 2. Karim installe le collier (onboarding & appairage)
Inscription → **profil animal** → **assistant d'appairage** BLE (détecter → connecter → tester) →
**★ Climax :** premier signal reçu, le collier passe « en ligne », l'écran bien-être s'amorce.

### 3. Sortie de zone (sécurité, temps réel)
Pablo franchit la limite de la zone « Maison » → **alerte sécurité immédiate** (seul cas « urgent ») →
Léa ouvre la **carte temps réel** → **★ Climax :** elle localise Pablo et le récupère.

### 4. Dr. Martin prend une demande (Vet Portal)
Notification d'une **demande entrante** → **file de prise en charge** → il prend le dossier → (accès patient
autorisé) → **vue synthétique** + **timeline** + données brutes → **★ Climax :** il rédige/valide le
**rapport PDF normalisé** et l'envoie au propriétaire ; suivi dans le temps.

### 5. Souscription & compréhension du pool (abonnement)
Depuis Profil, Léa ouvre **Abonnement** → comprend le **pool véto** (part fixe → coût plafonné) →
paie (Stripe) → **★ Climax :** accès débloqué, facture disponible.

### 6. Demande RGPD (admin, plus léger)
Un utilisateur demande l'**export** ou la **suppression** de ses données → l'admin traite via
**Conformité RGPD** (registre consentements + journal d'audit) → confirmation traçable.

---
_Surfaces & écrans complets : `.working/screen-inventory.md`. DA & composants visuels : `DESIGN.md`._
