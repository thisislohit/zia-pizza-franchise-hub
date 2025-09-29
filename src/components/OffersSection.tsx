import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Percent } from "lucide-react";
import { offers } from "@/data/locations";
import { detectUserLocation, getCityFromLocationId, isSupportedLocation } from "@/lib/location-utils";
import { useState, useEffect } from "react";

const OffersSection = () => {
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [isLocationDetected, setIsLocationDetected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const locationInfo = await detectUserLocation();
        if (locationInfo && isSupportedLocation(locationInfo.locationId)) {
          setUserLocation(locationInfo.locationId);
          setIsLocationDetected(true);
        }
      } catch (error) {
        console.error('Location detection failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  const getCurrentDay = () => {
    return new Date().toLocaleDateString('en-US', { weekday: 'long' });
  };

  const getLocationSpecificOffers = (locationId: string | null) => {
    if (!locationId) return [];
    return offers.filter(offer => 
      offer.isActive && 
      offer.locations?.includes(locationId)
    );
  };

  const getTodaysOffers = (locationId: string | null) => {
    const today = getCurrentDay();
    return getLocationSpecificOffers(locationId).filter(offer => 
      !offer.validDays || offer.validDays.includes(today)
    );
  };

  const getUpcomingOffers = (locationId: string | null) => {
    const today = getCurrentDay();
    return getLocationSpecificOffers(locationId).filter(offer => 
      offer.validDays && 
      !offer.validDays.includes(today)
    );
  };

  const locationOffers = getLocationSpecificOffers(userLocation);
  const todaysOffers = getTodaysOffers(userLocation);
  const upcomingOffers = getUpcomingOffers(userLocation);

  // Cycle through today's offers every 5 seconds if there are multiple offers
  useEffect(() => {
    if (todaysOffers.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => 
        prevIndex === todaysOffers.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [todaysOffers.length]);

  // Reset index when location changes
  useEffect(() => {
    setCurrentOfferIndex(0);
  }, [userLocation]);

  // Show loading state
  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-br from-muted/20 to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Special <span className="text-primary">Offers</span>
            </h2>
            <p className="text-lg text-muted-foreground font-raleway">Loading offers...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show message if location not detected or not supported
  if (!isLocationDetected || !userLocation) {
    return (
      <section className="py-16 bg-gradient-to-br from-muted/20 to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Special <span className="text-primary">Offers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-raleway">
              Select your nearest <span className="text-foreground">Zia</span> <span className="text-primary">Pizza</span> branch to see offers.
            </p>
            <Button
              onClick={() => {
                const el = document.getElementById('locations');
                el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="btn-hero"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Choose Your Location
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-muted/20 to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Special <span className="text-primary">Offers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4 font-raleway">
            Discover our delicious deals at {getCityFromLocationId(userLocation)} branch
          </p>
          <Badge variant="outline" className="text-sm border-secondary text-secondary">
            <MapPin className="w-3 h-3 mr-1" />
            {getCityFromLocationId(userLocation)}
          </Badge>
        </div>

        {/* Today's Special Offers */}
        {todaysOffers.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-secondary" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Available Today - {getCurrentDay()}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {todaysOffers.length === 1 ? (
                todaysOffers.map((offer) => (
                <Card key={offer.id} className="card-premium border-secondary/20 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-white font-semibold">
                      TODAY ONLY
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="font-display text-xl text-foreground pr-20">
                      {offer.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed font-raleway">
                      {offer.description}
                    </p>
                    {/* Meta row: day + time inline */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      {offer.validDays && (
                        <div className="flex items-center gap-2 text-secondary">
                          <Calendar className="w-4 h-4" />
                          <span>{offer.validDays.join(", ")}</span>
                        </div>
                      )}
                      {offer.validTimes && (
                        <div className="flex items-center gap-2 text-secondary">
                          <Clock className="w-4 h-4" />
                          <span>{offer.validTimes}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{getCityFromLocationId(userLocation)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => {
                        const el = document.getElementById('locations');
                        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                    >
                      <Percent className="w-4 h-4 mr-2" />
                      Claim This Offer
                    </Button>
                  </CardContent>
                </Card>
                ))
              ) : (
                // Show cycling offer for multiple offers
                <Card className="card-premium border-secondary/20 relative overflow-hidden col-span-full">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-white font-semibold">
                      TODAY ONLY
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="font-display text-xl text-foreground pr-20">
                      {todaysOffers[currentOfferIndex]?.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed font-raleway">
                      {todaysOffers[currentOfferIndex]?.description}
                    </p>
                    {/* Meta row: day + time inline */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      {todaysOffers[currentOfferIndex]?.validDays && (
                        <div className="flex items-center gap-2 text-secondary">
                          <Calendar className="w-4 h-4" />
                          <span>{todaysOffers[currentOfferIndex]?.validDays.join(", ")}</span>
                        </div>
                      )}
                      {todaysOffers[currentOfferIndex]?.validTimes && (
                        <div className="flex items-center gap-2 text-secondary">
                          <Clock className="w-4 h-4" />
                          <span>{todaysOffers[currentOfferIndex]?.validTimes}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{getCityFromLocationId(userLocation)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => {
                        const el = document.getElementById('locations');
                        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                    >
                      <Percent className="w-4 h-4 mr-2" />
                      Claim This Offer
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* All Offers */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">
            All Current Offers
          </h3>
          {locationOffers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationOffers.map((offer) => (
              <Card key={offer.id} className="card-premium relative overflow-hidden group hover:border-secondary/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-display text-xl text-foreground">
                      {offer.title}
                    </CardTitle>
                    {offer.validDays && (
                      <Badge variant="outline" className="ml-2">
                        {offer.validDays.length === 1 ? offer.validDays[0] : "Weekly"}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {offer.description}
                  </p>
                  {/* Meta row: day + time inline */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    {offer.validDays && (
                      <div className="flex items-center gap-2 text-secondary">
                        <Calendar className="w-4 h-4" />
                        <span>{offer.validDays.join(", ")}</span>
                      </div>
                    )}
                    {offer.validTimes && (
                      <div className="flex items-center gap-2 text-secondary">
                        <Clock className="w-4 h-4" />
                        <span>{offer.validTimes}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{getCityFromLocationId(userLocation)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => {
                      const el = document.getElementById('locations');
                      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    <Percent className="w-4 h-4 mr-2" />
                    Claim This Offer
                  </Button>
                </CardContent>
              </Card>
            ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground font-raleway">
                No offers available at this location at the moment.
              </p>
            </div>
          )}
        </div>

        {/* Reviews CTA replaced by dedicated ReviewsSection on homepage */}
      </div>
    </section>
  );
};

export default OffersSection;