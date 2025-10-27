import { Button } from "@/components/ui/button";
import homePageImage from "@/assets/home_page/image1.jpg";

const HeroSection = () => {

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={homePageImage}
          alt="Zia Pizza Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-bounce-in-up">
            Welcome to Zia Pizza
          </h1>
          <h2 className="font-display text-lg md:text-xl lg:text-2xl mb-4 text-white/90 animate-bounce-in-up animation-delay-200">
            Your Home for Authentic Italian Pizza in Wiltshire!
          </h2>
          <h3 className="font-display text-base md:text-lg lg:text-xl mb-6 text-white/80 animate-bounce-in-up animation-delay-400">
            Fresh, affordable, and made with love.
          </h3>
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
    </section>
  );
};

export default HeroSection;