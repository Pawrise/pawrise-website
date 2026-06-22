# Story 5.1: Modèle de comportement normal par animal

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 5 — Détection d'anomalies & alertes santé**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a système,
I want établir une baseline de comportement propre à chaque animal,
So that les anomalies soient détectées par rapport à sa propre normalité.

## Acceptance Criteria

**Given** un historique suffisant pour un animal
**When** le moteur calcule la baseline d'activité/sommeil
**Then** un profil de comportement normal est stocké et mis à jour dans le temps (FR14)
**And** tant que l'historique est insuffisant, l'animal est marqué « apprentissage en cours » et aucune anomalie n'est levée à tort.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-5-1]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
