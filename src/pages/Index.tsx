import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Globe, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Next Project
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions and creative excellence in every project we undertake
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with audiences worldwide through our comprehensive platform
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Build meaningful connections and foster collaboration
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Cutting-edge solutions powered by the latest technology
                </p>
                <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full"></div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p className="text-muted-foreground text-sm">
                  Creating positive change through meaningful projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hero Feature Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Next Level
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Transforming Ideas Into Reality
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine creativity, technology, and strategic thinking to deliver 
                exceptional results that exceed expectations and drive meaningful impact.
              </p>
              <Button size="lg" className="group">
                Explore Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-subtle rounded-2xl flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <Play className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-[60vh] bg-gradient-primary flex items-center justify-center">
        <div className="text-center text-white space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">Excellence</h2>
          <p className="text-xl text-white/80">In every detail, every moment, every project</p>
        </div>
        <div className="absolute bottom-8 right-8 text-white/60 text-sm">IMAGE</div>
      </section>

      {/* Content with Image Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Building the Future Through Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a simple belief: that great ideas deserve exceptional execution. 
                Today, we continue to push boundaries and create solutions that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From concept to completion, we partner with visionaries and organizations 
                to bring their most ambitious projects to life with precision and creativity.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Part 1 of 4</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;