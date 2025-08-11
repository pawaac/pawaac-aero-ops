import { Shield, Anchor, Users, Search, Building, MapPin } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Users,
      title: "Urban Crowd Monitoring",
      description: "Monitor festivals, protests, and large gatherings with real-time crowd density analysis and behavioral pattern detection",
      features: ["Crowd density mapping", "Aggressive behavior detection", "Emergency evacuation routes"]
    },
    {
      icon: Anchor,
      title: "Coastal & Port Security", 
      description: "24/7 perimeter surveillance for ports, harbors, and coastal installations with vessel tracking and intrusion detection",
      features: ["Vessel identification", "Perimeter breach alerts", "Night vision capability"]
    },
    {
      icon: Search,
      title: "Disaster Response & SAR",
      description: "Rapid deployment for search and rescue operations, disaster assessment, and emergency coordination support",
      features: ["Thermal imaging", "Survivor detection", "Real-time damage assessment"]
    },
    {
      icon: Shield,
      title: "Border Patrol",
      description: "24/7 autonomous perimeter monitoring with AI threat detection and real-time alerts for critical border security",
      features: ["Automated intrusion detection", "Long-range surveillance", "Weather-resistant operation"]
    },
    {
      icon: Building,
      title: "Infrastructure Monitoring",
      description: "Automated inspection of critical infrastructure including pipelines, bridges, railways, and power transmission lines",
      features: ["Structural analysis", "Predictive maintenance", "Asset condition reports"]
    },
    {
      icon: MapPin,
      title: "Critical Infrastructure",
      description: "Power plants, airports, and strategic asset protection with autonomous patrols and real-time threat assessment",
      features: ["Perimeter security", "Asset protection", "Automated reporting"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Purpose-Built for <span className="text-primary">Every Security Challenge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            From urban surveillance to coastal patrol, our autonomous systems adapt to your specific operational requirements with pre-configured mission templates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={useCase.title}
                className="card-premium group hover:glow-primary animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {useCase.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border/30">
                  <button className="text-primary text-sm font-medium hover:text-accent transition-colors animated-underline">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;