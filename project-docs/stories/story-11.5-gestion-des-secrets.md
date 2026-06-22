# Story 11.5: Gestion des secrets

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 11 — Plateforme, livraison & observabilité (Ops)**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a équipe plateforme,
I want chiffrer les secrets versionnés avec SOPS + age,
So that ne jamais exposer de secret en clair tout en restant GitOps-friendly.

## Acceptance Criteria

**Given** un secret applicatif
**When** il est commité dans le dépôt GitOps
**Then** il est chiffré (SOPS + age) et n'est déchiffré que dans le cluster
**And** aucun secret en clair n'apparaît jamais dans Git.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-11-5]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
