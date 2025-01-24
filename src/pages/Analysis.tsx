import React from 'react';
import { BarChart2, ZoomIn, Download } from 'lucide-react';

export default function Analysis() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Chart Analysis</h1>
        <p className="text-gray-600">Analyze trading patterns and market trends</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Analysis View</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ZoomIn className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <BarChart2 className="w-16 h-16 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Analysis Tools</h2>
            <div className="space-y-4">
              {[
                'Trend Lines',
                'Support/Resistance',
                'Fibonacci Retracement',
                'Moving Averages',
                'Volume Analysis',
              ].map((tool, index) => (
                <button
                  key={index}
                  className="w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}