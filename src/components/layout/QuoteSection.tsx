import { ReactNode } from "react";

interface QuoteSectionProps {
  quote: string;
  author?: string;
  role?: string;
  backgroundClass?: string;
  decorativeElements?: ReactNode;
}

export const QuoteSection = ({ 
  quote, 
  author, 
  role, 
  backgroundClass = "bg-gradient-warm",
  decorativeElements 
}: QuoteSectionProps) => {
  return (
    <section className={`py-12 md:py-16 lg:py-20 relative overflow-hidden ${backgroundClass}`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-6xl md:text-9xl font-serif text-current">"</div>
        <div className="absolute bottom-10 left-10 text-6xl md:text-9xl font-serif text-current rotate-180">"</div>
      </div>
      
      <div className="container mx-auto px-6 md:px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-current mb-6 md:mb-8 leading-relaxed px-2">
            "{quote}"
          </blockquote>
          
          {(author || role) && (
            <div className="text-current/90 px-2">
              {author && (
                <div className="font-semibold text-sm sm:text-base md:text-lg mb-1">{author}</div>
              )}
              {role && (
                <div className="text-xs sm:text-sm font-medium text-current/80">{role}</div>
              )}
            </div>
          )}
          
          {decorativeElements && (
            <div className="mt-6 md:mt-8 px-2">
              {decorativeElements}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};