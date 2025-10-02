import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white posver-futuristic">Education & </span>
            <span className="text-custom-cyan-600 posver-futuristic">Languages</span>
          </h2>
          <p className="text-gray-300 text-lg">
            <span className="text-custom-cyan-600 font-mono">$</span> cat ~/.education
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-custom-purple-600 to-cyan-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 hover:border-custom-cyan-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-custom-purple-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Engineer's Degree in Systems Engineering</h3>
                <h4 className="text-lg text-custom-cyan-600 mb-3">Universidad de Margarita (UNIMAR)</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-gray-500" />
                    <span>Jul 2015 - May 2020</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-gray-500" />
                    <span>Nueva Esparta, Venezuela</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Spanish</span>
                  <span className="text-gray-300 text-sm">Native Speaker</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-2 rounded-full bg-gradient-to-r from-custom-purple-600 to-custom-cyan-600" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">English</span>
                  <span className="text-gray-300 text-sm">Highly Proficient</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-2 rounded-full bg-gradient-to-r from-custom-purple-500 to-custom-purple-400" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
