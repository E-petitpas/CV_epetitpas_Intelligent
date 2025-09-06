import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

export default function PricingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#004D9D]">Tarifs</h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choisissez le plan qui vous convient</h2>
          <p className="text-gray-600">Des solutions adaptées à tous vos besoins</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Gratuit</CardTitle>
              <p className="text-3xl font-bold">
                0€<span className="text-sm font-normal">/mois</span>
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">✓ 3 CV par mois</li>
                <li className="flex items-center">✓ Templates de base</li>
                <li className="flex items-center">✓ Export PDF</li>
              </ul>
              <Button className="w-full mt-6" variant="outline" onClick={() => navigate("/signup")}>
                Commencer gratuitement
              </Button>
            </CardContent>
          </Card>

          <Card className="border-orange-500 border-2 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
              Populaire
            </div>
            <CardHeader>
              <CardTitle>Standard</CardTitle>
              <p className="text-3xl font-bold">
                9,99€<span className="text-sm font-normal">/mois</span>
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">✓ CV illimités</li>
                <li className="flex items-center">✓ Templates premium</li>
                <li className="flex items-center">✓ Lettres de motivation</li>
                <li className="flex items-center">✓ Optimisation ATS</li>
              </ul>
              <Button className="w-full mt-6" onClick={() => navigate("/payment")} style={{ backgroundColor: "#FF6600" }}>
                Choisir Standard
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <p className="text-3xl font-bold">
                19,99€<span className="text-sm font-normal">/mois</span>
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">✓ Tout du plan Standard</li>
                <li className="flex items-center">✓ Templates exclusifs</li>
                <li className="flex items-center">✓ Support prioritaire</li>
                <li className="flex items-center">✓ Analytics avancés</li>
              </ul>
              <Button className="w-full mt-6" onClick={() => navigate("/payment")} style={{ backgroundColor: "#004D9D" }}>
                Choisir Premium
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
