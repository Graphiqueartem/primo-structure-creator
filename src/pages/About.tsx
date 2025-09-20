import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { StatsSection } from "@/components/layout/StatsSection";
import { QuoteSection } from "@/components/layout/QuoteSection";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Film, 
  Globe, 
  Leaf,
  Users,
  Heart,
  Camera,
  BookOpen,
  Sparkles
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Globe className="h-8 w-8" />,
      number: "6",
      label: "Continents",
      description: "Stories from every corner of the world"
    },
    {
      icon: <Film className="h-8 w-8" />,
      number: "2019",
      label: "Founded", 
      description: "Years of passion for storytelling"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "25+",
      label: "Team Members",
      description: "Artists, storytellers, and conservationists"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "∞",
      label: "Stories",
      description: "Limitless tales waiting to be told"
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
                About Whimsy Films
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              A Global Studio With a Purpose
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-4">
              Where Stories Meet Conservation
            </h2>
            <div className="text-lg text-white/80 mb-8">
              <p className="font-semibold">
                Whimsy Films is a UK-based production house dedicated to creating magical, child-centered films and series that combine folklore, wildlife, and imaginative storytelling. But we are more than a studio — we are a movement for cultural celebration and conservation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg" asChild>
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
              <Button variant="magical" size="lg" asChild>
                <Link to="/get-involved">Join Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        title="Our Journey So Far"
        subtitle="Building bridges between cultures and conservation since 2019"
        stats={stats}
        backgroundClass="bg-background"
      />

      {/* Who We Are */}
      <ContentBlock 
        title="Who We Are"
        variant="outlined"
        className="bg-forest-light/5"
        icon={<Sparkles className="h-12 w-12 text-primary" />}
        id="who-we-are"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Whimsy Films is a UK-based production house dedicated to creating magical, child-centered films and series that combine folklore, wildlife, and imaginative storytelling. But we are more than a studio — we are a movement for cultural celebration and conservation.
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              We work at the intersection of:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Film className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Creative Cinema</strong> – original productions blending live action, puppetry, wildlife, and AI-enhanced visuals.</span>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Cultural Heritage</strong> – folklore and fairy tales from around the world, retold with respect and authenticity.</span>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Conservation Storytelling</strong> – every story supports the protection of wildlife and ecosystems.</span>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Child-Focused Education</strong> – stories designed to spark empathy, curiosity, and learning.</span>
              </div>
            </div>
            <Button variant="default" size="lg" asChild>
              <Link to="/partnerships">Meet Our Partners</Link>
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

      {/* Our Approach */}
      <ContentBlock 
        title="Our Creative Philosophy"
        variant="minimal"
        className="bg-background"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="mx-auto mb-4 text-primary">
                <Film className="h-12 w-12" />
              </div>
              <CardTitle className="text-xl">Creative Cinema</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Original productions blending live action, puppetry, wildlife, and AI-enhanced visuals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="mx-auto mb-4 text-primary">
                <Globe className="h-12 w-12" />
              </div>
              <CardTitle className="text-xl">Cultural Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Folklore and fairy tales from around the world, retold with respect and authenticity.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="mx-auto mb-4 text-primary">
                <Leaf className="h-12 w-12" />
              </div>
              <CardTitle className="text-xl">Conservation Storytelling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every story supports the protection of wildlife and ecosystems.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentBlock>

      {/* Quote Section */}
      <QuoteSection 
        quote="The old stories we tell our children hold the power to shape the world of tomorrow."
        author="Whimsy Films Foundation"
        role="Our Founding Principle"
      />

      {/* Our Story */}
      <ContentBlock 
        title="Our Story"
        variant="gradient"
        id="our-story"
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
              Whimsy Films began with a simple belief: that the old stories we tell our children hold the power to shape the world of tomorrow. Across every culture, fairy tales and folklore carry wisdom, values, and a connection to the natural world. Yet, many of these stories remain untold on the global stage.
            </p>
            <p className="text-body-lg text-forest-deep/80 leading-relaxed">
              At the same time, our planet's wildlife faces unprecedented threats. Children are growing up further removed from nature, at risk of losing their connection to the very creatures and landscapes that inspired those stories in the first place.
            </p>
            <p className="text-body-lg text-forest-deep/80 leading-relaxed">
              Whimsy Films was founded to bridge that gap. To reawaken the magic of folklore and reconnect children with wildlife, through films that are enchanting, educational, and globally inclusive.
            </p>
            <div className="bg-white/20 p-6 rounded-lg">
              <h4 className="font-semibold text-forest-deep mb-3">Why Folklore & Sustainability:</h4>
              <p className="text-body text-forest-deep/80">
                Folklore is more than entertainment. It is the ancestral memory of humankind, carrying lessons on how to coexist with the environment, how to navigate social harmony, and how to find meaning in times of uncertainty. At Whimsy Films, we treat folklore as a vital resource for sustainability education. By connecting stories with pressing issues like climate change, biodiversity, and cultural preservation, we reframe folklore as a tool for empowerment. Through our work, heritage is not frozen in time but activated as a force for present and future change.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link to="/vision">Read Our Story</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>

      {/* Our Team */}
      <ContentBlock 
        title="Our Team"
        variant="outlined"
        className="bg-background"
        id="our-team"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            While Whimsy Films is young, it is built on collaboration and expertise. For each project, we bring together:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-forest-deep mb-2">Cultural Consultants</h4>
                <p className="text-sm text-muted-foreground">Ensuring authenticity in folklore representation</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Leaf className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-forest-deep mb-2">Wildlife Specialists</h4>
                <p className="text-sm text-muted-foreground">Guiding our conservation storytelling and animal cinematography</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-forest-deep mb-2">Puppetry & Practical Artists</h4>
                <p className="text-sm text-muted-foreground">Crafting characters that feel tactile and timeless</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Film className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-forest-deep mb-2">Filmmakers & Technologists</h4>
                <p className="text-sm text-muted-foreground">Blending AI, VFX, and live action into seamless narratives</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-forest-deep mb-2">Educators</h4>
                <p className="text-sm text-muted-foreground">Aligning our stories with child learning frameworks</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-muted-foreground">
            Our core founding team is supported by a growing global network of advisors, creatives, and institutional partners.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/partnerships">Meet Our Partners</Link>
          </Button>
        </div>
      </ContentBlock>

      {/* Call to Action */}
      <ContentBlock 
        title="Join Our Global Network"
        variant="outlined"
        className="bg-forest-light/10"
      >
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Be part of a movement that celebrates culture, protects wildlife, and inspires the next generation. 
            Every partnership amplifies our impact and brings us closer to a world where every child can see 
            themselves as heroes protecting the natural world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>
    </>
  );
};

export default About;