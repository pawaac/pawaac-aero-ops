import { Button } from "@/components/ui/button";
import { Play, Monitor, Wifi, Eye } from "lucide-react";
import missionControlImage from "@/assets/mission-control.jpg";

const MissionControlSection = () => {
  return (
    <section className="section-padding bg-card/10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Mission Control <span className="text-primary">Dashboard</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Real-time operation interface with comprehensive monitoring capabilities
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Live Feed Active</h3>
                  <p className="text-muted-foreground">HD video streaming with real-time overlay data and telemetry information</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">AI Detection On</h3>
                  <p className="text-muted-foreground">Automated threat detection with instant alerts and event flagging</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Monitoring</h3>
                  <p className="text-muted-foreground">Continuous mission status updates with encrypted data transmission</p>
                </div>
              </div>
            </div>

            <Button className="btn-hero-primary inline-flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Try Interactive Demo</span>
            </Button>
          </div>

          {/* Right: Dashboard Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 transform-gpu">
              <img 
                src={missionControlImage}
                alt="Mission Control Dashboard Interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Status Indicators */}
              <div className="absolute top-4 left-4 space-y-2">
                <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Live Feed Active</span>
                </div>
                <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">AI Detection On</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionControlSection;