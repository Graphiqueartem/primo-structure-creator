import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/layout/StandardPageLayout";
import { 
  Building, 
  Heart, 
  GraduationCap
} from "lucide-react";

const Partnerships = () => {
  const featuredBlocks = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Governments & Cultural Ministries",
      description: "Culture as soft power. Conservation as global leadership. Showcase your nation's heritage."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "NGOs & Charities",
      description: "Storytelling for social impact. Turn your cause into stories that move hearts and inspire action."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education & Academia",
      description: "Folklore as a living classroom. Curriculum innovation through magical storytelling."
    }
  ];

  const contentSections = [
    {
      title: "Partnerships That Matter",
      content: (
        <div className="space-y-4">
          <p>
            At Whimsy Films, transformation happens when vision meets collaboration. We are building a movement powered by governments, NGOs, cultural institutions, and forward-thinking sponsors. By partnering with us, you step into a global conversation about how culture and conservation can work together to shape the future.
          </p>
          <div className="bg-gradient-forest p-6 rounded-lg">
            <p className="text-forest-deep font-medium italic">
              "Partnership turns vision into action—and action into legacy."
            </p>
          </div>
          <p>
            We collaborate with governments, ministries, and cultural institutions to amplify national heritage and environmental leadership. By working with us, governments gain a platform to showcase cultural identity, strengthen foreign relations, and contribute to the global sustainability agenda.
          </p>
        </div>
      ),
      mediaType: "image" as const,
      mediaPosition: "right" as const,
      backgroundColor: "bg-background"
    },
    {
      title: "Global Collaboration Network",
      content: (
        <div className="space-y-4">
          <p>
            We partner with NGOs and international development organizations to create projects that go beyond entertainment — fostering empathy, inclusion, and community empowerment.
          </p>
          <p>
            Our films and productions offer emotionally resonant tools for fundraising, donor engagement, and awareness-building. We work hand-in-hand with museums, archives, and cultural institutes to preserve and share folklore.
          </p>
          <p>
            Every partnership creates scalable impact, reaching wide audiences with transformative messages while amplifying underrepresented voices and celebrating cultural diversity.
          </p>
        </div>
      ),
      mediaType: "video" as const,
      mediaPosition: "left" as const,
      backgroundColor: "bg-forest-light/10"
    }
  ];

  const heroSection = {
    title: "Join Our Global Movement",
    subtitle: "Transform Vision Into Legacy",
    content: (
      <div className="space-y-4">
        <p>
          Whether you represent a government, NGO, cultural organization, educational institution, or media company — there's a place for you in our movement.
        </p>
        <p>
          We believe partnership begins with conversation. If our vision resonates with you, we want to hear from you.
        </p>
      </div>
    ),
    actions: (
      <>
        <Button variant="default" size="lg" asChild>
          <Link to="/contact">Start a Conversation</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/contact">Request Partnership Pack</Link>
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
          <h1 className="text-2xl font-bold">Partnerships</h1>
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

export default Partnerships;