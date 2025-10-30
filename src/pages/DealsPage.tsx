import { Calendar, Clock, MapPin, Star, Gift, Users, Utensils, Coffee, Beer, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const DealsPage = () => {
  // Get current day
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const today = getCurrentDay();

  const dealsData = [
    {
      id: 1,
      name: "The Lamb on the Strand by Zia Pizza",
      location: "Semington",
      address: "Semington, Wiltshire",
      offers: [
        {
          day: "Sunday",
          title: "The Great Zia Sunday Roast",
          description: "All day. Includes chipolata, roast potatoes, seasonal veg, Yorkshire, unlimited gravy.",
          price: "From £14.95",
          icon: <Utensils className="w-5 h-5" />,
          highlight: true
        },
        {
          day: "Monday",
          title: "Monday Funday",
          description: "Carlsberg & Thatchers Gold £2.95/pint (excl. bank holidays)",
          price: "£2.95/pint",
          icon: <Beer className="w-5 h-5" />
        },
        {
          day: "Tuesday",
          title: "BOGO Pizza",
          description: "Buy 1, Get 1 Free (equal/lesser value). Dine-in, takeaway, delivery (web & phone).",
          price: "50% OFF",
          icon: <Gift className="w-5 h-5" />,
          highlight: true
        },
        {
          day: "Wednesday",
          title: "Buffet",
          description: "6:00–9:00 PM | Adults £16.45 | Kids (under 12) £9.00. \"Come hungry, leave happy.\"",
          price: "Adults £16.45 | Kids £9.00",
          icon: <Users className="w-5 h-5" />
        },
        {
          day: "Thursday",
          title: "2 for 1 Pasta",
          description: "Buy one pasta, get one free.",
          price: "50% OFF",
          icon: <Utensils className="w-5 h-5" />
        },
        {
          day: "Friday",
          title: "Kids Eat for £1",
          description: "With a full-price adult main (under 12).",
          price: "£1.00",
          icon: <Users className="w-5 h-5" />
        },
        {
          day: "Saturday",
          title: "No branch-specific promo",
          description: "Enjoy our regular menu",
          price: "Regular prices",
          icon: <Star className="w-5 h-5" />
        }
      ],
      dailyOffer: {
        title: "Double the Drinks",
        description: "2 cocktails £13.95, 5 PM–Close. Everyday",
        price: "£13.95",
        icon: <Beer className="w-5 h-5" />
      }
    },
    {
      id: 2,
      name: "Zia Pizza Westbury",
      location: "Westbury",
      address: "Westbury, Wiltshire",
      offers: [
        {
          day: "Tuesday",
          title: "BOGO Pizza",
          description: "Buy 1, Get 1 Free (equal/lesser value). Dine-in, takeaway, delivery (web & phone).",
          price: "50% OFF",
          icon: <Gift className="w-5 h-5" />,
          highlight: true
        },
        {
          day: "Thursday",
          title: "2 for 1 Pasta",
          description: "Buy one pasta, get one free.",
          price: "50% OFF",
          icon: <Utensils className="w-5 h-5" />
        },
        {
          day: "Friday",
          title: "Kids Eat for £1",
          description: "With a full-price adult main (under 12).",
          price: "£1.00",
          icon: <Users className="w-5 h-5" />
        }
      ],
      dailyOffer: {
        title: "Double the Drinks",
        description: "2 cocktails £13.95, 5 PM–Close. Daily",
        price: "£13.95",
        icon: <Beer className="w-5 h-5" />
      }
    },
    {
      id: 3,
      name: "Zia Pizza Salisbury",
      location: "Salisbury",
      address: "Salisbury, Wiltshire",
      offers: [
        {
          day: "Tuesday",
          title: "BOGO Pizza",
          description: "Buy 1, Get 1 Free (equal/lesser value). Dine-in, takeaway, delivery (web & phone).",
          price: "50% OFF",
          icon: <Gift className="w-5 h-5" />,
          highlight: true
        },
        {
          day: "Thursday",
          title: "2 for 1 Pasta",
          description: "Buy one pasta, get one free.",
          price: "50% OFF",
          icon: <Utensils className="w-5 h-5" />
        },
        {
          day: "Friday",
          title: "Kids Eat for £1",
          description: "With a full-price adult main (under 12).",
          price: "£1.00",
          icon: <Users className="w-5 h-5" />
        }
      ],
      dailyOffer: {
        title: "Double the Drinks",
        description: "2 cocktails £13.95, 5 PM–Close. Daily",
        price: "£13.95",
        icon: <Beer className="w-5 h-5" />
      }
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Weekly <span className="text-white">Deals</span> <span className="text-red-600">&</span> <span style={{ color: '#D4C29C' }}>Offers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover amazing deals and special offers at all our locations. From BOGO pizzas to Sunday roasts, we've got something special for every day of the week!
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Offers by Branch */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Weekly Offers by Branch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each location has its own unique weekly specials. Find your favorite deals below!
            </p>
          </div>
          
          <div className="space-y-12">
            {dealsData.map((location) => (
              <div key={location.id} className="card-premium">
                {/* Location Header */}
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-t-2xl border-b border-border/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-secondary" />
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        {location.name.includes('by Zia Pizza') ? (
                          <>
                            <span className="text-white">
                              {location.name.split('by Zia Pizza')[0].trim()}
                            </span>{' '}
                            <span className="text-white/90">by</span>{' '}
                            <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                          </>
                        ) : location.name.includes('Zia Pizza') ? (
                          <>
                            <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                            {location.name.replace('Zia Pizza', '').trim() && (
                              <span className="text-white"> – {location.name.replace('Zia Pizza', '').trim()}</span>
                            )}
                          </>
                        ) : (
                          location.name
                        )}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {location.address}
                  </p>
                </div>

                {/* Weekly Offers */}
                <div className="p-6">
                  <h4 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-secondary" />
                    Weekly Specials
                  </h4>
                  
                  {/* Desktop Grid View */}
                  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {location.offers
                      .sort((a, b) => {
                        // Put today's offer first
                        if (a.day === today && b.day !== today) return -1;
                        if (a.day !== today && b.day === today) return 1;
                        return 0;
                      })
                      .map((offer, index) => {
                        const isToday = offer.day === today;
                        return (
                      <Card key={index} className={`${isToday ? 'ring-2 ring-primary bg-primary/10 border-primary' : offer.highlight ? 'ring-2 ring-secondary/20 bg-secondary/5 border-secondary/30' : 'border-border/20'} hover:shadow-card transition-all duration-300 hover:border-secondary/50`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className={`text-xs font-medium ${isToday ? 'border-primary text-primary bg-primary/10' : 'border-secondary/50 text-secondary'}`}>
                              {isToday ? 'TODAY' : offer.day}
                            </Badge>
                            {isToday && (
                              <Badge className="bg-primary text-white text-xs">
                                <Star className="w-3 h-3 mr-1" />
                                NOW
                              </Badge>
                            )}
                            {offer.highlight && !isToday && (
                              <Badge className="bg-secondary text-secondary-foreground text-xs">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg font-bold text-foreground">
                            {offer.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed font-raleway">
                            {offer.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-secondary">
                              {offer.icon}
                              <span className="font-semibold text-sm">{offer.price}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      );
                    })}
                  </div>

                  {/* Mobile View: Today's offer static + carousel for other offers */}
                  <div className="md:hidden mb-8 space-y-4">
                    {/* Today's Offer - Static Card */}
                    {location.offers
                      .filter(offer => offer.day === today)
                      .map((offer, index) => {
                        const isToday = offer.day === today;
                        return (
                          <Card key={`today-${index}`} className={`${isToday ? 'ring-2 ring-primary bg-primary/10 border-primary' : offer.highlight ? 'ring-2 ring-secondary/20 bg-secondary/5 border-secondary/30' : 'border-border/20'}`}>
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline" className={`text-xs font-medium ${isToday ? 'border-primary text-primary bg-primary/10' : 'border-secondary/50 text-secondary'}`}>
                                  {isToday ? 'TODAY' : offer.day}
                                </Badge>
                                {isToday && (
                                  <Badge className="bg-primary text-white text-xs">
                                    <Star className="w-3 h-3 mr-1" />
                                    NOW
                                  </Badge>
                                )}
                                {offer.highlight && !isToday && (
                                  <Badge className="bg-secondary text-secondary-foreground text-xs">
                                    <Star className="w-3 h-3 mr-1" />
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <CardTitle className="text-lg font-bold text-foreground">
                                {offer.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-3 leading-relaxed font-raleway">
                                {offer.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-secondary">
                                  {offer.icon}
                                  <span className="font-semibold text-sm">{offer.price}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}

                    {/* Other Offers - Carousel */}
                    {location.offers.filter(offer => offer.day !== today).length > 0 && (
                      <div className="mt-4">
                        <h5 className="text-sm font-semibold text-foreground mb-3">More Offers This Week</h5>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {location.offers
                              .filter(offer => offer.day !== today)
                              .map((offer, index) => {
                                const isHighlight = offer.highlight;
                                return (
                                  <CarouselItem key={index}>
                                    <Card className={`${isHighlight ? 'ring-2 ring-secondary/20 bg-secondary/5 border-secondary/30' : 'border-border/20'} h-full`}>
                                      <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between mb-2">
                                          <Badge variant="outline" className="text-xs font-medium border-secondary/50 text-secondary">
                                            {offer.day}
                                          </Badge>
                                          {isHighlight && (
                                            <Badge className="bg-secondary text-secondary-foreground text-xs">
                                              <Star className="w-3 h-3 mr-1" />
                                              Popular
                                            </Badge>
                                          )}
                                        </div>
                                        <CardTitle className="text-lg font-bold text-foreground">
                                          {offer.title}
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent>
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed font-raleway">
                                          {offer.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-2 text-secondary">
                                            {offer.icon}
                                            <span className="font-semibold text-sm">{offer.price}</span>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </CarouselItem>
                                );
                              })}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </div>
                    )}
                  </div>

                  {/* Daily Offer */}
                  <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-6 border border-secondary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-secondary" />
                      <h4 className="font-display text-lg font-bold text-foreground">Daily Special</h4>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{location.dailyOffer.title}</h5>
                        <p className="text-sm text-muted-foreground font-raleway">{location.dailyOffer.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-secondary">
                        {location.dailyOffer.icon}
                        <span className="font-bold text-lg">{location.dailyOffer.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Save? Visit Us Today!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-raleway">
              Don't miss out on these amazing deals! Visit any of our three locations to enjoy fresh, authentic Italian cuisine at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/locations" 
                className="btn-hero inline-flex items-center justify-center px-8 py-3"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Find Your Nearest Location
              </a>
              <a 
                href="/contact" 
                className="btn-gold-outline inline-flex items-center justify-center px-8 py-3"
              >
                <Coffee className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealsPage;