import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  Zap, 
  Users, 
  TrendingUp, 
  DollarSign,
  FileText,
  Search,
  MoreVertical,
  Shield,
  Eye,
  Download,
  Settings
} from 'lucide-react';
import type { Page, AppState } from '../App';

interface AdminPageProps {
  navigateTo: (page: Page) => void;
  user: AppState['user'];
}

interface UserData {
  id: string;
  name: string;
  email: string;
  subscription: 'free' | 'standard' | 'premium';
  cvGenerated: number;
  joinedAt: Date;
  lastActive: Date;
  status: 'active' | 'banned' | 'inactive';
}

interface PaymentData {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  plan: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
}

export function AdminPage({ navigateTo, user }: AdminPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('dashboard');

  if (!user || !user.isAdmin) {
    navigateTo('dashboard');
    return null;
  }

  // Données fictives pour l'administration
  const usersData: UserData[] = [
    {
      id: '1',
      name: 'Jean Dupont',
      email: 'jean@exemple.com',
      subscription: 'premium',
      cvGenerated: 24,
      joinedAt: new Date('2024-01-01'),
      lastActive: new Date('2024-01-15'),
      status: 'active'
    },
    {
      id: '2',
      name: 'Marie Martin',
      email: 'marie@exemple.com',
      subscription: 'standard',
      cvGenerated: 12,
      joinedAt: new Date('2024-01-05'),
      lastActive: new Date('2024-01-14'),
      status: 'active'
    },
    {
      id: '3',
      name: 'Pierre Moreau',
      email: 'pierre@exemple.com',
      subscription: 'free',
      cvGenerated: 3,
      joinedAt: new Date('2024-01-10'),
      lastActive: new Date('2024-01-12'),
      status: 'active'
    },
    {
      id: '4',
      name: 'Sophie Bernard',
      email: 'sophie@exemple.com',
      subscription: 'standard',
      cvGenerated: 8,
      joinedAt: new Date('2024-01-08'),
      lastActive: new Date('2024-01-10'),
      status: 'inactive'
    }
  ];

  const paymentsData: PaymentData[] = [
    {
      id: '1',
      userId: '1',
      userName: 'Jean Dupont',
      amount: 19.99,
      plan: 'Premium',
      date: new Date('2024-01-15'),
      status: 'completed'
    },
    {
      id: '2',
      userId: '2',
      userName: 'Marie Martin',
      amount: 9.99,
      plan: 'Standard',
      date: new Date('2024-01-14'),
      status: 'completed'
    },
    {
      id: '3',
      userId: '4',
      userName: 'Sophie Bernard',
      amount: 9.99,
      plan: 'Standard',
      date: new Date('2024-01-13'),
      status: 'pending'
    }
  ];

  const stats = {
    totalUsers: usersData.length,
    activeUsers: usersData.filter(u => u.status === 'active').length,
    premiumUsers: usersData.filter(u => u.subscription === 'premium').length,
    standardUsers: usersData.filter(u => u.subscription === 'standard').length,
    freeUsers: usersData.filter(u => u.subscription === 'free').length,
    totalRevenue: paymentsData.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0),
    totalCVs: usersData.reduce((sum, u) => sum + u.cvGenerated, 0),
    monthlyRevenue: 156.45 // Fictif
  };

  const filteredUsers = usersData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case 'premium': return 'bg-[#004D9D] text-white';
      case 'standard': return 'bg-[#FF6600] text-white';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'banned': return 'bg-red-100 text-red-800';
      case 'inactive': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
                onClick={() => navigateTo('dashboard')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Dashboard</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded bg-[#004D9D] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-[#004D9D]">CV Intelligent IA</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge className="bg-purple-100 text-purple-800">
                <Shield className="w-3 h-3 mr-1" />
                Admin
              </Badge>
              <span className="font-medium">{user.name}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Panneau d'Administration
          </h1>
          <p className="text-lg text-gray-600">
            Gérez les utilisateurs, surveillez les performances et analysez les données
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Tableau de bord</TabsTrigger>
            <TabsTrigger value="users">Utilisateurs</TabsTrigger>
            <TabsTrigger value="payments">Paiements</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Utilisateurs totaux</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalUsers}</div>
                  <p className="text-xs text-muted-foreground">
                    {stats.activeUsers} actifs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Revenus mensuels</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.monthlyRevenue}€</div>
                  <p className="text-xs text-muted-foreground">
                    +12% vs mois dernier
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">CV générés</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalCVs}</div>
                  <p className="text-xs text-muted-foreground">
                    Ce mois-ci
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm">Taux de conversion</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23%</div>
                  <p className="text-xs text-muted-foreground">
                    Gratuit → Payant
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Subscription Distribution */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Répartition des abonnements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#004D9D] rounded-full"></div>
                        <span>Premium</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>{stats.premiumUsers}</span>
                        <Badge className="bg-[#004D9D] text-white">
                          {Math.round((stats.premiumUsers / stats.totalUsers) * 100)}%
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#FF6600] rounded-full"></div>
                        <span>Standard</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>{stats.standardUsers}</span>
                        <Badge style={{ backgroundColor: '#FF6600' }} className="text-white">
                          {Math.round((stats.standardUsers / stats.totalUsers) * 100)}%
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <span>Gratuit</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>{stats.freeUsers}</span>
                        <Badge variant="secondary">
                          {Math.round((stats.freeUsers / stats.totalUsers) * 100)}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Activité récente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">Nouvel utilisateur Premium inscrit</p>
                        <p className="text-xs text-gray-500">Il y a 2 heures</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FF6600] rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">15 CV générés aujourd'hui</p>
                        <p className="text-xs text-gray-500">Il y a 4 heures</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#004D9D] rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">Pic d'activité détecté</p>
                        <p className="text-xs text-gray-500">Hier</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            {/* User Search */}
            <Card>
              <CardContent className="py-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Rechercher un utilisateur..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Users List */}
            <Card>
              <CardHeader>
                <CardTitle>Liste des utilisateurs</CardTitle>
                <CardDescription>
                  {filteredUsers.length} utilisateur(s) trouvé(s)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredUsers.map((userData) => (
                    <div key={userData.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{userData.name}</h3>
                          <Badge className={getSubscriptionColor(userData.subscription)}>
                            {userData.subscription}
                          </Badge>
                          <Badge className={getStatusColor(userData.status)}>
                            {userData.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 grid grid-cols-1 md:grid-cols-3 gap-2">
                          <span>Email: {userData.email}</span>
                          <span>CV générés: {userData.cvGenerated}</span>
                          <span>Inscrit: {userData.joinedAt.toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Voir
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="w-4 h-4 mr-1" />
                          Gérer
                        </Button>
                        <Button size="sm" variant="outline">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transactions récentes</CardTitle>
                <CardDescription>
                  Revenus totaux: {stats.totalRevenue.toFixed(2)}€
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentsData.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{payment.userName}</h3>
                          <Badge className={getPaymentStatusColor(payment.status)}>
                            {payment.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          Plan {payment.plan} - {payment.date.toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-semibold text-lg">{payment.amount}€</div>
                        <div className="text-sm text-gray-500">
                          ID: {payment.id}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres de l'application</CardTitle>
                <CardDescription>
                  Configuration générale du système
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Limites système</h3>
                    <div className="space-y-2">
                      <Label>CV gratuits par mois</Label>
                      <Input defaultValue="3" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>Taille max fichier (MB)</Label>
                      <Input defaultValue="5" type="number" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Tarification</h3>
                    <div className="space-y-2">
                      <Label>Prix Standard (€/mois)</Label>
                      <Input defaultValue="9.99" type="number" step="0.01" />
                    </div>
                    <div className="space-y-2">
                      <Label>Prix Premium (€/mois)</Label>
                      <Input defaultValue="19.99" type="number" step="0.01" />
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button style={{ backgroundColor: '#004D9D' }}>
                    Sauvegarder les modifications
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Exporter les données
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}