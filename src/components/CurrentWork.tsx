
import React from 'react';
import { Code, Shield, Brain, Zap } from 'lucide-react';

const CurrentWork = () => {
  const currentProjects = [
    {
      title: "HavenAI Secure v2.0",
      description: "Enhancing local-first log analysis with advanced AI pattern recognition and real-time threat detection capabilities.",
      icon: Shield,
      status: "In Development",
      progress: 75
    },
    {
      title: "Security Automation Framework",
      description: "Building reusable Python modules for automating security workflows and compliance reporting across multiple platforms.",
      icon: Zap,
      status: "Research Phase",
      progress: 30
    },
    {
      title: "AI Security Research",
      description: "Exploring machine learning applications for zero-day vulnerability detection and behavioral analysis.",
      icon: Brain,
      status: "Active Research",
      progress: 60
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to security-focused open source projects and sharing knowledge through technical blog posts.",
      icon: Code,
      status: "Ongoing",
      progress: 85
    }
  ];

  return (
    <section id="current-work" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Currently Working On</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of AI and cybersecurity through hands-on projects and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <project.icon size={24} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'In Development' ? 'bg-green-600/20 text-green-400' :
                    project.status === 'Research Phase' ? 'bg-yellow-600/20 text-yellow-400' :
                    project.status === 'Active Research' ? 'bg-blue-600/20 text-blue-400' :
                    'bg-purple-600/20 text-purple-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-gray-300">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
