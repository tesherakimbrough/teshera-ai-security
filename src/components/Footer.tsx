
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Teshera Kimbrough – AI Security Engineer</h3>
            <p className="text-gray-400 leading-relaxed">
              Privacy-first tools built by a real-world cybersecurity mind.
              Building secure solutions. Real skills. Ready to contribute.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#resume" className="block text-gray-400 hover:text-white transition-colors">Resume</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-4">
              🔍 Available for full-time roles, contract work, and collaborations in AI Security, Privacy, or Infrastructure. Let's build something meaningful.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/tesherakimbrough"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/tesherakimbrough"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hello@tesherakimbrough.dev"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Teshera Kimbrough. Built with integrity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
