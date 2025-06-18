
import React, { useState } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Secure, Intelligent Tools Together</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you're hiring for an AI security role, looking to collaborate on a privacy-first product,
            or seeking a consultant with real hands-on experience — I'd love to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to build something meaningful together? Let's discuss how we can create technology that 
              respects privacy while delivering powerful functionality.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:hello@tesherakimbrough.dev"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <Mail size={20} className="text-blue-400" />
                <span>hello@tesherakimbrough.dev</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tesherakimbrough"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <Linkedin size={20} className="text-blue-400" />
                <span>linkedin.com/in/tesherakimbrough</span>
              </a>
            </div>

            <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-2">Available For</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Full-Time AI & Security Roles</li>
                <li>• Privacy-First SaaS Development</li>
                <li>• Security Consulting & GRC Support</li>
                <li>• Technical Collaboration & Mentorship</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
