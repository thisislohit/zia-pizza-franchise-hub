import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { locations } from "@/data/locations";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="font-display font-bold text-2xl">
                Zia <span className="text-secondary">Pizza</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Authentic Italian pizza and dining experience across three premium locations in the UK. 
              Fresh ingredients, traditional recipes, exceptional service.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/ziapizza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/ziapizza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/ziapizza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="block text-white/80 hover:text-secondary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/locations" 
                className="block text-white/80 hover:text-secondary transition-colors"
              >
                Our Locations
              </Link>
              <Link 
                to="/menu" 
                className="block text-white/80 hover:text-secondary transition-colors"
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="block text-white/80 hover:text-secondary transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-white/80 hover:text-secondary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Our Locations */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Our Locations</h3>
            <div className="space-y-3">
              {locations.map((location) => (
                <div key={location.id} className="space-y-1">
                  <Link 
                    to={`/location/${location.id}`}
                    className="block font-medium text-white hover:text-secondary transition-colors"
                  >
                    {location.name.replace("Zia Pizza – ", "")}
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Phone className="w-3 h-3" />
                    <a href={`tel:${location.phone}`} className="hover:text-secondary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Stay Updated</h3>
            <p className="text-white/80 text-sm">
              Subscribe to our newsletter for exclusive offers, new menu items, and special events.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            {/* General Hours */}
            <div className="pt-4 border-t border-white/20">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Clock className="w-4 h-4" />
                <span>General Hours: Tue-Sun 11:30 AM - 11:00 PM</span>
              </div>
              <p className="text-xs text-white/60 mt-1">
                *Hours may vary by location. Check individual location pages for specific hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} Zia Pizza. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <Link to="/privacy" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-secondary transition-colors">
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