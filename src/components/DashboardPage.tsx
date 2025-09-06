import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  Zap, 
  FileText, 
  History, 
  CreditCard, 
  Settings, 
  LogOut, 
  Plus,
  Crown,
  BarChart3,
  Mail
} from 'lucide-react';
import type { Page, AppState } from '../App';

interface DashboardPageProps {
  navigateTo: (page: Page) => void;
  user: AppState['user'];
  logout: () => void;
}

export function DashboardPage({ navigateTo, user, logout }: DashboardPageProps) {
  if (!user) {
    navigateTo('home');
    return null;
  }

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case 'premium': return 'bg-[#004D9D] text-white';
      case 'standard': return 'bg-[#FF6600] text-white';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getSubscriptionLabel = (subscription: string) => {
    switch (subscription) {
      case 'premium': return 'Premium';
      case 'standard': return 'Standard';
      default: return 'Gratuit';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-[#004D9D] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#004D9D]">CV Intelligent IA</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className={getSubscriptionColor(user.subscription || 'free')}>
                {user.subscription === 'premium' && <Crown className="w-3 h-3 mr-1" />}
                {getSubscriptionLabel(user.subscription || 'free')}
              </Badge>
              
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarFallback>
                    {user.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:block">{user.name}</span>
              </div>
              
              <Button variant="ghost" onClick={logout} className="text-red-600">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bonjour, {user.name?.split(' ')[0]} ! 👋
          </h1>
          <p className="text-lg text-gray-600">
            Prêt à créer votre prochain CV gagnant ?
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">CV générés</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 ce mois-ci
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Lettres motivation</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                +3 cette semaine
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Candidatures</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Cette semaine
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Taux de réponse</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <p className="text-xs text-muted-foreground">
                +15% vs moyenne
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Plan actuel</CardTitle>
              <Crown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">
                {getSubscriptionLabel(user.subscription || 'free')}
              </div>
              {user.subscription === 'free' && (
                <p className="text-xs text-muted-foreground">
                  2/3 CV utilisés
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Generate CV */}
          <Card className="border-[#004D9D] border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="w-5 h-5 text-[#004D9D]" />
                <span>Générer un nouveau CV</span>
              </CardTitle>
              <CardDescription>
                Créez un CV personnalisé en analysant une offre d'emploi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                style={{ backgroundColor: '#004D9D' }}
                onClick={() => navigateTo('generation')}
              >
                Commencer la génération
              </Button>
            </CardContent>
          </Card>

          {/* Generate Cover Letter */}
          <Card className="border-[#FF6600] border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#FF6600]" />
                <span>Générer une Lettre de Motivation</span>
              </CardTitle>
              <CardDescription>
                Créez une lettre de motivation percutante adaptée à l'offre
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                style={{ backgroundColor: '#FF6600' }}
                onClick={() => navigateTo('cover-letter')}
              >
                Créer ma lettre
              </Button>
            </CardContent>
          </Card>

          {/* Upgrade Plan */}
          {user.subscription === 'free' && (
            <Card className="border-[#FF6600] border-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="w-5 h-5 text-[#FF6600]" />
                  <span>Passer au plan Premium</span>
                </CardTitle>
                <CardDescription>
                  Débloquez toutes les fonctionnalités et créez des CV illimités
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  style={{ backgroundColor: '#FF6600' }}
                  onClick={() => navigateTo('payment')}
                >
                  Voir les plans
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Navigation Menu */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateTo('history')}>
            <CardHeader className="text-center">
              <History className="w-8 h-8 mx-auto mb-2 text-[#004D9D]" />
              <CardTitle className="text-lg">Historique</CardTitle>
              <CardDescription>
                Consultez vos CV générés
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateTo('payment')}>
            <CardHeader className="text-center">
              <CreditCard className="w-8 h-8 mx-auto mb-2 text-[#FF6600]" />
              <CardTitle className="text-lg">Abonnement</CardTitle>
              <CardDescription>
                Gérez votre plan
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateTo('profile')}>
            <CardHeader className="text-center">
              <Settings className="w-8 h-8 mx-auto mb-2 text-gray-600" />
              <CardTitle className="text-lg">Mon Profil</CardTitle>
              <CardDescription>
                Configurez votre profil
              </CardDescription>
            </CardHeader>
          </Card>

          {user.isAdmin && (
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigateTo('admin')}>
              <CardHeader className="text-center">
                <BarChart3 className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <CardTitle className="text-lg">Administration</CardTitle>
                <CardDescription>
                  Panneau d'admin
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-[#004D9D] rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">CV généré pour "Développeur Frontend - TechCorp"</p>
                  <p className="text-xs text-gray-500">Il y a 2 heures</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-[#FF6600] rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">Lettre de motivation créée</p>
                  <p className="text-xs text-gray-500">Hier</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">Profil mis à jour</p>
                  <p className="text-xs text-gray-500">Il y a 3 jours</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}