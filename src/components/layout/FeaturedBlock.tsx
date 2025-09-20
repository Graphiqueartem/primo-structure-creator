import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeaturedBlockProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeaturedBlock = ({ icon, title, description }: FeaturedBlockProps) => {
  return (
    <Card className="border-forest-light/30 hover:shadow-soft transition-all duration-300 transform hover:scale-105">
      <CardContent className="p-4 md:p-5 text-center">
        <div className="text-primary mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-forest-deep mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};