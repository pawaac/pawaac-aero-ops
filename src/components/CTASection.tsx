import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Equip Your Team with{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Autonomous Aerial Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join India's leading security agencies who trust Pawaac drones for their most critical missions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button className="btn-hero-primary">
              Request a Demo
            </Button>
            <Button variant="outline" className="btn-hero-secondary">
              Contact Sales
            </Button>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Made in India</div>
              <div className="text-muted-foreground">For Indian Missions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Rapid</div>
              <div className="text-muted-foreground">Deployment Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;