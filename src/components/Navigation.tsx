import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Vision", href: "/vision" },
    { title: "Impact", href: "/impact" },
    { title: "Productions", href: "/productions" },
    { title: "Partnerships", href: "/partnerships" },
    { title: "Get Involved", href: "/get-involved" },
    { title: "News", href: "/news" },
    { title: "Contact", href: "/contact" },
  ];

  const centeredLinks = navigationItems.filter((i) => i.title !== "Contact");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-bold text-forest-deep">
              Whimsy<span className="text-gold-warm">Films</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-6">
            {centeredLinks.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md hover:bg-accent",
                  location.pathname === item.href
                    ? "text-primary bg-accent/50"
                    : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Desktop CTA - Right */}
          <div className="hidden lg:flex items-center">
            <Button variant="magical" size="sm" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto bg-background border-border">
              <div className="mt-6 px-2">
                <Button variant="magical" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </Button>
              </div>
              <div className="flex flex-col space-y-3 mt-4 px-2">
                {centeredLinks.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={cn(
                      "block font-medium transition-colors py-3 px-3 rounded-md hover:bg-accent",
                      location.pathname === item.href
                        ? "text-primary bg-accent/50"
                        : "text-foreground hover:text-primary",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
