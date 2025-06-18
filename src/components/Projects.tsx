
import React from 'react';
import { ExternalLink, Github, Shield, Brain, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HavenAI",
      description: "Privacy-first AI assistant that runs entirely on your device, ensuring your conversations never leave your computer.",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      tags: ["AI", "Privacy", "Local-First", "Python"],
      github: "https://github.com/tesherak/havenai",
      demo: "https://havenai.demo.link",
      status: "Active"
    },
    {
      title: "ThreatLens",
      description: "Advanced cybersecurity monitoring tool that provides real-time threat detection and analysis for enterprise networks.",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      tags: ["Cybersecurity", "Monitoring", "Enterprise", "Real-time"],
      github: "https://github.com/tesherak/threatlens",
      demo: "https://threatlens.demo.link",
      status: "Active"
    },
    {
      title: "SecureVision",
      description: "Computer vision security system with edge computing capabilities for privacy-preserving surveillance solutions.",
      icon: <Eye className="w-8 h-8 text-green-400" />,
      tags: ["Computer Vision", "Edge Computing", "Security", "Privacy"],
      github: "https://github.com/tesherak/securevision",
      demo: "https://securevision.demo.link",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in AI and cybersecurity, focusing on privacy-first and secure solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                {project.icon}
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
