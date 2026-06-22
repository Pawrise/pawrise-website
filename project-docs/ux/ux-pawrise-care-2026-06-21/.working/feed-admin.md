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
