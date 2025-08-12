import { 
  Phone, 
  Mail, 
  GraduationCap,
  Calendar,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactOptions = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      subtitle: "24/7 Support for Active Operations",
      contact: "+91 98765 43210",
      bgGradient: "from-orange/20 to-orange/10"
    },
    {
      icon: Mail,
      title: "Sales & Partnerships",
      subtitle: "Custom Solutions & Volume Pricing",
      contact: "sales@pawaac.com",
      bgGradient: "from-cyan/20 to-cyan/10"
    },
    {
      icon: GraduationCap,
      title: "Training & Certification",
      subtitle: "Operator Training Programs",
      contact: "training@pawaac.com",
      bgGradient: "from-purple/20 to-purple/10"
    }
  ];

  const certifications = [
    "DGCA Certified",
    "ISO 27001 Compliant", 
    "Made in India",
    "24/7 Support"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Equip Your Team with the{" "}
            <span className="bg-gradient-to-r from-orange via-cyan to-purple bg-clip-text text-transparent">
              Future of Security & Response
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            See how Pawaac drones can transform your operations with a personalized demonstration tailored to your specific security challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button className="btn-enterprise-primary group">
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Book a Live Demo
            </Button>
            <Button className="btn-enterprise-secondary group">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Speak with Expert
            </Button>
          </div>
        </div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div 
                key={option.title}
                className="text-center p-8 rounded-3xl bg-gradient-to-b from-card/50 to-card/20 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${option.bgGradient} rounded-2xl flex items-center justify-center`}>
                  <Icon className="w-10 h-10 text-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.subtitle}
                </p>
                <a 
                  href={option.contact.includes('@') ? `mailto:${option.contact}` : `tel:${option.contact}`}
                  className="text-orange font-semibold text-lg hover:text-accent transition-colors animated-underline"
                >
                  {option.contact}
                </a>
              </div>
            );
          })}
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

export default ContactSection;