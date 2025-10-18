import React from 'react';
import {
  Calendar,
  MapPin,
  TrendingUp,
  Zap,            // ⚡ Optimized
  FlaskConical,   // 🧪 Testing framework
  Users,          // 🤝 Mentorship
  CreditCard,     // 💳 Virtual card
  Globe,          // 🌐 Web3 equity product
  RefreshCw,      // 🔄 Automated ingestion
  MessageSquare,  // 💬 Messaging platform
  Wrench,         // 🛠️ Admin UI
  ShieldCheck,    // 🛡️ Resiliency
  ClipboardList,  // 📋 Trello/Jira management
  Rocket,          // 🚀 CRM/ERP extension
  Eye,
  ExternalLink
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Lead Engineer (Full-Time)',
      company: (<><a href="https://cadanapay.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Cadana <ExternalLink size={16} /></a></>),
      location: 'Remote',
      period: 'Jun 2021 - Feb 2025',
      description: 'Led engineering initiatives at a fintech startup, driving technical excellence and delivering high-impact financial products.',
      summary: [
        { icon: Zap, text: 'Cut AWS infrastructure costs by 30% through DynamoDB redesign, lifecycle management, and leveraging Graviton (ARM) Lambda functions' },
        { icon: FlaskConical, text: 'Reduced core microservice response times by 20–70% using structured concurrency patterns and Go performance optimizations' },
        { icon: Users, text: 'Mentored 2 engineers, establishing best practices in observability, distributed tracing, and performance profiling' },
        { icon: CreditCard, text: 'Launched virtual card and Web3 equity investing products, handling thousands of concurrent transactions with AML compliance, increasing platform assets, wallet top-ups, and customer retention' },
        { icon: Globe, text: 'Developed a custom Go-based integration testing framework across 30+ microservices, cutting release times by 40%' },
        { icon: Eye, text: 'Enhanced system observability and incident response with PagerDuty, CloudWatch metrics, and structured logging pipelines' }
      ],
      technologies: ['Golang', 'Python', 'JavaScript', 'NodeJS', 'TypeScript', 'VueJS', 'AWS (Lambda, S3, SNS, SQS, Kinesis, DynamoDB, Athena, CloudFormation, EC2)', 'Docker', 'VueJS', 'PostgreSQL', 'RDS', 'GitHub Actions', 'Zappier']
    },
    {
      title: 'Software Engineer (Full-Time)',
      company: (<><a href="https://esusurent.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Esusu <ExternalLink size={16} /></a></>),
      location: 'Remote',
      period: 'May 2020 - Jun 2021',
      description: 'Developed scalable backend and admin solutions for a fintech platform focused on rent reporting and credit building.',
      summary: [
        { icon: RefreshCw, text: 'Accelerated monthly rent data reporting by 40% through automated ingestion pipelines across 4+ real estate APIs' },
        { icon: MessageSquare, text: 'Built an automated backend messaging platform, reducing operational effort by 90% and increasing overall customer engagement from low levels to hundreds of interactions' },
        { icon: Wrench, text: 'Developed a React-based MVP admin UI, cutting operations’ dependency on developers for multiple routine tasks' },
        { icon: ShieldCheck, text: 'Improved platform resiliency with queue-based retry flows, exponential backoff, and optimized MongoDB cluster usage' }
      ],
      technologies: ['Golang', 'JavaScript', 'NodeJS', 'TypeScript', 'ReactJS', 'AWS (Lambda, S3, SNS, SQS, CloudFormation, EC2, Lex)', 'Docker', 'MongoDB', 'PostgreSQL', 'GitHub Actions']
    },
    {
      title: 'Project Manager & DevOps Engineer (Part-Time)',
      company: (<><a href="https://somossistemas.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Somos Sistemas <ExternalLink size={16} /></a></>),
      location: 'Hybrid, Venezuela',
      period: 'Sep 2019 - May 2020',
      description: 'Led cloud migration and ERP product development initiatives, improving deployment efficiency and database management.',
      summary: [
        { icon: ClipboardList, text: 'Cut deployment and client onboarding time by 50% and improved database update pipelines by implementing self-hosted tenancy management in a centralized VPC environment' },
        { icon: Rocket, text: 'Delivered a CRM analytics module within 8 weeks, enabling organization-wide KPI tracking and sales forecasting' }
      ],
      technologies: ['Golang', 'NGINX', 'Docker', 'NodeJS', 'TypeScript', 'VueJS', 'MongoDB', 'PostgreSQL', 'RDS', 'GitHub Actions']
    }
  ];


  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white posver-futuristic">Career </span>
            <span className="text-green-500 posver-futuristic">Journey</span>
          </h2>
          <p className="text-gray-300 text-lg">
            <span className="text-custom-cyan-600 font-mono">$</span> git log --oneline --graph
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-custom-purple-600 to-cyan-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-custom-cyan-600 via-custom-purple-600 to-green-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-custom-purple-600 to-custom-purple-500 rounded-full border-4 border-black hidden md:block"></div>

                <div className="md:ml-16 bg-gray-900/50 border border-gray-700 rounded-lg p-8 hover:border-custom-purple-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-custom-cyan-700 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:text-right space-y-1">
                      <div className="flex items-center text-gray-300">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  {exp.summary.length > 0 &&
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <TrendingUp className="mr-2 text-green-500" size={20} />
                        Summary
                      </h5>
                      <ul className="space-y-3">
                        {exp.summary.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start">
                            <achievement.icon size={18} className="mr-2 text-custom-gray-300 shrink-0" />
                            <span>{achievement.text}</span>
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
                            className="px-3 py-1 bg-black/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-custom-purple-500 hover:text-custom-purple-500 transition-all duration-300"
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

        {/* Closing CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-custom-purple-600/10 to-custom-purple-500/10 border border-custom-purple-500/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">What's Next?</h3>
            <p className="text-gray-300 text-lg">
              Always seeking bold challenges that push me to innovate and grow. I’m driven to build technology that scales, endures, and truly makes a difference — one system, one idea, one impact at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
