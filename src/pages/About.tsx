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
      <PageHeader
        badge="About Whimsy Films"
        title="Where Stories Meet Conservation"
        subtitle="A Movement for Cultural Celebration and Wildlife Protection"
        description={
          <div className="space-y-4">
            <p>
              We are more than a studio — we are a movement bridging the gap between ancient wisdom 
              and modern conservation. From the folklore of Africa to the fairy tales of Europe, 
              we bring magical stories to life while protecting the natural world that inspired them.
            </p>
          </div>
        }
        actions={
          <>
            <Button variant="warm" size="lg" asChild>
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
            <Button variant="magical" size="lg" asChild>
              <Link to="/get-involved">Join Our Mission</Link>
            </Button>
          </>
        }
        decorativeElements={
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <ImagePlaceholder />
            <ImagePlaceholder />
            <ImagePlaceholder />
          </div>
        }
      />

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
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whimsy Films is a UK-based production house dedicated to creating magical, 
              child-centered films and series that combine folklore, wildlife, and imaginative 
              storytelling. But we are more than a studio — we are a movement for cultural 
              celebration and conservation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From Africa to Asia, from Europe to the Americas, we bring magical stories 
              to life through puppetry, wildlife cinematography, and cultural authenticity — 
              inviting the world to join us in protecting nature and celebrating heritage.
            </p>
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
        title="Born From a Love of Stories and the Natural World"
        variant="gradient"
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
            <p className="text-lg text-forest-deep/80 leading-relaxed">
              Whimsy Films began with a simple belief: that the old stories we tell our children 
              hold the power to shape the world of tomorrow. Across every culture, fairy tales 
              and folklore carry wisdom, values, and a connection to the natural world.
            </p>
            <p className="text-lg text-forest-deep/80 leading-relaxed">
              At the same time, our planet's wildlife faces unprecedented threats. Children are 
              growing up further removed from nature, at risk of losing their connection to the 
              very creatures and landscapes that inspired those stories in the first place.
            </p>
            <p className="text-lg text-forest-deep/80 leading-relaxed">
              Whimsy Films was founded to bridge that gap. To reawaken the magic of folklore 
              and reconnect children with wildlife, through films that are enchanting, 
              educational, and globally inclusive.
            </p>
          </div>
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