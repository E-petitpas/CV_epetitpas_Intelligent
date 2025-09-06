import React from 'react';
import { Button } from '../../../shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/ui/card';
import { Users, FileText, CreditCard, BarChart } from 'lucide-react';
import { NavigationProps } from '../../../shared/types';

export function AdminPage({ navigateTo, user }: NavigationProps) {
  if (!user?.isAdmin) {
    navigateTo('dashboard');
    return null;
  }

  // Mock data for demonstration
  const stats = {
    totalUsers: 1247,
    totalDocuments: 5891,
    totalRevenue: 12450,
    activeSubscriptions: 334
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#004D9D]">Administration</h1>
            <Button variant="outline" onClick={() => navigateTo('dashboard')}>
              Retour au Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% ce mois</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documents créés</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalDocuments.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+8% ce mois</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenus</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()}€</div>
              <p className="text-xs text-muted-foreground">+15% ce mois</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Abonnements actifs</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeSubscriptions}</div>
              <p className="text-xs text-muted-foreground">+5% ce mois</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Utilisateurs récents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Jean Dupont', email: 'jean@email.com', plan: 'Premium' },
                  { name: 'Marie Martin', email: 'marie@email.com', plan: 'Standard' },
                  { name: 'Pierre Durand', email: 'pierre@email.com', plan: 'Gratuit' }
                ].map((user, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {user.plan}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start">
                Gérer les utilisateurs
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Voir les paiements
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Statistiques détaillées
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Configuration système
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}