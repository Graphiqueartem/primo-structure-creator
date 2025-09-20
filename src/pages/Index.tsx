import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import IntroSection from "@/components/home/IntroSection";
import ProductionSection from "@/components/home/ProductionSection";
import MissionSection from "@/components/home/MissionSection";
import ImpactSection from "@/components/home/ImpactSection";
import CallToActionSection from "@/components/home/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <IntroSection />
      <ProductionSection />
      <MissionSection />
      <ImpactSection />
      <CallToActionSection />
    </div>
  );
};

export default Index;