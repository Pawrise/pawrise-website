# Story 7.2: Accès patient autorisé

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 7 — Vet Portal — consultation vétérinaire augmentée**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md` · MCD/MLD Vet Portal (`project-docs/data-model/`) · doc MCD App-DB (Notion, RG1–RG76)

## Story

As a vétérinaire,
I want accéder au dossier d'un animal avec l'autorisation du propriétaire,
So that je respecte la confidentialité tout en consultant les données utiles.

## Acceptance Criteria

**Given** un vétérinaire authentifié et un propriétaire ayant accordé l'accès
**When** le vétérinaire ouvre le dossier de l'animal
**Then** il accède aux données autorisées via l'API vet dédiée (FR11, FR24)
**And** sans consentement valide, l'accès est refusé et journalisé (NFR4).

## Précisions MVP (brainstorm Vet Portal)

- [ ] Depuis l'app, le propriétaire demande le suivi par un véto partenaire de l'annuaire et choisit ce qu'il partage (activité, sommeil, constantes, GPS).
- [ ] Le véto reçoit une notification et accepte ou refuse ; le propriétaire est notifié de la réponse.
- [ ] Avant acceptation, le véto ne voit que le nom et l'espèce de l'animal, le propriétaire et le périmètre demandé.
- [ ] Sans réponse sous 7 jours, la demande expire. Une demande refusée ou expirée n'est jamais rouverte : il faut en faire une nouvelle.
- [ ] Une fois acceptée, le véto ne voit que les données du périmètre partagé ; le propriétaire peut révoquer l'accès à tout moment.
- [ ] Chaque consultation du dossier par le véto est journalisée.

**Données :** `PET_VET_ACCESS` (access_source = propriétaire) — base commune au MVP, via la Core API  
**Règles :** RG39, RG40, RG41, RG45

**À valider dans le modèle de données :**
- ⚠️ ajouter à `PET_VET_ACCESS` un statut (en attente, actif, refusé, expiré, révoqué), la date de réponse et le périmètre partagé.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-7-2]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
