# Story 11.6: PKI interne des colliers

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 11 — Plateforme, livraison & observabilité (Ops)**
> Périmètre : Post-MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a équipe sécurité,
I want émettre, renouveler et révoquer les certificats des colliers via step-ca,
So that garantir l'authentification mutuelle (mTLS) de toute la flotte IoT.

## Acceptance Criteria

**Given** un collier à appairer
**When** il s'enrôle auprès de la PKI
**Then** step-ca lui délivre un certificat et le broker MQTT fait confiance à la racine
**And** un collier perdu ou volé voit son certificat révoqué (CRL/OCSP).

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-11-6]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
