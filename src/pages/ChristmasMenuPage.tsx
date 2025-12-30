import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Snowflake } from "lucide-react";
import ChristmasMenuImage from "@/assets/Christmas_menu.png";

const ChristmasMenuPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [FlipBook, setFlipBook] = useState<any>(null);
  const [flipbookReady, setFlipbookReady] = useState(false);
  const flipRef = useRef<any>(null);

  // Mobile lightbox
  const openImageMobile = (src: string) => {
    setActiveSrc(src);
    setIsOpen(true);
    const id = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(id);
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
      <section className="py-8 md:py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link to="/menu">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Menu
              </Button>
            </Link>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Snowflake className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            <span>Christmas <span className="text-primary">Menu</span></span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-raleway px-2">
            Celebrate the festive season with our special Christmas menu
          </p>
        </div>
      </section>

      {/* Menu Image - Book View (Desktop) */}
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
              >
                <div className="bg-white">
                  <img src={ChristmasMenuImage} alt="Christmas Menu" className="w-full h-auto object-contain select-none" />
                </div>
              </FlipBook>
            </div>
          ) : (
            <div className="relative mx-auto max-w-6xl">
              <Card className="card-premium overflow-hidden">
                <CardContent className="p-0">
                  <img src={ChristmasMenuImage} alt="Christmas Menu" className="w-full h-auto object-cover select-none" />
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Mobile/Tablet Grid fallback */}
      <section className="py-16 md:hidden">
        <div className="container mx-auto px-4">
          <Card className="card-premium overflow-hidden">
            <CardContent className="p-0">
              <button type="button" onClick={() => openImageMobile(ChristmasMenuImage)} className="block w-full focus:outline-none">
                <img src={ChristmasMenuImage} alt="Christmas Menu" className="w-full h-auto object-cover" loading="lazy" />
              </button>
            </CardContent>
          </Card>
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
                alt="Christmas Menu full view"
                className={`max-w-full max-h-[85vh] object-contain transition-transform duration-300 ${animateIn ? 'scale-100' : 'scale-95'}`}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChristmasMenuPage;

