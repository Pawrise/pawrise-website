# Story 10.3: Handoff → file de prise en charge et téléconsultation d'orientation par chat (MVP)

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 10 — Téléconsultation d'orientation & triage vétérinaire**
> Périmètre : MVP
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md` · MCD/MLD Vet Portal (`project-docs/data-model/`) · doc MCD App-DB (Notion, RG1–RG76)

## Story

As a propriétaire,
I want être pris en charge par un vétérinaire de garde via un chat sécurisé,
So that j'obtienne une orientation humaine rapide après le handoff de l'IA.

## Acceptance Criteria

**Given** un handoff déclenché par l'IA (Story 6.3)
**When** la demande entre dans la **file de prise en charge** des vétérinaires de garde disponibles
**Then** un vétérinaire **prend la main** et un canal de **chat chiffré** s'ouvre (mobile ou web), le PDF normalisé lui étant accessible (FR37, FR40, NFR3)
**And** l'échange reste **non-diagnostique (orientation)**, respecte le consentement (Epic 9) et est journalisé ; si aucun vétérinaire n'est disponible, une prise de contact différée est proposée.

## Précisions MVP (brainstorm Vet Portal)

- [ ] Côté Vet Portal, les demandes en attente sont visibles par tous les vétos vérifiés **et disponibles**, triées par urgence puis par ancienneté.
- [ ] Le premier véto qui prend une demande l'obtient : la prise est atomique, la demande disparaît de la file des autres.
- [ ] La prise en charge donne accès aux seules données partagées pour cette demande, avec le résumé et le PDF du handoff.
- [ ] Sans prise en charge sous 24 h, la demande expire ; le propriétaire est notifié et orienté vers son véto traitant ou les urgences.
- [ ] Une demande expirée ou clôturée n'est jamais rouverte.

**Données :** `ESCALATION`, `PET_VET_ACCESS` (access_source = escalade IA), `VET_USER.is_available` — base commune au MVP, via la Core API  
**Règles :** RGV4 · RG54, RG55, RG56, RG40

**À valider dans le modèle de données :**
- ⚠️ ajouter à `ESCALATION` le statut expiré, `taken_at` et `urgency_level`.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-10-3]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
