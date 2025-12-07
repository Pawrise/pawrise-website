import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Stethoscope, CheckCircle, Send, Heart, FileText, Users } from "lucide-react";

const VetPartner = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    clinic: "",
    specialization: "",
    message: "",
  });

  const benefits = [
    {
      icon: FileText,
      title: "Rapports structurés",
      description: "Recevez des exports de données de santé prêts à l'emploi pour vos consultations.",
    },
    {
      icon: Heart,
      title: "Suivi préventif",
      description: "Détectez les anomalies comportementales avant qu'elles ne deviennent des problèmes.",
    },
    {
      icon: Users,
      title: "Relation client renforcée",
      description: "Offrez un suivi continu à vos patients et fidélisez vos clients.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:yassineelgherrabi@gmail.com?subject=Partenariat Vétérinaire Pawrise - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nCabinet/Clinique: ${formData.clinic}\nSpécialisation: ${formData.specialization}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;

    setTimeout(() => {
      toast({
        title: "✉️ Redirection vers votre client mail",
        description: "Complétez l'envoi de votre demande de partenariat via votre application de messagerie.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Vétérinaires partenaires</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Ensemble pour la <span className="text-gradient-primary">santé animale</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Pawrise est co-développé avec une vétérinaire partenaire pour garantir 
                la pertinence médicale de nos analyses et recommandations.
              </p>
            </div>
          </div>
        </section>

        {/* Current Partner */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <h3 className="text-2xl font-bold">Vétérinaire partenaire</h3>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <p className="text-primary font-medium mb-4">Co-développeuse de l'application</p>
                    <p className="text-muted-foreground">
                      Notre vétérinaire partenaire collabore activement au développement de Pawrise, 
                      validant les algorithmes d'analyse et les recommandations de santé. Cette collaboration 
                      garantit la crédibilité médicale et la pertinence de notre solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi devenir partenaire ?
              </h2>
              <p className="text-muted-foreground">
                Rejoignez notre réseau de vétérinaires partenaires et bénéficiez d'outils innovants.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary-light flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Form */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Rejoignez notre réseau
                </h2>
                <p className="text-muted-foreground">
                  Vous êtes vétérinaire et souhaitez collaborer avec Pawrise ? 
                  Remplissez ce formulaire et nous vous recontacterons rapidement.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email professionnel *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@votreclinique.fr"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Cabinet / Clinique *</label>
                      <Input
                        required
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        placeholder="Nom de votre établissement"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Spécialisation</label>
                      <Input
                        value={formData.specialization}
                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                        placeholder="Ex: Canin, Félin, NAC..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Parlez-nous de votre intérêt pour Pawrise..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VetPartner;
