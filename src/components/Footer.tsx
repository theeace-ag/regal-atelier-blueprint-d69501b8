export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-muted/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground font-serif">
            <a 
              href="mailto:team@theeace-ag.com" 
              className="hover:text-accent transition-colors duration-300"
            >
              team@theeace-ag.com
            </a>
            <span className="hidden md:block">•</span>
            <a 
              href="/terms-of-service" 
              className="hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span className="hidden md:block">•</span>
            <a 
              href="/privacy-policy" 
              className="hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground font-serif tracking-wider">
            © {new Date().getFullYear()} THEMOON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
