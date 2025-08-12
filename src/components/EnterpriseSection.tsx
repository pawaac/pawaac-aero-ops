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
    { 
      text: "SOC 2 Certified", 
      color: "text-green",
      icon: Shield
    },
    { 
      text: "FIPS 140-2 Compliant", 
      color: "text-orange",
      icon: FileCheck
    },
    { 
      text: "DGCA Enterprise Approved", 
      color: "text-cyan",
      icon: Award
    },
    { 
      text: "24/7 Enterprise Support", 
      color: "text-purple",
      icon: Headphones
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for <span className="text-orange">Enterprise</span>{" "}
            <span className="text-cyan">Deployment</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Our advanced solutions team works directly with government agencies and large enterprises to design custom autonomous systems that meet your specific operational requirements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-gradient-to-r from-orange to-accent text-orange-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Enterprise Demo
            </Button>
            <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download Technical Specs
            </Button>
          </div>
        </div>

        {/* Enterprise Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-slide-up">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange/20 to-orange/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-8 h-8 text-orange" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Custom Integration</h3>
            <p className="text-sm text-muted-foreground">Tailored to your existing security infrastructure</p>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan/20 to-cyan/10 rounded-xl flex items-center justify-center">
              <Globe className="w-8 h-8 text-cyan" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Multi-Site Deployment</h3>
            <p className="text-sm text-muted-foreground">Coordinated operations across multiple locations</p>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green/20 to-green/10 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-green" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Enhanced Security</h3>
            <p className="text-sm text-muted-foreground">Enterprise-grade encryption and access controls</p>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple/20 to-purple/10 rounded-xl flex items-center justify-center">
              <Headphones className="w-8 h-8 text-purple" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Dedicated Support</h3>
            <p className="text-sm text-muted-foreground">24/7 technical support and rapid response</p>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-border/30">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div 
                key={cert.text}
                className="flex items-center space-x-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={`w-5 h-5 ${cert.color}`} />
                <span className="text-muted-foreground font-medium">{cert.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;