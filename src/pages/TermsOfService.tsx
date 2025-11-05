import { Footer } from "@/components/Footer";
import { Navigation as Header } from "@/components/Navigation";

const TermsOfService = () => {
  return (
    <div className="bg-royal-black text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-6 min-h-screen pt-24">
        <h1 className="text-4xl font-serif text-accent mb-8">Terms of Service</h1>
        <div className="prose prose-invert text-card-foreground">
          <p>
            Welcome to THEMOON. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By using THEMOON's website and services, you signify your acceptance of these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">2. Changes to Terms</h2>
          <p>
            THEMOON reserves the right to modify or replace these Terms at any time. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">3. Privacy Policy</h2>
          <p>
            Your use of THEMOON is also governed by our Privacy Policy, which is incorporated into these Terms by this reference. Please review our Privacy Policy to understand our practices.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            All content on this site, including text, graphics, logos, images, and software, is the property of THEMOON or its content suppliers and protected by international copyright laws.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            THEMOON shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at team@theeace-ag.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;