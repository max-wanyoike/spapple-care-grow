import heroImage from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const handleBookCall = () => {
    // Calendly integration would go here
    console.log('Book a Free Call clicked');
    // For now, scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Welcoming adult care home interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-white">
            Helping Adult Care Homes Get More Residents
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-balance opacity-95">
            We design websites and run targeted ads that connect care homeowners with families looking for safe, welcoming homes.
          </p>
          
          <button 
            onClick={handleBookCall}
            className="btn-primary text-xl px-12 py-6 min-touch-target bg-background text-primary hover:bg-primary-foreground hover:text-primary transform hover:scale-105 transition-all duration-200"
          >
            Book a Free Call
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;