import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { StatsSection } from "@/components/layout/StatsSection";
import { QuoteSection } from "@/components/layout/QuoteSection";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Leaf, 
  Globe, 
  GraduationCap,
  Heart,
  TreePine,
  Users,
  BookOpen,
  Target
} from "lucide-react";

const Impact = () => {
  const impactStats = [
    {
      icon: <TreePine className="h-8 w-8" />,
      number: "15+",
      label: "Species Protected",
      description: "Featured in our conservation stories"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: "50+",
      label: "Cultures Celebrated",
      description: "Traditional stories preserved"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "100K+",
      label: "Children Reached",
      description: "Through educational content"
    },
    {
      icon: <Target className="h-8 w-8" />,
      number: "3",
      label: "UN SDGs",
      description: "Directly supported by our work"
    }
  ];

  return (
    <>
      <PageHeader
        badge="Our Impact"
        title="Stories That Spark Real-World Change"
        subtitle="Measurable Impact, Lasting Legacy"
        description={
          <div className="space-y-4">
            <p>
              Every story we tell creates ripples of change. From protecting endangered species 
              to preserving cultural heritage, our films don't just entertain—they inspire action, 
              foster empathy, and build bridges between communities and conservation.
            </p>
          </div>
        }
        actions={
          <>
            <Button variant="warm" size="lg" asChild>
              <Link to="/partnerships">Become a Partner</Link>
            </Button>
            <Button variant="magical" size="lg" asChild>
              <Link to="/get-involved">Support Our Mission</Link>
            </Button>
          </>
        }
        backgroundClass="bg-forest-deep text-white"
        decorativeElements={
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <ImagePlaceholder />
            <ImagePlaceholder />
            <ImagePlaceholder />
          </div>
        }
      />

      {/* Impact Stats */}
      <StatsSection 
        title="Our Impact By The Numbers"
        subtitle="Creating meaningful change through storytelling and conservation partnerships"
        stats={impactStats}
        backgroundClass="bg-background"
      />

      {/* Three Pillars of Impact */}
      <ContentBlock 
        title="Three Pillars of Global Impact"
        variant="minimal"
        className="bg-forest-light/5"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105 bg-gradient-warm border-0">
            <CardHeader>
              <div className="mx-auto mb-4 text-forest-deep">
                <Leaf className="h-12 w-12" />
              </div>
              <CardTitle className="text-xl text-forest-deep">Conservation Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-forest-deep/80">
                Protecting Wildlife Through Storytelling - emotional connections lead to lifelong conservation advocacy.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="mx-auto mb-4 text-primary">
                <Globe className="h-12 w-12" />
              </div>
              <CardTitle className="text-xl">Cultural Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Preserving Heritage for Future Generations - authentic stories from diverse cultures worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105 bg-forest-light/20 border-forest-light/30">
            <CardHeader>
              <div className="mx-auto mb-4 text-forest-deep">
                <GraduationCap className="h-12 w-12" />
              </div>
              <CardTitle className="text-xl text-forest-deep">Educational Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-forest-deep/80">
                Inspiring Global Citizens - curriculum-aligned content that builds empathy and environmental awareness.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentBlock>

      {/* Wildlife Protection */}
      <ContentBlock 
        title="Wildlife Protection Through Emotional Connection"
        variant="outlined"
        className="bg-background"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We use film to protect what is disappearing. By weaving real wildlife into our folklore-inspired stories, 
              children and families develop deep emotional connections with species and habitats.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When children fall in love with characters inspired by real animals, they become lifelong advocates 
              for conservation. Our films serve as both entertainment and conservation education tools.
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

      {/* Quote Section */}
      <QuoteSection 
        quote="Children who connect emotionally with animal characters become lifelong conservation advocates."
        author="Child Psychology Research Institute"
        role="Studies on Character-Driven Conservation Education"
      />

      {/* Four Pillars of Impact */}
      <ContentBlock 
        title="How We Create Lasting Change"
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
              Every Whimsy Films project is designed with dual impact: to enchant audiences 
              and to make a measurable difference in cultural preservation, wildlife conservation, and education.
            </p>
            <p className="text-lg text-forest-deep/80 leading-relaxed">
              Our films create economic growth through local job creation, tourism promotion, and creative 
              industry development while showcasing innovative storytelling techniques to global audiences.
            </p>
          </div>
        </div>
      </ContentBlock>

      {/* Call to Action */}
      <ContentBlock 
        title="Join the Movement for Change"
        variant="outlined"
        className="bg-forest-light/10"
      >
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join a movement where storytelling creates real change. Every partnership amplifies conservation efforts, 
            preserves cultural heritage, and inspires the next generation of global citizens who see themselves as 
            protectors of the natural world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/partnerships">Become a Partner</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/get-involved">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>
    </>
  );
};

export default Impact;