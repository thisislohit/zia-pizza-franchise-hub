import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locations } from "@/data/locations";
import { useToast } from "@/hooks/use-toast";

// Menu dropdown: order Lamb, Salisbury, Westbury. Display names per location.
const menuLocationDisplayNames: Record<string, string> = {
  salisbury: "Salisbury",
  westbury: "Westbury",
  trowbridge: "Lamb",
};
const menuDropdownOrder: string[] = ["trowbridge", "salisbury", "westbury"];

const MENU_CLOSE_DELAY_MS = 300;
const MENU_OPEN_GRACE_MS = 200;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimeRef = useRef<number>(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleMenuDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    openTimeRef.current = Date.now();
    setMenuDropdownOpen(true);
  };

  const handleMenuDropdownMouseLeave = () => {
    const now = Date.now();
    const justOpened = now - openTimeRef.current < MENU_OPEN_GRACE_MS;
    if (justOpened) return;
    closeTimeoutRef.current = setTimeout(() => setMenuDropdownOpen(false), MENU_CLOSE_DELAY_MS);
  };

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
          // Handle different types of geolocation errors more gracefully
          let errorMessage = "Unable to get your location.";
          let shouldRedirect = false;
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access denied. Redirecting to locations page.";
              shouldRedirect = true;
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information unavailable. Please try again or search manually.";
              break;
            case error.TIMEOUT:
              errorMessage = "Location request timed out. Please try again or search manually.";
              break;
            default:
              errorMessage = "Unable to get your location. Please search manually.";
              break;
          }
          
          toast({
            title: "Location Access",
            description: errorMessage,
            variant: "destructive"
          });
          
          // Redirect to locations page if permission was denied
          if (shouldRedirect) {
            navigate("/locations");
          }
          
          setIsMenuOpen(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    } else {
      toast({
        title: "Location Not Supported",
        description: "Your browser doesn't support location services. Please search manually.",
        variant: "destructive"
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/locations", label: "Locations" },
    { href: "/menu", label: "Menu" },
    { href: "/deals", label: "Deals" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-premium">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:scale-105 hover:opacity-80 transition-all duration-300">
            <img 
              src="/logo.png" 
              alt="Zia Pizza" 
              className="h-[20px] w-auto"
            />
          </Link>

          {/* Desktop Navigation - Absolutely Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) =>
              item.href === "/menu" ? (
                <DropdownMenu
                  key={item.href}
                  open={menuDropdownOpen}
                  onOpenChange={setMenuDropdownOpen}
                  modal={false}
                >
                  <div
                    onMouseEnter={handleMenuDropdownMouseEnter}
                    onMouseLeave={handleMenuDropdownMouseLeave}
                    className="flex items-center"
                  >
                    <DropdownMenuTrigger asChild>
                      <button
                        className="font-body font-medium whitespace-nowrap text-foreground transition-colors focus:outline-none focus:ring-0"
                      >
                        {item.label}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      sideOffset={2}
                      onMouseEnter={handleMenuDropdownMouseEnter}
                      onMouseLeave={handleMenuDropdownMouseLeave}
                      className="w-fit min-w-0 p-1"
                    >
                      {menuDropdownOrder.map((locationId, index) => {
                        const loc = locations.find((l) => l.id === locationId);
                        if (!loc) return null;
                        return (
                          <DropdownMenuItem key={loc.id} asChild>
                            <Link
                              to={`/menu?location=${loc.id}`}
                              className="block animate-dropdown-item-in"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              {menuLocationDisplayNames[loc.id] ?? loc.name}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </div>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-body font-medium whitespace-nowrap transition-all duration-300 hover:text-primary hover:transform hover:-translate-y-1 hover:scale-105 ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
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
                  className={`font-body font-medium py-2 whitespace-nowrap transition-all duration-300 hover:text-primary ${
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