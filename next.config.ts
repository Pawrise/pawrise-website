import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Export 100% statique → dossier `out/` déployable tel quel sur Hostinger
  // ou n'importe quel hébergeur/CD (aucun serveur Node requis).
  output: "export",
  // URLs en dossier (`/pilotage/` → `pilotage/index.html`) : indispensable
  // pour de l'hébergement statique sans réécriture serveur.
  trailingSlash: true,
  // Pas de next/image dans le projet, mais requis pour l'export statique.
  images: { unoptimized: true },
  // Le dossier parent contient un package-lock.json (outillage BMAD) : on fixe
  // explicitement la racine sur ce projet pour lever l'avertissement multi-lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
