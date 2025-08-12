import { 
  Building2, 
  FileCheck, 
  Download,
  Calendar,
  Shield,
  Award,
  Globe,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EnterpriseSection = () => {
  const certifications = [
    "SOC 2 Certified",
    "FIPS 140-2 Compliant", 
    "DGCA Enterprise Approved",
    "24/7 Enterprise Support"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready for <span className="text-foreground">Enterprise Deployment?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Our advanced solutions team works directly with government agencies and large enterprises to design custom autonomous systems that meet your specific operational requirements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button className="btn-enterprise-primary group">
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Schedule Enterprise Demo
            </Button>
            <Button className="btn-enterprise-secondary group">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download Technical Specs
            </Button>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-border/30">
          {certifications.map((cert, index) => (
            <div 
              key={cert}
              className="flex items-center space-x-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;