import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, MapPin, RefreshCw } from "lucide-react";
import { locations } from "@/data/locations";

const MenuPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const locationFromUrl = searchParams.get("location");
  const validLocationIds = useMemo(() => locations.map((loc) => loc.id), []);
  const [selectedLocation, setSelectedLocation] = useState<string>(() => {
    if (locationFromUrl && validLocationIds.includes(locationFromUrl)) {
      return locationFromUrl;
    }
    return "";
  });
  const [showLocationPopup, setShowLocationPopup] = useState<boolean>(false);

  // When URL has ?location=..., use it and show that menu; otherwise show location popup
  useEffect(() => {
    if (locationFromUrl && validLocationIds.includes(locationFromUrl)) {
      setSelectedLocation(locationFromUrl);
      setShowLocationPopup(false);
    } else if (!selectedLocation) {
      setShowLocationPopup(true);
    }
  }, [locationFromUrl, selectedLocation, validLocationIds]);

  // Load menu cover images for location selection popup
  const locationMenuCovers = useMemo(() => {
    const covers: Record<string, string> = {};
    
    // Load default menu cover (first page) - for Salisbury
    const defaultImages = import.meta.glob("@/assets/menu/*.{png,jpg,jpeg,webp}", {
      eager: true,
      as: "url",
    }) as Record<string, string>;
    const defaultCover = Object.values(defaultImages).sort()[0];
    
    // Load The Lamb menu cover (first page)
    const lambImages = import.meta.glob("@/assets/menu-lamb/*.{png,jpg,jpeg,webp}", {
      eager: true,
      as: "url",
    }) as Record<string, string>;
    const lambCover = Object.values(lambImages).sort()[0];

    // Load Westbury menu cover (first page)
    const westburyImages = import.meta.glob("@/assets/menu-westbury/*.{png,jpg,jpeg,webp}", {
      eager: true,
      as: "url",
    }) as Record<string, string>;
    const westburyCover = Object.values(westburyImages).sort()[0];
    
    // Assign covers to locations
    locations.forEach(location => {
      if (location.id === "westbury") {
        covers[location.id] = westburyCover || "";
      } else if (location.id === "trowbridge") {
        // The Lamb on the Strand
        covers[location.id] = lambCover || defaultCover || "";
      } else {
        // Salisbury and any others use default menu
        covers[location.id] = defaultCover || lambCover || "";
      }
    });
    
    return covers;
  }, []);

  // Load menu images based on selected location
  const menuImages = useMemo(() => {
    if (!selectedLocation) return [];
    
    if (selectedLocation === "westbury") {
      // Load Westbury menu images
      const westburyImages = import.meta.glob("@/assets/menu-westbury/*.{png,jpg,jpeg,webp}", {
        eager: true,
        as: "url",
      }) as Record<string, string>;
      return Object.values(westburyImages).sort();
    } else if (selectedLocation === "trowbridge") {
      // Load The Lamb on the Strand menu images
      const lambImages = import.meta.glob("@/assets/menu-lamb/*.{png,jpg,jpeg,webp}", {
        eager: true,
        as: "url",
      }) as Record<string, string>;
      return Object.values(lambImages).sort();
    } else {
      // Load default menu images for Salisbury (and any others)
      const defaultImages = import.meta.glob("@/assets/menu/*.{png,jpg,jpeg,webp}", {
        eager: true,
        as: "url",
      }) as Record<string, string>;
      return Object.values(defaultImages).sort();
    }
  }, [selectedLocation]);

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    setShowLocationPopup(false);
  };

  const coverFront = menuImages.length > 0 ? menuImages[0] : undefined;
  const coverBack = menuImages.length > 1 ? menuImages[menuImages.length - 1] : undefined;
  const innerPages = useMemo(() => {
    if (menuImages.length <= 2) return menuImages;
    return menuImages.slice(1, menuImages.length - 1);
  }, [menuImages]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  // Right page is the current page; left shows the previous page to mimic book view
  const [currentIndex, setCurrentIndex] = useState(1);
  const [flipDir, setFlipDir] = useState<"next" | "prev" | null>(null);
  const [FlipBook, setFlipBook] = useState<any>(null);
  const [flipbookReady, setFlipbookReady] = useState(false);
  const flipRef = useRef<any>(null);
  const [flipPage, setFlipPage] = useState(0);
  const [flipTotal, setFlipTotal] = useState(0);

  // Safe index so we never show blank when switching locations (menu length changes)
  const safeCurrentIndex = menuImages.length > 0
    ? Math.min(Math.max(1, currentIndex), menuImages.length - 1)
    : 1;

  // Reset page index when location changes (avoids blank when switching Salisbury -> Westbury -> Lamb)
  useEffect(() => {
    setCurrentIndex(1);
  }, [selectedLocation]);

  // Mobile lightbox (only)
  const openImageMobile = (src: string) => {
    setActiveSrc(src);
    setIsOpen(true);
    const id = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(id);
  };

  useEffect(() => {}, []);

  const showPrev = () => {};
  const showNext = () => {};

  // Keyboard navigation
  useEffect(() => {}, []);

  // Touch swipe handlers
  const onTouchStart = (_e: React.TouchEvent) => {};
  const onTouchMove = (_e: React.TouchEvent) => {};
  const onTouchEnd = () => {};

  // Book view navigation (desktop) - use safe index so switching locations never shows blank
  const canPrev = safeCurrentIndex > 1;
  const canNext = safeCurrentIndex < menuImages.length - 1;
  const goPrevSpread = () => {
    if (!canPrev) return;
    setFlipDir("prev");
    setCurrentIndex((p) => Math.max(1, p - 1));
    setTimeout(() => setFlipDir(null), 300);
  };
  const goNextSpread = () => {
    if (!canNext) return;
    setFlipDir("next");
    setCurrentIndex((p) => Math.min(menuImages.length - 1, p + 1));
    setTimeout(() => setFlipDir(null), 300);
  };

  // Try to load react-pageflip dynamically (desktop only enhancement)
  useEffect(() => {
    let mounted = true;
    import('react-pageflip')
      .then((mod) => {
        if (!mounted) return;
        const Comp = (mod as any).default || (mod as any).HTMLFlipBook;
        setFlipBook(() => Comp);
        setFlipbookReady(true);
      })
      .catch(() => setFlipbookReady(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Location Selection Popup */}
      <Dialog 
        open={showLocationPopup} 
        onOpenChange={(open) => {
          if (!open && !selectedLocation) {
            // If user tries to close without selecting, redirect to home
            navigate("/");
          } else {
            setShowLocationPopup(open);
          }
        }}
      >
        <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto p-4 md:p-6 w-[95vw] md:w-full">
          <DialogHeader className="px-2 md:px-0">
            <DialogTitle className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center">
              Choose Your Location
            </DialogTitle>
            <p className="text-sm md:text-base text-muted-foreground text-center font-raleway mt-2">
              Select a location to view the menu
            </p>
          </DialogHeader>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 mt-4 md:mt-6 px-2 md:px-0">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationSelect(location.id)}
                className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-primary active:border-primary transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] md:hover:scale-105 touch-manipulation w-full sm:w-auto sm:flex-1 sm:max-w-[280px]"
              >
                <Card className="border-0 shadow-none">
                  <CardContent className="p-0">
                    {locationMenuCovers[location.id] ? (
                      <div className="relative">
                        <img
                          src={locationMenuCovers[location.id]}
                          alt={`${location.name} menu`}
                          className="w-full h-auto object-cover max-h-[300px] md:max-h-none"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 group-active:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                            <div className="bg-primary/90 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-semibold text-sm md:text-base">
                              View Menu
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[3/4] bg-muted flex items-center justify-center max-h-[300px] md:max-h-none">
                        <MapPin className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground" />
                      </div>
                    )}
                    <div className="p-3 md:p-4 bg-card">
                      <h3 className="font-display text-base md:text-lg font-semibold text-center line-clamp-2">
                        {location.name.includes('by Zia Pizza') ? (
                          <>
                            <span style={{ color: '#D4C29C' }}>
                              {location.name.split('by Zia Pizza')[0].trim()}
                            </span>{' '}
                            <span className="text-foreground/80">by</span>{' '}
                            <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                          </>
                        ) : location.name.includes('Zia Pizza Express') ? (
                          <>
                            <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>{' '}
                            <span style={{ color: '#e5e7eb' }}>Express</span>{' '}
                            <span style={{ color: '#D4C29C' }}>{location.name.replace('Zia Pizza Express', '').trim()}</span>
                          </>
                        ) : location.name.includes('Zia Pizza') ? (
                          <>
                            <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                            {location.name.replace('Zia Pizza', '').trim() && (
                              <span style={{ color: '#D4C29C' }}>{location.name.replace('Zia Pizza', '').trim()}</span>
                            )}
                          </>
                        ) : (
                          <span className="text-foreground">{location.name}</span>
                        )}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-4">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
            Our <span className="text-primary">Menu</span>
          </h1>
            {selectedLocation && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowLocationPopup(true)}
                className="mt-0 md:mt-2 w-full sm:w-auto"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Change Location
              </Button>
            )}
          </div>
          
          {selectedLocation && (() => {
            const location = locations.find(loc => loc.id === selectedLocation);
            if (!location) return null;
            return (
              <p className="text-xs md:text-sm text-muted-foreground font-raleway px-2">
                Showing menu for{' '}
                {location.name.includes('by Zia Pizza') ? (
                  <>
                    <span style={{ color: '#D4C29C' }}>
                      {location.name.split('by Zia Pizza')[0].trim()}
                    </span>{' '}
                    <span className="text-foreground/80">by</span>{' '}
                    <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                  </>
                ) : location.name.includes('Zia Pizza Express') ? (
                  <>
                    <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>{' '}
                    <span style={{ color: '#e5e7eb' }}>Express</span>{' '}
                    <span style={{ color: '#D4C29C' }}>{location.name.replace('Zia Pizza Express', '').trim()}</span>
                  </>
                ) : location.name.includes('Zia Pizza') ? (
                  <>
                    <span className="text-white">Zia</span> <span className="text-red-600">Pizza</span>
                    {location.name.replace('Zia Pizza', '').trim() && (
                      <span style={{ color: '#D4C29C' }}>{location.name.replace('Zia Pizza', '').trim()}</span>
                    )}
                  </>
                ) : (
                  <span className="text-primary font-semibold">{location.name}</span>
                )}
              </p>
            );
          })()}
        </div>
      </section>

      {/* Menu Images - Book View (Desktop) - key forces remount when location changes to avoid blank/flipbook state */}
      <section className="py-16 hidden md:block" key={selectedLocation || "none"}>
        <div className="container mx-auto px-4">
          {!selectedLocation ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground font-raleway">
                Please select a location above to view the menu.
              </p>
            </div>
          ) : menuImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground font-raleway">
                Menu images are being prepared. Please check back soon!
              </p>
            </div>
          ) : flipbookReady && FlipBook ? (
            <div className="mx-auto max-w-5xl">
              <FlipBook
                width={550}
                height={733}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="shadow-lg demo-book"
                ref={flipRef}
                onInit={(api: any) => {
                  try {
                    const total = api?.getPageCount?.() ?? flipRef.current?.getPageFlip()?.getPageCount?.() ?? 0;
                    setFlipTotal(total);
                    setFlipPage(api?.getCurrentPageIndex?.() ?? 0);
                  } catch {}
                }}
                onFlip={(e: any) => setFlipPage(e.data)}
                onChangeState={() => {
                  try {
                    setFlipTotal(flipRef.current?.getPageFlip()?.getPageCount?.() || 0);
                  } catch {}
                }}
              >
                {/* Front Cover image */}
                {coverFront ? (
                  <div className="bg-white">
                    <img src={coverFront} alt="Menu cover" className="w-full h-auto object-contain select-none" />
                  </div>
                ) : (
                  <div className="bg-white"></div>
                )}
                {/* Inner Pages */}
                {innerPages.map((src, idx) => (
                  <div key={idx} className="bg-white">
                    <img src={src} alt={`Menu page ${idx + 2}`} className="w-full h-auto object-contain select-none" />
                  </div>
                ))}
                {/* Back Cover image */}
                {coverBack ? (
                  <div className="bg-white">
                    <img src={coverBack} alt="Menu back cover" className="w-full h-auto object-contain select-none" />
                  </div>
                ) : (
                  <div className="bg-white"></div>
                )}
              </FlipBook>
            </div>
          ) : (
            <>

              <div className="relative mx-auto max-w-6xl">
                <div className="perspective-[2000px] flex items-stretch gap-4">
                  {/* Previous page preview (left) */}
                  {safeCurrentIndex - 2 >= 0 && (
                    <div
                      className="hidden lg:block w-24 shrink-0 self-center opacity-70 hover:opacity-100 cursor-pointer"
                      onClick={goPrevSpread}
                    >
                      <img
                        src={menuImages[safeCurrentIndex - 2]}
                        alt={`Prev page ${safeCurrentIndex - 1}`}
                        className="w-24 h-auto object-cover rounded select-none"
                      />
                      <div className="text-center text-[10px] text-muted-foreground mt-1">Previous</div>
                    </div>
                  )}
                  {/* Left Page */}
                  <Card className={`card-premium overflow-hidden flex-1 min-w-0 transform transition-transform duration-300 ${flipDir === 'prev' ? 'rotate-y-6' : ''}`}>
                    <CardContent className="p-0">
                      {menuImages[safeCurrentIndex - 1] && (
                        <img src={menuImages[safeCurrentIndex - 1]} alt={`Menu page ${safeCurrentIndex}`} className="w-full h-auto object-cover select-none" />
                      )}
                    </CardContent>
                  </Card>

                  {/* Right Page */}
                  <Card className={`card-premium overflow-hidden flex-1 min-w-0 transform transition-transform duration-300 ${flipDir === 'next' ? '-rotate-y-6' : ''}`}>
                    <CardContent className="p-0">
                      {menuImages[safeCurrentIndex] && (
                        <img src={menuImages[safeCurrentIndex]} alt={`Menu page ${safeCurrentIndex + 1}`} className="w-full h-auto object-cover select-none" />
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Mobile/Tablet Grid fallback */}
      <section className="py-16 md:hidden" key={selectedLocation ? `mobile-${selectedLocation}` : "mobile-none"}>
        <div className="container mx-auto px-4">
          {!selectedLocation ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground font-raleway">
                Please select a location above to view the menu.
              </p>
            </div>
          ) : menuImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground font-raleway">
                Menu images are being prepared. Please check back soon!
              </p>
            </div>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuImages.map((src, idx) => (
              <Card key={idx} className="card-premium overflow-hidden">
                <CardContent className="p-0">
                  <button type="button" onClick={() => openImageMobile(src)} className="block w-full focus:outline-none">
                    <img src={src} alt={`Menu page ${idx + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Mobile Lightbox */}
      <Dialog open={isOpen} onOpenChange={(v) => { if (!v) { setIsOpen(false); setAnimateIn(false); } }}>
        <DialogContent className="md:hidden max-w-5xl w-[95vw] max-h-[90vh] p-0 overflow-hidden bg-black">
          {activeSrc && (
            <div
              className={`w-full h-full flex items-center justify-center bg-black transform transition-all duration-300 ease-out ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <img
                src={activeSrc}
                alt="Menu full view"
                className={`max-w-full max-h-[85vh] object-contain transition-transform duration-300 ${animateIn ? 'scale-100' : 'scale-95'}`}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default MenuPage;


