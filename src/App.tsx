import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import Patterns from './pages/Patterns';
import Notifications from './pages/Notifications';
import AppSettings from './pages/Settings';
import SideNavbar from './components/SideNavbar';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNavbar />
      <main className="ml-64 flex-1 p-6">{children}</main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            }
          />
          <Route
            path="/analysis"
            element={
              <AppLayout>
                <Analysis />
              </AppLayout>
            }
          />
          <Route
            path="/patterns"
            element={
              <AppLayout>
                <Patterns />
              </AppLayout>
            }
          />
          <Route
            path="/notifications"
            element={
              <AppLayout>
                <Notifications />
              </AppLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <AppLayout>
                <AppSettings />
              </AppLayout>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;