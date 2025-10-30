import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, Navigation, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { locations, type Location } from "@/data/locations";
import { useToast } from "@/hooks/use-toast";

const LocationChooser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const { toast } = useToast();
  const [isIframeOpen, setIsIframeOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  const [iframeTitle, setIframeTitle] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = locations.filter(location =>
      location.name.toLowerCase().includes(query.toLowerCase()) ||
      location.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          // Calculate distances and sort by closest
          const locationsWithDistance = locations.map(location => {
            const distance = calculateDistance(
              userLat, userLng, 
              location.coordinates.lat, location.coordinates.lng
            );
            return { ...location, distance };
          });
          
          const sortedLocations = locationsWithDistance.sort((a, b) => a.distance - b.distance);
          setFilteredLocations(sortedLocations);
          
          toast({
            title: "Location Found",
            description: `Showing locations nearest to you. Closest: ${sortedLocations[0].name}`,
          });
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to get your location. Please search manually.",
            variant: "destructive"
          });
        }
      );
    } else {
      toast({
        title: "Location Not Supported",
        description: "Your browser doesn't support location services.",
        variant: "destructive"
      });
    }
  };

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

  const isCurrentlyOpen = (location: Location) => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    const todayHours = location.openingHours[day as keyof typeof location.openingHours];
    if (!todayHours || todayHours === "Closed") return false;
    
    if (todayHours.includes("11:30 AM – 11:00 PM")) {
      return currentTime >= 1130 && currentTime <= 2300;
    }
    return false;
  };

  return (
    <section id="locations" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Location</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-raleway">
            Find your nearest <span className="text-foreground">Zia</span> <span className="text-primary">Pizza</span> location and start your authentic Italian dining experience
          </p>
        </div>

        {/* Search Controls */}
        {/* <div className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by location or address..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 py-3 text-lg border-2 focus:border-secondary"
              />
            </div>
            <Button
              onClick={handleUseMyLocation}
              variant="outline"
              className="btn-gold-outline whitespace-nowrap"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Use My Location
            </Button>
          </div>
        </div> */}

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((location) => (
            <Card key={location.id} className="card-location group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="font-display text-xl leading-tight">
                    {location.name.includes('by Zia Pizza') ? (
                      <>
                        <span style={{ color: '#D4C29C' }}>
                          {location.name.split('by Zia Pizza')[0].trim()}
                        </span>{' '}
                        <span className="text-foreground/80">by</span>{' '}
                        <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                      </>
                    ) : location.name.includes('Zia Pizza') ? (
                      <>
                        <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                        {location.name.replace('Zia Pizza', '').trim() && (
                          <span style={{ color: '#D4C29C' }}>{location.name.replace('Zia Pizza', '').trim()}</span>
                        )}
                      </>
                    ) : (
                      <span className="text-foreground">{location.name}</span>
                    )}
                  </CardTitle>
                  <Badge 
                    variant={isCurrentlyOpen(location) ? "default" : "secondary"}
                    className={isCurrentlyOpen(location) ? "bg-green-500" : ""}
                  >
                    {isCurrentlyOpen(location) ? "Open" : "Closed"}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Mobile Layout - Simple */}
                <div className="md:hidden space-y-3">
                  {/* Phone Number - Mobile Only */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-secondary" />
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-sm hover:text-secondary transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours Today - Mobile Only */}
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Today</p>
                      <p className="text-sm font-medium text-foreground">
                        {location.openingHours[new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() as keyof typeof location.openingHours] || "Closed"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Original Design */}
                <div className="hidden md:block space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground font-raleway">{location.address}</p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-secondary" />
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-sm hover:text-secondary transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-secondary" />
                      <a 
                        href={`mailto:${location.email}`}
                        className="text-sm hover:text-secondary transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {location.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Hours Today */}
                  <div className="flex items-center gap-3 p-3 bg-card border border-border/20 rounded-lg">
                    <Clock className="w-4 h-4 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Today</p>
                      <p className="text-sm font-medium text-foreground">
                        {location.openingHours[new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() as keyof typeof location.openingHours] || "Closed"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Link to={`/location/${location.id}`}>
                      <Button variant="outline" className="w-full text-sm">
                        Offers
                      </Button>
                    </Link>
                    <Button
                      className="w-full text-sm bg-red-600 hover:bg-red-700"
                      onClick={() => {
                        window.location.href = location.iframes.order;
                      }}
                    >
                      Order Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full btn-gold-outline text-sm"
                      onClick={() => {
                        window.open(location.iframes.booking, '_blank');
                      }}
                    >
                      Book a Table
                    </Button>
                  </div>
                </div>

                {/* Distance (if available) */}
                {(location as any).distance && (
                  <div className="text-center pt-2">
                    <Badge variant="secondary">
                      {((location as any).distance).toFixed(1)} km away
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground font-raleway">
              No locations found matching your search. Please try different keywords.
            </p>
          </div>
        )}

        {/* View All Locations Link */}
        <div className="text-center mt-12">
          <Link to="/locations">
            <Button variant="outline" className="btn-gold-outline">
              <MapPin className="w-4 h-4 mr-2" />
              View All Locations & Map
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      <Dialog open={isIframeOpen} onOpenChange={setIsIframeOpen}>
        <DialogContent className="max-w-[95vw] w-[1200px] h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="px-6 py-4">
            <DialogTitle className="font-display text-foreground">{iframeTitle}</DialogTitle>
          </DialogHeader>
          <div className="w-full h-full bg-white">
            {iframeUrl && (
              <iframe
                src={iframeUrl}
                className="w-full h-full border-0"
                allow="payment"
                title={iframeTitle}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LocationChooser;