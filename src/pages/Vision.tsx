import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/layout/StandardPageLayout";
import { 
  Heart, 
  Sparkles, 
  Globe
} from "lucide-react";

const Vision = () => {
  const featuredBlocks = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Imagination",
      description: "Wonder is the seed of empathy and action."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Respect", 
      description: "Cultural and ecological authenticity in everything we create."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Collaboration",
      description: "Co-created with governments, NGOs, educators, and communities."
    }
  ];

  const contentSections = [
    {
      title: "Mission & Values",
      content: (
        <div className="space-y-4">
          <p>
            At Whimsy Films, our mission is to create films that celebrate folklore, protect wildlife, and inspire children everywhere to imagine a more inclusive, compassionate, and sustainable world.
          </p>
          <p>Our values guide every decision:</p>
          <ul className="space-y-2">
            <li><strong>Imagination:</strong> wonder is the seed of empathy and action.</li>
            <li><strong>Respect:</strong> cultural and ecological authenticity.</li>
            <li><strong>Innovation:</strong> technology without losing artistry.</li>
            <li><strong>Collaboration:</strong> co-created with governments, NGOs, educators, and communities.</li>
            <li><strong>Impact:</strong> every project contributes to cultural, social, and environmental good.</li>
          </ul>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Why Storytelling Matters",
      content: (
        <div className="space-y-4">
          <p>
            Stories are more than entertainment. They pass down cultural wisdom, shape childhood imagination, build empathy, and inspire societal change. Whimsy Films uses this power intentionally, turning folklore and wildlife storytelling into platforms for education, diplomacy, and conservation.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "The Future We Are Building",
    subtitle: "Turn Vision Into Reality",
    content: (
      <div className="space-y-4">
        <p>
          We envision a future where children everywhere grow up with stories representing their cultures, where families discover films that are entertaining yet enriching, and where governments and NGOs use our productions as cultural diplomacy tools and awareness campaigns. Conservation efforts are amplified by stories that make the natural world unforgettable.
        </p>
        <p>
          Every great story begins with someone believing it's possible. Join us in creating the stories that will shape tomorrow.
        </p>
      </div>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/partnerships">Be Part of This Future</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/get-involved">Join Our Mission</Link>
        </Button>
      </>
    ),
    backgroundClass: "bg-gradient-hero text-white"
  };

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Green Title Section */}
      <section className="py-6 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">Our Vision</h1>
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

export default Vision;