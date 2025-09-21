import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContentBlock } from "@/components/layout/ContentBlock";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";
import { Globe, Heart, TreePine, BookOpen, Camera, Palette } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="/src/assets/videos/praying-mantis.mp4" />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-white/20 text-white border-white/30">About Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Where Magic Meets Mission</h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-4">Stories Rooted in Culture, Wildlife, and Wonder</h2>
            <div className="text-lg text-white/80 mb-8">
              <p className="font-semibold">Whimsy Films is more than a studio — we are a movement for cultural celebration, conservation, and the power of imagination to inspire real-world change.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg" asChild><Link to="#who-we-are">Discover Our Story</Link></Button>
              <Button variant="magical" size="lg" asChild><Link to="/partnerships">Partner With Us</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <ContentBlock id="who-we-are" title="Who We Are" variant="minimal" className="bg-background">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed"><strong>Whimsy Films is a UK-based production house dedicated to creating magical, child-centered films and series that combine folklore, wildlife, and imaginative storytelling. But we are more than a studio — we are a movement for cultural celebration and conservation.</strong></p>
            <Button variant="magical" size="lg" asChild><Link to="#our-story">Learn More About Us</Link></Button>
          </div>
          <div className="grid grid-cols-2 gap-4"><ImagePlaceholder /><VideoPlaceholder /><VideoPlaceholder /><ImagePlaceholder /></div>
        </div>
      </ContentBlock>

      {/* Our Story */}
      <ContentBlock id="our-story" title="Our Story" variant="minimal" className="bg-forest-light/10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <VideoPlaceholder />
          <div className="space-y-6">
            <p className="text-lg leading-relaxed"><strong>Whimsy Films began with a simple belief: that the old stories we tell our children hold the power to shape the world of tomorrow. Whimsy Films was founded to bridge that gap. To reawaken the magic of folklore and reconnect children with wildlife, through films that are enchanting, educational, and globally inclusive.</strong></p>
            <Button variant="warm" size="lg" asChild><Link to="/vision">Read Our Story</Link></Button>
          </div>
        </div>
      </ContentBlock>
    </div>
  );
};

export default About;