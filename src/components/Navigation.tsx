import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ruben_D_Garcia_Software_Engineer.pdf';
    link.download = 'Ruben_D_Garcia_Software_Engineer';
    link.click();
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-custom-cyan-600/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-custom-cyan-700 to-purple-600 bg-clip-text text-transparent">
              &lt;rubengp99&gt;
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-custom-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-custom-cyan-600"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleDownloadCV}
                className="ml-4 bg-gradient-to-r from-custom-cyan-800 to-purple-600 hover:from-custom-cyan-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-custom-cyan-500/30">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-custom-cyan-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="w-full bg-gradient-to-r from-custom-cyan-800 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-medium flex items-center justify-center gap-2 mt-4"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;