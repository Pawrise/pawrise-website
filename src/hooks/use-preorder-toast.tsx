import { useToast } from "@/hooks/use-toast";

export const usePreorderToast = () => {
  const { toast } = useToast();

  const showComingSoon = () => {
    toast({
      title: "🚀 Bientôt disponible !",
      description: "Pawrise est actuellement en développement. Inscrivez-vous pour être informé du lancement.",
    });
  };

  const showLoginComingSoon = () => {
    toast({
      title: "🔐 Espace membre",
      description: "L'espace membre sera disponible lors du lancement officiel de Pawrise.",
    });
  };

  return { showComingSoon, showLoginComingSoon };
};
