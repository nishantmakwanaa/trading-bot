import { Bell, BellOff, Settings } from 'lucide-react';

export default function Notifications() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
        <p className="text-gray-600">Manage your alerts and notification preferences</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Notifications</h2>
            <div className="space-y-4">
              {[
                { title: 'New Pattern Detected', message: 'Head and Shoulders pattern detected with 89% confidence', time: '2 mins ago', type: 'success' },
                { title: 'High Confidence Signal', message: 'Double Bottom pattern forming on BTC/USD', time: '15 mins ago', type: 'warning' },
                { title: 'Market Volatility Alert', message: 'Unusual market movement detected', time: '1 hour ago', type: 'error' },
                { title: 'Analysis Complete', message: 'Chart analysis completed for selected timeframe', time: '2 hours ago', type: 'success' },
              ].map((notification, index) => (
                <div key={index} className={`p-4 rounded-xl border ${
                  notification.type === 'success' ? 'border-green-100 bg-green-50' :
                  notification.type === 'warning' ? 'border-yellow-100 bg-yellow-50' :
                  'border-red-100 bg-red-50'
                }`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{notification.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    </div>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Alert Settings</h2>
              <Settings className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-4">
              {[
                { name: 'Pattern Detection', icon: Bell, enabled: true },
                { name: 'Market Volatility', icon: Bell, enabled: true },
                { name: 'Price Alerts', icon: BellOff, enabled: false },
                { name: 'Trading Signals', icon: Bell, enabled: true },
                { name: 'News Updates', icon: BellOff, enabled: false },
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <setting.icon className={`w-5 h-5 ${setting.enabled ? 'text-indigo-600' : 'text-gray-400'}`} />
                    <span className={setting.enabled ? 'text-gray-900' : 'text-gray-500'}>{setting.name}</span>
                  </div>
                  <button
                    title={setting.enabled ? 'Disable' : 'Enable'}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      setting.enabled ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform transform ${
                      setting.enabled ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}