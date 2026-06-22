# Story 11.3: Intégration continue

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 11 — Plateforme, livraison & observabilité (Ops)**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a développeur,
I want que chaque commit déclenche build, tests et publication d'images via GitHub Actions,
So that détecter les régressions tôt et produire des artefacts prêts à déployer.

## Acceptance Criteria

**Given** une pull request
**When** la CI s'exécute
**Then** build + tests + lint + image conteneur sont produits (cache sccache pour Rust)
**And** un échec de la CI bloque la fusion.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-11-3]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
