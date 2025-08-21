import React from 'react';
import { Users, User, Trophy, Baby } from 'lucide-react';
import { Labels } from '../data/labels';
import { images } from '../data/images';

interface ServicesProps {
  labels: Labels;
}

const Services: React.FC<ServicesProps> = ({ labels }) => {
  const [visibleCards, setVisibleCards] = React.useState<number[]>([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: User,
      title: labels.services.beginner.title,
      description: labels.services.beginner.description,
      image: images.services.beginner,
      color: 'bg-black'
    },
    {
      icon: Users,
      title: labels.services.intermediate.title,
      description: labels.services.intermediate.description,
      image: images.services.intermediate,
      color: 'bg-gray-800'
    },
    {
      icon: Trophy,
      title: labels.services.advanced.title,
      description: labels.services.advanced.description,
      image: images.services.advanced,
      color: 'bg-gray-700'
    },
    {
      icon: Baby,
      title: labels.services.kids.title,
      description: labels.services.kids.description,
      image: images.services.kids,
      color: 'bg-gray-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {labels.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {labels.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`service-card group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 ${service.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;