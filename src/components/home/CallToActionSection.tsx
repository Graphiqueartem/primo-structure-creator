import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getValidRoute } from "@/utils/navigation";

const CallToActionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-forest-deep leading-tight">
              Join the Global Movement
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Every story matters. Every partnership creates change. Every action protects our future.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 justify-center items-center">
            <Button variant="hero" size="xl" asChild>
              <Link to={getValidRoute("/partnerships")}>Partner With Us</Link>
            </Button>
            <Button variant="magical" size="xl" asChild>
              <Link to={getValidRoute("/get-involved")}>Support Wildlife Storytelling</Link>
            </Button>
            <Button variant="warm" size="xl" asChild>
              <Link to={getValidRoute("/get-involved")}>Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;