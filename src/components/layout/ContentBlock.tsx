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
      <div className={`py-1 md:py-4 lg:py-5 ${className}`}>
        <div className="container mx-auto px-4 md:px-4">
          {title && (
            <div className="text-center mb-2 md:mb-5">
              {icon && <div className="mb-2 flex justify-center">{icon}</div>}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-forest-deep mb-2 md:mb-4 px-1">
                {title}
              </h2>
            </div>
          )}
          <div className="px-1">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-1 md:py-4 lg:py-5 ${className}`}>
      <div className="container mx-auto px-4 md:px-4">
        <Card className={getVariantClasses()}>
          {title && (
            <CardHeader className="text-center pb-2 md:pb-5 px-3 md:px-6">
              {icon && <div className="mb-2 flex justify-center">{icon}</div>}
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-3 px-1">
                {title}
              </CardTitle>
            </CardHeader>
          )}
          <CardContent className="p-2 md:p-5 lg:p-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};