# Packets claude.ai/design — 3 surfaces restantes (Vet Portal, Admin, Site vitrine)

> Génère chaque surface sur la DA déjà chargée. Les 3 packets se suivent ci-dessous.

---

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

---

# Packet claude.ai/design — Surface 3 : Admin / Back-office (web)

> À coller dans claude.ai/design (DA / DESIGN.md déjà chargée). Génère les écrans du **back-office
> interne** (équipe Pawrise). Posture : **utilitaire, dense, data, lisible** — efficacité avant émotion,
> mais reste sur la même DA. Form factor : web **desktop**. Tracé aux user stories (US x.y).

## Modèle de navigation
- **Sidebar gauche** : Dashboard · Utilisateurs · Parc colliers · Réseau véto · Pool & paiements · Tickets · Conformité RGPD.
- Pattern récurrent : liste filtrable → fiche détail → actions.

## Écrans à générer

1. **Dashboard admin (KPIs)** (US 8.7) — indicateurs clés (utilisateurs actifs, colliers en ligne, demandes véto, MRR), alertes système, raccourcis.
2. **Gestion utilisateurs / comptes** (US 8.7) — table filtrable (recherche), fiche utilisateur (animaux, abo, statut), actions (support, suspension).
3. **Parc colliers — provisioning & cycle de vie** (US 1.6/9.4) — inventaire des colliers (activation, association, remplacement, fin de vie), **traçabilité**.
4. **Réseau vétérinaires partenaires** — onboarding véto, validation (Ordre), attribution des demandes, métriques de performance/satisfaction.
5. **Pool de rémunération & reversements** (US 10.5/8.6) — calcul du **pool** (part fixe d'abo), répartition pondérée (réactivité/qualité), **payouts** vétérinaires.
6. **Facturation / paiements (Stripe)** (US 8.6) — transactions, abonnements, statuts, litiges/remboursements.
7. **Support / tickets** (US 8.4/8.7) — file de tickets, statut, assignation, réponses.
8. **Conformité RGPD (registre & audit)** (US 9.1–9.4) — registre des consentements, **demandes d'export**, **suppressions / droit à l'oubli**, **journal d'audit** des alertes et analyses.

## États transverses à prévoir
Vide (« aucune donnée »), chargement (skeleton table), filtres actifs/aucun résultat, erreur, succès d'action (toast), confirmations pour actions sensibles (suspension, suppression, reversement).

## Composants spécifiques (rappel)
Tables data filtrables/triables · cartes KPI · fiches détail · graphiques (tendances) · panneau d'actions · timeline d'audit · badges de statut.

## Hors périmètre maquette
Observabilité technique (Epic 11 : cluster, CI/CD, monitoring) = Grafana/Prometheus, outils tiers — pas d'écran à dessiner ici.

## Cohérence inter-surfaces
Le **pool de rémunération** (écran 5) est la traduction admin de la règle de coût expliquée côté app
(écran Abonnement : part fixe → coût véto plafonné). La **traçabilité RGPD** (écran 8) reflète les
consentements donnés côté app (écran Consentements).

---

# Packet claude.ai/design — Surface 4 : Site vitrine public (web)

> À coller dans claude.ai/design (DA / DESIGN.md déjà chargée). Génère le **site marketing public**
> (prospects). Posture : **émotionnel, chaleureux, orienté conversion**, tout en restant **crédible**
> (santé sérieuse, non-diagnostique). Form factor : web **responsive** (mobile-first sur la home).
> ⚠️ Distinct du site de soutenance (qui, lui, est interne au jury).

## Modèle de navigation
- **Top nav** : Logo · Produit · Pour les vétérinaires · Tarifs · À propos · Contact · CTA principal (« Précommander » / « Être prévenu »).
- **Footer** : liens légaux/RGPD, réseaux, contact.

## Écrans / pages à générer

1. **Home / Landing** — hero produit (collier + app), promesse (« agir au bon moment, avant que ça n'empire »), bénéfices clés, preuve sociale, **CTA**. Section « comment ça marche » (collier → IA d'orientation → réseau véto).
2. **Le produit (collier + app)** — fonctionnalités (bien-être, localisation, alertes, chat IA), **captures de l'app**, différenciation (interpréter, pas seulement localiser).
3. **Pour les vétérinaires** — valeur du Vet Portal (dossier structuré, PDF normalisé, gain de temps), modèle de partenariat, **CTA véto**.
4. **Tarifs / abonnement** — grille de plans, **explication du pool véto** (part fixe → coût plafonné), FAQ pricing.
5. **À propos / équipe** — mission, histoire, équipe (10 personnes, Epitech EIP), engagement non-diagnostique/éthique.
6. **Contact / précommande** — formulaire, inscription newsletter, FAQ courte.
7. **Mentions légales / RGPD** — mentions, politique de confidentialité, gestion des données.

## Sections / composants spécifiques (rappel)
Hero avec visuel produit · blocs bénéfices (icône + titre + texte) · section « comment ça marche » (3 étapes) · cartes fonctionnalités · bandeau preuve/citation · **grille de tarifs** · bloc équipe · formulaire contact/newsletter · footer riche · CTA récurrents.

## Ton & contenu
Chaleureux et rassurant (lien humain-animal), bénéfices avant fonctionnalités, **jamais de promesse médicale** (« orientation », pas « diagnostic »/« guérison »). Mettre en avant la **prévention** et le **réseau vétérinaire**.

## Cohérence inter-surfaces
Réutiliser les **captures d'écran de l'app** (générées en Surface 1) dans les pages Produit/Home.
Le discours « pool véto » (Tarifs) doit correspondre à l'écran Abonnement de l'app.
