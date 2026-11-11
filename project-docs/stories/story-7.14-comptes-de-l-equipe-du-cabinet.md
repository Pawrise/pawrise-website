# Story 7.14: Comptes de l'équipe du cabinet

Status: drafted

> **Épic 7 — Vet Portal — consultation vétérinaire augmentée**
> Périmètre : Post-MVP
> Sources : brainstorm Vet Portal · MCD/MLD Vet Portal (`project-docs/data-model/`, vision post-MVP dans `data-model/post-mvp/`)

## Story

As a vétérinaire responsable d'un cabinet,
I want créer des comptes pour mes ASV et ma secrétaire,
So that ils gèrent l'agenda et les rendez-vous à ma place.

## Acceptance Criteria

**Given** un véto vérifié responsable d'un cabinet
**When** il invite un membre de son équipe
**Then** le membre accède au Portail avec un rôle restreint (agenda, rendez-vous)
**And** il n'accède jamais aux données de santé des animaux.

## Précisions (à affiner avant d'entrer dans un sprint)

- Le compte n'a pas de numéro ordinal : `ordinal_number` devient nullable, obligatoire pour le rôle véto seulement.
- Le responsable peut désactiver un compte à tout moment.

## Tasks / Subtasks

- [ ] À dériver quand la story entre dans un sprint — relier chaque tâche à un AC (AC: #)

## Dev Notes

- ⏳ Hors MVP : à compléter au moment de la planification.
