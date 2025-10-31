import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, Gift, Phone, MapPin, ChefHat, Wine, Utensils, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Snowfall from 'react-snowfall';
import { useState, useEffect } from "react";

const ChristmasPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showSpecialMenu, setShowSpecialMenu] = useState(false);
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  
  // Check if today is December 25th, 2025
  const isDecember25 = () => {
    const today = new Date();
    return today.getDate() === 25 && 
           today.getMonth() === 11 && // December is month 11 (0-indexed)
           today.getFullYear() === 2025;
  };
  
  useEffect(() => {
    setShowSpecialMenu(isDecember25());
  }, []);

  // Manual scrolling only - no auto-play

  // Track carousel slide changes
  useEffect(() => {
    if (!api) return;

    const updateSlide = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', updateSlide);
    updateSlide(); // Set initial slide

    return () => {
      api.off('select', updateSlide);
    };
  }, [api]);

  useEffect(() => {
    // Check if popup has been shown before in this browser session
    const popupShown = sessionStorage.getItem('christmas_popup_shown');
    
    if (!popupShown) {
      // Show popup after 1 second when page loads
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
        // Mark popup as shown in session storage
        sessionStorage.setItem('christmas_popup_shown', 'true');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="pt-16 relative">
      {/* Christmas Popup Modal */}
      <Dialog open={isPopupOpen} onOpenChange={handleClosePopup}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-black border-4 border-white rounded-2xl text-white p-4 md:p-6">
          <div className="text-center space-y-4 md:space-y-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-3xl md:text-4xl animate-bounce">🎄</span>
            </div>
            
            <h2 className="font-display text-xl md:text-3xl font-bold text-white px-2">
              It's the Season to Feast, Laugh & Be Merry — the Italian Way!
            </h2>
            
            <p className="text-sm md:text-lg text-white/80 leading-relaxed px-2">
              Step inside Zia Pizza and let the aroma of stone-baked joy, mulled wine, and Christmas magic wrap around you.
            </p>

            <div className="bg-white/10 rounded-xl p-4 md:p-6 border border-white/20">
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4">
                <div className="text-center">
                  <p className="text-xs md:text-sm text-white/70 mb-1">Adults</p>
                  <p className="text-lg md:text-2xl font-bold text-red-500">£55</p>
                </div>
                <div className="text-center border-x border-white/30">
                  <p className="text-xs md:text-sm text-white/70 mb-1">Kids 2 Courses</p>
                  <p className="text-lg md:text-2xl font-bold text-green-400">£15.95</p>
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm text-white/70 mb-1">Kids 3 Courses</p>
                  <p className="text-lg md:text-2xl font-bold text-green-400">£19.95</p>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-white/70 mb-2">Indulge in:</p>
              <div className="flex flex-wrap gap-1 md:gap-2 justify-center text-xs md:text-sm">
                <Badge variant="outline" className="border-white/50 text-white text-xs">Roast Turkey</Badge>
                <Badge variant="outline" className="border-white/50 text-white text-xs">Porchetta</Badge>
                <Badge variant="outline" className="border-white/50 text-white text-xs">Lasagne</Badge>
                <Badge variant="outline" className="border-white/50 text-white text-xs">Tiramisu</Badge>
              </div>
            </div>

            <div className="text-center space-y-2 md:space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl md:text-2xl">✨</span>
                <p className="text-sm md:text-base text-white/80">
                  Golden lights, laughter, and Italian warmth await.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl md:text-2xl">🎁</span>
                <p className="text-sm md:text-base text-white/80 font-semibold">
                  Tables are vanishing faster than snowflakes — book yours before Santa grabs the last one!
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-lg py-4 md:py-6"
              onClick={() => {
                setIsPopupOpen(false);
                window.open('https://www.eposhybrid.uk/index.php/online-table-booking/SUhBQkJW', '_blank');
              }}
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Book Your Table Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Snowfall Effect for entire page */}
      <Snowfall
        snowflakeCount={313}
        speed={[0, 0.5]}
        wind={[-1, 1.5]}
        radius={[0.5, 1]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      {/* Hero Section */}
      <section className="py-16 relative z-10">
        {/* Subtle dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="text-red-600">Christmas</span> <span className="text-green-600">2025</span> at <span className="text-red-600">Zia Pizza</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-raleway mb-6">
              Celebrate Christmas 2025 at Zia Pizza with family and friends! Our special Christmas menu is filled with festive flavours and seasonal favourites for a joyful Christmas lunch in Trowbridge..
            </p>
            {/* Test Button - Remove in production */}
            <Button 
              onClick={() => setShowSpecialMenu(!showSpecialMenu)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
  {showSpecialMenu ? 'Show Festive Menu' : 'Show Dec 25 Menu'}
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-muted/20 to-muted/10 relative z-10">
        <div className="container mx-auto px-4">
          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              {showSpecialMenu ? (
                <>
                  Christmas Day <span className="text-primary">Special Menu</span>
                </>
              ) : (
                <>
                  Christmas <span className="text-primary">Festive Menu</span>
                </>
              )}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {showSpecialMenu ? (
                // December 25 Special Menu Pricing
                <>
                  <Card className="card-premium border-red-200 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white font-bold animate-pulse">
                        ADULTS £55 PER HEAD
                      </Badge>
                    </div>
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <Gift className="w-16 h-16 text-red-600 mx-auto mb-4 animate-bounce" />
                        <h3 className="font-display text-3xl font-bold text-red-700 mb-2">Adults Menu</h3>
                      </div>
                      <div className="text-6xl font-bold text-red-600 mb-4">£55</div>
                      <p className="text-black mb-6">
                        Full Christmas menu with starter, main, dessert & sides
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-premium border-green-200 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white font-bold">
                        KIDS MENU
                      </Badge>
                    </div>
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <Star className="w-16 h-16 text-green-600 mx-auto mb-4 animate-pulse" />
                        <h3 className="font-display text-3xl font-bold text-green-700 mb-2">Kids Menu</h3>
                      </div>
                      <div className="text-4xl font-bold text-green-600 mb-2">2 Courses: £15.95</div>
                      <div className="text-4xl font-bold text-green-600 mb-4">3 Courses: £19.95</div>
                      <p className="text-black mb-6">
                        Special kids festive meals
                      </p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                // Regular Christmas Menu Pricing
                <>
                  <Card className="card-premium border-red-200 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white font-bold animate-pulse">
                        LIMITED TIME
                      </Badge>
                    </div>
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <Gift className="w-16 h-16 text-red-600 mx-auto mb-4 animate-bounce" />
                        <h3 className="font-display text-3xl font-bold text-red-700 mb-2">2 Courses</h3>
                      </div>
                      <div className="text-6xl font-bold text-red-600 mb-4">£35</div>
                      <p className="text-black mb-6">
                        Perfect for a festive lunch with starter and main course
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-premium border-green-200 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white font-bold">
                        MOST POPULAR
                      </Badge>
                    </div>
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <Star className="w-16 h-16 text-green-600 mx-auto mb-4 animate-pulse" />
                        <h3 className="font-display text-3xl font-bold text-green-700 mb-2">3 Courses</h3>
                      </div>
                      <div className="text-6xl font-bold text-green-600 mb-4">£42</div>
                      <p className="text-black mb-6">
                        Complete festive experience with starter, main, and dessert
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto mb-8">
              <p className="text-black text-center">
                <strong>All mains served with:</strong> roast potatoes, seasonal greens, carrots & parsnips, Yorkshire puddings & gravy
              </p>
            </div>
          </div>

          {/* Menu Sections - Desktop Row */}
          <div className={`hidden md:flex flex-col lg:flex-row gap-8 mb-16`}>
            {/* Starters */}
            <Card className="card-premium flex-1 min-w-0">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Utensils className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-display text-2xl font-bold text-foreground">Starters</h3>
                </div>
                <div className="space-y-4">
                  {showSpecialMenu ? (
                    // December 25 Special Menu
                    <>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Roast Pumpkin & Sage Soup</h4>
                        <p className="text-sm text-muted-foreground">Served with focaccia croutons</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Burrata with Roasted Grapes & Walnuts</h4>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Chicken Liver Parfait</h4>
                        <p className="text-sm text-muted-foreground">With brioche & cranberry relish</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Prawn & Crayfish Cocktail</h4>
                      </div>
                    </>
                  ) : (
                    // Regular Christmas Menu
                    <>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Roast Pumpkin & Sage Soup</h4>
                        <p className="text-sm text-muted-foreground">Creamy seasonal soup with fresh herbs</p>
                      </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-foreground">Burrata with Roasted Grapes & Walnuts</h4>
                    <p className="text-sm text-muted-foreground">Fresh Italian cheese with seasonal accompaniments</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-foreground">Chicken Liver Parfait</h4>
                    <p className="text-sm text-muted-foreground">Rich and smooth with festive spices</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-foreground">Prawn & Crayfish Cocktail</h4>
                    <p className="text-sm text-muted-foreground">Fresh seafood with tangy cocktail sauce</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-foreground">Smoked Salmon & Pickled Cucumber</h4>
                    <p className="text-sm text-muted-foreground">Premium salmon with crisp accompaniments</p>
                  </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Sides Section - Only show on Dec 25 (special menu) */}
            {showSpecialMenu && (
              <Card className="card-premium flex-1 min-w-0">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Utensils className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                    <h3 className="font-display text-2xl font-bold text-foreground">Sides (£5 each)</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-foreground">Pigs in Blankets</h4>
                      <p className="text-sm text-muted-foreground">Classic festive sausage wrapped in bacon</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-foreground">Cauliflower & Broccoli Cheese</h4>
                      <p className="text-sm text-muted-foreground">Creamy cheesy vegetables</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-foreground">Braised Red Cabbage</h4>
                      <p className="text-sm text-muted-foreground">Slow-cooked seasonal favorite</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-foreground">Seasonal Vegetables</h4>
                      <p className="text-sm text-muted-foreground">Fresh garden vegetables</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Mains */}
            <Card className="card-premium flex-1 min-w-0">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <ChefHat className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-display text-2xl font-bold text-foreground">Mains</h3>
                </div>
                <div className="space-y-4">
                  {showSpecialMenu ? (
                    // December 25 Special Menu
                    <>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-foreground">Roast Turkey Roulade</h4>
                        <p className="text-sm text-muted-foreground">With pancetta, chestnut & sage stuffing</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-foreground">Porchetta with Festive Spices</h4>
                        <p className="text-sm text-muted-foreground">With apple mostarda</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-foreground">Roast Topside of Beef</h4>
                        <p className="text-sm text-muted-foreground">With horseradish & red wine jus</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-foreground">Wild Mushroom & Truffle Lasagne (V)</h4>
                      </div>
                    </>
                  ) : (
                    // Regular Christmas Menu
                    <>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-foreground">Roast Turkey Roulade</h4>
                        <p className="text-sm text-muted-foreground">Traditional Christmas centerpiece</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-foreground">Porchetta with Festive Spices</h4>
                        <p className="text-sm text-muted-foreground">Italian-style roast pork with herbs</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-foreground">Roast Topside of Beef</h4>
                        <p className="text-sm text-muted-foreground">Premium beef with rich gravy</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-foreground">Wild Mushroom & Truffle Lasagne (V)</h4>
                        <p className="text-sm text-muted-foreground">Vegetarian option with luxurious flavors</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-foreground">Pan-Seared Sea Bass</h4>
                        <p className="text-sm text-muted-foreground">Fresh fish with seasonal vegetables</p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Desserts */}
            <Card className="card-premium flex-1 min-w-0">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Star className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-display text-2xl font-bold text-foreground">Desserts</h3>
                </div>
                <div className="space-y-4">
                  {showSpecialMenu ? (
                    // December 25 Special Menu
                    <>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Panettone Bread & Butter Pudding</h4>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Tiramisu with Mulled Wine Syrup</h4>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Traditional Christmas Pudding</h4>
                        <p className="text-sm text-muted-foreground">With brandy</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Chocolate & Hazelnut Torte (GF)</h4>
                      </div>
                    </>
                  ) : (
                    // Regular Christmas Menu
                    <>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Panettone Bread & Butter Pudding</h4>
                        <p className="text-sm text-muted-foreground">Italian Christmas classic reimagined</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Traditional Christmas Pudding with Brandy</h4>
                        <p className="text-sm text-muted-foreground">Classic festive dessert with warm sauce</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Chocolate & Hazelnut Torte (GF)</h4>
                        <p className="text-sm text-muted-foreground">Gluten-free indulgence</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Mulled Wine Tiramisu</h4>
                        <p className="text-sm text-muted-foreground">Festive twist on Italian favorite</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-foreground">Winter-Spiced Poached Pear</h4>
                        <p className="text-sm text-muted-foreground">Light and elegant seasonal dessert</p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Carousel View - Auto-scrolling */}
          <div className="md:hidden mb-16">
            <Carousel 
              className="w-full" 
              opts={{ 
                loop: true, 
                align: "start",
                dragFree: false,
                containScroll: "trimSnaps",
                skipSnaps: false
              }}
              setApi={setApi}
            >
              <CarouselContent className="-ml-4">
                {/* Starters Card */}
                <CarouselItem className="pl-4">
                  <Card className="card-premium h-[600px] overflow-y-auto">
                    <CardContent className="p-4">
                      <div className="text-center mb-4">
                        <Utensils className="w-8 h-8 text-red-600 mx-auto mb-2" />
                        <h3 className="font-display text-xl font-bold text-foreground">Starters</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Roast Pumpkin & Sage Soup</h4>
                          <p className="text-sm text-muted-foreground">Creamy seasonal soup with fresh herbs</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Burrata with Roasted Grapes & Walnuts</h4>
                          <p className="text-sm text-muted-foreground">Fresh Italian cheese with seasonal accompaniments</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Chicken Liver Parfait</h4>
                          <p className="text-sm text-muted-foreground">Rich and smooth with festive spices</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Prawn & Crayfish Cocktail</h4>
                          <p className="text-sm text-muted-foreground">Fresh seafood with tangy cocktail sauce</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Smoked Salmon & Pickled Cucumber</h4>
                          <p className="text-sm text-muted-foreground">Premium salmon with crisp accompaniments</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Mains Card */}
                <CarouselItem className="pl-4">
                  <Card className="card-premium h-[600px] overflow-y-auto">
                    <CardContent className="p-4">
                      <div className="text-center mb-4">
                        <ChefHat className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h3 className="font-display text-xl font-bold text-foreground">Mains</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Roast Turkey Roulade</h4>
                          <p className="text-sm text-muted-foreground">Traditional Christmas centerpiece</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Porchetta with Festive Spices</h4>
                          <p className="text-sm text-muted-foreground">Italian-style roast pork with herbs</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Roast Topside of Beef</h4>
                          <p className="text-sm text-muted-foreground">Premium beef with rich gravy</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Wild Mushroom & Truffle Lasagne (V)</h4>
                          <p className="text-sm text-muted-foreground">Vegetarian option with luxurious flavors</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Pan-Seared Sea Bass</h4>
                          <p className="text-sm text-muted-foreground">Fresh fish with seasonal vegetables</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Desserts Card */}
                <CarouselItem className="pl-4">
                  <Card className="card-premium h-[600px] overflow-y-auto">
                    <CardContent className="p-4">
                      <div className="text-center mb-4">
                        <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                        <h3 className="font-display text-xl font-bold text-foreground">Desserts</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Panettone Bread & Butter Pudding</h4>
                          <p className="text-sm text-muted-foreground">Italian Christmas classic reimagined</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Traditional Christmas Pudding with Brandy</h4>
                          <p className="text-sm text-muted-foreground">Classic festive dessert with warm sauce</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Chocolate & Hazelnut Torte (GF)</h4>
                          <p className="text-sm text-muted-foreground">Gluten-free indulgence</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Mulled Wine Tiramisu</h4>
                          <p className="text-sm text-muted-foreground">Festive twist on Italian favorite</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-foreground">Winter-Spiced Poached Pear</h4>
                          <p className="text-sm text-muted-foreground">Light and elegant seasonal dessert</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Sides Card - Only show on Dec 25 */}
                {showSpecialMenu && (
                  <CarouselItem className="pl-4">
                    <Card className="card-premium h-[600px] overflow-y-auto">
                      <CardContent className="p-4">
                        <div className="text-center mb-4">
                          <Utensils className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                          <h3 className="font-display text-xl font-bold text-foreground">Sides (£5 each)</h3>
                        </div>
                        <div className="space-y-3">
                          <div className="border-l-4 border-yellow-500 pl-4">
                            <h4 className="font-semibold text-foreground">Pigs in Blankets</h4>
                            <p className="text-sm text-muted-foreground">Classic festive sausage wrapped in bacon</p>
                          </div>
                          <div className="border-l-4 border-yellow-500 pl-4">
                            <h4 className="font-semibold text-foreground">Cauliflower & Broccoli Cheese</h4>
                            <p className="text-sm text-muted-foreground">Creamy cheesy vegetables</p>
                          </div>
                          <div className="border-l-4 border-yellow-500 pl-4">
                            <h4 className="font-semibold text-foreground">Braised Red Cabbage</h4>
                            <p className="text-sm text-muted-foreground">Slow-cooked seasonal favorite</p>
                          </div>
                          <div className="border-l-4 border-yellow-500 pl-4">
                            <h4 className="font-semibold text-foreground">Seasonal Vegetables</h4>
                            <p className="text-sm text-muted-foreground">Fresh garden vegetables</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            
            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, ...(showSpecialMenu ? [3] : [])].map((index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Festive Drinks */}
          <Card className="card-premium mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Wine className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">Festive Drinks</h3>
                <p className="text-lg text-muted-foreground">Perfect accompaniments to your Christmas meal</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-semibold text-xl text-black mb-2">Classic Mulled Wine</h4>
                    <p className="text-black">Warm spiced wine with cinnamon and cloves</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-xl text-black mb-2">Mulled Wine Bellini</h4>
                    <p className="text-black">Festive cocktail with prosecco and spices</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Perfect For Section */}
          <Card className="card-premium mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">Perfect For Every Celebration</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  From intimate family gatherings to corporate celebrations, we welcome guests of all ages with festive cheer
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-xl text-foreground mb-3">Family Gatherings</h4>
                  <p className="text-muted-foreground">Relaxed, family-friendly dining with options kids love</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-xl text-foreground mb-3">Office Parties</h4>
                  <p className="text-muted-foreground">Group bookings, set menus, and custom packages available</p>
                </div>
                <div className="text-center">
                  <Star className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-xl text-foreground mb-3">Couples' Lunches</h4>
                  <p className="text-muted-foreground">A cozy and romantic setting for two</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <div className="relative overflow-hidden rounded-2xl p-12 text-white">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-green-600"></div>
              
              {/* Christmas Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                {/* Snowflakes */}
                <div className="absolute top-4 left-8 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-12 w-3 h-3 bg-white rounded-full animate-bounce"></div>
                <div className="absolute top-16 left-16 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-8 w-3 h-3 bg-white rounded-full animate-bounce"></div>
                <div className="absolute top-20 left-24 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-6 right-20 w-4 h-4 bg-white rounded-full animate-bounce"></div>
                
                {/* Christmas Trees */}
                <div className="absolute bottom-8 left-12 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white opacity-30"></div>
                <div className="absolute bottom-12 right-16 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-white opacity-30"></div>
                <div className="absolute bottom-16 left-32 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white opacity-30"></div>
                
                {/* Gift Boxes */}
                <div className="absolute top-24 left-20 w-6 h-6 bg-white opacity-20 transform rotate-12"></div>
                <div className="absolute top-32 right-24 w-5 h-5 bg-white opacity-20 transform -rotate-12"></div>
                <div className="absolute bottom-24 left-28 w-4 h-4 bg-white opacity-20 transform rotate-45"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Gift className="w-8 h-8 animate-bounce" />
                  <h3 className="font-display text-4xl font-bold">Reserve Your Table Early!</h3>
                  <Gift className="w-8 h-8 animate-bounce" />
                </div>
                <p className="text-2xl mb-8 opacity-90">
                  Christmas is our busiest time of year, and tables fill up quickly!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-gray-100 font-bold text-xl px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => window.open('https://www.eposhybrid.uk/index.php/online-table-booking/SUhBQkJW', '_blank')}
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Online Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-xl px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => window.open('tel:+441380503525', '_self')}
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Call +44 13805 03525
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg opacity-80">
                  <MapPin className="w-5 h-5" />
                  <span>The Lamb on the Strand by Zia Pizza | Open throughout December 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChristmasPage;
