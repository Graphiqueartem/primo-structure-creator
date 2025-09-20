import { Link } from "react-router-dom";
import { getValidRoute } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { StatsSection } from "@/components/layout/StatsSection";
import { QuoteSection } from "@/components/layout/QuoteSection";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Sparkles, 
  Globe,
  Lightbulb,
  Target,
  Users,
  BookOpen
} from "lucide-react";

const Vision = () => {
  const visionStats = [
    {
      icon: <Globe className="h-8 w-8" />,
      number: "195",
      label: "Countries",
      description: "Stories that can reach every nation"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: "1000+",
      label: "Folktales",
      description: "Waiting to be brought to life"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "2.5B",
      label: "Children",
      description: "Who deserve inspiring stories"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "1",
      label: "Planet",
      description: "That needs our protection"
    }
  ];

  return (
    <>
      {/* Hero Section with Video Background */}
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
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-white/20 text-white border-white/30">
                Our Vision
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Reimagining Stories, Inspiring Change
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-4">
              Mission & Values
            </h2>
            <div className="text-lg text-white/80 mb-8 space-y-4">
              <p className="font-semibold">
                At Whimsy Films, our mission is to create films that celebrate folklore, protect wildlife, and inspire children everywhere to imagine a more inclusive, compassionate, and sustainable world.
              </p>
              <div className="space-y-3 text-left max-w-2xl mx-auto">
                <p className="font-semibold"><strong>Imagination:</strong> wonder is the seed of empathy and action.</p>
                <p className="font-semibold"><strong>Respect:</strong> cultural and ecological authenticity.</p>
                <p className="font-semibold"><strong>Innovation:</strong> technology without losing artistry.</p>
                <p className="font-semibold"><strong>Collaboration:</strong> co-created with governments, NGOs, educators, and communities.</p>
                <p className="font-semibold"><strong>Impact:</strong> every project contributes to cultural, social, and environmental good.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg" asChild>
                <Link to="/partnerships">Join Our Mission</Link>
              </Button>
              <Button variant="magical" size="lg" asChild>
                <Link to="/get-involved">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission-values" className="py-1 md:py-4 lg:py-5">
        <div className="container mx-auto px-4 md:px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-forest-deep mb-4">Mission & Values</h2>
            <p className="text-body-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              At Whimsy Films, our mission is to create films that celebrate folklore, protect wildlife, and inspire children everywhere to imagine a more inclusive, compassionate, and sustainable world.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Stats */}
      <StatsSection 
        title="The Scale of Our Vision"
        subtitle="Big dreams require bold action and global collaboration"
        stats={visionStats}
        backgroundClass="bg-forest-light/5"
      />

      {/* Core Values */}
      <ContentBlock 
        title="Our Core Values"
        variant="minimal"
        className="bg-background"
        icon={<Sparkles className="h-12 w-12 text-primary" />}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105 bg-gradient-warm border-0">
            <CardHeader>
              <div className="mx-auto mb-4 text-forest-deep">
                <Sparkles className="h-12 w-12" />
              </div>
              <CardTitle className="text-xl text-forest-deep">Imagination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-forest-deep/80">
                Wonder is the seed of empathy and action. Every story begins with imagination.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="mx-auto mb-4 text-primary">
                <Heart className="h-12 w-12" />
              </div>
              <CardTitle className="text-xl">Respect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cultural and ecological authenticity in everything we create.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105 bg-forest-light/20 border-forest-light/30">
            <CardHeader>
              <div className="mx-auto mb-4 text-forest-deep">
                <Globe className="h-12 w-12" />
              </div>
              <CardTitle className="text-xl text-forest-deep">Global Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-forest-deep/80">
                Every project contributes to cultural, social, and environmental good.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentBlock>

      {/* Why Storytelling Matters */}
      <ContentBlock 
        title="Why Storytelling Matters"
        variant="outlined"
        className="bg-background"
        id="why-storytelling-matters"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Stories are more than entertainment. They pass down cultural wisdom, shape childhood imagination, build empathy, and inspire societal change. Whimsy Films uses this power intentionally, turning folklore and wildlife storytelling into platforms for education, diplomacy, and conservation.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to={getValidRoute("/productions")}>Discover Our Approach</Link>
            </Button>
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

      {/* Quote Section */}
      <QuoteSection 
        quote="When children see themselves as heroes protecting wildlife, they develop deep emotional connections to conservation that last a lifetime."
        author="Conservation Psychology Research"
        role="The Power of Character Connection"
        backgroundClass="bg-gradient-hero text-white"
      />

      {/* The Future We Are Building */}
      <ContentBlock 
        title="The Future We Are Building"
        variant="gradient"
        id="future-we-are-building"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <VideoPlaceholder />
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder />
              <VideoPlaceholder />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-body-lg text-forest-deep/80 leading-relaxed">
              We envision a future where children everywhere grow up with stories representing their cultures, where families discover films that are entertaining yet enriching, and where governments and NGOs use our productions as cultural diplomacy tools and awareness campaigns. Conservation efforts are amplified by stories that make the natural world unforgettable.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/partnerships">Be Part of This Future</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>

      {/* Call to Action */}
      <ContentBlock 
        title="Turn Vision Into Reality"
        variant="outlined"
        className="bg-forest-light/10"
      >
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every great story begins with someone believing it's possible. Join us in creating 
            the stories that will shape tomorrow, where entertainment meets education and conservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/get-involved">Join the Movement</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>
    </>
  );
};

export default Vision;