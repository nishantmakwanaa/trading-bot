import { useNavigate } from 'react-router-dom';
import { User, Settings, Bell, LogOut, ChevronDown, BarChart2, TrendingUp, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="w-6 h-6" />
              </button>
              
              <div className="relative">
                <button className="flex items-center space-x-3 focus:outline-none">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`}
                    alt={user.name}
                  />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Patterns', value: '156', icon: TrendingUp, color: 'text-purple-600' },
            { label: 'Success Rate', value: '89%', icon: BarChart2, color: 'text-green-600' },
            { label: 'Active Alerts', value: '12', icon: AlertTriangle, color: 'text-yellow-600' },
            { label: 'Trading Days', value: '45', icon: User, color: 'text-blue-600' },
          ].map((stat, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-lg rounded-2xl">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                      <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity & Settings */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Recent Activity */}
          <div className="bg-white overflow-hidden shadow-lg rounded-2xl">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              <div className="mt-6 flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  {[
                    { title: 'Pattern Detected', desc: 'Head and Shoulders pattern found', time: '2 hours ago' },
                    { title: 'Alert Triggered', desc: 'Price target reached for BTC/USD', time: '5 hours ago' },
                    { title: 'Analysis Complete', desc: 'Weekly market analysis report', time: '1 day ago' },
                  ].map((activity, index) => (
                    <li key={index} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                          <p className="text-sm text-gray-500">{activity.desc}</p>
                        </div>
                        <div className="flex-shrink-0 text-sm text-gray-500">{activity.time}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Settings */}
          <div className="bg-white overflow-hidden shadow-lg rounded-2xl">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Quick Settings</h2>
              <div className="mt-6 space-y-4">
                {[
                  { name: 'Email Notifications', enabled: true },
                  { name: 'Trading Alerts', enabled: true },
                  { name: 'Auto-refresh Charts', enabled: false },
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{setting.name}</span>
                    <button
                      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ${
                        setting.enabled ? 'bg-indigo-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                          setting.enabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            onClick={() => navigate('/settings')}
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Settings className="mr-2 h-5 w-5 text-gray-500" />
            Account Settings
          </button>
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Sign Out
          </button>
        </div>
      </main>
    </div>
  );
}