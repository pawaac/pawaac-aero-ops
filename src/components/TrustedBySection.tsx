const TrustedBySection = () => {
  const agencies = [
    "Indian Police Service",
    "National Disaster Response Force", 
    "Indian Coast Guard",
    "Border Security Force",
    "Central Reserve Police Force",
    "Port Authorities"
  ];

  return (
    <section className="section-padding bg-card/30 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary font-semibold text-lg mb-8 animate-fade-in">
          Built to meet the demands of India's most critical missions
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
          {agencies.map((agency, index) => (
            <div 
              key={agency}
              className="p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm font-medium text-muted-foreground leading-tight">
                {agency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;