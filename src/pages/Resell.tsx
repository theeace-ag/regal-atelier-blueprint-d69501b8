import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import DailyPriceIncrease from "@/components/DailyPriceIncrease";
import resellImage from "@/assets/resell.jpg";
import limBg from "@/assets/lim-bg.jpg";

const Resell = () => {
  // Set target date to December 1, 2025
  const resellOpenDate = new Date('2025-12-01T00:00:00');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Statement */}
      <section className="pt-32 pb-16 bg-royal-black relative texture-overlay">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Limited Edition Asset
            </p>
            <h1 className="font-serif text-5xl md:text-7xl tracking-wide text-primary-foreground mb-8">
              Purchase & Resell Opens December
            </h1>
            <p className="font-serif text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Selected previously-owned pieces will be released through THEMOON's curated resell program. Each item is inspected and accompanied by a full provenance packet.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Countdown */}
      <section className="py-24 bg-royal-black-alt relative texture-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${limBg})` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-center mb-12 tracking-wide">
              Opening In
            </h2>
            <CountdownTimer targetDate={resellOpenDate} />
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Resale Access Section */}
      <section className="py-24 bg-royal-black relative texture-overlay">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-6 tracking-wide">
              Prepare for Purchase & Resell Access
            </h2>
            <p className="font-serif text-card-foreground leading-relaxed text-lg mb-12">
              Be ready when the curated resale and purchase program opens in December. Each piece's value has appreciated and comes with full authentication and provenance documentation.
            </p>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-elegant mb-8">
              <img 
                src={resellImage} 
                alt="Resale Value Appreciation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center mb-12">
              <DailyPriceIncrease />

            </div>
            <p className="font-serif text-card-foreground text-lg mb-8 font-bold">
              Check back in December to explore available pieces and their current market values.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Resale Mechanics */}
      <section className="py-24 bg-royal-black-alt relative texture-overlay">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl mb-12 tracking-wide text-center">
              The Resale Process
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="bg-card p-8 border border-muted/20 shadow-elegant">
                  <h3 className="font-serif text-xl tracking-wider uppercase mb-4 text-accent">
                    Authentication
                  </h3>
                  <p className="font-serif text-card-foreground leading-relaxed">
                    Every resale piece undergoes rigorous inspection by THEMOON specialists. We verify serial numbers, assess condition, and confirm provenance documentation before listing.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card p-8 border border-muted/20 shadow-elegant">
                  <h3 className="font-serif text-xl tracking-wider uppercase mb-4 text-accent">
                    Provenance Transfer
                  </h3>
                  <p className="font-serif text-card-foreground leading-relaxed">
                    All transactions include official provenance transfer documentation. New owners receive updated certificates with complete ownership history and authenticity guarantees.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card p-8 border border-muted/20 shadow-elegant">
                  <h3 className="font-serif text-xl tracking-wider uppercase mb-4 text-accent">
                    Curated Selection
                  </h3>
                  <p className="font-serif text-card-foreground leading-relaxed">
                    Only pieces meeting our strict condition standards are approved for resale. Each listing includes detailed condition reports and high-resolution imagery.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card p-8 border border-muted/20 shadow-elegant">
                  <h3 className="font-serif text-xl tracking-wider uppercase mb-4 text-accent">
                    Collector Network
                  </h3>
                  <p className="font-serif text-card-foreground leading-relaxed">
                    Access to resale listings is granted exclusively to registered collectors. This ensures pieces remain within the THEMOON collector community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Private Viewing */}
      <section className="py-24 bg-royal-black relative texture-overlay">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl mb-6 tracking-wide">
              Request Private Viewing
            </h3>
            <p className="font-serif text-card-foreground leading-relaxed mb-8">
              For serious collectors, we offer private appointments to view resale pieces in person at our atelier.
            </p>
            <a 
              href="mailto:team@theeace-ag.com?subject=Private Viewing Request" 
              className="text-accent hover:underline font-serif tracking-wider text-lg"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-royal-gold/20 my-0" />

      {/* Commission Information */}
      <section className="py-16 bg-royal-black-alt relative texture-overlay border-t border-muted/20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transform rotate-180"
          style={{ backgroundImage: `url(${limBg})` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl mb-8 tracking-wide text-center">
              Transparent Pricing
            </h3>
            <div className="bg-card p-8 border border-muted/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-2">
                    Seller Commission
                  </p>
                  <p className="text-3xl font-serif text-card-foreground">15%</p>
                </div>
                <div>
                  <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-2">
                    Buyer Fee
                  </p>
                  <p className="text-3xl font-serif text-card-foreground">5%</p>
                </div>
                <div>
                  <p className="font-serif text-xs tracking-[0.3em] uppercase text-accent mb-2">
                    Authentication
                  </p>
                  <p className="text-3xl font-serif text-card-foreground">Included</p>
                </div>
              </div>
              <p className="font-serif text-sm text-muted-foreground text-center mt-6">
                All fees include authentication, provenance transfer, and secure shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resell;
