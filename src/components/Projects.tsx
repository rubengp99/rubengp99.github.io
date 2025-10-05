import React from 'react';
import { ExternalLink, Github, Star, GitBranch, Lock, Building2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Virtual Card Platform',
      company: "Cadana",
      description: 'Built and launched a comprehensive virtual card product with AML-focused fraud prevention rules, enhancing customer fund security and regulatory compliance.',
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Go', 'AWS', 'DynamoDB', 'Microservices', 'AML'],
      github: null,
      demo: null,
      stats: { stars: 'Fintech', forks: 'Production' },
      visibility: "private"
    },
    {
      title: 'Web3 Equity Investment',
      company: "Cadana",
      description: 'Delivered an end-to-end Web3 U.S. equity investment product, expanding fintech capabilities and bridging traditional finance with blockchain technology.',
      image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Go', 'Web3', 'AWS', 'Microservices', 'TDD'],
      github: null,
      demo: null,
      stats: { stars: 'Web3', forks: 'Live' },
      visibility: "private"
    },
    {
      title: 'Business Testing Framework',
      company: "Cadana",
      description: 'Developed and implemented a custom business testing framework standardized across microservices, improving code quality and reducing bugs in production.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Go', 'TDD', 'Microservices', 'Testing'],
      github: null,
      demo: null,
      stats: { stars: 'Framework', forks: 'Internal' },
      visibility: "private"
    },
    {
      title: 'AWS Cost Optimization',
      company: "Cadana",
      description: 'Optimized AWS infrastructure, cutting operational costs by 30% through DynamoDB optimization and architectural improvements while maintaining performance.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['AWS', 'DynamoDB', 'Infrastructure as Code', 'Cost Optimization'],
      github: null,
      demo: null,
      stats: { stars: '-30%', forks: 'Cost' },
      visibility: "private"
    },
    {
      title: "CRM Platform",
      company: "Somos Sistemas",
      description:
        "Built an intelligent CRM solution that unifies sales, finance, and inventory analytics — providing actionable insights and automated reports to optimize business performance.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Vuex", "Node.js", "MySQL", "Material UI"],
      github: "https://github.com/rubengp99/reporteador",
      demo: null,
      stats: { stars: "CRM", forks: "Public" },
      visibility: "public",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white posver-futuristic">Featured </span>
            <span className="text-yellow-500 posver-futuristic">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg">
            <span className="text-custom-cyan-600 font-mono">$</span> find ./projects -name "*.revolutionary"
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-custom-purple-600 to-cyan-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-900/90 border border-gray-700 rounded-lg overflow-hidden hover:border-custom-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="flex items-center bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    <Star className="text-yellow-500 mr-1" size={14} />
                    <span className="text-white">{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    <GitBranch className="text-custom-cyan-600 mr-1" size={14} />
                    <span className="text-white">{project.stats.forks}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Building2 size={14} className="mr-2 text-custom-purple-600" />
                  {project.company}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-black/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.visibility === "public" ? (
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 flex-1 justify-center"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-custom-purple-800 to-custom-cyan-700 hover:from-custom-cyan-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 flex-1 justify-center"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-gray-400 border border-gray-700 rounded-lg py-2 bg-black/40">
                    <Lock size={16} className="text-gray-500" />
                    <span className="text-sm">Private Project (No public access)</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/rubengp99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-custom-cyan-600 text-custom-cyan-600 rounded-lg hover:bg-custom-cyan-600 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            View Profile on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;