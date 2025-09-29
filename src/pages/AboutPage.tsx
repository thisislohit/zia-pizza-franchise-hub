import { MapPin, Clock, Users, Award, Heart, Pizza, ChefHat, Coffee, Utensils, Thermometer, Home, Leaf, DollarSign, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { locations } from "@/data/locations";

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-foreground">Zia</span> <span className="text-primary">Pizza</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your Local Pub, Reborn with Italian Soul
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-raleway">
                <p>
                  <span className="text-foreground">Zia</span> <span className="text-primary">Pizza</span> is more than a restaurant — it's a mission. We exist to save local pubs by filling them
                  with the warmth of fresh Italian food at pub-friendly prices.
                </p>
                <p>
                  Our story begins in Naples, where Zia Maria taught her nephew, Chef Vittorio Capetti, the
                  secrets of stone-baked pizza. In 2009, Vittorio brought her recipes to Westbury, Wiltshire,
                  lighting the oven that started it all. Today, under the care of Nidhin Rey Sajeev, <span className="text-foreground">Zia</span> <span className="text-primary">Pizza</span>
                  continues that tradition — preserving heritage pubs, baking with love, and keeping community
                  at the heart.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/about_us.jpg" 
                  alt="Zia Pizza - Made with Love" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Ways to Enjoy Zia */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Two Ways to Enjoy Zia
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Zia Pizza — Italian Restaurant & Takeaway (Express)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed font-raleway">
                  Perfect for quick dining, family meals, or a pizza night at home. Enjoy hand-stretched pizzas,
                  comforting Lasagne, indulgent Calzones, and our viral-favourite tiramisu range — including
                  the Dubai Chocolate Tiramisu and seasonal Orange Tiramisu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Zia Pizza Gastropubs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed font-raleway">
                  Here, we rescue historic pubs and give them new life. We keep the original pub name and
                  exterior, while transforming the inside into a cozy, family-friendly Italian gastropub.
                  Alongside our Italian signatures, guests enjoy local pub specials and Sunday Roasts —
                  blending Italian craft with British tradition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Signature Heroes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Signature Heroes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pizza className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Zia Special Pizza</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Flagship stone-baked recipe
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Lasagne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Slow-baked, layered, and loved
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pizza className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Calzone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Folded perfection, bubbling and golden
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Dubai Chocolate Tiramisu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Indulgent, viral-ready dessert
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Orange Tiramisu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A seasonal, refreshing twist
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Pub Specials & Sunday Roasts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local comfort reimagined
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Do It
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pizza className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">The Dough</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cold-proofed for up to 72 hours for a light, airy crust. Always hand-stretched, never rolled.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">The Oven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stone-baked at high heat for that leopard-spotted crust and smoky flavour.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">The Kitchen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every sauce, dough ball, and dish made fresh — never frozen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Freshness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Everything made in-house, from dough to desserts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reviving pubs so they remain part of local life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Affordable menus, daily deals, and family-friendly prices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Warmth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Italian hospitality with English pub comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local sourcing where possible, reduced waste, eco-friendly packaging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Our Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Promise
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed font-raleway">
              <p className="text-lg">
                Freshly made Italian food, cozy pub vibes, unbeatable value — always with warmth.
              </p>
              <p>
                Whether it's a pizza takeaway, a midweek buffet, or a Sunday roast at your local gastropub,
                you'll always find food that's made with love, a place that feels like home, and value that
                makes every visit special.
              </p>
              <p className="text-lg font-medium text-foreground">
                Because at <span className="text-primary">Zia Pizza</span>, it's not just what's on the plate — it's the love baked into every crust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-raleway">
              Serving authentic Italian cuisine across three convenient locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="text-center h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full">
                  <p className="text-muted-foreground mb-4">{location.address}</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-auto">
                    {location.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
