import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Conditions Générales de Vente</h1>
              
              <div className="bg-secondary-light border border-secondary/30 rounded-2xl p-6 mb-8">
                <p className="text-secondary-foreground font-medium">
                  ⚠️ <strong>Note importante :</strong> Pawrise est un projet étudiant d'Epitech Marseille 2025. 
                  Ces CGV sont présentées à titre indicatif et ne constituent pas un engagement commercial réel.
                </p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Article 1 - Objet</h2>
                  <p className="text-muted-foreground">
                    Les présentes Conditions Générales de Vente (CGV) régissent les ventes de produits 
                    et services Pawrise, y compris le collier connecté et les abonnements associés.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Article 2 - Produits et Services</h2>
                  <p className="text-muted-foreground">
                    Pawrise propose :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Un collier connecté GPS avec suivi santé</li>
                    <li>Une application mobile de suivi</li>
                    <li>Des abonnements optionnels (Premium, Care+)</li>
                  </ul>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Article 3 - Prix</h2>
                  <p className="text-muted-foreground">
                    Les prix affichés sont indicatifs et exprimés en euros TTC. 
                    Pawrise se réserve le droit de modifier ses prix à tout moment.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Article 4 - Commande</h2>
                  <p className="text-muted-foreground">
                    Toute commande implique l'acceptation des présentes CGV. 
                    Les précommandes sont actuellement fermées, le projet étant en phase de développement.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Article 5 - Paiement</h2>
                  <p className="text-muted-foreground">
                    Les modalités de paiement seront communiquées lors du lancement officiel du produit.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Article 6 - Livraison</h2>
                  <p className="text-muted-foreground">
                    Les conditions de livraison seront précisées lors de la mise en vente effective du produit.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Article 7 - Droit de rétractation</h2>
                  <p className="text-muted-foreground">
                    Conformément à la législation française, le client dispose d'un délai de 14 jours 
                    pour exercer son droit de rétractation à compter de la réception du produit.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Article 8 - Garantie</h2>
                  <p className="text-muted-foreground">
                    Les produits Pawrise bénéficieront de la garantie légale de conformité 
                    et de la garantie contre les vices cachés.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Article 9 - Contact</h2>
                  <p className="text-muted-foreground">
                    Pour toute question relative aux CGV :<br />
                    Email : yassineelgherrabi@gmail.com<br />
                    Équipe Pawrise - Epitech Marseille
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

export default Terms;
