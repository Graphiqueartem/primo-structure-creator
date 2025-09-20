import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { StatsSection } from "@/components/layout/StatsSection";
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
  const volunteerStats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Volunteers",
      description: "From 45 countries worldwide"
    },
    {
      icon: <HandHeart className="h-8 w-8" />,
      number: "12",
      label: "Programs",
      description: "Ways to contribute your skills"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "24/7",
      label: "Global Community",
      description: "Support and collaboration"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "∞",
      label: "Impact",
      description: "Every contribution matters"
    }
  ];

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
      <PageHeader
        badge="Get Involved"
        title="Your Skills, Your Passion, Our Shared Mission"
        subtitle="Ready to Make an Impact?"
        description={
          <div className="space-y-4">
            <p>
              Every voice matters, every skill contributes, and every passion makes a difference. 
              Join our global community of creatives, educators, and conservationists working together 
              to create positive change through storytelling.
            </p>
          </div>
        }
        actions={
          <>
            <Button variant="warm" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="magical" size="lg" asChild>
              <Link to="/partnerships">Learn About Partnerships</Link>
            </Button>
          </>
        }
        decorativeElements={
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <ImagePlaceholder />
            <ImagePlaceholder />
            <ImagePlaceholder />
          </div>
        }
      />

      {/* Community Stats */}
      <StatsSection 
        title="Join Our Global Community"
        subtitle="Be part of a worldwide network making a difference through storytelling"
        stats={volunteerStats}
        backgroundClass="bg-background"
      />

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