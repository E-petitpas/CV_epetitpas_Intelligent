import React from 'react';
import { Button } from '../../../shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../shared/ui/card';
import { Badge } from '../../../shared/ui/badge';
import { CheckCircle, Zap, Users, Crown } from 'lucide-react';
import type { NavigationProps } from '../../../shared/types';

export function HomePage({ navigateTo, user }: NavigationProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-[#004D9D] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#004D9D]">CV Intelligent IA</span>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span>Bonjour, {user.name}</span>
                  <Button onClick={() => navigateTo('dashboard')}>Dashboard</Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={() => navigateTo('pricing')}>
                    Tarifs
                  </Button>
                  <Button variant="outline" onClick={() => navigateTo('signup')}>
                    Connexion
                  </Button>
                  <Button onClick={() => navigateTo('signup')} style={{ backgroundColor: '#FF6600' }}>
                    S'inscrire
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004D9D] to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Créez un CV professionnel en quelques minutes avec l'IA
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Notre intelligence artificielle génère automatiquement votre CV et lettre de motivation 
            personnalisés selon l'offre d'emploi. Augmentez vos chances de décrocher l'entretien !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigateTo('signup')}
              style={{ backgroundColor: '#FF6600' }}
              className="text-lg px-8 py-3"
            >
              Commencer gratuitement
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-[#004D9D]"
            >
              Voir la démo
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir CV Intelligent IA ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une solution complète pour optimiser vos candidatures avec l'intelligence artificielle
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#004D9D] rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Génération instantanée</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  L'IA analyse l'offre d'emploi et génère automatiquement un CV et une lettre 
                  de motivation adaptés en quelques secondes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Optimisation ATS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Vos documents sont optimisés pour passer les filtres des systèmes de 
                  recrutement automatisés (ATS).
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#004D9D] rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Personnalisation avancée</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Chaque document est personnalisé selon votre profil, vos compétences 
                  et les exigences spécifiques du poste.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choisissez votre plan</h2>
            <p className="text-lg text-gray-600 mb-4">Des solutions adaptées à tous vos besoins de recherche d'emploi</p>
            <Button 
              variant="outline" 
              className="border-[#004D9D] text-[#004D9D] hover:bg-[#004D9D] hover:text-white"
              onClick={() => navigateTo('pricing')}
            >
              Voir tous les tarifs
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Gratuit</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">0€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>3 CV par mois</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Templates de base</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Export PDF</span>
                </div>
                <Button 
                  className="w-full mt-6" 
                  variant="outline"
                  onClick={() => navigateTo('signup')}
                >
                  Commencer
                </Button>
              </CardContent>
            </Card>

            {/* Standard Plan */}
            <Card className="relative border-[#FF6600] border-2">
              <Badge 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: '#FF6600' }}
              >
                Populaire
              </Badge>
              <CardHeader>
                <CardTitle className="text-center">Standard</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">9,99€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>CV illimités</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Templates premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Lettres de motivation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Optimisation ATS</span>
                </div>
                <Button 
                  className="w-full mt-6"
                  style={{ backgroundColor: '#FF6600' }}
                  onClick={() => navigateTo('payment')}
                >
                  Choisir Standard
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-center space-x-2">
                  <Crown className="w-5 h-5 text-[#004D9D]" />
                  <CardTitle className="text-center">Premium</CardTitle>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold">19,99€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Tout du plan Standard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Templates exclusifs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Support prioritaire</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Analytics avancés</span>
                </div>
                <Button 
                  className="w-full mt-6"
                  style={{ backgroundColor: '#004D9D' }}
                  onClick={() => navigateTo('payment')}
                >
                  Choisir Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#004D9D] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à transformer votre recherche d'emploi ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers de candidats qui ont déjà trouvé leur emploi de rêve
          </p>
          <Button 
            size="lg"
            style={{ backgroundColor: '#FF6600' }}
            className="text-lg px-8 py-3"
            onClick={() => navigateTo('signup')}
          >
            Commencer maintenant
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded bg-[#004D9D] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CV Intelligent IA</span>
            </div>
            <p className="text-gray-400">
              © 2024 CV Intelligent IA. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}