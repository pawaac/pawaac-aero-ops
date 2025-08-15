import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drone.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Pawaac autonomous drone in action" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Tagline */}
        <div className="mb-8 animate-fade-in">
          <p className="text-primary font-semibold text-lg tracking-wide">
            Engineered for India's Toughest Environments
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Eyes in the Sky.</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Intelligence on the Ground.
            </span>
          </h1>
          
          <div className="mb-6">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="text-primary">Pawaac Drones</span> — Autonomous Aerial Intelligence for Public Safety & Security
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Autonomous route execution, AI-powered vision alerts, and field-proven reliability for law 
            enforcement, coastal security, and emergency response operations across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="btn-hero-primary">
              Request Demo
            </Button>
            <Button variant="outline" className="btn-hero-secondary">
              See It in Action
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Autonomous Operations</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Mission Success Rate</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">&lt;30s</div>
              <div className="text-sm text-muted-foreground">Rapid Deployment</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;