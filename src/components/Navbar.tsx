import { Button } from "@/components/ui/button";
import { Menu, Search, HelpCircle, Globe } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Alert Bar */}
      <div className="bg-primary text-primary-foreground py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold">AIRPORTS ARE OPEN:</span>
            <span>Expect normal operations for airport travelers.</span>
          </div>
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/90">
            <span className="mr-2">HIDE ALERT(S)</span>
            <span>▼</span>
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-accent">MUMBAI</h1>
                <p className="text-xs text-muted-foreground">INTERNATIONAL</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Flight Information
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Travel Information
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Parking & Transportation
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Shopping & Dining
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Customer Service
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                About the Airport
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
