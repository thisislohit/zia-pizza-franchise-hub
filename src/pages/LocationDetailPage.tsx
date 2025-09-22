import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { 
  MapPin, Phone, Mail, Clock, Navigation, ArrowLeft, 
  ExternalLink, Calendar, Users, Utensils, Car, Store, MessageSquare 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { locations, offers } from "@/data/locations";
import Footer from "@/components/Footer";

const LocationDetailPage = () => {
  const { locationId } = useParams();
  const location = locations.find(loc => loc.id === locationId);
  const [activeTab, setActiveTab] = useState("feedback");

  if (!location) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Location Not Found</h1>
          <Link to="/locations">
            <Button className="btn-hero">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Locations
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isCurrentlyOpen = () => {
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

  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
  };

  const locationOffers = offers.filter(offer => 
    offer.isActive && (!offer.locations || offer.locations.includes(location.id))
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/locations">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Locations
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                  {location.name}
                </h1>
                <Badge 
                  variant={isCurrentlyOpen() ? "default" : "secondary"}
                  className={`${isCurrentlyOpen() ? "bg-green-500" : ""} text-sm`}
                >
                  {isCurrentlyOpen() ? "Open Now" : "Closed"}
                </Badge>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                Experience authentic Italian cuisine in our premium restaurant. Fresh ingredients, traditional recipes, and exceptional service await you.
              </p>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Button 
                  onClick={() => window.open(location.iframes.order, '_blank')}
                  className="w-full btn-hero"
                >
                  <Utensils className="w-4 h-4 mr-2" />
                  <ExternalLink className="w-3 h-3 ml-1" />
                  Order Online
                </Button>
                <Button 
                  onClick={() => window.open(location.iframes.booking, '_blank')}
                  variant="outline" 
                  className="w-full btn-outline-premium"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <ExternalLink className="w-3 h-3 ml-1" />
                  Book Table
                </Button>
                <Button 
                  onClick={() => window.open(location.iframes.feedback, '_blank')}
                  variant="outline" 
                  className="w-full"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Feedback
                </Button>
                <Button 
                  onClick={() => setActiveTab("map")}
                  variant="outline" 
                  className="w-full"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Map & Directions
                </Button>
              </div>

              {/* Delivery Partners (below Order Online) */}
              {location.deliveryPartners && (
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Delivery Partners</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {location.deliveryPartners.uberEats && (
                      <a href={location.deliveryPartners.uberEats} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full btn-outline-premium">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Uber Eats
                        </Button>
                      </a>
                    )}
                    {location.deliveryPartners.justEat && (
                      <a href={location.deliveryPartners.justEat} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full btn-outline-premium">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Just Eat
                        </Button>
                      </a>
                    )}
                    {location.deliveryPartners.deliveroo && (
                      <a href={location.deliveryPartners.deliveroo} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full btn-outline-premium">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Deliveroo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Location Info Card */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="font-display text-xl text-primary">Location Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary">Address</p>
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <a 
                        href={`tel:${location.phone}`}
                        className="font-medium hover:text-secondary transition-colors"
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
                        className="font-medium hover:text-secondary transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Current Offers (replacing Opening Hours) */}
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="font-display text-xl text-primary flex items-center gap-2">
                    <Store className="w-5 h-5 text-secondary" />
                    Current Offers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {locationOffers.length > 0 ? (
                    <div className="space-y-4">
                      {locationOffers.map((offer) => (
                        <div key={offer.id} className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">{offer.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{offer.description}</p>
                          {offer.validDays && (
                            <Badge variant="outline" className="text-xs">
                              {offer.validDays.join(", ")}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No current offers at this location.</p>
                  )}
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="card-premium overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-display text-xl text-primary">Map</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe 
                    src={location.iframes.map}
                    className="w-full h-[400px] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  />
                </CardContent>
              </Card>


              {/* Delivery Partners card removed; buttons shown in hero section */}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                {/* Opening Hours (moved to sidebar) */}
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="font-display text-lg text-primary flex items-center gap-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      Opening Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(location.openingHours).map(([day, hours]) => {
                        const isToday = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() === day;
                        const isSunday = day === 'sunday';
                        return (
                          <div
                            key={day}
                            className={`${isToday ? 'bg-secondary/10 border border-secondary/20' : 'bg-muted/30'} p-3 rounded-lg`}
                          >
                            {isSunday ? (
                              <div className="flex justify-between items-center gap-3">
                                <span className="capitalize font-medium shrink-0 text-sm">
                                  {isToday && 'Today - '}Sunday:
                                </span>
                                <span className={`${hours === 'Closed' ? 'text-muted-foreground' : 'font-medium'} tabular-nums text-right text-sm`}> 
                                  {hours}
                                </span>
                              </div>
                            ) : (
                              <div className="flex justify-between items-center gap-3">
                                <span className="capitalize font-medium shrink-0 text-sm">
                                  {isToday && 'Today - '}{day}:
                                </span>
                                <span className={`${hours === 'Closed' ? 'text-muted-foreground' : 'font-medium'} tabular-nums text-right text-sm`}> 
                                  {hours}
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationDetailPage;