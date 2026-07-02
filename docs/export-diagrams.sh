#!/usr/bin/env bash
# Exporte tous les diagrammes du dossier de conception en SVG, prêts à coller
# dans une présentation. Sortie : docs/out/diagrammes/
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
OUT="docs/out/diagrammes"
mkdir -p "$OUT"

echo "Diagrammes pleine page (WBS, Gantt) : la page 2 est le diagramme"
typst compile --root docs --format svg --pages 2 docs/src/diagrams/wbs-arbre.typ "$OUT/wbs-arbre.svg"
typst compile --root docs --format svg --pages 2 docs/src/diagrams/gantt.typ "$OUT/gantt.svg"

echo "Diagrammes autonomes (OBS, matrice de compétences, RACI)"
typst compile --root docs --format svg docs/src/diagrams/obs-organigramme.typ "$OUT/obs-organigramme.svg"
typst compile --root docs --format svg docs/src/diagrams/matrice-competences.typ "$OUT/matrice-competences.svg"
typst compile --root docs --format svg docs/src/diagrams/raci.typ "$OUT/raci-{p}.svg"
mv "$OUT/raci-1.svg" "$OUT/raci-standard.svg"
mv "$OUT/raci-2.svg" "$OUT/raci-stricte.svg"

echo "Figures existantes (architecture, logo)"
cp docs/figures/architecture-overview.svg "$OUT/architecture-systeme.svg"
cp docs/figures/architecture-plateforme.svg "$OUT/architecture-plateforme.svg"
cp docs/figures/logo.svg "$OUT/logo.svg"

echo "OK : SVG dans $OUT/"
