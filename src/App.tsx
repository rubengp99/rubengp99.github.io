import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ParallaxWrapper from './components/ParallaxWrapper'

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="relative">
        {/* Background Matrix Effect */}
        <div className="fixed inset-0 opacity-10">
          <div className="matrix-bg"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <ParallaxWrapper backgroundVideo='parallax' fallbackImage="parallax.png">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </ParallaxWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;