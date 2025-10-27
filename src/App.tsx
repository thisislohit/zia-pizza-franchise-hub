import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StickyNotification from "@/components/StickyNotification";
import { useCSSSmoothScroll } from "@/hooks/use-smooth-scroll";
import Index from "./pages/Index";
import LocationsPage from "./pages/LocationsPage";
import LocationDetailPage from "./pages/LocationDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DealsPage from "./pages/DealsPage";
import ChristmasPage from "./pages/ChristmasPage";
import BlogPage from "./pages/BlogPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Enable smooth scrolling with reduced speed
  useCSSSmoothScroll();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />
            <ScrollToTop />
            <StickyNotification />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/location/:locationId" element={<LocationDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/deals" element={<DealsPage />} />
                <Route path="/christmas" element={<ChristmasPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsAndConditionsPage />} />
                <Route path="/cookies" element={<CookiesPolicyPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <ScrollToTopButton />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
