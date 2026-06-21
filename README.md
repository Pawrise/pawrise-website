# Pawrise Care — Site de soutenance

Site vitrine / support de soutenance du projet **Pawrise Care** (Epitech EIP · T-ESP-800) :
collier connecté + IA d'orientation vétérinaire non-diagnostique.

Construit en **Next.js 16** (App Router, TypeScript, Tailwind v4), exporté en **statique**
(`output: 'export'`) pour un hébergement simple (Hostinger ou tout hébergeur statique).

## Sections

- **Vision** — problème, solution, personas, périmètre MVP, risques majeurs
- **Architecture & Tech** — cockpit d'architecture interactif (diagramme jouable)
- **Backlog & Features** — 11 epics / 66 user stories
- **Pilotage** — WBS, OBS, RACI, Gantt, méthodologie, plan qualité
- **Business & Stratégie** — proposition de valeur, marché, SWOT, PESTEL, modèle éco, budget
- **Risques** — AMDEC, Risk Map
- **Équipe** — organisation, matrice de compétences, justification

Contenu basé sur les documents projet (Confluence + artefacts de planification).

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build statique

```bash
npm run build      # génère le dossier out/ (HTML/CSS/JS statiques)
```

Le contenu de `out/` est déployable tel quel sur n'importe quel hébergeur de fichiers statiques.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · diagrammes faits maison (SVG/CSS).
