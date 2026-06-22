# Story 11.4: Observabilité de bout en bout

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 11 — Plateforme, livraison & observabilité (Ops)**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a équipe ops,
I want collecter métriques, logs et traces via OpenTelemetry (Prometheus / Loki / Tempo / Grafana),
So that diagnostiquer rapidement les incidents et suivre les SLA.

## Acceptance Criteria

**Given** des services instrumentés OpenTelemetry
**When** une requête traverse le système
**Then** métriques, logs et traces sont corrélés et visualisables dans Grafana
**And** des alertes se déclenchent au dépassement de seuil (NFR7).

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-11-4]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
