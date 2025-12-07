import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const { toast } = useToast();

  const handlePreorder = () => {
    toast({
      title: "🚀 Bientôt disponible !",
      description: "Pawrise est actuellement en développement. Suivez-nous sur les réseaux sociaux pour être informé du lancement et bénéficier de l'offre -20% !",
    });
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative bg-gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary-foreground rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
              <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-primary-foreground rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="text-6xl mb-6">🐾</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Prêt à mieux comprendre votre compagnon ?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Rejoignez les premiers utilisateurs et bénéficiez d'une offre exclusive sur le collier Pawrise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroOutline" size="xl" onClick={handlePreorder}>
                  Précommander maintenant
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-primary-foreground/60 text-sm mt-6">
                🎁 -20% pour les 500 premiers inscrits
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
