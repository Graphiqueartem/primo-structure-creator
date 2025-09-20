import { ReactNode } from "react";
import { ImagePlaceholder, VideoPlaceholder } from "@/components/ui/placeholders";

interface ContentSectionProps {
  title: string;
  content: ReactNode;
  mediaType: "image" | "video";
  mediaPosition: "left" | "right";
  backgroundColor?: string;
}

export const ContentSection = ({ 
  title, 
  content, 
  mediaType, 
  mediaPosition, 
  backgroundColor = "bg-background" 
}: ContentSectionProps) => {
  const MediaComponent = mediaType === "image" ? ImagePlaceholder : VideoPlaceholder;
  
  return (
    <section className={`py-3 md:py-4 lg:py-5 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-8 items-center ${
          mediaPosition === "left" ? "lg:grid-flow-col-dense" : ""
        }`}>
          <div className={mediaPosition === "left" ? "lg:col-start-2" : ""}>
            <h2 className="text-3xl font-bold text-forest-deep mb-6">
              {title}
            </h2>
            <div className="text-muted-foreground space-y-4">
              {content}
            </div>
          </div>
          
          <div className={mediaPosition === "left" ? "lg:col-start-1" : ""}>
            <MediaComponent />
          </div>
        </div>
      </div>
    </section>
  );
};