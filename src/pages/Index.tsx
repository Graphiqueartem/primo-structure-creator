import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Build Something Amazing
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Transform your ideas into exceptional digital experiences with our cutting-edge solutions and expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elegant text-lg px-8 py-4">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine innovation, expertise, and passion to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-gradient-primary mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Our experienced professionals bring years of industry knowledge to every project.
              </p>
            </Card>
            <Card className="p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-gradient-primary mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Modern Solutions</h3>
              <p className="text-muted-foreground">
                We leverage the latest technologies to build scalable and future-proof solutions.
              </p>
            </Card>
            <Card className="p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-gradient-primary mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-muted-foreground">
                Track record of successful projects that drive growth and deliver measurable impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to bring your vision to life with exceptional design and development.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elegant text-lg px-8 py-4">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
