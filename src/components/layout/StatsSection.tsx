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
    <section className={`py-8 md:py-12 lg:py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-8 md:mb-12">
            {title && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-deep mb-3 md:mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-magical transition-all duration-300 hover:scale-105 bg-background/50 backdrop-blur-sm border-forest-light/30">
              <CardContent className="p-4 md:p-6">
                <div className="text-primary mb-3 md:mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-forest-deep mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-lg font-semibold text-forest-deep mb-1 md:mb-2">
                  {stat.label}
                </div>
                {stat.description && (
                  <p className="text-xs md:text-sm text-muted-foreground">
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