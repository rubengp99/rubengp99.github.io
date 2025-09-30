import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'cyan',
      skills: [
        { name: 'Golang', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'TypeScript', level: 90 }
      ]
    },
    {
      title: 'Frontend',
      color: 'purple',
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 90 }
      ]
    },
    {
      title: 'Backend & Data',
      color: 'green',
      skills: [
        { name: 'Microservices', level: 95 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 90 },
        { name: 'TDD', level: 92 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      color: 'yellow',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Docker', level: 90 },
        { name: 'Infrastructure as Code', level: 88 },
        { name: 'CI/CD', level: 90 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400',
      purple: 'border-purple-500/30 hover:border-purple-500/60 text-purple-400',
      green: 'border-green-500/30 hover:border-green-500/60 text-green-400',
      yellow: 'border-yellow-500/30 hover:border-yellow-500/60 text-yellow-400'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const getBarColor = (color: string) => {
    const barColorMap = {
      cyan: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
      purple: 'bg-gradient-to-r from-purple-500 to-purple-400',
      green: 'bg-gradient-to-r from-green-500 to-green-400',
      yellow: 'bg-gradient-to-r from-yellow-500 to-yellow-400'
    };
    return barColorMap[color as keyof typeof barColorMap];
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Technical </span>
            <span className="text-purple-400">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg">
            <span className="text-cyan-400 font-mono">$</span> ls -la /skills/
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className={`bg-gray-900/50 border ${getColorClasses(category.color)} rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300`}>
              <h3 className={`text-xl font-semibold mb-6 ${getColorClasses(category.color)}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getBarColor(category.color)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Core Philosophy</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-cyan-400 font-mono">"</span>
              Strong expertise in distributed systems, event-driven architectures, and test-driven development.
              I focus on building scalable, resilient systems with clean architecture and infrastructure as code,
              ensuring alignment between technical excellence and business objectives.
              <span className="text-cyan-400 font-mono">"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;