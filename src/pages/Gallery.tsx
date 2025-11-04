import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import lim1 from "@/assets/lim-1.png";
import lim2 from "@/assets/lim-2.png";
import lim3 from "@/assets/lim-3.png";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24">
        <h1 className="font-serif text-5xl md:text-6xl tracking-wide text-center mb-12">
          Limited Edition Asset Gallery
        </h1>
        
        <div className="text-center py-16">
          <p className="font-serif text-2xl text-foreground">Upcoming Gallery - Locked</p>
          <p className="font-serif text-lg text-muted-foreground mt-2">Please check back later for new content.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;