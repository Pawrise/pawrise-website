# Story 1.7: Notifications transactionnelles (email/SMS)

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 1 — Onboarding, comptes & appairage du collier**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want recevoir les emails/SMS importants (vérification, réinitialisation, alertes santé),
So that activer mon compte et être prévenu à temps.

## Acceptance Criteria

**Given** un évènement transactionnel (inscription, reset, alerte)
**When** le backend le déclenche
**Then** un email/SMS est envoyé via le provider et son statut de délivrabilité est suivi
**And** un échec d'envoi est retenté puis tracé.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-1-7]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
