import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Spapple's ads helped us fill our home quickly. We had families calling within days of starting the campaign.",
      author: "Care Home Owner",
    },
    {
      text: "Our new website looks professional and makes it easy for families to reach us. We're proud to share it.",
      author: "Home Manager",
    },
    {
      text: "I was nervous about online marketing, but Spapple made it simple and effective. Highly recommend.",
      author: "Family Member",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Families & Homeowners Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary opacity-20" />
              </div>
              
              <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="text-right">
                <cite className="text-primary font-medium not-italic">
                  – {testimonial.author}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;