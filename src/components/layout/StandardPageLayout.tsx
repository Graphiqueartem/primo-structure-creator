import { ReactNode } from "react";
import { FeaturedBlock } from "./FeaturedBlock";
import { ContentSection } from "./ContentSection";
import { HeroSection } from "./HeroSection";

interface FeaturedBlockData {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ContentSectionData {
  title: string;
  content: ReactNode;
  mediaType: "image" | "video";
  mediaPosition: "left" | "right";
  backgroundColor?: string;
}

interface HeroSectionData {
  title: string;
  subtitle?: string;
  content: ReactNode;
  actions?: ReactNode;
  backgroundClass?: string;
}

interface StandardPageLayoutProps {
  featuredBlocks: FeaturedBlockData[];
  contentSections: ContentSectionData[];
  heroSection: HeroSectionData;
}

export const StandardPageLayout = ({ 
  featuredBlocks, 
  contentSections, 
  heroSection 
}: StandardPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Featured Blocks Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {featuredBlocks.map((block, index) => (
              <FeaturedBlock
                key={index}
                icon={block.icon}
                title={block.title}
                description={block.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {contentSections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          content={section.content}
          mediaType={section.mediaType}
          mediaPosition={section.mediaPosition}
          backgroundColor={section.backgroundColor}
        />
      ))}

      {/* Hero Section */}
      <HeroSection
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        content={heroSection.content}
        actions={heroSection.actions}
        backgroundClass={heroSection.backgroundClass}
      />
    </div>
  );
};