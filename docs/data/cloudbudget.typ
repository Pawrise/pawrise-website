// Généré depuis lib/content : NE PAS ÉDITER À LA MAIN.
#let CLOUDBUDGET = (
  ("Cluster Kubernetes (auto-géré)", "1× CAX21 control-plane + 2× CAX31 workers (ARM Ampere · 8 vCPU / 16 Go par worker, dimensionné pour un besoin total de ≈ 16 vCPU / 32 Go)", "≈ 630 €/an"),
  ("Sauvegardes & volumes", "volumes bloc ~150 Go (0,057 €/Go) + backups automatiques (+20 %)", "≈ 230 €/an"),
  ("Load balancer + IP publique", "LB11 (répartition de charge, TLS)", "≈ 72 €/an"),
  ("Sauvegardes hors-site", "Storage Box (rétention longue durée)", "≈ 60 €/an"),
  ("Modèle de langage (IA)", "Azure OpenAI + Cohere · ~0,03 à 0,05 €/conversation (variable)", "≈ 600 €/an"),
  ("Nom de domaine", ".com (TLS Let's Encrypt gratuit)", "≈ 12 €/an"),
  ("Développement & tests", "dev en local (gratuit) + CI ; tests éphémères et IA à la consommation", "≈ 150 €/an"),
)
#let CLOUD_TOTAL = "≈ 1 750 €/an"
