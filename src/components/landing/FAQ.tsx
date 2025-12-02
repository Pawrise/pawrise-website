import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment fonctionne le collier Pawrise ?",
      answer:
        "Le collier Pawrise intègre des capteurs GPS, accéléromètre, cardiofréquencemètre et thermomètre. Les données sont transmises en temps réel vers notre application via une connexion cellulaire (4G/LTE) ou Bluetooth vers votre smartphone.",
    },
    {
      question: "Quelle est l'autonomie de la batterie ?",
      answer:
        "L'autonomie varie entre 5 et 14 jours selon l'utilisation et le mode de tracking choisi. Le mode économie d'énergie permet d'atteindre jusqu'à 3 semaines d'autonomie.",
    },
    {
      question: "Le collier est-il étanche ?",
      answer:
        "Oui, le collier Pawrise est certifié IP67, ce qui signifie qu'il résiste à l'immersion temporaire jusqu'à 1 mètre de profondeur. Parfait pour les jours de pluie ou les baignades occasionnelles !",
    },
    {
      question: "Comment fonctionne l'assistant vétérinaire Pawrise Care ?",
      answer:
        "Pawrise Care utilise l'intelligence artificielle pour analyser les données de votre animal et détecter des comportements anormaux. Les règles d'analyse sont définies et validées par notre vétérinaire partenaire. L'assistant peut répondre à vos questions et vous orienter vers une consultation si nécessaire.",
    },
    {
      question: "Puis-je partager les données avec mon vétérinaire ?",
      answer:
        "Absolument ! Vous pouvez exporter un rapport PDF complet à tout moment, ou donner un accès direct à votre vétérinaire via notre espace professionnel dédié.",
    },
    {
      question: "Le collier convient-il aux chats et aux petits chiens ?",
      answer:
        "Nous proposons deux tailles de collier : S/M pour les animaux de 2 à 15 kg, et L/XL pour les animaux de plus de 15 kg. Une version encore plus légère pour les chats est en développement.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Questions <span className="text-gradient-primary">fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Vous avez des questions ? Nous avons les réponses.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
