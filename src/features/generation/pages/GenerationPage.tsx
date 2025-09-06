import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

export default function GenerationPage() {
  const [jobOffer, setJobOffer] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCV, setGeneratedCV] = useState("")
  const navigate = useNavigate()

  const handleGenerate = async () => {
    setIsGenerating(true)
    // TODO: appeler ton backend/IA
    setTimeout(() => {
      setGeneratedCV("CV généré avec succès !")
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold text-[#004D9D]">Génération de CV</h1>
            <Button variant="outline" onClick={() => navigate(-1)}>
              Retour
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Offre d'emploi</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="h-64 w-full resize-none rounded-md border p-3"
                placeholder="Collez ici l'offre d'emploi..."
                value={jobOffer}
                onChange={(e) => setJobOffer(e.target.value)}
              />
              <Button
                onClick={handleGenerate}
                disabled={!jobOffer || isGenerating}
                className="mt-4 w-full bg-[#004D9D]"
              >
                {isGenerating ? "Génération en cours..." : "Générer le CV"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aperçu du CV</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-64 items-center justify-center rounded-md border-2 border-dashed border-gray-300">
                {generatedCV ? (
                  <div className="text-center">
                    <p className="font-medium text-green-600">{generatedCV}</p>
                    <div className="mt-4 space-x-2">
                      <Button size="sm">Télécharger PDF</Button>
                      <Button size="sm" variant="outline">
                        Télécharger DOCX
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">L'aperçu du CV apparaîtra ici</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
