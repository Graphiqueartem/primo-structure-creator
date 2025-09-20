import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Integration", "Content Management"],
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital strategies that align with your business goals and drive growth.",
      features: ["Market Research", "Competitive Analysis", "Growth Planning", "ROI Optimization"],
    },
    {
      title: "Brand Design",
      description: "Creating compelling visual identities that resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets"],
    },
  ];

  return (
    <Layout>
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="mb-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary mb-4"></div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-subtle rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our comprehensive suite of services.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elegant">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;