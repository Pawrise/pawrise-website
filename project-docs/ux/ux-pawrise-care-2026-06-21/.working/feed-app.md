# Packet claude.ai/design — Surface 1 : App mobile propriétaire

> À coller dans claude.ai/design (la DA / DESIGN.md est déjà chargée). Génère les écrans de l'app
> propriétaire en respectant : **mode clair par défaut, friendly, IA d'orientation NON-diagnostique,
> sémantique santé non-alarmiste** (le rouge est réservé à la sécurité réelle, ex. sortie de zone).
> Form factor : mobile natif (iOS + Android). Tracé aux user stories (US x.y).

## Modèle de navigation
- **Pré-auth (stack)** : Welcome → Inscription / Connexion → Création profil animal → Appairage collier → entre dans l'app.
- **Tab bar (5)** : 🐾 Bien-être (accueil) · 🗺️ Carte · 🔔 Alertes · 💬 Chat IA · 👤 Profil.
- **Profondeur** : chaque onglet empile ses écrans de détail.
- **Modales (1 niveau)** : appairage, création/édition de zone, souscription abo, mise en relation véto.

## Écrans à générer

### Onboarding (stack pré-auth)
1. **Welcome / Splash** — logo, pitch 1 ligne, CTA « Créer un compte » / « Se connecter ».
2. **Inscription** (US 1.1) — email/mdp, validation, consentement CGU.
3. **Connexion + mot de passe oublié** (US 1.2) — login, reset, erreurs.
4. **Profil animal** (US 1.3) — photo, nom, espèce/race, âge, poids, antécédents.
5. **Appairage collier** (US 1.4) — assistant BLE : détecter → connecter → tester signal → succès.
6. **Mon dispositif** (US 1.5/1.6) — carte collier, batterie, signal, remplacer/désactiver.

### Onglet Bien-être (accueil)
7. **Dashboard bien-être** (US 3.3) — **status-pill bien-être** (Bon/À surveiller/À consulter), activité du jour, sommeil, constantes ; état vide explicite si pas de données.
8. **Tendances historiques** (US 3.4) — sélecteur période, courbes activité/sommeil vs « normale », comparaison.

### Onglet Carte
9. **Carte GPS temps réel** (US 4.1/4.5) — carte plein écran, position live, recentrage, statut.
10. **Historique des déplacements** (US 4.2) — carte + timeline trajets, filtre date.
11. **Zones de sécurité** (US 4.3/4.4) — liste + éditeur (rayon sur carte), alertes on/off.

### Onglet Alertes
12. **Centre d'alertes** (US 5.4) — liste (prévention/santé/rappels), non-lues, tri.
13. **Détail d'une alerte** (US 5.2/5.3) — signal + contextualisation (âge/race), recommandation douce, CTA « Demander à l'IA ».
14. **Rappels de soins** (US 5.5) — vaccins/traitements, échéances, ajout/édition.

### Onglet Chat IA
15. **Chat IA** (US 6.1/6.2) — fil de conversation, mention persistante « orientation, pas diagnostic », réponses citant les données, bouton « Parler à un vétérinaire ».
16. **Mise en relation véto (handoff)** (US 6.3/10.3) — récap situation, **consentement au partage**, CTA.
17. **Téléconsultation (chat sécurisé)** (US 10.3/10.4) — chat véto, statut file d'attente, proposition d'examen physique. *(Appel/visio = v2, US 10.7.)*
18. **Résumé / PDF normalisé** (US 6.4/10.1) — aperçu PDF, partage, historique.

### Onglet Profil (compte / abo / RGPD)
19. **Abonnement** (US 8.1/8.5) — plans, **explication du pool véto** (part fixe → coût plafonné), paiement Stripe.
20. **Factures & statut** (US 8.2) — liste, statut, téléchargement.
21. **Gestion / résiliation** (US 8.3) — plan courant, changer/résilier (confirmation).
22. **Support & FAQ** (US 8.4) — recherche FAQ, contact/ticket.
23. **Réglages** — compte, notifications, préférences.
24. **Consentements & confidentialité** (US 9.1) — autorisations granulaires, partage véto.
25. **Export de mes données** (US 9.2) — demande, statut, téléchargement.
26. **Suppression de compte** (US 9.3) — avertissement, double confirmation, droit à l'oubli.

## États transverses à prévoir
Vide (« pas encore de données — vérifiez l'appairage »), chargement (skeleton), **hors-ligne** (US 2.3 : « dernière synchro il y a X », resync auto), erreur réseau (message réparateur + retry), succès (confirmations brèves).

## Composants spécifiques (rappel)
Status-pill bien-être · carte d'alerte contextualisée · bulle de chat IA (badge non-diagnostic) · carte de mise en relation · carte rapport PDF · cartes graphiques (courbes) · assistant d'appairage · éditeur de zone · carte d'abonnement.

## Parcours à garder en tête (cohérence inter-écrans)
- **Léa / baisse d'activité** : Alerte → Détail → Chat IA → Mise en relation → Téléconsult → Résumé/PDF.
- **Onboarding** : Inscription → Profil → Appairage → Bien-être amorcé.
- **Sortie de zone** : alerte sécurité (cas urgent) → Carte temps réel.
- **Abonnement** : Profil → Abonnement (pool véto) → paiement.
