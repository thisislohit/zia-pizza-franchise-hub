import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { locations } from "@/data/locations";
import Footer from "@/components/Footer";

const LocationsPage = () => {

  const isCurrentlyOpen = (location: any) => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    const todayHours = location.openingHours[day];
    if (!todayHours || todayHours === "Closed") return false;
    
    if (todayHours.includes("11:30 AM – 11:00 PM")) {
      return currentTime >= 1130 && currentTime <= 2300;
    }
    return false;
  };

  const getDirectionsUrl = (location: any) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Our <span className="text-gradient-red">Locations</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find your nearest <span className="text-foreground">Zia</span> <span className="text-primary">Pizza</span> restaurant and experience authentic Italian cuisine in a premium setting. 
            Each location offers the same exceptional quality with its own unique character.
          </p>
          
          {/* List view only */}
        </div>
      </section>

      {/* Locations Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* List View */}
          <div className="space-y-8">
              {locations.map((location, index) => (
                <Card key={location.id} className="card-premium overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Location Info */}
                    <div className="p-6 lg:p-8">
                      <CardHeader className="px-0 pt-0">
                        <div className="flex items-start justify-between">
                          <CardTitle className="font-display text-2xl text-primary leading-tight">
                            {location.name}
                          </CardTitle>
                          <Badge 
                            variant={isCurrentlyOpen(location) ? "default" : "secondary"}
                            className={isCurrentlyOpen(location) ? "bg-green-500" : ""}
                          >
                            {isCurrentlyOpen(location) ? "Open Now" : "Closed"}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="px-0 space-y-6">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                          <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-primary">Address</p>
                            <p className="text-muted-foreground">{location.address}</p>
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-secondary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Phone</p>
                              <a 
                                href={`tel:${location.phone}`}
                                className="text-sm font-medium hover:text-secondary transition-colors"
                              >
                                {location.phone}
                              </a>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-secondary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Email</p>
                              <a 
                                href={`mailto:${location.email}`}
                                className="text-sm font-medium hover:text-secondary transition-colors"
                              >
                                {location.email}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="bg-card border border-border/20 p-4 rounded-lg">
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-secondary" />
                            Opening Hours
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            {Object.entries(location.openingHours).map(([day, hours]) => {
                              const isSunday = day === 'sunday';
                              return (
                                <div
                                  key={day}
                                  className={`p-3 rounded-lg ${isSunday ? 'sm:col-span-2 bg-secondary/20 border border-secondary/30 flex items-center justify-center text-center' : 'bg-card border border-border/20 flex items-center justify-between'}`}
                                >
                                  {isSunday ? (
                                    <span className={`${hours === 'Closed' ? 'text-muted-foreground' : 'font-medium text-foreground'}`}>
                                      Sunday: {hours}
                                    </span>
                                  ) : (
                                    <>
                                      <span className="capitalize font-medium text-foreground">{day}:</span>
                                      <span className={`${hours === 'Closed' ? 'text-muted-foreground' : 'font-medium text-foreground'} tabular-nums whitespace-nowrap`}>
                                        {hours}
                                      </span>
                                    </>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Services */}
                        <div>
                          <h4 className="font-medium text-foreground mb-3">Services</h4>
                          <div className="flex flex-wrap gap-2">
                            {location.features.map((feature) => (
                              <Badge key={feature} variant="outline">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <Link to={`/location/${location.id}`}>
                            <Button variant="outline" className="w-full">
                              View Details
                            </Button>
                          </Link>
                          <a href={getDirectionsUrl(location)} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full">
                              <Navigation className="w-4 h-4 mr-2" />
                              Directions
                            </Button>
                          </a>
                          <Link to={location.orderUrl || "#"}>
                            <Button className="w-full bg-red-600 hover:bg-red-700">
                              Order Now
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>

                    {/* Map iframe */}
                    <div className="bg-muted/30 min-h-[300px] lg:min-h-full">
                      <iframe
                        src={location.iframes.map}
                        title={`${location.name} Map`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full min-h-[300px] border-0"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationsPage;