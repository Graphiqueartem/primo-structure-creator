import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/layout/StandardPageLayout";
import { 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";

const Contact = () => {
  const featuredBlocks = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Get in Touch",
      description: "Reach out to discuss partnerships, collaborations, or learn more about our mission."
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Schedule a Call", 
      description: "Book a consultation to explore how Whimsy Films can support your organization's goals."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Visit Our Studio",
      description: "Based in the UK, we welcome visitors and collaborators from around the world."
    }
  ];

  const contentSections = [
    {
      title: "Let's Create Something Magical Together",
      content: (
        <div className="space-y-4">
          <p>
            Whether you're a government agency, NGO, cultural organization, educational institution, 
            or media company, we're always excited to explore new partnerships and collaborations.
          </p>
          <p>
            Our team is ready to discuss how Whimsy Films can help bring your cultural stories to life, 
            support your conservation efforts, or create educational content that inspires and empowers children.
          </p>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Connect With Our Global Network",
      content: (
        <div className="space-y-4">
          <p>
            Whimsy Films works with partners across six continents. Our collaborative approach ensures 
            that every project is culturally authentic, environmentally responsible, and educationally valuable.
          </p>
          <p>
            From initial concept development to final distribution, we're committed to creating partnerships 
            that are meaningful, sustainable, and impactful for all involved.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Start Your Journey With Us",
    subtitle: "Ready to Bring Your Story to Life?",
    content: (
      <p>
        Every great partnership begins with a conversation. Whether you have a specific project in mind 
        or are simply curious about what we do, we'd love to hear from you and explore the possibilities together.
      </p>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="mailto:hello@whimsyfilms.com">Send Us an Email</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/partnerships">Explore Partnerships</Link>
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

export default Contact;