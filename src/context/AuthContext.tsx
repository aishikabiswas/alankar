
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This is a mock implementation that simulates authentication
// Replace with actual authentication when connecting to Supabase
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for logged in user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user from local storage', error);
      }
    }
    setLoading(false);
  }, []);

  // Save user to local storage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock login - replace with actual auth
      // Simulate a network request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // For demo purposes, any email/password combination works
      // In a real app, this would validate against a backend
      setUser({
        id: '123',
        email,
        name: email.split('@')[0]
      });
    } catch (error) {
      console.error('Login failed', error);
      throw new Error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, name?: string) => {
    setLoading(true);
    try {
      // Mock signup - replace with actual auth
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser({
        id: Date.now().toString(),
        email,
        name: name || email.split('@')[0]
      });
    } catch (error) {
      console.error('Signup failed', error);
      throw new Error('Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      signup,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
