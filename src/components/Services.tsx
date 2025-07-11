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
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800'
    },
    {
      icon: Users,
      title: labels.services.intermediate.title,
      description: labels.services.intermediate.description,
      image: images.services.intermediate,
      color: 'from-green-500 to-green-700',
      hoverColor: 'hover:from-green-600 hover:to-green-800'
    },
    {
      icon: Trophy,
      title: labels.services.advanced.title,
      description: labels.services.advanced.description,
      image: images.services.advanced,
      color: 'from-yellow-500 to-yellow-700',
      hoverColor: 'hover:from-yellow-600 hover:to-yellow-800'
    },
    {
      icon: Baby,
      title: labels.services.kids.title,
      description: labels.services.kids.description,
      image: images.services.kids,
      color: 'from-purple-500 to-purple-700',
      hoverColor: 'hover:from-purple-600 hover:to-purple-800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-gray-50 to-red-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-red-500/5 rounded-full animate-float"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform cursor-default">
            {labels.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-800 transition-colors">
            {labels.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`service-card group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300"></div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.color} ${service.hoverColor} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <service.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>
              
              <div className="p-6 bg-white group-hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;