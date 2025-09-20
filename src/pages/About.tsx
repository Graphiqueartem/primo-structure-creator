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
            Whimsy Films is a UK-based production house dedicated to creating magical, child-centered films and series that combine folklore, wildlife, and imaginative storytelling. But we are more than a studio — we are a movement for cultural celebration and conservation.
          </p>
          <p>We work at the intersection of:</p>
          <ul className="space-y-2">
            <li>🎬 <strong>Creative Cinema</strong> – original productions blending live action, puppetry, wildlife, and AI-enhanced visuals.</li>
            <li>🌍 <strong>Cultural Heritage</strong> – folklore and fairy tales from around the world, retold with respect and authenticity.</li>
            <li>🐾 <strong>Conservation Storytelling</strong> – every story supports the protection of wildlife and ecosystems.</li>
            <li>👶 <strong>Child-Focused Education</strong> – stories designed to spark empathy, curiosity, and learning.</li>
          </ul>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Our Story",
      content: (
        <div className="space-y-4">
          <p>
            Whimsy Films began with a simple belief: that the old stories we tell our children hold the power to shape the world of tomorrow. Across every culture, fairy tales and folklore carry wisdom, values, and a connection to the natural world. Yet, many of these stories remain untold on the global stage.
          </p>
          <p>
            At the same time, our planet's wildlife faces unprecedented threats. Children are growing up further removed from nature, at risk of losing their connection to the very creatures and landscapes that inspired those stories in the first place.
          </p>
          <p>
            Whimsy Films was founded to bridge that gap. To reawaken the magic of folklore and reconnect children with wildlife, through films that are enchanting, educational, and globally inclusive.
          </p>
          <div className="bg-gradient-forest p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-forest-deep mb-3">Why Folklore & Sustainability?</h4>
            <p className="text-forest-deep/80">
              Folklore is more than entertainment. It is the ancestral memory of humankind, carrying lessons on how to coexist with the environment, how to navigate social harmony, and how to find meaning in times of uncertainty. At Whimsy Films, we treat folklore as a vital resource for sustainability education. By connecting stories with pressing issues like climate change, biodiversity, and cultural preservation, we reframe folklore as a tool for empowerment. Through our work, heritage is not frozen in time but activated as a force for present and future change.
            </p>
          </div>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Join Our Global Network",
    subtitle: "Built on Collaboration and Expertise",
    content: (
      <div className="space-y-4">
        <p>
          While Whimsy Films is young, it is built on collaboration and expertise. For each project, we bring together:
        </p>
        <ul className="space-y-2 text-left">
          <li>• Cultural Consultants – ensuring authenticity in folklore representation</li>
          <li>• Wildlife Specialists – guiding our conservation storytelling and animal cinematography</li>
          <li>• Puppetry & Practical Artists – crafting characters that feel tactile and timeless</li>
          <li>• Filmmakers & Technologists – blending AI, VFX, and live action into seamless narratives</li>
          <li>• Educators – aligning our stories with child learning frameworks</li>
        </ul>
        <p>
          Our core founding team is supported by a growing global network of advisors, creatives, and institutional partners.
        </p>
      </div>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/partnerships">Meet Our Partners</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/contact">Read Our Story</Link>
        </Button>
      </>
    ),
    backgroundClass: "bg-gradient-warm text-forest-deep"
  };

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Green Title Section */}
      <section className="py-6 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">About Us</h1>
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

export default About;