import { ReactNode } from "react";

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
  
  return (
    <section className={`py-1 md:py-4 lg:py-5 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-deep mb-2 md:mb-4">
            {title}
          </h2>
          <div className="text-muted-foreground space-y-2 md:space-y-4">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};