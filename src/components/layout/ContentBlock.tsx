import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentBlockProps {
  title?: string;
  children: ReactNode;
  variant?: "default" | "outlined" | "gradient" | "minimal";
  className?: string;
  icon?: ReactNode;
}

export const ContentBlock = ({ 
  title, 
  children, 
  variant = "default",
  className = "",
  icon
}: ContentBlockProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "outlined":
        return "border-2 border-forest-light/30 bg-background hover:shadow-soft transition-all duration-300";
      case "gradient":
        return "bg-gradient-warm border-0 text-forest-deep";
      case "minimal":
        return "border-0 shadow-none bg-transparent";
      default:
        return "bg-background border border-border hover:shadow-soft transition-all duration-300";
    }
  };

  if (variant === "minimal") {
    return (
      <div className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          {title && (
            <div className="text-center mb-12">
              {icon && <div className="mb-4 flex justify-center">{icon}</div>}
              <h2 className="text-3xl md:text-4xl font-bold text-forest-deep mb-6">
                {title}
              </h2>
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <Card className={getVariantClasses()}>
          {title && (
            <CardHeader className="text-center pb-8">
              {icon && <div className="mb-4 flex justify-center">{icon}</div>}
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </CardTitle>
            </CardHeader>
          )}
          <CardContent className="p-8">
            {children}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};