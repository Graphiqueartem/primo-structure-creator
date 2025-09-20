import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
  icon: ReactNode;
  number: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: StatItem[];
  backgroundClass?: string;
}

export const StatsSection = ({ 
  title, 
  subtitle, 
  stats, 
  backgroundClass = "bg-forest-light/10" 
}: StatsSectionProps) => {
  return (
    <section className={`py-4 md:py-6 lg:py-8 ${backgroundClass}`}>
      <div className="container mx-auto px-6 md:px-4">
        {(title || subtitle) && (
          <div className="text-center mb-4 md:mb-5">
            {title && (
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-forest-deep mb-2 md:mb-3 px-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 px-2">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105 bg-background/50 backdrop-blur-sm border-forest-light/30">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="text-primary mb-2 md:mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-forest-deep mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-forest-deep mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                    {stat.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};