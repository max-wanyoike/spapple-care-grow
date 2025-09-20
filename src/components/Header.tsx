import { useState, useEffect } from 'react';
import spappleLogo from '@/assets/spapple-logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity focus-visible"
            >
              <img 
                src={spappleLogo} 
                alt="Spapple Marketing" 
                className="h-17 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors font-medium focus-visible"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium focus-visible"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-foreground hover:text-primary transition-colors font-medium focus-visible"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium focus-visible"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus-visible min-touch-target"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium focus-visible"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium focus-visible"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium focus-visible"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium focus-visible"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;