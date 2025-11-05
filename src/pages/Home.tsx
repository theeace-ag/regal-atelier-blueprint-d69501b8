import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import heroMain from "@/assets/hero-main.jpg";
import heroMainMob from "@/assets/hero-main-mob.jpg";
import productDetail from "@/assets/upcoming-cover.png";
import atelierCraft from "@/assets/prev-launch-cover.jpg";
import limCover from "@/assets/lim-cover.png";
import limBg from "@/assets/lim-bg.jpg";
import limResell from "@/assets/resell.jpg";
import prevBgg from "@/assets/prev-bgg.jpg";

const Home = () => {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-left scale-125 transition-transform duration-700 hidden sm:block"
          style={{ backgroundImage: `url(${heroMain})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary" />
        </div>
        <div 
          className="absolute inset-0 bg-cover bg-left scale-125 transition-transform duration-700 block sm:hidden"
          style={{ backgroundImage: `url(${heroMainMob})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary" />
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 text-center px-6 animate-fade-in">
          <p className="font-serif text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Couture • Limited Assets
          </p>
          <p className="font-serif text-primary-foreground max-w-md mx-auto mb-12 leading-relaxed">
            Handmade. Numbered. By invitation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upcoming-launch">
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
      <section className="py-24 bg-royal-black relative texture-overlay">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[3/4] overflow-hidden shadow-elegant">
                <img 
                  src={productDetail} 
                  alt="Current Collection" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 blur-sm"
                />
              </div>
              <div className="space-y-6">
                <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent">
                  Upcoming Limited Edition Launch
                </p>
                <h2 className="font-serif text-4xl md:text-5xl tracking-wide">
                  Whispers of the Unknown
                </h2>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Two silhouettes forged in silence, touched by gold. A quiet arrival… for those who recognize rarity before the world does.
                </p>
                <div className="pt-4">
                  <Link to="/upcoming-launch">
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

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Limited Edition Asset Gallery */}
      <section className="py-24 bg-royal-black-alt relative texture-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${limBg})` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[3/4] overflow-hidden shadow-elegant">
                <img
                  src={limCover}
                  alt="Limited Edition Asset Gallery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6">
                <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent">
                  Limited Edition Asset Gallery
                </p>
                <h2 className="font-serif text-4xl md:text-5xl tracking-wide">
                  Explore the Exclusive Collection
                </h2>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  A curated selection of our most exclusive and limited edition pieces. Each item is a work of art, with a unique story and provenance.
                </p>
                <div className="pt-4">
                  <Link to="/gallery">
                    <Button variant="royal">
                      View Gallery
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Brand Manifesto */}
      <section className="py-24 bg-royal-black relative texture-overlay">
        <div className="container mx-auto px-6 relative z-10">
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

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Archive Preview */}
      <section className="py-24 bg-zinc-950 relative">
        <div className="container mx-auto px-6 relative z-10">
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

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Resell Teaser */}
      <section className="py-24 bg-royal-black relative texture-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${limBg})` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Limited Edition Asset
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-wide">
              Resale & Purchase — From December
            </h2>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-elegant mb-8">
              <img 
                src={limResell} 
                alt="Limited Edition Resell Value" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-serif text-card-foreground leading-relaxed mb-12 text-lg">
              Each piece from THEMOON's Limited Editions collection is not merely an item of clothing, but a tangible asset whose value appreciates over time. From December, collectors will have the exclusive opportunity to engage in a curated resale and purchase program. This initiative ensures the authenticity and provenance of each piece, allowing its legacy to grow and its worth to be recognized by a discerning community. Invest in artistry, secure your legacy.
            </p>
            <Link to="/resell">
              <Button 
                variant="royal" 
                size="lg"
              >
                Explore Resell Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
