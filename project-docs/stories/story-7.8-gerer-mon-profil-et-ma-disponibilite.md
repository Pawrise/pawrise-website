# Story 7.8: Gérer mon profil et ma disponibilité

Status: drafted

> **Épic 7 — Vet Portal — consultation vétérinaire augmentée**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md` · MCD/MLD Vet Portal (`project-docs/data-model/`) · doc MCD App-DB (Notion, RG1–RG76)

## Story

As a vétérinaire partenaire,
I want mettre à jour mon profil et indiquer si je suis disponible,
So that les propriétaires voient des informations à jour et que je ne reçoive des téléconsultations que quand je peux répondre.

## Acceptance Criteria

**Given** un véto au compte vérifié
**When** il modifie son profil ou bascule sa disponibilité
**Then** les changements de profil sont repris dans l'annuaire
**And** seuls les vétos disponibles voient la file des téléconsultations (Story 10.3).

## Précisions MVP (brainstorm Vet Portal)

- [ ] Le véto modifie son nom, son téléphone, son email et ses cabinets d'exercice ; le numéro ordinal n'est pas modifiable.
- [ ] Chaque modification met à jour la fiche du véto dans l'annuaire : le Portail fait foi pour un partenaire.
- [ ] Un interrupteur « disponible / indisponible » est visible en permanence dans le Portail.
- [ ] Passer indisponible retire le véto de la file, sans lui retirer les demandes qu'il a déjà prises.
- [ ] Un compte non vérifié ne peut pas se déclarer disponible.

**Données :** `VET_USER` · `VETERINARIAN`, `CLINIC` / exercer — base commune au MVP, via la Core API  
**Règles :** RGV1, RGV3, RGV4 · RG38

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: project-docs/data-model/mcd-vet-db.drawio]
- [Source: Notion — Pawrise Care MCD App-DB]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
