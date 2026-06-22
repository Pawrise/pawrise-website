# Story 5.2: Détection d'anomalies d'activité et de sommeil

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 5 — Détection d'anomalies & alertes santé**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want que le système détecte les écarts de comportement de mon animal,
So that je sois informé d'un changement potentiellement important.

## Acceptance Criteria

**Given** un animal avec une baseline établie
**When** les mesures s'écartent significativement de la normale (inactivité prolongée, agitation, troubles du sommeil)
**Then** une anomalie est enregistrée avec son contexte et son niveau (FR14)
**And** une anomalie isolée non confirmée n'escalade pas immédiatement (seuil/persistance).

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-5-2]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
