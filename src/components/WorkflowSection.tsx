import { MapPin, Plane, Eye, Download } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Draw Mission Path",
      description: "Simple drag-and-drop interface to create custom flight routes with waypoints and patrol areas"
    },
    {
      icon: Plane,
      title: "Press Go to Launch", 
      description: "One-click deployment with automated pre-flight checks and instant takeoff authorization"
    },
    {
      icon: Eye,
      title: "Autonomous Execution",
      description: "Drone executes mission autonomously while streaming live HD video with AI-powered analysis"
    },
    {
      icon: Download,
      title: "AI Flags Events",
      description: "Automatic detection and alerts for incidents, with instant notifications and evidence capture"
    }
  ];

  return (
    <section className="section-padding bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Planning to Action in <span className="text-primary">Under 30 Seconds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Deploy autonomous surveillance operations with the simplicity of a smartphone app, 
            backed by enterprise-grade AI and military-grade reliability.
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