import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Mail, Send } from "lucide-react";

const Team = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    message: "",
  });

  const team = [
    {
      name: "Yassine EL GHERRABI",
      role: "Co-fondateur & Développeur",
      description: "Passionné par l'innovation technologique et le bien-être animal.",
    },
    {
      name: "Elarif INZOUDINE",
      role: "Co-fondateur & Développeur",
      description: "Expert en développement et en expérience utilisateur.",
    },
    {
      name: "Ibrahim SYLLA",
      role: "Co-fondateur & Développeur",
      description: "Spécialiste en architecture logicielle et IoT.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    const mailtoLink = `mailto:yassineelgherrabi@gmail.com?subject=Candidature Pawrise - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nCompétences: ${formData.skills}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;

    setTimeout(() => {
      toast({
        title: "✉️ Redirection vers votre client mail",
        description: "Complétez l'envoi de votre candidature via votre application de messagerie.",
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
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Notre équipe</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Les <span className="text-gradient-primary">visionnaires</span> derrière Pawrise
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Une équipe passionnée d'étudiants Epitech Marseille, unis par l'amour des animaux 
                et la conviction que la technologie peut améliorer leur bien-être.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center">
                    <span className="text-4xl text-primary-foreground font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Rejoignez l'aventure
                </h2>
                <p className="text-muted-foreground">
                  Vous êtes passionné par les animaux et la technologie ? Nous cherchons des talents 
                  motivés pour rejoindre notre équipe et construire l'avenir du bien-être animal.
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
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Compétences *</label>
                    <Input
                      required
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      placeholder="Ex: Développement React, Design UX, Marketing..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pourquoi souhaitez-vous rejoindre Pawrise ? *</label>
                    <Textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Parlez-nous de vous et de votre motivation..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
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

export default Team;
