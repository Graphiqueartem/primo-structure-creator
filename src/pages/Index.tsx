import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { StatsSection } from "@/components/layout/StatsSection";
import { QuoteSection } from "@/components/layout/QuoteSection";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { getValidRoute } from "@/utils/navigation";
import { 
  Film, 
  Globe, 
  Leaf, 
  Users, 
  Camera, 
  BookOpen, 
  Heart,
  Target,
  Play
} from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_mantis-or-praying-mantis-mantis-religiosa-the-green_8660552.mp4"
            autoPlay 
            muted 
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Where Storytelling Inspires Action
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-4">
              Stories connect us. Culture inspires us. Together we protect our planet.
            </h2>
            <div className="text-lg text-white/80 mb-8">
              <p>
                Whimsy Films is a global production house bringing folklore, wildlife, and magical storytelling to life — to inspire children, empower communities, and protect our natural world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-white text-forest-deep hover:bg-white/90" asChild>
                <Link to={getValidRoute("/partnerships")}>Partner With Us</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-deep" asChild>
                <Link to={getValidRoute("/vision")}>Discover Our Vision</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Divider */}
      <QuoteSection 
        quote="Every tradition is a story. Every story is a bridge to the future."
        author=""
        role=""
        backgroundClass="bg-background"
      />

      {/* Expanded Intro Section */}
      <ContentBlock 
        title=""
        variant="minimal"
        className="bg-forest-light/5"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              At Whimsy Films, we see culture as a living archive of human imagination—and a tool for shaping a more sustainable tomorrow. Through film, exhibitions, festivals, and collaborations, we connect communities, governments, and cultural institutions.
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              We do not just tell stories; we curate experiences that move audiences, spark conversations, and inspire change. By weaving together folklore and conservation, we make environmental action personal, emotional, and unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to={getValidRoute("/partnerships")}>Explore Partnerships</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to={getValidRoute("/get-involved")}>Register Your Interest</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <ImagePlaceholder />
            <div className="grid grid-cols-2 gap-4">
              <VideoPlaceholder />
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Stories That Change the World */}
      <ContentBlock 
        title="Stories That Change the World"
        variant="outlined"
        className="bg-background"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <VideoPlaceholder />
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder />
              <VideoPlaceholder />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              At Whimsy Films, we believe storytelling is humanity's oldest and most powerful tool. Stories have taught us who we are, connected us across cultures, and inspired generations to dream.
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Today, stories must do more. They must remind us of our shared humanity, protect the fragile beauty of wildlife, and spark empathy in a divided world.
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              That is why Whimsy Films exists. We are a UK-based production company that creates films, series, and cultural experiences rooted in folklore and magical storytelling — designed not only to entertain but also to educate, conserve, and inspire global action.
            </p>
            <p className="text-body-lg font-semibold text-primary">
              We tell magical stories that protect nature and inspire generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to={getValidRoute("/productions")}>Watch Our Films</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to={getValidRoute("/partnerships")}>Partner With Us</Link>
              </Button>
              <Button variant="magical" size="lg" asChild>
                <Link to={getValidRoute("/get-involved")}>Join the Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Production Highlights */}
      <ContentBlock 
        title="Our Creative Excellence"
        variant="minimal"
        className="bg-forest-light/10"
      >
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 text-center">
          Our production house blends film, theatre, puppetry, and AI innovation. Our work celebrates folklore, protects wildlife, and inspires the imaginations of children and adults alike. From Africa to Asia, from Europe to the Americas, we bring magical stories to life — and invite the world to join us.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-magical transition-all duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 text-primary">
                <Camera className="h-12 w-12" />
              </div>
              <CardTitle className="text-lg">Wildlife Cinematography</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Capturing the raw wonder of the natural world.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 text-primary">
                <Heart className="h-12 w-12" />
              </div>
              <CardTitle className="text-lg">Puppetry & Practical Artistry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Timeless, tactile, beloved by children.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 text-primary">
                <Users className="h-12 w-12" />
              </div>
              <CardTitle className="text-lg">Live Action & Human Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Authentic, emotional, deeply relatable.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 text-primary">
                <Target className="h-12 w-12" />
              </div>
              <CardTitle className="text-lg">AI-enhanced Visuals & Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Expanding creative possibilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentBlock>

      {/* Why Whimsy Films Matters */}
      <ContentBlock 
        title="Why Whimsy Films Matters"
        variant="gradient"
      >
        <div className="space-y-8">
          <p className="text-lg text-forest-deep/80 max-w-4xl mx-auto text-center leading-relaxed">
            We are not simply a film studio. We are building a global cultural platform where every production:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-white/50 border-forest-light/30">
                <CardContent className="p-6">
                  <p className="text-forest-deep/80">
                    Acts as a soft power tool for governments to showcase their cultural heritage.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 border-forest-light/30">
                <CardContent className="p-6">
                  <p className="text-forest-deep/80">
                    Serves as a catalyst for conservation partnerships, linking storytelling with wildlife protection.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="bg-white/50 border-forest-light/30">
                <CardContent className="p-6">
                  <p className="text-forest-deep/80">
                    Supports education systems, offering engaging, curriculum-linked cultural resources.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 border-forest-light/30">
                <CardContent className="p-6">
                  <p className="text-forest-deep/80">
                    Creates new economic opportunities in creative industries, tourism, and cultural exchange.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-forest-deep/80 mb-6 font-semibold">
              For investors, governments, and NGOs, Whimsy Films represents a rare opportunity to partner in shaping the future of inclusive, impactful children's media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to={getValidRoute("/impact")}>Discover Our Impact</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to={getValidRoute("/partnerships")}>Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </ContentBlock>
    </>
  );
};

export default Index;