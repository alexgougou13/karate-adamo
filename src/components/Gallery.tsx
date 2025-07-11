import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Labels } from '../data/labels';
import { images } from '../data/images';

interface GalleryProps {
  labels: Labels;
}

const Gallery: React.FC<GalleryProps> = ({ labels }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.gallery.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-full mx-auto animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:text-red-400 transition-colors cursor-default">
            {labels.gallery.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-white transition-colors">
            {labels.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.gallery.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1"
              onClick={() => openLightbox(index)}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredImage === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <span className="text-white text-xl">+</span>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-full p-4">
              <img
                src={images.gallery[selectedImage]}
                alt={`Gallery ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              <button
                onClick={closeLightbox}
                className="absolute -top-2 -right-2 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;