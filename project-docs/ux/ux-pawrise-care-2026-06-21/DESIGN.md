---
# ─────────────────────────────────────────────────────────────
# Pawrise Care — Design System « Pulse »
# Direction artistique validée · multi-surface (App · Vet Portal · Admin · Vitrine)
# ─────────────────────────────────────────────────────────────
name: Pawrise Care — Pulse
version: 1.0
description: >
  Collier connecté + IA d'orientation santé non-diagnostique reliant
  propriétaires et vétérinaires. Un seul langage visuel, calme et distinctif,
  décliné en mode clair (défaut) et sombre, sur quatre surfaces.

# ── COLORS ───────────────────────────────────────────────────
colors:
  light:
    bg:              "#EDF2F0"   # fond application (blanc-brume teinté teal, sans bleu froid)
    surface:         "#FFFFFF"   # cartes, panneaux
    surface-2:       "#F7F6F9"   # surfaces secondaires / hover
    border:          "#E6E3EA"
    text:            "#15212B"   # texte principal
    text-muted:      "#6B6B78"   # texte secondaire
    text-subtle:     "#9A949F"   # légendes, placeholders
    primary:         "#12998C"   # teal — actions, accent santé OK
    primary-strong:  "#0E7468"   # teal foncé — texte sur clair, hover
    on-primary:      "#FFFFFF"
    secondary:       "#6C5BC9"   # violet — IA, secondaire
    on-secondary:    "#FFFFFF"
    # États bien-être (NON-alarmistes) — toujours couleur + icône + texte
    good-bg:         "#D6F0EA"
    good-fg:         "#0E7468"
    watch-bg:        "#EFE7CF"   # ambre, jamais rouge
    watch-fg:        "#7A6320"
    consult-bg:      "#F3DFD2"   # terre, jamais rouge
    consult-fg:      "#9A4E2C"
    # Sécurité — ROUGE, RÉSERVÉ (sortie de zone uniquement)
    security-bg:     "#F7DAD6"
    security-fg:     "#C4463B"
    focus-ring:      "#12998C"
  dark:
    bg:              "#11191F"
    surface:         "#1B2A35"
    surface-2:       "#16222C"
    border:          "#243341"
    text:            "#EEF3F6"
    text-muted:      "#8B9AA6"
    text-subtle:     "#6B7A86"
    primary:         "#1FB6A6"   # teal éclairci pour contraste AA sur foncé
    primary-strong:  "#4FD6C5"
    on-primary:      "#08221F"
    secondary:       "#7C6BD6"
    on-secondary:    "#FFFFFF"
    good-bg:         "rgba(31,182,166,0.16)"
    good-fg:         "#4FD6C5"
    watch-bg:        "rgba(224,184,92,0.16)"
    watch-fg:        "#E6C575"
    consult-bg:      "rgba(214,122,80,0.18)"
    consult-fg:      "#E89B72"
    security-bg:     "rgba(226,98,90,0.18)"
    security-fg:     "#E2625A"
    focus-ring:      "#1FB6A6"

# ── TYPOGRAPHY ───────────────────────────────────────────────
typography:
  display:  "Bricolage Grotesque"   # titres expressifs
  body:     "Albert Sans"           # texte & UI
  mono:     "JetBrains Mono"        # labels, données, tokens
  scale:
    display:    { size: 44, weight: 800, line: 1.04, tracking: "-0.02em" }
    h1:         { size: 32, weight: 800, line: 1.1,  tracking: "-0.02em" }
    h2:         { size: 24, weight: 700, line: 1.15, tracking: "-0.01em" }
    h3:         { size: 18, weight: 700, line: 1.25 }
    body-lg:    { size: 16, weight: 400, line: 1.6 }
    body:       { size: 14, weight: 400, line: 1.55 }
    small:      { size: 12.5, weight: 400, line: 1.5 }
    caption:    { size: 11, weight: 600, line: 1.4, transform: uppercase, tracking: "0.04em" }
    mono-label: { size: 11, weight: 600, family: mono, tracking: "0.1em", transform: uppercase }

