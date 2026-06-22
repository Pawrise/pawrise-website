# Inventaire d'écrans — Pawrise Care (à valider)

Dérivé des 11 epics / 66 US (epics.md) + PRD + specs Vet Portal. Chaque écran est tracé vers ses US.
Légende statut : **MVP** = périmètre MVP · **v2** = post-MVP.

---

## Surface 1 — App mobile propriétaire (iOS/Android natif)

### A. Authentification & onboarding (Epic 1)
| # | Écran | US | Statut | Structure (zones) |
|---|-------|----|--------|-------------------|
| 1 | Welcome / Splash | — | MVP | Logo, pitch 1 ligne, CTA « Créer un compte » / « Se connecter » |
| 2 | Inscription | 1.1 | MVP | Champs email/mdp, validation, CGU/consentement, CTA |
| 3 | Connexion + mot de passe oublié | 1.2 | MVP | Login, lien reset, états d'erreur |
| 4 | Création du profil animal | 1.3 | MVP | Photo, nom, espèce/race, âge, poids, antécédents |
| 5 | Appairage du collier (assistant multi-étapes) | 1.4 | MVP | Stepper BLE : détection → connexion → test signal → succès |
| 6 | Mon dispositif (état & batterie) | 1.5, 1.6 | MVP | Carte collier, batterie, signal, remplacer/désactiver |

