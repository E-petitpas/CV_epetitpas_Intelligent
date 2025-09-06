export type Page = 'home' | 'signup' | 'dashboard' | 'generation' | 'payment' | 'history' | 'admin' | 'profile' | 'cover-letter' | 'pricing';

export interface User {
  id?: string;
  name?: string;
  email?: string;
  subscription?: 'free' | 'standard' | 'premium';
  isAdmin?: boolean;
}

export interface AppState {
  currentPage: Page;
  user: User | null;
}

export interface NavigationProps {
  navigateTo: (page: Page) => void;
  user: User | null;
}

export interface UserManagementProps extends NavigationProps {
  setUser: (user: User | null) => void;
  logout?: () => void;
}