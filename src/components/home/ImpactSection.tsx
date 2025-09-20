import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Leaf,
  GraduationCap,
  Building,
  BookOpen, 
  Target,
  Film,
  Shield
} from "lucide-react";

const ImpactSection = () => {
  const sections = [
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Our Mission",
      description: "Creating films that celebrate folklore, protect wildlife, and inspire global action.",
      link: "/vision",
      linkText: "Read Our Mission"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Our Impact",
      description: "Measurable conservation, cultural, educational and economic outcomes.",
      link: "/impact",
      linkText: "Explore Our Impact"
    },
    {
      icon: <Film className="h-12 w-12" />,
      title: "Our Approach",
      description: "Blending puppetry, wildlife, AI, and folklore into magical storytelling.",
      link: "/productions",
      linkText: "Discover Our Approach"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Digital Archives",
      description: "Preserving cultural heritage through modern storytelling technology.",
      link: "/about",
      linkText: "Explore the Archive Project"
    }
  ];

  return (
    <section className="py-24 bg-forest-deep text-ivory">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Our Impact Areas</h2>
          <p className="text-xl text-ivory/90 leading-relaxed max-w-4xl mx-auto">
            For investors, governments, and NGOs, Whimsy Films represents a unique opportunity to align with 
            a high-growth creative sector while creating measurable social and environmental impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <Card key={index} className="text-center hover:shadow-magical transition-all duration-500 hover:scale-105 bg-ivory/10 border-ivory/20 hover:bg-ivory/15">
              <CardContent className="p-8 space-y-6">
                <div className="text-gold-warm mx-auto flex justify-center">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-ivory">{section.title}</h3>
                <p className="text-ivory/80 leading-relaxed">{section.description}</p>
                <Button variant="warm" size="lg" asChild className="w-full">
                  <Link to={section.link}>{section.linkText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;