### B. Bien-être & activité (Epic 3)
| 7 | **Dashboard bien-être** (écran d'accueil) | 3.3 | MVP | Score bien-être, activité du jour, sommeil, constantes, état vide explicite |
| 8 | Tendances historiques (activité/sommeil) | 3.4 | MVP | Sélecteur période, courbes, comparaison à la normale |

### C. Localisation (Epic 4)
| 9 | Carte GPS temps réel | 4.1, 4.5 | MVP | Carte plein écran, position live, recentrage, statut |
| 10 | Historique des déplacements | 4.2 | MVP | Carte + timeline trajets, filtrage date |
| 11 | Zones de sécurité (liste + édition) | 4.3, 4.4 | MVP | Liste zones, création/édition (rayon sur carte), alertes on/off |

### D. Santé & alertes (Epic 5)
| 12 | Centre de notifications / alertes | 5.4 | MVP | Liste alertes (prévention/santé/rappels), tri, non-lues |
| 13 | Détail d'une alerte santé | 5.2, 5.3 | MVP | Signal détecté, contextualisation (âge/race), recommandation, CTA chat IA |
| 14 | Rappels de soins | 5.5 | MVP | Vaccins/traitements, échéances, ajout/édition |

### E. Chat IA & escalade (Epic 6 + 10)
| 15 | **Chat IA conversationnel** | 6.1, 6.2 | MVP | Fil de conversation, garde-fous anti-diagnostic visibles, suggestions |
| 16 | Mise en relation vétérinaire (handoff) | 6.3, 10.3 | MVP | Récap situation, consentement partage, CTA « Parler à un véto » |
| 17 | Téléconsultation d'orientation (chat sécurisé) | 10.3, 10.4 | MVP | Chat véto, statut file d'attente, proposition d'examen physique |
| 17b | Appel / visio sécurisé | 10.7 | v2 | Écran d'appel |
| 18 | Résumé de consultation / PDF | 6.4, 10.1 | MVP | Aperçu PDF normalisé, partage, historique |

### F. Abonnement, compte & RGPD (Epic 8 + 9)
| 19 | Abonnement (offre & souscription) | 8.1, 8.5 | MVP | Plans, pool véto expliqué, paiement |
| 20 | Factures & statut | 8.2 | MVP | Liste factures, statut paiement, téléchargement |
| 21 | Gestion / résiliation abo | 8.3 | MVP | Plan courant, changer/résilier |
| 22 | Support & FAQ | 8.4 | MVP | Recherche FAQ, contact support/ticket |
| 23 | Profil & réglages | — | MVP | Compte, notifications, préférences |
| 24 | Consentements & confidentialité | 9.1 | MVP | Autorisations granulaires, partage véto |
| 25 | Export de mes données | 9.2 | MVP | Demande export, statut, téléchargement |
| 26 | Suppression de compte | 9.3 | MVP | Avertissement, confirmation, droit à l'oubli |

> États transverses app : empty states, **mode hors-ligne** (2.3), chargement, erreurs.

---

## Surface 2 — Vet Portal (web) (Epic 7 + 10)
| # | Écran | US | Statut | Structure |
|---|-------|----|--------|-----------|
| 27 | Login / onboarding vétérinaire | 7.1 | MVP | Connexion pro, vérification ordre, profil |
| 28 | File de prise en charge | 10.3 | MVP | Demandes entrantes, priorité, prendre en charge |
| 29 | Accès patient autorisé (consentement) | 7.2 | MVP | Demande/validation d'accès, statut |
| 30 | Vue patient synthétique | 7.3 | MVP | En-tête animal, alertes clés, raccourcis (pas de score global) |
| 31 | Timeline chronologique structurée | 7.4 | MVP | Frise médicale, événements, filtres |
| 32 | Résumé contextualisé + données brutes | 7.5 | MVP | Résumé non-diagnostic, accès courbes/données brutes |
| 33 | Alertes & notes professionnelles | 7.6 | MVP | Liste alertes, ajout de notes véto |
| 34 | Rapport PDF normalisé & suivi | 7.7, 10.2 | MVP | Aperçu/édition rapport, historique, envoi |
| 35 | Téléconsultation côté véto (chat) | 10.3, 10.4 | MVP | Chat orientation, proposer examen physique |

---

## Surface 3 — Admin / Back-office (web) (Epic 8.7, 9, gestion réseau)
| # | Écran | US | Statut | Structure |
|---|-------|----|--------|-----------|
| 36 | Dashboard admin (KPIs) | 8.7 | MVP | Indicateurs clés, alertes système |
| 37 | Gestion utilisateurs / comptes | 8.7 | MVP | Recherche, fiche user, actions |
| 38 | Provisioning & cycle de vie colliers | 1.6, 9.4 | MVP | Parc colliers, activation, remplacement, traçabilité |
| 39 | Réseau vétérinaires partenaires | 9.5* | MVP | Onboarding véto, attribution, métriques |
| 40 | Pool de rémunération & reversements | 10.5, 8.6 | MVP | Calcul pool, répartition, payouts |
| 41 | Facturation / paiements (Stripe) | 8.6 | MVP | Transactions, abonnements, litiges |
| 42 | Support / tickets | 8.4, 8.7 | MVP | File tickets, statut, réponses |
| 43 | Conformité RGPD (registre & audit) | 9.1–9.4 | MVP | Consentements, exports, suppressions, journal d'audit |

> Observabilité (Epic 11) = Grafana/Prometheus → hors maquette (outil tiers).

---

## Surface 4 — Site vitrine public (marketing)
| # | Écran | Statut | Structure |
|---|-------|--------|-----------|
| 44 | Landing / Home | MVP | Hero produit, bénéfices, preuve, CTA |
| 45 | Le produit (collier + app) | MVP | Fonctionnalités, captures app |
| 46 | Pour les vétérinaires | MVP | Valeur Vet Portal, partenariat |
| 47 | Tarifs / abonnement | MVP | Grille, pool véto, FAQ pricing |
| 48 | À propos / équipe | MVP | Mission, équipe, Epitech EIP |
| 49 | Contact / précommande | MVP | Formulaire, newsletter |
| 50 | Mentions légales / RGPD | MVP | Légal, politique données |

---

## Récap
- **App mobile** : 26 écrans (+ états)
- **Vet Portal** : 9 écrans
- **Admin** : 8 écrans
- **Site vitrine** : 7 écrans
- **Total ≈ 50 écrans** (dont ~3 en v2)

\* 9.5 Object Storage = backend ; la gestion réseau véto dérive du modèle Plan d'actions / pool (Epic 10).
