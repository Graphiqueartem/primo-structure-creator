import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { ParallaxSection } from "@/components/layout/ParallaxSection";
import heroMain from "@/assets/hero-main.jpg";
import eagleHero from "@/assets/videos/eagle-hero.jpg";
import turtleConservation from "@/assets/videos/turtle-conservation.jpg";
import { Globe, Heart, TreePine, BookOpen, Camera, Palette, Users, GraduationCap } from "lucide-react";
const About = () => {
  return (
    <div className="min-h-screen">
      {/* Who We Are – Full Width */}
      <ParallaxSection image={heroMain} size="hero" className="pt-24 pb-16" align="center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ivory">
          A Global Studio With a Purpose
        </h1>
        <p className="text-lg md:text-xl text-ivory/90 leading-relaxed max-w-3xl mx-auto">
          <strong>
            Whimsy Films is a UK-based production house dedicated to creating magical, child-centered films and series
            that combine folklore, wildlife, and imaginative storytelling. More than a studio — a movement for cultural
            celebration and conservation.
          </strong>
        </p>
        <div className="mt-6 flex justify-center">
          <Button variant="magical" size="lg" asChild>
            <Link to="/partnerships">Meet Our Partners</Link>
          </Button>
        </div>
      </ParallaxSection>

      <ContentBlock 
        title="We work at the intersection of:"
        variant="minimal"
        className="bg-background"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Camera className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-forest-deep mb-2">🎬 Creative Cinema</h4>
                <p className="text-xs text-muted-foreground">
                  <strong>Original productions blending live action, puppetry, wildlife, and AI-enhanced visuals.</strong>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-forest-deep mb-2">🌍 Cultural Heritage</h4>
                <p className="text-xs text-muted-foreground">
                  <strong>Folklore and fairy tales from around the world, retold with respect and authenticity.</strong>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <TreePine className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-forest-deep mb-2">🐾 Conservation Storytelling</h4>
                <p className="text-xs text-muted-foreground">
                  <strong>Every story supports the protection of wildlife and ecosystems.</strong>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-forest-deep mb-2">👶 Child-Focused Education</h4>
                <p className="text-xs text-muted-foreground">
                  <strong>Stories designed to spark empathy, curiosity, and learning.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentBlock>

      {/* Our Story – Timeline Layout */}
      <ParallaxSection image={eagleHero} size="lg" className="text-ivory">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our Story</h2>
          <div className="space-y-6 max-w-3xl mx-auto text-center">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">The Beginning</h3>
              <p className="text-base leading-relaxed text-ivory/90">
                <strong>Whimsy Films began with a simple belief: that the old stories we tell our children hold the power to shape the world of tomorrow. Across every culture, fairy tales and folklore carry wisdom, values, and a connection to the natural world. Yet, many of these stories remain untold on the global stage.</strong>
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">The Challenge</h3>
              <p className="text-base leading-relaxed text-ivory/90">
                <strong>At the same time, our planet's wildlife faces unprecedented threats. Children are growing up further removed from nature, at risk of losing their connection to the very creatures and landscapes that inspired those stories in the first place.</strong>
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-base leading-relaxed text-ivory/90">
                <strong>Whimsy Films was founded to bridge that gap. To reawaken the magic of folklore and reconnect children with wildlife, through films that are enchanting, educational, and globally inclusive.</strong>
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Folklore & Sustainability */}
      <ParallaxSection image={turtleConservation} size="lg" className="text-ivory">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Folklore & Sustainability</h2>
          <div className="space-y-4 text-ivory/90">
            <p className="text-lg leading-relaxed">
              <strong>Folklore is more than entertainment. It is the ancestral memory of humankind, carrying lessons on how to coexist with the environment, how to navigate social harmony, and how to find meaning in times of uncertainty.</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <strong>At Whimsy Films, we treat folklore as a vital resource for sustainability education. By connecting stories with pressing issues like climate change, biodiversity, and cultural preservation, we reframe folklore as a tool for empowerment.</strong>
            </p>
            <p className="text-lg leading-relaxed font-medium">
              <strong>Through our work, heritage is not frozen in time but activated as a force for present and future change.</strong>
            </p>
          </div>
          <div className="pt-2">
            <Button variant="magical" size="lg" asChild>
              <Link to="/vision">Discover Our Vision</Link>
            </Button>
          </div>
        </div>
      </ParallaxSection>

      {/* Our Team – Future Expansion */}
      <ContentBlock 
        title="Our Team (Future Expansion)"
        variant="minimal"
        className="bg-background"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong>While Whimsy Films is young, it is built on collaboration and expertise. 
                For each project, we bring together:</strong>
              </p>
              
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-forest-deep">Cultural Consultants</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>ensuring authenticity in folklore representation.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <TreePine className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-forest-deep">Wildlife Specialists</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>guiding our conservation storytelling and animal cinematography.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Palette className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-forest-deep">Puppetry & Practical Artists</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>crafting characters that feel tactile and timeless.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-forest-deep">Filmmakers & Technologists</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>blending AI, VFX, and live action into seamless narratives.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-forest-deep">Educators</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>aligning our stories with child learning frameworks.</strong>
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-base leading-relaxed">
                <strong>Our core founding team is supported by a growing global network of advisors, 
                creatives, and institutional partners.</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="magical" size="lg" asChild>
                <Link to="/partnerships">Meet Our Partners</Link>
              </Button>
            </div>
          </div>
          
        </div>
      </ContentBlock>
    </div>
  );
};

export default About;