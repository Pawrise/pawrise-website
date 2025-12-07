import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentions légales</h1>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Éditeur du site</h2>
                  <p className="text-muted-foreground">
                    Le site Pawrise est un projet étudiant réalisé dans le cadre de la formation 
                    à <strong className="text-foreground">Epitech Marseille</strong> - Promotion 2025.
                  </p>
                  <div className="mt-4 space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Équipe projet :</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Yassine EL GHERRABI</li>
                      <li>Elarif INZOUDINE</li>
                      <li>Ibrahim SYLLA</li>
                    </ul>
                    <p className="mt-4">
                      <strong className="text-foreground">Contact :</strong> yassineelgherrabi@gmail.com
                    </p>
                  </div>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Nature du projet</h2>
                  <p className="text-muted-foreground">
                    Pawrise est un <strong className="text-foreground">projet étudiant à vocation pédagogique</strong>. 
                    Il s'agit d'un prototype démontrant les capacités techniques et créatives 
                    de l'équipe dans le domaine de l'Internet des Objets (IoT) et de la santé animale.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Ce site ne constitue pas une offre commerciale réelle. Les fonctionnalités 
                    de précommande et d'abonnement sont présentées à titre illustratif uniquement.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Hébergement</h2>
                  <p className="text-muted-foreground">
                    Ce site est hébergé par Netlify (netlify.com).
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Propriété intellectuelle</h2>
                  <p className="text-muted-foreground">
                    L'ensemble des contenus présents sur ce site (textes, images, logos, visuels) 
                    sont la propriété de l'équipe Pawrise ou utilisés avec autorisation.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Toute reproduction, représentation, modification ou exploitation non autorisée 
                    de tout ou partie du site est interdite.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Crédits</h2>
                  <p className="text-muted-foreground">
                    Images : générées par IA ou libres de droits.<br />
                    Icônes : Lucide React.<br />
                    Design et développement : Équipe Pawrise.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
