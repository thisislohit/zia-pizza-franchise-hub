import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import pizzaHero1 from "@/assets/pizza-hero-1.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import pizzaVariety from "@/assets/pizza-variety.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: pizzaHero1,
      title: "Authentic Italian Pizza",
      subtitle: "Experience the taste of Italy",
      description: "Fresh ingredients, traditional recipes, and premium quality in every bite"
    },
    {
      image: restaurantInterior,
      title: "Premium Dining Experience",
      subtitle: "Three locations to serve you",
      description: "Elegant atmosphere, exceptional service, and unforgettable moments"
    },
    {
      image: pizzaVariety,
      title: "Artisanal Creations",
      subtitle: "Crafted with passion",
      description: "From classic margherita to gourmet specialties, discover your perfect pizza"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay w-full h-full flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl mb-6 text-white/90">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1" onClick={() => {
                    const el = document.getElementById('locations');
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}>
                    Order Online
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-background px-8 py-4 text-lg transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => {
                      const el = document.getElementById('locations');
                      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    Book a Table
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;