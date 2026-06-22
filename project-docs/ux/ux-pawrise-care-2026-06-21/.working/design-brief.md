# Design brief — Pawrise Care (à envoyer à claude.ai/design)

> But de ce brief : cadrer une **recherche de direction artistique** dans claude.ai/design,
> puis produire un **design system au format DESIGN.md** (Google Labs) qui servira à générer
> tous les écrans. La DA n'est PAS décidée ici — c'est ce qu'on explore avec claude.ai/design.

## 1. Le produit en une phrase
**Pawrise Care** : un collier connecté + une IA d'**orientation santé non-diagnostique** qui relie
les propriétaires d'animaux à un réseau de vétérinaires — pour agir au bon moment, avant que ça n'empire.

## 2. Positionnement non-négociable (impacte le ton visuel)
- L'IA **n'émet jamais de diagnostic médical**. Elle observe, contextualise, oriente.
- Le visuel doit inspirer **confiance et calme**, **jamais l'alarmisme**. Les états « santé » doivent
  rassurer par défaut ; éviter le rouge « urgence/erreur » sauf vraie sécurité (ex. sortie de zone).

## 3. Audiences (3 + 1)
- **Propriétaire d'animal** (grand public, souvent anxieux pour son animal) → app mobile.
- **Vétérinaire partenaire** (pro, pressé, rigueur médicale) → Vet Portal web.
- **Admin/Ops** (interne) → back-office web.
- **Visiteur** (prospect) → site vitrine public.

## 4. Surfaces & form factors (cohérence multi-surface attendue)
- **App mobile** propriétaire (iOS + Android, natif) — mode clair par défaut, friendly.
- **Vet Portal** (web responsive desktop-first) — plus dense, pro, clinique mais humain.
- **Admin/Back-office** (web desktop) — utilitaire, lisible, data.
- **Site vitrine** (web responsive) — marketing, émotionnel, conversion.

## 5. Personnalité de marque (mots-clés à explorer)
Confiance · calme · chaleur (lien humain-animal) · prévention · moderne · clair · accessible.
Éviter : froideur clinique, gamification anxiogène, sur-saturation, look « gadget GPS ».

## 6. Travail émotionnel du design
Réduire l'anxiété santé, créer un sentiment de **contrôle serein** (« je sais, je suis accompagné »),
et asseoir la **crédibilité** côté vétérinaire (sobre, structuré, données fiables).

## 7. Contraintes
- **Accessibilité** : contrastes AA minimum, tailles tactiles, dynamic type (app).
- **Sémantique santé non-alarmiste** : prévoir une échelle d'états bien-être (ex. bon / à surveiller /
  consulter) **sans** dramatiser ; le rouge réservé à la sécurité réelle.
- **Cohérence multi-surface** : un seul langage, décliné app/web.
- **Continuité optionnelle** : un site de soutenance existe déjà (sombre, teal #2DD4BF + violet,
  glassmorphism). La DA produit peut **s'en inspirer ou s'en affranchir** — à explorer, pas imposé.

## 8. Livrables attendus de claude.ai/design
1. **Exploration de 2–3 directions** de DA (mood, palette, typo) à comparer.
2. La direction retenue formalisée en **DESIGN.md** (frontmatter tokens : colors, typography,
   rounded, spacing, components + sections Brand & Style, Colors, Typography, Layout, Elevation,
   Shapes, Components, Do's & Don'ts).
3. Un **kit de composants** couvrant au minimum : bouton (primary/secondary/ghost), champ de
   saisie, carte, list-item, tab-bar (app), sidebar (web), app-bar/top-bar, chip/badge, **status-pill
   bien-être**, **carte d'alerte**, **carte graphique** (courbes), bulle de chat IA, modale, avatar animal,
   états (vide / chargement / hors-ligne / erreur).

## 9. Composants spécifiques produit (à ne pas oublier)
- **Status-pill bien-être** (échelle non-alarmiste, ex. bon / à surveiller / consulter).
- **Carte d'alerte santé** avec contextualisation (âge/race) + CTA « Demander à l'IA ».
- **Bulle de chat IA** avec mention visible « orientation, pas diagnostic ».
- **Carte de mise en relation vétérinaire** (handoff) + statut file d'attente.
- **Bloc rapport PDF normalisé** (côté app et Vet Portal).
- **Timeline médicale** (Vet Portal) : événements chronologiques structurés.

## 10. Inventaire des écrans à dessiner
Voir `screen-inventory.md` (≈50 écrans, 4 surfaces, tracés aux user stories) — fournit la liste
complète des écrans et leurs blocs, donc les composants nécessaires.

---
_Source : backlog BMAD (11 epics / 66 US), PRD FR1–43 / NFR1–10, specs Vet Portal & collier._
