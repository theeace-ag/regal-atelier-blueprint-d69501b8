import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import resellImage from "@/assets/resell.jpg";
import lim2 from "@/assets/lim-2.png";
import lim3 from "@/assets/lim-3.png";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24 bg-royal-black relative texture-overlay">
        <h1 className="font-serif text-5xl md:text-6xl tracking-wide text-center mb-12">
          Limited Edition Asset Gallery
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img src={resellImage} alt="Limited Edition 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <img src={lim2} alt="Limited Edition 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <img src={lim3} alt="Limited Edition 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center space-y-6">
          <p className="font-serif text-lg text-foreground leading-relaxed">
            9.6.2025... A whisper of danger, a promise of legacy — the LIMITED EDITIONS Jacket lives inside its own mythology. Only a scarce few pieces exist in the world, each one treated not as apparel, but as an artifact. Born from precision, obsession, and a refusal to dilute rarity, its value isn't assigned — it accrues, quietly and relentlessly, with time and with legend. 
          </p>
          <p className="font-serif text-lg text-foreground leading-relaxed">
            The silhouette stands disciplined and commanding, structured in deep black and armored with lunar metal accents across the shoulders — a constellation forged for those who lead, not follow. Every detail speaks in code: power, restraint, permanence. 
          </p>
          <p className="font-serif text-lg text-foreground leading-relaxed">
            This jacket is not fashion. 
            It is provenance. 
            An heirloom for the future. 
            A piece held, not consumed — safeguarded, not circulated. 
          </p>
          <p className="font-serif text-lg text-foreground leading-relaxed">
            Created for collectors who understand that true luxury isn't chased; it is earned and preserved. As seasons shift and masses move, this jacket remains a fixed point — rarer each year, more coveted with every whisper. 
          </p>
          <p className="font-serif text-lg text-foreground leading-relaxed">
            Only a handful will ever exist. 
            None will ever return. 
            Its worth rises because its presence refuses replication. 
          </p>
          <p className="font-serif text-lg text-foreground leading-relaxed">
            A relic of the moon. 
            A testament to those who live beyond trends — 
            They live in story. They live in legacy. 
          </p>
          <p className="font-serif text-lg text-foreground leading-relaxed font-bold">
            LIMITED EDITIONS by THEMOON 
            Not designed for everyone. 
            Designed for forever.
          </p>
        </div>
      </main>

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      <Footer />
    </div>
  );
};

export default Gallery;