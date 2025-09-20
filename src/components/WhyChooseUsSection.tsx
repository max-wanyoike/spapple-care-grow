import { CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Niche Expertise",
      description: "We work exclusively with adult care homes, so we understand your unique needs.",
    },
    {
      title: "Proven Results",
      description: "We focus on measurable outcomes — more calls, more tours, more residents.",
    },
    {
      title: "Personal Support",
      description: "We guide you every step of the way with clear communication and reliable service.",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Care Homes Choose Spapple
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 group"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-200" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;