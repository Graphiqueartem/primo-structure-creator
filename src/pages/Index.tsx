import HeroSection from "@/components/home/HeroSection";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-deep mb-4">Our Creative Focus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bringing together folklore, wildlife, and storytelling through innovative media production
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Cultural Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Authentic folklore from around the world</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Wildlife Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Conservation through storytelling</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Creative Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Puppetry, AI, and live action</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Educational content for children</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Showcase */}
      <section className="py-16 bg-forest-light/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-forest-deep mb-6">Our Creative Vision</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We create magical content that brings folklore and wildlife together, 
                inspiring children to connect with nature and cultural heritage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder />
                <VideoPlaceholder />
              </div>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder />
              <div className="grid grid-cols-2 gap-4">
                <VideoPlaceholder />
                <ImagePlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <VideoPlaceholder />
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder />
                <VideoPlaceholder />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-forest-deep mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Through the power of storytelling, we aim to preserve cultural heritage 
                while fostering a deep connection between children and the natural world.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-warm text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-forest-deep mb-4">Join Our Story</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a movement that celebrates culture, protects wildlife, and inspires the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;