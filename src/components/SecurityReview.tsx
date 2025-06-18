
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
            This site has been reviewed for security best practices. No critical or medium-risk vulnerabilities were found. 
            It follows secure frontend development standards with proper handling of links, configurations, and static assets.
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
                <span>No sensitive data processed or stored</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Clean, well-isolated development configuration (Vite, TypeScript)</span>
              </li>
            </ul>
          </div>

          {/* Optional Enhancements */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-yellow-400" size={24} />
              <h3 className="text-xl font-bold text-white">Optional Enhancements Suggested</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Add Content Security Policy (CSP) headers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Add X-Frame-Options and X-Content-Type-Options headers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Tighten TypeScript settings (e.g. strictNullChecks)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>If contact form is implemented, ensure proper input validation</span>
              </li>
            </ul>
          </div>
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
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">Critical</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span>None</span>
                    <CheckCircle className="text-green-400" size={16} />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">Medium</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span>None</span>
                    <CheckCircle className="text-green-400" size={16} />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">Low</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span>4 optional</span>
                    <CheckCircle className="text-green-400" size={16} />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Overall Risk</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="font-semibold text-green-400">Very Low</span>
                    <CheckCircle className="text-green-400" size={16} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityReview;
