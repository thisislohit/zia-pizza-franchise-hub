import { useState, useEffect } from "react";
import { X, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyNotification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentOffer, setCurrentOffer] = useState<any>(null);

  useEffect(() => {
    const getCurrentDayOffer = () => {
      const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      const currentHour = new Date().getHours();
      
      // Wednesday Buffet (12-3 PM)
      if (today === 'Wednesday' && currentHour >= 12 && currentHour < 15) {
        return {
          id: 'wednesday-buffet-live',
          title: 'Pizza Buffet Available Now!',
          description: 'All-you-can-eat pizza buffet until 3 PM - £15 per person',
          cta: 'Book Now',
          ctaLink: '/locations',
          urgent: true,
          timeRemaining: `${15 - currentHour} hours left`
        };
      }
      
      // Tuesday BOGO
      if (today === 'Tuesday') {
        return {
          id: 'tuesday-bogo',
          title: 'Tuesday BOGO Pizza Special!',
          description: 'Buy one pizza, get one 50% off all day today',
          cta: 'Order Now',
          ctaLink: '/locations',
          urgent: false
        };
      }
      
      // Evening special
      if (currentHour >= 18 && currentHour < 22) {
        return {
          id: 'evening-special',
          title: 'Evening Dining Available',
          description: 'Book your table for authentic Italian dining experience',
          cta: 'Reserve Table',
          ctaLink: '/locations',
          urgent: false
        };
      }
      
      return null;
    };

    const offer = getCurrentDayOffer();
    setCurrentOffer(offer);
    
    // Check every minute for time-sensitive offers
    const interval = setInterval(() => {
      const newOffer = getCurrentDayOffer();
      setCurrentOffer(newOffer);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remember dismissal for this session
    sessionStorage.setItem(`dismissed-${currentOffer?.id}`, 'true');
  };

  // Don't show if no current offer, user dismissed it, or it was already dismissed this session
  if (!currentOffer || !isVisible || sessionStorage.getItem(`dismissed-${currentOffer.id}`)) {
    return null;
  }

  return (
    <div className={`fixed top-16 left-0 right-0 z-40 ${
      currentOffer.urgent ? 'bg-gradient-to-r from-secondary to-accent' : 'bg-gradient-to-r from-primary to-primary/90'
    } text-white shadow-lg animate-in slide-in-from-top duration-500`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            {currentOffer.urgent && (
              <div className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                <Clock className="w-3 h-3" />
                {currentOffer.timeRemaining}
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-semibold">
                  {currentOffer.title}
                </span>
                <span className="text-sm text-white/90">
                  {currentOffer.description}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a href={currentOffer.ctaLink}>
              <Button 
                variant="secondary"
                size="sm"
                className={`${
                  currentOffer.urgent 
                    ? 'bg-white text-secondary hover:bg-white/90' 
                    : 'bg-secondary hover:bg-secondary/90'
                } font-medium whitespace-nowrap`}
              >
                {currentOffer.cta}
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </a>
            
            <button
              onClick={handleClose}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNotification;