# Story 2.5: Ingestion et normalisation backend

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 2 — Collecte, transmission & stockage fiables des données**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a système,
I want ingérer, normaliser, filtrer et dédupliquer les données reçues,
So that les données stockées soient propres et cohérentes.

## Acceptance Criteria

**Given** des lots de mesures reçus par l'API d'ingestion
**When** le backend les traite
**Then** les doublons, retards et incohérences sont gérés et les données normalisées (FR8)
**And** les données rejetées sont journalisées avec leur cause pour observabilité.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-2-5]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