# ── SHAPE / RADIUS ───────────────────────────────────────────
rounded:
  xs:   6     # badges, tags
  sm:   8     # inputs (web/pro), petits boutons
  md:   12    # inputs (app), cartes denses
  lg:   16    # cartes app
  xl:   22    # cartes héros, feuilles modales
  pill: 999   # boutons app, status-pills, chips

# ── SPACING (base 4) ─────────────────────────────────────────
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 56, 80]

# ── ELEVATION ────────────────────────────────────────────────
elevation:
  e1: "0 1px 3px rgba(21,33,43,0.06)"            # cartes posées
  e2: "0 4px 16px rgba(21,33,43,0.08)"           # cartes flottantes
  e3: "0 14px 40px rgba(21,33,43,0.12)"          # modales, overlays
  hero: "0 10px 26px rgba(18,153,140,0.28)"      # carte héros teal

# ── COMPONENTS (inventaire du kit) ───────────────────────────
components:
  - button        # primary / secondary / ghost / destructive(security) · sm/md/lg
  - input         # text / textarea / select / search · default/focus/error/disabled
  - toggle        # switch / checkbox / radio
  - chip          # filtre, sélection
  - badge         # statut, consentement, non-lu
  - status-pill   # bien-être : bon / à surveiller / consulter
  - card          # base / métrique / héros
  - alert-card    # alerte santé contextualisée (âge/race) + CTA IA
  - chart-card    # courbes activité/sommeil vs « normale »
  - report-card   # rapport PDF normalisé
  - handoff-card  # mise en relation véto + statut file
  - subscription-card
  - list-item     # app
  - table-row     # vet portal / admin (data dense)
  - ai-bubble     # chat IA + badge « orientation, pas diagnostic »
  - tab-bar       # app · 5 onglets
  - sidebar       # web · vet/admin
  - app-bar       # top-bar contextuelle
  - avatar        # animal
  - modal         # feuille / dialogue
  - kpi-card      # admin
  - timeline      # frise médicale (vet portal)
  - states        # vide / chargement(skeleton) / hors-ligne / erreur
---

# Pawrise Care — Design System « Pulse »

## Brand & Style

**Personnalité.** Confiance · calme · chaleur (lien humain-animal) · prévention · moderne · clair · accessible.
**Promesse.** « Agir au bon moment, avant que ça n'empire » — par l'orientation, jamais le diagnostic.

« Pulse » se démarque d'un secteur santé saturé de bleu en ancrant la marque sur un **teal vivant** soutenu d'un **violet** pour l'intelligence (IA). Le système vit en **clair par défaut** (le jour, friendly) et en **sombre** (le soir, batterie OLED) — deux ambiances d'un même jeu de tokens sémantiques.

**Logo.** Anneau (présence, suivi continu) + point plein (l'animal, le battement). Teal sur clair, teal éclairci sur sombre ; le point est violet. Wordmark en Bricolage Grotesque 800, « Care » en accent primaire.

Ce qu'on évite : froideur clinique, gamification anxiogène, sur-saturation, look « gadget GPS ».

## Colors

Voir le frontmatter `colors.light` / `colors.dark`. Règles d'usage :

- **Le primaire (teal)** porte l'action et l'état « tout va bien ». C'est la couleur de repos de la marque.
- **Le secondaire (violet)** signale l'intelligence/IA et les actions secondaires. Jamais pour un état santé.
- **Les états bien-être** suivent une échelle **non-alarmiste** : bon (vert) → à surveiller (ambre) → consulter (terre). **Aucun rouge.**
- **Le rouge sécurité** est strictement réservé aux incidents de sécurité réelle (sortie de zone). Ne jamais l'employer pour la santé : son sur-usage désensibilise et fait paniquer.
- **Daltonisme.** Le sens d'un état ne dépend jamais de la seule couleur : toujours couleur **+ icône + texte**.
- **Dark mode.** Les accents sont éclaircis (teal `#1FB6A6`, états relevés) pour préserver AA 4.5:1 sur fond foncé ; un accent trop saturé sur du noir « vibre » et fatigue.

## Typography

- **Bricolage Grotesque** — titres et chiffres expressifs (display, h1–h3).
- **Albert Sans** — corps de texte et toute l'UI ; neutre, très lisible.
- **JetBrains Mono** — labels de section, données, valeurs techniques, tokens.

Échelle dans `typography.scale`. Min 24px pour les titres d'écran mobile, min 14px pour le corps. Dynamic type supporté (l'app respecte la taille système).

