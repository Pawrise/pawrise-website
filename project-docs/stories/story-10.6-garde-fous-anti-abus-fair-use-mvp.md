# Story 10.6: Garde-fous anti-abus & fair-use (MVP)

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 10 — Téléconsultation d'orientation & triage vétérinaire**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a responsable produit,
I want limiter les abus d'escalade,
So that le service reste soutenable et de qualité.

## Acceptance Criteria

**Given** un utilisateur sollicitant des orientations vétérinaires
**When** l'IA filtre avant escalade et que le quota fair-use par période est suivi
**Then** seules les situations pertinentes escaladent, et au-delà du **quota fair-use** l'accès passe en **file basse priorité** ou en **add-on** (FR42)
**And** les seuils sont configurables et les dépassements journalisés.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-10-6]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
