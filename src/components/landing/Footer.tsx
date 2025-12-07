import { Link } from "react-router-dom";

const Footer = () => {
  const links = {
    product: [
      { label: "Fonctionnalités", href: "/#features" },
      { label: "Tarifs", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
    company: [
      { label: "À propos", href: "/a-propos", isRoute: true },
      { label: "Notre équipe", href: "/equipe", isRoute: true },
      { label: "Vétérinaire partenaire", href: "/veterinaire-partenaire", isRoute: true },
      { label: "Contact", href: "/contact", isRoute: true },
    ],
    legal: [
      { label: "Mentions légales", href: "/mentions-legales", isRoute: true },
      { label: "CGV", href: "/cgv", isRoute: true },
      { label: "Politique de confidentialité", href: "/confidentialite", isRoute: true },
      { label: "Cookies", href: "/cookies", isRoute: true },
    ],
  };

  const socialLinks = [
    { 
      label: "X", 
      href: "https://x.com/pawrisecare", 
      icon: "𝕏" 
    },
    { 
      label: "Instagram", 
      href: "https://www.instagram.com/pawrise.care/", 
      icon: "📷" 
    },
    { 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/company/pawrise/about/", 
      icon: "in" 
    },
    { 
      label: "TikTok", 
      href: "https://www.tiktok.com/@pawrisecare", 
      icon: "♪" 
    },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <span className="text-xl font-bold">Pawrise</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Le premier collier connecté qui comprend vraiment la santé de votre animal. 
              Développé avec une vétérinaire partenaire.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-3">
              {links.product.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {links.company.map((link, i) => (
                <li key={i}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, i) => (
                <li key={i}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2025 Pawrise. Tous droits réservés.
          </p>
          <p className="text-background/50 text-sm">
            Fait avec ❤️ pour nos compagnons à 4 pattes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
