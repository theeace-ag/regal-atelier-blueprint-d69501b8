import { Footer } from "@/components/Footer";
import { Navigation as Header } from "@/components/Navigation";

const PrivacyPolicy = () => {
  return (
    <div className="bg-royal-black text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-6 min-h-screen pt-24">
        <h1 className="text-4xl font-serif text-accent mb-8">Privacy Policy</h1>
        <div className="prose prose-invert text-card-foreground">
          <p>
            At THEMOON, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website themoon.brand, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">1. Collection of Your Information</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <h3 className="text-xl font-serif text-accent mt-6 mb-3">Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
          </p>
          <h3 className="text-xl font-serif text-accent mt-6 mb-3">Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
            <li>Increase the efficiency and operation of the Site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          </ul>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <h3 className="text-xl font-serif text-accent mt-6 mb-3">By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>
          <h3 className="text-xl font-serif text-accent mt-6 mb-3">Third-Party Service Providers</h3>
          <p>
            We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
          <h2 className="text-2xl font-serif text-accent mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at team@theeace-ag.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;