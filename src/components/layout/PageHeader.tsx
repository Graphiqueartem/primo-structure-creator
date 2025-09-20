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
    <section className={`relative py-20 overflow-hidden ${backgroundClass}`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gold-warm rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-ivory rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {badge && (
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-white/20 text-current border-white/30">
              {badge}
            </Badge>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-xl md:text-2xl text-current/90 mb-6 font-medium">
              {subtitle}
            </h2>
          )}
          
          <div className="text-lg md:text-xl text-current/80 mb-10 leading-relaxed max-w-3xl mx-auto">
            {description}
          </div>
          
          {actions && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {actions}
            </div>
          )}
          
          {decorativeElements && (
            <div className="mt-12">
              {decorativeElements}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};