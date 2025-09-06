import React from 'react';
import { Button } from '../../../shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/ui/card';
import { UserManagementProps } from '../../../shared/types';

export function PaymentPage({ navigateTo, user, setUser }: UserManagementProps) {
  const handleSubscribe = (plan: 'free' | 'standard' | 'premium') => {
    if (setUser && user) {
      setUser({ ...user, subscription: plan });
    }
    navigateTo('dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#004D9D]">Abonnement</h1>
            <Button variant="outline" onClick={() => navigateTo('dashboard')}>
              Retour au Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Gratuit</CardTitle>
              <p className="text-2xl font-bold">0€/mois</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>✓ 3 CV par mois</li>
                <li>✓ Templates de base</li>
                <li>✓ Export PDF</li>
              </ul>
              <Button 
                className="w-full mt-4" 
                variant="outline"
                onClick={() => handleSubscribe('free')}
              >
                Plan actuel
              </Button>
            </CardContent>
          </Card>

          <Card className="border-orange-500 border-2">
            <CardHeader>
              <CardTitle>Standard</CardTitle>
              <p className="text-2xl font-bold">9,99€/mois</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>✓ CV illimités</li>
                <li>✓ Templates premium</li>
                <li>✓ Lettres de motivation</li>
                <li>✓ Optimisation ATS</li>
              </ul>
              <Button 
                className="w-full mt-4"
                style={{ backgroundColor: '#FF6600' }}
                onClick={() => handleSubscribe('standard')}
              >
                Souscrire
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <p className="text-2xl font-bold">19,99€/mois</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>✓ Tout du Standard</li>
                <li>✓ Templates exclusifs</li>
                <li>✓ Support prioritaire</li>
                <li>✓ Analytics avancés</li>
              </ul>
              <Button 
                className="w-full mt-4"
                style={{ backgroundColor: '#004D9D' }}
                onClick={() => handleSubscribe('premium')}
              >
                Souscrire
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}