## Layout

- **App mobile** : tab-bar 5 onglets (Bien-être · Carte · Alertes · Chat IA · Profil), stack pré-auth, modales 1 niveau. Marges 16, gouttières 8-12, cartes pleine largeur.
- **Vet Portal** : sidebar gauche + top-bar contextuelle ; dossier patient en onglets (Synthèse · Timeline · Données · Rapport). Desktop-first, dense mais aéré (grille 12 col, gouttière 24).
- **Back-office** : sidebar + tables filtrables → fiche détail → actions. Densité maximale, neutralité.
- **Vitrine** : top-nav collante, pages scroll, CTA récurrent. Mobile-first sur la home.

## Elevation

Trois niveaux (`elevation.e1–e3`) + une ombre teal dédiée à la carte héros. En sombre, on remplace l'ombre par un **contraste de surface** (`surface` sur `bg`) et une bordure `border` plutôt qu'une ombre portée.

## Shapes

Rayons dans `rounded`. L'**app** est généreusement arrondie (boutons et pills `pill`, cartes `lg`/`xl`) pour le côté friendly. Le **pro** (Vet/Admin) descend à `sm`/`md` pour la rigueur et la densité. Les traits d'icône sont à 2px, bouts arrondis (`stroke-linecap: round`).

## Components

Le kit complet est dans **`Pawrise — Kit de composants.dc.html`**. Composants produit spécifiques :

- **status-pill bien-être** — l'objet signature. Couleur + icône (✓ / ⓘ / ▲) + label. Trois états non-alarmistes.
- **alert-card** — signal + **contextualisation âge/race** (« fréquent chez un chat de 4 ans en été ») + recommandation douce + CTA « Demander à l'IA ». Jamais d'injonction médicale.
- **ai-bubble** — bulle de chat avec **badge persistant « orientation, pas un diagnostic »** et réponses qui citent les données.
- **handoff-card** — mise en relation véto : récap, **consentement au partage**, statut file d'attente.
- **report-card** — rapport PDF **normalisé** partagé entre app et Vet Portal (le véto reçoit le contexte prêt à l'emploi).
- **chart-card** — courbes activité/sommeil tracées **vs « normale »** contextualisée.
- **timeline** (Vet Portal) — frise chronologique d'événements structurés. **Pas de score de santé global** côté véto (décision produit).

## Do's & Don'ts

**Do**
- Faire de « tout va bien » le repos visuel : espace, calme, teal doux.
- Toujours coder un état par couleur **+ icône + texte**.
- Contextualiser toute alerte (âge, race, historique) avant de recommander.
- Afficher le badge non-diagnostic partout où l'IA parle.
- Respecter AA 4.5:1, cibles tactiles ≥ 44px, et le dynamic type.

**Don't**
- Pas de rouge pour la santé — uniquement la sécurité réelle.
- Pas de score de santé global côté vétérinaire.
- Pas de jauges anxiogènes ni de chiffres bruts sans contexte en accueil.
- Pas de promesse médicale (« diagnostic », « guérison ») — on dit « orientation ».
- Pas d'accent saturé pur sur fond sombre (éclaircir via les tokens dark).
