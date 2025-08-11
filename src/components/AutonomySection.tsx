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
                <span className="text-primary">Intelligence That Thinks,</span>
                <br />
                <span className="text-accent">Systems That Act</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  Our advanced AI models process real-time visual data to identify threats, track targets, and alert operators instantly — all while maintaining complete autonomous flight operations.
                </p>
              </div>
            </div>

            {/* AI Capabilities Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">Simple Route Planning</h3>
                <p className="text-muted-foreground">Draw mission paths directly on the map interface. Click and deploy with intuitive waypoint system.</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Autonomous Execution</h3>
                <p className="text-muted-foreground">Advanced GPS navigation with real-time obstacle avoidance. Zero pilot intervention required.</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">AI Vision Alerts</h3>
                <p className="text-muted-foreground">Real-time detection of suspicious activities, intrusions, crowd anomalies, and emergency situations.</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Incident Replay</h3>
                <p className="text-muted-foreground">Complete mission recordings with AI-generated summaries and automated incident reports.</p>
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