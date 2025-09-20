import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import { ImagePlaceholder } from "@/components/ui/placeholders";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Full-screen Hero Section */}
      <HeroSection />
      
      {/* Expanded Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-forest-deep leading-tight">
                Stories That Change the World
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                "Every tradition is a story. Every story is a bridge to the future."
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                At Whimsy Films, we see culture as a living archive of human imagination—and a tool for shaping a more sustainable tomorrow. Through film, exhibitions, festivals, and collaborations, we connect communities, governments, and cultural institutions.
              </p>
              <p>
                We do not just tell stories; we curate experiences that move audiences, spark conversations, and inspire change. By weaving together folklore and conservation, we make environmental action personal, emotional, and unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Block */}
      <section className="py-24 bg-forest-light/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep leading-tight">
                At Whimsy Films, we believe storytelling is humanity's oldest and most powerful tool
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Stories have taught us who we are, connected us across cultures, and inspired generations to dream. Today, stories must do more. They must remind us of our shared humanity, protect the fragile beauty of wildlife, and spark empathy in a divided world.
                </p>
                <p>
                  That is why Whimsy Films exists. We are a UK-based production company that creates films, series, and cultural experiences rooted in folklore and magical storytelling — designed not only to entertain but also to educate, conserve, and inspire global action.
                </p>
                <div className="bg-gradient-magical p-8 rounded-2xl text-center">
                  <p className="text-lg font-semibold text-forest-deep italic">
                    "We tell magical stories that protect nature and inspire generations."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Production Highlights */}
      <section className="py-24 bg-gradient-forest">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-forest-deep mb-6">
              Our Production Approach
            </h2>
            <p className="text-xl text-forest-deep/70 max-w-3xl mx-auto">
              Blending film, theatre, puppetry, and AI innovation to create magical stories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Wildlife Cinematography",
                description: "Capturing the raw wonder of the natural world"
              },
              {
                title: "Puppetry & Practical Artistry", 
                description: "Timeless, tactile, beloved by children"
              },
              {
                title: "Live Action & Human Performance",
                description: "Authentic, emotional, deeply relatable"
              },
              {
                title: "AI-enhanced Visuals & Innovation",
                description: "Expanding creative possibilities"
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-forest-deep">{item.title}</h3>
                <p className="text-forest-deep/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection />
    </div>
  );
};

export default Home;