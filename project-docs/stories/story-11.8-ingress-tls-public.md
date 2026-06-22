# Story 11.8: Ingress & TLS public

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 11 — Plateforme, livraison & observabilité (Ops)**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a équipe plateforme,
I want exposer les services via un ingress avec TLS public automatique,
So that offrir un accès public sécurisé sans gestion manuelle des certificats.

## Acceptance Criteria

**Given** un service à exposer
**When** l'ingress est configuré
**Then** le trafic public est routé en HTTPS avec certificat valide (cert-manager/Let's Encrypt), renouvelé automatiquement
**And** le mTLS des colliers (step-ca) reste indépendant.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-11-8]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
