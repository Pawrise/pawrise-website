import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Politique de confidentialité</h1>
              
              <div className="bg-secondary-light border border-secondary/30 rounded-2xl p-6 mb-8">
                <p className="text-secondary-foreground font-medium">
                  ⚠️ <strong>Note importante :</strong> Pawrise est un projet étudiant d'Epitech Marseille 2025. 
                  Cette politique de confidentialité est présentée à titre indicatif dans le cadre de ce projet pédagogique.
                </p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Responsable du traitement</h2>
                  <p className="text-muted-foreground">
                    L'équipe Pawrise, composée d'étudiants d'Epitech Marseille, est responsable 
                    du traitement des données collectées sur ce site dans le cadre de ce projet étudiant.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Contact : yassineelgherrabi@gmail.com
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Données collectées</h2>
                  <p className="text-muted-foreground">
                    Dans le cadre de ce projet, nous pourrions collecter :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Messages envoyés via les formulaires de contact</li>
                    <li>Données de navigation (cookies techniques)</li>
                  </ul>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Finalité du traitement</h2>
                  <p className="text-muted-foreground">
                    Les données collectées servent à :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Répondre à vos demandes de contact</li>
                    <li>Gérer les candidatures pour rejoindre l'équipe</li>
                    <li>Améliorer l'expérience utilisateur du site</li>
                  </ul>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Base légale</h2>
                  <p className="text-muted-foreground">
                    Le traitement des données est fondé sur votre consentement lorsque vous 
                    remplissez un formulaire, et sur notre intérêt légitime pour les données 
                    de navigation nécessaires au fonctionnement du site.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Durée de conservation</h2>
                  <p className="text-muted-foreground">
                    Les données sont conservées pendant la durée du projet étudiant et seront 
                    supprimées à son terme, sauf obligation légale de conservation.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Vos droits</h2>
                  <p className="text-muted-foreground">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Droit d'accès à vos données</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l'effacement</li>
                    <li>Droit à la portabilité</li>
                    <li>Droit d'opposition</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Pour exercer ces droits, contactez-nous à : yassineelgherrabi@gmail.com
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Sécurité</h2>
                  <p className="text-muted-foreground">
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                    pour protéger vos données contre tout accès non autorisé, modification, 
                    divulgation ou destruction.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Contact</h2>
                  <p className="text-muted-foreground">
                    Pour toute question relative à cette politique de confidentialité :<br />
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

export default Privacy;
