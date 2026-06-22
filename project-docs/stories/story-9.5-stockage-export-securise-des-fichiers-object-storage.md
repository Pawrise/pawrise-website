# Story 9.5: Stockage & export sécurisé des fichiers (Object Storage)

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 9 — Conformité, sécurité & confidentialité (RGPD)**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want que mes exports RGPD et documents (PDF) soient stockés et accessibles de façon sécurisée,
So that récupérer mes données et pièces en confiance.

## Acceptance Criteria

**Given** une demande d'export ou un PDF généré
**When** le fichier est produit
**Then** il est déposé sur le stockage objet (S3-compatible) et accessible via une URL signée à durée limitée
**And** un fichier expiré ou supprimé n'est plus accessible.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-9-5]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
