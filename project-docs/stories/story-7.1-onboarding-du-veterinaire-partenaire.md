# Story 7.1: Onboarding du vétérinaire partenaire

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 7 — Vet Portal — consultation vétérinaire augmentée**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md` · MCD/MLD Vet Portal (`project-docs/data-model/`) · doc MCD App-DB (Notion, RG1–RG76)

## Story

As a vétérinaire,
I want créer un compte partenaire vérifié,
So that j'accède au Vet Portal de façon sécurisée.

## Acceptance Criteria

**Given** un vétérinaire invité/candidat
**When** il complète l'onboarding (identité professionnelle, vérification)
**Then** un compte vétérinaire est créé avec un rôle distinct du propriétaire (FR34, contrôle d'accès)
**And** un compte non vérifié n'accède à aucune donnée patient.

## Précisions MVP (brainstorm Vet Portal)

- [ ] Le véto saisit son numéro ordinal, son nom, son prénom, son email et un mot de passe.
- [ ] Le numéro et le nom sont contrôlés dans l'annuaire de l'Ordre ; le compte passe en attente, vérifié ou refusé.
- [ ] Tant que le compte n'est pas vérifié, il n'accède à aucune donnée patient et ne peut pas se déclarer disponible.
- [ ] À la vérification, la fiche du véto dans l'annuaire de l'app est créée ou mise à jour et passe partenaire.

**Données :** `VET_USER` (compte du Portail) · `VETERINARIAN` (annuaire) — base commune au MVP, via la Core API  
**Règles :** RGV1, RGV2, RGV3 · RG37, RG38

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-7-1]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
