import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { StatsSection } from "@/components/layout/StatsSection";
import { QuoteSection } from "@/components/layout/QuoteSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Film, 
  Heart, 
  Globe, 
  Sparkles, 
  Camera,
  Users,
  BookOpen,
  TreePine,
  Star,
  Play,
  Eye,
  Bell
} from "lucide-react";

const Productions = () => {
  const productionStats = [
    {
      icon: <Camera className="h-8 w-8" />,
      number: "4",
      label: "Production Methods",
      description: "Integrated approaches"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "5",
      label: "Core Pillars",
      description: "Proven methodology"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: "∞",
      label: "Cultural Stories",
      description: "From global folklore"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "100%",
      label: "Child-Centered",
      description: "Empowering narratives"
    }
  ];

  const approaches = [
    {
      icon: <Users className="h-10 w-10" />,
      title: "Child-Centered",
      description: "Stories told through children's eyes, speaking directly to their imagination and empowering them as heroes of their own narratives.",
      details: "Every protagonist is a child who faces real challenges with courage, creativity, and compassion. We believe children are not just audiences but active participants in shaping their world."
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Handcrafted Meets Digital",
      description: "Traditional puppetry and practical effects meet cutting-edge technology to create timeless, tactile storytelling.",
      details: "Our artisans create physical puppets with intricate details while our technologists enhance them with AI and digital effects that feel magical, not artificial."
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Wildlife Integration", 
      description: "Animals are not background elements — they are central characters in narratives that celebrate their beauty and importance.",
      details: "We work with wildlife cinematographers and conservation experts to ensure authentic, respectful representation of animals in their natural habitats."
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Rooted in Folklore",
      description: "Stories drawn from authentic cultural traditions, adapted with respect and collaboration from source communities.",
      details: "Every folklore adaptation involves cultural consultants, community leaders, and traditional storytellers to ensure authenticity and respectful representation."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Universal Appeal",
      description: "Narratives that resonate across cultures, transcending borders while celebrating local uniqueness.",
      details: "We identify universal themes in local stories — courage, friendship, environmental protection — that speak to children regardless of their background."
    }
  ];

  const thematicStrands = [
    {
      title: "Folklore & Fairy Tales",
      description: "Traditional stories from diverse cultures, retold for modern global audiences",
      icon: <BookOpen className="h-8 w-8" />,
      examples: ["Celtic forest legends", "African animal wisdom tales", "Asian creation myths", "Indigenous earth stories"]
    },
    {
      title: "Magical Animal Narratives",
      description: "Wildlife-centered adventures that build emotional connections with endangered species",
      icon: <TreePine className="h-8 w-8" />,
      examples: ["Elephant migration journeys", "Arctic wildlife survival", "Rainforest ecosystem adventures", "Ocean conservation tales"]
    },
    {
      title: "Conservation Adventures",
      description: "Action-packed stories where children become environmental heroes",
      icon: <Globe className="h-8 w-8" />,
      examples: ["Plastic ocean cleanup", "Forest restoration missions", "Wildlife sanctuary protection", "Climate action adventures"]
    },
    {
      title: "Child-Hero Storytelling",
      description: "Empowering narratives featuring children as protagonists solving real-world challenges",
      icon: <Star className="h-8 w-8" />,
      examples: ["Cultural bridge-builders", "Young conservationists", "Community problem-solvers", "Peace ambassadors"]
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
                Where Stories Come Alive
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Where Folklore Meets the Screen
            </h1>
            <div className="text-lg text-white/80 mb-8">
              <p className="font-semibold">
                Whimsy Films' productions are unlike anything else in today's media landscape. We combine live action, puppetry, wildlife cinematography, and AI-enhanced visuals to create timeless stories that feel magical, tactile, and emotionally real.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg" asChild>
                <Link to="#our-approach">Explore Our Storytelling Approach</Link>
              </Button>
              <Button variant="magical" size="lg" asChild>
                <Link to="#development-slate">Register for Updates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Production Stats */}
      <StatsSection 
        title="Innovation Meets Tradition"
        subtitle="Our unique approach blends timeless storytelling with cutting-edge production techniques"
        stats={productionStats}
        backgroundClass="bg-background"
      />

      {/* Production Methods */}
      <ContentBlock 
        title="Our Production Methods"
        variant="minimal"
        className="bg-forest-light/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <Camera className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-primary mx-auto mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                Wildlife Cinematography
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                Capturing the raw wonder of the natural world
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <Heart className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-primary mx-auto mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                Puppetry & Practical Artistry
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                Timeless, tactile, beloved by children
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <Users className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-primary mx-auto mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                Live Action & Human Performance
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                Authentic, emotional, deeply relatable
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-magical transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <Sparkles className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-primary mx-auto mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-forest-deep mb-2 lg:mb-3">
                AI-enhanced Visuals & Innovation
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                Expanding creative possibilities
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentBlock>

      {/* Five-Pillar Approach */}
      <ContentBlock 
        title="Our Five-Pillar Approach"
        variant="outlined"
        className="bg-forest-light/20"
        id="our-approach"
      >
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
          Every production follows our proven methodology that ensures cultural authenticity, 
          environmental responsibility, and child-centered storytelling.
        </p>

        <div className="space-y-12">
          {approaches.map((approach, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <Card className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-primary">
                        {approach.icon}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          Pillar {index + 1}
                        </Badge>
                        <h3 className="text-2xl font-bold text-forest-deep">
                          {approach.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-4">
                      {approach.description}
                    </p>
                    
                    <p className="text-muted-foreground">
                      {approach.details}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:w-1/2">
                <Card className="bg-gradient-warm border-0">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-forest-deep mb-4">
                      {index === 0 && "Empowering Young Heroes"}
                      {index === 1 && "Artistry Meets Technology"} 
                      {index === 2 && "Conservation Through Connection"}
                      {index === 3 && "Cultural Collaboration"}
                      {index === 4 && "Stories Without Borders"}
                    </h4>
                    <p className="text-forest-deep/80">
                      {index === 0 && "Children see themselves as capable, creative problem-solvers who can make a real difference in their communities and the world."}
                      {index === 1 && "The warmth of handcrafted puppets combined with the endless possibilities of digital enhancement creates truly magical experiences."}
                      {index === 2 && "Real wildlife footage and scientifically accurate habitats help children understand and care about the creatures they're protecting."}
                      {index === 3 && "Working directly with cultural communities ensures our adaptations honor tradition while reaching new audiences."}
                      {index === 4 && "Universal themes of courage, friendship, and environmental stewardship resonate with families worldwide."}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/partnerships">Explore Partnerships</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>

      {/* Current Development Slate */}
      <ContentBlock 
        title="Current Development Slate"
        variant="minimal"
        className="bg-forest-deep text-white"
        id="development-slate"
      >
        <p className="text-xl text-current/90 max-w-3xl mx-auto mb-8 text-center">
          While specific titles remain confidential, our slate is built around core thematic 
          strands that celebrate diversity, protect wildlife, and inspire young audiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {thematicStrands.map((strand, index) => (
            <Card key={index} className="bg-ivory/10 border-ivory/20 hover:bg-ivory/15 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="text-gold-warm">
                    {strand.icon}
                  </div>
                  <CardTitle className="text-ivory text-xl">
                    {strand.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ivory/80 mb-4">
                  {strand.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gold-warm text-sm">Example Themes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {strand.examples.map((example, exampleIndex) => (
                      <Badge key={exampleIndex} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-ivory/10 border border-ivory/20 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <Bell className="h-12 w-12 text-gold-warm mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-ivory mb-4">
              Be First to Know
            </h3>
            <p className="text-ivory/80 mb-6">
              Join our exclusive community to receive updates on new productions, 
              behind-the-scenes content, and partnership opportunities.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="xl" asChild>
              <Link to="/get-involved">Register for Exclusive Updates</Link>
            </Button>
            <Button variant="magical" size="xl" asChild>
              <Link to="/partnerships">Join Our Beta Screening Community</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>

      {/* Quote Section */}
      <QuoteSection 
        quote="Every story we create plants a seed of wonder that grows into lifelong conservation and cultural appreciation."
        author="Whimsy Films Creative Team"
        role="On the Power of Storytelling"
      />

      {/* Call to Action */}
      <ContentBlock 
        title="Shape the Future of Storytelling"
        variant="gradient"
      >
        <p className="text-lg text-forest-deep/80 max-w-3xl mx-auto mb-8 text-center">
          Join us in creating productions that don't just entertain — they inspire, educate, and empower 
          the next generation to become guardians of our planet and its cultures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="xl" asChild>
            <Link to="/partnerships">Become a Production Partner</Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link to="/contact">Connect With Our Team</Link>
          </Button>
        </div>
      </ContentBlock>
    </>
  );
};

export default Productions;