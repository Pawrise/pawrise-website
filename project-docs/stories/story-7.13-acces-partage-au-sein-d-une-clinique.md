# Story 7.13: Accès partagé au sein d'une clinique

Status: drafted

> **Épic 7 — Vet Portal — consultation vétérinaire augmentée**
> Périmètre : Post-MVP
> Sources : brainstorm Vet Portal · MCD/MLD Vet Portal (`project-docs/data-model/`, vision post-MVP dans `data-model/post-mvp/`)

## Story

As a vétérinaire d'une clinique,
I want accéder aux animaux suivis par ma clinique, pas seulement par moi,
So that je remplace un confrère absent sans nouvelle demande du propriétaire.

## Acceptance Criteria

**Given** un propriétaire qui a donné l'accès à une clinique
**When** n'importe quel véto vérifié de cette clinique ouvre le dossier
**Then** il voit les données du périmètre partagé
**And** un véto référent est désigné et peut changer sans nouvelle demande.

## Précisions (à affiner avant d'entrer dans un sprint)

- Évolution du modèle : l'accès devient porté par la clinique (`FOLLOW_UP`), et plus seulement par le véto (`PET_VET_ACCESS`).
- Le propriétaire voit quels vétos de la clinique ont consulté le dossier.
- Un véto qui quitte la clinique perd l'accès.

## Tasks / Subtasks

- [ ] À dériver quand la story entre dans un sprint — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ Hors MVP : à compléter au moment de la planification.
