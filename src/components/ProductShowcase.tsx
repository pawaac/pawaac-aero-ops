import { Button } from "@/components/ui/button";
import vtolImage from "@/assets/vtol-drone.jpg";
import quadcopterImage from "@/assets/quadcopter-action.jpg";

const ProductShowcase = () => {
  const products = [
    {
      tag: "VTOL",
      name: "PAWAC VTOL Pro",
      image: vtolImage,
      description: "Next-generation Vertical Take-Off and Landing drone designed for extended surveillance missions. Combines the agility of a quadcopter with the endurance of a fixed-wing aircraft.",
      specs: [
        { label: "Flight Time", value: "8+ hours" },
        { label: "Range", value: "50+ km" },
        { label: "Payload", value: "2.5 kg" },
        { label: "Max Speed", value: "120 km/h" },
        { label: "Altitude", value: "5000m ASL" },
        { label: "Weather", value: "IP65 Rated" }
      ],
      applications: ["Border Patrol", "Long-Range Surveillance", "Search & Rescue"],
      isPopular: true
    },
    {
      tag: "QUADCOPTER", 
      name: "PAWAC Guardian X4",
      image: quadcopterImage,
      description: "High-performance surveillance quadcopter optimized for urban operations, crowd monitoring, and rapid deployment scenarios. Advanced AI-powered target tracking.",
      specs: [
        { label: "Flight Time", value: "45 minutes" },
        { label: "Range", value: "10 km" },
        { label: "Payload", value: "1.2 kg" },
        { label: "Max Speed", value: "65 km/h" },
        { label: "Camera", value: "4K Thermal" },
        { label: "Deployment", value: "< 2 minutes" }
      ],
      applications: ["Urban Surveillance", "Crowd Control", "Rapid Response"],
      isPopular: false
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mission-Ready <span className="text-primary">Drone Systems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purpose-built platforms engineered for critical government and security operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="card-premium group relative overflow-hidden hover:glow-primary animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {product.isPopular && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </div>
              )}

              {/* Tag */}
              <div className="inline-block mb-4 px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full text-sm font-semibold">
                {product.tag}
              </div>

              {/* Product Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {product.specs.map((spec, specIndex) => (
                    <div 
                      key={spec.label}
                      className="flex justify-between py-2 px-3 bg-card/50 rounded-lg border border-border/30"
                    >
                      <span className="text-sm text-muted-foreground">{spec.label}:</span>
                      <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Applications */}
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Key Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span 
                        key={app}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <Button className="btn-hero-primary text-sm px-6 py-2">
                        Get Quote
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">Contact for Pricing</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Available for</p>
                      <p className="text-sm font-semibold text-primary">Government Agencies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;