const TrustedBySection = () => {
  const agencies = [
    {
      name: "City Police Departments",
      description: "Urban Security"
    },
    {
      name: "Port Authorities", 
      description: "Maritime Safety"
    },
    {
      name: "Coastal Guard Units",
      description: "Border Protection"
    },
    {
      name: "NDRF",
      description: "Disaster Response"
    },
    {
      name: "Private Security",
      description: "Asset Protection"
    },
    {
      name: "Emergency Services",
      description: "Public Safety"
    }
  ];

  return (
    <section className="section-padding bg-card/20 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Agencies Across India
          </h2>
          <p className="text-lg text-muted-foreground">
            Engineered for India's Toughest Environments
          </p>
          <p className="text-muted-foreground mt-2">
            From coastal patrol to crowd monitoring, our autonomous systems serve the nation's most critical security and safety operations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {agencies.map((agency, index) => (
            <div 
              key={agency.name}
              className="text-center p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-2 leading-tight">{agency.name}</h3>
              <p className="text-xs text-primary font-medium">{agency.description}</p>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Successful Missions</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Partner Agencies</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm text-muted-foreground">Uptime Reliability</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '1.1s' }}>
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;