import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MenuPage = () => {
  const images = import.meta.glob("@/assets/menu/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const menuImages = useMemo(() => Object.values(images).sort(), [images]);
  const coverFront = menuImages[0];
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

  // Book view navigation (desktop)
  const canPrev = currentIndex > 1;
  const canNext = currentIndex < menuImages.length - 1;
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
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-raleway">
            Explore our current menu pages below.
          </p>
        </div>
      </section>

      {/* Menu Images - Book View (Desktop) */}
      <section className="py-16 hidden md:block">
        <div className="container mx-auto px-4">
          {flipbookReady && FlipBook ? (
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
                  {currentIndex - 2 >= 0 && (
                    <div
                      className="hidden lg:block w-24 shrink-0 self-center opacity-70 hover:opacity-100 cursor-pointer"
                      onClick={goPrevSpread}
                    >
                      <img
                        src={menuImages[currentIndex - 2]}
                        alt={`Prev page ${currentIndex - 1}`}
                        className="w-24 h-auto object-cover rounded select-none"
                      />
                      <div className="text-center text-[10px] text-muted-foreground mt-1">Previous</div>
                    </div>
                  )}
                  {/* Left Page */}
                  <Card className={`card-premium overflow-hidden flex-1 min-w-0 transform transition-transform duration-300 ${flipDir === 'prev' ? 'rotate-y-6' : ''}`}>
                    <CardContent className="p-0">
                      {menuImages[currentIndex - 1] && (
                        <img src={menuImages[currentIndex - 1]} alt={`Menu page ${currentIndex}`} className="w-full h-auto object-cover select-none" />
                      )}
                    </CardContent>
                  </Card>

                  {/* Right Page */}
                  <Card className={`card-premium overflow-hidden flex-1 min-w-0 transform transition-transform duration-300 ${flipDir === 'next' ? '-rotate-y-6' : ''}`}>
                    <CardContent className="p-0">
                      {menuImages[currentIndex] && (
                        <img src={menuImages[currentIndex]} alt={`Menu page ${currentIndex + 1}`} className="w-full h-auto object-cover select-none" />
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
      <section className="py-16 md:hidden">
        <div className="container mx-auto px-4">
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


