import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/layout/StandardPageLayout";
import { 
  Film, 
  Globe, 
  Leaf,
  Users
} from "lucide-react";

const About = () => {
  const featuredBlocks = [
    {
      icon: <Film className="h-8 w-8" />,
      title: "Creative Cinema",
      description: "Original productions blending live action, puppetry, wildlife, and AI-enhanced visuals."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cultural Heritage", 
      description: "Folklore and fairy tales from around the world, retold with respect and authenticity."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Conservation Storytelling",
      description: "Every story supports the protection of wildlife and ecosystems."
    }
  ];

  const contentSections = [
    {
      title: "Who We Are",
      content: (
        <div className="space-y-4">
          <p>
            Whimsy Films is a UK-based production house dedicated to creating magical, 
            child-centered films and series that combine folklore, wildlife, and imaginative 
            storytelling. But we are more than a studio — we are a movement for cultural 
            celebration and conservation.
          </p>
          <p>
            From Africa to Asia, from Europe to the Americas, we bring magical stories 
            to life through puppetry, wildlife cinematography, and cultural authenticity — 
            inviting the world to join us in protecting nature and celebrating heritage.
          </p>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Born From a Love of Stories and the Natural World",
      content: (
        <div className="space-y-4">
          <p>
            Whimsy Films began with a simple belief: that the old stories we tell our children 
            hold the power to shape the world of tomorrow. Across every culture, fairy tales 
            and folklore carry wisdom, values, and a connection to the natural world.
          </p>
          <p>
            At the same time, our planet's wildlife faces unprecedented threats. Children are 
            growing up further removed from nature, at risk of losing their connection to the 
            very creatures and landscapes that inspired those stories in the first place.
          </p>
          <p>
            Whimsy Films was founded to bridge that gap. To reawaken the magic of folklore 
            and reconnect children with wildlife, through films that are enchanting, 
            educational, and globally inclusive.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Join Our Global Network",
    subtitle: "A Movement for Cultural Celebration and Conservation",
    content: (
      <p>
        Be part of a movement that celebrates culture, protects wildlife, and inspires the next generation. 
        Every partnership amplifies our impact and brings us closer to a world where every child can see 
        themselves as heroes protecting the natural world.
      </p>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/partnerships">Partner With Us</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/get-involved">Get Involved</Link>
        </Button>
      </>
    ),
    backgroundClass: "bg-gradient-warm text-forest-deep"
  };

  return (
    <StandardPageLayout
      featuredBlocks={featuredBlocks}
      contentSections={contentSections}
      heroSection={heroSection}
    />
  );
};

export default About;