# Story 7.9: Liste de mes patients

Status: drafted

> **Épic 7 — Vet Portal — consultation vétérinaire augmentée**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md` · MCD/MLD Vet Portal (`project-docs/data-model/`) · doc MCD App-DB (Notion, RG1–RG76)

## Story

As a vétérinaire partenaire,
I want voir la liste des animaux qui me sont confiés,
So that j'accède rapidement à leur dossier.

## Acceptance Criteria

**Given** un véto au compte vérifié
**When** il ouvre le Portail
**Then** il voit les animaux pour lesquels il a un accès actif et les téléconsultations qu'il a prises
**And** un animal dont l'accès est révoqué disparaît de la liste.

## Précisions MVP (brainstorm Vet Portal)

- [ ] Chaque ligne affiche le nom et l'espèce de l'animal, le propriétaire, et la date de la dernière alerte ou donnée.
- [ ] Les demandes d'accès en attente apparaissent dans une section à part, avec les boutons accepter / refuser (Story 7.2).
- [ ] Un clic sur un animal ouvre sa vue patient (Story 7.3).
- [ ] Après une révocation, l'animal disparaît immédiatement et son dossier n'est plus accessible.
- [ ] La liste se filtre par nom d'animal ou de propriétaire.

**Données :** `PET_VET_ACCESS`, `ESCALATION`, `PET`, `ALERT` — base commune au MVP, via la Core API  
**Règles :** RG41

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
