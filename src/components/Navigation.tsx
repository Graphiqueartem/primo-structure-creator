import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  title: string;
  href: string;
}

interface NavigationItem {
  title: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { title: "Home", href: "/" },
    { 
      title: "About Us", 
      href: "/about",
      dropdownItems: [
        { title: "Who We Are", href: "/about#who-we-are" },
        { title: "Our Story", href: "/about#our-story" },
        { title: "Our Team", href: "/about#our-team" },
      ]
    },
    { 
      title: "Our Vision", 
      href: "/vision",
      dropdownItems: [
        { title: "Mission & Values", href: "/vision#mission-values" },
        { title: "Why Storytelling Matters", href: "/vision#why-storytelling-matters" },
        { title: "The Future We Are Building", href: "/vision#future-we-are-building" },
      ]
    },
    { 
      title: "Our Impact", 
      href: "/impact",
      dropdownItems: [
        { title: "Conservation Impact", href: "/impact#conservation-impact" },
        { title: "Cultural Impact", href: "/impact#cultural-impact" },
        { title: "Education & Social Impact", href: "/impact#education-social-impact" },
        { title: "Economic Impact", href: "/impact#economic-impact" },
      ]
    },
    { 
      title: "Our Productions", 
      href: "/productions",
      dropdownItems: [
        { title: "Current Development Slate", href: "/productions#development-slate" },
        { title: "Our Approach", href: "/productions#our-approach" },
      ]
    },
    { 
      title: "Partnerships", 
      href: "/partnerships",
      dropdownItems: [
        { title: "Governments", href: "/partnerships#governments" },
        { title: "NGOs & Charities", href: "/partnerships#ngos-charities" },
        { title: "Cultural Organisations", href: "/partnerships#cultural-organisations" },
        { title: "Education Networks", href: "/partnerships#education-networks" },
        { title: "Media & Industry", href: "/partnerships#media-industry" },
        { title: "Investors", href: "/partnerships#investors" },
      ]
    },
    { title: "Get Involved", href: "/get-involved" },
    { 
      title: "News & Insights", 
      href: "/news",
      dropdownItems: [
        { title: "Updates", href: "/news#updates" },
        { title: "Thought Leadership", href: "/news#thought-leadership" },
        { title: "Impact Stories", href: "/news#impact-stories" },
      ]
    },
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
            {centeredLinks.map((item) => {
              if (item.dropdownItems) {
                return (
                  <DropdownMenu key={item.title}>
                    <DropdownMenuTrigger className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md hover:bg-accent",
                      location.pathname === item.href
                        ? "text-primary bg-accent/50"
                        : "text-muted-foreground",
                    )}>
                      {item.title}
                      <ChevronDown className="h-3 w-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-popover border-border shadow-lg z-50">
                      <DropdownMenuItem asChild>
                        <Link 
                          to={item.href}
                          className="w-full px-2 py-1.5 text-sm font-medium hover:bg-accent cursor-pointer"
                        >
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.title} asChild>
                          <Link 
                            to={dropdownItem.href}
                            className="w-full px-2 py-1.5 text-sm hover:bg-accent cursor-pointer"
                          >
                            {dropdownItem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              
              return (
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
              );
            })}
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
                  <div key={item.title}>
                    <Link
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
                    {item.dropdownItems && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            to={dropdownItem.href}
                            className="block text-sm text-muted-foreground hover:text-primary py-2 px-3 rounded-md hover:bg-accent/50 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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
