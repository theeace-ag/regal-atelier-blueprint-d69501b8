import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import archiveHero from "@/assets/priv-launch-3.jpg";
import atelierCraft from "@/assets/priv-launch-4.jpg.png";
import productDetail from "@/assets/priv-launch-1.jpg";

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
            THEMOON | Women’s Edition Launch
          </h1>
          <p className="font-serif text-primary-foreground text-lg max-w-2xl">
            11/9/2025 — The Gallery Continues
          </p>
        </div>
      </section>

      {/* Editorial Essay */}
      <section className="py-24 bg-royal-black relative texture-overlay">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl mb-8 tracking-wide">THEMOON | Women’s Edition Launch</h2>
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed font-serif">
              <p>
                11/9/2025 — The Gallery Continues
              </p>
              <p>
                From the stillness of lunar shadow to the quiet glow of power, THEMOON unveils a new chapter. The Women’s Edition honors elegance without noise — presence without declaration. A continuation from our previous gallery, this release celebrates silhouettes that speak in silence, yet command the room.
              </p>
              <p>
                Lunar Highneck Tee
                Minimalism sharpened into authority.
                Rendered in deep noir, the Lunar Highneck Tee shapes the form with precision and softness. The elevated neckline frames the poise of the wearer; its tailored profile holds strength, subtle yet unmistakable. Built for days that blur into evenings, it is comfort refined into armor.
                A piece for those who lead quietly and are felt deeply.
              </p>
              <p>
                Noir Élan Dress
                Fluid confidence, sculpted in midnight.
                The Noir Élan Dress drapes like a whispered command — soft movement, powerful impression. Its keyhole detail offers a modern edge, while the cascading length glides with timeless elegance. Every line honors feminine force — unhurried, certain, magnetic.
                A gown for the woman who turns stillness into statement.
              </p>
              <p>
                This edition reflects THEMOON’s creed:
                Restraint as luxury. Silence as power. Mystery as confidence.
              </p>
              <p>
                A collection for the women who do not ask to be seen —
                they are noticed by nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Gallery */}
      <section className="py-16 bg-royal-black-alt relative texture-overlay">
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

      <hr className="border-t-2 border-royal-gold/20 my-0" />



      {/* Collector Information */}
      <section className="py-24 bg-royal-black-alt relative texture-overlay">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl mb-6 tracking-wide">
              Request Archive Access
            </h3>
            <p className="font-serif text-card-foreground leading-relaxed mb-8">
              Full provenance files, lookbooks, and authenticity documentation available to collectors and serious inquiries.
            </p>
            <a href="mailto:team@theeace-ag.com" className="text-accent hover:underline font-serif tracking-wider">
              team@theeace-ag.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Archive;
