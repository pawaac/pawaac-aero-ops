import { MapPin, Plane, Eye, Download } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Plan Mission",
      description: "Draw route on map with waypoints and mission parameters"
    },
    {
      icon: Plane,
      title: "Launch & Monitor", 
      description: "Autonomous flight with real-time video feed and telemetry"
    },
    {
      icon: Eye,
      title: "Get AI Alerts",
      description: "Instant notifications from onboard vision models"
    },
    {
      icon: Download,
      title: "Review & Act",
      description: "Replay, download, and export mission data for analysis"
    }
  ];

  return (
    <section className="section-padding bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mission-Ready in <span className="text-primary">Minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From planning to actionable intelligence, our intuitive workflow gets your team operational fast
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.title}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent/30 transform translate-y-0.5 z-0" />
                )}
                
                <div className="card-premium text-center relative z-10 group-hover:glow-primary">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;