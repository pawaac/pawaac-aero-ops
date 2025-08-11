import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">PAWAAC</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Next-generation autonomous drone systems with AI-powered vision models for India's critical missions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">VTOL Pro</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">Guardian X4</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">Mission Planning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">AI Vision Suite</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">Border Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">Urban Surveillance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">Search & Rescue</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">Critical Infrastructure</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} />
                <span>contact@pawaac.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={16} className="mt-1" />
                <span>Bangalore, Karnataka<br />India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Pawaac Drones. All rights reserved. Made in India.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors animated-underline">
                Export Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;