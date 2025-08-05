import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-artisans.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
          Handcrafted with
          <span className="block text-artisan-gold">Love & Tradition</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover authentic treasures made by skilled artisans who pour their heart and heritage into every piece. Support local craftsmanship and bring home stories that last a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-warm transition-all duration-300 transform hover:scale-105"
          >
            Shop Our Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Meet Our Artisans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;