import { MapPin, Clock, Users, Award, Heart } from "lucide-react";
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
              Bringing authentic Italian flavors to your neighborhood with passion, tradition, and the finest ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for authentic Italian cuisine, <span className="text-foreground">Zia</span> <span className="text-primary">Pizza</span> has been serving the community 
                  with traditional recipes passed down through generations. Our commitment to quality and authenticity 
                  has made us a beloved destination for pizza lovers across the region.
                </p>
                <p>
                  From our humble beginnings to becoming a trusted name in Italian dining, we've maintained our 
                  core values of using fresh, locally-sourced ingredients and traditional cooking methods that 
                  bring out the true flavors of Italy.
                </p>
                <p>
                  Today, with three convenient locations, we continue to serve our community with the same 
                  dedication and love for authentic Italian cuisine that started our journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">Made with Love</h3>
                  <p className="text-muted-foreground">Every pizza is crafted with passion and care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use only the finest ingredients and traditional methods to ensure every dish meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Authenticity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our recipes are authentic Italian, passed down through generations and prepared with traditional techniques.
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
                  We're proud to be part of the local community, supporting local suppliers and creating lasting relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every visit delivers the same exceptional experience, from our friendly service to our delicious food.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving authentic Italian cuisine across three convenient locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{location.address}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
            Experience Authentic Italian Cuisine
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience that celebrates the rich traditions of Italian cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#locations" className="btn-hero px-8 py-4 text-lg">
              Find a Location
            </a>
            <a href="/contact" className="btn-outline-premium px-8 py-4 text-lg">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
