import React from 'react';
import { ExternalLink, Github, Shield, Brain, Terminal, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HavenAI Secure",
      description: "Local-first AI log analyzer that runs entirely in the browser. Detects suspicious log patterns using client-side AI models, ensuring complete data privacy for security teams.",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      tags: ["AI", "Privacy", "Security", "Local-First", "Frontend"],
      github: "https://github.com/tesherakimbrough/HavenAI",
      demo: "https://havenai-secure.lovable.app",
      status: "Active"
    },
    {
      title: "ThreatLens",
      description: "Real-time log monitoring with Streamlit. Parses and visualizes log files for incident response and threat detection workflows.",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      tags: ["Cybersecurity", "Monitoring", "Python", "Streamlit"],
      github: "https://github.com/tesherakimbrough/ThreatLens",
      demo: "https://threatlens-demo.streamlit.app/",
      status: "Active"
    },
    {
      title: "Loglings Cozy Security Adventures",
      description: "A cozy cybersecurity adventure game that helps players learn log analysis through story-driven exploration and friendly characters.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      tags: ["Education", "Security", "Interactive", "Learning"],
      github: "https://github.com/tesherakimbrough/loglings-cozy-security-adventures",
      demo: "https://loglings-cozy-security-adventures.lovable.app/",
      status: "Active"
    },
    {
      title: "Sentinel Copilot",
      description: "AI-assisted log triage tool using Python and Streamlit. Offers mock summaries and pattern detection to help analysts identify critical patterns efficiently.",
      icon: <Terminal className="w-8 h-8 text-purple-400" />,
      tags: ["AI", "SecOps", "Python", "Streamlit", "Log Analysis"],
      github: "https://github.com/tesherakimbrough/Sentinel-Copilot",
      demo: null,
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Security tools and applications demonstrating AI integration and cybersecurity expertise, built to solve real-world challenges.
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
                      : project.status === 'In Progress'
                      ? 'bg-blue-500/20 text-blue-400'
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
