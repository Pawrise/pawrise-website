// Généré depuis lib/content : NE PAS ÉDITER À LA MAIN.
#let AMDEC = (
  ("H03", "Capteur température / FC", "Mesures erronées (faux positifs physiologiques)", "Cyril Porez (IoT) + Véto partenaire", "7", "7", "6", "294", "Critique"),
  ("I01", "Analyse comportementale", "Faux négatif : anomalie non détectée", "Nino Litim + Adam Lamouri (Data/IA)", "9", "5", "6", "270", "Critique"),
  ("I03", "Chat RAG vétérinaire", "Réponse médicalement incorrecte du LLM", "Yassine El Gherrabi (LLM/RAG) + Véto partenaire", "9", "5", "5", "225", "Critique"),
  ("T04", "Authentification (OIDC maison)", "Faille dans l'OIDC maison : accès non autorisé aux données", "Yassine El Gherrabi (Backend/Auth) + revue de sécurité", "9", "4", "6", "216", "Critique"),
  ("E01", "Déclenchement automatique", "Escalade non déclenchée pour un cas urgent", "Yassine El Gherrabi (PO/Backend) + Véto partenaire", "10", "4", "5", "200", "Critique"),
  ("I02", "Analyse comportementale", "Faux positif : alerte infondée", "Nino Litim + Adam Lamouri (Data/IA)", "5", "7", "5", "175", "Critique"),
  ("H01", "Batterie", "Décharge rapide / autonomie insuffisante", "Cyril Porez (IoT)", "7", "6", "4", "168", "Critique"),
  ("E02", "Portail vétérinaire", "Vétérinaire partenaire indisponible", "Yassine El Gherrabi (PO) + Adam Lamouri (UX)", "8", "5", "4", "160", "Critique"),
  ("T03", "GPS WebSocket", "Latence excessive du GPS en temps réel", "Ibrahim Sylla / Hamid Bennacef (Full-stack)", "6", "5", "5", "150", "Critique"),
  ("H04", "Communication BLE", "Perte de synchronisation smartphone ↔ collier", "Cyril Porez (IoT) + Elarif Inzoudine (DevOps)", "5", "7", "4", "140", "Critique"),
  ("H02", "Capteurs", "Défaillance du capteur accéléromètre", "Cyril Porez (IoT)", "6", "4", "5", "120", "Critique"),
  ("E03", "Continuité des données", "Données collier non accessibles au vétérinaire", "Ibrahim Sylla / Hamid Bennacef + Elarif Inzoudine", "7", "4", "4", "112", "Critique"),
  ("T01", "API Backend", "Indisponibilité du backend (downtime)", "Elarif Inzoudine (DevOps) + Oumar Abakar (Cloud)", "8", "4", "3", "96", "Élevé"),
  ("T02", "Time-series DB", "Corruption ou perte de données capteurs", "Yassine El Gherrabi (Backend) + Oumar Abakar (Cloud)", "8", "3", "4", "96", "Élevé"),
  ("I04", "Chat RAG vétérinaire", "Indisponibilité ou latence excessive du LLM", "Yassine El Gherrabi + Elarif Inzoudine", "6", "4", "3", "72", "Élevé"),
)
