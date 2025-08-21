import React from "react";
import { Languages, Menu, X, Zap } from "lucide-react";
import { Labels } from "../data/labels";

interface HeaderProps {
  labels: Labels;
  language: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  labels,
  language,
  onLanguageChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <img 
              src="/logo.jpg" 
              alt="ΑΘΩΣ Karate School Logo" 
              className="h-16 w-16 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="relative text-gray-800 hover:text-black transition-all duration-300 hover:scale-110 font-medium group"
            >
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
              {labels.navigation.home}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-black transition-colors font-medium"
            >
              {labels.navigation.about}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-800 hover:text-black transition-colors font-medium"
            >
              {labels.navigation.services}
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-800 hover:text-black transition-colors font-medium"
            >
              {labels.navigation.gallery}
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-gray-800 hover:text-black transition-colors font-medium"
            >
              {labels.navigation.location}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-800 hover:text-black transition-colors font-medium"
            >
              {labels.navigation.contact}
            </button>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Languages className="w-4 h-4 text-gray-800" />
              <button
                onClick={() =>
                  onLanguageChange(language === "el" ? "en" : "el")
                }
                className="text-sm text-gray-800 hover:text-black transition-colors font-medium"
              >
                {language === "el"
                  ? labels.language.english
                  : labels.language.greek}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-300">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-800 hover:text-black transition-colors text-left font-medium"
              >
                {labels.navigation.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-800 hover:text-black transition-colors text-left font-medium"
              >
                {labels.navigation.about}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-800 hover:text-black transition-colors text-left font-medium"
              >
                {labels.navigation.services}
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-800 hover:text-black transition-colors text-left font-medium"
              >
                {labels.navigation.gallery}
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-gray-800 hover:text-black transition-colors text-left font-medium"
              >
                {labels.navigation.location}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-800 hover:text-black transition-colors text-left font-medium"
              >
                {labels.navigation.contact}
              </button>

              <div className="flex items-center space-x-2 pt-2 border-t border-gray-300">
                <Languages className="w-4 h-4 text-gray-800" />
                <button
                  onClick={() =>
                    onLanguageChange(language === "el" ? "en" : "el")
                  }
                  className="text-sm text-gray-800 hover:text-black transition-colors font-medium"
                >
                  {language === "el"
                    ? labels.language.english
                    : labels.language.greek}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
