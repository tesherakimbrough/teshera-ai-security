
import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: "Self-Driven Learning & Development",
      company: "Personal Projects",
      period: "2023 - Present",
      description: "Currently self-training in cybersecurity and AI, building hands-on projects that demonstrate threat detection, log analysis, and secure development practices. Focus on privacy-first security tools and AI integration for SecOps."
    },
    {
      title: "AI & Cybersecurity Project Development",
      company: "Independent Work",
      period: "2023 - Present",
      description: "Developing practical security tools including HavenAI (local-first AI log analysis), ThreatLens (real-time monitoring), and Sentinel Copilot (AI-assisted log triage) to demonstrate real-world application of cybersecurity concepts."
    },
    {
      title: "GRC & IAM Analyst",
      company: "Professional Work",
      period: "2021 - 2022",
      description: "Conducted security audits and access reviews aligned with ISO 27001 and NIST 800-53. Maintained identity and access controls (IAM) using tools like Okta and Azure AD. Assisted in writing and reviewing GRC documentation for HIPAA and GDPR compliance. Worked with teams to assess third-party risk and enforce security policies."
    }
  ];

  const education = [
    {
      degree: "Self-Directed Cybersecurity & AI Training",
      school: "Online Learning & Hands-On Projects",
      year: "2023 - Present"
    }
  ];

  const skills = [
    "Python Development",
    "AI/ML Integration",
    "Log Analysis & SIEM",
    "Streamlit Applications",
    "Privacy-First Development",
    "Threat Detection",
    "Security Monitoring",
    "Local-First Applications",
    "Governance, Risk, and Compliance (GRC)",
    "Identity & Access Management (IAM)",
    "Security Audits",
    "Risk & Policy Documentation"
  ];

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience & Skills</h2>
          <p className="text-xl text-gray-400 mb-8">
            Self-driven learning journey focused on building practical cybersecurity and AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button className="border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-800 transition-all duration-200 flex items-center gap-2">
              <ExternalLink size={20} />
              View LinkedIn
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                    <span className="text-sm text-gray-400">{job.period}</span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">{job.company}</p>
                  <p className="text-gray-300 leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Learning Path</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-blue-400 font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Core Skills</h3>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-3">
                    <p className="text-gray-300 text-sm">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
