import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart2, Bell, Settings, LogOut } from 'lucide-react';

export default function SideNavbar() {
  return (
    <nav className="h-full w-64 bg-white shadow-lg fixed top-0 left-0 flex flex-col p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-indigo-600">TradeSmart</h1>
        <p className="text-gray-600 text-sm">Pattern Recognition</p>
      </div>
      <ul className="space-y-4 flex-1">
        {[
          { to: '/', label: 'Dashboard', icon: <Home /> },
          { to: '/analysis', label: 'Analysis', icon: <BarChart2 /> },
          { to: '/patterns', label: 'Patterns', icon: <BarChart2 /> },
          { to: '/notifications', label: 'Notifications', icon: <Bell /> },
          { to: '/settings', label: 'Settings', icon: <Settings /> },
        ].map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg text-gray-800 transition-colors ${
                  isActive ? 'bg-indigo-100 text-indigo-600 font-semibold' : 'hover:bg-gray-100'
                }`
              }
            >
              {React.cloneElement(item.icon, { className: 'w-5 h-5 mr-3' })}
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="flex items-center px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors">
        <LogOut className="w-5 h-5 mr-3" />
        Logout
      </button>
    </nav>
  );
}