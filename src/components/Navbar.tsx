
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#resume', label: 'Resume' },
    { href: '#current-work', label: 'Current Work' },
    { href: '#contact', label: 'Contact' },
  ];

  const pdfUrl = '/teshera-kimbrough-ai-resume.pdf';

  const handleNavClick = (href: string, label: string) => {
    if (label === 'Resume') {
      // Open PDF in new tab for Resume menu item
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
  };

  const smoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a 
            href="/" 
            className="flex items-center group" 
            aria-label="Home"
            title="Teshera Kimbrough – AI Security Engineer Portfolio"
          >
            <div className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/70 backdrop-blur-sm'
            } group-hover:bg-black/80`}>
              <div className="text-white font-bold text-lg tracking-tight">
                Teshera Kimbrough
                <span className="block text-xs text-gray-300 font-normal mt-0.5 group-hover:text-blue-300 transition-colors">
                  AI Security Engineer
                </span>
              </div>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.label === 'Resume' ? (
                <a
                  key={item.href}
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Teshera Kimbrough Resume PDF"
                  title="Download Resume (PDF)"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.href}
                  onClick={() => smoothScroll(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.label === 'Resume' ? (
                  <a
                    key={item.href}
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Teshera Kimbrough Resume PDF"
                    title="Download Resume (PDF)"
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => {
                      smoothScroll(item.href);
                      handleNavClick(item.href, item.label);
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
