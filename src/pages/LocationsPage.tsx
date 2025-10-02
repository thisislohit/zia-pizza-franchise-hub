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
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Locations</span>
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
                    {/* Left Column - Location Details */}
                    <div className="p-6">
                      {/* Location Name + Status */}
                        <div className="flex items-center justify-between mb-4">
                          <CardTitle className="font-display text-2xl leading-tight">
                            <span className="text-white">Zia</span>
                            <span className="text-red-600"> Pizza</span>
                            <span style={{ color: '#D4C29C' }}> – {location.name.replace('Zia Pizza – ', '')}</span>
                          </CardTitle>
                        <Badge 
                          variant={isCurrentlyOpen(location) ? "default" : "secondary"}
                          className={isCurrentlyOpen(location) ? "bg-green-500" : ""}
                        >
                          {isCurrentlyOpen(location) ? "Open Now" : "Closed"}
                        </Badge>
                      </div>

                      {/* Large Image */}
                      <div className="mb-6 h-64 overflow-hidden rounded-lg">
                        <img 
                          src={
                            location.id === 'westbury' ? new URL('../assets/resturant_imgae_westbury.jpeg', import.meta.url).href :
                            location.id === 'salisbury' ? new URL('../assets/resturant_image_salisbury.jpeg', import.meta.url).href :
                            location.id === 'trowbridge' ? new URL('../assets/resturant_image_lamb_on_the_strand.jpeg', import.meta.url).href :
                            new URL('../assets/restaurant-interior.jpg', import.meta.url).href
                          }
                          alt={`${location.name} exterior`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Contact Info & Opening Hours Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Contact Info */}
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                            <p className="text-muted-foreground text-sm">{location.address}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-secondary" />
                            <a 
                              href={`tel:${location.phone}`}
                              className="text-sm font-medium hover:text-secondary transition-colors"
                            >
                              {location.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-secondary" />
                            <a 
                              href={`mailto:${location.email}`}
                              className="text-sm font-medium hover:text-secondary transition-colors"
                            >
                              {location.email}
                            </a>
                          </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="bg-card border border-border/20 p-4 rounded-lg">
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-secondary" />
                            Opening Hours
                          </h4>
                          <div className="space-y-2 text-sm">
                            {location.openingHours.monday === "Closed" ? (
                              <>
                                <div className="flex justify-between items-center py-1 border-b border-border/10">
                                  <span className="font-medium text-foreground">Monday</span>
                                  <span className="text-muted-foreground">Closed</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                  <span className="font-medium text-foreground">Tuesday - Sunday</span>
                                  <span className="text-foreground">11:30 AM - 11:00 PM</span>
                                </div>
                              </>
                            ) : (
                              <div className="flex justify-between items-center py-1">
                                <span className="font-medium text-foreground">Monday - Sunday</span>
                                <span className="text-foreground">11:30 AM - 11:00 PM</span>
                              </div>
                            )}
                          </div>
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
                            Direction
                          </Button>
                        </a>
                        <Link to={location.orderUrl || "#"}>
                          <Button className="w-full bg-red-600 hover:bg-red-700">
                            Order Now
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Map */}
                    <div className="bg-muted/30 min-h-[300px] lg:min-h-full">
                      <iframe
                        src={location.iframes.map}
                        title={`${location.name} Map`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full min-h-[300px] lg:min-h-[500px] border-0"
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