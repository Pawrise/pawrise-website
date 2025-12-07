import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Heart, Stethoscope } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroDog from "@/assets/hero-dog.png";

const Hero = () => {
  const { toast } = useToast();

  const handlePreorder = () => {
    toast({
      title: "🚀 Bientôt disponible !",
      description: "Pawrise est actuellement en développement. Suivez-nous sur les réseaux sociaux pour être informé du lancement.",
    });
  };

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Nouveau : Assistant vétérinaire IA</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Le collier qui{" "}
              <span className="text-gradient-primary">comprend</span>{" "}
              votre animal
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Pawrise combine GPS, suivi santé et assistance vétérinaire intelligente. 
              Bien plus qu'un tracker : un véritable assistant pour le bien-être de votre compagnon.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" onClick={handlePreorder}>
                Précommander
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToFeatures}>
                Découvrir
              </Button>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">GPS temps réel</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-sm">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Suivi santé</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-sm">
                <Stethoscope className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Conseil véto</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Product Visual */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-hero p-1 shadow-glow animate-float">
                <div className="w-full h-full rounded-3xl bg-card overflow-hidden">
                  <img 
                    src={heroDog} 
                    alt="Golden retriever heureux portant le collier connecté Pawrise" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 md:-left-8 p-3 md:p-4 rounded-2xl bg-card shadow-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm md:text-base">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Statut</p>
                    <p className="font-semibold text-xs md:text-sm">En bonne santé</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 md:-right-6 p-3 md:p-4 rounded-2xl bg-card shadow-lg animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-light flex items-center justify-center">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Position</p>
                    <p className="font-semibold text-xs md:text-sm">Parc Monceau</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 md:-right-12 p-2 md:p-3 rounded-xl bg-secondary-light shadow-md animate-fade-in" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  <span className="font-semibold text-secondary text-sm">82 bpm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
