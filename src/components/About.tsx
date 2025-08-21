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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {labels.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {labels.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">
                  {labels.about.experience}
                </h3>
                <p className="text-gray-600">{labels.about.description}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg border-l-4 border-black">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <Heart className="w-5 h-5 text-black mr-2" />
                {labels.about.philosophy}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {labels.about.philosophyText}
              </p>
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <img
              src={images.about.dojo}
              alt="Dojo"
              className="relative rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;