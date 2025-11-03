import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import archiveHero from "@/assets/archive-hero.jpg";
import atelierCraft from "@/assets/atelier-craft.jpg";
import productDetail from "@/assets/product-detail.jpg";

const Archive = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${archiveHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 pb-16">
          <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Previous Launch
          </p>
          <h1 className="font-serif text-5xl md:text-7xl tracking-wide text-primary-foreground mb-6">
            Female's Edition
          </h1>
          <p className="font-serif text-primary-foreground text-lg max-w-2xl">
            June 2025 — A collection of 25 numbered pieces exploring the intersection of heritage craftsmanship and contemporary collectible art.
          </p>
        </div>
      </section>

      {/* Editorial Essay */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl mb-8 tracking-wide">The Genesis Collection</h2>
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed font-serif">
              <p>
                The Female's Edition marks THEMOON's inaugural venture into limited-edition couture as collectible assets. Conceived in the tradition of the great ateliers, yet reimagined for a new generation of collectors who understand that true luxury appreciates with time.
              </p>
              
              <p>
                Each of the 25 pieces was hand-crafted over six months in our private atelier. Master artisans employed centuries-old techniques — hand-looming silk from sustainable sources, applying silver-wash embroidery in patterns inspired by lunar phases, and finishing with invisible seams that speak to the highest level of couture construction.
              </p>
              
              <p>
                What distinguishes this collection is not merely its scarcity, but its documentation. Every garment comes with a provenance certificate detailing its creation date, materials provenance, artisan signatures, and a unique serial number registered in THEMOON's permanent archive. Owners are invited into a lineage of collectors whose pieces will appreciate as both wearable art and investment assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-3xl mb-12 text-center tracking-wide">
            Collection Gallery
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="relative aspect-[3/4] overflow-hidden shadow-elegant">
              <img 
                src={productDetail} 
                alt="Collection Piece 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden shadow-elegant">
              <img 
                src={atelierCraft} 
                alt="Collection Piece 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden shadow-elegant">
              <img 
                src={archiveHero} 
                alt="Collection Piece 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl mb-12 tracking-wide">Press & Recognition</h3>
            
            <div className="space-y-8">
              <blockquote className="border-l-2 border-accent pl-6 italic text-lg text-muted-foreground font-serif">
                "THEMOON redefines luxury for the investment age. These are garments that appreciate, both aesthetically and financially."
                <footer className="mt-2 text-sm not-italic text-foreground font-serif">— Vogue India, July 2025</footer>
              </blockquote>
              
              <blockquote className="border-l-2 border-accent pl-6 italic text-lg text-muted-foreground font-serif">
                "A masterclass in provenance and craftsmanship. The Female's Edition sets a new standard for collectible fashion."
                <footer className="mt-2 text-sm not-italic text-foreground font-serif">— Financial Times Luxury, June 2025</footer>
              </blockquote>
              
              <blockquote className="border-l-2 border-accent pl-6 italic text-lg text-muted-foreground font-serif">
                "Where haute couture meets investment art. THEMOON's approach to numbered editions is brilliant."
                <footer className="mt-2 text-sm not-italic text-foreground font-serif">— Harper's Bazaar, August 2025</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Collector Information */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl mb-6 tracking-wide">
              Request Archive Access
            </h3>
            <p className="font-serif text-card-foreground leading-relaxed mb-8">
              Full provenance files, lookbooks, and authenticity documentation available to collectors and serious inquiries.
            </p>
            <a href="mailto:inquire@themoon.brand" className="text-accent hover:underline font-serif tracking-wider">
              inquire@themoon.brand
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Archive;
