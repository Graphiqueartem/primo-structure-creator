import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description: ReactNode;
  badge?: string;
  actions?: ReactNode;
  backgroundClass?: string;
  decorativeElements?: ReactNode;
}

export const PageHeader = ({ 
  title, 
  subtitle, 
  description, 
  badge,
  actions,
  backgroundClass = "bg-gradient-hero text-white",
  decorativeElements
}: PageHeaderProps) => {
  return (
    <section className={`relative pt-20 pb-12 md:py-12 lg:py-16 overflow-hidden ${backgroundClass}`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gold-warm rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-ivory rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {badge && (
            <Badge variant="secondary" className="mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-white/20 text-current border-white/30">
              {badge}
            </Badge>
          )}
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight px-2">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-current/90 mb-4 md:mb-6 font-medium px-2">
              {subtitle}
            </h2>
          )}
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-current/80 mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            {description}
          </div>
          
          {actions && (
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-10 px-2">
              {actions}
            </div>
          )}
          
          {decorativeElements && (
            <div className="mt-8 md:mt-12">
              {decorativeElements}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};