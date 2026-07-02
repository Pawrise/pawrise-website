#import "../lib.typ": dtable, keybox, keep, brand, accent, lime, mut, hair, limebg
#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge

= IA · le Care Engine

L'assistant conversationnel contextualise l'état d'un chien à partir des données du collier, répond sur la base d'un corpus vétérinaire validé, et organise un handoff structuré vers un vétérinaire quand c'est pertinent.

#keybox(title: "Règle d'or")[
  L'assistant n'établit jamais de diagnostic médical (Code rural, article L243-1) : il explique, oriente, et invite à consulter. Architecture : un *graphe LangGraph déterministe* à routage conditionnel (pas un agent autonome), déployé sur Azure OpenAI Europe ; la mémoire long-terme est déléguée au backend via tool calls.
]

== LangGraph : pourquoi un graphe d'états

*LangGraph* décrit le raisonnement comme une *machine à états* : des *nœuds* (étapes) reliés par des *arêtes conditionnelles*. Le chemin n'est pas figé : à chaque nœud, une règle décide de la suite. On retient ce modèle contre trois alternatives :

#dtable(
  columns: (auto, 1fr),
  headers: ("Approche écartée", "Pourquoi pas"),
  rows: (
    ("Chaîne linéaire (LangChain simple)", "Impose un chemin unique : tout passe par le RAG, même un « bonjour ». Aucun branchement propre, coût et latence inutiles."),
    ("Agent autonome (ReAct, outils libres)", "L'IA décide seule de ses actions : non déterministe, difficile à tester et surtout à défendre juridiquement."),
    ("Orchestration maison (code impératif)", "Réinvente le graphe, la reprise sur erreur et l'observabilité ; plus de code à maintenir, moins standard."),
  ),
)

Le graphe donne exactement ce qu'exige un produit de santé : *branches conditionnelles* (le small-talk évite le RAG), *chaque nœud testable et journalisé*, *reprise* possible, et une responsabilité *portée par la structure* plutôt que par le bon vouloir du modèle.

== Pipeline (graphe conditionnel)

Le *Circuit Breaker* classe l'intention et *route* : ce n'est pas un tuyau unique. Le RAG (recherche + reranking) n'est déclenché que pour une vraie question de santé.

#align(center, box(inset: 3pt, {
  set text(size: 6.5pt)
  diagram(
    spacing: (1cm, 1.1cm),
    node-corner-radius: 3pt,
    node-stroke: 0.6pt + hair,
    node-inset: 4pt,
    node((0, 0), [1. Circuit\ Breaker], fill: rgb("#eaf6f7")),
    node((1, -1), [2. Query\ Underst.], fill: rgb("#eaf6f7")),
    node((2, -1), [3. Retrieval\ BM25+dense], fill: rgb("#eaf6fb")),
    node((3, -1), [4. Rerank\ (top-5)], fill: rgb("#f0edfb")),
    node((4, 0), [5. Génération\ (LLM)], fill: rgb("#fdf1e7")),
    node((5, 0), [6. Post-LLM\ Guardrail], fill: rgb("#eaf6f7")),
    node((2.5, 1.15), [Safe Response / escalade vétérinaire], fill: rgb("#fdeef0"), stroke: 0.6pt + rgb("#e8879a")),
    edge((0, 0), (1, -1), "-|>", text(size: 5.5pt)[santé]),
    edge((1, -1), (2, -1), "-|>"),
    edge((2, -1), (3, -1), "-|>"),
    edge((3, -1), (4, 0), "-|>"),
    edge((0, 0), (4, 0), "-|>", text(size: 5.5pt)[small-talk · sans RAG]),
    edge((4, 0), (5, 0), "-|>"),
    edge((0, 0), (2.5, 1.15), "-|>", text(size: 5.5pt)[hors-scope], stroke: rgb("#e8879a")),
    edge((5, 0), (2.5, 1.15), "-|>", text(size: 5.5pt)[escalade], stroke: rgb("#e8879a")),
  )
}))

#text(size: 8pt, fill: mut)[Trois chemins : (1) *hors-scope / risqué* → Safe Response ou escalade, sans atteindre le LLM ; (2) *small-talk ou tour de suivi* → génération directe, sans RAG (plus rapide, moins cher) ; (3) *question santé* → RAG complet. Toutes les réponses repassent par le garde-fou post-LLM. Chaque nœud est déterministe, testable et journalisé (audit append-only, 5 ans).]

#pagebreak()

