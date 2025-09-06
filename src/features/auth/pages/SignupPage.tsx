import React, { useState } from 'react';
import { Button } from '../../../shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/ui/card';
import { Input } from '../../../shared/ui/input';
import { UserManagementProps } from '../../../shared/types';

export function SignupPage({ navigateTo, setUser }: UserManagementProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    setUser({
      id: '1',
      name: name || 'Utilisateur',
      email,
      subscription: 'free'
    });
    navigateTo('dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nom
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                  placeholder="Votre nom"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Mot de passe
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" className="w-full">
              {isLogin ? 'Se connecter' : 'Créer le compte'}
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <button
              type="button"
              className="text-sm text-[#004D9D] hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Créer un nouveau compte' : 'Déjà un compte ? Se connecter'}
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <Button 
              variant="outline" 
              onClick={() => navigateTo('home')}
              className="w-full"
            >
              Retour à l'accueil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}