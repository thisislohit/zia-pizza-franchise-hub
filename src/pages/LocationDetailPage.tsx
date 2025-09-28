import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [timeUntil, setTimeUntil] = useState<{type: 'opening' | 'closing' | null, hours: number, minutes: number, seconds: number}>({type: null, hours: 0, minutes: 0, seconds: 0});

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

  const parseTime = (timeStr: string) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':');
    let hour24 = parseInt(hours);
    if (period === 'PM' && hour24 !== 12) hour24 += 12;
    if (period === 'AM' && hour24 === 12) hour24 = 0;
    return hour24 * 60 + parseInt(minutes); // Convert to minutes from midnight
  };

  const calculateTimeUntil = () => {
    const now = new Date();
    const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    
    const todayHours = location.openingHours[day as keyof typeof location.openingHours];
    if (!todayHours || todayHours === "Closed") {
      // Find next opening day
      const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      const currentDayIndex = days.indexOf(day);
      
      for (let i = 1; i <= 7; i++) {
        const nextDayIndex = (currentDayIndex + i) % 7;
        const nextDay = days[nextDayIndex];
        const nextDayHours = location.openingHours[nextDay as keyof typeof location.openingHours];
        
        if (nextDayHours && nextDayHours !== "Closed") {
          const [openingTime] = nextDayHours.split(' – ');
          const openingSeconds = parseTime(openingTime) * 60; // Convert to seconds
          const daysUntil = i === 7 ? 0 : i;
          const totalSeconds = daysUntil * 24 * 3600 + openingSeconds;
          const secondsUntil = totalSeconds - currentSeconds;
          
          // Show countdown if within 2 hours of opening
          if (secondsUntil > 0 && secondsUntil <= 7200) { // 2 hours = 7200 seconds
            return {
              type: 'opening' as const,
              hours: Math.floor(secondsUntil / 3600),
              minutes: Math.floor((secondsUntil % 3600) / 60),
              seconds: secondsUntil % 60
            };
          }
        }
      }
      return { type: null, hours: 0, minutes: 0, seconds: 0 };
    }
    
    // Parse opening and closing times
    const [openingTime, closingTime] = todayHours.split(' – ');
    const openingSeconds = parseTime(openingTime) * 60; // Convert to seconds
    const closingSeconds = parseTime(closingTime) * 60; // Convert to seconds
    
    // Check if within 2 hours before opening (show countdown)
    if (currentSeconds < openingSeconds && currentSeconds >= (openingSeconds - 7200)) { // 2 hours = 7200 seconds
      const secondsUntil = openingSeconds - currentSeconds;
      if (secondsUntil > 0) {
        return {
          type: 'opening' as const,
          hours: Math.floor(secondsUntil / 3600),
          minutes: Math.floor((secondsUntil % 3600) / 60),
          seconds: secondsUntil % 60
        };
      }
    }
    
    // Check if within 2 hours before closing (show countdown)
    if (currentSeconds >= openingSeconds && currentSeconds < closingSeconds && currentSeconds >= (closingSeconds - 7200)) { // 2 hours = 7200 seconds
      const secondsUntilClosing = closingSeconds - currentSeconds;
      if (secondsUntilClosing > 0) {
        return {
          type: 'closing' as const,
          hours: Math.floor(secondsUntilClosing / 3600),
          minutes: Math.floor((secondsUntilClosing % 3600) / 60),
          seconds: secondsUntilClosing % 60
        };
      }
    }
    
    return { type: null, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    if (!location) return;
    
    const updateTimer = () => {
      const result = calculateTimeUntil();
      console.log('Timer update:', result, 'Current time:', new Date().toLocaleTimeString()); // Debug log
      setTimeUntil(result);
    };
    
    updateTimer(); // Initial calculation
    const interval = setInterval(updateTimer, 1000); // Update every second
    
    return () => clearInterval(interval);
  }, [location]);

  const isCurrentlyOpen = () => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    
    const todayHours = location.openingHours[day as keyof typeof location.openingHours];
    if (!todayHours || todayHours === "Closed") return false;
    
    // Parse opening and closing times using the same method as calculateTimeUntil
    const [openingTime, closingTime] = todayHours.split(' – ');
    const openingSeconds = parseTime(openingTime) * 60; // Convert to seconds
    const closingSeconds = parseTime(closingTime) * 60; // Convert to seconds
    
    return currentSeconds >= openingSeconds && currentSeconds < closingSeconds;
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
      <section className="py-16 bg-gradient-to-br from-muted/20 to-muted/10">
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
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                  {location.name.includes('Zia Pizza') ? (
                    <>
                      <span className="text-foreground">Zia</span> <span className="text-primary">Pizza</span>
                      {location.name.replace('Zia Pizza', '').trim() && (
                        <span className="text-primary">{location.name.replace('Zia Pizza', '').trim()}</span>
                      )}
                    </>
                  ) : (
                    <span className="text-primary">{location.name}</span>
                  )}
                </h1>
                <Badge 
                  variant="default"
                  className={`text-sm ${
                    timeUntil.type === 'opening' 
                      ? timeUntil.hours === 0 && timeUntil.minutes <= 30
                        ? "bg-green-500" // Green when very close to opening (last 30 minutes)
                        : "bg-red-500" // Red when 2 hours to 30 minutes before opening
                      : timeUntil.type === 'closing'
                        ? timeUntil.hours === 0 && timeUntil.minutes <= 30
                          ? "bg-red-500" // Red when very close to closing (last 30 minutes)
                          : "bg-yellow-500" // Yellow when 2 hours to 30 minutes before closing
                        : isCurrentlyOpen()
                          ? "bg-green-500" // Green when fully open
                          : "bg-gray-500" // Gray when closed and no countdown
                  }`}
                >
                  {timeUntil.type === 'opening' ? (
                    `Opens in ${timeUntil.hours}:${timeUntil.minutes.toString().padStart(2, '0')}:${timeUntil.seconds.toString().padStart(2, '0')}`
                  ) : timeUntil.type === 'closing' ? (
                    `Closing in ${timeUntil.hours}:${timeUntil.minutes.toString().padStart(2, '0')}:${timeUntil.seconds.toString().padStart(2, '0')}`
                  ) : (() => {
                    const isOpen = isCurrentlyOpen();
                    console.log('Status check - isOpen:', isOpen, 'timeUntil.type:', timeUntil.type);
                    return isOpen ? "Open Now" : "Closed";
                  })()}
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
                  className="w-full btn-gold-outline"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Feedback
                </Button>
                <Button 
                  onClick={() => setActiveTab("map")}
                  variant="outline" 
                  className="w-full btn-gold-outline"
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
                    <CardTitle className="font-display text-lg text-foreground flex items-center gap-2">
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
                            className={`${isToday ? 'bg-secondary/20 border border-secondary/30' : 'bg-card border border-border/20'} p-3 rounded-lg`}
                          >
                            {isSunday ? (
                              <div className="flex justify-between items-center gap-3">
                                <span className="capitalize font-medium shrink-0 text-sm text-foreground">
                                  {isToday && 'Today - '}Sunday:
                                </span>
                                <span className={`${hours === 'Closed' ? 'text-muted-foreground' : 'font-medium text-foreground'} tabular-nums text-right text-sm`}> 
                                  {hours}
                                </span>
                              </div>
                            ) : (
                              <div className="flex justify-between items-center gap-3">
                                <span className="capitalize font-medium shrink-0 text-sm text-foreground">
                                  {isToday && 'Today - '}{day}:
                                </span>
                                <span className={`${hours === 'Closed' ? 'text-muted-foreground' : 'font-medium text-foreground'} tabular-nums text-right text-sm`}> 
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