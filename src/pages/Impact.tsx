import { Link } from "react-router-dom";
import { getValidRoute } from "@/utils/navigation";
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
        description={
          <div className="space-y-4">
            <p>
              Every Whimsy Films project is designed with dual impact: to enchant audiences and to make a measurable difference in cultural preservation, wildlife conservation, and education.
            </p>
            <p>
              Every nation has stories of animals, spirits, and heroes. These tales connect us to the earth. We transform them into cinematic experiences that children and families everywhere can treasure.
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
        backgroundClass="bg-gradient-hero text-white"
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

      {/* Conservation Impact */}
      <ContentBlock 
        title="Conservation Impact"
        variant="outlined"
        className="bg-forest-light/5"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              We use film to protect what is disappearing. By weaving real wildlife into our folklore-inspired stories, children and families develop deep emotional connections with species and habitats.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Emotional Connection:</strong> Children care about what they know. By featuring real animals and ecosystems, we foster empathy and long-term conservation values.</span>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Global Awareness:</strong> Our films shine a light on endangered species and fragile habitats that rarely reach mainstream media.</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Amplification for NGOs & Governments:</strong> By embedding conservation messages within stories, our films extend the reach of campaigns and policy initiatives.</span>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Soft Power Tool:</strong> Wildlife narratives become a unifying diplomatic message — transcending language and borders.</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/partnerships">Partner With Us in Conservation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to={getValidRoute("/productions")}>Learn More About Our Wildlife Projects</Link>
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

      {/* Cultural Impact */}
      <ContentBlock 
        title="Cultural Impact"
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
            <p className="text-body-lg text-forest-deep/80 leading-relaxed">
              Folklore is humanity's oldest cultural currency. Yet many traditions are at risk of being forgotten.
            </p>
            <div className="space-y-4">
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold text-forest-deep mb-2">🌏 Representation</h4>
                <p className="text-forest-deep/80">We showcase stories from diverse cultures with authenticity and respect.</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold text-forest-deep mb-2">🎭 Collaboration</h4>
                <p className="text-forest-deep/80">Cultural organisations and artists become part of the creative process.</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold text-forest-deep mb-2">🏛️ Cultural Diplomacy</h4>
                <p className="text-forest-deep/80">Governments can use co-productions as tools for building international cultural presence.</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold text-forest-deep mb-2">📚 Preservation</h4>
                <p className="text-forest-deep/80">Our films act as modern archives of folklore — safeguarding heritage for future generations.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link to="/partnerships">Bring Your Culture's Stories to Life</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/partnerships">Explore Cultural Preservation Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Education & Social Impact */}
      <ContentBlock 
        title="Education & Social Impact"
        variant="outlined"
        className="bg-background"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Our films are crafted to do more than entertain — they support child development and inspire global citizenship.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Curriculum Alignment:</strong> Partnered with educators to design content that supports literacy, empathy, and ecological learning.</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Child-Centered Design:</strong> Stories empower children as heroes, encouraging self-expression and resilience.</span>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Community Engagement:</strong> Schools, libraries, and NGOs can use our films in workshops, festivals, and learning programs.</span>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-muted-foreground"><strong>Inclusive Narratives:</strong> Representation of diverse voices ensures children see themselves reflected in the stories they love.</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/partnerships">Collaborate on Education Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Request Educational Resources</Link>
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

      {/* Economic Impact */}
      <ContentBlock 
        title="Economic & Partnership Impact"
        variant="minimal"
        className="bg-forest-light/10"
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
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Whimsy Films generates value beyond the screen.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h4 className="font-semibold text-forest-deep mb-2">💼 Economic Growth</h4>
                <p className="text-body text-muted-foreground">Film production supports local jobs, skills, and industries.</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-forest-deep mb-2">🎥 Tourism & Promotion</h4>
                <p className="text-body text-muted-foreground">Stories rooted in real cultures and landscapes attract tourism interest.</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-forest-deep mb-2">💡 Innovation Showcase</h4>
                <p className="text-body text-muted-foreground">As pioneers in blending puppetry, AI, and live wildlife, we position partners at the forefront of global creative innovation.</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-semibold text-forest-deep mb-2">🌍 Global Visibility</h4>
                <p className="text-body text-muted-foreground">Governments and institutions gain prestige by being associated with a studio redefining the cultural landscape.</p>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/partnerships">Invest in Cultural & Economic Impact</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/partnerships">Join Our Partner Network</Link>
              </Button>
            </div>
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