import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Features from "@/components/landing/Features";
import PawriseCare from "@/components/landing/PawriseCare";
import Comparison from "@/components/landing/Comparison";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <PawriseCare />
      <Comparison />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
