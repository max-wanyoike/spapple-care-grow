const CTABanner = () => {
  const handleBookCall = () => {
    // Calendly integration would go here
    console.log('Book a Free Call clicked from CTA Banner');
    // For now, scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-gradient py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8 text-balance">
            Ready to Grow Your Care Home? Let's Talk.
          </h2>
          
          <button 
            onClick={handleBookCall}
            className="btn-secondary bg-primary-foreground text-primary hover:bg-background hover:text-primary min-touch-target text-xl px-12 py-6"
          >
            Book a Free Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;