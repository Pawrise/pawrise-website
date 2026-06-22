# Pawrise Care — Documentation projet

Docs de référence du projet, sauvegardées dans le repo du site pour continuité
(changement de poste). Le site lui-même est à la racine de ce repo (Next.js, export statique).

## Contenu

- **`planning/`** — artefacts BMAD : `product-brief.md`, `PRD.md` (FR1–43 / NFR1–10),
  `epics.md` (11 epics / 66 user stories), `architecture.md`.
- **`ux/`** — spec UX & design :
  - `ux-pawrise-care-2026-06-21/EXPERIENCE.md` — navigation, flows, états, accessibilité.
  - `ux-pawrise-care-2026-06-21/DESIGN.md` — design system « Pulse » (DA validée).
  - `ux-pawrise-care-2026-06-21/.working/` — inventaire d'écrans, design-brief, packets par surface (feed-*.md).
  - `maquettes-pulse/` — **maquette générée (claude.ai/design)** : DESIGN.md + 13 lots `.dc.html`
    (App ×4, Vet Portal ×2, Admin, Vitrine ×2, Kit composants, Exploration DA, Plan UX) + `support.js`.
    → s'ouvrent servies en HTTP (`python3 -m http.server` dans le dossier).
- **`stories/`** — les 66 user stories détaillées (Given/When/Then).

## Où en est le projet (juin 2026)

- **Site de soutenance** : en ligne dans ce repo (`app/`, `components/`, `lib/`), 7 sections + cockpit
  d'architecture embarqué (`public/cockpit.html`). Export statique → `npm run build` → `out/`.
  Hébergement Hostinger ; CD à brancher.
- **Maquette produit** : DA « Pulse » validée + tous les écrans des 4 surfaces générés (voir `ux/maquettes-pulse/`).
- **Prochaines étapes** :
  1. Récupérer les écrans de la maquette via `DesignSync` / `/design-sync` et **embarquer** les meilleurs dans le site.
  2. Retravailler les 7 sections du site une par une (Vision → Architecture → … → Équipe).
  3. Brancher la CD de déploiement.

## Reprise sur un autre poste

```bash
git clone git@github.com:Pawrise/website.git
cd website && npm install && npm run dev
```
Toute la doc projet est dans `project-docs/`.
