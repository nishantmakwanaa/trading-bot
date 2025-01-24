export interface Pattern {
  id: string;
  type: 'HEAD_AND_SHOULDERS' | 'DOUBLE_TOP' | 'DOUBLE_BOTTOM' | 'FLAG' | 'PENNANT' | 'TRIANGLE';
  confidence: number;
  timestamp: string;
  coordinates: {
    start: { x: number; y: number };
    end: { x: number; y: number };
  };
}

export interface Analysis {
  id: string;
  patternId: string;
  prediction: string;
  accuracy: number;
  timestamp: string;
}

export interface Alert {
  id: string;
  type: 'SUCCESS' | 'WARNING' | 'ERROR';
  message: string;
  timestamp: string;
}

export interface User {
  email: string;
  name: string;
  avatar?: string;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    autoRefresh: boolean;
  };
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}