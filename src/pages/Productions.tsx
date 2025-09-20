import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/layout/StandardPageLayout";
import { 
  Sparkles, 
  Camera, 
  Heart
} from "lucide-react";

const Productions = () => {
  const featuredBlocks = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Child-Centered Stories",
      description: "Stories told through children's eyes, speaking directly to their imagination and wonder."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Handcrafted Meets Digital",
      description: "Traditional puppetry and practical effects meet cutting-edge AI and visual technology."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wildlife Integration",
      description: "Animals are not background — they are characters in the narrative, inspiring conservation."
    }
  ];

  const contentSections = [
    {
      title: "Where Folklore Meets the Screen",
      content: (
        <div className="space-y-4">
          <p>
            Whimsy Films' productions are unlike anything else in today's media landscape. We combine live action, puppetry, wildlife cinematography, and AI-enhanced visuals to create timeless stories that feel magical, tactile, and emotionally real.
          </p>
          <div className="space-y-2">
            <p>✨ <strong>Child-Centered:</strong> Stories told through children's eyes, speaking directly to their imagination.</p>
            <p>🧵 <strong>Handcrafted Meets Digital:</strong> Traditional puppetry and practical effects meet cutting-edge technology.</p>
            <p>🐾 <strong>Wildlife Integration:</strong> Animals are not background — they are characters in the narrative.</p>
            <p>📚 <strong>Rooted in Folklore:</strong> Stories drawn from authentic cultural traditions, adapted for modern audiences.</p>
            <p>🌍 <strong>Universal Appeal:</strong> Narratives resonate across cultures, transcending borders.</p>
          </div>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Current Development Slate",
      content: (
        <div className="space-y-4">
          <p>
            While specific titles remain confidential, our slate is built around core thematic strands:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Folklore & Fairy Tales from diverse cultures</li>
            <li>Magical animal-centered narratives</li>
            <li>Conservation-driven adventures</li>
            <li>Child-hero storytelling</li>
          </ul>
          <p>
            Each production is designed to enchant audiences while making a measurable difference in cultural preservation, wildlife conservation, and education.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Magical Stories in Development",
    subtitle: "Our Storytelling Approach",
    content: (
      <p>
        Join our beta screening community and be among the first to experience the magic we're creating. 
        Register for exclusive updates about our upcoming productions and behind-the-scenes content.
      </p>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/contact">Register for Updates</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/contact">Join Beta Screening Community</Link>
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
          <h1 className="text-2xl font-bold">Our Productions</h1>
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

export default Productions;