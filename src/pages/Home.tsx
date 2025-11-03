import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RSVPModal } from "@/components/RSVPModal";
import heroMain from "@/assets/hero-main.jpg";
import productDetail from "@/assets/product-detail.jpg";
import atelierCraft from "@/assets/atelier-craft.jpg";

const Home = () => {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroMain})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary" />
        </div>
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="font-brand text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] text-primary-foreground mb-6">
            THEMOON
          </h1>
          <p className="font-serif text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Couture • Limited Assets
          </p>
          <p className="font-serif text-primary-foreground max-w-md mx-auto mb-12 leading-relaxed">
            Handmade. Numbered. By invitation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/current-launch">
              <Button variant="hero" size="lg">
                Explore Upcoming
              </Button>
            </Link>
            <Link to="/archive">
              <Button variant="ghost" size="lg" className="text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10">
                Previous Launch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Current Launch Teaser */}
      <section className="py-24 bg-background relative texture-overlay">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[3/4] overflow-hidden shadow-elegant">
                <img 
                  src={productDetail} 
                  alt="Current Collection" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6">
                <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent">
                  Upcoming Launch
                </p>
                <h2 className="font-serif text-4xl md:text-5xl tracking-wide">
                  Lunar Vella — Female Edition
                </h2>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Hand-loomed silk with silver-wash embroidery. Each piece numbered and documented with full provenance certificate. Limited to 25 pieces worldwide.
                </p>
                <div className="pt-4">
                  <Link to="/current-launch">
                    <Button variant="royal">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 tracking-wide">
              Crafted for Those Who Collect Moments
            </h2>
            <p className="font-serif text-card-foreground leading-relaxed text-lg">
              THEMOON crafts garments that hold stories and futures. Each piece is conceived as a limited asset — crafted in small numbers, documented with provenance, and entrusted to collectors who wear time as a signature.
            </p>
          </div>
        </div>
      </section>

      {/* Archive Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl tracking-wide mb-4">Previous Launch</h2>
            <p className="font-serif text-muted-foreground">
              Explore the heritage of THEMOON collections
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden shadow-elegant">
              <img 
                src={atelierCraft} 
                alt="Archive Preview" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent flex items-end p-12">
                <div>
                  <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-2">
                    Female's Edition — June 2025
                  </p>
                  <h3 className="font-serif text-3xl text-primary-foreground mb-4">
                    The Provenance Collection
                  </h3>
                  <Link to="/archive">
                    <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      View Archive
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resell Teaser */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Limited Edition Asset
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-wide">
              Resale Opening December
            </h2>
            <p className="font-serif text-card-foreground leading-relaxed mb-12 text-lg">
              RSVP to receive the collector's pass. Selected previously-owned pieces will be released through THEMOON's curated resell program, authenticated and accompanied by full provenance.
            </p>
            <Button 
              variant="royal" 
              size="lg"
              onClick={() => setIsRSVPOpen(true)}
            >
              RSVP for December
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
    </div>
  );
};

export default Home;
