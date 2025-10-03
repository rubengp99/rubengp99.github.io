import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1 h-3 bg-custom-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-40 w-3 h-1 bg-green-600 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-80 left-80 w-2 h-3 bg-custom-cyan-600 rounded-full animate-pulse delay-1500"></div>

        <div className="absolute top-40 right-20 w-1 h-3 bg-purple-600 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-80 right-60 w-2 h-3 bg-purple-600 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-60 right-80 w-2 h-3 bg-green-600 rounded-full animate-pulse delay-1500"></div>

        <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-600 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-60 left-80 w-3 h-3 bg-custom-cyan-700 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-80 left-40 w-2 h-3 bg-custom-purple-600 rounded-full animate-pulse delay-1000"></div>

        <div className="absolute bottom-20 right-40 w-3 h-3 bg-green-600 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-80 right-20 w-2 h-3 bg-custom-purple-600 rounded-full animate-pulse delay-1000"></div>

        <div className="absolute top-60 right-1/3 w-1 h-2 bg-custom-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 left-1/3 w-3 h-2 bg-custom-purple-600 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-60 right-1/3 w-3 h-2 bg-custom-purple-600 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <div className="inline-block p-4 border border-custom-purple-500/30 rounded-lg mb-6 bg-black/50 backdrop-blur-sm">
            <Terminal className="text-custom-purple-600" size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 posver-futuristic">
            <span className="text-white">Ruben D. Garcia</span>
            <br />
            <span className="bg-gradient-to-r from-custom-cyan-700 to-custom-purple-500 bg-clip-text text-transparent">
              Senior Software Engineer
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6">
            <span className="text-custom-cyan-600">$</span> whoami
            <br />
            <span className="font-mono text-purple-500">
              &gt; Building scalable distributed systems with Go & AWS
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <div className="text-gray-300 font-mono">
            <span className="text-custom-cyan-600">languages:</span> [Go, React.js, Vue.js, Node.js, TypeScript, Python]
          </div>
          <div className="text-gray-300 font-mono">
            <span className="text-purple-600">experience:</span> 5+ years
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/rubengp99"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-custom-cyan-600/50 rounded-lg hover:bg-custom-cyan-500/20 transition-all duration-300 transform hover:scale-110"
          >
            <Github className="text-custom-cyan-600" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rubengp99/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-purple-600/50 rounded-lg hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="text-purple-600" size={24} />
          </a>
          <a
            href="#contact"
            className="p-3 border border-green-500/50 rounded-lg hover:bg-green-500/20 transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="text-green-500" size={24} />
          </a>
        </div>

        <div className="mt-12">
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-gradient-to-r from-custom-purple-800 to-custom-cyan-700 rounded-lg text-white font-semibold hover:from-custom-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Initialize
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-custom-cyan-600/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;