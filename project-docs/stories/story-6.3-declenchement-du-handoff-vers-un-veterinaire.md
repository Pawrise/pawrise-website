# Story 6.3: Déclenchement du handoff vers un vétérinaire

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 6 — Assistant IA conversationnel & escalade**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want que l'IA déclenche un relais vers un vétérinaire en cas de doute,
So that je bénéficie d'un avis professionnel sans repartir de zéro.

## Acceptance Criteria

**Given** une situation à risque détectée par l'IA ou demandée par l'utilisateur
**When** le handoff est déclenché
**Then** le relais vers le parcours de téléconsultation (Epic 10) est amorcé en passant le contexte de l'animal (FR17, FR23, FR36)
**And** si aucun vétérinaire n'est disponible, une alternative (prise de contact différée) est proposée.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-6-3]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
