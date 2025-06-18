
import React from 'react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  const pdfUrl = '/teshera-kimbrough-ai-resume.pdf';

  const handleOpenPDF = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
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
                onClick={handleOpenPDF}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                aria-label="Download Teshera Kimbrough Resume PDF"
                title="Download Teshera Kimbrough Resume (PDF)"
              >
                <Download size={16} />
                Download Resume (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Teshera Kimbrough</h1>
          <p className="text-xl text-gray-400 mb-6">AI & Cybersecurity Resume</p>
        </div>

        {/* PDF Viewer Section */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="text-center mb-6">
            <button
              onClick={handleOpenPDF}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors justify-center font-semibold text-lg mb-6"
              aria-label="View Teshera Kimbrough Resume PDF in new tab"
              title="View Full Resume (PDF)"
            >
              <ExternalLink size={24} />
              View Full Resume (PDF)
            </button>

            {/* PDF Preview iframe */}
            <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '600px' }}>
              <iframe
                src={`${pdfUrl}#toolbar=0`}
                className="w-full h-full border-0"
                title="Teshera Kimbrough Resume PDF Preview"
                loading="lazy"
              />
            </div>

            {/* Fallback download link */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-500 mb-2">Having trouble viewing the PDF?</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
                aria-label="Direct link to download Teshera Kimbrough Resume PDF"
              >
                Click here to download the resume directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
