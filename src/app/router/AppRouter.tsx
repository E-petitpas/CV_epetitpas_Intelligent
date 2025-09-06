import React, { useState } from 'react';
import { Page } from '../../shared/types';
import { useAuth } from '../providers/AuthProvider';

// Feature imports
import { HomePage } from '../../features/auth/pages/HomePage';
import { SignupPage } from '../../features/auth/pages/SignupPage';
import { DashboardPage } from '../../features/dashboard/pages/DashboardPage';
import { ProfilePage } from '../../features/profile/pages/ProfilePage';
import { GenerationPage } from '../../features/generation/pages/GenerationPage';
import { CoverLetterPage } from '../../features/generation/pages/CoverLetterPage';
import { PaymentPage } from '../../features/payment/pages/PaymentPage';
import { PricingPage } from '../../features/payment/pages/PricingPage';
import { HistoryPage } from '../../features/history/pages/HistoryPage';
import { AdminPage } from '../../features/admin/pages/AdminPage';

export function AppRouter() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { user, setUser, logout } = useAuth();

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} user={user} />;
      case 'signup':
        return <SignupPage navigateTo={navigateTo} setUser={setUser} />;
      case 'dashboard':
        return <DashboardPage navigateTo={navigateTo} user={user} logout={logout} />;
      case 'generation':
        return <GenerationPage navigateTo={navigateTo} user={user} />;
      case 'payment':
        return <PaymentPage navigateTo={navigateTo} user={user} setUser={setUser} />;
      case 'history':
        return <HistoryPage navigateTo={navigateTo} user={user} />;
      case 'admin':
        return <AdminPage navigateTo={navigateTo} user={user} />;
      case 'profile':
        return <ProfilePage navigateTo={navigateTo} user={user} setUser={setUser} />;
      case 'cover-letter':
        return <CoverLetterPage navigateTo={navigateTo} user={user} />;
      case 'pricing':
        return <PricingPage navigateTo={navigateTo} user={user} setUser={setUser} />;
      default:
        return <HomePage navigateTo={navigateTo} user={user} />;
    }
  };

  return renderCurrentPage();
}