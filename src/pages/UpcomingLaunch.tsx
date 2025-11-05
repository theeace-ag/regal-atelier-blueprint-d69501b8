import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import productDetail from "@/assets/upcoming-cover.png";

const UpcomingLaunch = () => {
  const handleAddToCart = () => {
    toast.success("Request received. A specialist will contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Product */}
      <section className="pt-32 pb-16 bg-royal-black relative texture-overlay">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden shadow-elegant">
                  <img 
                    src={productDetail} 
                    alt="Lunar Vella" 
                    className="w-full h-full object-cover blur-sm"
                  />
                </div>
              </div>

              <div className="space-y-8 sticky top-32">
                <div>
                  <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-4">
                    Upcoming Female's Limited Edition Launch
                  </p>
                  <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-6">
                    Whispers of the Unknown
                  </h1>
                  <p className="font-serif text-muted-foreground mt-4 mb-4">Coming on Jan 2026</p>
                  <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
                    A refined reveal is approaching — our most prestigious launch to date. This limited-edition women’s footwear, accented in gold, will debut through an exclusive auditorium showcase, complete with runway presentation and auction access for select guests only. A quiet celebration of rarity, elegance, and timeless craftsmanship.
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UpcomingLaunch;
