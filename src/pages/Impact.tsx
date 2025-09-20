import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/layout/StandardPageLayout";
import { 
  Leaf, 
  Globe, 
  GraduationCap
} from "lucide-react";

const Impact = () => {
  const featuredBlocks = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Conservation Impact",
      description: "Protecting Wildlife Through Storytelling - emotional connections lead to lifelong conservation advocacy."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cultural Impact", 
      description: "Preserving Heritage for Future Generations - authentic stories from diverse cultures worldwide."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educational Impact",
      description: "Inspiring Global Citizens - curriculum-aligned content that builds empathy and environmental awareness."
    }
  ];

  const contentSections = [
    {
      title: "Wildlife Protection Through Emotional Connection",
      content: (
        <div className="space-y-4">
          <p>
            We use film to protect what is disappearing. By weaving real wildlife into our folklore-inspired stories, 
            children and families develop deep emotional connections with species and habitats.
          </p>
          <p>
            When children fall in love with characters inspired by real animals, they become lifelong advocates 
            for conservation. Our films serve as both entertainment and conservation education tools.
          </p>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Four Pillars of Global Impact",
      content: (
        <div className="space-y-4">
          <p>
            Every Whimsy Films project is designed with dual impact: to enchant audiences 
            and to make a measurable difference in cultural preservation, wildlife conservation, and education.
          </p>
          <p>
            Our films create economic growth through local job creation, tourism promotion, and creative 
            industry development while showcasing innovative storytelling techniques to global audiences.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Measurable Impact, Lasting Legacy",
    subtitle: "Stories That Spark Real-World Change",
    content: (
      <p>
        Join a movement where storytelling creates real change. Every partnership amplifies conservation efforts, 
        preserves cultural heritage, and inspires the next generation of global citizens who see themselves as 
        protectors of the natural world.
      </p>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/partnerships">Become a Partner</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/get-involved">Support Our Mission</Link>
        </Button>
      </>
    ),
    backgroundClass: "bg-forest-deep text-white"
  };

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Green Title Section */}
      <section className="py-6 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">Our Impact</h1>
        </div>
      </section>
      
      <StandardPageLayout
        featuredBlocks={featuredBlocks}
        contentSections={contentSections}
        heroSection={heroSection}
      />
    </div>
  );
};

export default Impact;