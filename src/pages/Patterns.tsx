import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function Patterns() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Pattern Library</h1>
        <p className="text-gray-600">Browse and analyze detected trading patterns</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          { name: 'Head and Shoulders', type: 'Bearish', confidence: 89 },
          { name: 'Double Bottom', type: 'Bullish', confidence: 75 },
          { name: 'Bull Flag', type: 'Bullish', confidence: 62 },
          { name: 'Triangle', type: 'Neutral', confidence: 81 },
          { name: 'Cup and Handle', type: 'Bullish', confidence: 71 },
          { name: 'Double Top', type: 'Bearish', confidence: 68 },
        ].map((pattern, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{pattern.name}</h3>
              {pattern.type === 'Bullish' ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : pattern.type === 'Bearish' ? (
                <TrendingDown className="w-5 h-5 text-red-500" />
              ) : (
                <div className="w-5 h-5 rounded-full bg-gray-200" />
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Type</span>
                <span className={`font-medium ${
                  pattern.type === 'Bullish' ? 'text-green-600' :
                  pattern.type === 'Bearish' ? 'text-red-600' :
                  'text-gray-600'
                }`}>{pattern.type}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Confidence</span>
                <span className="font-medium text-indigo-600">{pattern.confidence}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full ${
                    pattern.confidence > 80 ? 'bg-green-500' :
                    pattern.confidence > 60 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${pattern.confidence}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}