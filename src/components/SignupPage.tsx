import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Zap } from 'lucide-react';
import type { Page, AppState } from '../App';

interface SignupPageProps {
  navigateTo: (page: Page) => void;
  setUser: (user: AppState['user']) => void;
}

export function SignupPage({ navigateTo, setUser }: SignupPageProps) {
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    
    // Simulation d'inscription
    const newUser = {
      id: Date.now().toString(),
      name: signupForm.name,
      email: signupForm.email,
      subscription: 'free' as const
    };
    
    setUser(newUser);
    navigateTo('dashboard');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation de connexion
    const user = {
      id: '1',
      name: 'Utilisateur Demo',
      email: loginForm.email,
      subscription: 'free' as const
    };
    
    setUser(user);
    navigateTo('dashboard');
  };

  const handleSocialLogin = (provider: 'google' | 'linkedin') => {
    // Simulation de connexion sociale
    const user = {
      id: Date.now().toString(),
      name: `Utilisateur ${provider}`,
      email: `user@${provider}.com`,
      subscription: 'free' as const
    };
    
    setUser(user);
    navigateTo('dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigateTo('home')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retour</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded bg-[#004D9D] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-[#004D9D]">CV Intelligent IA</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Rejoignez CV Intelligent IA</CardTitle>
              <CardDescription>
                Créez votre compte ou connectez-vous pour commencer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signup" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signup">S'inscrire</TabsTrigger>
                  <TabsTrigger value="login">Se connecter</TabsTrigger>
                </TabsList>

                <TabsContent value="signup" className="space-y-4">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Jean Dupont"
                        value={signupForm.name}
                        onChange={(e) => setSignupForm(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Adresse email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jean@exemple.com"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Mot de passe</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm(prev => ({ ...prev, password: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      style={{ backgroundColor: '#FF6600' }}
                    >
                      Créer mon compte
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="login" className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="loginEmail">Adresse email</Label>
                      <Input
                        id="loginEmail"
                        type="email"
                        placeholder="jean@exemple.com"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="loginPassword">Mot de passe</Label>
                      <Input
                        id="loginPassword"
                        type="password"
                        placeholder="••••••••"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      style={{ backgroundColor: '#004D9D' }}
                    >
                      Se connecter
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Ou continuer avec</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleSocialLogin('google')}
                    className="w-full"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => handleSocialLogin('linkedin')}
                    className="w-full"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-gray-600">
                En vous inscrivant, vous acceptez nos{' '}
                <a href="#" className="text-[#004D9D] hover:underline">
                  Conditions d'utilisation
                </a>{' '}
                et notre{' '}
                <a href="#" className="text-[#004D9D] hover:underline">
                  Politique de confidentialité
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}