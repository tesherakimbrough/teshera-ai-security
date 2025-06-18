
import React from 'react';
import { ArrowLeft, Download, Printer, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPage1 = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/8bc7a535-32e4-42f0-9b01-abde77bec01b.png';
    link.download = 'Teshera_Kimbrough_Resume_Page1.png';
    link.click();
  };

  const handleDownloadPage2 = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/d8bd879e-5638-4c9e-9c65-ea785b946924.png';
    link.download = 'Teshera_Kimbrough_Resume_Page2.png';
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with navigation */}
      <div className="bg-gray-900 border-b border-gray-800 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleDownloadPage1}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Download size={16} />
                Page 1
              </button>
              <button
                onClick={handleDownloadPage2}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Download size={16} />
                Page 2
              </button>
              <a
                href="https://raw.githubusercontent.com/tesherakimbrough/teshera-secureworks/main/Teshera-Kimbrough-AI%20Engineer%20(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
              >
                <FileText size={16} />
                Download PDF
              </a>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                <Printer size={16} />
                Print
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-3xl font-bold mb-2">Teshera Kimbrough</h1>
          <p className="text-gray-400">AI & Cybersecurity Resume</p>
        </div>

        {/* Resume images - side by side on desktop, stacked on mobile */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/8bc7a535-32e4-42f0-9b01-abde77bec01b.png"
              alt="Teshera Kimbrough Resume - Page 1"
              className="w-full h-auto max-w-full object-contain cursor-pointer hover:opacity-95 transition-opacity"
              onClick={handleDownloadPage1}
              title="Click to download Page 1"
            />
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/d8bd879e-5638-4c9e-9c65-ea785b946924.png"
              alt="Teshera Kimbrough Resume - Page 2"
              className="w-full h-auto max-w-full object-contain cursor-pointer hover:opacity-95 transition-opacity"
              onClick={handleDownloadPage2}
              title="Click to download Page 2"
            />
          </div>
        </div>

        {/* Mobile download buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:hidden print:hidden">
          <button
            onClick={handleDownloadPage1}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors justify-center"
          >
            <Download size={20} />
            Download Page 1
          </button>
          <button
            onClick={handleDownloadPage2}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors justify-center"
          >
            <Download size={20} />
            Download Page 2
          </button>
          <a
            href="https://raw.githubusercontent.com/tesherakimbrough/teshera-secureworks/main/Teshera-Kimbrough-AI%20Engineer%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors justify-center"
          >
            <FileText size={20} />
            Download PDF
          </a>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors justify-center"
          >
            <Printer size={20} />
            Print Resume
          </button>
        </div>
      </div>

      {/* Print styles using standard CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            body { margin: 0; padding: 0; }
            .print\\:hidden { display: none !important; }
            img { max-width: 100% !important; height: auto !important; }
          }
        `
      }} />
    </div>
  );
};

export default ResumePage;
