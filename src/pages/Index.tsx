import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/layout/StandardPageLayout";
import { 
  Film, 
  Globe, 
  Heart
} from "lucide-react";

const Home = () => {
  const featuredBlocks = [
    {
      icon: <Film className="h-8 w-8" />,
      title: "Wildlife Cinematography",
      description: "Capturing the raw wonder of the natural world and weaving it into magical storytelling."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cultural Heritage",
      description: "Folklore and fairy tales from around the world, retold with respect and authenticity."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Conservation Impact",
      description: "Every story supports the protection of wildlife and ecosystems while inspiring action."
    }
  ];

  const contentSections = [
    {
      title: "Stories That Change the World",
      content: (
        <div className="space-y-4">
          <p>
            At Whimsy Films, we believe storytelling is humanity's oldest and most powerful tool. Stories have taught us who we are, connected us across cultures, and inspired generations to dream.
          </p>
          <p>
            Today, stories must do more. They must remind us of our shared humanity, protect the fragile beauty of wildlife, and spark empathy in a divided world. That is why Whimsy Films exists. We are a UK-based production company that creates films, series, and cultural experiences rooted in folklore and magical storytelling — designed not only to entertain but also to educate, conserve, and inspire global action.
          </p>
          <p className="font-medium text-forest-deep">
            We tell magical stories that protect nature and inspire generations.
          </p>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Why Whimsy Films Matters",
      content: (
        <div className="space-y-4">
          <p>
            We are not simply a film studio. We are building a global cultural platform where every production:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Acts as a soft power tool for governments to showcase their cultural heritage</li>
            <li>Serves as a catalyst for conservation partnerships, linking storytelling with wildlife protection</li>
            <li>Supports education systems, offering engaging, curriculum-linked cultural resources</li>
            <li>Creates new economic opportunities in creative industries, tourism, and cultural exchange</li>
          </ul>
          <p>
            For investors, governments, and NGOs, Whimsy Films represents a rare opportunity to align with a high-growth creative sector with strong audience demand and measurable social and environmental impact.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Where Storytelling Inspires Action",
    subtitle: "Stories connect us. Culture inspires us. Together we protect our planet.",
    content: (
      <div className="space-y-4">
        <p>
          Whimsy Films is a global production house bringing folklore, wildlife, and magical storytelling to life — to inspire children, empower communities, and protect our natural world.
        </p>
        <p className="text-lg font-medium italic">
          "Every tradition is a story. Every story is a bridge to the future."
        </p>
      </div>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/partnerships">Partner With Us</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/vision">Discover Our Vision</Link>
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
          <h1 className="text-2xl font-bold">Home</h1>
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

export default Home;