import React from 'react';
import { Labels } from '../data/labels';

interface FooterProps {
  labels: Labels;
}

const Footer: React.FC<FooterProps> = ({ labels }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">空</span>
            </div>
            <span className="text-xl font-bold">
              {labels.hero.title}
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              {labels.footer.copyright} {labels.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;