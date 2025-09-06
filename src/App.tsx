import React, { useState } from 'react';
import './shared/styles/globals.css';
import { HomePage } from './components/HomePage';
import { SignupPage } from './components/SignupPage';
import { DashboardPage } from './components/DashboardPage';
import { GenerationPage } from './components/GenerationPage';
import { PaymentPage } from './components/PaymentPage';
import { HistoryPage } from './components/HistoryPage';
import { AdminPage } from './components/AdminPage';
import { ProfilePage } from './components/ProfilePage';
import { CoverLetterPage } from './components/CoverLetterPage';
import { PricingPage } from './components/PricingPage';

export type Page = 
  | 'home' 
  | 'signup' 
  | 'dashboard' 
  | 'generation' 
  | 'payment' 
  | 'history' 
  | 'admin' 
  | 'profile'
  | 'cover-letter'
  | 'pricing';

export interface User {
  id: string;
  name: string;
  email: string;
  subscription: 'free' | 'standard' | 'premium';
  isAdmin?: boolean;
}

export interface AppState {
  user: User | null;
  currentPage: Page;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>({
    user: null,
    currentPage: 'home'
  });

  const navigateTo = (page: Page) => {
    setAppState(prev => ({ ...prev, currentPage: page }));
  };

  const setUser = (user: User | null) => {
    setAppState(prev => ({ ...prev, user }));
  };

  const logout = () => {
    setUser(null);
    navigateTo('home');
  };

  const renderCurrentPage = () => {
    const props = {
      navigateTo,
      user: appState.user,
      setUser,
      logout
    };

    switch (appState.currentPage) {
      case 'home':
        return <HomePage {...props} />;
      case 'signup':
        return <SignupPage {...props} />;
      case 'dashboard':
        return <DashboardPage {...props} />;
      case 'generation':
        return <GenerationPage {...props} />;
      case 'payment':
        return <PaymentPage {...props} />;
      case 'history':
        return <HistoryPage {...props} />;
      case 'admin':
        return <AdminPage {...props} />;
      case 'profile':
        return <ProfilePage {...props} />;
      case 'cover-letter':
        return <CoverLetterPage {...props} />;
      case 'pricing':
        return <PricingPage {...props} />;
      default:
        return <HomePage {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderCurrentPage()}
    </div>
  );
}