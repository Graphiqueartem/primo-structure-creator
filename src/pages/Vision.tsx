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
      title: "Global Impact",
      description: "Every project contributes to cultural, social, and environmental good."
    }
  ];

  const contentSections = [
    {
      title: "Why Storytelling Matters",
      content: (
        <div className="space-y-4">
          <p>
            Stories are more than entertainment. They pass down cultural wisdom, shape 
            childhood imagination, build empathy, and inspire societal change. Whimsy Films 
            uses this power intentionally, turning folklore and wildlife storytelling into 
            platforms for education, diplomacy, and conservation.
          </p>
          <p>
            Folklore transcends borders, languages, and cultures. A story about a 
            brave child protecting forest animals resonates universally, whether 
            told in Nigeria, Japan, or Peru.
          </p>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "The Future We Are Building",
      content: (
        <div className="space-y-4">
          <p>
            We envision a future where children everywhere grow up with stories representing their 
            cultures, where families discover films that are entertaining yet enriching, and where 
            governments and NGOs use our productions as cultural diplomacy tools.
          </p>
          <p>
            When children see themselves as heroes protecting wildlife, they develop 
            deep emotional connections to conservation that last a lifetime.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Turn Vision Into Reality",
    subtitle: "Reimagining Stories, Inspiring Change",
    content: (
      <p>
        Every great story begins with someone believing it's possible. Join us in creating 
        the stories that will shape tomorrow, where entertainment meets education and conservation.
      </p>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/partnerships">Partner With Us</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/get-involved">Join the Movement</Link>
        </Button>
      </>
    ),
    backgroundClass: "bg-gradient-hero text-white"
  };

  return (
    <StandardPageLayout
      featuredBlocks={featuredBlocks}
      contentSections={contentSections}
      heroSection={heroSection}
    />
  );
};

export default Vision;