=== Rôle de chaque nœud

Suivons une vraie question de propriétaire, *« Mon chien Rex boite depuis ce matin et mange moins »*, à travers le graphe :

#dtable(
  columns: (auto, 1.5fr, 1fr),
  headers: ("Nœud", "Ce qu'il fait · pourquoi", "Exemple (Rex)"),
  rows: (
    ("1 · Circuit Breaker", "Classe l'intention (santé / small-talk / hors-scope / risqué) et route. Bloque en amont ce qui ne doit jamais atteindre le LLM et évite le RAG inutile.", "« boite + mange moins » → question santé → chemin RAG. (« merci ! » → réponse directe ; demande dangereuse → Safe Response.)"),
    ("2 · Query Understanding", "Reformule en termes vétérinaires et appelle le tool télémétrie du collier. Une question floue retrouve mal ; la télémétrie ancre la réponse dans les données réelles.", "→ « boiterie + baisse d'appétit, chien » + lit le collier : activité -40 %, température normale sur 48 h."),
    ("3 · Retrieval (BM25 + dense)", "Recherche hybride (termes exacts + sens, fusion RRF) dans le corpus vétérinaire validé. Ancre la réponse sur des sources, pas sur la mémoire du LLM (anti-hallucination).", "Renvoie ~20 passages : boiterie aiguë, causes d'anorexie, signes d'alerte, quand consulter."),
    ("4 · Relevance Filter (rerank)", "Reclasse les passages et garde le top-5 (Cohere Rerank). ~10× plus rapide et plus précis qu'un filtre LLM ; réduit le bruit envoyé au gros modèle.", "Ne conserve que les 5 passages les plus pertinents, écarte le hors-sujet."),
    ("5 · Génération (LLM principal)", "Rédige à partir de la question + top-5 + télémétrie, cite les sources, sortie JSON. Seul nœud qui exige un gros modèle (raisonnement + rédaction).", "« Une boiterie avec baisse d'appétit mérite un avis : limitez l'effort, surveillez, consultez sous 24-48 h. » + citations."),
    ("6 · Post-LLM Guardrail", "Vérifie la sortie : pas de formulation « diagnostic-like », ancrage sur les sources citées, règles d'escalade. Dernière barrière : force l'escalade si besoin.", "Si le LLM avait écrit « Rex a une entorse » → détecté, réécrit en orientation + escalade vétérinaire."),
  ),
)

== Garde-fous (défense en profondeur, 3 couches)

- *Couche 1 · pré-LLM (Circuit Breaker)* : classifier d'intention ; tout ce qui n'est pas « clean » est dérouté vers une Safe Response ou une escalade, sans atteindre le LLM principal.
- *Couche 2 · raisonnement* : system prompt strict + whitelist de tools + obligation de citer le corpus pour tout claim médical.
- *Couche 3 · post-LLM* : détection « diagnostic-like », contrôle d'ancrage sur les sources, déclenchement forcé de l'escalade selon des règles explicites.

== Périmètre

*Ce qu'on fait :* Q&A santé/comportement (corpus + télémétrie), contextualisation d'une alerte collier, handoff vétérinaire structuré (PDF + JSON), refus systématique du diagnostic, audit complet.

*Ce qu'on ne fait jamais :* diagnostic explicite, prescription/posologie, gestion d'urgences vitales (redirection urgentiste), conseils de dressage, conseils nutritionnels précis.

== Observabilité & coût

Chaque nœud du graphe émet un *span OpenTelemetry* (exporté vers *Tempo*) portant `model`, `tokens.in`, `tokens.out`, `cost_eur` et sa latence. On obtient, par conversation puis agrégé dans *Grafana* : le *coût réel*, la *latence p95 par nœud*, le *taux d'escalade*, le *taux de citation* et le *taux de déclenchement du RAG* (small-talk vs santé). Un *budget de tokens* par conversation est plafonné : un dépassement coupe proprement via le Circuit Breaker.

=== Coût des modèles (cascade « le modèle le moins cher qui fait le travail »)

#keep[
Chaque nœud utilise le plus petit modèle qui fait le travail ; seul le nœud de génération mobilise le gros modèle.

