import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { locations } from "@/data/locations";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center">
              <img 
                src="/logo1.png" 
                alt="Zia Pizza" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Authentic Italian pizza and dining experience across three premium locations in the UK. 
              Fresh ingredients, traditional recipes, exceptional service.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/share/1CkvTGuMtM/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/ziapizza_lambonthestrand?igsh=azY5d3NhMG5ma2pq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            {/* General Hours */}
            <div className="pt-4 border-t border-border/30">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="font-medium">General Hours: Tue-Sun 11:30 AM - 11:00 PM</span>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-1">
                *Hours may vary by location. Check individual location pages for specific hours.
              </p>
            </div>
          </div>

          {/* Column 2: Our Locations - CENTERED */}
          <div className="md:col-span-6 md:col-start-4 space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground">Our Locations</h3>
            <div className="space-y-3">
              {locations.map((location) => (
                <div key={location.id} className="group">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-card/40 border border-border/20 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 hover:shadow-md">
                    <div className="flex-1">
                      <Link 
                        to={`/location/${location.id}`}
                        className="block font-semibold text-foreground hover:text-primary transition-colors text-sm mb-1"
                      >
                        {location.name.replace("Zia Pizza – ", "")}
                      </Link>
                      <a 
                        href={`tel:${location.phone}`} 
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-3 h-3" />
                        {location.phone}
                      </a>
                    </div>
                      {/* Social Media Links */}
                      {location.socialMedia && (
                        <div className="flex items-center gap-0.5 ml-2">
                        {location.socialMedia.facebook && (
                          <a 
                            href={location.socialMedia.facebook}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`${location.name} Facebook`}
                          >
                            <Facebook className="w-5 h-5" />
                          </a>
                        )}
                        {location.socialMedia.instagram && (
                          <a 
                            href={location.socialMedia.instagram}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`${location.name} Instagram`}
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:col-span-3 md:col-start-10 space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="block px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                Home
              </Link>
              <Link 
                to="/locations" 
                className="block px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                Our Locations
              </Link>
              <Link 
                to="/deals" 
                className="block px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                Deals
              </Link>
              <Link 
                to="/menu" 
                className="block px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                Contact
              </Link>
            </nav>
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