import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/layout/StandardPageLayout";
import { 
  BookOpen, 
  Globe, 
  Users
} from "lucide-react";

const News = () => {
  const featuredBlocks = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Production Updates",
      description: "Latest news from our studios and behind-the-scenes insights into our magical storytelling process."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Conservation Stories",
      description: "Impact stories showcasing how our films are helping protect wildlife and preserve cultural heritage."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Partnership Announcements",
      description: "Celebrating new collaborations with governments, NGOs, and cultural organizations worldwide."
    }
  ];

  const contentSections = [
    {
      title: "Stories Behind the Stories",
      content: (
        <div className="space-y-4">
          <p>
            Stay connected to our journey as we create magical films that protect wildlife and celebrate cultural heritage. 
            Our news section brings you exclusive behind-the-scenes content, impact stories, and updates on our growing 
            global network of partners and collaborators.
          </p>
          <p>
            From production diaries to conservation success stories, discover how folklore and wildlife come together 
            to inspire children and families around the world.
          </p>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Join Our Global Conversation",
      content: (
        <div className="space-y-4">
          <p>
            Be the first to know about new productions, partnership opportunities, and ways to get involved in 
            protecting wildlife and celebrating culture through storytelling.
          </p>
          <p>
            Our newsletter brings you exclusive content, early access to screenings, and opportunities to connect 
            with our global community of storytellers, conservationists, and cultural advocates.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Stay Connected to the Magic",
    subtitle: "News & Insights from Whimsy Films",
    content: (
      <p>
        Subscribe to our newsletter and be part of a global movement where storytelling creates real change. 
        Get exclusive updates, behind-the-scenes content, and opportunities to join our mission.
      </p>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/contact">Subscribe to Newsletter</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/contact">Follow Our Journey</Link>
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
          <h1 className="text-2xl font-bold">News & Insights</h1>
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

export default News;