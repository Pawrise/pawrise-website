export const SHELL = `
  <div id="archwrap"><svg id="archstage" viewBox="0 100 1740 928" preserveAspectRatio="xMidYMid meet"></svg></div>

  <div class="topbar">
    <div class="brand"><div class="logo">🐾</div><div><b>Pawrise Care</b><span>Cockpit d'architecture</span></div></div>
    <div class="sp"></div>
    <button class="tb" data-panel="pPres">📖 Présentation</button>
    <button class="tb" data-panel="pEpic">🧩 EPIC / US</button>
    <button class="tb" data-panel="pFlow">🔀 Flows</button>
    <button class="tb" id="tPlat">🛠️ Plateforme &amp; Ops</button>
    <button class="tb icon" id="tSearch" title="Recherche (Ctrl+K)">🔎</button>
    <button class="tb icon" id="tPresent" title="Mode présentation auto">▶</button>
    <button class="tb icon" id="tExport" title="Exporter le diagramme en SVG">⤓</button>
    <button class="tb icon" id="tTheme" title="Thème">☾</button>
    <button class="tb icon" id="tFull" title="Plein écran">⛶</button>
    <button class="tb icon" id="tResetTop" title="Réinitialiser la vue">↺</button>
  </div>

  <div class="legend">
    <span class="t">Flux</span>
    <span class="it"><span class="ln" style="border-color:#34d399"></span> Synchrone · aller-retour</span>
    <span class="it"><span class="ln" style="border-color:#c084fc"></span> Événement · sens unique</span>
    <span class="it"><span class="ln" style="border-color:#64d2ff"></span> Contrôle</span>
    <span class="it"><span class="ln" style="border-color:#fbbf24"></span> Externe</span>
  </div>
  <div class="hint">Glissez pour déplacer · molette = zoom · cliquez un Epic/US pour rejouer son parcours</div>

  <div class="player" id="player">
    <button id="pReplay" title="Rejouer">↺</button>
    <button id="pPrev" title="Étape précédente">‹</button>
    <button id="pPlay" title="Pause/Lecture">⏸</button>
    <button id="pNext" title="Étape suivante">›</button>
    <div class="plab"><b id="ptitle">Parcours</b><span id="plabel">·</span></div>
    <button id="pClose" title="Fermer">✕</button>
  </div>

  <button class="reopen" id="reopen">‹ Panneau</button>
  <div class="pscrim" id="pscrim"></div>

  <aside class="panel" id="pPres">
    <div class="ph"><h2>📖 Présentation du projet</h2><button class="x" data-close>×</button></div>
    <div class="pb">
      <div class="eyebrow">La vision</div>
      <div class="pcard" style="--ac:var(--acc)"><h3>🐾 Pawrise Care</h3><p>Collier connecté qui suit la santé/bien-être de l'animal en continu, l'explique au propriétaire via une IA · <b>sans jamais diagnostiquer</b> · et transmet au vétérinaire un historique structuré prêt à l'emploi. <b>43 FR · 11 epics · 66 US (dont 52 MVP) · 6 services.</b></p></div>
      <div class="eyebrow">Le pourquoi</div>
      <div class="pcard" style="--ac:var(--cli)"><h3><span class="ic">🙈</span>Propriétaire aveugle</h3><p>Aucune visibilité continue entre deux visites.</p></div>
      <div class="pcard" style="--ac:var(--svc)"><h3><span class="ic">🩺</span>Vétérinaire sans historique</h3><p>Chronologie imprécise, données éparses, communication difficile.</p></div>
      <div class="pcard" style="--ac:var(--ai)"><h3><span class="ic">⏰</span>Signaux faibles tardifs</h3><p>Détectés trop tard, souvent au stade critique.</p></div>
      <div class="pcard" style="--ac:var(--rose)"><h3><span class="ic">⚖️</span>Règle d'or</h3><p>L'IA n'émet <b>jamais de diagnostic</b> (Code rural L243-1) : elle explique, oriente, et invite à consulter.</p></div>
      <div class="eyebrow">Stratégie & kill-risks</div>
      <div class="pcard" style="--ac:var(--rose)"><h3>⚖️ Légal</h3><p>Vide juridique télémédecine vété FR.</p><div class="answer"><b>Réponse :</b> orientation non-diagnostique + véto traitant.</div></div>
      <div class="pcard" style="--ac:var(--rose)"><h3>💸 Réseau vété non rentable</h3><p>Intervention humaine coûteuse, non scalable.</p><div class="answer"><b>Réponse :</b> pool plafonné + filtrage IA.</div></div>
      <div class="pcard" style="--ac:var(--rose)"><h3>🩸 Marché GPS saturé</h3><p>Tractive, Weenect, capitalisés.</p><div class="answer"><b>Réponse :</b> pivot océan-bleu vété (PDF normalisé).</div></div>
      <div class="eyebrow">Modèle économique</div>
      <div class="pcard" style="--ac:var(--data)"><table class="eco"><tr><th>Métrique</th><th>Opt.</th><th>Base</th><th>Pess.</th></tr><tr><td>Marge contributive</td><td class="good">78%</td><td class="good">69%</td><td class="bad">35%</td></tr><tr><td>LTV:CAC</td><td class="good">10×</td><td class="good">4×</td><td class="bad">0,5×</td></tr><tr><td>Payback</td><td>5 m</td><td>7 m</td><td class="bad">non atteint</td></tr></table><div class="answer"><b>Pool façon Spotify</b> : part fixe d'abo → coût vété plafonné par construction.</div></div>
      <div class="eyebrow">Les acteurs</div>
      <div class="pcard" style="--ac:var(--cli)"><h3><span class="ic">📱</span>Propriétaire</h3><p>App mobile native : bien-être, localisation, alertes, chat IA.</p></div>
      <div class="pcard" style="--ac:var(--svc)"><h3><span class="ic">🩺</span>Vétérinaire</h3><p>Vet Portal web : historique structuré + PDF normalisé.</p></div>
      <div class="pcard" style="--ac:var(--data)"><h3><span class="ic">⚙️</span>Système / Admin</h3><p>Comptes, provisioning colliers, RGPD, observabilité.</p></div>
      <div class="eyebrow">Équipe & méthodo</div>
      <div class="pcard"><h3>🤝 10 personnes · 5 pôles</h3><div class="members"><span class="mem po">Yassine · PO</span><span class="mem">Nino</span><span class="mem">Cyril</span><span class="mem">Ibrahim</span><span class="mem">Hamid</span><span class="mem">Aaditya</span><span class="mem">Elarif</span><span class="mem">Adam</span><span class="mem">Oumar</span><span class="mem">Abderrahmane</span></div><p style="margin-top:8px">Scrum adapté · services découplés par domaine · Jira/Confluence/GitHub/Figma.</p></div>
      <div class="eyebrow">Par où commencer</div>
      <div class="pcard"><h3>🚀 Par où commencer</h3><p>Backend en <b>services découplés par domaine</b> (auth, cœur, ingestion, téléconsultation, IA) derrière une passerelle + bus d'événements. On démarre par l'ingestion télémétrie → moteur d'orientation, le portail vété avançant en parallèle. Documents de référence : PRD, epics, architecture, 66 stories.</p></div>
    </div>
  </aside>

  <aside class="panel" id="pEpic">
    <div class="ph"><h2>🧩 EPIC / US</h2><button class="x" data-close>×</button></div>
    <div class="pb">
      <p style="font-size:12.5px;color:var(--mut);margin:0 0 12px">Cliquez un epic pour déplier ses US. Le bouton <b>▶</b> rejoue le parcours complet sur le diagramme.</p>
      <div class="efilter"><button class="on" data-f="all">Tous</button><button data-f="mvp">MVP</button><button data-f="post">Post-MVP</button></div>
      <div id="epiclist"></div>
    </div>
  </aside>

  <aside class="panel" id="pFlow">
    <div class="ph"><h2>🔀 Flows utilisateurs</h2><button class="x" data-close>×</button></div>
    <div class="pb"><p style="font-size:12.5px;color:var(--mut);margin:0 0 12px">Les 5 parcours de bout en bout. <b>▶ Jouer</b> rejoue le flux animé sur le diagramme, étape par étape.</p><div id="flowlist"></div></div>
  </aside>

  <aside class="panel" id="pNode">
    <div class="ph"><span class="ic" id="ndic"></span><div style="flex:1;min-width:0"><h2 id="ndname"></h2><div class="ndtag" id="ndtag"></div></div><button class="x" data-close>×</button></div>
    <div class="pb" id="ndbody"></div>
  </aside>

<div class="ovl" id="searchwrap"><div class="searchbox" onclick="event.stopPropagation()">
  <input id="searchin" placeholder="Rechercher : composant · epic · user story · flux…" autocomplete="off" spellcheck="false">
  <div class="searchres" id="searchres"></div>
</div></div>
<button class="presentstop" id="presentstop">⏹ Quitter la présentation</button>
<a class="archcue" href="#archi-choix">Choix techniques justifiés ↓</a>
`;
