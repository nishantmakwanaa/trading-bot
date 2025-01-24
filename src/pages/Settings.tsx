import { Monitor, Bell, Lock, Palette, Database, Activity } from 'lucide-react';

export default function Settings() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Customize your trading pattern recognition experience</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">Display Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-gray-700">Chart Theme</span>
                <select aria-label="Chart Theme" className="px-3 py-2 rounded-lg border border-gray-200">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-gray-700">Default Timeframe</span>
                <select aria-label="Default Timeframe" className="px-3 py-2 rounded-lg border border-gray-200">
                  <option>1 Hour</option>
                  <option>4 Hours</option>
                  <option>1 Day</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">Analysis Settings</h2>
            </div>
            <div className="space-y-4">
              {[
                'Enable Pattern Recognition',
                'Show Confidence Indicators',
                'Auto-refresh Charts',
                'Show Trade Suggestions',
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="text-gray-700">{setting}</span>
                  <button
                    className="w-12 h-6 rounded-full bg-indigo-600"
                    aria-label={`Toggle ${setting}`}
                    title={`Toggle ${setting}`}
                  >
                    <div className="w-4 h-4 rounded-full bg-white transform translate-x-7" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Settings</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Notifications', icon: Bell },
                { name: 'Security', icon: Lock },
                { name: 'Appearance', icon: Palette },
                { name: 'Data', icon: Database },
              ].map((item, index) => (
                <button
                  key={index}
                  className="p-4 rounded-xl border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-indigo-600 mb-2" />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">System Info</h2>
            <div className="space-y-4">
              {[
                { label: 'Version', value: '2.1.0' },
                { label: 'Last Updated', value: '2 hours ago' },
                { label: 'Status', value: 'Active' },
              ].map((info, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{info.label}</span>
                  <span className="font-medium text-gray-900">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}