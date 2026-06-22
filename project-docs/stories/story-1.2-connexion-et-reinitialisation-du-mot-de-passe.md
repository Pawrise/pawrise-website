# Story 1.2: Connexion et réinitialisation du mot de passe

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 1 — Onboarding, comptes & appairage du collier**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a propriétaire,
I want me connecter et réinitialiser mon mot de passe,
So that je récupère l'accès à mon compte en cas d'oubli.

## Acceptance Criteria

**Given** un compte vérifié existant
**When** l'utilisateur saisit des identifiants corrects
**Then** il est authentifié et une session sécurisée est ouverte
**And** une demande de réinitialisation envoie un lien à durée de vie limitée, et 5 échecs consécutifs verrouillent temporairement la connexion.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-1-2]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
