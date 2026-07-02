#!/usr/bin/env bash
# Génère le dossier de conception Pawrise Care (PDF) : dossier maître + un PDF
# par livrable. Les tableaux sont d'abord régénérés depuis lib/content.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Génération des tableaux depuis lib/content"
npx tsx docs/gen.ts

echo "→ Compilation du dossier maître"
typst compile --root docs docs/src/master.typ "docs/out/Pawrise-Care-Dossier-de-conception.pdf"

echo "→ Compilation des livrables séparés"
mkdir -p docs/out/parts

titre() {
  case "$1" in
    00-resume) echo "Résumé exécutif" ;;
    01-vision) echo "Vision & problématique" ;;
    02-marche) echo "Marché & stratégie" ;;
    03-economie) echo "Modèle économique & budget" ;;
    04-wbs) echo "WBS & fonctions" ;;
    05-prd) echo "Exigences produit (PRD)" ;;
    05-organisation) echo "Organisation & compétences" ;;
    06-raci) echo "Matrice RACI" ;;
    07-planning) echo "Planning & méthodologie" ;;
    08-qualite) echo "Plan qualité" ;;
    09-risques) echo "Gestion des risques" ;;
    10-architecture) echo "Architecture technique" ;;
    11-cloud) echo "Cloud & infrastructure" ;;
    12-iot) echo "IoT · collier connecté" ;;
    13-ia) echo "IA · Care Engine" ;;
    99-annexes) echo "Annexes" ;;
    *) echo "$1" ;;
  esac
}

for f in docs/src/parts/*.typ; do
  name="$(basename "$f" .typ)"
  title="$(titre "$name")"
  tmp="docs/src/_standalone.typ"
  printf '#import "lib.typ": conf\n#show: conf.with(doc-title: "%s · Pawrise Care")\n#include "parts/%s.typ"\n' "$title" "$name" > "$tmp"
  typst compile --root docs "$tmp" "docs/out/parts/${name}.pdf"
  rm -f "$tmp"
done

echo "OK : PDF dans docs/out/"
