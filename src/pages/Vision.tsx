import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";
import { Heart, Globe, Users, Sparkles, BookOpen, TreePine, Lightbulb, Target, HandHeart } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen">
      {/* Mission & Values – Full Width */}
      <ContentBlock 
        title="Mission & Values"
        variant="minimal"
        className="bg-background pt-20"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <strong>At Whimsy Films, our mission is to create films that celebrate folklore, protect wildlife, 
              and inspire children everywhere to imagine a more inclusive, compassionate, and sustainable world.</strong>
            </p>
            
            <p className="text-base text-muted-foreground">
              <strong>Our values guide every decision:</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-forest-deep mb-2">Imagination</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>wonder is the seed of empathy and action.</strong>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-forest-deep mb-2">Respect</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>cultural and ecological authenticity.</strong>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-forest-deep mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>technology without losing artistry.</strong>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-forest-deep mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>co-created with governments, NGOs, educators, and communities.</strong>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-forest-deep mb-2">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>every project contributes to cultural, social, and environmental good.</strong>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-forest-deep mb-2">Global Unity</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>stories that connect cultures and bridge differences.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <ImagePlaceholder />
            <VideoPlaceholder />
          </div>
          
          <div className="text-center">
            <Button variant="magical" size="lg" asChild>
              <Link to="/get-involved">Join Our Mission</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>

      {/* Why Storytelling Matters */}
      <ContentBlock 
        title="Why Storytelling Matters"
        variant="minimal"
        className="bg-forest-light/10"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-4 text-muted-foreground text-center">
            <p className="text-lg leading-relaxed">
              <strong>Stories are more than entertainment. They pass down cultural wisdom, shape childhood 
              imagination, build empathy, and inspire societal change.</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Whimsy Films uses this power intentionally, turning folklore and wildlife storytelling 
              into platforms for education, diplomacy, and conservation.</strong>
            </p>
          </div>
          
          <div className="bg-accent/50 p-6 rounded-lg border-l-4 border-primary max-w-3xl mx-auto">
            <h4 className="font-semibold text-forest-deep mb-4 text-center">The Power of Stories:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-forest-deep text-sm">Cultural Preservation</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Keeping traditions alive for future generations</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-forest-deep text-sm">Empathy Building</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Helping children understand different perspectives</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TreePine className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-forest-deep text-sm">Environmental Awareness</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Connecting children with nature and wildlife</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-forest-deep text-sm">Global Understanding</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Bridging cultural divides through shared stories</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="warm" size="lg" asChild>
              <Link to="/productions">Discover Our Approach</Link>
            </Button>
          </div>
        </div>
      </ContentBlock>

      {/* The Future We Are Building */}
      <ContentBlock 
        title="The Future We Are Building"
        variant="minimal"
        className="bg-gradient-warm/20"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong>We envision a future where children everywhere grow up with stories representing 
                their cultures, where families discover films that are entertaining yet enriching, and 
                where governments and NGOs use our productions as cultural diplomacy tools and awareness campaigns.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Conservation efforts are amplified by stories that make the natural world unforgettable.</strong>
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-gold-warm/30 bg-gradient-warm/20">
                  <CardContent className="p-4">
                    <BookOpen className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-forest-deep mb-1">Cultural Representation</h4>
                    <p className="text-xs text-muted-foreground">
                      <strong>Every child sees their culture reflected in global storytelling</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gold-warm/30 bg-gradient-warm/20">
                  <CardContent className="p-4">
                    <Globe className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-forest-deep mb-1">Global Collaboration</h4>
                    <p className="text-xs text-muted-foreground">
                      <strong>Governments use storytelling for cultural diplomacy and unity</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gold-warm/30 bg-gradient-warm/20">
                  <CardContent className="p-4">
                    <TreePine className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-forest-deep mb-1">Conservation Impact</h4>
                    <p className="text-xs text-muted-foreground">
                      <strong>Stories inspire real action for wildlife and environmental protection</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gold-warm/30 bg-gradient-warm/20">
                  <CardContent className="p-4">
                    <HandHeart className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-forest-deep mb-1">Empowered Communities</h4>
                    <p className="text-xs text-muted-foreground">
                      <strong>Local communities become partners in preserving and sharing their stories</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="magical" size="lg" asChild>
                <Link to="/partnerships">Be Part of This Future</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <ImagePlaceholder />
          </div>
        </div>
      </ContentBlock>
    </div>
  );
};

export default Vision;