# Documentation Pawrise Care — dossier de conception

Documentation académique (T-ESP-800, Epitech EIP) générée avec [Typst](https://typst.app).
DA claire et imprimable, reprenant l'identité du site (indigo profond + lime).

## Produire les PDF

```bash
bash docs/build.sh
```

Le script :
1. régénère les tableaux depuis `lib/content` (source unique de vérité, partagée avec le site) via `docs/gen.ts` ;
2. compile le **dossier maître** `docs/out/Pawrise-Care-Dossier-de-conception.pdf` ;
3. compile un **PDF par livrable** dans `docs/out/parts/`.

Prérequis : `typst` (0.15+) et Node (`npx tsx`). Les packages Typst (`fletcher`, `cetz`) sont téléchargés automatiquement.

## Structure

```
docs/
  src/
    lib.typ          template (DA, tableaux, encadrés, page de garde, en-têtes/pieds)
    master.typ       assemble toutes les parties en un dossier
    parts/*.typ      une partie par livrable (00 résumé → 99 annexes)
  gen.ts             génère docs/data/*.typ depuis lib/content
  data/*.typ         tableaux générés (NE PAS éditer à la main)
  figures/           diagrammes additionnels éventuels
  out/               PDF produits (dossier maître + parts/)
  build.sh           régénère + compile tout
```

## Contenu (livrables)

Résumé exécutif · Vision & problématique · Marché & stratégie (SWOT, confrontation, PESTEL) ·
Modèle économique & budget · WBS & fonctions · Organisation (OBS, compétences) · RACI ·
Planning & méthodologie (Gantt, jalons) · Plan qualité · Architecture technique · Cloud &
infrastructure · IoT · IA (Care Engine) · Backlog & exigences · Gestion des risques (AMDEC,
Risk Map) · Annexes.

Les diagrammes (architecture, pipeline IA, Gantt) sont vectoriels natifs. La version
interactive complète est sur pawrise-care.com.
