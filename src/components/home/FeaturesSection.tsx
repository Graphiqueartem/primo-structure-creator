import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Leaf,
  GraduationCap,
  Building
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Soft Power Tool",
      description: "Showcase cultural heritage globally through compelling storytelling that bridges communities."
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Conservation Catalyst", 
      description: "Link storytelling with wildlife protection, creating emotional connections to nature."
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Education Support",
      description: "Engaging, curriculum-linked resources that make learning memorable and impactful."
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Economic Opportunities",
      description: "Creative industries & cultural exchange that generate sustainable economic growth."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-deep mb-6">
            Why Whimsy Films Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are building a global cultural platform where every production creates measurable impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-magical transition-all duration-500 hover:scale-105 border-0 bg-card">
              <CardContent className="p-8 space-y-6">
                <div className="text-primary mx-auto flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-forest-deep">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;