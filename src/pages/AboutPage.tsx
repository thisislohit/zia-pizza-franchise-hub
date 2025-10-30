import { MapPin, Clock, Users, Award, Heart, Pizza, ChefHat, Coffee, Utensils, Thermometer, Home, Leaf, DollarSign, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { locations } from "@/data/locations";
import aboutUsImage from "@/assets/about_us/100004.jpg";
import { useState, useEffect } from "react";
import image1 from "@/assets/about_us/100006.jpg";
import image2 from "@/assets/about_us/About Us - Calzone.jpg";
import image3 from "@/assets/about_us/About Us - Lasagne.png";
import image4 from "@/assets/about_us/Offer - Tuesday Bogojpg.jpg";

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-secondary" />,
      title: "Freshness First",
      description: "We use only fresh, premium ingredients in every single pizza.",
      image: image1
    },
    {
      icon: <Home className="w-6 h-6 text-secondary" />,
      title: "Cozy Vibes",
      description: "Our dining experience is always cozy and family-friendly.",
      image: image2
    },
    {
      icon: <Zap className="w-6 h-6 text-secondary" />,
      title: "Easy & Convenient",
      description: "We offer easy takeaway and online ordering options.",
      image: image3
    },
    {
      icon: <Heart className="w-6 h-6 text-secondary" />,
      title: "Service with a Smile",
      description: "Our friendly team is ready to welcome you at all three branches.",
      image: image4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Slice of Italy in Every Bite!
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
                  Welcome to <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>! We're not just another pizza place; we're your go-to destination for authentic Italian cuisine and unforgettable, freshly baked pizzas. We are a place where friends, families, and pizza lovers come together to share great food in a cozy, welcoming atmosphere.
                </p>
                <p>
                  At <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>, we believe flavour is everything. Every pizza is crafted with passion, using only fresh, high-quality ingredients. From the timeless Classic Margherita to our unique gourmet specialty pizzas, each slice is a taste of Italy, made with love.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={aboutUsImage} 
                  alt="Zia Pizza - Made with Love" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Continued */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Story: From Passion to Your Plate
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-muted-foreground leading-relaxed font-raleway text-center">
              <p className="text-lg">
                <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span> began with one simple passion: bringing the true, authentic flavours of Italy to the heart of Salisbury, Trowbridge, and Westbury. Inspired by traditional recipes, we've grown from a small beginning into three beloved branches. But our dedication remains the same: delivering incredible quality, amazing taste, and a warm, welcoming experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Come Say Ciao! Visit Our Branches
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  <span className="text-white">Restaurant in</span> <span className="text-red-600">Salisbury</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed font-raleway">
                  Our Salisbury location is a local favourite! As a top Restaurant in Salisbury, we offer a warm, family-friendly setting. Perfect for a casual meal or a fun gathering.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  <span className="text-white">Restaurant in</span> <span className="text-red-600">Trowbridge</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed font-raleway">
                  Your community spot for flavour! Our Restaurant in Trowbridge is loved by locals for fresh, handcrafted pizzas in a cozy atmosphere. Ideal for dining in or grabbing a takeaway.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  <span className="text-white">Westbury</span> <span className="text-red-600">Branch</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed font-raleway">
                  A popular hub for families and pizza fans! Get the same high-quality pizzas and friendly service you love, right here in Westbury.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why You'll Love Zia Pizza */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why You'll Love <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Image with Overlay Text */}
              <div className="aspect-video rounded-2xl overflow-hidden relative">
                <img 
                  src={features[currentIndex].image} 
                  alt={features[currentIndex].title}
                  className="w-full h-full object-cover transition-opacity duration-1000"
                />
                
                {/* Dark Overlay on Full Image */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Text Content Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center w-full max-w-2xl mx-auto p-8">
                    <h3 className="text-white text-3xl font-bold mb-4">
                      {features[currentIndex].title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {features[currentIndex].description}
                    </p>
                  </div>
                </div>

                {/* Dots Indicator Over Image */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Online or Visit Us Today */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Order Online or Visit Us Today!
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed font-raleway">
              <p className="text-lg">
                Whether you're in Salisbury, Trowbridge, or Westbury, an unforgettable pizza experience is waiting for you. Dine in with us, grab a takeaway, or order online to enjoy authentic Italian flavours wherever you are.
              </p>
              <p className="text-lg font-medium text-foreground">
                <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span> – Serving the finest pizzas and Italian flavors in Salisbury, Trowbridge, and Westbury!
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
              <Card 
                key={location.id} 
                className="text-center h-full flex flex-col cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => window.open(location.iframes.order, '_blank')}
              >
                <CardHeader className="flex-grow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">
                    {location.name.includes('by Zia Pizza') ? (
                      <>
                        <span style={{ color: '#D4C29C' }}>
                          {location.name.split('by Zia Pizza')[0].trim()}
                        </span>{' '}
                        <span className="text-foreground/80">by</span>{' '}
                        <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                      </>
                    ) : location.name.includes('Zia Pizza') ? (
                      <>
                        <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                        {location.name.replace('Zia Pizza', '').trim() && (
                          <span style={{ color: '#D4C29C' }}>{location.name.replace('Zia Pizza', '').trim()}</span>
                        )}
                      </>
                    ) : (
                      location.name
                    )}
                  </CardTitle>
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
