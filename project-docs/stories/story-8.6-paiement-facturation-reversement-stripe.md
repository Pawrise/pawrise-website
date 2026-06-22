# Story 8.6: Paiement, facturation & reversement (Stripe)

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 8 — Abonnement, facturation & support**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want payer mon abonnement et recevoir mes factures de façon sécurisée,
So that accéder au service sans friction tout en finançant le pool vété.

## Acceptance Criteria

**Given** un abonnement choisi
**When** le paiement est confirmé par Stripe (webhook signé)
**Then** l'abonnement est activé, la facture émise et la part du pool vété provisionnée
**And** un échec ou une contestation de paiement met l'abonnement dans l'état adéquat sans perte de données.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-8-6]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
