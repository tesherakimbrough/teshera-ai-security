
import React, { useState } from 'react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '@/components/ui/loading-spinner';

const ResumePage = () => {
  const [pdfLoading, setPdfLoading] = useState(true);
  const pdfUrl = '/teshera-kimbrough-ai-resume.pdf';

  const handleOpenPDF = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const handlePdfLoad = () => {
    setPdfLoading(false);
  };

  const handlePdfError = () => {
    setPdfLoading(false);
    console.log('PDF failed to load');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Meta Information */}
      <title>Teshera Kimbrough – AI Security Engineer Resume</title>
      
      {/* Header with navigation */}
      <div className="bg-gray-900 border-b border-gray-800 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              aria-label="Go back to portfolio homepage"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleOpenPDF}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Teshera Kimbrough – AI Security Engineer</h1>
          <p className="text-xl text-gray-400 mb-6">Resume & Experience</p>
        </div>

        {/* PDF Viewer Section */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="text-center mb-6">
            <button
              onClick={handleOpenPDF}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors justify-center font-semibold text-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="View Teshera Kimbrough Resume PDF in new tab"
              title="View Full Resume (PDF)"
            >
              <ExternalLink size={24} />
              View Full Resume (PDF)
            </button>

            {/* PDF Preview with Loading State */}
            <div className="w-full bg-white rounded-lg overflow-hidden relative" style={{ height: '600px' }}>
              {pdfLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <LoadingSpinner size="lg" className="mx-auto mb-4" />
                    <p className="text-gray-600">Loading PDF preview...</p>
                  </div>
                </div>
              )}
              
              <object
                data={pdfUrl}
                type="application/pdf"
                className="w-full h-full"
                title="Teshera Kimbrough Resume PDF Preview"
                onLoad={handlePdfLoad}
                onError={handlePdfError}
              >
                {/* Fallback content when PDF can't be displayed */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-800">
                  <div className="text-center p-8">
                    <div className="mb-4">
                      <ExternalLink size={48} className="mx-auto text-gray-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">PDF Preview Not Available</h3>
                    <p className="text-gray-600 mb-4">Your browser doesn't support PDF preview in this view.</p>
                    <button
                      onClick={handleOpenPDF}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <ExternalLink size={20} />
                      Open PDF in New Tab
                    </button>
                  </div>
                </div>
              </object>
            </div>

            {/* Download link */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-500 mb-2">Having trouble viewing the PDF?</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
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
