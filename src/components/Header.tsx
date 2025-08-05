import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold text-primary">
              Artisan Craft
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Shop All
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Clothing
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Bags
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Jewelry
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home Decor
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Shop All
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Clothing
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Bags
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Jewelry
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Home Decor
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;