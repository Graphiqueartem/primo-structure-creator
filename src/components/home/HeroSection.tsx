import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-visible bg-gradient-hero pt-20 pb-10 sm:pt-24 sm:pb-12">
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Where Storytelling
            <span className="block text-gold-warm">Inspires Action</span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-ivory/90 leading-relaxed max-w-4xl mx-auto">
            Whimsy Films is a global production house bringing folklore, wildlife, and magical 
            storytelling to life — to inspire children, empower communities, and protect our natural world.
          </p>
          
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 justify-center items-center pt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
            <Button variant="warm" size="xl" asChild>
              <Link to="/vision">Discover Our Vision</Link>
            </Button>
            <Button variant="magical" size="xl" asChild>
              <Link to="/get-involved">Join the Movement</Link>
            </Button>
          </div>

          <div className="text-ivory/80 text-sm uppercase tracking-wider pt-12">
            Stories connect us. Culture inspires us. Together we protect our planet.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;