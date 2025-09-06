import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Zap, 
  Check,
  Star,
  Crown,
  Sparkles
} from 'lucide-react';
import type { Page, AppState } from '../App';

interface PricingPageProps {
  navigateTo: (page: Page) => void;
  user: AppState['user'];
  setUser: (user: AppState['user']) => void;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonStyle: 'primary' | 'secondary' | 'premium';
  recommended?: boolean;
  icon: React.ReactNode;
}

export function PricingPage({ navigateTo }: PricingPageProps) {
  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Gratuit',
      price: '0 €',
      description: 'Pour découvrir nos services',
      features: [
        '1 CV IA offert (sans lettre IA)',
        'Modèles basiques',
        'Stockage 1 mois',
        'Téléchargements illimités'
      ],
      buttonText: 'Choisir ce plan',
      buttonStyle: 'secondary',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: 'unit',
      name: 'Achat unitaire',
      price: '0,30 €',
      description: 'Paiement à l\'usage',
      features: [
        '1 CV IA offert (sans lettre IA)',
        'Modèles basiques',
        'Stockage 1 mois',
        'Téléchargements illimités',
        '1 CV IA généré',
        '1 Lettre IA générée'
      ],
      buttonText: 'Choisir ce plan',
      buttonStyle: 'secondary',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'starter',
      name: 'Abonnement Starter',
      price: '0,99 €',
      period: '/mois',
      description: 'Idéal pour commencer',
      features: [
        '3 crédits inclus',
        'Stockage 1 mois',
        'Téléchargements illimités'
      ],
      buttonText: 'Choisir ce plan',
      buttonStyle: 'secondary',
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 'pro',
      name: 'Abonnement Pro',
      price: '2,99 €',
      period: '/mois',
      description: 'Pour les utilisateurs réguliers',
      features: [
        '12 crédits inclus',
        'Stockage 1 mois',
        'Téléchargements illimités'
      ],
      buttonText: 'Choisir ce plan',
      buttonStyle: 'secondary',
      icon: <Crown className="w-6 h-6" />
    },
    {
      id: 'standard',
      name: 'Abonnement Standard',
      price: '9,99 €',
      period: '/mois',
      description: 'Le plus populaire',
      features: [
        'CV illimités',
        'Templates premium',
        'Lettres de motivation',
        'Optimisation ATS'
      ],
      buttonText: 'Choisir ce plan',
      buttonStyle: 'premium',
      recommended: true,
      icon: <Crown className="w-6 h-6" />
    },
    {
      id: 'business',
      name: 'Abonnement Business',
      price: '19,99 €',
      period: '/mois',
      description: 'Pour les professionnels',
      features: [
        'Tout du plan Standard',
        'Templates exclusifs',
        'Support prioritaire',
        'Analytics avancés'
      ],
      buttonText: 'Choisir ce plan',
      buttonStyle: 'primary',
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const handleSelectPlan = (planId: string) => {
    if (planId === 'free') {
      if (user) {
        const updatedUser = { ...user, subscription: 'free' as const };
        setUser(updatedUser);
        navigateTo('dashboard');
      } else {
        navigateTo('signup');
      }
    } else {
      // Rediriger vers la page de paiement avec le plan sélectionné
      navigateTo('payment');
    }
  };

  const getButtonStyles = (style: string, recommended?: boolean) => {
    if (recommended) {
      return {
        backgroundColor: '#FF6600',
        color: 'white',
        className: 'w-full hover:opacity-90'
      };
    }
    
    switch (style) {
      case 'primary':
        return {
          backgroundColor: '#004D9D',
          color: 'white',
          className: 'w-full hover:opacity-90'
        };
      case 'premium':
        return {
          backgroundColor: '#FF6600',
          color: 'white',
          className: 'w-full hover:opacity-90'
        };
      default:
        return {
          backgroundColor: 'transparent',
          color: '#004D9D',
          className: 'w-full border border-[#004D9D] hover:bg-[#004D9D] hover:text-white'
        };
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
                onClick={() => navigateTo(user ? 'dashboard' : 'home')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{user ? 'Dashboard' : 'Accueil'}</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded bg-[#004D9D] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-[#004D9D]">CV Intelligent IA</span>
              </div>
            </div>
            
            {user && (
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="px-3 py-1">
                  {user.subscription === 'premium' ? 'Premium' : 
                   user.subscription === 'standard' ? 'Standard' : 'Gratuit'}
                </Badge>
                <span className="text-gray-600">Bonjour, {user.name}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tarifs – CV Intelligent IA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins et accélérez votre recherche d'emploi 
            avec notre intelligence artificielle
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const buttonStyles = getButtonStyles(plan.buttonStyle, plan.recommended);
            
            return (
              <Card 
                key={plan.id}
                className={`relative hover:shadow-lg transition-shadow ${
                  plan.recommended 
                    ? 'border-[#FF6600] border-2 shadow-lg' 
                    : 'border-gray-200'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge 
                      style={{ backgroundColor: '#FF6600' }}
                      className="text-white px-4 py-1 text-sm font-semibold"
                    >
                      Recommandé
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                    plan.recommended 
                      ? 'bg-[#FF6600] text-white' 
                      : 'bg-[#004D9D] text-white'
                  }`}>
                    {plan.icon}
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 text-lg">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  
                  <CardDescription className="mt-2 text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.recommended ? 'text-[#FF6600]' : 'text-[#004D9D]'
                        }`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={() => handleSelectPlan(plan.id)}
                    style={{
                      backgroundColor: buttonStyles.backgroundColor,
                      color: buttonStyles.color
                    }}
                    className={buttonStyles.className}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Qu'est-ce qu'un crédit ?
              </h3>
              <p className="text-gray-600">
                Un crédit vous permet de générer un CV ou une lettre de motivation. 
                Chaque génération consomme un crédit.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je changer de plan ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez upgrader ou downgrader votre plan à tout moment 
                depuis votre tableau de bord.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Les téléchargements sont-ils vraiment illimités ?
              </h3>
              <p className="text-gray-600">
                Oui, une fois votre CV ou lettre générée, vous pouvez la télécharger 
                autant de fois que vous le souhaitez.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Qu'est-ce que l'optimisation ATS ?
              </h3>
              <p className="text-gray-600">
                Nos CV sont optimisés pour passer les filtres des logiciels de 
                recrutement automatisés (ATS).
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à booster votre carrière ?
          </h2>
          <p className="text-gray-600 mb-6">
            Rejoignez des milliers de candidats qui ont trouvé leur emploi de rêve grâce à CV Intelligent IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleSelectPlan('free')}
              variant="outline"
              className="border-[#004D9D] text-[#004D9D] hover:bg-[#004D9D] hover:text-white"
            >
              Commencer gratuitement
            </Button>
            <Button
              onClick={() => handleSelectPlan('standard')}
              style={{ backgroundColor: '#FF6600' }}
              className="text-white hover:opacity-90"
            >
              Choisir le plan Standard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}