import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '../types';

const defaultUser: User = {
  email: 'x@gmail.com',
  name: 'Demo User',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
  preferences: {
    theme: 'light',
    notifications: true,
    autoRefresh: true,
  },
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    if (email === 'x@gmail.com' && password === '123456') {
      setUser(defaultUser);
      localStorage.setItem('user', JSON.stringify(defaultUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (email: string, name: string) => {
    if (email === 'x@gmail.com') {
      throw new Error('User already exists');
    }
    const newUser: User = {
      email,
      name,
      preferences: {
        theme: 'light',
        notifications: true,
        autoRefresh: true,
      },
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const resetPassword = async (email: string) => {
    if (email !== 'x@gmail.com') {
      throw new Error('User not found');
    }
    console.log('Password reset email sent to:', email);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}