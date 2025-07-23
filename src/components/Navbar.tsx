import { Button } from "@/components/ui/button";
import { MapPin, Calendar, User, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">TurfBook</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/turfs" className="text-foreground hover:text-primary transition-colors">
              Find Turfs
            </a>
            <a href="/bookings" className="text-foreground hover:text-primary transition-colors">
              My Bookings
            </a>
            <a href="/admin" className="text-foreground hover:text-primary transition-colors">
              Manage Turfs
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="gradient" size="sm" className="hidden md:flex">
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;