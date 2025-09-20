const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold hover:opacity-80 transition-opacity focus-visible"
            >
              Spapple
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center space-x-8 mb-6 md:mb-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium focus-visible"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium focus-visible"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium focus-visible"
            >
              Contact
            </button>
          </nav>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Spapple Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;