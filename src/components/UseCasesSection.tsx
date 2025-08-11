import { Shield, Anchor, Users, Search, Building, MapPin } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Shield,
      title: "Border Patrol",
      description: "24/7 autonomous perimeter monitoring with AI threat detection and real-time alerts"
    },
    {
      icon: Anchor,
      title: "Port & Coastal Surveillance", 
      description: "Maritime security with long-range VTOL capabilities and weather-resistant operation"
    },
    {
      icon: Users,
      title: "Crowd Monitoring",
      description: "Urban surveillance with AI-powered crowd analysis and rapid deployment capability"
    },
    {
      icon: Search,
      title: "Search & Rescue",
      description: "NDRF operations with thermal imaging, extended flight time, and GPS precision"
    },
    {
      icon: Building,
      title: "Industrial Security",
      description: "Private facility monitoring with customizable alert zones and encrypted data"
    },
    {
      icon: MapPin,
      title: "Critical Infrastructure",
      description: "Power plants, airports, and strategic asset protection with autonomous patrols"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven in <span className="text-primary">Critical Missions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From high-stakes security operations to life-saving rescue missions, Pawaac drones deliver when it matters most
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
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;