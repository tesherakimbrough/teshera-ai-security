
import React from 'react';
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  const pdfUrl = 'https://tesherakimbrough.dev/Teshera%20Kimbrough%20AI%20Resume.pdf';

  const handleDownloadPDF = () => {
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
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Teshera Kimbrough Resume PDF"
                title="Download Teshera Kimbrough Resume (PDF)"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Download size={16} />
                Download Resume (PDF)
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Teshera Kimbrough Resume PDF in browser"
                title="View Resume in Browser"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                View in Browser
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resume content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Teshera Kimbrough</h1>
          <p className="text-xl text-gray-400 mb-6">AI & Cybersecurity Resume</p>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Download or view my comprehensive resume showcasing experience in AI development, 
            cybersecurity analysis, and hands-on project implementation.
          </p>
        </div>

        {/* PDF Embed Section */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-6">
            <FileText size={64} className="text-blue-400 mb-4" />
          </div>
          
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Resume PDF</h2>
            <p className="text-gray-400 mb-6">
              Click below to download or view the full resume in PDF format
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Teshera Kimbrough Resume PDF"
                title="Download Teshera Kimbrough Resume (PDF)"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors justify-center font-semibold"
              >
                <Download size={20} />
                Download Resume (PDF)
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Teshera Kimbrough Resume PDF in browser"
                title="View Resume in Browser"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors justify-center font-semibold"
              >
                <ExternalLink size={20} />
                View in Browser
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-gray-400 text-sm">
          <p>This PDF contains my complete professional experience, skills, and project portfolio.</p>
        </div>
      </div>

      {/* Print styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            body { margin: 0; padding: 0; }
            .print\\:hidden { display: none !important; }
          }
        `
      }} />
    </div>
  );
};

export default ResumePage;
