import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/layout/StandardPageLayout";
import { 
  Heart, 
  Users, 
  Globe
} from "lucide-react";

const GetInvolved = () => {
  const featuredBlocks = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Creative Collaborator",
      description: "Join our team of storytellers, animators, and cultural consultants bringing folklore to life."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Ambassador", 
      description: "Help us connect with local communities and ensure authentic cultural representation."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Conservation Advocate",
      description: "Support our mission to protect wildlife through the power of storytelling."
    }
  ];

  const contentSections = [
    {
      title: "Ways to Make a Difference",
      content: (
        <div className="space-y-4">
          <p>
            There are many ways to support Whimsy Films and our mission to create stories that celebrate 
            culture, protect wildlife, and inspire children worldwide.
          </p>
          <p>
            Whether you're a creative professional, cultural expert, educator, or simply someone who believes 
            in the power of stories, there's a place for you in our global community.
          </p>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Join Our Global Community",
      content: (
        <div className="space-y-4">
          <p>
            Become part of a worldwide network of creatives, educators, and conservationists working together 
            to create positive change through storytelling.
          </p>
          <p>
            Our community includes filmmakers, cultural consultants, wildlife experts, educators, and passionate 
            advocates from every corner of the globe, all united by a shared vision for a better world.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Ready to Make an Impact?",
    subtitle: "Your Skills, Your Passion, Our Shared Mission",
    content: (
      <p>
        Every voice matters, every skill contributes, and every passion makes a difference. Join us in creating 
        the stories that will inspire the next generation to protect our planet and celebrate our shared humanity.
      </p>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/contact">Get Started Today</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/partnerships">Learn About Partnerships</Link>
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

export default GetInvolved;