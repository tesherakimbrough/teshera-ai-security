import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const pdfUrl = '/teshera-kimbrough-ai-resume.pdf';
  
  const handleDownloadPDF = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const experience = [
    {
      title: "AI & Cybersecurity Project Development",
      company: "Independent Work",
      period: "Jun 2025 - Present",
      description: "Building self-driven projects focused on solving real-world cybersecurity challenges using AI and automation. Developed tools including HavenAI Secure (local-first log analysis), ThreatLens (real-time monitoring), and Sentinel Copilot (AI-assisted log triage). These projects demonstrate privacy-first design, secure development practices, and practical SecOps applications."
    },
    {
      title: "GRC Analyst",
      company: "Wellstar Health System",
      period: "Jun 2024 - Mar 2025",
      description: "Conducted third-party vendor audits and HIPAA/NIST compliance reviews. Automated GRC reports with Python, Google Sheets, and Tableau. Delivered dashboards and workflows that increased reporting accuracy and speed."
    },
    {
      title: "Technology Operations Analyst",
      company: "Wells Fargo",
      period: "Nov 2022 - Jun 2024",
      description: "Managed IAM and SoD controls across 20+ internal apps. Automated ServiceNow RBAC workflows. Partnered with security engineers on policy design for audit readiness."
    },
    {
      title: "Cybersecurity Analyst",
      company: "BlueLine Technologies",
      period: "Sep 2021 - Apr 2022",
      description: "Responded to alerts, triaged endpoint issues, and reviewed IDS logs. Created Python scripts for custom Splunk parsing. Supported SOC team with threat detection and documentation."
    },
    {
      title: "Technical Support Advisor",
      company: "Apple",
      period: "Jun 2017 - Aug 2021",
      description: "Provided tier 1 and 2 support for Apple hardware/software. Acted as Subject Matter Expert (SME) for education/business cases. Led quality improvement initiatives and trained junior staff."
    }
  ];

  const education = [
    {
      degree: "Self-Guided Cybersecurity & AI Learning",
      school: "Independent Study & Hands-On Projects",
      year: "Jun 2025 - Present",
      description: "Learning by building. Focused on cybersecurity fundamentals, secure coding, threat detection, and AI/ML for security through practical application and continuous self-study."
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
            <button
              onClick={handleDownloadPDF}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 justify-center"
              aria-label="Download Teshera Kimbrough Resume PDF"
              title="Download Resume (PDF)"
            >
              <Download size={20} />
              Download Resume (PDF)
            </button>
            <Link 
              to="/resume"
              className="border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 justify-center"
            >
              <ExternalLink size={20} />
              View Resume Page
            </Link>
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
                    <p className="text-blue-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{edu.description}</p>
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
