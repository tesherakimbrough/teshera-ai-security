
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Resume from '@/components/Resume';
import SecurityReview from '@/components/SecurityReview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Resume />
      <SecurityReview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
