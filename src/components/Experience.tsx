import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Career Break & Freelancing',
      company: 'N/A',
      location: 'Nueva Esparta, Venezuela',
      period: 'Dec 2024 - Present',
      description: 'Career break to focus on physical & mental health as well as finding passions outside of the tech world for a couple of months. Currently exploring new career opportunities.',
      achievements: [],
      technologies: []
    },
    {
      title: 'Lead Engineer (Full-Time)',
      company: 'Cadana',
      location: 'Nueva Esparta, Venezuela (Remote)',
      period: 'Jun 2021 - Dec 2024',
      description: 'Led engineering initiatives at a fintech startup, driving technical excellence and delivering innovative financial products.',
      achievements: [
        'Optimized AWS usage, cutting costs by 30% through DynamoDB and architecture improvements',
        'Developed and implemented a custom business testing framework standardized across microservices',
        'Mentored junior engineers and ensured alignment between technical initiatives and business goals through stakeholder collaboration',
        'Built and launched a virtual card product with AML-focused rules, enhancing fraud prevention and customer fund security',
        'Delivered an end-to-end Web3 U.S. equity investment product, expanding the company\'s fintech capabilities'
      ],
      technologies: ['Go', 'Vue.js', 'Python', 'Node.js', 'AWS', 'S3', 'Kinesis', 'Lambda', 'IaC', 'TDD', 'CI/CD']
    },
    {
      title: 'Software Engineer (Full-Time)',
      company: 'Esusu',
      location: 'Nueva Esparta, Venezuela (Remote)',
      period: 'May 2020 - Jun 2021',
      description: 'Developed scalable solutions for fintech platform focused on rent reporting and credit building.',
      achievements: [
        'Automated rent data ingestion from 4 real estate platforms, streamlining monthly reporting',
        'Developed internal messaging platform to improve customer communications and campaigns',
        'Built an MVP admin UI, reducing operations\' reliance on developers',
        'Hardened platform resiliency with retry flows and optimized MongoDB cluster usage'
      ],
      technologies: ['Go', 'React.js', 'Node.js', 'MongoDB', 'TypeScript', 'AWS', 'S3', 'Kinesis', 'Lambda', 'IaC']
    },
    {
      title: 'Project Manager (Contract)',
      company: 'Somos Sistemas',
      location: 'Nueva Esparta, Venezuela (Remote)',
      period: 'Feb 2020 - Aug 2020',
      description: 'Led cloud migration and product development initiatives for ERP solutions.',
      achievements: [
        'Managed Trello/Jira boards and configured core hosting rules, streamlining operations and ensuring product performance',
        'Directed cloud migration from on-premises to cloud hosting, improving scalability, reliability, and maintenance',
        'Led the team to design and implement a CRM extension of the ERP product in 2 months, enabling organization-wide business intelligence and accelerating data-driven decision-making'
      ],
      technologies: ['Vue.js', 'Node.js', 'TypeScript', 'MySQL', 'Project Management', 'Cloud Migration', 'ERP', 'CRM']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Career </span>
            <span className="text-green-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">
            <span className="text-cyan-400 font-mono">$</span> git log --oneline --graph
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-green-400 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black hidden md:block"></div>
                
                <div className="md:ml-16 bg-gray-900/50 border border-gray-700 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-cyan-400 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:text-right space-y-1">
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  {exp.achievements.length > 0 &&
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <TrendingUp className="mr-2 text-green-400" size={20} />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start">
                            <span className="text-cyan-400 mr-3 mt-1">⭐</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }

                  {exp.technologies.length > 0 &&
                    <div>
                      <h5 className="text-white font-semibold mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-black/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">What's Next?</h3>
            <p className="text-gray-300 text-lg">
              Always looking for the next challenge to push the boundaries of technology 
              and create solutions that make a real difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;