# Story 7.10: Échanger avec le propriétaire et clôturer

Status: drafted

> **Épic 7 — Vet Portal — consultation vétérinaire augmentée**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md` · MCD/MLD Vet Portal (`project-docs/data-model/`) · doc MCD App-DB (Notion, RG1–RG76)

## Story

As a vétérinaire,
I want échanger par messages avec le propriétaire puis clôturer la demande avec une conclusion,
So that le propriétaire reparte avec une orientation claire.

## Acceptance Criteria

**Given** une téléconsultation que le véto a prise (Story 10.3)
**When** il échange avec le propriétaire puis clôture
**Then** le propriétaire reçoit les messages et la conclusion dans l'app
**And** une demande clôturée n'accepte plus de messages.

## Précisions MVP (brainstorm Vet Portal)

- [ ] Seul le véto qui a pris la demande peut y écrire ; le propriétaire est notifié de chaque message.
- [ ] L'échange reste une orientation, non diagnostique.
- [ ] La clôture exige une conclusion visible par le propriétaire (par ex. surveiller, consulter le véto traitant, urgence).
- [ ] Après la clôture, plus aucun message n'est possible et l'accès ouvert pour cette demande se ferme.
- [ ] Une question de suivi posée sous 72 h crée une **nouvelle** demande, liée à la précédente ; le véto qui la prend voit l'historique de la précédente.

**Données :** `CONVERSATION`, `MESSAGE` (sender_role = véto), `ESCALATION` — base commune au MVP, via la Core API  
**Règles :** RG53, RG54, RG57, RG58, RG59

**À valider dans le modèle de données :**
- ⚠️ ajouter à `ESCALATION` les champs `conclusion` et la demande précédente (faire_suite).

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
