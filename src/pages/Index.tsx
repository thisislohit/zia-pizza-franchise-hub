import HeroSection from "@/components/HeroSection";
import LocationChooser from "@/components/LocationChooser";
import OffersSection from "@/components/OffersSection";
// import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="pt-16"> {/* Offset for fixed navigation */}
      <HeroSection />
      <LocationChooser />
      <OffersSection />
      {/* <ReviewsSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
