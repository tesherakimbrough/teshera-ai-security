
import React from 'react';
import { Lock, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const SecurityReview = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="text-green-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Security Review Summary</h2>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This site has been comprehensively reviewed and hardened for security best practices. No critical or medium-risk vulnerabilities were found. 
            The project implements robust input sanitization, secure form handling, and follows enterprise-level frontend security standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Security Strengths */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-green-400" size={24} />
              <h3 className="text-xl font-bold text-white">Security Strengths</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Comprehensive input sanitization preventing XSS attacks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>No backend or authentication system — minimal attack surface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>No API keys, secrets, or credentials in code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>All external links use rel="noopener noreferrer"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Real-time input validation with error handling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Clean, well-isolated development configuration (Vite, TypeScript)</span>
              </li>
            </ul>
          </div>

          {/* Implemented Security Measures */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-blue-400" size={24} />
              <h3 className="text-xl font-bold text-white">Implemented Security Measures</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Multi-layer input sanitization (script tags, JavaScript URLs, event handlers)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Form validation with proper error handling and user feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Secure external form submission with proper error boundaries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>TypeScript strict mode for enhanced type safety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Toast notification system for secure user feedback</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="text-yellow-400" size={24} />
            <h3 className="text-xl font-bold text-white">Future Enhancements</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Add Content Security Policy (CSP) headers via hosting provider</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Implement X-Frame-Options and X-Content-Type-Options headers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Add rate limiting for contact form submissions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Implement integrity checks for static assets</span>
            </li>
          </ul>
        </div>

        {/* Risk Assessment Table */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="text-blue-400" size={24} />
            <h3 className="text-xl font-bold text-white">Risk Assessment</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Issue Type</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Findings</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">Critical</td>
                  <td className="py-3 px-4">None</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-green-400">Secure</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">High</td>
                  <td className="py-3 px-4">None</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-green-400">Secure</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">Medium</td>
                  <td className="py-3 px-4">None</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-green-400">Secure</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">Low</td>
                  <td className="py-3 px-4">4 future enhancements</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <AlertCircle className="text-yellow-400" size={16} />
                    <span className="text-yellow-400">Optional</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Overall Risk</td>
                  <td className="py-3 px-4">Enterprise-ready security</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="font-semibold text-green-400">Very Low</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Implementation Details */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="text-green-400" size={24} />
            <h3 className="text-xl font-bold text-white">Security Implementation Details</h3>
          </div>
          <div className="text-gray-300 space-y-3">
            <p><strong className="text-white">Input Sanitization:</strong> Multi-layer protection against XSS attacks with script tag removal, JavaScript URL filtering, and event handler stripping.</p>
            <p><strong className="text-white">Form Security:</strong> Real-time validation, secure error handling, and proper data sanitization before processing.</p>
            <p><strong className="text-white">Type Safety:</strong> Comprehensive TypeScript implementation with strict type checking to prevent runtime errors.</p>
            <p><strong className="text-white">External Resources:</strong> All external links properly secured with noopener and noreferrer attributes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityReview;
