---
stepsCompleted: ["generated-from-confluence"]
inputDocuments:
  - "Confluence PC: 🐾 Pawrise Care (homepage)"
  - "Confluence PC: Pawrise Care – High-Level Functions"
  - "Confluence PC: Plan d'actions (Vet Portal & validation terrain)"
  - "Confluence PC: Justification & Compétences"
  - "Confluence PC: Méthodologie / Pourquoi Scrum / Monolith vs Macroservices"
project: "Pawrise Care"
language: "French"
generatedBy: "BMAD bmm — product-brief (assisté Claude Code, à partir du contexte Confluence)"
---

# Pawrise Care — Product Brief

## 1. Résumé exécutif

**Pawrise Care** est un **collier connecté intelligent** pour le suivi santé et bien-être des animaux de compagnie. Le système combine un dispositif IoT (capteurs GPS, activité, température, rythme cardiaque), une plateforme backend de séries temporelles, un **moteur d'analyse IA (Pawrise Care Engine — LLM + RAG)**, une **application mobile propriétaire**, et un **Vet Portal** destiné aux vétérinaires.

Positionnement clé et non-négociable : **l'IA n'émet jamais de diagnostic médical**. Elle structure, contextualise et oriente, et incite systématiquement à consulter un vétérinaire en cas de doute. Le produit est un **outil d'orientation et de pré-consultation**, pas un substitut clinique.

Cadre : projet Epitech **T-ESP-800**, équipe de **9 membres**, horizon **2 ans**. État actuel : phase **Conception / Keynote**, avec une phase de validation terrain vétérinaire en cours.

## 2. Problème

- Les propriétaires d'animaux manquent de visibilité continue et objective sur l'état de santé et le comportement de leur animal entre deux consultations.
- Les vétérinaires souffrent d'un **manque d'historique structuré**, d'une **chronologie imprécise des symptômes**, et d'une **communication difficile** avec les propriétaires lors des consultations.
- Les signaux faibles (fatigue, baisse d'activité, anomalies de sommeil) sont détectés trop tard.

## 3. Solution

Un collier capteur transmet en continu des données vers le backend ; le moteur IA établit un profil de comportement normal par animal, détecte les anomalies, et alimente :
- une **app propriétaire** (score de bien-être, localisation, alertes, chat IA) ;
- un **Vet Portal** (timeline médicale structurée, données brutes, résumé contextualisé non-diagnostique, export PDF).

## 4. Utilisateurs cibles

| Persona | Besoin principal |
| --- | --- |
| **Propriétaire d'animal** | Suivi rassurant et lisible, localisation, alertes en cas de signal faible |
| **Vétérinaire partenaire** | Historique structuré et contextualisé pour accélérer/préciser la consultation, sans substitution clinique |
| **Administrateur / Système** | Gestion des comptes, provisioning matériel, conformité |

## 5. Objectifs & métriques de succès (phase actuelle)

- ≥ **15 réponses vétérinaires** analysables (cible 30) pour valider le terrain.
- **5–8 vétérinaires volontaires** pour entretiens qualitatifs.
- Définition formelle du **Vet Portal MVP**.
- Décisions produit déjà actées : **pas de « score global de santé »** affiché côté vet (risque d'interprétation), priorité à la **chronologie**, **séparation stricte App propriétaire / Vet Portal**, contextualisation systématique des données.

## 6. Périmètre MVP (orientation)

**Dans le MVP :** onboarding + appairage collier, collecte/transmission fiable des données, écran bien-être de base, localisation GPS + zones de sécurité, alertes santé essentielles, chat IA (RAG) avec garde-fous, Vet Portal (timeline + résumé contextualisé + export PDF), conformité RGPD de base.

**Hors MVP (différé) :** scoring de santé avancé multi-métriques, intégrations logiciels métiers vétérinaires, marketplace de vétérinaires, fonctionnalités sociales.

## 7. Contraintes & hypothèses

- **Éthique / réglementaire :** aucun diagnostic ni décision médicale automatisés ; RGPD ; traçabilité des alertes.
- **Technique :** approche **monolith-first → macroservices** ; séries temporelles ; communication collier BLE/cellulaire en environnement contraint (basse consommation, perte de signal).
- **Équipe :** pôles IoT/Hardware, Fullstack/Backend, IA/Data, Design/Market, Cloud/DevOps ; PO = Yassine.

## 8. Risques majeurs

- **Faux sentiment de sécurité** / urgences non détectées → garde-fous d'escalade obligatoires.
- **Substitution au vétérinaire** → cadrage produit strict (orientation, pas diagnostic).
- **Mauvaise interprétation des données** → contextualisation systématique (race, âge, historique).
- Fiabilité matérielle et autonomie du collier en usage extérieur prolongé.

## 9. Outils & écosystème

GitHub (org `Pawrise`), Jira (board SCRUM), Confluence (espace PC), Figma, Discord. Méthodologie **Scrum adaptée** (sprints courts, rituels structurés).
