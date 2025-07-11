import React from 'react';
import { Award, Heart, Target } from 'lucide-react';
import { Labels } from '../data/labels';
import { images } from '../data/images';

interface AboutProps {
  labels: Labels;
}

const About: React.FC<AboutProps> = ({ labels }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:text-red-600 transition-colors cursor-default">
            {labels.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed hover:text-gray-800 transition-colors">
            {labels.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-red-500/50 transition-all duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                  {labels.about.experience}
                </h3>
                <p className="text-gray-600">{labels.about.description}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 border-l-4 border-red-500 hover:border-yellow-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5 text-red-600 mr-2" />
                {labels.about.philosophy}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {labels.about.philosophyText}
              </p>
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-lg blur-lg animate-pulse"></div>
            <img
              src={images.about.dojo}
              alt="Dojo"
              className="relative rounded-lg shadow-xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl hover:rotate-12 transition-transform duration-300 cursor-pointer">
              <Target className="w-16 h-16 text-white animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;