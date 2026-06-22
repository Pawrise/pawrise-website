# Story 11.2: Livraison continue GitOps

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 11 — Plateforme, livraison & observabilité (Ops)**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a équipe plateforme,
I want déployer les services via Helm et Argo CD (GitOps),
So that que chaque changement fusionné se déploie automatiquement et que le cluster reflète l'état décrit dans Git.

## Acceptance Criteria

**Given** un chart Helm versionné
**When** une release est promue sur la branche d'environnement
**Then** Argo CD synchronise le cluster sur cet état (app-of-apps)
**And** un rollback se fait en revenant à la révision Git précédente.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-11-2]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