#dtable(
  columns: (auto, 1fr, auto),
  headers: ("Nœud", "Modèle", "Prix éditeur (entrée / sortie, 1M tokens)"),
  rows: (
    ("1 · Circuit Breaker", "nano · GPT-5.4-nano", "0,20 $ / 1,25 $"),
    ("2 · Query Understanding", "nano · GPT-5.4-nano", "0,20 $ / 1,25 $"),
    ("3 · Retrieval (embeddings)", "text-embedding-3-large + BM25", "0,13 $ (entrée seule)"),
    ("4 · Relevance Filter", "Cohere Rerank 3.5 multilingue", "2,00 $ / 1 000 recherches"),
    ("5 · Génération", "principal · GPT-5.4", "2,50 $ / 15 $"),
    ("6 · Post-Guardrail", "nano · GPT-5.4-nano", "0,20 $ / 1,25 $"),
  ),
)
]

#text(size: 8pt, fill: mut)[Sources (consultées le 2 juillet 2026) : #link("https://developers.openai.com/api/docs/pricing")[OpenAI · API pricing] (GPT-5.4, GPT-5.4-nano, text-embedding-3-large) · #link("https://cohere.com/pricing")[Cohere · pricing] (Rerank 3.5). Déploiement Azure OpenAI région UE (mêmes modèles). L'interface LLMProvider (ADR-002) abstrait le fournisseur : modèles et tarifs évoluent vite, la bascule est prévue. Parité dollar/euro retenue.]

#keybox(title: "Coût par conversation ≈ 0,03 à 0,05 €")[
  Répartition : génération ~88 %, reranking ~8 %, nœuds nano ~3 %, embeddings < 1 %. Deux leviers d'économie : la *cascade* (nano pour la classification et les garde-fous, gros modèle réservé à la génération) réduit le coût d'environ 20 % vs tout envoyer au gros modèle ; le *small-talk qui saute le RAG* coûte ~5× moins qu'une réponse santé. Cible de la spec (< 0,05 €/conversation) tenue. Alternative souveraine (ADR-002) : Mistral (UE), coût équivalent, données 100 % UE.
]

=== À quoi ressemblent ces tokens ?

#keep[
Pour rendre le coût tangible : le pavé ci-dessous fait *≈ 2 000 tokens* (~1 500 mots). Une conversation santé en traite *~4×* (surtout du contexte vétérinaire récupéré par le RAG, pas la réponse), soit *~8 000 tokens pour 0,03 à 0,05 €*. Autrement dit, l'essentiel de la facture, c'est le contexte qu'on donne au modèle, pas ce qu'il écrit.

#block(inset: 7pt, radius: 4pt, stroke: 0.5pt + hair, fill: limebg, width: 100%)[
  #text(size: 5pt, fill: mut)[#lorem(1500)]
]

#align(center, text(size: 7.5pt, fill: mut)[Le pavé ci-dessus : ≈ 2 000 tokens. Une conversation santé complète ≈ 4 × ce pavé.])
]

== Décisions d'architecture (ADR)

#dtable(
  columns: (auto, 1fr),
  headers: ("ADR", "Décision"),
  rows: (
    ("001 · Pipeline borné", "Graphe déterministe à routage conditionnel, pas d'agent autonome : responsabilité juridique portée par la structure."),
    ("002 · Azure OpenAI EU + cascade", "Data residency UE, pas d'entraînement sur les données ; interface LLMProvider (bascule possible)."),
    ("003 · Reranker dédié", "Cohere Rerank 3.5 : latence ~10× meilleure qu'un filtre LLM, meilleure pertinence."),
    ("004 · Mémoire = backend", "Pas de fact store dans le chatbot ; tool calls vers le Core API (source de vérité unique)."),
    ("005 · Sortie JSON structurée", "Le front affiche les actions sans parser du markdown fragile."),
    ("006 · RGPD progressif", "MVP : masquage regex des PII ; V1 : Presidio + dictionnaire vétérinaire."),
    ("007 · Garde-fous 3 couches", "Défense en profondeur : l'échec d'une couche n'expose pas le système."),
    ("008 · Retrieval hybride", "BM25 (termes exacts) + dense (similarité), fusion RRF."),
    ("009 · Query Understanding", "Reformulation en termes vétérinaires + tool télémétrie avant le RAG."),
    ("010 · Audit append-only", "Log immuable de chaque conversation, rétention 5 ans : défense juridique et base d'eval."),
  ),
)

== Objectifs de succès (KPIs MVP)

0 faux diagnostic sur le golden set · ≥ 95 % de citation quand claim médical · 5 à 15 % de taux d'escalade approprié · réponse complète p95 < 8 s · recall\@5 ≥ 0,85 · détection jailbreak ≥ 95 %.
