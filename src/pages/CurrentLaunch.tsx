import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import productDetail from "@/assets/product-detail.jpg";
import atelierCraft from "@/assets/atelier-craft.jpg";

const CurrentLaunch = () => {
  const handleAddToCart = () => {
    toast.success("Request received. A specialist will contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Product */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden shadow-elegant">
                  <img 
                    src={productDetail} 
                    alt="Lunar Vella" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-[16/9] overflow-hidden shadow-elegant">
                  <img 
                    src={atelierCraft} 
                    alt="Craftsmanship Detail" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-8 sticky top-32">
                <div>
                  <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-4">
                    Current Launch — 2025
                  </p>
                  <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-6">
                    Lunar Vella — Female Edition
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Hand-loomed silk, silver-wash embroidery, numbered 03/25. Each piece is a testament to heritage craftsmanship, destined to appreciate as both garment and collectible asset.
                  </p>
                </div>

                <div className="border-t border-b border-muted/20 py-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-sm tracking-wider uppercase text-muted-foreground">
                      Atelier
                    </span>
                    <span className="text-foreground">THEMOON Maison</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-sm tracking-wider uppercase text-muted-foreground">
                      Creation Date
                    </span>
                    <span className="text-foreground">June 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-sm tracking-wider uppercase text-muted-foreground">
                      Serial Number
                    </span>
                    <span className="text-foreground">THEMOON-LV-03</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-sm tracking-wider uppercase text-muted-foreground">
                      Edition Size
                    </span>
                    <span className="text-foreground">25 Pieces Worldwide</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl text-accent">₹420,000</span>
                    <span className="text-muted-foreground text-sm">By Invitation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Each purchase includes a signed provenance certificate and optional discreet resale onboarding.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="royal" 
                    size="lg" 
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    Request Purchase
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    All pieces are final sale. Authentication and provenance guaranteed.
                  </p>
                </div>

                <div className="bg-card p-6 border border-muted/20">
                  <h3 className="font-serif text-lg tracking-wider uppercase mb-4">
                    Care & Ownership
                  </h3>
                  <ul className="space-y-2 text-sm text-card-foreground">
                    <li>• Professional dry clean only</li>
                    <li>• Store in provided garment case</li>
                    <li>• Avoid direct sunlight exposure</li>
                    <li>• Annual valuation review recommended</li>
                    <li>• Resale authentication available through THEMOON</li>
                  </ul>
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

export default CurrentLaunch;
