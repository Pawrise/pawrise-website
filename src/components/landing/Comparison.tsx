import { Check, X } from "lucide-react";

const Comparison = () => {
  const features: { name: string; others: boolean | "limited"; pawrise: boolean }[] = [
    { name: "GPS temps réel", others: true, pawrise: true },
    { name: "Suivi d'activité", others: true, pawrise: true },
    { name: "Analyse comportementale", others: "limited" as const, pawrise: true },
    { name: "Aide vétérinaire intégrée", others: false, pawrise: true },
    { name: "Export données pour véto", others: false, pawrise: true },
    { name: "Lien avec professionnel", others: false, pawrise: true },
  ];

  const renderStatus = (status: boolean | "limited") => {
    if (status === true) {
      return (
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-5 h-5 text-green-600" />
        </div>
      );
    }
    if (status === "limited") {
      return (
        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
          <span className="text-amber-600 text-sm font-medium">~</span>
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
        <X className="w-5 h-5 text-red-500" />
      </div>
    );
  };

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Comparaison</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Ce qui nous <span className="text-gradient-primary">différencie</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pawrise n'est pas un gadget de tracking, c'est un assistant vétérinaire préventif.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl shadow-lg overflow-hidden border border-border/50">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/50 p-4 md:p-6">
              <div className="text-muted-foreground font-medium">Fonctionnalité</div>
              <div className="text-center">
                <span className="text-muted-foreground font-medium">Autres</span>
                <p className="text-xs text-muted-foreground/70">Tractive, Whistle...</p>
              </div>
              <div className="text-center">
                <span className="font-bold text-gradient-primary">Pawrise</span>
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 md:p-6 items-center ${
                  index !== features.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <div className="font-medium text-sm md:text-base">{feature.name}</div>
                <div className="flex justify-center">{renderStatus(feature.others)}</div>
                <div className="flex justify-center">{renderStatus(feature.pawrise)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
