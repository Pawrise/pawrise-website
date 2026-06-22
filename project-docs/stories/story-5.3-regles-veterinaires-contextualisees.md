# Story 5.3: Règles vétérinaires contextualisées

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 5 — Détection d'anomalies & alertes santé**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a système,
I want appliquer des règles vétérinaires validées contextualisées par race/âge/historique,
So that les alertes soient pertinentes et non génériques.

## Acceptance Criteria

**Given** une anomalie détectée et le profil de l'animal
**When** le moteur applique l'expert system
**Then** la pertinence est contextualisée par race, âge et historique (FR15) et l'écart est qualifié (vigilance/action)
**And** aucune sortie n'est formulée comme un diagnostic (NFR5).

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-5-3]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
