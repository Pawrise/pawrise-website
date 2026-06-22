# Story 2.4: Transmission sécurisée et intègre

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 2 — Collecte, transmission & stockage fiables des données**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want que les données de mon animal soient transmises de façon authentifiée et intègre,
So that elles ne puissent être ni usurpées ni altérées.

## Acceptance Criteria

**Given** un collier transmettant vers le backend
**When** un lot de mesures est envoyé
**Then** le collier est authentifié, le message est chiffré, horodaté et son intégrité vérifiée (FR6, NFR3)
**And** un message dont l'intégrité ou l'authentification échoue est rejeté et un réessai automatique est déclenché (NFR6).

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-2-4]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
