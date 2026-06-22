# Story 10.1: Génération automatique du PDF normalisé au handoff

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 10 — Téléconsultation d'orientation & triage vétérinaire**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a vétérinaire,
I want recevoir automatiquement une fiche normalisée du contexte de l'animal,
So that je n'aie pas à lire l'historique de l'app ni à connaître Pawrise.

## Acceptance Criteria

**Given** un handoff déclenché par l'IA (Story 6.3)
**When** le relais vers un vétérinaire est créé
**Then** un **PDF normalisé** (profil + chronologie + anomalies + résumé non-diagnostique) est **généré automatiquement** et attaché à la demande (FR36, FR35)
**And** le format est identique à celui produit par le Vet Portal (Story 7.7), indépendant de tout logiciel métier.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-10-1]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
