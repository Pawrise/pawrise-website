# Story 6.2: Garde-fous anti-diagnostic

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 6 — Assistant IA conversationnel & escalade**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a responsable produit,
I want que l'IA n'émette jamais de diagnostic médical,
So that le produit respecte ses contraintes éthiques et réglementaires.

## Acceptance Criteria

**Given** une question induisant une demande de diagnostic ou de traitement
**When** l'assistant formule sa réponse
**Then** il refuse de diagnostiquer, explique sa limite et recommande une consultation (FR17, NFR5)
**And** ce comportement est vérifié par un jeu de tests d'invites sensibles.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-6-2]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
