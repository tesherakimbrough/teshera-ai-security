
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
    { href: '#contact', label: 'Contact' },
  ];

  const pdfUrl = 'https://raw.githubusercontent.com/tesherakimbrough/teshera-secureworks/main/public/Teshera%20Kimbrough%20AI%20Resume.pdf';

  const handleNavClick = (href: string, label: string) => {
    if (label === 'Resume') {
      // Open PDF in new tab for Resume menu item
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <div className={`p-2 pl-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/70 backdrop-blur-sm'
            }`}>
              <img 
                src="/lovable-uploads/b073c3f5-865d-445c-afeb-c085505e9e98.png" 
                alt="Teshera SecureWorks Logo" 
                className="h-24 w-auto transition-opacity duration-200 hover:opacity-80"
              />
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
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
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
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => handleNavClick(item.href, item.label)}
                  >
                    {item.label}
                  </a>
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
