import React from 'react';
import { Button } from '../../../shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/ui/card';
import { FileText, User, History, Settings, LogOut } from 'lucide-react';
import { UserManagementProps } from '../../../shared/types';

export function DashboardPage({ navigateTo, user, logout }: UserManagementProps) {
  if (!user) {
    navigateTo('home');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#004D9D]">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span>Bonjour, {user.name}</span>
              <Button variant="outline" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Generate CV Card */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" 
                onClick={() => navigateTo('generation')}>
            <CardHeader>
              <div className="w-12 h-12 bg-[#004D9D] rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Générer un CV</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Créez un nouveau CV adapté à une offre d'emploi spécifique avec l'IA.
              </p>
            </CardContent>
          </Card>

          {/* Cover Letter Card */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigateTo('cover-letter')}>
            <CardHeader>
              <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Lettre de motivation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Générez une lettre de motivation personnalisée avec l'IA.
              </p>
            </CardContent>
          </Card>

          {/* Profile Card */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigateTo('profile')}>
            <CardHeader>
              <div className="w-12 h-12 bg-[#004D9D] rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Mon Profil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Configurez vos informations personnelles et professionnelles.
              </p>
            </CardContent>
          </Card>

          {/* History Card */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigateTo('history')}>
            <CardHeader>
              <div className="w-12 h-12 bg-[#004D9D] rounded-lg flex items-center justify-center mb-4">
                <History className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Historique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Consultez et téléchargez vos CV et lettres précédemment créés.
              </p>
            </CardContent>
          </Card>

          {/* Subscription Card */}
          <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigateTo('payment')}>
            <CardHeader>
              <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Abonnement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Plan actuel: <span className="font-semibold capitalize">{user.subscription}</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Gérez votre abonnement et vos paiements.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}