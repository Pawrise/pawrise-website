import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const navLinks = [
    { href: "/#features", label: "Fonctionnalités" },
    { href: "/#how-it-works", label: "Comment ça marche" },
    { href: "/#pricing", label: "Tarifs" },
    { href: "/#faq", label: "FAQ" },
  ];

  const handlePreorder = () => {
    toast({
      title: "🚀 Bientôt disponible !",
      description: "Pawrise est actuellement en développement. Suivez-nous sur les réseaux sociaux pour être informé du lancement.",
    });
  };

  const handleLogin = () => {
    toast({
      title: "🔐 Espace membre",
      description: "L'espace membre sera disponible lors du lancement officiel de Pawrise.",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <span className="text-xl">🐾</span>
            </div>
            <span className="text-xl font-bold text-foreground">Pawrise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={handleLogin}>
              Se connecter
            </Button>
            <Button variant="hero" size="sm" onClick={handlePreorder}>
              Précommander
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start" onClick={handleLogin}>
                  Se connecter
                </Button>
                <Button variant="hero" onClick={handlePreorder}>
                  Précommander
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
