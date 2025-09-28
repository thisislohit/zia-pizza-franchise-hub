import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { locations } from "@/data/locations";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-2">
            <div className="flex items-center">
              <img 
                src="/logo1.png" 
                alt="Zia Pizza" 
                className="h-[100px] w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Authentic Italian pizza and dining experience across three premium locations in the UK. 
              Fresh ingredients, traditional recipes, exceptional service.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/ziapizza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/ziapizza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/ziapizza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/locations" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Our Locations
              </Link>
              <Link 
                to="/menu" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Our Locations */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Our Locations</h3>
            <div className="space-y-3">
              {locations.map((location) => (
                <div key={location.id} className="space-y-1">
                  <Link 
                    to={`/location/${location.id}`}
                    className="block font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {location.name.replace("Zia Pizza – ", "")}
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-3 h-3" />
                    <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for exclusive offers, new menu items, and special events.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            {/* General Hours */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>General Hours: Tue-Sun 11:30 AM - 11:00 PM</span>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-1">
                *Hours may vary by location. Check individual location pages for specific hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} <span className="text-foreground">Zia</span> <span className="text-primary">Pizza</span>. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;