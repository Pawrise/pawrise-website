import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Heart, Target, Users, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Bien-être animal",
      description: "Nous plaçons la santé et le bonheur de vos compagnons au cœur de toutes nos décisions.",
    },
    {
      icon: Target,
      title: "Innovation responsable",
      description: "Nous développons des technologies qui améliorent réellement la vie des animaux et de leurs propriétaires.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous travaillons main dans la main avec des professionnels vétérinaires pour garantir la pertinence de nos solutions.",
    },
    {
      icon: Sparkles,
      title: "Accessibilité",
      description: "Nous croyons que chaque propriétaire mérite d'avoir accès aux meilleurs outils pour son animal.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">À propos</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Notre <span className="text-gradient-primary">mission</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Pawrise est né d'une vision simple : transformer le suivi animal en créant un véritable pont 
                entre la technologie connectée et la médecine vétérinaire.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    L'histoire de Pawrise
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Pawrise est un projet innovant développé par une équipe d'étudiants passionnés 
                      d'Epitech Marseille, en collaboration avec une vétérinaire partenaire.
                    </p>
                    <p>
                      Face au constat que les colliers GPS existants ne font que collecter des données 
                      sans les interpréter, nous avons imaginé une solution différente : un assistant 
                      vétérinaire intelligent capable de comprendre réellement la santé de votre animal.
                    </p>
                    <p>
                      Notre approche unique combine l'expertise technologique avec la validation médicale, 
                      pour offrir un outil qui va au-delà du simple tracking.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-hero p-8 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <div className="text-7xl mb-4">🐾</div>
                      <p className="text-xl font-semibold">Projet Epitech</p>
                      <p className="text-primary-foreground/80">Marseille 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos valeurs</h2>
              <p className="text-muted-foreground">
                Les principes qui guident chacune de nos décisions.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
