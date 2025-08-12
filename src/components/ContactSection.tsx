import { 
  Phone, 
  Mail, 
  GraduationCap,
  Calendar,
  MessageCircle,
  FileText,
  Shield,
  Award,
  MapPin,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactOptions = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      subtitle: "24/7 Support for Active Operations",
      contact: "+91 98765 43210",
      color: "text-orange",
      bgColor: "bg-orange/10"
    },
    {
      icon: Mail,
      title: "Sales & Partnerships",
      subtitle: "Custom Solutions & Volume Pricing",
      contact: "sales@pawaac.com",
      color: "text-cyan",
      bgColor: "bg-cyan/10"
    },
    {
      icon: GraduationCap,
      title: "Training & Certification",
      subtitle: "Operator Training Programs",
      contact: "training@pawaac.com",
      color: "text-purple",
      bgColor: "bg-purple/10"
    }
  ];

  const certifications = [
    { text: "DGCA Certified", color: "text-green" },
    { text: "ISO 27001 Compliant", color: "text-orange" },
    { text: "Made in India", color: "text-cyan" },
    { text: "24/7 Support", color: "text-purple" }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Equip Your Team with the{" "}
            <span className="bg-gradient-to-r from-orange via-cyan to-purple bg-clip-text text-transparent">
              Future of Security & Response
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            See how Pawaac drones can transform your operations with a personalized demonstration tailored to your specific security challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-gradient-to-r from-orange to-accent text-orange-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Live Demo
            </Button>
            <Button variant="outline" className="border-2 border-cyan text-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan hover:text-cyan-foreground transition-all duration-300">
              <MessageCircle className="w-5 h-5 mr-2" />
              Speak with Expert
            </Button>
          </div>
        </div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div 
                key={option.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 ${option.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-10 h-10 ${option.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {option.subtitle}
                </p>
                <a 
                  href={option.contact.includes('@') ? `mailto:${option.contact}` : `tel:${option.contact}`}
                  className={`${option.color} font-semibold text-lg hover:text-accent transition-colors animated-underline`}
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
              key={cert.text}
              className="flex items-center space-x-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-3 h-3 rounded-full bg-current ${cert.color}`} />
              <span className="text-muted-foreground font-medium">{cert.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;