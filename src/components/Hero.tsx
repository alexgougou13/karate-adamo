import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Labels } from '../data/labels';
import { images } from '../data/images';

interface HeroProps {
  labels: Labels;
}

const Hero: React.FC<HeroProps> = ({ labels }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${images.hero.background})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className={`relative z-10 text-center text-white px-6 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
          {labels.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 font-medium">
          {labels.hero.subtitle}
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-400">
          {labels.hero.description}
        </p>
        <button
          onClick={scrollToAbout}
          className="group relative inline-flex items-center space-x-2 bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <span>{labels.hero.cta}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;