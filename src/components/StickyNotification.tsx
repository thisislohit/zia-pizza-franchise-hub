import { useState, useEffect } from "react";
import { X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { offers } from "@/data/locations";

const StickyNotification = () => {
  // Commented out - notification disabled
  return null;
  
  /* 
  const [isVisible, setIsVisible] = useState(true);
  const [currentOffer, setCurrentOffer] = useState<any>(null);

  useEffect(() => {
    const getCurrentDayOffer = () => {
      const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      const currentHour = new Date().getHours();
      
      // Find today's offer from the offers data
      const todaysOffer = offers.find(offer => 
        offer.isActive && 
        offer.validDays && 
        offer.validDays.includes(today)
      );
      
      if (todaysOffer) {
        // Check if it's a time-sensitive offer (like Wednesday buffet)
        const isTimeSensitive = todaysOffer.validTimes && todaysOffer.id === 'wednesday-buffet';
        let urgent = false;
        let timeRemaining = '';
        
        if (isTimeSensitive) {
          // Parse time range (e.g., "12:00 PM - 3:00 PM")
          const timeRange = todaysOffer.validTimes;
          const [startTime, endTime] = timeRange.split(' - ');
          
          // Convert to 24-hour format for comparison
          const parseTime = (timeStr: string) => {
            const [time, period] = timeStr.split(' ');
            const [hours, minutes] = time.split(':');
            let hour24 = parseInt(hours);
            if (period === 'PM' && hour24 !== 12) hour24 += 12;
            if (period === 'AM' && hour24 === 12) hour24 = 0;
            return hour24;
          };
          
          const startHour = parseTime(startTime);
          const endHour = parseTime(endTime);
          
          if (currentHour >= startHour && currentHour < endHour) {
            urgent = true;
            timeRemaining = `${endHour - currentHour} hours left`;
          }
        }
        
        return {
          id: todaysOffer.id,
          title: `${todaysOffer.title} - Available Today!`,
          description: todaysOffer.description,
          urgent: urgent,
          timeRemaining: timeRemaining
        };
      }
      
      // Fallback: Show family deal if no specific day offer
      const familyDeal = offers.find(offer => offer.id === 'sunday-family' && offer.isActive);
      if (familyDeal) {
        return {
          id: familyDeal.id,
          title: 'Special Family Deal Available!',
          description: familyDeal.description,
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
    <div className="fixed top-16 left-0 right-0 z-40 text-black shadow-lg animate-in slide-in-from-top duration-500" style={{backgroundColor: '#D4C29C'}}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-4 relative">
          <div className="flex items-center gap-3 flex-1 justify-center">
            {currentOffer.urgent && (
              <div className="flex items-center gap-1 px-2 py-1 bg-black/20 rounded-full text-xs font-medium">
                <Clock className="w-3 h-3" />
                {currentOffer.timeRemaining}
              </div>
            )}
            
            <div className="flex-1 text-center">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 justify-center">
                <span className="font-semibold">
                  {currentOffer.title}
                </span>
                <span className="text-sm text-black/80">
                  {currentOffer.description}
                </span>
              </div>
            </div>
          </div>
          
          <div className="absolute right-0 flex items-center gap-3">
            <button
              onClick={handleClose}
              className="p-1 hover:bg-black/20 rounded transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  */
};

export default StickyNotification;