import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/locations";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const handleFindLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          // Calculate distances and find closest location
          const locationsWithDistance = locations.map(location => {
            const distance = calculateDistance(
              userLat, userLng, 
              location.coordinates.lat, location.coordinates.lng
            );
            return { ...location, distance };
          });
          
          const closestLocation = locationsWithDistance.sort((a, b) => a.distance - b.distance)[0];
          
          toast({
            title: "Location Found",
            description: `Navigating to ${closestLocation.name} (${closestLocation.distance.toFixed(1)} km away)`,
          });
          
          // Navigate to the closest location's detail page
          navigate(`/location/${closestLocation.id}`);
          setIsMenuOpen(false);
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to get your location. Redirecting to locations page.",
            variant: "destructive"
          });
          navigate("/locations");
          setIsMenuOpen(false);
        }
      );
    } else {
      toast({
        title: "Location Not Supported",
        description: "Your browser doesn't support location services. Redirecting to locations page.",
        variant: "destructive"
      });
      navigate("/locations");
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/locations", label: "Locations" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-premium">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Zia Pizza" 
              className="h-[40px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="btn-gold-outline"
              onClick={handleFindLocation}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Find Location
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-medium py-2 transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="outline" 
                  className="w-full btn-gold-outline"
                  onClick={handleFindLocation}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Location
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;