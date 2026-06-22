# Story 10.5: Pool de rémunération vétérinaire (part d'abonnement, plafonné) (MVP — règle de coût)

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 10 — Téléconsultation d'orientation & triage vétérinaire**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a responsable produit,
I want rémunérer les vétérinaires via un pool alimenté par une part d'abonnement,
So that le coût vétérinaire soit plafonné et qu'aucun utilisateur ne coûte plus que son abonnement.

## Acceptance Criteria

**Given** des téléconsultations d'orientation réalisées sur une période
**When** la rémunération est calculée
**Then** elle est prélevée sur un **pool = part fixe (%) du revenu d'abonnement** et **distribuée au prorata de l'activité, pondérée par la réactivité et la qualité** (FR41)
**And** le coût vétérinaire total reste **borné au % défini du revenu** (aucun dépassement par utilisateur) ; la part « réactivité » accélère le service sans ouvrir la marge.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-10-5]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
