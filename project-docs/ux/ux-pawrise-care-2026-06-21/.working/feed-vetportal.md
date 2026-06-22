# Packet claude.ai/design — Surface 2 : Vet Portal (web)

> À coller dans claude.ai/design (DA / DESIGN.md déjà chargée). Génère les écrans du **portail
> vétérinaire** web. Posture : **pro, dense mais humain, clinique mais rassurant**. Form factor :
> web responsive **desktop-first**. Positionnement non-négociable : l'outil **assiste** la consultation,
> il ne diagnostique pas à la place du véto. **Pas de « score de santé global »** affiché côté véto
> (décision produit : risque d'interprétation) — priorité à la **chronologie** et aux données contextualisées.
> Tracé aux user stories (US x.y).

## Modèle de navigation
- **Sidebar gauche** : File de prise en charge · Patients · Notifications · Profil.
- **Dans un patient (onglets)** : Vue synthétique · Timeline · Données brutes · Rapport.
- Entrée typique : File de prise en charge → prendre une demande → (consentement/accès) → dossier patient (onglets).

## Écrans à générer

1. **Login / Onboarding vétérinaire** (US 7.1) — connexion pro, vérification (inscription à l'Ordre), profil cabinet/centre.
2. **File de prise en charge** (US 10.3) — demandes entrantes (téléconsultation d'orientation), priorité/ancienneté, bouton « Prendre en charge », statut.
3. **Accès patient autorisé** (US 7.2) — demande / validation d'accès au dossier, statut du consentement du propriétaire.
4. **Vue patient synthétique** (US 7.3) — en-tête animal (espèce/race/âge), alertes clés, raccourcis vers timeline/données/rapport. **Pas de score global.**
5. **Timeline chronologique structurée** (US 7.4) — frise médicale d'événements (mesures, alertes, échanges), filtres par type/période.
6. **Résumé contextualisé + données brutes** (US 7.5) — résumé **non-diagnostique** + accès aux courbes et données brutes (activité, sommeil, constantes, GPS si pertinent).
7. **Alertes & notes professionnelles** (US 7.6) — liste des alertes générées, ajout de **notes véto** (réservées au pro).
8. **Rapport PDF normalisé & suivi** (US 7.7/10.2) — aperçu/édition du **rapport normalisé standardisé**, envoi au propriétaire, historique/versionnage dans le temps.
9. **Téléconsultation d'orientation (chat) côté véto** (US 10.3/10.4) — chat sécurisé avec le propriétaire, contexte/PDF déjà chargé, **proposition d'examen physique** et routage vers le vétérinaire traitant. *(Appel/visio = v2, US 10.7.)*

## États transverses à prévoir
Vide (« aucune demande en file »), chargement (skeleton tableau/timeline), accès en attente de consentement, erreur réseau (retry), succès (« rapport envoyé », « note enregistrée »).

## Composants spécifiques (rappel)
Tableau/liste de **file de prise en charge** (priorité) · en-tête patient · **timeline médicale** · cartes graphiques (courbes vs normale) · panneau de **notes véto** · **éditeur/aperçu de rapport PDF normalisé** · bulle de chat côté pro · badge de consentement/accès.

## Parcours à garder en tête (cohérence)
**Dr. Martin** : Notification → File de prise en charge → prendre le dossier → (accès autorisé) → Vue patient → Timeline → Données brutes → **rédige/valide le rapport PDF normalisé** et l'envoie → suivi dans le temps.

## Cohérence inter-surfaces
Le **PDF normalisé** et le **résumé** proviennent du handoff de l'app propriétaire (chat IA → mise en relation). Le véto reçoit le contexte **prêt à l'emploi**, sans avoir à relire tout l'historique de l'app.
