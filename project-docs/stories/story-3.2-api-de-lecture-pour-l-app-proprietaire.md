# Story 3.2: API de lecture pour l'app propriétaire

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 3 — Suivi bien-être & activité (App)**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a application mobile,
I want récupérer les indicateurs d'un animal via une API dédiée,
So that l'écran bien-être s'alimente de façon sécurisée.

## Acceptance Criteria

**Given** un propriétaire authentifié et propriétaire de l'animal
**When** l'app appelle l'API bien-être
**Then** elle reçoit activité, sommeil et constantes agrégés, limités à ses propres animaux (FR11, contrôle d'accès)
**And** une tentative d'accès à un animal non possédé est refusée (403).

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-3-2]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
