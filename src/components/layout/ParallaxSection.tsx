import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  image: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  size?: "sm" | "md" | "lg" | "hero";
  align?: "center" | "left";
}

export const ParallaxSection = ({
  image,
  children,
  className,
  overlayClassName,
  size = "hero",
  align = "center",
}: ParallaxSectionProps) => {
  const sizeClasses =
    size === "sm"
      ? "py-16"
      : size === "md"
      ? "py-20"
      : size === "lg"
      ? "py-28"
      : "min-h-[70svh] py-20"; // hero

  return (
    <section className={cn("relative w-full overflow-hidden", sizeClasses, className)}>
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80",
          overlayClassName
        )}
        aria-hidden
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className={cn("max-w-5xl mx-auto", align === "center" ? "text-center" : "md:text-left text-center")}> 
          {children}
        </div>
      </div>
    </section>
  );
};
