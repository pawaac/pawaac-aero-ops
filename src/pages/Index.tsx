import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import AutonomySection from "@/components/AutonomySection";
import MissionControlSection from "@/components/MissionControlSection";
import WorkflowSection from "@/components/WorkflowSection";
import UseCasesSection from "@/components/UseCasesSection";
import TechnicalSection from "@/components/TechnicalSection";
import EnhancedTechnicalSection from "@/components/EnhancedTechnicalSection";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ContactSection";
import EnterpriseSection from "@/components/EnterpriseSection";
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
          <EnhancedTechnicalSection />
        </section>
        <section id="products">
          <ProductShowcase />
        </section>
        <section id="enterprise">
          <EnterpriseSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
