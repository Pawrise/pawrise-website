# Story 4.4: Alerte de sortie de zone

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 4 — Localisation & zones de sécurité (App)**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want être alerté si mon animal sort d'une zone de sécurité,
So that je réagisse rapidement en cas de fugue.

## Acceptance Criteria

**Given** un animal avec au moins une zone de sécurité active
**When** une position détecte le franchissement de la limite de zone
**Then** une notification est envoyée au propriétaire avec la position et l'heure (FR21, FR22)
**And** des franchissements répétés ne génèrent pas de spam (regroupement/anti-rebond).

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-4-4]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
