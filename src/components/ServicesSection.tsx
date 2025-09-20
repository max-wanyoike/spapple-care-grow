import { Globe, Target, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Creation",
      description: "Clean, professional websites that build trust and show families why your home is the right choice.",
    },
    {
      icon: Target,
      title: "Lead Generation Ads",
      description: "Facebook and Google ads designed to reach families in your community who are actively searching for care.",
    },
    {
      icon: Search,
      title: "SEO & Google Visibility",
      description: "Make sure your home shows up when people search \"care homes near me\" with search engine optimization.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                    <IconComponent className="w-10 h-10 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;