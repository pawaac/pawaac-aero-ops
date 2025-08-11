import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import AutonomySection from "@/components/AutonomySection";
import MissionControlSection from "@/components/MissionControlSection";
import WorkflowSection from "@/components/WorkflowSection";
import UseCasesSection from "@/components/UseCasesSection";
import TechnicalSection from "@/components/TechnicalSection";
import ProductShowcase from "@/components/ProductShowcase";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <AutonomySection />
        <MissionControlSection />
        <WorkflowSection />
        <section id="usecases">
          <UseCasesSection />
        </section>
        <section id="technical">
          <TechnicalSection />
        </section>
        <section id="products">
          <ProductShowcase />
        </section>
        <section id="contact">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
