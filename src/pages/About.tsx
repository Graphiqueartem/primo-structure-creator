import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { Globe, Heart, TreePine, BookOpen, Camera, Palette, Users, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Who We Are – Full Width */}
      <ContentBlock 
        title="A Global Studio With a Purpose"
        variant="minimal"
        className="bg-background pt-20"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <strong>Whimsy Films is a UK-based production house dedicated to creating magical, child-centered 
              films and series that combine folklore, wildlife, and imaginative storytelling. But we are 
              more than a studio — we are a movement for cultural celebration and conservation.</strong>
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-forest-deep">We work at the intersection of:</h3>
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
          </div>
          
          
          <div className="text-center">
            <Button variant="magical" size="lg" asChild>
              <Link to="/partnerships">Meet Our Partners</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>

      {/* Our Story – Timeline Layout */}
      <ContentBlock 
        title="Our Story"
        variant="minimal"
        className="bg-forest-light/10"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-forest-deep mb-6">
              Born From a Love of Stories...
            </h3>
          </div>
          
          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-forest-deep">The Beginning</h4>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  <strong>Whimsy Films began with a simple belief: that the old stories we tell our children hold 
                  the power to shape the world of tomorrow. Across every culture, fairy tales and folklore 
                  carry wisdom, values, and a connection to the natural world. Yet, many of these stories 
                  remain untold on the global stage.</strong>
                </p>
              </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="grid lg:grid-cols-1 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-forest-deep" />
                  </div>
                  <h4 className="text-lg font-semibold text-forest-deep">The Challenge</h4>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  <strong>At the same time, our planet's wildlife faces unprecedented threats. Children are growing 
                  up further removed from nature, at risk of losing their connection to the very creatures 
                  and landscapes that inspired those stories in the first place.</strong>
                </p>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-warm rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-forest-deep" />
                  </div>
                  <h4 className="text-lg font-semibold text-forest-deep">Our Mission</h4>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  <strong>Whimsy Films was founded to bridge that gap. To reawaken the magic of folklore and 
                  reconnect children with wildlife, through films that are enchanting, educational, and globally inclusive.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Why Folklore & Sustainability */}
      <ContentBlock 
        title="Why Folklore & Sustainability"
        variant="minimal"
        className="bg-gradient-warm/20"
      >
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              <strong>Folklore is more than entertainment. It is the ancestral memory of humankind, carrying 
              lessons on how to coexist with the environment, how to navigate social harmony, and how 
              to find meaning in times of uncertainty.</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <strong>At Whimsy Films, we treat folklore as a vital resource for sustainability education. 
              By connecting stories with pressing issues like climate change, biodiversity, and cultural 
              preservation, we reframe folklore as a tool for empowerment.</strong>
            </p>
            <p className="text-lg leading-relaxed font-medium text-forest-deep">
              <strong>Through our work, heritage is not frozen in time but activated as a force for present and future change.</strong>
            </p>
          </div>
          
          <Button variant="magical" size="lg" asChild>
            <Link to="/vision">Discover Our Vision</Link>
          </Button>
        </div>
      </ContentBlock>

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