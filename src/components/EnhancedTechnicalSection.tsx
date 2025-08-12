import { 
  Zap, 
  Eye, 
  Wifi, 
  Shield, 
  Battery, 
  Camera 
} from "lucide-react";

const EnhancedTechnicalSection = () => {
  const capabilities = [
    {
      icon: Zap,
      title: "Fully Autonomous Flight",
      description: "GPS waypoint navigation with real-time obstacle avoidance and emergency landing protocols.",
      color: "text-orange"
    },
    {
      icon: Eye,
      title: "AI Object & Activity Detection",
      description: "Advanced computer vision models trained on security scenarios and crowd behavior analysis.",
      color: "text-primary"
    },
    {
      icon: Wifi,
      title: "Encrypted Live Video Streaming",
      description: "Military-grade AES-256 encryption with ultra-low latency HD video transmission.",
      color: "text-cyan"
    },
    {
      icon: Shield,
      title: "Weather-Resistant Build",
      description: "IP65 rating for operation in rain, dust storms, and extreme temperatures (-20°C to 55°C).",
      color: "text-green"
    },
    {
      icon: Battery,
      title: "Long-Endurance Battery",
      description: "Up to 90 minutes continuous flight time with hot-swappable battery system for 24/7 operations.",
      color: "text-purple"
    },
    {
      icon: Camera,
      title: "Multiple Payload Options",
      description: "Thermal imaging, 30x optical zoom, spotlight, loudspeaker, and emergency supply drop modules.",
      color: "text-accent"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-orange font-semibold text-lg tracking-wide mb-4">
            TECHNICAL CAPABILITIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Military-Grade Technology,{" "}
            <span className="bg-gradient-to-r from-orange to-green bg-clip-text text-transparent">
              Commercial
            </span>{" "}
            <span className="text-cyan">Simplicity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Built to withstand India's diverse environments while maintaining the ease-of-use that field operations demand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={capability.title}
                className="card-premium group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with colored background */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br from-${capability.color.replace('text-', '')}/20 to-${capability.color.replace('text-', '')}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${capability.color}`} />
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-bold mb-4 text-foreground group-hover:${capability.color} transition-colors duration-300`}>
                  {capability.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTechnicalSection;