import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'cyan',
      skills: [
        { name: 'Golang', level: 'Expert' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Python', level: 'Basic' },
        { name: 'Java', level: 'Basic' },
      ]
    },
    {
      title: 'Frontend',
      color: 'purple',
      skills: [
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'React.js', level: 'Intermediate' },
        { name: 'Vue.js', level: 'Intermediate' },
        { name: 'Angular.js', level: 'Basic' },
      ]
    },
    {
      title: 'Backend & Data',
      color: 'green',
      skills: [
        { name: 'TDD', level: 'Expert' },
        { name: 'Kinesis & SQS', level: 'Advanced' },
        { name: 'DynamoDB', level: 'Advanced' },
        { name: 'RabitMQ', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      color: 'yellow',
      skills: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'Infrastructure as Code', level: 'Advanced' },
        { name: 'CI/CD', level: 'Advanced' },
        { name: 'Datadog', level: 'Advanced' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Prometheus', level: 'Basic' },
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

  const getTagColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-600/20 text-green-400 border border-green-500/30';
      case 'Advanced':
        return 'bg-purple-600/20 text-purple-400 border border-purple-500/30';
      case 'Intermediate':
        return 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30';
      case 'Basic':
        return 'bg-gray-600/20 text-gray-300 border border-gray-500/30';
      default:
        return 'bg-gray-600/20 text-gray-300 border border-gray-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`bg-gray-900/50 border ${getColorClasses(
                category.color
              )} rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300`}
            >
              <h3
                className={`text-xl font-semibold mb-6 ${getColorClasses(
                  category.color
                )}`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white text-sm font-medium">
                      {skill.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${getTagColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Core Philosophy
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-cyan-400 font-mono">"</span>
              Strong expertise in distributed systems, event-driven
              architectures, and test-driven development. I focus on building
              scalable, resilient systems with clean architecture and
              infrastructure as code, ensuring alignment between technical
              excellence and business objectives.
              <span className="text-cyan-400 font-mono">"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
