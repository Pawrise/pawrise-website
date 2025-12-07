import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Politique de cookies</h1>
              
              <div className="bg-secondary-light border border-secondary/30 rounded-2xl p-6 mb-8">
                <p className="text-secondary-foreground font-medium">
                  ⚠️ <strong>Note importante :</strong> Pawrise est un projet étudiant d'Epitech Marseille 2025. 
                  Cette politique de cookies est présentée à titre indicatif dans le cadre de ce projet pédagogique.
                </p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Qu'est-ce qu'un cookie ?</h2>
                  <p className="text-muted-foreground">
                    Un cookie est un petit fichier texte stocké sur votre terminal (ordinateur, tablette, 
                    smartphone) lors de votre visite sur un site web. Les cookies permettent au site de 
                    mémoriser vos actions et préférences pendant une période déterminée.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Types de cookies utilisés</h2>
                  
                  <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">Cookies strictement nécessaires</h3>
                  <p className="text-muted-foreground">
                    Ces cookies sont essentiels au fonctionnement du site. Ils vous permettent de naviguer 
                    sur le site et d'utiliser ses fonctionnalités de base.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">Cookies de performance</h3>
                  <p className="text-muted-foreground">
                    Ces cookies collectent des informations sur la façon dont les visiteurs utilisent le site, 
                    afin d'améliorer son fonctionnement et l'expérience utilisateur.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">Cookies de préférences</h3>
                  <p className="text-muted-foreground">
                    Ces cookies permettent au site de mémoriser vos choix (comme le mode sombre/clair) 
                    et de personnaliser votre expérience.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Cookies tiers</h2>
                  <p className="text-muted-foreground">
                    Ce site n'utilise actuellement pas de cookies tiers à des fins publicitaires. 
                    Seuls des cookies techniques essentiels sont utilisés.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Durée de conservation</h2>
                  <p className="text-muted-foreground">
                    Les cookies de session sont supprimés à la fermeture de votre navigateur. 
                    Les cookies persistants sont conservés selon leur finalité, généralement 
                    pour une durée maximale de 13 mois.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Gestion des cookies</h2>
                  <p className="text-muted-foreground">
                    Vous pouvez à tout moment configurer votre navigateur pour accepter, refuser 
                    ou supprimer les cookies. Voici comment procéder selon votre navigateur :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Chrome : Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                    <li>Firefox : Options &gt; Vie privée et sécurité</li>
                    <li>Safari : Préférences &gt; Confidentialité</li>
                    <li>Edge : Paramètres &gt; Cookies et autorisations de site</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Note : La désactivation de certains cookies peut affecter le fonctionnement du site.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Contact</h2>
                  <p className="text-muted-foreground">
                    Pour toute question relative à cette politique de cookies :<br />
                    Email : yassineelgherrabi@gmail.com<br />
                    Équipe Pawrise - Epitech Marseille 2025
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

export default Cookies;
