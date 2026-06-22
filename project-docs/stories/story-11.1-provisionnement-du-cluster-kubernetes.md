# Story 11.1: Provisionnement du cluster Kubernetes

Status: drafted
<!-- AC figées depuis epics.md. Tasks/Subtasks + Dev Notes à compléter après l'architecture. -->

> **Épic 11 — Plateforme, livraison & observabilité (Ops)**
> Périmètre : —
> Sources : `_bmad-output/planning-artifacts/epics.md` · `_bmad-output/planning-artifacts/PRD.md`

## Story

As a équipe plateforme,
I want provisionner le cluster Kubernetes via de l'IaC (kubeadm + Terraform/Ansible),
So that disposer d'un socle reproductible et versionné sans action manuelle.

## Acceptance Criteria

**Given** un dépôt d'infrastructure-as-code
**When** on applique la configuration
**Then** le cluster kubeadm est créé sur Hetzner avec sauvegarde etcd planifiée
**And** aucune modification manuelle (kubectl apply) n'est nécessaire.

## Tasks / Subtasks

- [ ] À dériver après l'architecture — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ À compléter après l'architecture : patterns/contraintes applicables, composants & source tree à toucher, standards de test.

### Project Structure Notes

- ⏳ À aligner sur la future architecture (chemins, modules, nommage).

### References

- [Source: _bmad-output/planning-artifacts/epics.md#story-11-1]
- [Source: _bmad-output/planning-artifacts/PRD.md]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
