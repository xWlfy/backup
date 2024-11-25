// AuthProvider.tsx
import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase.config';
import { signInWithPopup, signOut, User } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';
import { AuthContext } from './authContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<null | User>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigation.navigate('BottomTabs');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert('Sign-in failed. Please try again.');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};