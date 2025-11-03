export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-muted/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="mailto:inquire@themoon.brand" 
              className="hover:text-accent transition-colors duration-300"
            >
              inquire@themoon.brand
            </a>
            <span className="hidden md:block">•</span>
            <a 
              href="#" 
              className="hover:text-accent transition-colors duration-300"
            >
              Terms
            </a>
            <span className="hidden md:block">•</span>
            <a 
              href="#" 
              className="hover:text-accent transition-colors duration-300"
            >
              Privacy
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
