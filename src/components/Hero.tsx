
import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building AI Security Tools
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> That Respect Privacy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creating local-first applications that keep data safe — no cloud required.
            Blending GRC, IAM, and AI into usable tools for the future of security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#projects"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Explore My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-900 transition-all duration-200"
            >
              Let's Build Together
            </a>
          </div>

          <div className="mb-8 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <p className="text-lg text-blue-400 font-medium mb-2">🔍 Open to Opportunities</p>
            <p className="text-gray-300">
              Available for full-time roles, contract work, and collaborations in AI Security, Privacy, or Infrastructure. Let's build something meaningful.
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/tesherak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/tesherakimbrough"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
