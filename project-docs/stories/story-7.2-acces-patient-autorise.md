# Story 7.2: Accès patient autorisé

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 7 — Vet Portal — consultation vétérinaire augmentée**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a vétérinaire,
I want accéder au dossier d'un animal avec l'autorisation du propriétaire,
So that je respecte la confidentialité tout en consultant les données utiles.

## Acceptance Criteria

**Given** un vétérinaire authentifié et un propriétaire ayant accordé l'accès
**When** le vétérinaire ouvre le dossier de l'animal
**Then** il accède aux données autorisées via l'API vet dédiée (FR11, FR24)
**And** sans consentement valide, l'accès est refusé et journalisé (NFR4).

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-7-2]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
