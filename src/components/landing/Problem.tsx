import { AlertTriangle, HelpCircle, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Données brutes",
      description: "Les colliers actuels affichent des graphiques, mais sans interprétation médicale.",
    },
    {
      icon: HelpCircle,
      title: "Sans accompagnement",
      description: "Les propriétaires ne savent pas quand s'inquiéter ni quand consulter.",
    },
    {
      icon: AlertTriangle,
      title: "Vétérinaires déconnectés",
      description: "Les professionnels n'ont pas accès aux données standardisées de leurs patients.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Le problème</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Les colliers GPS actuels vous disent <span className="text-gradient-warm">où</span> est votre animal.
            <br />
            Pas <span className="text-gradient-warm">comment</span> il va.
          </h2>
          <p className="text-lg text-muted-foreground">
            Beaucoup d'informations, mais peu d'accompagnement réel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
