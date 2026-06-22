# Story 2.1: Acquisition des mesures capteurs

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 2 — Collecte, transmission & stockage fiables des données**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want que mon collier mesure régulièrement position, activité et constantes,
So that le suivi de mon animal repose sur des données fiables.

## Acceptance Criteria

**Given** un collier appairé et actif
**When** le firmware exécute son cycle de mesure
**Then** GPS (FR1), activité/immobilité/mouvements brusques (FR2) et température/rythme (FR3) sont échantillonnés à intervalles configurés et horodatés
**And** un capteur défaillant est signalé sans interrompre la collecte des autres mesures.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-2-1]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
