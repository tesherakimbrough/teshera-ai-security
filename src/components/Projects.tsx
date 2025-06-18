
import React from 'react';
import { ExternalLink, Github, Shield, Brain, Terminal } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HavenAI Secure",
      description: "Local-first AI log analyzer that runs entirely in the browser. Detects suspicious log patterns using client-side AI models for security teams who value privacy.",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      tags: ["AI", "Privacy", "Security", "Local-First", "Frontend"],
      github: "https://github.com/tesherakimbrough/HavenAI",
      demo: "https://havenai-secure.lovable.app",
      status: "Active"
    },
    {
      title: "ThreatLens",
      description: "Real-time cybersecurity monitoring tool built with Streamlit. Parses and visualizes log files to simulate incident response and threat detection.",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      tags: ["Cybersecurity", "Monitoring", "Python", "Streamlit"],
      github: "https://github.com/tesherakimbrough/ThreatLens",
      demo: "https://threatlens.streamlit.app",
      status: "Active"
    },
    {
      title: "Security Log Analyzer",
      description: "A lightweight CLI-based tool for scanning logs and detecting anomalies. Early experiment in Python using regex and basic alerting logic.",
      icon: <Terminal className="w-8 h-8 text-purple-400" />,
      tags: ["Python", "CLI", "Logs", "Regex"],
      github: "https://github.com/tesherakimbrough/Security-Log-Analyzer",
      demo: null,
      status: "Archived"
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
                      : 'bg-gray-500/20 text-gray-400'
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
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
