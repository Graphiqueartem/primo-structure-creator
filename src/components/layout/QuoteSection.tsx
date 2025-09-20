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
    <section className={`py-20 relative overflow-hidden ${backgroundClass}`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-9xl font-serif text-forest-deep">"</div>
        <div className="absolute bottom-10 left-10 text-9xl font-serif text-forest-deep rotate-180">"</div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-forest-deep mb-8 leading-relaxed">
            "{quote}"
          </blockquote>
          
          {(author || role) && (
            <div className="text-forest-deep/80">
              {author && (
                <div className="font-semibold text-lg mb-1">{author}</div>
              )}
              {role && (
                <div className="text-sm font-medium">{role}</div>
              )}
            </div>
          )}
          
          {decorativeElements && (
            <div className="mt-8">
              {decorativeElements}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};