import { 
  Clock, 
  Shield, 
  Weight, 
  Wifi, 
  Eye, 
  Mountain 
} from "lucide-react";

const TechnicalSection = () => {
  const capabilities = [
    {
      icon: Clock,
      title: "Long Endurance",
      value: "8+ hours",
      description: "Extended VTOL flight time"
    },
    {
      icon: Shield,
      title: "Rugged Design",
      value: "IP65",
      description: "Weatherproof rated"
    },
    {
      icon: Weight,
      title: "High Payload",
      value: "2.5 kg",
      description: "Maximum carrying capacity"
    },
    {
      icon: Wifi,
      title: "Secure Comms",
      value: "Encrypted",
      description: "Military-grade security"
    },
    {
      icon: Eye,
      title: "AI Detection",
      value: "Real-time",
      description: "Object & threat analysis"
    },
    {
      icon: Mountain,
      title: "High Altitude",
      value: "5000m ASL",
      description: "Operational ceiling"
    }
  ];

  return (
    <section className="section-padding bg-card/10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-accent">Technical</span> Superiority
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Military-grade performance engineered for the most demanding operational environments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={capability.title}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-premium hover:glow-accent">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Value */}
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-accent mb-1">{capability.value}</div>
                    <div className="text-sm font-semibold text-foreground">{capability.title}</div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-tight">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Stats Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.7%</div>
              <div className="text-muted-foreground">Mission Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50km+</div>
              <div className="text-muted-foreground">Operational Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">&lt;2min</div>
              <div className="text-muted-foreground">Rapid Deployment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;