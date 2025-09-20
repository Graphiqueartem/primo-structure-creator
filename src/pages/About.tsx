import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We're passionate about creating exceptional digital experiences that drive results and inspire connection.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded with a vision to transform how businesses connect with their audiences, we've been at the forefront of digital innovation for years.
              </p>
              <p className="text-muted-foreground">
                Our team combines creativity, technical expertise, and strategic thinking to deliver solutions that not only look great but perform exceptionally.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-8 h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Image placeholder</p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-soft">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </Card>
            <Card className="p-6 shadow-soft">
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-muted-foreground">
                Every project receives our meticulous attention to detail, ensuring exceptional results that exceed expectations.
              </p>
            </Card>
            <Card className="p-6 shadow-soft">
              <h3 className="text-xl font-semibold mb-4">Partnership</h3>
              <p className="text-muted-foreground">
                We believe in collaborative relationships, working closely with clients to understand and achieve their goals.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;