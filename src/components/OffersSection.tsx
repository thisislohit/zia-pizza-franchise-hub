import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Percent } from "lucide-react";
import { offers } from "@/data/locations";

const OffersSection = () => {
  const getCurrentDay = () => {
    return new Date().toLocaleDateString('en-US', { weekday: 'long' });
  };

  const getTodaysOffers = () => {
    const today = getCurrentDay();
    return offers.filter(offer => 
      offer.isActive && 
      (!offer.validDays || offer.validDays.includes(today))
    );
  };

  const getUpcomingOffers = () => {
    const today = getCurrentDay();
    return offers.filter(offer => 
      offer.isActive && 
      offer.validDays && 
      !offer.validDays.includes(today)
    );
  };

  const todaysOffers = getTodaysOffers();
  const upcomingOffers = getUpcomingOffers();

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Special <span className="text-gradient-red">Offers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our delicious deals and save on your favorite Italian favorites
          </p>
        </div>

        {/* Today's Special Offers */}
        {todaysOffers.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-secondary" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary">
                Available Today - {getCurrentDay()}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {todaysOffers.map((offer) => (
                <Card key={offer.id} className="card-premium border-secondary/20 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-white font-semibold">
                      TODAY ONLY
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="font-display text-xl text-primary pr-20">
                      {offer.title}
                    </CardTitle>
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
                        <span>{offer.locations?.length === 3 ? "All locations" : "Selected locations"}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-white"
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
          </div>
        )}

        {/* All Offers */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center text-primary mb-8">
            All Current Offers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.filter(offer => offer.isActive).map((offer) => (
              <Card key={offer.id} className="card-premium relative overflow-hidden group hover:border-secondary/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-display text-xl text-primary">
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
                      <span>{offer.locations?.length === 3 ? "All locations" : "Selected locations"}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-white"
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
        </div>

        {/* Reviews CTA replaced by dedicated ReviewsSection on homepage */}
      </div>
    </section>
  );
};

export default OffersSection;