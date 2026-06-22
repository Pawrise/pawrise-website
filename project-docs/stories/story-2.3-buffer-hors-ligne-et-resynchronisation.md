# Story 2.3: Buffer hors-ligne et resynchronisation

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 2 — Collecte, transmission & stockage fiables des données**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want que les données soient conservées sans perte en cas de coupure réseau,
So that aucun trou n'apparaisse dans l'historique de mon animal.

## Acceptance Criteria

**Given** un collier qui perd la connexion BLE/cellulaire
**When** des mesures sont produites pendant la coupure
**Then** elles sont stockées localement puis resynchronisées dans l'ordre au retour du signal (FR5, NFR1)
**And** en cas de buffer plein, la politique de rétention documentée s'applique et l'évènement est journalisé.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-2-3]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
