import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "/mois",
      description: "L'essentiel pour commencer",
      features: [
        "GPS temps réel",
        "Historique 7 jours",
        "Alertes de zone",
        "App mobile",
      ],
      cta: "Démarrer gratuitement",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Premium",
      price: "9,99€",
      period: "/mois",
      description: "Suivi santé complet",
      features: [
        "Tout le plan Gratuit",
        "Suivi santé complet",
        "Historique illimité",
        "Analyse comportementale",
        "Export PDF vétérinaire",
        "Support prioritaire",
      ],
      cta: "Essai gratuit 14 jours",
      variant: "hero" as const,
      popular: true,
    },
    {
      name: "Care+",
      price: "19,99€",
      period: "/mois",
      description: "Avec assistance vétérinaire",
      features: [
        "Tout le plan Premium",
        "Pawrise Care IA",
        "Chat vétérinaire illimité",
        "Consultations vidéo",
        "Suivi multi-animaux",
        "API pour vétérinaires",
      ],
      cta: "Nous contacter",
      variant: "warm" as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Tarifs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Un plan pour chaque{" "}
            <span className="text-gradient-primary">besoin</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Commencez gratuitement et évoluez selon vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 lg:p-8 rounded-3xl bg-card border transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-glow scale-105 z-10"
                  : "border-border/50 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-hero text-primary-foreground text-sm font-semibold">
                    Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} className="w-full" size="lg">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Le collier est vendu séparément à partir de 79€.{" "}
          <a href="#" className="text-primary hover:underline">
            En savoir plus
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
