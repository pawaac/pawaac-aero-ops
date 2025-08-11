import missionPlanningImage from "@/assets/mission-planning.jpg";

const AutonomySection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 transform-gpu">
              <img 
                src={missionPlanningImage}
                alt="Drone mission planning interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
          </div>

          {/* Right: Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary">Autonomy</span> + <span className="text-accent">AI Vision</span>
                <br />
                <span className="text-foreground">Perfect Precision</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  Draw your route, tap GO, and watch your drone execute missions with 
                  <span className="text-primary font-semibold"> centimeter-level precision</span> — 
                  streaming AI-detected alerts directly to your control panel.
                </p>
                
                <p className="leading-relaxed">
                  Our vision models detect, classify, and alert in real-time — from intrusions 
                  to environmental hazards, ensuring 
                  <span className="text-accent font-semibold"> nothing goes unnoticed</span>.
                </p>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                "Real-time AI Detection",
                "Autonomous Navigation", 
                "Encrypted Data Stream",
                "Multi-Sensor Fusion"
              ].map((feature, index) => (
                <span 
                  key={feature}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium animate-slide-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomySection;