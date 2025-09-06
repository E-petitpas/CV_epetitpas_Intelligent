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
  CheckCircle, 
  Crown, 
  CreditCard,
  Shield,
  Sparkles
} from 'lucide-react';
import type { Page, AppState } from '../App';

interface PaymentPageProps {
  navigateTo: (page: Page) => void;
  user: AppState['user'];
  setUser: (user: AppState['user']) => void;
}

type Plan = 'free' | 'standard' | 'premium';

export function PaymentPage({ navigateTo, user, setUser }: PaymentPageProps) {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('standard');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: user?.email || ''
  });

  if (!user) {
    navigateTo('home');
    return null;
  }

  const plans = {
    free: {
      name: 'Gratuit',
      price: { monthly: 0, yearly: 0 },
      features: [
        '3 CV par mois',
        'Templates de base',
        'Export PDF',
        'Support communautaire'
      ],
      color: '#6B7280',
      icon: Zap
    },
    standard: {
      name: 'Standard',
      price: { monthly: 9.99, yearly: 99.99 },
      features: [
        'CV illimités',
        'Templates premium',
        'Lettres de motivation',
        'Optimisation ATS',
        'Support email',
        'Historique complet'
      ],
      color: '#FF6600',
      icon: Sparkles,
      popular: true
    },
    premium: {
      name: 'Premium',
      price: { monthly: 19.99, yearly: 199.99 },
      features: [
        'Tout du plan Standard',
        'Templates exclusifs',
        'Support prioritaire',
        'Analytics avancés',
        'LinkedIn intégration',
        'Personal branding'
      ],
      color: '#004D9D',
      icon: Crown
    }
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation du paiement
    const updatedUser = {
      ...user,
      subscription: selectedPlan
    };
    
    setUser(updatedUser);
    alert(`Abonnement ${plans[selectedPlan].name} activé avec succès !`);
    navigateTo('dashboard');
  };

  const getYearlyDiscount = (plan: Plan) => {
    if (plan === 'free') return 0;
    const monthly = plans[plan].price.monthly * 12;
    const yearly = plans[plan].price.yearly;
    return Math.round(((monthly - yearly) / monthly) * 100);
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
              <span className="text-sm text-gray-600">Plan actuel:</span>
              <Badge className="capitalize">
                {user.subscription || 'free'}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Choisissez votre plan
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Débloquez tout le potentiel de CV Intelligent IA
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}>
              Mensuel
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#004D9D] focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}>
              Annuel
            </span>
            {billingPeriod === 'yearly' && (
              <Badge style={{ backgroundColor: '#FF6600' }} className="text-white">
                Économisez jusqu'à 17%
              </Badge>
            )}
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(plans).map(([planKey, plan]) => {
            const key = planKey as Plan;
            const Icon = plan.icon;
            const isSelected = selectedPlan === key;
            const isCurrentPlan = user.subscription === key;
            
            return (
              <Card 
                key={key}
                className={`relative cursor-pointer transition-all ${
                  isSelected ? 'border-2 border-[#004D9D] shadow-lg' : 'border hover:shadow-md'
                } ${plan.popular ? 'border-[#FF6600] border-2' : ''}`}
                onClick={() => handlePlanSelect(key)}
              >
                {plan.popular && (
                  <Badge 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                    style={{ backgroundColor: '#FF6600' }}
                  >
                    Populaire
                  </Badge>
                )}
                
                {isCurrentPlan && (
                  <Badge 
                    className="absolute -top-3 right-4"
                    style={{ backgroundColor: '#10B981' }}
                  >
                    Plan actuel
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon className="w-5 h-5" style={{ color: plan.color }} />
                    <CardTitle>{plan.name}</CardTitle>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-3xl font-bold">
                      {plan.price[billingPeriod]}€
                    </span>
                    <span className="text-gray-600">
                      /{billingPeriod === 'monthly' ? 'mois' : 'an'}
                    </span>
                    {billingPeriod === 'yearly' && key !== 'free' && (
                      <div className="text-sm text-green-600 font-medium">
                        -{getYearlyDiscount(key)}% vs mensuel
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full"
                    variant={isSelected ? 'default' : 'outline'}
                    style={isSelected ? { backgroundColor: plan.color } : {}}
                    disabled={isCurrentPlan}
                  >
                    {isCurrentPlan ? 'Plan actuel' : `Choisir ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Payment Form */}
        {selectedPlan !== 'free' && selectedPlan !== user.subscription && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>Informations de paiement</span>
              </CardTitle>
              <CardDescription>
                Abonnement {plans[selectedPlan].name} - {plans[selectedPlan].price[billingPeriod]}€/{billingPeriod === 'monthly' ? 'mois' : 'an'}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handlePayment} className="space-y-6">
                <Tabs defaultValue="card" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="card">Carte bancaire</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                  </TabsList>

                  <TabsContent value="card" className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={paymentForm.cardNumber}
                          onChange={(e) => setPaymentForm(prev => ({ ...prev, cardNumber: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Date d'expiration</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/AA"
                            value={paymentForm.expiryDate}
                            onChange={(e) => setPaymentForm(prev => ({ ...prev, expiryDate: e.target.value }))}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={paymentForm.cvv}
                            onChange={(e) => setPaymentForm(prev => ({ ...prev, cvv: e.target.value }))}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">Nom sur la carte</Label>
                        <Input
                          id="name"
                          placeholder="Jean Dupont"
                          value={paymentForm.name}
                          onChange={(e) => setPaymentForm(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email de facturation</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean@exemple.com"
                          value={paymentForm.email}
                          onChange={(e) => setPaymentForm(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="paypal" className="text-center py-8">
                    <Button 
                      type="button"
                      className="bg-[#0070BA] hover:bg-[#005EA6] text-white px-8"
                      onClick={handlePayment}
                    >
                      Payer avec PayPal
                    </Button>
                  </TabsContent>
                </Tabs>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>Paiement sécurisé par Stripe</span>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  style={{ backgroundColor: plans[selectedPlan].color }}
                >
                  Confirmer l'abonnement - {plans[selectedPlan].price[billingPeriod]}€
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  En confirmant, vous acceptez nos conditions d'utilisation. 
                  Vous pouvez annuler à tout moment depuis votre tableau de bord.
                </p>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Features Comparison */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Comparaison détaillée</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4">Fonctionnalités</th>
                      <th className="text-center p-4">Gratuit</th>
                      <th className="text-center p-4">Standard</th>
                      <th className="text-center p-4">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4">CV par mois</td>
                      <td className="text-center p-4">3</td>
                      <td className="text-center p-4">Illimité</td>
                      <td className="text-center p-4">Illimité</td>
                    </tr>
                    <tr>
                      <td className="p-4">Templates premium</td>
                      <td className="text-center p-4">❌</td>
                      <td className="text-center p-4">✅</td>
                      <td className="text-center p-4">✅</td>
                    </tr>
                    <tr>
                      <td className="p-4">Lettres de motivation</td>
                      <td className="text-center p-4">❌</td>
                      <td className="text-center p-4">✅</td>
                      <td className="text-center p-4">✅</td>
                    </tr>
                    <tr>
                      <td className="p-4">Support prioritaire</td>
                      <td className="text-center p-4">❌</td>
                      <td className="text-center p-4">❌</td>
                      <td className="text-center p-4">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}