import React from 'react';
import { Code, Zap, Shield, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-cyan-400">About</span>
            <span className="text-white"> the_dev</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-lg text-gray-300 leading-relaxed">
              <p className="mb-4">
                <span className="text-cyan-400 font-mono">class</span>
                <span className="text-white"> LeadEngineer </span>
                <span className="text-cyan-400 font-mono">extends</span>
                <span className="text-green-400"> TechLeader </span>
                <span className="text-gray-400">{"{"}</span>
              </p>
              <p className="ml-4 mb-4">
                Seasoned software engineer with 5+ years of experience specializing in Go and AWS.
                I bring strong expertise in distributed systems, event-driven architectures, test-driven
                development, CI/CD, and Infrastructure as Code.
              </p>
              <p className="ml-4 mb-4">
                With proven leadership and ownership skills, I've optimized cloud infrastructure,
                mentored engineering teams, and delivered innovative fintech products. Previous exposure
                includes fast-paced startups, full-stack development, and expertise with both SQL and NoSQL databases.
              </p>
              <p className="text-gray-400">{"}"}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/60 transition-all duration-300">
              <Code className="text-cyan-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2">Distributed Systems</h3>
              <p className="text-gray-400 text-sm">Building scalable microservices architectures</p>
            </div>
            
            <div className="bg-black/50 border border-purple-500/30 rounded-lg p-6 text-center hover:border-purple-500/60 transition-all duration-300">
              <Zap className="text-purple-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-400 text-sm">AWS optimization and cost reduction</p>
            </div>
            
            <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 text-center hover:border-green-500/60 transition-all duration-300">
              <Shield className="text-green-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2">Test-Driven Dev</h3>
              <p className="text-gray-400 text-sm">Custom testing frameworks and TDD practices</p>
            </div>
            
            <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-500/60 transition-all duration-300">
              <Cpu className="text-yellow-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2">Leadership</h3>
              <p className="text-gray-400 text-sm">Mentoring teams and driving technical initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;