import React, { useState } from 'react';
import { labels } from './data/labels';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<string>('el');

  const currentLabels = labels[language];

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="min-h-screen">
      <Header 
        labels={currentLabels} 
        language={language} 
        onLanguageChange={handleLanguageChange} 
      />
      <Hero labels={currentLabels} />
      <About labels={currentLabels} />
      <Services labels={currentLabels} />
      <Gallery labels={currentLabels} />
      <Location labels={currentLabels} />
      <Contact labels={currentLabels} />
      <Footer labels={currentLabels} />
    </div>
  );
}

export default App;