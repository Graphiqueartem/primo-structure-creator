import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  content: ReactNode;
  actions?: ReactNode;
  backgroundClass?: string;
}

export const HeroSection = ({ 
  title, 
  subtitle, 
  content, 
  actions,
  backgroundClass = "bg-gradient-hero text-white"
}: HeroSectionProps) => {
  return (
    <section className={`py-4 md:py-6 lg:py-8 ${backgroundClass}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-xl text-current/90 mb-4">
              {subtitle}
            </h2>
          )}
          <div className="text-lg text-current/80 mb-5">
            {content}
          </div>
          {actions && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};