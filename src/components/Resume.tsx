
import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: "Senior AI Security Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Led development of AI-powered cybersecurity solutions, reducing threat detection time by 60% while maintaining zero false positives."
    },
    {
      title: "Cybersecurity Developer",
      company: "SecureNet Inc.",
      period: "2020 - 2022",
      description: "Built privacy-first security monitoring tools and implemented end-to-end encryption protocols for enterprise clients."
    },
    {
      title: "Machine Learning Engineer",
      company: "DataSafe Technologies",
      period: "2018 - 2020",
      description: "Developed local-first ML models for sensitive data processing, ensuring compliance with GDPR and CCPA regulations."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      school: "Stanford University",
      year: "2018"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "UC Berkeley",
      year: "2016"
    }
  ];

  const certifications = [
    "Certified Information Systems Security Professional (CISSP)",
    "Certified Ethical Hacker (CEH)",
    "AWS Certified Security - Specialty",
    "Google Cloud Professional Machine Learning Engineer"
  ];

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-400 mb-8">
            A comprehensive overview of my professional experience and achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
              <Download size={20} />
              Download PDF
            </button>
            <button className="border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-800 transition-all duration-200 flex items-center gap-2">
              <ExternalLink size={20} />
              View Full Resume
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

          {/* Education & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
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
              <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-3">
                    <p className="text-gray-300 text-sm">{cert}</p>
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
