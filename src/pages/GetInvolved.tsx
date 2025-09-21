import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { QuoteSection } from "@/components/layout/QuoteSection";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Globe,
  Brush,
  Camera,
  BookOpen,
  HandHeart,
  Megaphone
} from "lucide-react";

const GetInvolved = () => {

  const opportunityCards = [
    {
      icon: <Brush className="h-8 w-8" />,
      title: "Creative Collaborator",
      description: "Join our team of storytellers, animators, and cultural consultants bringing folklore to life.",
      skills: ["Animation", "Storytelling", "Design", "Writing"],
      commitment: "Flexible hours",
      badge: "Creative"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Ambassador",
      description: "Help us connect with local communities and ensure authentic cultural representation.",
      skills: ["Cultural Knowledge", "Community Outreach", "Translation", "Research"],
      commitment: "5 hours/week",
      badge: "Community"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Conservation Advocate",
      description: "Support our mission to protect wildlife through the power of storytelling.",
      skills: ["Wildlife Knowledge", "Conservation", "Education", "Advocacy"],
      commitment: "10 hours/month",
      badge: "Conservation"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education Specialist",
      description: "Help develop curriculum and educational resources for schools and families.",
      skills: ["Education", "Curriculum Design", "Child Development", "Research"],
      commitment: "Remote work",
      badge: "Education"
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Digital Ambassador",
      description: "Share our mission on social media and help build our global community.",
      skills: ["Social Media", "Marketing", "Communication", "Content Creation"],
      commitment: "2 hours/week",
      badge: "Digital"
    }
  ];

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            src="https://lovedancelive.org/wp-content/uploads/2025/09/vecteezy_mantis-or-praying-mantis-mantis-religiosa-the-green_8660552.mp4"
            autoPlay 
            muted 
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-white/20 text-white border-white/30">
                Get Involved
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Skills, Your Passion, Our Shared Mission
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-4">
              Ready to Make an Impact?
            </h2>
            <div className="text-lg text-white/80 mb-8">
              <p className="font-semibold">
                Every voice matters, every skill contributes, and every passion makes a difference. 
                Join our global community of creatives, educators, and conservationists working together 
                to create positive change through storytelling.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="magical" size="lg" asChild>
                <Link to="/partnerships">Learn About Partnerships</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Opportunities */}
      <ContentBlock 
        title="Ways to Make a Difference"
        variant="minimal"
        className="bg-forest-light/5"
      >
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
          Whether you're a creative professional, cultural expert, educator, or simply someone who believes 
          in the power of stories, there's a place for you in our movement.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunityCards.slice(0, 3).map((opportunity, index) => (
            <Card key={index} className="hover:shadow-magical transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-primary">
                    {opportunity.icon}
                  </div>
                  <Badge variant="secondary">{opportunity.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {opportunity.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm mb-2">Skills Needed:</h5>
                    <div className="flex flex-wrap gap-1">
                      {opportunity.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">Commitment: </h5>
                    <span className="text-sm text-muted-foreground">{opportunity.commitment}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {opportunityCards.slice(3).map((opportunity, index) => (
            <Card key={index + 3} className="hover:shadow-magical transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-primary">
                    {opportunity.icon}
                  </div>
                  <Badge variant="secondary">{opportunity.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {opportunity.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm mb-2">Skills Needed:</h5>
                    <div className="flex flex-wrap gap-1">
                      {opportunity.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">Commitment: </h5>
                    <span className="text-sm text-muted-foreground">{opportunity.commitment}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentBlock>

      {/* Community Experience */}
      <ContentBlock 
        title="What It's Like to Join Our Community"
        variant="outlined"
        className="bg-background"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              There are many ways to support Whimsy Films and our mission to create stories that celebrate 
              culture, protect wildlife, and inspire children worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a creative professional, cultural expert, educator, or simply someone who believes 
              in the power of stories, there's a place for you in our global community.
            </p>
          </div>
          <div className="space-y-4">
            <ImagePlaceholder />
            <div className="grid grid-cols-2 gap-4">
              <VideoPlaceholder />
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Quote Section */}
      <QuoteSection 
        quote="Every volunteer brings unique gifts that make our stories richer, our impact deeper, and our community stronger."
        author="Whimsy Films Community Team"
        role="On the Power of Collaboration"
      />

      {/* Global Network */}
      <ContentBlock 
        title="Join Our Global Network"
        variant="gradient"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <VideoPlaceholder />
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder />
              <VideoPlaceholder />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-forest-deep/80 leading-relaxed">
              Become part of a worldwide network of creatives, educators, and conservationists working together 
              to create positive change through storytelling.
            </p>
            <p className="text-lg text-forest-deep/80 leading-relaxed">
              Our community includes filmmakers, cultural consultants, wildlife experts, educators, and passionate 
              advocates from every corner of the globe, all united by a shared vision for a better world.
            </p>
          </div>
        </div>
      </ContentBlock>

      {/* Call to Action */}
      <ContentBlock 
        title="Ready to Start Your Journey?"
        variant="outlined"
        className="bg-forest-light/10"
      >
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every voice matters, every skill contributes, and every passion makes a difference. Join us in creating 
            the stories that will inspire the next generation to protect our planet and celebrate our shared humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/partnerships">Learn About Partnerships</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>
    </>
  );
};

export default GetInvolved;