
import React from 'react';
import { Shield, Brain, Code, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Python Development", level: 85 },
    { name: "AI/ML Integration", level: 75 },
    { name: "Cybersecurity Fundamentals", level: 70 },
    { name: "Log Analysis & SIEM", level: 80 },
    { name: "Privacy Engineering", level: 75 },
    { name: "System Architecture", level: 70 }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Privacy-First",
      description: "Building solutions that prioritize user privacy and data protection from the ground up."
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: "Local-First",
      description: "Creating applications that work offline and keep user data on their own devices."
    },
    {
      icon: <Code className="w-6 h-6 text-green-400" />,
      title: "Open Source",
      description: "Contributing to the community through transparent, auditable, and collaborative development."
    },
    {
      icon: <Users className="w-6 h-6 text-red-400" />,
      title: "Self-Driven",
      description: "Continuously learning and building real projects to demonstrate practical cybersecurity skills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a self-driven developer passionate about AI and cybersecurity, focused on creating technology that respects user privacy while delivering powerful functionality. With professional experience in GRC and IAM, I'm now building expertise in Python, AI integration, and security architecture through hands-on projects.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My work demonstrates practical applications of AI in cybersecurity through projects like HavenAI, ThreatLens, and Sentinel Copilot. I believe in learning by building—creating real tools that solve genuine security challenges while maintaining transparency and privacy.
            </p>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
            {values.map((value) => (
              <div key={value.title} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  {value.icon}
                  <h4 className="text-lg font-semibold text-white">{value.title}</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
