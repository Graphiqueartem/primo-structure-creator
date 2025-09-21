import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { QuoteSection } from "@/components/layout/QuoteSection";
import { VideoPlaceholder, ImagePlaceholder } from "@/components/ui/placeholders";
import {
  Clapperboard,
  Heart,
  Users,
  Sparkles,
  Globe,
  Leaf,
  Building,
  GraduationCap,
  Video,
  Camera,
  Palette,
  Wand2,
  TreePine,
  BookOpen,
  HandHeart,
  Trophy
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-visible bg-gradient-hero pt-20 pb-10 sm:pt-24 sm:pb-12">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/src/assets/videos/praying-mantis.mp4"
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Where Storytelling
              <span className="block text-gold-warm">Inspires Action</span>
            </h1>
            
            <p className="text-lg sm:text-2xl text-ivory/90 leading-relaxed max-w-4xl mx-auto">
              <strong>Whimsy Films is a global production house bringing folklore, wildlife, and magical 
              storytelling to life — to inspire children, empower communities, and protect our natural world.</strong>
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center pt-6">
              <Button variant="hero" size="xl" asChild>
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
              <Button variant="warm" size="xl" asChild>
                <Link to="/vision">Discover Our Vision</Link>
              </Button>
              <Button variant="magical" size="xl" asChild>
                <Link to="/get-involved">Join the Movement</Link>
              </Button>
            </div>

            <div className="text-ivory/80 text-sm uppercase tracking-wider pt-8">
              Stories connect us. Culture inspires us. Together we protect our planet.
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <QuoteSection 
        quote="Every tradition is a story. Every story is a bridge to the future."
        backgroundClass="bg-gradient-warm text-forest-deep"
      />

      {/* Expanded Intro Section */}
      <ContentBlock 
        title=""
        variant="minimal"
        className="bg-forest-light/20"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong>At Whimsy Films, we see culture as a living archive of human imagination—and a 
                tool for shaping a more sustainable tomorrow. Through film, exhibitions, festivals, 
                and collaborations, we connect communities, governments, and cultural institutions.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                <strong>We do not just tell stories; we curate experiences that move audiences, spark 
                conversations, and inspire change. By weaving together folklore and conservation, 
                we make environmental action personal, emotional, and unforgettable.</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="magical" size="lg" asChild>
                <Link to="/partnerships">Explore Partnerships</Link>
              </Button>
              <Button variant="warm" size="lg" asChild>
                <Link to="/contact">Register Your Interest</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <VideoPlaceholder />
          </div>
        </div>
      </ContentBlock>

      {/* Introduction Block: Stories That Change the World */}
      <ContentBlock 
        title="Stories That Change the World"
        variant="minimal"
        className="bg-background"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong>At Whimsy Films, we believe storytelling is humanity's oldest and most powerful tool. 
                Stories have taught us who we are, connected us across cultures, and inspired generations to dream.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Today, stories must do more. They must remind us of our shared humanity, protect the fragile 
                beauty of wildlife, and spark empathy in a divided world.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                <strong>That is why Whimsy Films exists. We are a UK-based production company that creates films, 
                series, and cultural experiences rooted in folklore and magical storytelling — designed not 
                only to entertain but also to educate, conserve, and inspire global action.</strong>
              </p>
            </div>
            
            <div className="bg-accent/50 p-4 rounded-lg border-l-4 border-gold-warm">
              <p className="text-sm font-medium text-forest-deep italic">
                "We tell magical stories that protect nature and inspire generations."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="magical" size="lg" asChild>
                <Link to="/productions">Watch Our Films</Link>
              </Button>
              <Button variant="warm" size="lg" asChild>
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-involved">Join the Journey</Link>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <Card className="border-gold-warm/30 bg-gradient-warm/20">
              <CardContent className="p-4">
                <h4 className="font-semibold text-forest-deep mb-2">Our Production House</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Our production house blends film, theatre, puppetry, and AI innovation. Our work 
                  celebrates folklore, protects wildlife, and inspires the imaginations of children 
                  and adults alike. From Africa to Asia, from Europe to the Americas, we bring 
                  magical stories to life — and invite the world to join us.</strong>
                </p>
              </CardContent>
            </Card>
            
            <div className="flex justify-center">
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Production Highlights */}
      <ContentBlock 
        title="Our Creative Excellence"
        variant="minimal"
        className="bg-forest-light/10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-forest-deep mb-2">
                Wildlife Cinematography
              </h3>
              <p className="text-sm text-muted-foreground">
                capturing the raw wonder of the natural world.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-forest-deep mb-2">
                Puppetry & Practical Artistry
              </h3>
              <p className="text-sm text-muted-foreground">
                timeless, tactile, beloved by children.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-forest-deep mb-2">
                Live Action & Human Performance
              </h3>
              <p className="text-sm text-muted-foreground">
                authentic, emotional, deeply relatable.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Wand2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-forest-deep mb-2">
                AI-enhanced Visuals & Innovation
              </h3>
              <p className="text-sm text-muted-foreground">
                expanding creative possibilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentBlock>

      {/* Why Whimsy Films Matters */}
      <ContentBlock 
        title="Why Whimsy Films Matters"
        variant="minimal"
        className="bg-gradient-warm/30"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed font-medium">
                <strong>We are not simply a film studio. We are building a global cultural platform where every production:</strong>
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-forest-light/30">
                  <CardContent className="p-4">
                    <Building className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-forest-deep mb-1">Soft Power Tool</h4>
                    <p className="text-xs text-muted-foreground">
                      <strong>Acts as a soft power tool for governments to showcase their cultural heritage.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-forest-light/30">
                  <CardContent className="p-4">
                    <TreePine className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-forest-deep mb-1">Conservation Catalyst</h4>
                    <p className="text-xs text-muted-foreground">
                      <strong>Serves as a catalyst for conservation partnerships, linking storytelling with wildlife protection.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-forest-light/30">
                  <CardContent className="p-4">
                    <GraduationCap className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-forest-deep mb-1">Education Support</h4>
                    <p className="text-xs text-muted-foreground">
                      <strong>Supports education systems, offering engaging, curriculum-linked cultural resources.</strong>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-forest-light/30">
                  <CardContent className="p-4">
                    <Trophy className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-semibold text-forest-deep mb-1">Economic Opportunities</h4>
                    <p className="text-xs text-muted-foreground">
                      <strong>Creates new economic opportunities in creative industries, tourism, and cultural exchange.</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-accent/50 p-6 rounded-lg border-l-4 border-primary">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-forest-deep">
                    <strong>For investors, governments, and NGOs, Whimsy Films represents a rare opportunity:</strong>
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li><strong>• To align with a high-growth creative sector with strong audience demand.</strong></li>
                    <li><strong>• To co-own a positive cultural legacy with measurable social and environmental impact.</strong></li>
                    <li><strong>• To access global distribution networks (streaming, festivals, education platforms).</strong></li>
                    <li><strong>• To partner in shaping the future of inclusive, impactful children's media.</strong></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="magical" size="lg" asChild>
                <Link to="/impact">Discover Our Impact</Link>
              </Button>
              <Button variant="warm" size="lg" asChild>
                <Link to="/partnerships">Partner With Us</Link>
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

export default Index;