import { BarChart2, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Trading Pattern Recognition</h1>
        <p className="text-gray-600">Real-time chart analysis and pattern detection</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Live Chart</h2>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Start Analysis
            </button>
          </div>
          <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
            <BarChart2 className="w-16 h-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Detected Patterns</h2>
          <div className="space-y-4">
            {[
              { pattern: 'Head and Shoulders', confidence: 89 },
              { pattern: 'Double Bottom', confidence: 75 },
              { pattern: 'Bull Flag', confidence: 62 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <h3 className="font-medium text-gray-900">{item.pattern}</h3>
                  <p className="text-sm text-gray-600">Confidence: {item.confidence}%</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  item.confidence > 80 ? 'bg-green-500' : 
                  item.confidence > 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Alerts</h2>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="space-y-4">
            {[
              { message: 'New pattern detected', time: '2 mins ago' },
              { message: 'High confidence signal', time: '15 mins ago' },
              { message: 'Market volatility alert', time: '1 hour ago' },
            ].map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">{alert.message}</p>
                  <p className="text-sm text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Analysis Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Patterns Detected', value: '124' },
              { label: 'Accuracy Rate', value: '87%' },
              { label: 'Active Alerts', value: '3' },
              { label: 'Processing Time', value: '0.3s' },
            ].map((stat, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}