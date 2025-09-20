import careHomeImage from '@/assets/care-home-exterior.jpg';

const ResultsSection = () => {
  const handleSeeHow = () => {
    // Scroll to contact section or open calendly
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="results" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Results
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={careHomeImage} 
                alt="Beautiful adult care home exterior with professional landscaping" 
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-soft">
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                "In just 2 weeks, [Client Name] received 12 new inquiries and booked 3 new residents through our campaigns. With one new placement worth over $3,000 per month, their ads paid for themselves in the first week."
              </blockquote>
              
              <div className="text-center">
                <button 
                  onClick={handleSeeHow}
                  className="btn-primary min-touch-target"
                >
                  See How We Can Help You
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;