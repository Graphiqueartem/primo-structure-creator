import HeroSection from "@/components/home/HeroSection";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { StatsSection } from "@/components/layout/StatsSection";
import { QuoteSection } from "@/components/layout/QuoteSection";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Film, 
  Globe, 
  Leaf, 
  Users, 
  Camera, 
  BookOpen, 
  Heart,
  Target
} from "lucide-react";

const Index = () => {
  const stats = [
    {
      icon: <Globe className="h-8 w-8" />,
      number: "50+",
      label: "Cultures",
      description: "Stories from across the globe"
    },
    {
      icon: <Film className="h-8 w-8" />,
      number: "25+",
      label: "Productions",
      description: "Films and series in development"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "100K+",
      label: "Children",
      description: "Reached through our content"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      number: "15",
      label: "Species",
      description: "Featured in conservation stories"
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection 
        title="Our Global Impact"
        subtitle="Creating meaningful connections through storytelling and conservation"
        stats={stats}
      />

      {/* Features Section */}
      <ContentBlock 
        title="Our Creative Focus"
        variant="minimal"
        className="bg-background"
      >
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 text-center">
          Bringing together folklore, wildlife, and storytelling through innovative media production
        </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2 md:pb-3">
                <div className="mx-auto mb-2 md:mb-3 text-primary">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <CardTitle className="text-base md:text-lg">Cultural Heritage</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3 md:pb-4">
                <p className="text-xs md:text-sm text-muted-foreground">Authentic folklore from around the world</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2 md:pb-3">
                <div className="mx-auto mb-2 md:mb-3 text-primary">
                  <Heart className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <CardTitle className="text-base md:text-lg">Wildlife Stories</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3 md:pb-4">
                <p className="text-xs md:text-sm text-muted-foreground">Conservation through storytelling</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2 md:pb-3">
                <div className="mx-auto mb-2 md:mb-3 text-primary">
                  <Camera className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <CardTitle className="text-base md:text-lg">Creative Production</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3 md:pb-4">
                <p className="text-xs md:text-sm text-muted-foreground">Puppetry, AI, and live action</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2 md:pb-3">
                <div className="mx-auto mb-2 md:mb-3 text-primary">
                  <Target className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <CardTitle className="text-base md:text-lg">Global Impact</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3 md:pb-4">
                <p className="text-xs md:text-sm text-muted-foreground">Educational content for children</p>
              </CardContent>
            </Card>
          </div>
      </ContentBlock>

      {/* Media Showcase */}
      <ContentBlock 
        title="Our Creative Vision"
        variant="outlined"
        className="bg-forest-light/10"
      >
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-5">
              We create magical content that brings folklore and wildlife together, 
              inspiring children to connect with nature and cultural heritage.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <ImagePlaceholder />
              <VideoPlaceholder />
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <ImagePlaceholder />
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <VideoPlaceholder />
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Quote Section */}
      <QuoteSection 
        quote="Every story we tell plants a seed of wonder that grows into lifelong conservation."
        author="Whimsy Films"
        role="Our Mission Statement"
      />

      {/* Mission Section */}
      <ContentBlock 
        title="Our Mission"
        variant="default"
        className="bg-background"
      >
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-3 md:space-y-4">
            <VideoPlaceholder />
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <ImagePlaceholder />
              <VideoPlaceholder />
            </div>
          </div>
          <div>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-5">
              Through the power of storytelling, we aim to preserve cultural heritage 
              while fostering a deep connection between children and the natural world.
            </p>
            <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>

      {/* Call to Action */}
      <ContentBlock 
        title="Join Our Story"
        variant="gradient"
      >
        <p className="text-base md:text-lg text-forest-deep/80 mb-4 md:mb-5 max-w-2xl mx-auto text-center">
          Be part of a movement that celebrates culture, protects wildlife, and inspires the next generation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button variant="default" size="lg" asChild className="w-full sm:w-auto">
            <Link to="/partnerships">Partner With Us</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link to="/get-involved">Get Involved</Link>
          </Button>
        </div>
      </ContentBlock>
    </>
  );
};

export default Index;