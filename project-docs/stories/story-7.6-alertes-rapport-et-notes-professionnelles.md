# Story 7.6: Alertes, rapport et notes professionnelles

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 7 — Vet Portal — consultation vétérinaire augmentée**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md` · MCD/MLD Vet Portal (`project-docs/data-model/`) · doc MCD App-DB (Notion, RG1–RG76)

## Story

As a vétérinaire,
I want consulter les alertes, compléter le rapport et ajouter des notes,
So that j'enrichisse le dossier de mon expertise.

## Acceptance Criteria

**Given** un dossier animal avec alertes générées
**When** le vétérinaire les consulte et annote
**Then** il peut compléter le rapport automatique et ajouter des notes horodatées attribuées à son compte (FR27)
**And** les notes sont conservées dans l'historique et visibles lors des consultations suivantes.

## Précisions MVP (brainstorm Vet Portal)

- [ ] **Note privée** : visible uniquement par le véto qui l'a écrite, modifiable par lui.
- [ ] **Commentaire** : visible par le propriétaire dans le carnet de santé de l'animal (entrée de consultation ou document joint, source véto).
- [ ] Les deux exigent un accès actif à l'animal (suivi accepté ou téléconsultation prise en charge).
- [ ] Après la révocation de l'accès, le véto ne peut plus en créer.
- [ ] La suppression de l'animal dans l'app supprime ses notes privées.

**Données :** `VET_NOTE` (note privée) · `HEALTH_ENTRY` / `DOCUMENT` (commentaire) — base commune au MVP, via la Core API  
**Règles :** RGV6, RGV7, RGV8 · RG68, RG72

**À valider dans le modèle de données :**
- ⚠️ le véto peut-il relire ses notes privées après la révocation de l'accès ? (RGPD)

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-7-6]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
