import { Button } from "@/components/ui/button";
import { MessageSquare, FileCheck, Stethoscope, ArrowRight } from "lucide-react";

const PawriseCare = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Chat IA intelligent",
      description: "Posez vos questions et recevez des réponses basées sur les données de votre animal.",
    },
    {
      icon: FileCheck,
      title: "Pré-diagnostic",
      description: "Analyse des comportements et suggestions personnalisées validées par un vétérinaire.",
    },
    {
      icon: Stethoscope,
      title: "Relais professionnel",
      description: "Connexion directe avec un vétérinaire partenaire si nécessaire.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/20 text-sm font-semibold mb-6">
              ✨ Pawrise Care
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              L'assistance vétérinaire dans votre poche
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Notre module Pawrise Care agit comme un assistant intelligent qui interprète les données de votre animal 
              grâce à des règles définies par notre vétérinaire partenaire.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-primary-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="heroOutline" size="lg">
              En savoir plus
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Chat Mockup */}
          <div className="relative">
            <div className="bg-card rounded-3xl shadow-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span>🐾</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Pawrise Care</p>
                  <p className="text-xs text-muted-foreground">Assistant vétérinaire</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground px-4 py-3 rounded-2xl rounded-br-md max-w-[80%]">
                    <p className="text-sm">Mon chien dort plus que d'habitude, dois-je m'inquiéter ?</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md max-w-[80%]">
                    <p className="text-sm text-foreground">
                      D'après les données de Max, son sommeil a augmenté de 15% cette semaine. 
                      C'est souvent normal après une période d'activité intense. 
                      Je ne détecte pas d'autres signaux inquiétants. 🐕
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Basé sur 7 jours de données
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Posez votre question..."
                  className="flex-1 px-4 py-3 rounded-xl bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-foreground/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-foreground/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PawriseCare;
