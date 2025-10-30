import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const MenuPage = () => {
  const images = import.meta.glob("@/assets/menu/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const menuImages = Object.values(images).sort();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const openImage = (src: string) => {
    setActiveSrc(src);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      // next frame to trigger transition
      const id = requestAnimationFrame(() => setAnimateIn(true));
      return () => cancelAnimationFrame(id);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  const getActiveIndex = (): number => {
    if (!activeSrc) return -1;
    return menuImages.indexOf(activeSrc);
  };

  const showPrev = () => {
    const idx = getActiveIndex();
    if (idx < 0) return;
    const prev = (idx - 1 + menuImages.length) % menuImages.length;
    setActiveSrc(menuImages[prev]);
  };

  const showNext = () => {
    const idx = getActiveIndex();
    if (idx < 0) return;
    const next = (idx + 1) % menuImages.length;
    setActiveSrc(menuImages[next]);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, activeSrc, menuImages.length]);

  // Touch swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
    setTouchEndX(null);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const delta = touchEndX - touchStartX;
    const threshold = 50; // px
    if (delta > threshold) {
      showPrev();
    } else if (delta < -threshold) {
      showNext();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

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

      {/* Menu Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuImages.slice(0, 6).map((src, idx) => (
              <Card key={idx} className="card-premium overflow-hidden">
                <CardContent className="p-0">
                  <button
                    type="button"
                    onClick={() => openImage(src)}
                    className="block w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <img
                      src={src}
                      alt={`Menu page ${idx + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02] cursor-zoom-in"
                      loading="lazy"
                    />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 overflow-hidden bg-black">
          {activeSrc && (
            <div
              className={`w-full h-full flex items-center justify-center bg-black transform transition-all duration-300 ease-out ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
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


