# Story 2.6: Stockage en séries temporelles et agrégats

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 2 — Collecte, transmission & stockage fiables des données**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a système,
I want stocker les mesures en séries temporelles avec agrégats,
So that l'historique long terme et les affichages soient performants.

## Acceptance Criteria

**Given** des données normalisées
**When** elles sont persistées
**Then** elles sont enregistrées en séries temporelles avec historique long terme (FR9) et des agrégats (jour/semaine) sont générés (FR10)
**And** une requête d'historique sur une plage donnée répond dans les budgets de performance définis (NFR6).

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-2-6]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
