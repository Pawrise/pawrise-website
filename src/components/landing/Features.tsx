import { MapPin, Heart, Brain, FileText, Bell, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "GPS temps réel",
      description: "Localisez votre animal à tout moment avec historique des déplacements et zones de sécurité.",
      color: "primary" as const,
    },
    {
      icon: Heart,
      title: "Suivi santé complet",
      description: "Activité, sommeil, rythme cardiaque et température — tout en un seul endroit.",
      color: "secondary" as const,
    },
    {
      icon: Brain,
      title: "Analyse intelligente",
      description: "Détection automatique des comportements anormaux : fatigue, stress, inactivité.",
      color: "accent" as const,
    },
    {
      icon: FileText,
      title: "Export vétérinaire",
      description: "Partagez un rapport structuré avec votre vétérinaire en un clic.",
      color: "primary" as const,
    },
    {
      icon: Bell,
      title: "Alertes intelligentes",
      description: "Notifications personnalisées basées sur les habitudes de votre animal.",
      color: "secondary" as const,
    },
    {
      icon: Smartphone,
      title: "App intuitive",
      description: "Interface claire et tableau de bord complet pour suivre le bien-être au quotidien.",
      color: "accent" as const,
    },
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary-light",
      icon: "text-primary",
      border: "group-hover:border-primary/30",
    },
    secondary: {
      bg: "bg-secondary-light",
      icon: "text-secondary",
      border: "group-hover:border-secondary/30",
    },
    accent: {
      bg: "bg-accent/10",
      icon: "text-accent",
      border: "group-hover:border-accent/30",
    },
  };

  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Fonctionnalités</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Tout ce dont vous avez besoin pour{" "}
            <span className="text-gradient-primary">veiller</span> sur lui
          </h2>
          <p className="text-lg text-muted-foreground">
            Pawrise combine localisation, santé et intelligence artificielle pour un suivi complet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 ${colorClasses[feature.color].border}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${colorClasses[feature.color].bg} flex items-center justify-center mb-5`}>
                <feature.icon className={`w-7 h-7 ${colorClasses[feature.color].icon}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
