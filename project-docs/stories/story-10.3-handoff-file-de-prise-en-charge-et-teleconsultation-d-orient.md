# Story 10.3: Handoff → file de prise en charge et téléconsultation d'orientation par chat (MVP)

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 10 — Téléconsultation d'orientation & triage vétérinaire**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want être pris en charge par un vétérinaire de garde via un chat sécurisé,
So that j'obtienne une orientation humaine rapide après le handoff de l'IA.

## Acceptance Criteria

**Given** un handoff déclenché par l'IA (Story 6.3)
**When** la demande entre dans la **file de prise en charge** des vétérinaires de garde disponibles
**Then** un vétérinaire **prend la main** et un canal de **chat chiffré** s'ouvre (mobile ou web), le PDF normalisé lui étant accessible (FR37, FR40, NFR3)
**And** l'échange reste **non-diagnostique (orientation)**, respecte le consentement (Epic 9) et est journalisé ; si aucun vétérinaire n'est disponible, une prise de contact différée est proposée.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-10-3]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
